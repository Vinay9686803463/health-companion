import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <Heart className="w-5 h-5 fill-current" />
          HealthCare
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-background/70">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-background transition-colors">
            <Phone className="w-4 h-4" />
            +91 9876543210
          </a>
          <a href="mailto:email@healthcare.com" className="flex items-center gap-2 hover:text-background transition-colors">
            <Mail className="w-4 h-4" />
            email@healthcare.com
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-background/10 text-center text-sm text-background/50">
        © 2026 HealthCare. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
