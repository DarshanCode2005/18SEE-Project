/**
 * Conference Registration Form Configuration
 * 
 * This configuration drives the entire form structure including:
 * - Field definitions with validation rules
 * - Section organization
 * - Conditional field logic
 * - Document requirements based on delegate role, nationality, and membership
 */

// ============================================
// OPTION LISTS (Config-driven)
// ============================================

export const DELEGATE_ROLES = [
  { value: '', label: 'Select your role' },
  { value: 'student', label: 'Student' },
  { value: 'academic', label: 'Academic / Researcher' },
  { value: 'industry', label: 'Industry Professional' },
  { value: 'invited_speaker', label: 'Invited Speaker' },
  { value: 'committee', label: 'Scientific Committee / Reviewer' },
];

export const NATIONALITY_CATEGORIES = [
  { value: '', label: 'Select your nationality category' },
  { value: 'indian', label: 'Indian' },
  { value: 'saarc', label: 'SAARC' },
  { value: 'foreign', label: 'Foreign (Non-SAARC)' },
];

export const MEMBERSHIP_OPTIONS = [
  { value: '', label: 'Select membership status' },
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

// ============================================
// DOCUMENT CONFIGURATION
// ============================================

export interface DocumentConfig {
  id: string;
  label: string;
  accept: string;
  maxSizeMB: number;
  required: boolean;
  helpText: string;
}

/**
 * Document requirement rules based on selections.
 * Rules are evaluated in order - first matching rule applies.
 * 
 * Priority order (higher priority first):
 * 1. ISET Member = Yes (always required if member)
 * 2. Foreign (Non-SAARC) - requires passport
 * 3. SAARC (any role) - requires passport/national ID
 * 4. Indian + Student - requires student ID
 * 5. Indian + Non-student - institutional ID optional
 */
export interface DocumentRule {
  id: string;
  // Conditions that must ALL be met for this rule to apply
  conditions: {
    delegate_role?: string[];
    nationality_category?: string[];
    iset_member?: string[];
  };
  documents: DocumentConfig[];
}

export const DOCUMENT_RULES: DocumentRule[] = [
  // Rule 1: ISET Member = Yes (always required)
  {
    id: 'iset_membership_rule',
    conditions: {
      iset_member: ['yes'],
    },
    documents: [
      {
        id: 'iset_membership_proof',
        label: 'ISET Membership Proof',
        accept: 'pdf,jpg,png',
        maxSizeMB: 5,
        required: true,
        helpText: 'Upload your ISET membership card or certificate. Max size: 5MB',
      },
    ],
  },
  // Rule 2: Foreign (Non-SAARC) - requires passport
  {
    id: 'foreign_rule',
    conditions: {
      nationality_category: ['foreign'],
    },
    documents: [
      {
        id: 'passport',
        label: 'Passport',
        accept: 'pdf,jpg,png',
        maxSizeMB: 5,
        required: true,
        helpText: 'Upload a scanned copy of your passport. Max size: 5MB',
      },
    ],
  },
  // Rule 3: SAARC (any role) - requires passport or national ID
  {
    id: 'saarc_rule',
    conditions: {
      nationality_category: ['saarc'],
    },
    documents: [
      {
        id: 'passport_or_national_id',
        label: 'Passport or National ID',
        accept: 'pdf,jpg,png',
        maxSizeMB: 5,
        required: true,
        helpText: 'Upload your passport or national identity card. Max size: 5MB',
      },
    ],
  },
  // Rule 4: Indian + Student - requires student ID
  {
    id: 'indian_student_rule',
    conditions: {
      nationality_category: ['indian'],
      delegate_role: ['student'],
    },
    documents: [
      {
        id: 'student_id_card',
        label: 'Student ID Card',
        accept: 'pdf,jpg,png',
        maxSizeMB: 5,
        required: true,
        helpText: 'Upload a scanned copy of your student ID card. Max size: 5MB',
      },
    ],
  },
  // Rule 5: Indian + Non-student - institutional ID optional
  {
    id: 'indian_non_student_rule',
    conditions: {
      nationality_category: ['indian'],
      delegate_role: ['academic', 'industry', 'invited_speaker', 'committee'],
    },
    documents: [
      {
        id: 'institutional_id_card',
        label: 'Institutional ID Card',
        accept: 'pdf,jpg,png',
        maxSizeMB: 5,
        required: false,
        helpText: 'Upload your institutional ID card (optional but recommended for verification). Max size: 5MB',
      },
    ],
  },
];

// ============================================
// FORM FIELD TYPES
// ============================================

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

// ============================================
// MAIN FORM CONFIG
// ============================================

export const formConfig: {
  sections: FormSection[];
  fields: FormField[];
  documentRules: DocumentRule[];
} = {
  sections: [
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Please provide your personal details for registration.',
    },
    {
      id: 'professional',
      title: 'Professional Details',
      description: 'Information about your academic/professional affiliation.',
    },
    {
      id: 'registration',
      title: 'Registration Category',
      description: 'Select your role, nationality, and membership status.',
    },
    {
      id: 'documents',
      title: 'Supporting Documents',
      description: 'Upload required documents based on your registration category.',
    },
    {
      id: 'billing',
      title: 'Billing Details',
      description: 'Invoice and billing information for registration.',
    },
    {
      id: 'consent',
      title: 'Consent',
      description: 'Please review and accept the terms and conditions.',
    },
  ],
  fields: [
    // === Personal Information Section ===
    {
      id: 'first_name',
      section: 'personal',
      label: 'First Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your first name',
    },
    {
      id: 'last_name',
      section: 'personal',
      label: 'Last Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your last name',
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
        message: 'Please enter a valid email address',
      },
      helpText: 'All conference communications will be sent to this email.',
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
        message: 'Please enter a valid phone number',
      },
    },
    {
      id: 'institution',
      section: 'personal',
      label: 'Institution / Organization',
      type: 'text',
      required: true,
      placeholder: 'University or Organization name',
    },
    {
      id: 'country',
      section: 'personal',
      label: 'Country',
      type: 'text',
      required: true,
      placeholder: 'Your country of residence',
    },

    // === Professional Details Section ===
    {
      id: 'job_title',
      section: 'professional',
      label: 'Job Title / Position',
      type: 'text',
      required: true,
      placeholder: 'e.g., Professor, PhD Student, Research Associate',
    },
    {
      id: 'department',
      section: 'professional',
      label: 'Department',
      type: 'text',
      required: true,
      placeholder: 'Your department',
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
        { value: 'other', label: 'Other' },
      ],
    },

    // === Registration Category Section (NEW STRUCTURE) ===
    {
      id: 'delegate_role',
      section: 'registration',
      label: 'Delegate Role',
      type: 'select',
      required: true,
      options: DELEGATE_ROLES,
      helpText: 'Select your role at the conference',
    },
    {
      id: 'nationality_category',
      section: 'registration',
      label: 'Nationality Category',
      type: 'select',
      required: true,
      options: NATIONALITY_CATEGORIES,
      helpText: 'This determines your registration fee category',
    },
    {
      id: 'iset_member',
      section: 'registration',
      label: 'ISET Membership',
      type: 'select',
      required: true,
      options: MEMBERSHIP_OPTIONS,
      helpText: 'ISET members receive discounted registration fees',
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
        { value: 'virtual', label: 'Virtual (Online)' },
      ],
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
        { value: 'other', label: 'Other (please specify)' },
      ],
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
        value: 'other',
      },
    },

    // === Billing Details Section ===
    {
      id: 'billing_name',
      section: 'billing',
      label: 'Billing Name',
      type: 'text',
      required: true,
      placeholder: 'Name for invoice',
    },
    {
      id: 'billing_address',
      section: 'billing',
      label: 'Billing Address',
      type: 'textarea',
      required: true,
      placeholder: 'Full postal address for invoice',
    },
    {
      id: 'gst_number',
      section: 'billing',
      label: 'GST Number (for Indian delegates)',
      type: 'text',
      required: false,
      placeholder: '22AAAAA0000A1Z5',
      helpText: 'Optional for Indian participants',
    },
    {
      id: 'pan_number',
      section: 'billing',
      label: 'PAN Number',
      type: 'text',
      required: false,
      placeholder: 'AAAAA1234A',
      helpText: 'Optional for Indian participants',
    },
    {
      id: 'billing_country',
      section: 'billing',
      label: 'Billing Country',
      type: 'text',
      required: true,
      placeholder: 'Country for billing',
    },
    {
      id: 'po_number',
      section: 'billing',
      label: 'Purchase Order Number (if applicable)',
      type: 'text',
      required: false,
      placeholder: 'PO number for corporate billing',
    },

    // === Consent Section ===
    {
      id: 'terms_accepted',
      section: 'consent',
      label: 'I agree to the Terms and Conditions',
      type: 'checkbox',
      required: true,
      helpText: 'I have read and agree to the conference terms and conditions, cancellation policy, and data handling practices.',
    },
    {
      id: 'photo_consent',
      section: 'consent',
      label: 'I consent to being photographed/videotaped during the conference',
      type: 'checkbox',
      required: false,
      helpText: 'Conference photos may be used for promotional purposes.',
    },
    {
      id: 'newsletter_consent',
      section: 'consent',
      label: 'I would like to receive updates about future conferences',
      type: 'checkbox',
      required: false,
      helpText: 'Join our mailing list to stay informed about upcoming events.',
    },
    {
      id: 'additional_comments',
      section: 'consent',
      label: 'Additional Comments or Special Requirements',
      type: 'textarea',
      required: false,
      placeholder: 'Any special requirements, questions, or comments...',
    },
  ],

  // Document rules for dynamic document requirements
  documentRules: DOCUMENT_RULES,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get the required documents based on current form selections.
 * Evaluates all matching rules and returns combined documents.
 */
