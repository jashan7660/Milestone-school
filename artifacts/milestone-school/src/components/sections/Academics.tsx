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

        {/* Innovation in Action banner */}
        <motion.div
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={innovationImg}
            alt="Innovation in Action — students working on projects"
            className="w-full h-[400px] md:h-[500px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8 md:p-12">
            <div className="max-w-2xl text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Innovation in Action</h3>
              <p className="text-white/80 text-lg font-light">
                Students at The Milestone go beyond textbooks — collaborating, creating, and building real solutions through hands-on project-based learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Life Skills strip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {lifeSkills.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden shadow-lg group relative"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
