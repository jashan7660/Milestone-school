import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, Medal, Star, Award, GraduationCap, Users,
  X, ZoomIn, Sparkles, Target, Flame, Crown,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import goldGloryImg   from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777616289311.jpg";
import silverGloryImg from "@assets/SaveClip.App_614878340_18086449655035990_3947843287675199799_n_1777616304025.jpg";
import parvImg        from "@assets/top_result_1777616348864.jpg";
import boardResultImg from "@assets/image_1777616635036.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const CONFETTI_COLORS = ["#F59E0B","#EF4444","#10B981","#2563EB","#8B5CF6","#EC4899","#06B6D4"];

export default function AchievementsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  /* ── DATA ──────────────────────────────────────────────────────── */
  const heroStats = isHindi ? [
    { icon: GraduationCap, val: "100%",  label: "CBSE कक्षा X परिणाम",         color: "#2563EB", bg: "#eff6ff" },
    { icon: Crown,         val: "97%",   label: "स्कूल टॉपर — परव मित्तल",    color: "#F59E0B", bg: "#fffbeb" },
    { icon: Trophy,        val: "🥇",    label: "स्केटिंग चैम्पियनशिप — गोल्ड",color: "#EAB308", bg: "#fefce8" },
    { icon: Medal,         val: "🥈",    label: "स्केटिंग चैम्पियनशिप — सिल्वर",color: "#94A3B8",bg: "#f8fafc" },
    { icon: Target,        val: "3×",    label: "लगातार 100% बोर्ड परिणाम",   color: "#10B981", bg: "#ecfdf5" },
    { icon: Flame,         val: "15+",   label: "उत्कृष्टता के वर्ष",          color: "#EF4444", bg: "#fff1f2" },
  ] : [
    { icon: GraduationCap, val: "100%",  label: "CBSE Class X Result",          color: "#2563EB", bg: "#eff6ff" },
    { icon: Crown,         val: "97%",   label: "School Topper — Parv Mittal",  color: "#F59E0B", bg: "#fffbeb" },
    { icon: Trophy,        val: "🥇",    label: "Skating Championship — Gold",  color: "#EAB308", bg: "#fefce8" },
    { icon: Medal,         val: "🥈",    label: "Skating Championship — Silver",color: "#94A3B8", bg: "#f8fafc" },
    { icon: Target,        val: "3×",    label: "Consecutive 100% Board Results",color:"#10B981", bg: "#ecfdf5" },
    { icon: Flame,         val: "15+",   label: "Years of Excellence",          color: "#EF4444", bg: "#fff1f2" },
  ];

  const galleryItems = [
    { src: boardResultImg, titleEN: "CBSE Class X — 100% Outstanding Result 2025-26",               titleHI: "CBSE कक्षा X — 100% उत्कृष्ट परिणाम 2025-26",                    wide: true  },
    { src: parvImg,        titleEN: "Parv Mittal — School Topper, 97% CBSE Class X",                titleHI: "परव मित्तल — स्कूल टॉपर, 97% CBSE कक्षा X",                    wide: false },
    { src: goldGloryImg,   titleEN: "Rahul — Gold, 6th Chandigarh Open Skating Championship",       titleHI: "राहुल — गोल्ड, 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप",       wide: false },
    { src: silverGloryImg, titleEN: "Yash — Silver, 6th Chandigarh Open Skating Championship",      titleHI: "यश — सिल्वर, 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप",        wide: false },
  ];

  const awards = isHindi ? [
    { title: "100% बोर्ड परिणाम",              year: "2025-26", desc: "CBSE कक्षा X बोर्ड में बैठे हर छात्र ने उत्तीर्ण किया — स्कूल की शैक्षणिक कठोरता का प्रमाण।",          icon: Award,       color: "#2563EB" },
    { title: "CBSE कक्षा X टॉपर",             year: "2025-26", desc: "परव मित्तल ने 97% के उत्कृष्ट अंक प्राप्त किए — स्कूल के सर्वोच्च स्कोरर।",                           icon: Star,        color: "#F59E0B" },
    { title: "स्वर्ण — स्केटिंग चैम्पियनशिप",year: "2024",    desc: "राहुल ने 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप में स्वर्ण पदक जीता।",                                  icon: Trophy,      color: "#EAB308" },
    { title: "रजत — स्केटिंग चैम्पियनशिप",   year: "2024",    desc: "यश ने 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप में रजत पदक हासिल किया।",                                  icon: Medal,       color: "#94A3B8" },
    { title: "अंतर-विद्यालय प्रतियोगिताएं",  year: "जारी",   desc: "छात्र जिला और राज्य स्तरीय प्रश्नोत्तरी, वाद-विवाद, विज्ञान मेले और सांस्कृतिक प्रतियोगिताओं में जीतते हैं।", icon: Users,  color: "#8B5CF6" },
    { title: "लगातार तीन 100% परिणाम",        year: "2022–25", desc: "माइलस्टोन ने लगातार तीन शैक्षणिक वर्षों तक CBSE बोर्ड में 100% पास रिकॉर्ड बनाए रखा है।",             icon: GraduationCap, color: "#10B981" },
  ] : [
    { title: "100% Board Result",              year: "2025-26", desc: "Every student who appeared for CBSE Class X boards passed — a testimony to the school's academic rigour.",  icon: Award,       color: "#2563EB" },
    { title: "CBSE Class X Topper",            year: "2025-26", desc: "Parv Mittal achieved an outstanding 97% in CBSE Class X, ranking as the school's highest scorer.",          icon: Star,        color: "#F59E0B" },
    { title: "Gold — Skating Championship",    year: "2024",    desc: "Rahul brought home the Gold medal at the 6th Chandigarh Open Skating Championship.",                        icon: Trophy,      color: "#EAB308" },
    { title: "Silver — Skating Championship",  year: "2024",    desc: "Yash secured Silver at the 6th Chandigarh Open Skating Championship — a proud moment for our sports team.", icon: Medal,       color: "#94A3B8" },
    { title: "Inter-School Competitions",      year: "Ongoing", desc: "Students regularly participate and win at district & state-level quiz, debate, science fair competitions.",    icon: Users,       color: "#8B5CF6" },
    { title: "Three Consecutive 100% Results", year: "2022–25", desc: "The Milestone has maintained a 100% CBSE board pass record for three consecutive academic years.",          icon: GraduationCap, color: "#10B981" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[82vh] flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #1a1200 30%, #0a2a1a 60%, #12103a 100%)" }}>

        {/* Animated orbs */}
        {[
          { w: 520, h: 520, x: "-8%",  y: "-22%", c: "#F59E0B", dur: 10 },
          { w: 400, h: 400, x: "72%",  y: "45%",  c: "#10B981", dur: 14 },
          { w: 300, h: 300, x: "35%",  y: "65%",  c: "#8B5CF6", dur: 8  },
          { w: 240, h: 240, x: "60%",  y: "-10%", c: "#EF4444", dur: 11 },
        ].map((o, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.85, 0.4] }}
            transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
        ))}

        {/* Confetti dots */}
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
            style={{
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 3 + (i % 4), delay: i * 0.2, ease: "easeInOut" }}/>
        ))}

        {/* Floating emojis */}
        {["🏆", "🥇", "🌟", "🎓", "🥈", "🎖️"].map((emoji, i) => (
          <motion.div key={i} className="absolute text-2xl select-none pointer-events-none hidden lg:block"
            style={{ left: `${[6, 88, 14, 80, 42, 65][i]}%`, top: `${[18, 12, 74, 70, 10, 80][i]}%` }}
            animate={{ y: [0, -16, 0], rotate: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4 + i * 0.8, delay: i * 0.6, ease: "easeInOut" }}>
            {emoji}
          </motion.div>
        ))}

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-28 md:py-36 text-center">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7"
            style={{ background: "rgba(245,158,11,0.18)", border: "1.5px solid rgba(245,158,11,0.45)", color: "#fcd34d", backdropFilter: "blur(12px)" }}
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>🏆</motion.span>
            {isHindi ? "हमारा गौरव" : "Our Pride & Glory"}
            <motion.span className="w-2 h-2 rounded-full bg-yellow-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}/>
          </motion.div>

          <motion.h1 className="font-serif font-extrabold text-white leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 6rem)", textShadow: "0 4px 40px rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            {isHindi ? "माइलस्टोन की" : "Excellence"}
            <br/>
            <span style={{ background: "linear-gradient(90deg,#fbbf24,#f87171,#a78bfa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {isHindi ? "शानदार उपलब्धियां" : "Hall of Fame"}
            </span>
          </motion.h1>

          <motion.p className="text-white/65 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-14"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            {isHindi
              ? "बोर्ड परीक्षा की शान से लेकर चैम्पियनशिप पोडियम तक — हमारे छात्र माइलस्टोन परिवार को बेहद गर्वित करते हैं।"
              : "From board exam glory to championship podiums — our students make The Milestone family immensely proud, year after year."}
          </motion.p>

          {/* 6 stat cards in hero */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
            {heroStats.map((s, i) => (
              <motion.div key={i}
                whileHover={{ y: -6, scale: 1.05 }}
                className="text-center py-5 px-2 rounded-2xl relative overflow-hidden group cursor-default"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)", backdropFilter: "blur(16px)" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at center,${s.color}28,transparent 70%)` }}/>
                <div className="text-2xl font-serif font-extrabold text-white mb-0.5">{s.val}</div>
                <p className="text-white/50 text-[10px] font-medium leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 70L1440 70L1440 25C1200 70 960 5 720 25C480 45 240 5 0 25Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ── SCHOOL TOPPER SPOTLIGHT ───────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(245,158,11,0.12)", color: "#D97706", border: "1.5px solid rgba(245,158,11,0.3)" }}>
              <Crown size={11}/> {isHindi ? "स्टार परफॉर्मर" : "Star Performer"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
              {isHindi ? "स्कूल " : "School "}
              <span className="text-gradient">{isHindi ? "टॉपर का सम्मान" : "Topper Spotlight"}</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, #fffbeb 0%, #fef9c3 40%, #ecfdf5 100%)", border: "2px solid rgba(245,158,11,0.3)" }}>
              {/* Rainbow top bar */}
              <div className="h-2" style={{ background: "linear-gradient(90deg,#F59E0B,#EF4444,#8B5CF6,#2563EB,#10B981)" }}/>
              {/* Confetti dots decoration */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="absolute w-2 h-2 rounded-full opacity-30 hidden md:block"
                  style={{ left: `${[5,92,15,80,30,70,48,60][i]}%`, top: `${[15,20,75,70,40,50,80,10][i]}%`, background: CONFETTI_COLORS[i] }}/>
              ))}

              <div className="p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
                {/* Photo */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    animate={{ boxShadow: ["0 0 0 0 rgba(245,158,11,0.4)", "0 0 0 16px rgba(245,158,11,0)", "0 0 0 0 rgba(245,158,11,0)"] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="rounded-full">
                    <img src={parvImg} alt="Parv Mittal"
                      className="w-44 h-44 rounded-full object-cover object-top border-4 border-amber-400 shadow-2xl"/>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
                    style={{ background: "linear-gradient(135deg,#F59E0B,#EF4444)" }}>
                    👑
                  </motion.div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: "rgba(245,158,11,0.2)", color: "#B45309", border: "1px solid rgba(245,158,11,0.4)" }}>
                    <Star size={10} className="fill-amber-600"/> {isHindi ? "स्कूल टॉपर 2025-26" : "School Topper 2025-26"}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-800 mb-2">Parv Mittal</h3>
                  <p className="text-slate-500 text-sm mb-4">{isHindi ? "CBSE कक्षा X — 2025-26" : "CBSE Class X — 2025-26"}</p>

                  <div className="flex items-center gap-4 justify-center md:justify-start mb-5">
                    <div>
                      <motion.div className="text-6xl font-serif font-extrabold"
                        style={{ background: "linear-gradient(135deg,#F59E0B,#EF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }} transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.2 }}>
                        97%
                      </motion.div>
                      <p className="text-slate-400 text-xs font-medium">{isHindi ? "कुल प्रतिशत" : "Overall Percentage"}</p>
                    </div>
                    <div className="h-14 w-px bg-slate-200"/>
                    <div className="text-left">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {isHindi
                          ? "शानदार प्रदर्शन के साथ स्कूल के सर्वोच्च स्कोरर।"
                          : "Outstanding score making Parv the school's highest scorer in CBSE Class X boards."}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {["🏆 School Topper", "📚 CBSE Class X", "⭐ 97%", "🎓 2025-26"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(245,158,11,0.15)", color: "#92400E", border: "1px solid rgba(245,158,11,0.25)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENT GALLERY ───────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f0f7ff 0%, #f0fdf4 50%, #faf5ff 100%)" }}>
        <div className="absolute inset-0 dark:opacity-5 opacity-100"
          style={{ backgroundImage: "radial-gradient(#2563EB15 1px, transparent 1px)", backgroundSize: "32px 32px" }}/>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(37,99,235,0.10)", color: "#2563EB", border: "1.5px solid rgba(37,99,235,0.25)" }}>
              <Sparkles size={11}/> {isHindi ? "फोटो गैलरी" : "Photo Gallery"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
              {isHindi ? "विजय के " : "Victory in "}
              <span className="text-gradient">{isHindi ? "पलों की गैलरी" : "Every Frame"}
              </span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">{isHindi ? "क्लिक करके बड़ा देखें" : "Click any photo to view full size"}</p>
          </motion.div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {galleryItems.map((item, i) => (
              <motion.div key={i}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
                onClick={() => setLightbox({ src: item.src, title: isHindi ? item.titleHI : item.titleEN })}
                className={`relative rounded-2xl overflow-hidden shadow-md cursor-pointer group transition-all duration-400
                  ${item.wide ? "md:col-span-2" : ""}`}>
                <img src={item.src} alt={isHindi ? item.titleHI : item.titleEN}
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={{ height: item.wide ? "280px" : "260px" }}/>
                {/* Gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.2) 60%, transparent 100%)" }}>
                  <div className="self-end">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <ZoomIn size={16} className="text-white"/>
                    </div>
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug line-clamp-2">
                    {isHindi ? item.titleHI : item.titleEN}
                  </p>
                </div>
                {/* Always-visible subtle badge for featured */}
                {i === 0 && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#2563EB,#10B981)" }}>
                    <Star size={9} className="fill-white"/> {isHindi ? "फीचर्ड" : "Featured"}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS GRID ───────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "rgba(16,185,129,0.10)", color: "#059669", border: "1.5px solid rgba(16,185,129,0.28)" }}>
              <Award size={11}/> {isHindi ? "पुरस्कार और मान्यताएं" : "Awards & Recognitions"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
              {isHindi ? "जीतने की " : "A Culture "}
              <span className="text-gradient">{isHindi ? "संस्कृति" : "of Winning"}</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              {isHindi
                ? "शैक्षणिक उत्कृष्टता, खेल की शान — माइलस्टोन हर तरह की सफलता का जश्न मनाता है।"
                : "Academic excellence, sporting glory — The Milestone celebrates every kind of success."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((a, i) => (
              <motion.div key={i}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}
                className="group bg-card border border-border rounded-2xl p-7 relative overflow-hidden transition-all duration-300">
                {/* Coloured left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: a.color }}/>
                {/* Hover colour bloom */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle,${a.color}18,transparent 70%)`, transform: "translate(30%,-30%)" }}/>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${a.color}15`, border: `1.5px solid ${a.color}35` }}>
                    <a.icon size={22} style={{ color: a.color }}/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif font-extrabold text-foreground text-base leading-snug">{a.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                        style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}30` }}>
                        {a.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ─────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #0f1e0a 50%, #1e1b4b 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "44px 44px" }}/>
        {/* Ambient orbs */}
        <div className="absolute left-[-10%] top-[-10%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,#F59E0B18,transparent 70%)" }}/>
        <div className="absolute right-[-5%] bottom-[-5%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,#10B98118,transparent 70%)" }}/>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: "rgba(245,158,11,0.18)", color: "#fcd34d", border: "1.5px solid rgba(245,158,11,0.4)" }}>
              🎬 {isHindi ? "एक्शन में" : "In Action"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white mb-3">
              {isHindi ? "हमारे छात्रों को " : "Watch Our "}
              <span style={{ background: "linear-gradient(90deg,#fbbf24,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {isHindi ? "चमकते देखें" : "Students Shine"}
              </span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {isHindi ? "हमारे छात्रों की उपलब्धियों को असली रूप में देखें।" : "Watch our students' achievements come to life on screen."}
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: "2px solid rgba(245,158,11,0.3)" }}>
            <div className="h-1.5" style={{ background: "linear-gradient(90deg,#F59E0B,#EF4444,#8B5CF6,#10B981)" }}/>
            <div className="bg-black">
              <video src="/video4.mp4" controls playsInline preload="metadata" className="w-full h-auto"/>
            </div>
            <div className="px-6 py-4" style={{ background: "rgba(255,255,255,0.06)" }}>
              <p className="text-white/70 text-sm font-semibold">{isHindi ? "द माइलस्टोन सी.सेक. स्कूल — उपलब्धि क्षण" : "The Milestone Sr. Sec. School — Achievement Moments"}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────── */}
      <section className="py-20"
        style={{ background: "linear-gradient(135deg, #fffbeb 0%, #ecfdf5 50%, #eff6ff 100%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-slate-800 mb-3">
              {isHindi ? "अगला चैम्पियन आपका बच्चा हो सकता है!" : "Your Child Could Be Our Next Champion!"}
            </h2>
            <p className="text-slate-500 text-base mb-8 max-w-xl mx-auto">
              {isHindi
                ? "माइलस्टोन में हर छात्र को उत्कृष्टता प्राप्त करने के लिए प्रेरित और समर्थित किया जाता है।"
                : "At The Milestone, every student is inspired and supported to achieve their own excellence — academic or beyond."}
            </p>
            <a href="/admissions"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-white text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#F59E0B,#EF4444)" }}>
              🎓 {isHindi ? "आज ही प्रवेश लें" : "Enroll Your Child Today"} →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ background: "rgba(5,10,20,0.93)", backdropFilter: "blur(18px)" }}
            onClick={() => setLightbox(null)}>
            <motion.div className="relative max-w-4xl w-full"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={e => e.stopPropagation()}>
              <div className="h-1.5 rounded-t-2xl" style={{ background: "linear-gradient(90deg,#F59E0B,#EF4444,#8B5CF6,#10B981)" }}/>
              <img src={lightbox.src} alt={lightbox.title}
                className="w-full max-h-[78vh] object-contain bg-black rounded-b-2xl shadow-2xl"/>
              <div className="mt-4 px-2 flex items-start justify-between gap-4">
                <p className="text-white/75 text-sm md:text-base leading-snug">{lightbox.title}</p>
                <button onClick={() => setLightbox(null)}
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/20 transition-colors">
                  <X size={16} className="text-white"/>
                </button>
              </div>
            </motion.div>
            <p className="absolute bottom-5 text-white/25 text-xs">{isHindi ? "बंद करने के लिए क्लिक करें" : "Click anywhere to close"}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
