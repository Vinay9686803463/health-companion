import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CalendarDays } from "lucide-react";

const AppointmentSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date) {
      toast.error("Please fill all required fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Appointment booked successfully!");
      setForm({ name: "", email: "", phone: "", date: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CalendarDays className="w-4 h-4" />
            Schedule a Visit
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Book Appointment
          </h2>
          <p className="text-muted-foreground">
            Fill in the form below and we'll get back to you shortly
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              placeholder="Full Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              placeholder="Phone *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
            />
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <Textarea
            placeholder="Additional message (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            maxLength={1000}
          />
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? "Booking..." : "Submit Appointment"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default AppointmentSection;
