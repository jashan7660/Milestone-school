import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import innovationImg from "@assets/76_1777975616532.jpg";
import lifeSkillImg from "@assets/6_1777975518232.jpg";
import cylinderImg from "@assets/765_1777975658620.jpg";
import bestWasteImg from "@assets/23_1777975648648.jpg";

const features = [
  { title: "CBSE Curriculum",   description: "Rigorous curriculum from Nursery to Class 12 following CBSE guidelines.",             icon: <BookOpen    className="w-8 h-8 text-secondary" /> },
  { title: "Smart Classrooms",  description: "Interactive digital boards and multimedia content to make learning engaging.",         icon: <MonitorPlay className="w-8 h-8 text-secondary" /> },
  { title: "Diverse Streams",   description: "PCM, PCB, Commerce, and Arts streams for 11th and 12th standard students.",           icon: <FlaskConical className="w-8 h-8 text-secondary" /> },
  { title: "English Medium",    description: "Dedicated focus on English communication to prepare students for global opportunities.", icon: <Languages   className="w-8 h-8 text-secondary" /> },
];

const lifeSkills = [
  { src: lifeSkillImg, label: "Learning Beyond Books",   alt: "Life Skill Activity" },
  { src: cylinderImg,  label: "Practical Life Skills",   alt: "Cylinder Regulator Activity" },
  { src: bestWasteImg, label: "Best Out of Waste",       alt: "Recycling & Creativity" },
];

function LifeSkillsSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + lifeSkills.length) % lifeSkills.length);
  const next = () => setCurrent((c) => (c + 1) % lifeSkills.length);

  return (
    <div className="relative mt-10">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {lifeSkills.map((item, i) => (
            <div key={i} className="min-w-full">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-72 object-cover object-top"
              />
              <div className="bg-card px-6 py-4 border-t border-border">
                <span className="text-base font-semibold text-foreground">{item.label}</span>
                <p className="text-xs text-muted-foreground mt-0.5">The Milestone Sr. Sec. School</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-[calc(50%-24px)] -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={20} className="text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-[calc(50%-24px)] -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={20} className="text-foreground" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {lifeSkills.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "var(--color-primary)" : "var(--color-border)",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Academics() {
  return (
    <section id="academics" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
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

        {/* Feature cards */}
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

        {/* Innovation in Action — full-width image with single centred headline */}
        <motion.div
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={innovationImg}
            alt="Innovation in Action"
            className="w-full h-[420px] object-cover object-top"
          />
          {/* Subtle gradient + centred attractive text */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(5,20,10,0.55) 0%, rgba(0,0,0,0.38) 100%)" }}
          >
            <h3
              className="text-3xl md:text-5xl font-serif font-extrabold text-white text-center px-6 leading-tight drop-shadow-2xl"
              style={{ textShadow: "0 4px 32px rgba(0,0,0,0.7)" }}
            >
              Where Curiosity Meets<br />
              <span style={{ color: "#4ade80" }}>Innovation</span>
            </h3>
          </div>
        </motion.div>

        {/* Life Skills slider */}
        <LifeSkillsSlider />

      </div>
    </section>
  );
}
