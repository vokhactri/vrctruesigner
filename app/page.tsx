import { Footer } from "@/components/layout/Footer";
import { IntroSection } from "@/components/landing/IntroSection";
import { TransactionFlow } from "@/components/information/TransactionFlow";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { OutlinedContainer } from "@/components/layout/OutlinedContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-4 md:py-20">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A1020] via-black to-black -z-10" />

      <div className="w-full max-w-[1240px] px-4">
        <OutlinedContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Intro Info */}
            <div>
              <IntroSection contentOnly />
            </div>

            {/* Right Column: Waitlist Form */}
            <div>
              <WaitlistForm contentOnly />
            </div>
          </div>

          {/* Bottom Section: Transaction Flow */}
          <div className="mt-20 pt-16 border-t border-white/5">
            <TransactionFlow />
          </div>
        </OutlinedContainer>
      </div>

      <Footer />
    </main>
  );
}
