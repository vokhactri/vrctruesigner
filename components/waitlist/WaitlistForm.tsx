"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations/waitlistSchema";
import { submitWaitlist } from "@/lib/api/submitWaitlist";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { slideUpVariants } from "@/lib/animations/variants";
import { Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface WaitlistFormProps {
  contentOnly?: boolean;
}

/**
 * Waitlist form component with validation and submission handling
 */
export function WaitlistForm({ contentOnly = false }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitWaitlist(data);
      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Thank you! You have been added to the waitlist.",
        });
        reset(); // Clear form on success
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <div className={cn(
      "w-full",
      !contentOnly && "bg-[#0A0E1A] rounded-lg border border-vrc-border/50 p-8 sm:p-10 shadow-lg backdrop-blur-sm"
    )}>
      {/* Success Message */}
      {submitStatus.type === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-success/20 border border-success/30 rounded-md flex items-center gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
          <p className="text-success text-sm">{submitStatus.message}</p>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus.type === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-destructive/20 border border-destructive/30 rounded-md"
        >
          <p className="text-destructive text-sm">{submitStatus.message}</p>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-xs font-medium text-vrc-foreground-subtle uppercase tracking-wider">
              First Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="firstName"
              placeholder="First"
              {...register("firstName")}
              className="bg-white/5 border-white/10 focus:border-vrc-cyan/50 transition-colors"
            />
            {errors.firstName && <p className="text-[10px] text-destructive uppercase tracking-tight">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-xs font-medium text-vrc-foreground-subtle uppercase tracking-wider">
              Last Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="lastName"
              placeholder="Last"
              {...register("lastName")}
              className="bg-white/5 border-white/10 focus:border-vrc-cyan/50 transition-colors"
            />
            {errors.lastName && <p className="text-[10px] text-destructive uppercase tracking-tight">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-medium text-vrc-foreground-subtle uppercase tracking-wider">
            Work Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
            className="bg-white/5 border-white/10 focus:border-vrc-cyan/50 transition-colors"
          />
          {errors.email && <p className="text-[10px] text-destructive uppercase tracking-tight">{errors.email.message}</p>}
        </div>

        {/* Organization Name */}
        <div className="space-y-2">
          <label htmlFor="organizationName" className="block text-xs font-medium text-vrc-foreground-subtle uppercase tracking-wider">
            Organization Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="organizationName"
            placeholder="Organization Name"
            {...register("organizationName")}
            className="bg-white/5 border-white/10 focus:border-vrc-cyan/50 transition-colors"
          />
          {errors.organizationName && <p className="text-[10px] text-destructive uppercase tracking-tight">{errors.organizationName.message}</p>}
        </div>

        {/* Telegram Handle */}
        <div className="space-y-2">
          <label htmlFor="telegramHandle" className="block text-xs font-medium text-vrc-foreground-subtle uppercase tracking-wider">
            Telegram Handle
          </label>
          <Input
            id="telegramHandle"
            placeholder="@Handle"
            {...register("telegramHandle")}
            className="bg-white/5 border-white/10 focus:border-vrc-cyan/50 transition-colors"
          />
          {errors.telegramHandle && <p className="text-[10px] text-destructive uppercase tracking-tight">{errors.telegramHandle.message}</p>}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full text-sm font-bold uppercase tracking-widest py-4 mt-2 bg-vrc-cyan hover:bg-vrc-cyan-hover text-black transition-all"
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin mx-auto" />
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </form>
    </div>
  );

  if (contentOnly) {
    return formContent;
  }

  return (
    <section id="waitlist" className="py-20 lg:py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00D4FF]/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUpVariants}
          className="max-w-2xl mx-auto"
        >
          {formContent}
        </motion.div>
      </div>
    </section>
  );
}
