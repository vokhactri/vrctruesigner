/**
 * TypeScript types for waitlist form data
 */
export interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  organizationName: string;
  telegramHandle?: string;
}

export interface WaitlistSubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
}
