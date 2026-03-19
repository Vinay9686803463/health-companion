import { motion } from "framer-motion";
import doctorSmith from "@/assets/doctor-smith.jpg";
import doctorJohn from "@/assets/doctor-john.jpg";
import doctorAnna from "@/assets/doctor-anna.jpg";

const doctors = [
  { name: "Dr. Smith", specialty: "Cardiologist", img: doctorSmith },
  { name: "Dr. John", specialty: "Neurologist", img: doctorJohn },
  { name: "Dr. Anna", specialty: "Pediatrician", img: doctorAnna },
];

const DoctorsSection = () => (
  <section id="doctors" className="py-24 bg-secondary/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Our Doctors
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Meet our team of experienced medical professionals
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {doctors.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-display text-lg font-semibold text-foreground">{d.name}</h3>
              <p className="text-sm text-primary font-medium mt-1">{d.specialty}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
