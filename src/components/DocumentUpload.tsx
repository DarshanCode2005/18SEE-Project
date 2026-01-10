import React, { useCallback, useRef } from 'react';
import { FormField } from '../config/form-config';

interface DocumentUploadProps {
  field: FormField;
  files: File[];
  error?: string;
  onChange: (files: File[]) => void;
  onRemoveFile?: () => void;
}

/**
 * Document upload component that handles file selection,
 * validation, and display of uploaded files.
 * 
 * Features:
 * - Accepts PDF, JPG, PNG based on configuration
 * - Maximum file size validation (default 5MB)
 * - Shows filename with remove option
 * - Does NOT upload immediately - returns File objects
 */
export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  field,
  files,
  error,
  onChange,
  onRemoveFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Convert accept string to MIME types
  const getAcceptedTypes = () => {
    const types: string[] = [];
    const accept = field.accept?.toLowerCase() || '';
    
    if (accept.includes('pdf')) types.push('application/pdf');
    if (accept.includes('jpg') || accept.includes('jpeg')) {
      types.push('image/jpeg');
      types.push('image/jpg');
    }
    if (accept.includes('png')) types.push('image/png');
    
    // Fallback to all if none specified
    if (types.length === 0) {
      types.push('application/pdf', 'image/jpeg', 'image/png');
    }
    
    return types.join(',');
  };

  // Get max size in bytes
  const maxSizeBytes = (field.maxSizeMB || 5) * 1024 * 1024;

  // Handle file selection
  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      const newFiles: File[] = [];
      const errors: string[] = [];

      Array.from(selectedFiles).forEach((file) => {
        // Validate file size
        if (file.size > maxSizeBytes) {
          errors.push(
            `${file.name} exceeds maximum size of ${field.maxSizeMB || 5}MB`
          );
          return;
        }

        // Validate file type
        const validTypes = getAcceptedTypes().split(',');
        const fileType = file.type.toLowerCase();
        const isValidType = validTypes.some(
          (type) => fileType === type.toLowerCase()
        );

        if (!isValidType) {
          errors.push(
            `${file.name} is not an accepted file type. Allowed: ${field.accept?.toUpperCase() || 'PDF, JPG, PNG'}`
          );
          return;
        }

        newFiles.push(file);
      });

      if (errors.length > 0) {
        // In production, you might want to show these errors to the user
        console.warn('File validation errors:', errors);
      }

      if (newFiles.length > 0) {
        // Replace existing files (single file upload)
        onChange(newFiles);
      }

      // Reset input so same file can be selected again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    [field.accept, field.maxSizeMB, maxSizeBytes, onChange]
  );

  // Handle drag and drop
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const droppedFiles = e.dataTransfer.files;
      if (!droppedFiles || droppedFiles.length === 0) return;

      const newFiles: File[] = [];
      const errors: string[] = [];

      Array.from(droppedFiles).forEach((file) => {
        if (file.size > maxSizeBytes) {
          errors.push(
            `${file.name} exceeds maximum size of ${field.maxSizeMB || 5}MB`
          );
          return;
        }

        const validTypes = getAcceptedTypes().split(',');
        const fileType = file.type.toLowerCase();
        const isValidType = validTypes.some(
          (type) => fileType === type.toLowerCase()
        );

        if (!isValidType) {
          errors.push(
            `${file.name} is not an accepted file type`
          );
          return;
        }

        newFiles.push(file);
      });

      if (errors.length > 0) {
        console.warn('File validation errors:', errors);
      }

      if (newFiles.length > 0) {
        onChange(newFiles);
      }
    },
    [field.accept, field.maxSizeMB, maxSizeBytes, onChange]
  );

  // Handle drag over
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // Remove file
  const handleRemove = () => {
    onChange([]);
    onRemoveFile?.();
  };

  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get file icon based on type
  const getFileIcon = (file: File) => {
    if (file.type.includes('pdf')) {
      return (
        <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
          <path d="M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
          error
            ? 'border-red-400 bg-red-50'
            : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={getAcceptedTypes()}
          onChange={handleFileSelect}
          className="sr-only"
          aria-label={`Upload ${field.label}`}
          multiple={false}
        />

        {/* Upload icon */}
        <div className="flex flex-col items-center gap-2">
          <svg
            className={`w-10 h-10 ${error ? 'text-red-400' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-blue-600 hover:text-blue-500">
              Click to upload
            </span>{' '}
            or drag and drop
          </div>
          <p className="text-xs text-gray-500">
            {field.accept?.toUpperCase() || 'PDF, JPG, PNG'} up to{' '}
            {field.maxSizeMB || 5}MB
          </p>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-1 text-sm text-red-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </div>
      )}

      {/* Uploaded file(s) display */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              {/* File icon */}
              <div className="flex-shrink-0">{getFileIcon(file)}</div>

              {/* File info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(file.size)}
                </p>
              </div>

              {/* Remove button */}
              <button
                type="button"
                onClick={handleRemove}
                className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                aria-label={`Remove ${file.name}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
