import { motion } from "framer-motion";
import { Eye, Target, Heart, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const milestones = [
  { year: "2008", event: "The Milestone Sr. Sec. School founded in Kaithal with 120 students and a bold vision of quality education for all." },
  { year: "2012", event: "Received CBSE affiliation and expanded to Classes I–X with state-of-the-art infrastructure and smart classrooms." },
  { year: "2016", event: "Launched Senior Secondary streams — Science (PCM/PCB), Commerce, and Arts — for Classes XI & XII." },
  { year: "2019", event: "Inaugurated the Smart Classroom wing, Digital Library, and fully equipped Science & Computer Laboratories." },
  { year: "2022", event: "Achieved 100% board result for the third consecutive year. School strength crossed 1,000 students." },
  { year: "2024", event: "Expanded co-curricular programs — drama, skating, declamation — producing district and state level champions." },
  { year: "2025", event: "Class 10 students achieved 100% outstanding results. Students won Gold & Silver Glory at state-level competitions." },
];

const pillars = [
  {
    icon: Eye,
    title: "Our Vision",
    color: "bg-blue-50 text-primary border-blue-100",
    desc: "To be a centre of excellence that nurtures curious, compassionate, and capable learners who go on to lead meaningful lives and contribute positively to society.",
  },
  {
    icon: Target,
    title: "Our Mission",
    color: "bg-green-50 text-secondary border-green-100",
    desc: "To provide a holistic, CBSE-aligned education that balances academic rigour with character building — empowering every student to discover their unique potential.",
  },
  {
    icon: Heart,
    title: "Our Values",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    desc: "Integrity, compassion, discipline, curiosity, and respect form the foundation of everything we do — in classrooms, on the sports field, and in daily life.",
  },
];

const strengths = [
  "CBSE Affiliated since 2012",
  "1,000+ Students across all classes",
  "Nursery to Class XII",
  "100% Board Results (Class 10, 2025-26)",
  "District & State level achievers",
  "English medium with Hindi competency",
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p {...fadeUp(0)} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">About Us</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight">Our Story</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Since 2008, The Milestone Sr. Sec. School has been transforming lives in Kaithal — one student at a time — through the power of quality education and holistic development.
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Intro */}
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-muted-foreground text-lg leading-[1.9] font-light">
            Born from a vision to bring quality CBSE education to Kaithal, The Milestone Sr. Sec. School has grown from a humble beginning of 120 students to a thriving institution of over 1,000 learners. We believe every child deserves the best start in life — and we've dedicated 17 years to making that a reality.
          </p>
        </motion.div>

        {/* Vision / Mission / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {pillars.map(({ icon: Icon, title, color, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.12)}
              className={`rounded-2xl border p-8 flex flex-col gap-4 ${color}`}
            >
              <div className="bg-white p-3 rounded-xl w-fit shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif">{title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div {...fadeUp(0)} className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Milestones Through the Years</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 -translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  {...fadeUp(i * 0.1)}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"} pl-14 md:pl-0`}>
                    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                      <span className="inline-block text-xs font-bold text-secondary bg-secondary/10 rounded-full px-3 py-1 mb-3">{year}</span>
                      <p className="text-foreground/80 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md z-10" />
                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key strengths */}
        <motion.div {...fadeUp(0)} className="bg-muted/40 rounded-3xl p-10">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">The Milestone at a Glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {strengths.map((s, i) => (
              <motion.div key={s} {...fadeUp(i * 0.07)} className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={18} />
                <span className="text-foreground/80 text-sm font-medium">{s}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
