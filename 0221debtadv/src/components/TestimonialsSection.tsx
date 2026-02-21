import { Star, Check } from "lucide-react";
import sarahImg from "@/assets/testimonial-sarah.jpg";
import johnImg from "@/assets/testimonial-john.jpg";
import lisaImg from "@/assets/testimonial-lisa.jpg";
import davidImg from "@/assets/testimonial-david.jpg";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Phoenix, AZ",
    image: sarahImg,
    debt: "$38,000",
    saved: "$19,400",
    quote: "I was convinced I'd be in debt forever. I had four cards, all near their limits, and the minimums were eating my budget alive. The assessment call was the most relieving conversation I'd had in years. I can finally breathe.",
    result: "Eliminated $38,000 in debt",
  },
  {
    name: "John R.",
    location: "Columbus, OH",
    image: johnImg,
    debt: "$41,000",
    saved: "$18,000",
    quote: "I kept telling myself I'd pay it off once I got a raise, once the kids were done with school. The raise came and went. The debt stayed. Finally called after my wife found the statements I'd been hiding. Best decision we made together.",
    result: "Eliminated $41,000 in debt",
  },
  {
    name: "Maria L.",
    location: "Tampa, FL",
    image: lisaImg,
    debt: "$32,500",
    saved: "$14,200",
    quote: "I literally wrote my payoff date on my calendar and crossed off the months. I'm done now. This actually worked. My payment was less than what I was paying in minimums.",
    result: "Eliminated $32,500 in debt",
  },
  {
    name: "David K.",
    location: "Denver, CO",
    image: davidImg,
    debt: "$35,000",
    saved: "$22,100",
    quote: "Had a 720 credit score and $35K in credit card debt. Nobody tells you that having 'good credit' can actually make the trap worse—you keep getting approved for more cards. The program gave me an exit.",
    result: "Eliminated $35,000 in debt",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-muted py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px" style={{ backgroundColor: "hsl(var(--primary))" }} />
          <p className="text-sm font-body uppercase tracking-widest font-semibold" style={{ color: "hsl(var(--primary))" }}>
            Real Results
          </p>
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground italic mb-4">
          People Who Found Their Way Out
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-2">
          Individual results vary based on enrolled debt, program length, and creditor cooperation. These are real stories shared with permission.
        </p>
        <p className="text-sm text-muted-foreground font-body italic mb-10">
          *Results may vary. Not a guarantee of debt reduction. Names have been abbreviated for privacy.
        </p>

        <div className="space-y-5">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card p-7">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-body text-foreground text-base">
                      <span className="font-bold">{t.name}</span>
                      <span className="text-muted-foreground"> — {t.location}</span>
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm font-body mt-1">
                      <span className="urgency-text font-semibold">Debt: {t.debt}</span>
                      <span className="text-success font-semibold">Saved: {t.saved}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 flex-shrink-0 ml-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <div className="border-l-3 pl-5 my-5 ml-1" style={{ borderLeftWidth: "3px", borderColor: "hsl(var(--primary))" }}>
                <p className="font-body text-foreground/80 text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-2 ml-1">
                <Check className="w-5 h-5 text-success" />
                <span className="text-base font-body font-semibold text-success">{t.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
