import { motion } from "framer-motion";
import { Handshake, Globe2, BookOpen, FlaskConical, Trophy, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const categories = [
  {
    icon: BookOpen,
    title: "Academic Partnerships",
    color: "text-primary bg-primary/10",
    partners: [
      { name: "CBSE Board of Education", desc: "Affiliated CBSE school with full secondary & senior secondary affiliation", type: "Regulatory" },
      { name: "National Informatics Centre", desc: "Digital literacy and computer education integration", type: "Technology" },
      { name: "NCERT", desc: "Textbook and curriculum alignment for all classes", type: "Curriculum" },
    ],
  },
  {
    icon: FlaskConical,
    title: "Science & Technology",
    color: "text-violet-600 bg-violet-100",
    partners: [
      { name: "Vigyan Prasar", desc: "Science popularisation and student research programs", type: "Science" },
      { name: "Atal Innovation Mission", desc: "Tinkering Lab & innovation-based learning for students", type: "Innovation" },
      { name: "NASSCOM Foundation", desc: "IT skill development and digital awareness workshops", type: "Technology" },
    ],
  },
  {
    icon: Trophy,
    title: "Sports & Co-Curricular",
    color: "text-amber-600 bg-amber-100",
    partners: [
      { name: "Roller Skating Federation of India", desc: "Official affiliation for roller skating training and competitions", type: "Sports" },
      { name: "Haryana Sports Authority", desc: "State sports development programs and district competitions", type: "Sports" },
      { name: "Nehru Yuva Kendra Sangathan", desc: "Youth development and NSS activity coordination", type: "Youth" },
    ],
  },
  {
    icon: Heart,
    title: "Community & Social",
    color: "text-rose-600 bg-rose-100",
    partners: [
      { name: "Rotary Club — Kaithal", desc: "Community service, scholarship drives and social awareness", type: "NGO" },
      { name: "Red Cross Society", desc: "First aid training, blood donation drives and health camps", type: "Health" },
      { name: "District Education Office, Kaithal", desc: "Government scheme participation and academic recognition", type: "Government" },
    ],
  },
  {
    icon: Globe2,
    title: "Career & Higher Education",
    color: "text-teal-600 bg-teal-100",
    partners: [
      { name: "Career Launcher", desc: "Career counselling workshops and competitive exam awareness", type: "Career" },
      { name: "Kurukshetra University", desc: "Higher education awareness programs for Class XI–XII students", type: "University" },
      { name: "Guru Jambheshwar University", desc: "Science and technology awareness for senior students", type: "University" },
    ],
  },
];

const benefits = [
  { title: "Broader Learning", desc: "Partnerships expose students to real-world knowledge beyond textbooks" },
  { title: "Competition Exposure", desc: "Students participate in district, state, and national-level events" },
  { title: "Career Readiness", desc: "Industry awareness programs prepare students for life after school" },
  { title: "Community Values", desc: "Social service partnerships build empathy and civic responsibility" },
];

export default function TieupsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p {...fadeUp(0)} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">About Us</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight">Our Tie-ups</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            The Milestone partners with leading educational boards, sports bodies, and community organisations to deliver a truly rounded school experience for every student.
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Benefits strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {benefits.map(({ title, desc }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.1)} className="bg-muted/40 rounded-2xl p-5 text-center">
              <Handshake className="text-primary mx-auto mb-3" size={26} />
              <h4 className="font-bold text-foreground text-sm mb-1">{title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner categories */}
        <div className="flex flex-col gap-12">
          {categories.map(({ icon: Icon, title, color, partners }, ci) => (
            <motion.div key={title} {...fadeUp(ci * 0.08)}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${color}`}>
                  <Icon size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">{title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partners.map(({ name, desc, type }, i) => (
                  <motion.div
                    key={name}
                    {...fadeUp(i * 0.08)}
                    className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-bold text-foreground text-sm leading-snug">{name}</h4>
                      <span className="text-[10px] font-semibold bg-muted text-muted-foreground rounded-full px-2.5 py-1 shrink-0 whitespace-nowrap">{type}</span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0)} className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-10 text-white text-center">
          <Handshake className="mx-auto mb-4 opacity-80" size={40} />
          <h3 className="text-2xl font-serif font-bold mb-3">Interested in Partnering With Us?</h3>
          <p className="text-white/80 max-w-xl mx-auto text-sm mb-6 leading-relaxed">
            We welcome collaborations from educational institutions, NGOs, sports bodies, and corporates who share our commitment to quality education and student development.
          </p>
          <a
            href="mailto:themilestoneKtl@gmail.com"
            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors shadow-lg text-sm"
          >
            Get in Touch
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
