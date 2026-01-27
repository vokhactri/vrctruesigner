import { WaitlistFormData } from '@/types/waitlist';
import { waitlistSchema } from '@/lib/validations/waitlistSchema';

/**
 * API handler for form submission to Google Sheets
 * Currently a placeholder - Google Sheets integration TBD
 */
export async function submitWaitlist(
  data: WaitlistFormData
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    // Validate data
    const validatedData = waitlistSchema.parse(data);

    const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSetWMhGuodBs82byM3Pptsp7DoDR4K4VFNd5B1531Hc8P4cmg/formResponse';

    const formData = new URLSearchParams();
    formData.append('entry.1990205863', validatedData.firstName);
    formData.append('entry.954253996', validatedData.lastName);
    formData.append('entry.1127882988', validatedData.email);
    formData.append('entry.1828409517', validatedData.organizationName);
    formData.append('entry.598364122', validatedData.telegramHandle || '');

    // Submit to Google Form
    // Using no-cors because Google Forms doesn't return CORS headers
    await fetch(FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    // Since we use no-cors, we can't check the response status.
    // If fetch doesn't throw, we assume it was sent successfully.
    return {
      success: true,
      message: 'Thank you! You have been added to the waitlist.',
    };
  } catch (error) {
    console.error('Waitlist submission error:', error);
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message || 'Failed to submit form. Please try again.',
      };
    }
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

