import { motion } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus, Shield, Wifi, Camera, Coffee } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function FacilitiesPage() {
  const mainFacilities = [
    {
      icon: Microscope,
      title: "Science Laboratories",
      image: "/science-lab.png",
      desc: "Our fully equipped Physics, Chemistry, and Biology labs give students hands-on experience with experiments and practicals — making science come alive beyond the textbook.",
      highlights: ["3 separate labs — Physics, Chemistry, Biology", "Modern apparatus and safety equipment", "Regular practical sessions for Classes VI–XII", "Trained lab assistants on hand"],
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      image: "/library.png",
      desc: "A peaceful, well-stocked library with over 4,000 books across subjects, fiction, reference material, and digital resources — designed to foster a love for reading and independent research.",
      highlights: ["4,000+ books and periodicals", "Dedicated reading zones", "Digital catalogue system", "Study cubicles for focused learning"],
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      image: "/sports.png",
      desc: "Physical development is a pillar of our education. Our sprawling sports facilities cater to a range of outdoor and indoor sports, keeping students fit, disciplined, and team-oriented.",
      highlights: ["Cricket, Football & Badminton grounds", "Basketball and Volleyball courts", "Skating rink for skating club", "Annual Sports Day celebration"],
    },
    {
      icon: Monitor,
      title: "Computer Laboratory",
      image: "/smart-classroom.png",
      desc: "A modern computer lab with high-speed internet connectivity ensures students develop essential digital literacy and programming skills aligned with today's technology-first world.",
      highlights: ["50+ workstations with latest hardware", "High-speed broadband internet", "Programming and coding classes", "MS Office, Python, and web basics"],
    },
    {
      icon: Palette,
      title: "Creative Arts & Activity Rooms",
      image: "/art-room.png",
      desc: "Music, dance, art, and drama find a dedicated space on our campus. Our activity rooms are where students discover their creative voice and develop confidence outside the classroom.",
      highlights: ["Dedicated music room with instruments", "Dance studio with sprung flooring", "Art and craft room", "Annual cultural events and competitions"],
    },
    {
      icon: Bus,
      title: "Safe Transport Network",
      image: "/school-bus.png",
      desc: "Our GPS-tracked school bus fleet covers Kaithal city and surrounding areas, ensuring safe, timely, and comfortable commute for students every single day.",
      highlights: ["GPS-tracked buses", "Covers Kaithal & nearby areas", "Trained drivers and attendants", "Regular vehicle maintenance"],
    },
  ];

  const extras = [
    { icon: Shield, title: "24/7 CCTV Surveillance", desc: "Entire campus covered with high-definition CCTV cameras for the safety of every student and staff member." },
    { icon: Wifi, title: "Campus-Wide Wi-Fi", desc: "High-speed internet access across the campus for seamless digital learning and research." },
    { icon: Camera, title: "Smart Classrooms", desc: "Every classroom features an interactive digital board and audio-visual tools for engaging, modern lessons." },
    { icon: Coffee, title: "Hygienic Cafeteria", desc: "Clean, supervised canteen serving nutritious snacks and meals prepared under strict hygiene standards." },
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
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-wider">Infrastructure</div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">Facilities & Campus</h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">World-class infrastructure thoughtfully designed to support every aspect of academic, physical, and creative development.</p>
            </motion.div>
          </div>
        </section>

        {/* Main Facilities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Our Campus</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Everything your child needs — in one campus</h2>
            </motion.div>
            <div className="space-y-20">
              {mainFacilities.map((f, i) => (
                <motion.div key={i} {...fadeUp(0.1)} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                      <img src={f.image} alt={f.title} className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 bg-primary text-white p-2.5 rounded-xl shadow-lg"><f.icon size={20} /></div>
                    </div>
                  </div>
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Facility 0{i + 1}</div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{f.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{f.desc}</p>
                    <ul className="space-y-3">
                      {f.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3 text-foreground font-medium">
                          <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Facilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">And More</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Safety, connectivity & comfort</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {extras.map((e, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="bg-card border border-border rounded-2xl p-7 text-center hover:shadow-xl transition-shadow group">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                    <e.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-3">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
