import { CheckCircle, XCircle, Shield, CreditCard } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-2">The Alternative</p>
        <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground mb-4">
          The Relief They Don't Advertise (Because It Actually Ends the&nbsp;Game)
        </h2>
        <p className="text-muted-foreground font-body mb-10 text-lg md:text-xl">
          What credit card companies call "help" is usually just more debt. This is different.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="testimonial-card">
            <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-success" /> What It Is
            </h3>
            <ul className="space-y-3 font-body text-base">
              {[
                "One simplified monthly payment",
                "Actual payoff: 24–48 months",
                "Replaces chaos of multiple cards",
                "Personalized to your situation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="testimonial-card">
            <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 urgency-text" /> What It's NOT
            </h3>
            <ul className="space-y-3 font-body text-base">
              {[
                "Not a loan — no new debt",
                "Not bankruptcy — credit stays intact",
                "Not consolidation — doesn't shuffle cards",
                "Not too good to be true — it's math",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-foreground/80">
                  <XCircle className="w-5 h-5 urgency-text flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="font-heading font-bold text-foreground text-xl mb-6">How It Works in 3 Steps</h3>
        <div className="space-y-5 mb-10">
          {[
            { step: "1", icon: CreditCard, title: "Free Assessment", desc: "We review your debt, your budget, and your goals. Takes 30 seconds online." },
            { step: "2", icon: Shield, title: "Personalized Plan", desc: "One monthly payment replaces the chaos. We negotiate directly with your creditors." },
            { step: "3", icon: CheckCircle, title: "Clear Finish Line", desc: "Most clients are debt-free in 24–48 months. You see the end date from day one." },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-xl flex-shrink-0"
                style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
              >
                {s.step}
              </div>
              <div>
                <p className="font-body font-bold text-foreground text-lg">{s.title}</p>
                <p className="font-body text-muted-foreground text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#qualify" className="cta-button inline-flex text-lg">
          See If You Qualify →
        </a>
        <div className="flex gap-3 mt-5">
          <span className="trust-badge text-sm">
            <Shield size={16} /> Free Assessment
          </span>
          <span className="trust-badge text-sm">
            <CheckCircle size={16} /> No Obligation
          </span>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
