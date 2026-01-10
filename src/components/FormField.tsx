import React from 'react';
import { FormField as FormFieldType } from '../config/form-config';
import DocumentUpload from './DocumentUpload';

interface FormFieldProps {
  field: FormFieldType;
  value: string | boolean | undefined;
  error?: string;
  onChange: (value: string | boolean | File | undefined) => void;
  onFileChange?: (files: File[]) => void;
  onRemoveFile?: () => void;
  files?: File[];
}

/**
 * Individual form field component that renders different input types
 * based on the field configuration.
 */
export const FormField: React.FC<FormFieldProps> = ({
  field,
  value,
  error,
  onChange,
  onFileChange,
  onRemoveFile,
  files,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    
    if (field.type === 'checkbox') {
      onChange((target as HTMLInputElement).checked);
    } else {
      onChange(target.value);
    }
  };

  const handleFileChange = (newFiles: File[]) => {
    if (onFileChange) {
      onFileChange(newFiles);
    }
  };

  const handleRemoveFile = () => {
    if (onRemoveFile) {
      onRemoveFile();
    }
  };

  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={value as string || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${field.id}-error` : field.helpText ? `${field.id}-help` : undefined}
          />
        );

      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.id}
            value={value as string || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${field.id}-error` : field.helpText ? `${field.id}-help` : undefined}
          />
        );

      case 'select':
        return (
          <select
            id={field.id}
            name={field.id}
            value={value as string || ''}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${field.id}-error` : field.helpText ? `${field.id}-help` : undefined}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id={field.id}
              name={field.id}
              checked={value as boolean || false}
              onChange={handleChange}
              className={`mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={error ? 'true' : 'false'}
            />
            <label htmlFor={field.id} className="text-gray-700 cursor-pointer leading-relaxed">
              {field.label}
            </label>
          </div>
        );

      case 'file':
        return (
          <DocumentUpload
            field={field}
            files={files || []}
            error={error}
            onChange={handleFileChange}
            onRemoveFile={onRemoveFile}
          />
        );

      default:
        return (
          <input
            type="text"
            id={field.id}
            name={field.id}
            value={value as string || ''}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        );
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {/* Label - don't show for checkbox as it's rendered inside */}
      {field.type !== 'checkbox' && (
        <label
          htmlFor={field.id}
          className="text-sm font-medium text-gray-700 font-semibold"
        >
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Render the appropriate input field */}
      {renderField()}

      {/* Error message */}
      {error && (
        <span
          id={`${field.id}-error`}
          className="text-sm text-red-600 flex items-center gap-1"
          role="alert"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </span>
      )}

      {/* Help text */}
      {field.helpText && !error && (
        <span
          id={`${field.id}-help`}
          className="text-sm text-gray-500"
        >
          {field.helpText}
        </span>
      )}
    </div>
  );
};

export default FormField;
