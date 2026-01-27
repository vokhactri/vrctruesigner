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
    .trim(),
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
