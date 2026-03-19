import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Excellent service and friendly staff! They made me feel comfortable throughout my treatment.", author: "Sarah M." },
  { text: "Highly recommended healthcare center. The doctors are knowledgeable and truly caring.", author: "Rahul K." },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-secondary/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Testimonials
        </h2>
        <p className="text-muted-foreground">What our patients say about us</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 shadow-card border border-border relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <p className="text-sm font-semibold text-primary">— {t.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
