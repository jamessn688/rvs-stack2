import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={close}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className="relative testimonial-card max-w-md w-full p-8 text-center animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-heading text-xl md:text-2xl font-black text-foreground mb-3">
          Wait—before you go
        </h3>
        <p className="font-body text-muted-foreground text-lg mb-6">
          Are you sure you want to keep paying <span className="font-bold urgency-text">29% interest</span>?
        </p>
        <p className="font-body text-sm text-muted-foreground mb-6">
          Every month you wait costs you $800+ in interest that you'll never get back.
        </p>
        <a href="#qualify" onClick={close} className="cta-button w-full text-center">
          See If You Qualify →
        </a>
        <button onClick={close} className="mt-4 text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
          No thanks, I'll keep paying interest
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
