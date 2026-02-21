import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

const ProblemExposed = () => {
  return (
    <section className="section-muted py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px" style={{ backgroundColor: "hsl(var(--primary))" }} />
          <p className="text-sm font-body uppercase tracking-widest font-semibold" style={{ color: "hsl(var(--urgency))" }}>
            The Problem Exposed
          </p>
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground italic mb-4">
          How Credit Card Companies Keep You Paying Forever
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10">
          The minimum payment system isn't accidental. It's engineered.
        </p>

        {/* Payment breakdown card */}
        <div className="rounded-xl overflow-hidden mb-10" style={{ boxShadow: "0 4px 24px hsl(var(--foreground) / 0.08)" }}>
          <div className="px-5 py-4 flex items-center gap-2" style={{ backgroundColor: "hsl(0 72% 45%)" }}>
            <AlertTriangle className="w-5 h-5 text-white" />
            <p className="font-body font-bold text-white text-base">
              Your $900/Month Payment: Where It Actually Goes
            </p>
          </div>

          <div className="bg-card px-5 py-7 space-y-6">
            <div>
              <div className="flex justify-between font-body mb-2">
                <span className="font-medium text-foreground text-base">Interest paid to bank</span>
                <span className="font-bold urgency-text text-xl">$850</span>
              </div>
              <div className="w-full h-8 rounded-md overflow-hidden" style={{ backgroundColor: "hsl(0 0% 90%)" }}>
                <div className="h-full rounded-md flex items-center pl-3" style={{ width: "94.4%", backgroundColor: "hsl(0 72% 51%)" }}>
                  <span className="text-white text-sm font-bold">94.4%</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-body mb-2">
                <span className="font-medium text-foreground text-base">Actual debt reduction</span>
                <span className="font-bold text-success text-xl">$50</span>
              </div>
              <div className="w-full h-8 rounded-md overflow-hidden" style={{ backgroundColor: "hsl(0 0% 90%)" }}>
                <div className="h-full rounded-md flex items-center pl-2" style={{ width: "5.6%", backgroundColor: "hsl(142 60% 40%)" }}>
                  <span className="text-white text-sm font-bold">5.6%</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-body italic pt-2">
              Based on average 24% APR credit card with $30,000 balance. Illustrative example only.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="rounded-xl p-6 border-l-4" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--urgency))", boxShadow: "0 2px 12px hsl(var(--foreground) / 0.06)" }}>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 urgency-text" />
              <p className="text-sm font-body font-bold urgency-text uppercase tracking-wider">Minimum Payments Path</p>
            </div>
            <p className="text-4xl md:text-5xl font-heading font-black urgency-text mb-2">36 years</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              to pay off $30,000 at minimum payments. You'll pay <strong>$70,000+ in interest alone</strong>.
            </p>
          </div>

          <div className="rounded-xl p-6 border-l-4" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--success))", boxShadow: "0 2px 12px hsl(var(--foreground) / 0.06)" }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-success" />
              <p className="text-sm font-body font-bold text-success uppercase tracking-wider">The Alternative</p>
            </div>
            <p className="text-4xl md:text-5xl font-heading font-black text-success mb-2">24 months</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Many people resolve the same debt in 24–48 months, keeping <strong>thousands in their pocket</strong>.
            </p>
          </div>
        </div>

        {/* Why Good Credit callout */}
        <div className="rounded-xl p-7 border-l-4" style={{ backgroundColor: "hsl(142 40% 96%)", borderColor: "hsl(var(--success))", boxShadow: "0 2px 12px hsl(var(--foreground) / 0.04)" }}>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5" style={{ color: "hsl(38 80% 45%)" }} />
            <p className="font-body font-bold text-foreground text-base">Why "Good Credit" Doesn't Mean You're Okay</p>
          </div>
          <p className="font-body text-foreground/80 text-base leading-relaxed">
            Credit scores reward one thing: how reliably you make payments. They don't measure financial stress, net worth, or whether you'll be paying this debt off for the next three decades. A 750 score can coexist with $50,000 of high-interest debt—and often does.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemExposed;
