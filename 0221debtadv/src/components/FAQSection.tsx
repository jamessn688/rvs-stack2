import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Will this hurt my credit score?",
    a: "Most clients see no negative impact. Some see improvement as debt is resolved. We're transparent about what to expect during your free assessment.",
  },
  {
    q: "Is this a loan?",
    a: "No. You make one monthly payment into a dedicated account while we negotiate on your behalf. No new debt is created.",
  },
  {
    q: "What if I have good credit already?",
    a: "Good credit doesn't mean you're okay—it means banks want to keep lending to you. We'll help you protect your credit while actually eliminating what you owe.",
  },
  {
    q: "How long does it take?",
    a: "Most clients are debt-free in 24–48 months. Compare that to 20+ years of minimum payments. The difference is decades of your life.",
  },
  {
    q: "What if I can't afford the payment?",
    a: "The payment is designed around your budget. If you can't afford this, you definitely can't afford 29% APR. We work with you to find what's sustainable.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-muted py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-3">
          Your Questions, Answered Honestly
        </h2>
        <p className="text-muted-foreground font-body text-base mb-9">No spin. No fine print surprises.</p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="testimonial-card cursor-pointer p-6" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className="flex justify-between items-center">
                <h3 className="font-heading font-bold text-foreground text-base md:text-lg pr-4">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === i && (
                <p className="mt-4 font-body text-muted-foreground text-base leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
