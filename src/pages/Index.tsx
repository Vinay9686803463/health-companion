import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AppointmentSection from "@/components/AppointmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
          About Us
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          At HealthCare, we are dedicated to providing world-class medical services with compassion and innovation. 
          Our team of experienced professionals uses the latest technology to ensure you receive the best possible care.
        </p>
      </div>
    </section>
    <ServicesSection />
    <DoctorsSection />
    <AppointmentSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
