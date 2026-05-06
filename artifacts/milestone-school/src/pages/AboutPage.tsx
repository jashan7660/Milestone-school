import { motion } from "framer-motion";
import { CheckCircle2, Eye, Target, Heart, Award, Users, BookOpen, Shield, ArrowRight, Trophy } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import goldGloryImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777616289311.jpg";
import silverGloryImg from "@assets/SaveClip.App_614878340_18086449655035990_3947843287675199799_n_1777616304025.jpg";
import parvImg from "@assets/top_result_1777616348864.jpg";
import boardResultImg from "@assets/image_1777616635036.png";
import nandiniGoldImg from "@assets/0986_1777975694502.jpg";

const achievements = [
  { src: boardResultImg,  alt: "CBSE Class 10 — 100% Outstanding Result 2025-26",               span: "md:col-span-2" },
  { src: parvImg,         alt: "Parv Mittal — 97% CBSE Class X Result",                         span: "" },
  { src: nandiniGoldImg,  alt: "Nandini — Gold Glory, First Position in Declamation (District)", span: "" },
  { src: goldGloryImg,    alt: "Rahul — Gold Glory, 6th Chandigarh Open Skating Championship",   span: "" },
  { src: silverGloryImg,  alt: "Yash — Silver Glory, 6th Chandigarh Open Skating Championship",  span: "" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function AboutPage() {
  const pillars = [
    { icon: Eye, title: "Our Vision", color: "bg-blue-50 text-primary border-blue-100", desc: "To be a centre of excellence that nurtures curious, compassionate, and capable learners who go on to lead meaningful lives and contribute positively to society." },
    { icon: Target, title: "Our Mission", color: "bg-green-50 text-secondary border-green-100", desc: "To provide a holistic, CBSE-aligned education that balances academic rigour with character building — empowering every student to discover their unique potential." },
    { icon: Heart, title: "Our Values", color: "bg-indigo-50 text-indigo-600 border-indigo-100", desc: "Integrity, compassion, discipline, curiosity, and respect form the foundation of everything we do — in classrooms, on the sports field, and in daily life." },
  ];

  const milestones = [
    { year: "2008", event: "The Milestone Sr. Sec. School founded in Kaithal with 120 students and a vision of quality education." },
    { year: "2012", event: "Received CBSE affiliation and expanded to Classes I–X with state-of-the-art infrastructure." },
    { year: "2016", event: "Launched Senior Secondary streams — Science, Commerce, and Arts — for Classes XI & XII." },
    { year: "2019", event: "Inaugurated the Smart Classroom wing, Digital Library, and fully equipped Science Laboratories." },
    { year: "2022", event: "Achieved 100% board result for the third consecutive year; school strength crossed 1,000 students." },
    { year: "2025", event: "CBSE Class X — 100% outstanding result with multiple 90%+ scorers; skating championship gold and silver." },
  ];

  const whyUs = [
    { icon: BookOpen, text: "CBSE curriculum from Nursery to Class XII" },
    { icon: Users, text: "80+ experienced and dedicated faculty" },
    { icon: Award, text: "100% board exam pass record" },
    { icon: Shield, text: "Safe, structured, CCTV-monitored campus" },
    { icon: Heart, text: "Holistic focus on values and character" },
    { icon: Target, text: "Extensive co-curricular programmes" },
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
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-wider">Who We Are</div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">About The Milestone</h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">A trusted name in Kaithal for over 15 years — shaping bright futures through quality education, strong values, and a nurturing campus.</p>
            </motion.div>
          </div>
        </section>

        {/* School Intro */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp()}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Our Story</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">A legacy of learning, <span className="text-secondary">built with purpose</span></h2>
                <p className="text-muted-foreground text-lg mb-5 leading-relaxed">The Milestone Sr. Sec. School was founded with a singular vision — to create an institution where every child, regardless of background, receives a world-class education that prepares them not just for exams, but for life.</p>
                <p className="text-muted-foreground text-lg leading-relaxed">Located near Khurana Bypass, Kaithal, our campus is home to over 1,200 students, 80+ qualified teachers, and a community that believes deeply in the power of education to transform lives.</p>
              </motion.div>
              <motion.div {...fadeUp(0.15)} className="relative">
                <img src="/hero.png" alt="School campus" className="rounded-3xl w-full h-[420px] object-cover shadow-2xl border-8 border-white" />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-3xl font-serif font-bold">15+</div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-80">Years of Excellence</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-secondary text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-3xl font-serif font-bold">1200+</div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-80">Students</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Our Guiding Principles</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Vision, Mission & Values</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <motion.div key={i} {...fadeUp(i * 0.12)} className={`rounded-2xl border-2 p-8 ${p.color} bg-opacity-60`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${p.color}`}>
                    <p.icon size={26} />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal Message */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <motion.div {...fadeUp()} className="lg:col-span-2 text-center">
                <div className="relative inline-block">
                  <img src="/principal.png" alt="Mr. Atul Sharma — Principal" className="w-64 h-64 rounded-full object-cover object-top shadow-2xl border-8 border-white mx-auto" />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">Principal, The Milestone</div>
                </div>
                <h3 className="text-2xl font-serif font-bold mt-8 mb-1">Mr. Atul Sharma</h3>
                <p className="text-muted-foreground text-sm">M.A., B.Ed. | 20+ Years in Education</p>
              </motion.div>
              <motion.div {...fadeUp(0.15)} className="lg:col-span-3">
                <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">Principal's Message</div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">A message from our <span className="text-primary">Principal</span></h2>
                <blockquote className="border-l-4 border-secondary pl-6 mb-6">
                  <p className="text-muted-foreground text-lg leading-relaxed italic">"At The Milestone, we do not just educate — we inspire. Every child who walks through our doors is a story waiting to unfold. Our role is to provide the environment, the guidance, and the encouragement to make that story extraordinary."</p>
                </blockquote>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">"We believe education is not confined to textbooks. It is built in the laboratory, on the sports field, in the music room, and in every interaction between a teacher and a student. We are committed to delivering all of that — with excellence and with heart."</p>
                <p className="text-foreground font-semibold">— Mr. Atul Sharma, Principal</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Our Journey</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Milestones through the years</h2>
            </motion.div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              {milestones.map((m, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                  <div className="flex-1 md:text-right hidden md:block" style={i % 2 !== 0 ? { order: 2 } : {}}>
                    {i % 2 === 0 && <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"><p className="text-muted-foreground leading-relaxed">{m.event}</p></div>}
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg border-4 border-background">{m.year.slice(2)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-serif font-bold text-primary text-lg mb-1 md:hidden">{m.year}</div>
                    <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow md:hidden"><p className="text-muted-foreground leading-relaxed">{m.event}</p></div>
                    {i % 2 !== 0 && <div className="bg-card border border-border p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow hidden md:block"><p className="text-muted-foreground leading-relaxed">{m.event}</p></div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                <Trophy size={14} />
                Our Achievements
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
                Pride of The Milestone
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-[1.8]">
                From championship medals to board exam glory — our students continue to make The Milestone family proud.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.1)}
                  className={`relative rounded-2xl overflow-hidden shadow-lg group ${item.span}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white font-semibold text-sm leading-snug">{item.alt}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                {...fadeUp(0.4)}
                className="rounded-2xl overflow-hidden shadow-lg bg-black"
              >
                <video
                  src="/video4.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.2),transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-semibold text-sm mb-5 uppercase tracking-wider">Why The Milestone</div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Why parents choose us</h2>
              <p className="text-white/75 mt-4 text-lg">Every feature of our school is designed with one goal — your child's success and happiness.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyUs.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                  <div className="bg-secondary p-2.5 rounded-xl flex-shrink-0"><item.icon size={20} className="text-white" /></div>
                  <span className="font-medium text-base leading-snug">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/academics">
                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-10 font-bold shadow-xl hover:-translate-y-1 transition-all">
                  Explore Academics <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
