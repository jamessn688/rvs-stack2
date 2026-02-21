import { Shield, Ban, ThumbsUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top bar */}
      <div className="text-center py-2.5 text-sm font-body tracking-wider uppercase" style={{ backgroundColor: "hsl(220 50% 18%)", color: "hsl(210 30% 70%)" }}>
        Advertorial · Financial Education · Updated Feb 2026
      </div>

      {/* Gradient hero */}
      <div className="text-center px-5 py-16 md:py-24" style={{ background: "linear-gradient(180deg, hsl(220 55% 20%) 0%, hsl(220 60% 28%) 100%)" }}>
        <h1 className="font-heading text-4xl md:text-6xl font-black leading-tight text-primary-foreground mb-6 max-w-3xl mx-auto">
          The Credit Card Trap <em className="highlight-text not-italic">They Don't Teach</em> In School
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-9 leading-relaxed font-body">
          Why millions of Americans with "good credit" are actually drowning—and the one program that actually gets you out. This is a story about a woman who escaped—and how you might be able to do it&nbsp;too.
        </p>
        <a href="#qualify" className="cta-button text-lg md:text-xl">
          See If You Qualify →
        </a>

        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <span className="trust-badge text-base">
            <Ban size={18} /> Not a Loan
          </span>
          <span className="trust-badge text-base">
            <Shield size={18} /> Not Bankruptcy
          </span>
          <span className="trust-badge text-base">
            <ThumbsUp size={18} /> Won't Hurt Your Credit Score
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
