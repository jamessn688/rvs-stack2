import { ArrowRight, Shield, Clock } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="qualify" className="section-dark py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-3">
          See If You Qualify—<br />Free Assessment
        </h2>
        <p className="text-primary-foreground/60 font-body text-base mb-9">
          Takes 30 seconds · No obligation · No credit check
        </p>

        <a href="#qualify" className="cta-button text-lg md:text-xl inline-flex">
          Get My Free Assessment <ArrowRight className="ml-2 w-6 h-6" />
        </a>

        <div className="flex flex-wrap justify-center gap-5 mt-7">
          <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 font-body">
            <Clock size={16} /> 30-second assessment
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 font-body">
            <Shield size={16} /> 100% free
          </span>
        </div>

        <p className="text-sm text-primary-foreground/40 font-body mt-7">
          Program available for $10K+ credit card debt. Not available in all states.
        </p>
      </div>
    </section>
  );
};

export default OfferSection;
