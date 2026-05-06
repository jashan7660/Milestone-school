import { motion } from "framer-motion";
import { Quote, GraduationCap, Award, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import principalImg from "@assets/atul_sharama_1777615661839.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const directors = [
  {
    name: "Mr. Atul Sharma",
    role: "Principal & Academic Director",
    qual: "M.A., B.Ed. | 20+ Years in Education",
    image: principalImg,
    message: "At The Milestone, we believe that every student is a unique universe of potential. Our role is not just to teach — but to inspire, guide, and ignite the curiosity that turns learners into leaders. We are committed to building a school where every child feels seen, heard, and empowered to achieve their best.",
    achievements: ["Led school to 100% CBSE board results", "20+ years of educational leadership", "Pioneer of smart classroom adoption in Kaithal", "Champion of holistic student development"],
  },
];

const boardMembers = [
  { name: "Mrs. Sunita Devi", role: "Chairperson", note: "Founder & guiding force of The Milestone family" },
  { name: "Mr. Rajiv Sharma", role: "Managing Director", note: "Oversees strategic development and infrastructure" },
  { name: "Mrs. Anita Khurana", role: "Academic Advisor", note: "Shapes curriculum and academic policy" },
  { name: "Mr. Sandeep Goyal", role: "Finance Director", note: "Ensures sustainable growth and resource management" },
];

export default function OurDirectorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p {...fadeUp(0)} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">About Us</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight">Our Directors</motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Meet the visionary leaders who guide The Milestone with passion, purpose, and an unwavering commitment to educational excellence.
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Principal spotlight */}
        {directors.map(({ name, role, qual, image, message, achievements }) => (
          <motion.div key={name} {...fadeUp(0)} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

              {/* Photo + meta */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
                <div className="relative">
                  <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-primary/20">
                    <img src={image} alt={name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Star size={11} className="fill-white" /> Principal
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-extrabold text-foreground">{name}</h2>
                  <p className="text-primary font-semibold text-sm mt-1">{role}</p>
                  <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1.5"><GraduationCap size={13} /> {qual}</p>
                </div>
                <div className="w-full bg-muted/40 rounded-2xl p-5 flex flex-col gap-2">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2"><Award size={13} className="text-primary" /> Key Achievements</p>
                  {achievements.map(a => (
                    <div key={a} className="flex items-start gap-2 text-xs text-foreground/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-3">
                <p className="section-label mb-2">Principal's Message</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 leading-tight">
                  "Education is the greatest gift we can give — let's make it extraordinary."
                </h3>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-primary/20 w-12 h-12" />
                  <p className="text-muted-foreground leading-[1.9] text-base pl-6 font-light italic border-l-4 border-primary/30">
                    {message}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Mr. Atul Sharma's leadership philosophy is rooted in the belief that academic excellence and personal growth go hand-in-hand. His open-door policy and personal mentorship of students has made The Milestone a home away from home for thousands of families in Kaithal.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Board of Directors */}
        <motion.div {...fadeUp(0)}>
          <div className="text-center mb-12">
            <p className="section-label">Governing Body</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Board of Directors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {boardMembers.map(({ name, role, note }, i) => (
              <motion.div
                key={name}
                {...fadeUp(i * 0.1)}
                className="bg-card border border-border rounded-2xl p-6 flex items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-serif font-bold text-xl shrink-0 shadow-md">
                  {name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">{name}</h4>
                  <p className="text-primary text-xs font-semibold mt-0.5">{role}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
