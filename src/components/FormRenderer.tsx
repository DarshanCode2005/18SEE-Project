import React, { useState, useCallback, useEffect } from 'react';
import { formConfig, FormField as FormFieldType } from '../config/form-config';
import FormField from './FormField';

/**
 * FormRenderer - Main form component that handles:
 * - Form state management (single object keyed by field.id)
 * - Document state management (separate File objects)
 * - Conditional field visibility
 * - Field validation
 * - Form submission
 */
interface FormRendererProps {
  onSubmit?: (data: FormData) => Promise<void>;
}

export const FormRenderer: React.FC<FormRendererProps> = ({ onSubmit }) => {
  // Form data - single object keyed by field.id
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  // Document data - separate from formData
  const [documents, setDocuments] = useState<Record<string, File[]>>({});
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({});
    setDocuments({});
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
  }, []);

  // Check if a field should be visible based on conditions
  const isFieldVisible = useCallback((field: FormFieldType): boolean => {
    if (!field.condition) return true;
    
    const conditionValue = formData[field.condition.field];
    
    // For checkbox fields, check if value is true
    if (conditionValue === true || conditionValue === 'true') {
      return field.condition.value === 'true';
    }
    
    return conditionValue === field.condition.value;
  }, [formData]);

  // Validate a single field
  const validateField = useCallback((field: FormFieldType): string | null => {
    const value = formData[field.id];
    const file = documents[field.id];

    // Check required for different field types
    if (field.required) {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'tel':
        case 'textarea':
        case 'select':
          if (!value || (typeof value === 'string' && value.trim() === '')) {
            return `${field.label} is required`;
          }
          break;
        case 'checkbox':
          if (!value) {
            return `You must accept ${field.label.toLowerCase().replace('i agree to ', '')}`;
          }
          break;
        case 'file':
          // Only validate file if field is visible and required
          if (isFieldVisible(field) && (!file || file.length === 0)) {
            return `${field.label} is required`;
          }
          break;
      }
    }

    // Pattern validation for text/email/tel fields
    if (value && field.validation?.pattern) {
      try {
        const regex = new RegExp(field.validation.pattern);
        if (!regex.test(value as string)) {
          return field.validation.message || `Invalid ${field.label.toLowerCase()}`;
        }
      } catch (e) {
        // Invalid regex pattern, skip validation
      }
    }

    // File size validation
    if (file && file.length > 0 && field.maxSizeMB) {
      const maxBytes = field.maxSizeMB * 1024 * 1024;
      if (file[0].size > maxBytes) {
        return `File exceeds maximum size of ${field.maxSizeMB}MB`;
      }
    }

    return null;
  }, [formData, documents, isFieldVisible]);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    formConfig.fields.forEach((field) => {
      if (isFieldVisible(field)) {
        const error = validateField(field);
        if (error) {
          newErrors[field.id] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validateField, isFieldVisible]);

  // Handle field value change
  const handleFieldChange = useCallback((fieldId: string, value: string | boolean | File | undefined) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));

    // Clear error when field changes
    if (errors[fieldId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  }, [errors]);

  // Handle file change
  const handleFileChange = useCallback((fieldId: string, files: File[]) => {
    setDocuments((prev) => ({
      ...prev,
      [fieldId]: files,
    }));

    // Clear error when file is uploaded
    if (errors[fieldId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  }, [errors]);

  // Handle file removal
  const handleRemoveFile = useCallback((fieldId: string) => {
    setDocuments((prev) => ({
      ...prev,
      [fieldId]: [],
    }));
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate form before submission
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorField);
      errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Build FormData for multipart/form-data submission
      const formDataToSend = new FormData();
      
      // Add form data as JSON string
      formDataToSend.append('form_data', JSON.stringify(formData));
      
      // Add documents
      Object.entries(documents).forEach(([fieldId, files]) => {
        files.forEach((file) => {
          formDataToSend.append(`documents_${fieldId}`, file);
        });
      });

      // Call onSubmit callback or make API call
      if (onSubmit) {
        await onSubmit(formDataToSend);
      } else {
        // Default API submission
        const response = await fetch('/api/register', {
          method: 'POST',
          body: formDataToSend,
        });

        if (!response.ok) {
          throw new Error('Registration failed. Please try again.');
        }
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Group fields by section
  const fieldsBySection = formConfig.fields.reduce((acc, field) => {
    const sectionId = field.section;
    if (!acc[sectionId]) {
      acc[sectionId] = [];
    }
    acc[sectionId].push(field);
    return acc;
  }, {} as Record<string, FormFieldType[]>);

  // Success state
  if (submitSuccess) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Registration Submitted Successfully!
          </h2>
          <p className="text-green-700 mb-6">
            You will receive an email after verification. Please check your inbox
            for confirmation and further instructions.
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Submit Another Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      {/* Global error message */}
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {submitError}
          </div>
        </div>
      )}

      {/* Render sections */}
      {formConfig.sections.map((section) => {
        const sectionFields = fieldsBySection[section.id] || [];
        const visibleFields = sectionFields.filter(isFieldVisible);

        // Skip rendering empty sections
        if (visibleFields.length === 0) return null;

        return (
          <div
            key={section.id}
            className="mb-8 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Section header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {section.description}
                </p>
              )}
            </div>

            {/* Section fields */}
            <div className="p-6 space-y-6">
              {visibleFields.map((field) => (
                <div
                  key={field.id}
                  id={field.id}
                  className={`transition-opacity duration-200 ${
                    isFieldVisible(field) ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <FormField
                    field={field}
                    value={formData[field.id]}
                    error={errors[field.id]}
                    onChange={(value) => handleFieldChange(field.id, value)}
                    onFileChange={(files) => handleFileChange(field.id, files)}
                    onRemoveFile={() => handleRemoveFile(field.id)}
                    files={documents[field.id]}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Submit button */}
      <div className="flex justify-end pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-md font-medium transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Registration'
          )}
        </button>
      </div>

      {/* Required fields note */}
      <p className="text-sm text-gray-500 text-center mt-4">
        <span className="text-red-500">*</span> Required fields
      </p>
    </form>
  );
};

export default FormRenderer;
