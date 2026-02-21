import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: "linear-gradient(180deg, hsl(220 55% 20%) 0%, hsl(220 60% 15%) 100%)" }}>
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground mb-5">
          You have two options.
        </h2>
        <p className="text-lg text-primary-foreground/70 font-body mb-3">
          Keep paying $800+/month in interest that goes straight to the bank. Or take 30 seconds to see if there's a better way.
        </p>
        <p className="text-base urgency-text font-bold font-body mb-9">
          Every month you wait is another $800+ in interest gone forever.
        </p>

        <a href="#qualify" className="cta-button text-lg md:text-xl inline-flex">
          Get My Free Assessment <ArrowRight className="ml-2 w-6 h-6" />
        </a>

        <p className="text-sm text-primary-foreground/40 font-body mt-7">
          30 seconds · Free · No obligation · No credit check
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
