"use client";

import { motion } from "framer-motion";
import { fadeInVariants, slideUpVariants } from "@/lib/animations/variants";
import { cn } from "@/lib/utils/cn";

interface IntroSectionProps {
  contentOnly?: boolean;
}

/**
 * Intro section with headline and value proposition
 */
export function IntroSection({ contentOnly = false }: IntroSectionProps) {
  const content = (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className={cn(
        "space-y-6 lg:space-y-8",
        contentOnly ? "text-left" : "max-w-3xl mx-auto text-center"
      )}
    >
      <motion.h1
        variants={slideUpVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-vrc-cyan tracking-wide-headline"
      >
        TrueSigner
      </motion.h1>

      <motion.h2
        variants={slideUpVariants}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-vrc-foreground tracking-wide"
      >
        Deterministic Transaction Signing
      </motion.h2>

      <motion.p
        variants={slideUpVariants}
        className="text-lg sm:text-xl text-vrc-foreground-muted leading-relaxed"
      >
        Finance professionals rely on rule-based MPC/MultiSign wallets for transaction security.
        However, modern DeFi exploits often bypass wallet-level controls.
        Our signer stops malicious onchain actions before they can occur.
      </motion.p>
    </motion.div>
  );

  if (contentOnly) {
    return content;
  }

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Teal gradient glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#0088CC]/5"></div>

      {/* Subtle circuit board pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {content}
      </div>
    </section>
  );
}
