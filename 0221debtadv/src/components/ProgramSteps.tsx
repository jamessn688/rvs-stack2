import { CheckCircle, CreditCard, Shield } from "lucide-react";

const ProgramSteps = () => {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-3">
          One Program. One Payment. Clear Finish Line.
        </h2>
        <p className="text-muted-foreground font-body mb-10 text-base">Here's exactly what happens when you enroll.</p>

        <div className="space-y-5">
          {[
            { icon: CreditCard, title: "Assessment & Enrollment", desc: "We look at everything — your balances, interest rates, income, and monthly budget. No judgment. Then we build a plan you can actually afford." },
            { icon: Shield, title: "One Monthly Payment", desc: "Instead of juggling 4-5 cards, you make one payment into a dedicated account. We negotiate directly with your creditors to reduce what you owe." },
            { icon: CheckCircle, title: "Debt-Free in 24–48 Months", desc: "You see the finish line from day one. No surprises, no hidden fees. Just a clear path to $0 owed." },
          ].map((step, i) => (
            <div key={i} className="testimonial-card flex items-start gap-4 p-7">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(var(--primary))" }}>
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-body font-bold text-foreground text-lg mb-1">{step.title}</p>
                <p className="font-body text-muted-foreground text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSteps;
