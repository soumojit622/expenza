"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BacktoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed cursor-pointer bottom-6 right-6 z-999 flex h-12 w-12 items-center justify-center
        rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 
        hover:shadow-xl hover:scale-105 active:scale-95
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
