"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Transaction Initiated",
    description: "All transactions begin with stringent verification through the zero-trust model.",
  },
  {
    title: "TrueSigner Verify",
    description: "TrueSigner validate transactions using protocol specific predefined rules.",
  },
  {
    title: "Rule-Based Approval",
    description: "Transactions must meet all criteria, including intent, otherwise, they are blocked.",
  },
  {
    title: "Transaction Execution",
    description: "Only approved transactions are executed, ensuring deterministic outcomes.",
  },
];

export function TransactionFlow() {
  return (
    <div className="w-full space-y-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">TrueSigner Transaction Flow</h2>
      </div>

      <div className="relative">
        {/* Desktop View (Horizontal) */}
        <div className="hidden md:block relative pt-16">
          {/* Main Connector Line (Background) */}
          <div className="absolute top-[32px] left-0 w-full h-[1px] bg-white/10" />
          
          {/* Animated Highlight (Background) - Positioned on the line */}
          <motion.div
            className="absolute top-[31.5px] left-0 h-[2px] bg-vrc-cyan shadow-[0_0_15px_#00D4FF] z-0"
            initial={{ left: "0%", width: "0%", opacity: 0 }}
            animate={{
              left: ["0%", "0%", "80%", "100%"],
              width: ["0%", "20%", "20%", "0%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="grid grid-cols-4 gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                {/* Indicator (Diamond above text) */}
                {/* 16 from pt-16, 4 from size-4, we calculate the half of sum of top padding of the container and size of the diamond */}
                <div className="absolute -top-[calc((16*4px+4*4px)/2)] flex items-center justify-center">
                  <div className="size-4 bg-black rotate-45 border border-white/20 flex items-center justify-center transition-colors duration-300 group-hover:border-vrc-cyan/50">
                    <motion.div
                      className="size-2 bg-vrc-cyan"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3 mt-4">
                  <h3 className="text-[11px] font-bold text-vrc-cyan uppercase tracking-[0.2em] group-hover:text-vrc-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-medium max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Vertical Centered) */}
        <div className="md:hidden flex flex-col space-y-16 relative py-8">
          {/* Center Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Indicator */}
              <div className="w-8 h-8 bg-[#0A0E1A] rotate-45 border border-white/20 flex items-center justify-center mb-6 relative z-10">
                <motion.div
                  className="w-3 h-3 bg-vrc-cyan shadow-[0_0_10px_#00D4FF]"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="space-y-2 px-6">
                <h3 className="text-xs font-bold text-vrc-cyan uppercase tracking-[0.2em]">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
