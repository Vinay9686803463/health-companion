import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Healthcare team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>
      <div className="container relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Your Health,{" "}
            <span className="opacity-90">Our Priority</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
            Providing the best medical services with compassion, expertise, and cutting-edge technology for you and your family.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={() => scrollTo("contact")}>
              Book Appointment
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => scrollTo("services")}>
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
