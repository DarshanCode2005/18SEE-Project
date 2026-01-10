/**
 * Conference Registration Form Configuration
 * 
 * This configuration drives the entire form structure including:
 * - Field definitions with validation rules
 * - Section organization
 * - Conditional field logic
 */

export interface FormField {
  id: string;
  section: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox' | 'file';
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  accept?: string; // For file fields: 'pdf,jpg,png' etc.
  maxSizeMB?: number; // For file fields
  condition?: {
    field: string;
    value: string;
  };
  validation?: {
    pattern?: string;
    message?: string;
  };
  helpText?: string;
}

export interface FormSection {
  id: string;
  title: string;
  description?: string;
}

export interface FormConfig {
  sections: FormSection[];
  fields: FormField[];
}

export const formConfig: FormConfig = {
  sections: [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Please provide your personal details for registration.'
    },
    {
      id: 'professional',
      title: 'Professional Details',
      description: 'Information about your academic/professional affiliation.'
    },
    {
      id: 'registration',
      title: 'Registration Category',
      description: 'Select your registration type and associated options.'
    },
    {
      id: 'documents',
      title: 'Document Uploads',
      description: 'Upload required documents based on your registration category.'
    },
    {
      id: 'billing',
      title: 'Billing Details',
      description: 'Invoice and billing information for registration.'
    },
    {
      id: 'consent',
      title: 'Consent',
      description: 'Please review and accept the terms and conditions.'
    }
  ],
  fields: [
    // === Personal Information Section ===
    {
      id: 'first_name',
      section: 'personal',
      label: 'First Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your first name'
    },
    {
      id: 'last_name',
      section: 'personal',
      label: 'Last Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your last name'
    },
    {
      id: 'email',
      section: 'personal',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'your.email@university.edu',
      validation: {
        pattern: '^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$',
        message: 'Please enter a valid email address'
      },
      helpText: 'All conference communications will be sent to this email.'
    },
    {
      id: 'phone',
      section: 'personal',
      label: 'Phone Number',
      type: 'tel',
      required: true,
      placeholder: '+91 98765 43210',
      validation: {
        pattern: '^[+]?[0-9\\s-()]{10,15}$',
        message: 'Please enter a valid phone number'
      }
    },
    {
      id: 'institution',
      section: 'personal',
      label: 'Institution / Organization',
      type: 'text',
      required: true,
      placeholder: 'University or Organization name'
    },
    {
      id: 'country',
      section: 'personal',
      label: 'Country',
      type: 'text',
      required: true,
      placeholder: 'Your country of residence'
    },

    // === Professional Details Section ===
    {
      id: 'job_title',
      section: 'professional',
      label: 'Job Title / Position',
      type: 'text',
      required: true,
      placeholder: 'e.g., Professor, PhD Student, Research Associate'
    },
    {
      id: 'department',
      section: 'professional',
      label: 'Department',
      type: 'text',
      required: true,
      placeholder: 'Your department'
    },
    {
      id: 'research_area',
      section: 'professional',
      label: 'Research Area',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select your research area' },
        { value: 'sustainable-energy', label: 'Sustainable Energy' },
        { value: 'power-systems', label: 'Power Systems' },
        { value: 'renewable-integration', label: 'Renewable Energy Integration' },
        { value: 'energy-storage', label: 'Energy Storage' },
        { value: 'smart-grid', label: 'Smart Grid Technologies' },
        { value: 'energy-policy', label: 'Energy Policy & Economics' },
        { value: 'electro-mobility', label: 'Electro-Mobility' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'is_student',
      section: 'professional',
      label: 'Are you a student?',
      type: 'checkbox',
      required: false
    },
    {
      id: 'supervisor_name',
      section: 'professional',
      label: 'Supervisor Name (if applicable)',
      type: 'text',
      required: false,
      placeholder: 'Your research supervisor',
      condition: {
        field: 'is_student',
        value: 'true'
      }
    },

    // === Registration Category Section ===
    {
      id: 'delegate_type',
      section: 'registration',
      label: 'Delegate Type',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select delegate type' },
        { value: 'academic', label: 'Academic / Researcher' },
        { value: 'student', label: 'Student' },
        { value: 'industry', label: 'Industry Professional' },
        { value: 'invited', label: 'Invited Speaker' },
        { value: 'reviewer', label: 'Scientific Committee / Reviewer' }
      ]
    },
    {
      id: 'attendance_mode',
      section: 'registration',
      label: 'Attendance Mode',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select attendance mode' },
        { value: 'physical', label: 'Physical (In-Person)' },
        { value: 'virtual', label: 'Virtual (Online)' }
      ]
    },
    {
      id: 'dietary_preference',
      section: 'registration',
      label: 'Dietary Preference',
      type: 'select',
      required: false,
      options: [
        { value: '', label: 'Select dietary preference' },
        { value: 'none', label: 'No specific requirement' },
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'halal', label: 'Halal' },
        { value: 'kosher', label: 'Kosher' },
        { value: 'jain', label: 'Jain' },
        { value: 'other', label: 'Other (please specify)' }
      ]
    },
    {
      id: 'dietary_other',
      section: 'registration',
      label: 'Specify Dietary Requirements',
      type: 'text',
      required: false,
      placeholder: 'Please describe your dietary requirements',
      condition: {
        field: 'dietary_preference',
        value: 'other'
      }
    },

    // === Document Uploads Section ===
    {
      id: 'abstract_file',
      section: 'documents',
      label: 'Abstract (for paper presenters)',
      type: 'file',
      required: false,
      accept: 'pdf',
      maxSizeMB: 5,
      condition: {
        field: 'delegate_type',
        value: 'academic'
      },
      helpText: 'Upload your abstract in PDF format. Max size: 5MB'
    },
    {
      id: 'student_id',
      section: 'documents',
      label: 'Student ID Card',
      type: 'file',
      required: false,
      accept: 'pdf,jpg,png',
      maxSizeMB: 5,
      condition: {
        field: 'delegate_type',
        value: 'student'
      },
      helpText: 'Upload a scanned copy of your student ID. Max size: 5MB'
    },
    {
      id: 'payment_receipt',
      section: 'documents',
      label: 'Payment Receipt',
      type: 'file',
      required: false,
      accept: 'pdf,jpg,png',
      maxSizeMB: 5,
      condition: {
        field: 'delegate_type',
        value: 'industry'
      },
      helpText: 'Upload your payment receipt. Max size: 5MB'
    },
    {
      id: 'invitation_letter',
      section: 'documents',
      label: 'Invitation Letter',
      type: 'file',
      required: false,
      accept: 'pdf',
      maxSizeMB: 5,
      condition: {
        field: 'delegate_type',
        value: 'invited'
      },
      helpText: 'Upload your invitation letter. Max size: 5MB'
    },

    // === Billing Details Section ===
    {
      id: 'billing_name',
      section: 'billing',
      label: 'Billing Name',
      type: 'text',
      required: true,
      placeholder: 'Name for invoice'
    },
    {
      id: 'billing_address',
      section: 'billing',
      label: 'Billing Address',
      type: 'textarea',
      required: true,
      placeholder: 'Full postal address for invoice'
    },
    {
      id: 'gst_number',
      section: 'billing',
      label: 'GST Number (for Indian delegates)',
      type: 'text',
      required: false,
      placeholder: '22AAAAA0000A1Z5',
      helpText: 'Optional for Indian participants'
    },
    {
      id: 'pan_number',
      section: 'billing',
      label: 'PAN Number',
      type: 'text',
      required: false,
      placeholder: 'AAAAA1234A',
      helpText: 'Optional for Indian participants'
    },
    {
      id: 'billing_country',
      section: 'billing',
      label: 'Billing Country',
      type: 'text',
      required: true,
      placeholder: 'Country for billing'
    },
    {
      id: 'po_number',
      section: 'billing',
      label: 'Purchase Order Number (if applicable)',
      type: 'text',
      required: false,
      placeholder: 'PO number for corporate billing'
    },

    // === Consent Section ===
    {
      id: 'terms_accepted',
      section: 'consent',
      label: 'I agree to the Terms and Conditions',
      type: 'checkbox',
      required: true,
      helpText: 'I have read and agree to the conference terms and conditions, cancellation policy, and data handling practices.'
    },
    {
      id: 'photo_consent',
      section: 'consent',
      label: 'I consent to being photographed/videotaped during the conference',
      type: 'checkbox',
      required: false,
      helpText: 'Conference photos may be used for promotional purposes.'
    },
    {
      id: 'newsletter_consent',
      section: 'consent',
      label: 'I would like to receive updates about future conferences',
      type: 'checkbox',
      required: false,
      helpText: 'Join our mailing list to stay informed about upcoming events.'
    },
    {
      id: 'additional_comments',
      section: 'consent',
      label: 'Additional Comments or Special Requirements',
      type: 'textarea',
      required: false,
      placeholder: 'Any special requirements, questions, or comments...'
    }
  ]
};
