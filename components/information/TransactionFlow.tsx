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
        <div className="hidden md:block relative pt-12">
          {/* Connector Line and Diamonds */}
          <div className="absolute top-0 left-0 w-full h-8 flex items-center">
            <div className="absolute h-[1px] w-full bg-white/10" />

            {/* Animated Highlight */}
            <motion.div
              className="absolute h-[2px] bg-vrc-cyan shadow-[0_0_15px_#00D4FF]"
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

            <div className="relative w-full flex justify-between">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="w-4 h-4 bg-black rotate-45 border border-white/20 relative z-10 flex items-center justify-center">
                    <motion.div
                      className="w-2 h-2 bg-vrc-cyan"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="pt-8 text-center space-y-3">
                <h3 className="text-[11px] font-bold text-vrc-cyan uppercase tracking-[0.2em]">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Vertical) */}
        <div className="md:hidden flex flex-col space-y-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Mobile Animated Highlight */}
          <motion.div
            className="absolute left-[15px] w-[2px] bg-vrc-cyan shadow-[0_0_15px_#00D4FF]"
            initial={{ top: "0%", height: "0%", opacity: 0 }}
            animate={{
              top: ["0%", "0%", "80%", "100%"],
              height: ["0%", "20%", "20%", "0%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 relative">
              <div className="flex-shrink-0 w-8 flex justify-center pt-1">
                <div className="w-4 h-4 bg-black rotate-45 border border-white/20 relative z-10 flex items-center justify-center">
                  <motion.div
                    className="w-2 h-2 bg-vrc-cyan"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-vrc-cyan uppercase tracking-[0.2em]">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
