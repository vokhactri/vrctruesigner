import { z } from 'zod';

/**
 * Zod schema for waitlist form validation
 */
export const waitlistSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .trim(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .trim(),
  email: z
    .string()
    .min(1, 'Work email is required')
    .email('Please enter a valid email address')
    .trim(),
  organizationName: z
    .string()
    .min(1, 'Organization name is required')
    .trim(),
  telegramHandle: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.startsWith('@'),
      'Telegram handle must start with @'
    )
    .transform((val) => val?.trim() || ''),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
