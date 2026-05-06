import { motion } from "framer-motion";
import { GraduationCap, Star, Users, BookOpen, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import principalImg from "@assets/atul_sharama_1777615661839.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function FacultyPage() {
  const principal = {
    name: "Mr. Atul Sharma",
    role: "Principal",
    qual: "M.A., B.Ed. | 20+ Years in Education",
    image: principalImg,
    bio: "A visionary leader and passionate educator, Mr. Atul Sharma has dedicated over two decades to transforming young minds. Under his guidance, The Milestone has achieved consistent 100% board results and built a reputation as Kaithal's most trusted school. He believes every student has a unique gift waiting to be discovered.",
  };

  const teachers = [
    { name: "Mrs. Sunita Sharma", subject: "Physics", qual: "M.Sc. Physics, B.Ed.", exp: "14 years", image: "/teacher-science.png", dept: "Science" },
    { name: "Mr. Amit Verma", subject: "Mathematics", qual: "M.Sc. Maths, B.Ed.", exp: "12 years", image: "/teacher-math.png", dept: "Mathematics" },
    { name: "Mrs. Rekha Gupta", subject: "Chemistry", qual: "M.Sc. Chemistry, B.Ed.", exp: "10 years", image: "/teacher-science.png", dept: "Science" },
    { name: "Mr. Rajesh Kumar", subject: "English", qual: "M.A. English, B.Ed.", exp: "11 years", image: "/teacher-math.png", dept: "Languages" },
    { name: "Mrs. Priya Yadav", subject: "Biology", qual: "M.Sc. Biology, B.Ed.", exp: "8 years", image: "/teacher-science.png", dept: "Science" },
    { name: "Mr. Sanjay Rana", subject: "Social Studies", qual: "M.A. History, B.Ed.", exp: "9 years", image: "/teacher-math.png", dept: "Humanities" },
    { name: "Mrs. Kavita Arora", subject: "Hindi", qual: "M.A. Hindi, B.Ed.", exp: "13 years", image: "/teacher-science.png", dept: "Languages" },
    { name: "Mr. Deepak Nain", subject: "Computer Science", qual: "M.C.A., B.Ed.", exp: "7 years", image: "/teacher-math.png", dept: "Technology" },
  ];

  const stats = [
    { icon: Users, value: "80+", label: "Qualified Faculty" },
    { icon: GraduationCap, value: "10+", label: "Avg. Years Experience" },
    { icon: Star, value: "100%", label: "CBSE Trained Teachers" },
    { icon: Heart, value: "1200+", label: "Students Mentored" },
  ];

  const departments = ["Science", "Mathematics", "Languages", "Humanities", "Technology", "Arts & Sports"];

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
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-wider">Our Mentors</div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">Faculty & Staff</h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">Meet the dedicated educators who inspire every student at The Milestone to go beyond the ordinary.</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center text-white">
                  <div className="bg-white/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"><s.icon size={24} /></div>
                  <div className="text-3xl font-serif font-bold text-secondary mb-1">{s.value}</div>
                  <div className="text-white/75 text-sm font-medium uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal Spotlight */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">School Leadership</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Meet our Principal</h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/15 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img src={principal.image} alt={principal.name} className="w-48 h-48 rounded-full object-cover object-top shadow-2xl border-6 border-white mx-auto" />
                  <div className="mt-4">
                    <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full inline-block">Principal</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-serif font-bold mb-1">{principal.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-5">{principal.qual}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{principal.bio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center mb-10">
              <h3 className="text-xl font-serif font-bold text-foreground">Academic Departments</h3>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-3">
              {departments.map((d, i) => (
                <div key={i} className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <BookOpen size={14} className="text-primary" />
                  <span className="font-medium text-sm">{d}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">Our Teachers</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Experienced educators, passionate mentors</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teachers.map((t, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{t.dept}</div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif font-bold text-lg mb-0.5">{t.name}</h3>
                    <p className="text-secondary font-semibold text-sm mb-1">{t.subject}</p>
                    <p className="text-muted-foreground text-xs mb-2">{t.qual}</p>
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      <Star size={11} className="fill-primary" /> {t.exp} experience
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Want to join our faculty?</h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">We are always looking for passionate, qualified educators who share our commitment to student excellence.</p>
              <a href="mailto:themilestoneKtl@gmail.com" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-lg">
                Send Your CV <GraduationCap size={18} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
