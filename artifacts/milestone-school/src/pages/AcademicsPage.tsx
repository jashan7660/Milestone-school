import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages, GraduationCap, Layers, Lightbulb, BarChart3, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function AcademicsPage() {
  const classes = [
    { range: "Nursery – KG", label: "Early Childhood", desc: "Play-based learning to develop social, cognitive, and motor skills.", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
    { range: "I – V", label: "Primary School", desc: "Strong foundation in literacy, numeracy, science, and social studies.", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { range: "VI – VIII", label: "Middle School", desc: "Conceptual depth, project-based work, and emerging critical thinking.", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { range: "IX – X", label: "Secondary (CBSE Board)", desc: "Rigorous CBSE curriculum with a focus on board exam excellence.", color: "bg-green-50 border-green-200 text-green-700" },
    { range: "XI – XII", label: "Senior Secondary", desc: "Specialised streams to prepare students for college and careers.", color: "bg-rose-50 border-rose-200 text-rose-700" },
  ];

  const streams = [
    { name: "Science (PCM)", icon: FlaskConical, subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science / Physical Education"], color: "border-blue-300 bg-blue-50" },
    { name: "Science (PCB)", icon: FlaskConical, subjects: ["Physics", "Chemistry", "Biology", "English", "Physical Education"], color: "border-green-300 bg-green-50" },
    { name: "Commerce", icon: BarChart3, subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics / Informatics"], color: "border-yellow-300 bg-yellow-50" },
    { name: "Arts / Humanities", icon: BookOpen, subjects: ["History", "Political Science", "Geography", "English", "Hindi / Sociology"], color: "border-purple-300 bg-purple-50" },
  ];

  const methodology = [
    { icon: MonitorPlay, title: "Smart Classrooms", desc: "Every classroom is equipped with digital boards and multimedia tools for visual, interactive learning." },
    { icon: FlaskConical, title: "Practical Learning", desc: "Lab sessions in Physics, Chemistry, Biology, and Computer Science reinforce classroom theory." },
    { icon: Lightbulb, title: "Concept-First Approach", desc: "Teachers focus on deep understanding over rote learning, building strong conceptual foundations." },
    { icon: Layers, title: "Regular Assessments", desc: "Unit tests, project work, and mock board exams ensure continuous learning and preparedness." },
    { icon: Languages, title: "English Proficiency", desc: "Dedicated spoken English and writing sessions build communication skills for global readiness." },
    { icon: GraduationCap, title: "Career Guidance", desc: "Senior students receive counselling for competitive exams, college selection, and career paths." },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0f2f6e] via-primary to-[#1a7a4a] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-wider">Academic Excellence</div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">Academics & Curriculum</h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">CBSE-aligned education from Nursery to Class XII — designed to challenge, inspire, and build lifelong learners.</p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp()}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">CBSE Curriculum</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">A curriculum built for <span className="text-secondary">tomorrow's world</span></h2>
                <p className="text-muted-foreground text-lg mb-5 leading-relaxed">We follow the Central Board of Secondary Education (CBSE) curriculum — one of India's most respected education frameworks — from Nursery through Class XII. Our approach goes beyond textbooks to build critical thinking, creativity, and problem-solving skills.</p>
                <p className="text-muted-foreground text-lg leading-relaxed">Every subject is taught using a concept-first methodology with smart classroom tools, regular assessments, and dedicated doubt-clearing sessions to ensure no student is left behind.</p>
              </motion.div>
              <motion.div {...fadeUp(0.15)}>
                <img src="/smart-classroom.png" alt="Smart Classroom" className="rounded-3xl w-full h-[400px] object-cover shadow-2xl border-8 border-white" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Classes Offered */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Classes Offered</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Nursery to Class XII — all under one roof</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {classes.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className={`border-2 rounded-2xl p-6 text-center ${c.color} hover:scale-105 transition-transform duration-300`}>
                  <div className="text-2xl font-serif font-bold mb-2">{c.range}</div>
                  <div className="font-semibold text-sm mb-3">{c.label}</div>
                  <p className="text-xs leading-relaxed opacity-80">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Streams for XI & XII */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">Senior Secondary Streams</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Choose your path — Classes XI & XII</h2>
              <p className="text-muted-foreground mt-4 text-lg">We offer four streams tailored to every student's ambition and aptitude.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {streams.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className={`border-2 rounded-2xl p-8 ${s.color} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-white p-2.5 rounded-xl shadow-sm"><s.icon size={22} className="text-primary" /></div>
                    <h3 className="text-xl font-serif font-bold">{s.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.subjects.map((sub, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Teaching Approach</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">How we make learning stick</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.map((m, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl transition-shadow group">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <m.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-3">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results CTA */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.07),transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}>
              <div className="text-5xl md:text-7xl font-serif font-bold text-secondary mb-4">100%</div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">CBSE Class X Result — 2025-26</h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">Every single student who appeared for the Class X CBSE board exam passed with distinction. Parv Mittal topped with 97%.</p>
              <Link href="/achievements">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-10 font-bold shadow-xl hover:-translate-y-1 transition-all">
                  See All Achievements <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
