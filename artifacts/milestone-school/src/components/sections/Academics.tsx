import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import innovationImg from "@assets/76_1777975616532.jpg";
import lifeSkillImg from "@assets/6_1777975518232.jpg";
import cylinderImg from "@assets/765_1777975658620.jpg";
import bestWasteImg from "@assets/23_1777975648648.jpg";

export default function Academics() {
  const features = [
    {
      title: "CBSE Curriculum",
      description: "Rigorous and comprehensive curriculum from Nursery to Class 12 following CBSE guidelines.",
      icon: <BookOpen className="w-8 h-8 text-secondary" />
    },
    {
      title: "Smart Classrooms",
      description: "Interactive digital boards and multimedia content to make learning engaging and visual.",
      icon: <MonitorPlay className="w-8 h-8 text-secondary" />
    },
    {
      title: "Diverse Streams",
      description: "Offering PCM, PCB, Commerce, and Arts streams for 11th and 12th standard students.",
      icon: <FlaskConical className="w-8 h-8 text-secondary" />
    },
    {
      title: "English Medium",
      description: "Dedicated focus on English communication skills to prepare students for global opportunities.",
      icon: <Languages className="w-8 h-8 text-secondary" />
    }
  ];

  const lifeSkills = [
    { src: lifeSkillImg,  alt: "Life Skill Activity — Learning Beyond Books",       label: "Learning Beyond Books" },
    { src: cylinderImg,   alt: "Cylinder Regulator Change — Practical Life Skills", label: "Practical Life Skills" },
    { src: bestWasteImg,  alt: "Best Out of Waste — Recycling & Creativity",        label: "Best Out of Waste" },
  ];

  return (
    <section id="academics" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            Academic Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
            Nurturing intellect and <span className="text-gradient">curiosity</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-[1.8]">
            Our academic programs are designed to challenge students, foster critical thinking, and build a strong foundation for higher education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Innovation in Action label + 4-image grid */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-7">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: "linear-gradient(135deg, #0f2618 0%, #1a3a2a 100%)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.35)" }}
            >
              Innovation in Action
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Innovation image — first card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={innovationImg}
                  alt="Innovation in Action"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-card px-4 py-3 border-t border-border">
                <span className="text-sm font-semibold text-foreground">Innovation in Action</span>
              </div>
            </motion.div>

            {/* Life skill images */}
            {lifeSkills.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-card px-4 py-3 border-t border-border">
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
