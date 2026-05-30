import { motion } from "framer-motion";
import {
  Eye, Target, Heart, Award, Users, BookOpen, Shield,
  ArrowRight, Trophy, Star, GraduationCap, MapPin, Calendar,
  CheckCircle, Sparkles, Quote, Flame, Crown
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import goldGloryImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777616289311.jpg";
import silverGloryImg from "@assets/SaveClip.App_614878340_18086449655035990_3947843287675199799_n_1777616304025.jpg";
import parvImg from "@assets/top_result_1777616348864.jpg";
import boardResultImg from "@assets/image_1777616635036.png";
import nandiniGoldImg from "@assets/0986_1777975694502.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.88 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const CONFETTI_COLORS = ["#F59E0B","#EF4444","#10B981","#2563EB","#8B5CF6","#EC4899","#06B6D4"];

export default function AboutPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const pillars = isHindi ? [
    { icon: Eye,    title: "हमारी दृष्टि", accent: "#60a5fa", bg: "#1e3a8a",
      desc: "एक उत्कृष्टता केंद्र बनना जो जिज्ञासु, दयालु और सक्षम शिक्षार्थियों का पोषण करे, जो सार्थक जीवन जीएं और समाज में सकारात्मक योगदान दें।" },
    { icon: Target, title: "हमारा मिशन",  accent: "#4ade80", bg: "#14532d",
      desc: "एक समग्र, CBSE-संरेखित शिक्षा प्रदान करना जो शैक्षणिक कठोरता और चरित्र निर्माण को संतुलित करे — हर छात्र को उनकी अनूठी क्षमता खोजने के लिए सशक्त करे।" },
    { icon: Heart,  title: "हमारे मूल्य", accent: "#c4b5fd", bg: "#4c1d95",
      desc: "ईमानदारी, करुणा, अनुशासन, जिज्ञासा और सम्मान — कक्षाओं में, खेल मैदान पर और दैनिक जीवन में हम जो कुछ भी करते हैं उसकी नींव।" },
  ] : [
    { icon: Eye,    title: "Our Vision",  accent: "#60a5fa", bg: "#1e3a8a",
      desc: "To be a centre of excellence that nurtures curious, compassionate, and capable learners who go on to lead meaningful lives and contribute positively to society." },
    { icon: Target, title: "Our Mission", accent: "#4ade80", bg: "#14532d",
      desc: "To provide a holistic, CBSE-aligned education that balances academic rigour with character building — empowering every student to discover their unique potential." },
    { icon: Heart,  title: "Our Values",  accent: "#c4b5fd", bg: "#4c1d95",
      desc: "Integrity, compassion, discipline, curiosity, and respect form the foundation of everything we do — in classrooms, on the sports field, and in daily life." },
  ];

  const milestones = isHindi ? [
    { year: "2008", event: "द माइलस्टोन सी.सेक. स्कूल की स्थापना 120 छात्रों और गुणवत्तापूर्ण शिक्षा के सपने के साथ कैथल में हुई।", icon: Sparkles, color: "#F59E0B" },
    { year: "2012", event: "CBSE मान्यता प्राप्त हुई और अत्याधुनिक बुनियादी ढांचे के साथ कक्षा I-X तक विस्तार किया गया।", icon: GraduationCap, color: "#2563EB" },
    { year: "2016", event: "कक्षा XI और XII के लिए वरिष्ठ माध्यमिक स्ट्रीम — विज्ञान, वाणिज्य और कला — शुरू किए गए।", icon: BookOpen, color: "#10B981" },
    { year: "2019", event: "स्मार्ट क्लासरूम विंग, डिजिटल पुस्तकालय और पूर्ण सुसज्जित विज्ञान प्रयोगशालाओं का उद्घाटन।", icon: Star, color: "#8B5CF6" },
    { year: "2022", event: "लगातार तीसरे वर्ष 100% बोर्ड परिणाम; स्कूल की शक्ति 1,000 छात्रों को पार कर गई।", icon: Trophy, color: "#EC4899" },
    { year: "2025", event: "CBSE कक्षा X — 100% उत्कृष्ट परिणाम जिसमें कई 90%+ स्कोरर; स्केटिंग चैम्पियनशिप में स्वर्ण और रजत।", icon: Award, color: "#EF4444" },
  ] : [
    { year: "2008", event: "The Milestone Sr. Sec. School founded in Kaithal with 120 students and a vision of quality education.", icon: Sparkles, color: "#F59E0B" },
    { year: "2012", event: "Received CBSE affiliation and expanded to Classes I–X with state-of-the-art infrastructure.", icon: GraduationCap, color: "#2563EB" },
    { year: "2016", event: "Launched Senior Secondary streams — Science, Commerce, and Arts — for Classes XI & XII.", icon: BookOpen, color: "#10B981" },
    { year: "2019", event: "Inaugurated the Smart Classroom wing, Digital Library, and fully equipped Science Laboratories.", icon: Star, color: "#8B5CF6" },
    { year: "2022", event: "Achieved 100% board result for the third consecutive year; school strength crossed 1,000 students.", icon: Trophy, color: "#EC4899" },
    { year: "2025", event: "CBSE Class X — 100% outstanding result with multiple 90%+ scorers; gold & silver at skating championship.", icon: Award, color: "#EF4444" },
  ];

  const whyUs = isHindi ? [
    { icon: BookOpen, text: "नर्सरी से कक्षा XII तक CBSE पाठ्यक्रम",  sub: "Nursery – Class XII",          color: "#2563EB", bg: "#eff6ff" },
    { icon: Users,    text: "80+ अनुभवी और समर्पित शिक्षक",            sub: "Dedicated Faculty",             color: "#10B981", bg: "#ecfdf5" },
    { icon: Award,    text: "100% बोर्ड परीक्षा पास रिकॉर्ड",          sub: "Consistent Excellence",         color: "#F59E0B", bg: "#fffbeb" },
    { icon: Shield,   text: "सुरक्षित, CCTV-निगरानी कैंपस",            sub: "Safe Campus",                   color: "#EF4444", bg: "#fff1f2" },
    { icon: Heart,    text: "मूल्यों और चरित्र पर समग्र ध्यान",        sub: "Holistic Development",          color: "#8B5CF6", bg: "#f5f3ff" },
    { icon: Target,   text: "व्यापक पाठ्येतर कार्यक्रम",               sub: "Beyond Classrooms",             color: "#EC4899", bg: "#fdf2f8" },
  ] : [
    { icon: BookOpen, text: "CBSE curriculum from Nursery to Class XII", sub: "Nursery – Class XII",          color: "#2563EB", bg: "#eff6ff" },
    { icon: Users,    text: "80+ experienced and dedicated faculty",     sub: "Dedicated Faculty",             color: "#10B981", bg: "#ecfdf5" },
    { icon: Award,    text: "100% board exam pass record",               sub: "Consistent Excellence",         color: "#F59E0B", bg: "#fffbeb" },
    { icon: Shield,   text: "Safe, CCTV-monitored campus",               sub: "Safe Campus",                   color: "#EF4444", bg: "#fff1f2" },
    { icon: Heart,    text: "Holistic focus on values and character",    sub: "Holistic Development",          color: "#8B5CF6", bg: "#f5f3ff" },
    { icon: Target,   text: "Extensive co-curricular programmes",        sub: "Beyond Classrooms",             color: "#EC4899", bg: "#fdf2f8" },
  ];

  const achievements = [
    { src: boardResultImg,  alt: isHindi ? "CBSE कक्षा 10 — 100% उत्कृष्ट परिणाम 2025-26"  : "CBSE Class 10 — 100% Outstanding Result 2025-26",  badge: isHindi ? "100% परिणाम" : "100% Result", span: "md:col-span-2 md:row-span-2" },
    { src: parvImg,         alt: isHindi ? "पार्व मित्तल — 97% CBSE कक्षा X परिणाम"         : "Parv Mittal — 97% CBSE Class X",                   badge: "97%" },
    { src: nandiniGoldImg,  alt: isHindi ? "नंदिनी — गोल्ड ग्लोरी, डिक्लेमेशन (जिला)"      : "Nandini — Gold, Declamation (District)",            badge: isHindi ? "स्वर्ण" : "Gold" },
    { src: goldGloryImg,    alt: isHindi ? "राहुल — स्वर्ण, स्केटिंग चैम्पियनशिप"           : "Rahul — Gold, Skating Championship",               badge: isHindi ? "स्वर्ण 🥇" : "Gold 🥇" },
    { src: silverGloryImg,  alt: isHindi ? "यश — रजत, स्केटिंग चैम्पियनशिप"                : "Yash — Silver, Skating Championship",              badge: isHindi ? "रजत 🥈" : "Silver 🥈" },
  ];

  const stats = [
    { value: "15+",   label: isHindi ? "उत्कृष्टता के वर्ष" : "Years of Excellence", icon: Calendar,      color: "#F59E0B", bg: "#fffbeb" },
    { value: "1200+", label: isHindi ? "खुश छात्र"           : "Happy Students",       icon: Users,         color: "#10B981", bg: "#ecfdf5" },
    { value: "80+",   label: isHindi ? "योग्य शिक्षक"       : "Qualified Teachers",   icon: GraduationCap, color: "#2563EB", bg: "#eff6ff" },
    { value: "100%",  label: isHindi ? "बोर्ड पास रेट"       : "Board Pass Rate",      icon: Trophy,        color: "#EF4444", bg: "#fff1f2" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden min-h-[88vh] flex items-center"
          style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

          {/* Animated orbs */}
          {[
            { w: 520, h: 520, x: "-8%",  y: "-22%", c: "#2563EB", dur: 10 },
            { w: 400, h: 400, x: "72%",  y: "45%",  c: "#10B981", dur: 14 },
            { w: 300, h: 300, x: "35%",  y: "65%",  c: "#8B5CF6", dur: 8  },
            { w: 240, h: 240, x: "60%",  y: "-10%", c: "#F59E0B", dur: 11 },
          ].map((o, i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}22,transparent 70%)` }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.85, 0.4] }}
              transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
          ))}

          {/* Confetti dots */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div key={i} className="absolute w-2 h-2 rounded-full pointer-events-none hidden md:block"
              style={{
                left: `${(i * 37 + 5) % 95}%`,
                top:  `${(i * 53 + 10) % 85}%`,
                backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                opacity: 0.35,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.35, 0.65, 0.35], scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 3.5 + (i % 5) * 0.6, delay: (i * 0.22) % 3, ease: "easeInOut" }}/>
          ))}

          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

          <div className="container relative z-10 mx-auto px-4 md:px-6 py-28 md:py-36 text-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
                style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)", backdropFilter: "blur(12px)" }}>
                <MapPin size={12} /> {isHindi ? "कैथल, हरियाणा" : "Kaithal, Haryana"}
                <motion.span className="w-2 h-2 rounded-full bg-green-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1 }}/>
              </div>

              <motion.h1 {...fadeUp(0.1)} className="font-serif font-extrabold text-white leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}>
                {isHindi ? "माइलस्टोन के " : "About "}
                <span style={{ background: "linear-gradient(90deg, #60a5fa, #34d399, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {isHindi ? "बारे में" : "The Milestone"}
                </span>
              </motion.h1>

              <motion.p {...fadeUp(0.2)} className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-14">
                {isHindi
                  ? "कैथल में 15 वर्षों से एक भरोसेमंद नाम — गुणवत्तापूर्ण शिक्षा, मजबूत मूल्यों और एक पोषण देने वाले कैंपस के माध्यम से उज्ज्वल भविष्य बना रहे हैं।"
                  : "A trusted name in Kaithal for over 15 years — shaping bright futures through quality education, strong values, and a nurturing campus."}
              </motion.p>
            </motion.div>

            {/* Stats strip */}
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <motion.div key={i}
                  whileHover={{ y: -5, boxShadow: `0 16px 40px ${s.color}30` }}
                  className="rounded-2xl p-5 text-center transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.14)", backdropFilter: "blur(12px)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${s.color}25`, border: `1.5px solid ${s.color}40` }}>
                    <s.icon size={18} style={{ color: s.color }}/>
                  </div>
                  <div className="text-3xl font-serif font-bold text-white mb-1">{s.value}</div>
                  <div className="text-white/50 text-xs uppercase tracking-wider font-medium">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 70L1440 70L1440 25C1200 70 960 5 720 25C480 45 240 5 0 25Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </section>

        {/* ── SCHOOL STORY ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image side */}
              <motion.div {...scaleIn(0.1)} className="relative">
                <div className="absolute -inset-4 rounded-3xl -z-10"
                  style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(16,185,129,0.08))" }}/>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50" style={{ boxShadow: "0 24px 60px rgba(37,99,235,0.12)" }}>
                  <img src="/hero.png" alt="School campus" className="w-full h-[460px] object-cover"/>
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-5 -left-5 text-white px-7 py-5 rounded-2xl shadow-2xl"
                  style={{ background: "linear-gradient(135deg, #2563EB, #1d4ed8)" }}>
                  <div className="text-4xl font-serif font-bold leading-none">15+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest opacity-80 mt-1">{isHindi ? "उत्कृष्टता के वर्ष" : "Years of Excellence"}</div>
                </div>
                <div className="absolute -top-5 -right-5 text-white px-7 py-5 rounded-2xl shadow-2xl"
                  style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                  <div className="text-4xl font-serif font-bold leading-none">1200+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest opacity-80 mt-1">{isHindi ? "प्रसन्न छात्र" : "Happy Students"}</div>
                </div>
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden lg:flex bg-white border border-border shadow-xl px-4 py-3 rounded-2xl flex-col items-center gap-1"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                  <GraduationCap size={22} className="text-primary" />
                  <div className="text-xl font-serif font-bold text-foreground">80+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{isHindi ? "शिक्षक" : "Teachers"}</div>
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div {...fadeUp(0.15)}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6"
                  style={{ background: "rgba(16,185,129,0.10)", color: "#10B981", border: "1px solid rgba(16,185,129,0.25)" }}>
                  <Sparkles size={13} />
                  {isHindi ? "हमारी कहानी" : "Our Story"}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-foreground">
                  {isHindi ? "सीखने की एक विरासत, " : "A legacy of learning, "}
                  <span className="text-secondary">{isHindi ? "उद्देश्य के साथ बनाई गई" : "built with purpose"}</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {isHindi
                    ? "द माइलस्टोन सी.सेक. स्कूल की स्थापना एक अनूठे दृष्टिकोण के साथ हुई — एक ऐसी संस्था बनाना जहां हर बच्चे को, पृष्ठभूमि की परवाह किए बिना, एक विश्व स्तरीय शिक्षा मिले।"
                    : "The Milestone Sr. Sec. School was founded with a singular vision — to create an institution where every child, regardless of background, receives a world-class education that prepares them not just for exams, but for life."}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {isHindi
                    ? "खुराना बाईपास के पास, कैथल में स्थित हमारा कैंपस 1,200 से अधिक छात्रों, 80+ योग्य शिक्षकों का घर है।"
                    : "Located near Khurana Bypass, Kaithal, our campus is home to over 1,200 students, 80+ qualified teachers, and a community that believes deeply in the power of education to transform lives."}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(isHindi ? [
                    "नर्सरी से कक्षा XII तक CBSE",
                    "स्मार्ट क्लासरूम और डिजिटल लाइब्रेरी",
                    "पूर्ण विज्ञान प्रयोगशालाएं",
                    "व्यापक खेल सुविधाएं",
                  ] : [
                    "CBSE from Nursery to Class XII",
                    "Smart classrooms & digital library",
                    "Fully-equipped science labs",
                    "Extensive sports facilities",
                  ]).map((pt, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 border border-border transition-all hover:border-secondary/40"
                      style={{ background: "rgba(16,185,129,0.04)" }}>
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── VISION / MISSION / VALUES ── */}
        <section className="py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0a1628 0%, #0f2240 50%, #12103a 100%)" }}>

          {[
            { w: 450, h: 450, x: "-5%",  y: "-25%", c: "#2563EB", dur: 11 },
            { w: 350, h: 350, x: "70%",  y: "50%",  c: "#8B5CF6", dur: 14 },
            { w: 250, h: 250, x: "40%",  y: "-10%", c: "#10B981", dur: 9  },
          ].map((o, i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}20,transparent 70%)` }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.7, 0.35] }}
              transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
          ))}

          <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.3)" }}>
                <Sparkles size={12} /> {isHindi ? "हमारे मार्गदर्शक सिद्धांत" : "Our Guiding Principles"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                {isHindi ? "दृष्टि, मिशन और " : "Vision, Mission & "}
                <span style={{ background: "linear-gradient(90deg,#4ade80,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {isHindi ? "मूल्य" : "Values"}
                </span>
              </h2>
              <p className="text-white/55 text-lg font-light">
                {isHindi
                  ? "तीन मूल सिद्धांत जो हर कार्य, हर निर्णय और हर बच्चे की यात्रा को मार्गदर्शन देते हैं।"
                  : "Three core principles that guide every action, every decision, and every child's journey with us."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div key={i} {...fadeUp(i * 0.13)}
                  whileHover={{ y: -6, boxShadow: `0 20px 50px ${p.accent}22` }}
                  className="rounded-3xl overflow-hidden transition-all duration-400"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1.5px solid ${p.accent}30` }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${p.accent},${p.accent}55)` }}/>
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      style={{ background: `linear-gradient(135deg,${p.bg},${p.bg}cc)`, border: `1px solid ${p.accent}30` }}>
                      <p.icon size={28} style={{ color: p.accent }}/>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">{p.title}</h3>
                    <p className="text-white/60 leading-relaxed text-[15px] font-light">{p.desc}</p>
                    <div className="mt-6 h-0.5 rounded-full w-12" style={{ backgroundColor: p.accent }}/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRINCIPAL'S MESSAGE ── */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07), transparent 70%)" }}/>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)" }}/>

          <div className="container relative z-10 mx-auto px-4 md:px-6">

            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background: "rgba(37,99,235,0.08)", color: "hsl(var(--primary))", border: "1px solid rgba(37,99,235,0.18)" }}>
                <Quote size={12}/> {isHindi ? "प्रिंसिपल का संदेश" : "Principal's Message"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                {isHindi ? "हमारे " : "A word from our "}
                <span className="text-primary">{isHindi ? "प्रिंसिपल" : "Principal"}</span>
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="rounded-3xl overflow-hidden max-w-5xl mx-auto"
              style={{ background: "rgba(37,99,235,0.03)", border: "1.5px solid rgba(37,99,235,0.15)", boxShadow: "0 8px 48px rgba(37,99,235,0.08)" }}>
              <div className="h-1" style={{ background: "linear-gradient(90deg,#2563EB,#10B981,#8B5CF6)" }}/>
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

                {/* Portrait */}
                <div className="lg:col-span-2 flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-20 scale-110"
                      style={{ background: "linear-gradient(135deg, #2563EB, #10B981)" }}/>
                    <img src="/principal.png" alt="Mr. Atul Sharma — Principal"
                      className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover object-top shadow-2xl border-6 border-white mx-auto"
                      style={{ border: "6px solid white", boxShadow: "0 0 40px rgba(37,99,235,0.25)" }}/>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-5 py-2 rounded-full whitespace-nowrap shadow-lg border-2 border-white"
                      style={{ background: "linear-gradient(135deg, #2563EB, #1d4ed8)" }}>
                      {isHindi ? "प्रिंसिपल, द माइलस्टोन" : "Principal, The Milestone"}
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <h3 className="text-2xl font-serif font-bold text-foreground">Mr. Atul Sharma</h3>
                    <p className="text-muted-foreground text-sm mt-1">{isHindi ? "M.A., B.Ed. | 20+ वर्षों का अनुभव" : "M.A., B.Ed. | 20+ Years in Education"}</p>
                  </div>
                </div>

                {/* Message */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                  <div className="relative rounded-2xl p-7"
                    style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.12)" }}>
                    <Quote size={44} className="absolute -top-3 -left-2 text-primary/10"/>
                    <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium italic pl-4 border-l-4 border-primary/30">
                      {isHindi
                        ? '"माइलस्टोन में, हम केवल पढ़ाते नहीं — हम प्रेरित करते हैं। हमारे दरवाजे से गुजरने वाला हर बच्चा एक अनकही कहानी है।"'
                        : '"At The Milestone, we do not just educate — we inspire. Every child who walks through our doors is a story waiting to unfold."'}
                    </p>
                  </div>
                  <div className="rounded-2xl p-6"
                    style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.12)" }}>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {isHindi
                        ? '"हम मानते हैं कि शिक्षा पाठ्यपुस्तकों तक सीमित नहीं है। यह प्रयोगशाला में, खेल मैदान पर, संगीत कक्ष में और शिक्षक-छात्र की हर बातचीत में बनती है।"'
                        : '"We believe education is not confined to textbooks. It is built in the laboratory, on the sports field, in the music room, and in every interaction between a teacher and a student — with excellence and with heart."'}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border"/>
                    <p className="text-foreground font-bold text-sm">— Mr. Atul Sharma, {isHindi ? "प्रिंसिपल" : "Principal"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── JOURNEY TIMELINE ── */}
        <section className="py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0f172a 0%, #0a2240 50%, #0a1e0f 100%)" }}>

          {[
            { w: 400, h: 400, x: "75%", y: "-20%", c: "#F59E0B", dur: 12 },
            { w: 320, h: 320, x: "-5%", y: "55%",  c: "#10B981", dur: 9  },
          ].map((o, i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}18,transparent 70%)` }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.65, 0.3] }}
              transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
          ))}

          <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.3)" }}>
                <Flame size={12} className="text-amber-400"/> {isHindi ? "हमारी यात्रा" : "Our Journey"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                {isHindi ? "वर्षों के दौरान " : "Milestones "}
                <span style={{ background: "linear-gradient(90deg,#fbbf24,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {isHindi ? "माइलस्टोन" : "through the years"}
                </span>
              </h2>
              <p className="text-white/50 text-lg font-light">
                {isHindi ? "2008 से अब तक — हर साल एक नई ऊंचाई।" : "From 2008 to today — every year a new milestone reached."}
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.5), rgba(16,185,129,0.5), transparent)" }}/>

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={i} {...fadeUp(i * 0.1)}
                    className={`relative flex items-center mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>

                    {/* Card */}
                    <div className={`flex-1 ${isLeft ? "md:pr-10" : "md:pl-10"} pl-16 md:pl-0`}>
                      <motion.div
                        whileHover={{ y: -4, boxShadow: `0 16px 40px ${m.color}20` }}
                        className="rounded-2xl overflow-hidden transition-all duration-300"
                        style={{ background: "rgba(255,255,255,0.04)", border: `1.5px solid ${m.color}30` }}>
                        <div className="h-0.5" style={{ background: `linear-gradient(90deg,${m.color},${m.color}55)` }}/>
                        <div className="p-6">
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row" : "md:flex-row"}`}>
                            <div className="p-2 rounded-xl" style={{ background: `${m.color}20`, border: `1px solid ${m.color}30` }}>
                              <m.icon size={15} style={{ color: m.color }}/>
                            </div>
                            <span className="font-serif font-bold text-2xl" style={{ color: m.color }}>{m.year}</span>
                          </div>
                          <p className="text-white/65 leading-relaxed text-[15px] font-light">{m.event}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-[#0f172a]"
                        style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`, boxShadow: `0 0 20px ${m.color}40` }}>
                        <m.icon size={16} className="text-white"/>
                      </div>
                    </div>

                    {/* Empty spacer */}
                    <div className="flex-1 hidden md:block"/>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS GALLERY ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: "rgba(245,158,11,0.08)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.25)" }}>
                <Trophy size={13}/> {isHindi ? "हमारी उपलब्धियां" : "Our Achievements"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
                {isHindi ? "माइलस्टोन का " : "Pride of "}
                <span className="text-secondary">{isHindi ? "गौरव" : "The Milestone"}</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {isHindi
                  ? "चैम्पियनशिप पदकों से लेकर बोर्ड परीक्षा की शान तक — हमारे छात्र माइलस्टोन परिवार को गर्वित करते रहते हैं।"
                  : "From championship medals to board exam glory — our students continue to make The Milestone family proud."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[280px]">
              {achievements.map((item, i) => (
                <motion.div key={i} {...scaleIn(i * 0.08)}
                  className={`relative rounded-3xl overflow-hidden shadow-lg group ${item.span ?? ""}`}
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                  <img src={item.src} alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-lg"
                      style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                      {item.badge}
                    </span>
                    <p className="text-white font-semibold text-sm leading-snug drop-shadow">{item.alt}</p>
                  </div>
                </motion.div>
              ))}

              {/* Video tile */}
              <motion.div {...scaleIn(0.4)} className="relative rounded-3xl overflow-hidden shadow-lg bg-black border border-border">
                <video src="/video4.mp4" controls playsInline preload="metadata" className="w-full h-full object-cover"/>
                <div className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                  style={{ background: "linear-gradient(135deg, #2563EB, #1d4ed8)" }}>
                  {isHindi ? "हाइलाइट्स" : "Highlights"}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

          {[
            { w: 500, h: 500, x: "-6%", y: "-20%", c: "#2563EB", dur: 11 },
            { w: 380, h: 380, x: "72%", y: "45%",  c: "#10B981", dur: 14 },
            { w: 260, h: 260, x: "38%", y: "65%",  c: "#EC4899", dur: 8  },
          ].map((o, i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}20,transparent 70%)` }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.7, 0.35] }}
              transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
          ))}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.3)" }}>
                <Crown size={12}/> {isHindi ? "माइलस्टोन क्यों" : "Why The Milestone"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                {isHindi ? "अभिभावक हमें " : "Why parents "}
                <span style={{ background: "linear-gradient(90deg,#4ade80,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {isHindi ? "क्यों चुनते हैं" : "choose us"}
                </span>
              </h2>
              <p className="text-white/55 text-lg font-light">
                {isHindi
                  ? "हमारे स्कूल की हर विशेषता एक लक्ष्य को ध्यान में रखकर बनाई गई है — आपके बच्चे की सफलता और खुशी।"
                  : "Every feature of our school is designed with one goal in mind — your child's success and happiness."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {whyUs.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)}
                  whileHover={{ y: -5, boxShadow: `0 16px 40px ${item.color}20` }}
                  className="group rounded-2xl overflow-hidden transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1.5px solid ${item.color}25` }}>
                  <div className="h-0.5" style={{ background: `linear-gradient(90deg,${item.color},${item.color}44)` }}/>
                  <div className="p-6 flex items-start gap-5">
                    <div className="p-3.5 rounded-xl flex-shrink-0 shadow-lg transition-transform group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg,${item.color},${item.color}bb)`, boxShadow: `0 4px 16px ${item.color}40` }}>
                      <item.icon size={22} className="text-white"/>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.sub}</div>
                      <span className="font-semibold text-white text-[15px] leading-snug">{item.text}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.4)} className="text-center">
              <Link href="/academics">
                <Button size="lg"
                  className="rounded-full px-12 py-6 text-base font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg,#10B981,#059669)", color: "white", border: "1px solid rgba(16,185,129,0.4)" }}>
                  {isHindi ? "शैक्षणिक देखें" : "Explore Academics"}
                  <ArrowRight className="ml-2 h-5 w-5"/>
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
