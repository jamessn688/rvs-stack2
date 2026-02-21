import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden" style={{ backgroundColor: "hsl(220 40% 10% / 0.95)", backdropFilter: "blur(8px)" }}>
      <a href="#qualify" className="cta-button w-full text-center text-base">
        Get My Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyMobileCTA;