export function getRequiredDocuments(
  formData: Record<string, string | boolean | undefined>
): DocumentConfig[] {
  const documents: DocumentConfig[] = [];
  const seenIds = new Set<string>();

  for (const rule of DOCUMENT_RULES) {
    let ruleMatches = true;

    // Check all conditions for this rule
    if (rule.conditions.delegate_role) {
      const role = formData.delegate_role as string;
      if (!rule.conditions.delegate_role.includes(role)) {
        ruleMatches = false;
      }
    }

    if (ruleMatches && rule.conditions.nationality_category) {
      const nationality = formData.nationality_category as string;
      if (!rule.conditions.nationality_category.includes(nationality)) {
        ruleMatches = false;
      }
    }

    if (ruleMatches && rule.conditions.iset_member) {
      const membership = formData.iset_member as string;
      if (!rule.conditions.iset_member.includes(membership)) {
        ruleMatches = false;
      }
    }

    // If all conditions match, add this rule's documents
    if (ruleMatches) {
      for (const doc of rule.documents) {
        if (!seenIds.has(doc.id)) {
          documents.push(doc);
          seenIds.add(doc.id);
        }
      }
    }
  }

  return documents;
}

/**
 * Check if documents section should be visible.
 * Documents are shown when delegate_role AND nationality_category are selected.
 */
export function areDocumentsVisible(
  formData: Record<string, string | boolean | undefined>
): boolean {
  const role = formData.delegate_role as string;
  const nationality = formData.nationality_category as string;
  return !!(role && nationality);
}
