import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Experienced and dedicated faculty members",
    "Modern infrastructure with smart classrooms",
    "Student-centered approach to learning",
    "Emphasis on critical thinking and leadership skills",
    "Strong focus on moral values and discipline",
    "Extensive extracurricular activities"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="/library.png" 
                alt="Students reading in the library" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-12 -right-12 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-border">
              <div className="text-4xl font-serif font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years of<br/>Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              About The Milestone
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-foreground mb-6 leading-[1.1] tracking-tight">
              Shaping bright futures through{" "}
              <span className="text-gradient">quality education</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-5 leading-[1.85] font-light">
              At The Milestone Sr. Sec. School, we believe that every child has the potential to achieve greatness. Located in the heart of Kaithal, our campus is a vibrant community where students are encouraged to explore, question, and grow.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-[1.85] font-light">
              Our holistic approach blends academic rigor with character building, ensuring our students leave not just with exceptional grades, but as responsible, compassionate leaders ready for tomorrow's challenges.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-foreground font-medium text-[15px] leading-snug">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}