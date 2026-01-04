import React from "react";
import {
  Heart,
  Phone,
  MapPin,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#050a16] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto md:px-6 px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 md:gap-8 gap-5 sm:gap-8">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-red-500 fill-red-500" size={22} />
              <h2 className="md:text-xl text-lg  font-semibold text-white">
                Events by Design
              </h2>
            </div>
            <p className="md:text-sm text-xs leading-relaxed text-gray-400 max-w-sm">
              Your Hub For Unforgettable Events since 2025. Your dream event is
              our passion.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Birthday Events",
                "Proposals",
                "Engagements",
                "Weddings",
                "Anniversaries",
                "Grand Openings",
              ].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Home", "Choose Us", "Portfolio", "Contact", "Services"].map(
                (item) => (
                  <li key={item} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 md:text-sm text-xs text-gray-400">
              {/* Phone */}
              <li className="flex items-center gap-2 hover:text-white">
                <Phone size={16} />
                <a href="tel:+919480614607">+91 9480614607</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <Instagram size={16} />
                <a
                  href="https://instagram.com/happinex_hub_events"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @happinex_hub_events
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-2 hover:text-white">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/919480614607"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 9480614607
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 hover:text-white">
                <Mail size={16} className="mt-[2px] shrink-0" />
                 <a
    href="mailto:happinexhubevents@gmail.com"
    className="text-xs md:text-sm break-all"
  >
                  happinexhubevents@gmail.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-center gap-2 hover:text-white">
                <MapPin size={16} />
                <span>Gudeangadi, Kumta (U.K) Karnataka</span>
              </li>

              {/* Instagram */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center md:text-sm text-xs text-gray-400">
          © 2025 Events by Design. All rights reserved. |{" "}
          <span className="hover:text-white cursor-pointer">
            Designed 
            <Heart className="inline-block text-red-500 mx-1" size={14} /> by
            Pavitra M
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
