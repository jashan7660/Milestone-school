import { motion } from "framer-motion";
import { Smile, BookOpen, Microscope, TrendingUp, Palette, FlaskConical, Calculator, Globe2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const divisions = [
  {
    label: "Early Years",
    classes: "Nursery · LKG · UKG",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50 border-pink-100 dark:bg-pink-950/20",
    icon: Smile,
    desc: "A nurturing environment where young learners discover the joy of learning through play, art, stories, and structured activities. Our Early Years program lays the social, emotional, and cognitive foundation for lifelong learning.",
    highlights: ["Activity-based learning", "Hindi & English literacy", "Number readiness", "Motor skills development", "Safe & caring environment"],
  },
  {
    label: "Primary Wing",
    classes: "Classes I – V",
    color: "from-orange-400 to-amber-500",
    bg: "bg-orange-50 border-orange-100 dark:bg-orange-950/20",
    icon: BookOpen,
    desc: "The Primary Wing builds core academic skills through an engaging CBSE curriculum, blending structured learning with creative exploration. Students develop reading fluency, mathematical thinking, and scientific curiosity.",
    highlights: ["CBSE aligned curriculum", "Smart classroom learning", "EVS & general awareness", "Art, music & sports integrated", "Reading enrichment programs"],
  },
  {
    label: "Middle School",
    classes: "Classes VI – VIII",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50 border-blue-100 dark:bg-blue-950/20",
    icon: Globe2,
    desc: "Middle School is where academic depth meets personal growth. Students engage with a rich CBSE curriculum across Science, Mathematics, Social Science, and languages — while developing critical thinking and collaboration skills.",
    highlights: ["Subject specialisation begins", "Laboratory practicals", "Project-based learning", "Leadership & life skills", "Inter-house competitions"],
  },
  {
    label: "Secondary",
    classes: "Classes IX – X",
    color: "from-teal-400 to-emerald-500",
    bg: "bg-teal-50 border-teal-100 dark:bg-teal-950/20",
    icon: Calculator,
    desc: "The Secondary Division prepares students for CBSE Board Examinations with rigorous academic preparation, regular assessments, and personalised guidance. We have achieved 100% board results consecutively.",
    highlights: ["100% board results (2025-26)", "Regular mock exams", "Doubt clearing sessions", "Career awareness counselling", "NCC & co-curricular activities"],
  },
  {
    label: "Science Stream",
    classes: "Classes XI – XII · PCM / PCB",
    color: "from-violet-400 to-purple-600",
    bg: "bg-violet-50 border-violet-100 dark:bg-violet-950/20",
    icon: FlaskConical,
    desc: "Our Science stream equips students with the knowledge and practical skills needed for careers in medicine, engineering, research, and technology. State-of-the-art labs support hands-on learning beyond textbooks.",
    highlights: ["Physics, Chemistry, Maths (PCM)", "Physics, Chemistry, Biology (PCB)", "Advanced lab practicals", "JEE / NEET preparation guidance", "Science Olympiad participation"],
  },
  {
    label: "Commerce Stream",
    classes: "Classes XI – XII · Commerce",
    color: "from-cyan-400 to-sky-500",
    bg: "bg-cyan-50 border-cyan-100 dark:bg-cyan-950/20",
    icon: TrendingUp,
    desc: "The Commerce stream shapes future entrepreneurs, accountants, and business leaders. With a strong emphasis on Accountancy, Economics, and Business Studies, students are prepared for CA, MBA, and commerce-based careers.",
    highlights: ["Accounts, Economics, Business Studies", "Practical financial skills", "CA Foundation awareness", "Commerce aptitude development", "Real-world case study learning"],
  },
  {
    label: "Humanities / Arts Stream",
    classes: "Classes XI – XII · Arts",
    color: "from-amber-400 to-yellow-500",
    bg: "bg-amber-50 border-amber-100 dark:bg-amber-950/20",
    icon: Palette,
    desc: "The Humanities stream nurtures critical thinking, creativity, and social awareness. Students explore History, Political Science, Geography, Psychology, and Fine Arts — preparing for careers in law, journalism, civil services, and the arts.",
    highlights: ["History, Polity, Geography", "Psychology & Sociology options", "Fine Arts & creative expression", "UPSC / CLAT awareness", "Debate, theatre & declamation"],
  },
  {
    label: "Co-Curricular Division",
    classes: "All Classes",
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50 border-rose-100 dark:bg-rose-950/20",
    icon: Microscope,
    desc: "Beyond academics, The Milestone's Co-Curricular Division ensures every student has the opportunity to explore their passions — from sports and skating to drama, music, and declamation. Our students are district and state-level champions.",
    highlights: ["Roller skating & indoor games", "Drama & theatre club", "Declamation & debate", "Art, craft & music", "NSS & social service activities"],
  },
];

export default function DivisionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p {...fadeUp(0)} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">About Us</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight">Our Divisions</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            From Nursery to Class XII, each division at The Milestone is designed to meet students where they are and take them further than they imagined.
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Stats strip */}
        <motion.div {...fadeUp(0)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { val: "8",    label: "Academic Divisions" },
            { val: "1000+", label: "Students Enrolled" },
            { val: "Nursery – XII", label: "Full Spectrum" },
            { val: "100%", label: "Board Results" },
          ].map(({ val, label }) => (
            <div key={label} className="bg-primary text-primary-foreground rounded-2xl p-5 text-center">
              <div className="text-2xl font-extrabold font-serif">{val}</div>
              <div className="text-primary-foreground/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Division cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map(({ label, classes, color, bg, icon: Icon, desc, highlights }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i * 0.07)}
              className={`rounded-3xl border p-7 flex flex-col gap-5 hover:shadow-lg transition-shadow ${bg}`}
            >
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-br ${color} p-3 rounded-xl text-white shadow-md shrink-0`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground font-serif">{label}</h3>
                  <p className={`text-xs font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent mt-0.5`}>{classes}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              <ul className="flex flex-col gap-1.5">
                {highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-xs text-foreground/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
