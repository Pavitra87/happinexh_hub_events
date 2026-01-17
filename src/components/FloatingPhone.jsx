import React from "react";
import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+919480614607"
      className="fixed z-40 bg-primary hover:bg-primary-dark text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 font-semibold
        right-4 bottom-8 md:right-8 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2
      "
      title="Call us"
      aria-label="Call us"
     
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm">Call Us</span>
    </a>
  );
};

export default FloatingPhone;
