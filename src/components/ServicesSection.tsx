import { motion } from "framer-motion";
import { Stethoscope, Siren, FlaskConical, Pill } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Checkup", desc: "Comprehensive health assessments to keep you in the best shape." },
  { icon: Siren, title: "Emergency Care", desc: "24/7 emergency services with rapid response medical teams." },
  { icon: FlaskConical, title: "Diagnostics", desc: "Advanced lab testing and imaging for accurate diagnosis." },
  { icon: Pill, title: "Pharmacy", desc: "In-house pharmacy with all essential medications available." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Comprehensive healthcare solutions tailored to your needs
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
          >
            <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <s.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
