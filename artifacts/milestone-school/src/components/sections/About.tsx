import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Experienced & dedicated faculty",
  "Smart classrooms & modern infrastructure",
  "Strong moral values & discipline",
  "Rich extracurricular programs",
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative blobs */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />

              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/library.png"
                  alt="Students at The Milestone School"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-border hidden md:flex flex-col items-center">
                <span className="text-3xl font-serif font-bold text-primary leading-none">15+</span>
                <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide text-center mt-0.5">Years of<br/>Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="section-label mb-4">About The Milestone</div>

            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Shaping bright futures through{" "}
              <span className="text-gradient">quality education</span>
            </h2>

            <p className="text-muted-foreground text-base mb-7 leading-relaxed">
              Located in the heart of Kaithal, The Milestone Sr. Sec. School (CBSE) is a vibrant community where students explore, question, and grow — blending academic excellence with strong values and character building.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-start gap-2.5 group"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm leading-snug">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
