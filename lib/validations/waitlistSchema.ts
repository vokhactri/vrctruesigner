import { z } from 'zod';

/**
 * Zod schema for waitlist form validation
 */
export const waitlistSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name is required')
    .trim(),
  lastName: z
    .string()
    .min(2, 'Last name is required')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .trim()
    .refine(
      (email) => {
        // List of common personal email domains to reject
        const personalEmailDomains = [
          'gmail.com',
          'yahoo.com',
          'hotmail.com',
          'outlook.com',
          'live.com',
          'aol.com',
          'icloud.com',
          'mail.com',
          'protonmail.com',
          'yandex.com',
          'zoho.com',
          'gmx.com',
          'inbox.com',
          'me.com',
          'msn.com',
        ];

        const domain = email.split('@')[1]?.toLowerCase();
        return !personalEmailDomains.includes(domain);
      },
      'Please use your work email address'
    ),
  organizationName: z
    .string()
    .min(2, 'Organization name is required')
    .trim(),
  telegramHandle: z
    .string()
    .trim()
    .optional()
    .or(z.literal(''))
    .refine(
      (val) => !val || /^@[A-Za-z0-9_]{5,32}$/.test(val),
      'Invalid Telegram handle (e.g., @username, 5-32 characters)'
    ),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
