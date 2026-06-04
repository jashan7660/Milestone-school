import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages, GraduationCap, Layers, Lightbulb, BarChart3, ArrowRight, Sparkles, Star, CheckCircle2 } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

/* ── shared helpers ─────────────────────────────────────────── */
const NAVY   = "#071B3A";
const NAVY2  = "#0A234A";
const CYAN   = "#06B6D4";
const BLUE   = "#3B82F6";
const EMERALD= "#10B981";
const PURPLE = "#8B5CF6";
const GOLD   = "#F59E0B";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const GLASS = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.11)",
  backdropFilter: "blur(18px)",
};

const LIGHT_CARD = {
  background: "white",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
};

export default function AcademicsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  /* ── DATA ─────────────────────────────────────────────────── */
  const heroStats = [
    { val: "100%", label: isHindi ? "बोर्ड पास रेट" : "Board Pass Rate",   color: EMERALD },
    { val: "15+",  label: isHindi ? "उत्कृष्टता के वर्ष" : "Years of Excellence", color: GOLD   },
    { val: "1200+",label: isHindi ? "सक्रिय छात्र" : "Active Students",    color: CYAN   },
    { val: "4",    label: isHindi ? "XI–XII स्ट्रीम" : "XI–XII Streams",   color: PURPLE },
    { val: "CBSE", label: isHindi ? "बोर्ड संबद्धता" : "Board Affiliation", color: BLUE   },
    { val: "80+",  label: isHindi ? "अनुभवी शिक्षक" : "Expert Faculty",    color: EMERALD },
  ];

  const classes = isHindi ? [
    { range: "नर्सरी – KG", label: "प्रारंभिक बचपन", desc: "सामाजिक, संज्ञानात्मक और मोटर कौशल विकसित करने के लिए खेल-आधारित शिक्षा।", color: GOLD, emoji: "🌱" },
    { range: "I – V",        label: "प्राथमिक विद्यालय", desc: "साक्षरता, गणित, विज्ञान और सामाजिक अध्ययन में मजबूत आधार।", color: BLUE, emoji: "📖" },
    { range: "VI – VIII",    label: "मध्य विद्यालय", desc: "वैचारिक गहराई, परियोजना-आधारित कार्य और आलोचनात्मक सोच।", color: PURPLE, emoji: "🔭" },
    { range: "IX – X",       label: "माध्यमिक (CBSE)", desc: "बोर्ड परीक्षा उत्कृष्टता पर ध्यान देने वाला कठोर CBSE पाठ्यक्रम।", color: EMERALD, emoji: "🎯" },
    { range: "XI – XII",     label: "वरिष्ठ माध्यमिक", desc: "कॉलेज और करियर के लिए विशेषज्ञ स्ट्रीम।", color: CYAN, emoji: "🎓" },
  ] : [
    { range: "Nursery – KG", label: "Early Childhood",    desc: "Play-based learning to develop social, cognitive, and motor skills.",              color: GOLD,    emoji: "🌱" },
    { range: "I – V",        label: "Primary School",     desc: "Strong foundation in literacy, numeracy, science, and social studies.",           color: BLUE,    emoji: "📖" },
    { range: "VI – VIII",    label: "Middle School",      desc: "Conceptual depth, project-based work, and emerging critical thinking.",           color: PURPLE,  emoji: "🔭" },
    { range: "IX – X",       label: "Secondary (CBSE)",   desc: "Rigorous CBSE curriculum with a focus on board exam excellence.",                 color: EMERALD, emoji: "🎯" },
    { range: "XI – XII",     label: "Senior Secondary",   desc: "Specialised streams to prepare students for college and careers.",                color: CYAN,    emoji: "🎓" },
  ];

  const streams = isHindi ? [
    { name: "विज्ञान (PCM)", icon: FlaskConical, subjects: ["भौतिकी", "रसायन विज्ञान", "गणित", "अंग्रेजी", "कंप्यूटर विज्ञान / शारीरिक शिक्षा"], color: BLUE,    glow: `${BLUE}18`   },
    { name: "विज्ञान (PCB)", icon: FlaskConical, subjects: ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "अंग्रेजी", "शारीरिक शिक्षा"],                color: EMERALD, glow: `${EMERALD}18`},
    { name: "वाणिज्य",       icon: BarChart3,    subjects: ["लेखाशास्त्र", "व्यवसाय अध्ययन", "अर्थशास्त्र", "अंग्रेजी", "गणित / सूचना विज्ञान"],  color: GOLD,    glow: `${GOLD}18`   },
    { name: "कला / मानविकी",  icon: BookOpen,     subjects: ["इतिहास", "राजनीति विज्ञान", "भूगोल", "अंग्रेजी", "हिंदी / समाजशास्त्र"],             color: PURPLE,  glow: `${PURPLE}18` },
  ] : [
    { name: "Science (PCM)",    icon: FlaskConical, subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science / Physical Education"], color: BLUE,    glow: `${BLUE}18`   },
    { name: "Science (PCB)",    icon: FlaskConical, subjects: ["Physics", "Chemistry", "Biology", "English", "Physical Education"],                         color: EMERALD, glow: `${EMERALD}18`},
    { name: "Commerce",         icon: BarChart3,    subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics / Informatics"],     color: GOLD,    glow: `${GOLD}18`   },
    { name: "Arts / Humanities",icon: BookOpen,     subjects: ["History", "Political Science", "Geography", "English", "Hindi / Sociology"],                color: PURPLE,  glow: `${PURPLE}18` },
  ];

  const methodology = isHindi ? [
    { icon: MonitorPlay,   title: "स्मार्ट क्लासरूम",       desc: "प्रत्येक कक्षा में इंटरैक्टिव डिजिटल बोर्ड और मल्टीमीडिया टूल।", color: CYAN   },
    { icon: FlaskConical,  title: "व्यावहारिक शिक्षा",      desc: "भौतिकी, रसायन, जीव विज्ञान और कंप्यूटर विज्ञान में लैब सत्र।",  color: EMERALD},
    { icon: Lightbulb,     title: "अवधारणा-प्रथम दृष्टिकोण",desc: "रट्टा लगाने के बजाय गहरी समझ पर ध्यान देते हैं।",               color: GOLD   },
    { icon: Layers,        title: "नियमित मूल्यांकन",        desc: "इकाई परीक्षण, परियोजना कार्य और मॉक बोर्ड परीक्षाएं।",          color: BLUE   },
    { icon: Languages,     title: "अंग्रेजी दक्षता",         desc: "संचार कौशल के लिए समर्पित अंग्रेजी बोलने और लेखन सत्र।",       color: PURPLE },
    { icon: GraduationCap, title: "करियर मार्गदर्शन",        desc: "प्रतियोगी परीक्षाओं और कॉलेज चयन के लिए परामर्श।",              color: CYAN   },
  ] : [
    { icon: MonitorPlay,   title: "Smart Classrooms",      desc: "Every classroom equipped with digital boards and multimedia tools for visual learning.", color: CYAN   },
    { icon: FlaskConical,  title: "Practical Learning",    desc: "Lab sessions in Physics, Chemistry, Biology, and CS reinforce classroom theory.",       color: EMERALD},
    { icon: Lightbulb,     title: "Concept-First Approach",desc: "Teachers focus on deep understanding over rote learning — strong foundations first.",   color: GOLD   },
    { icon: Layers,        title: "Regular Assessments",   desc: "Unit tests, project work, and mock board exams ensure continuous preparedness.",         color: BLUE   },
    { icon: Languages,     title: "English Proficiency",   desc: "Dedicated spoken English and writing sessions build communication skills.",               color: PURPLE },
    { icon: GraduationCap, title: "Career Guidance",       desc: "Senior students receive counselling for competitive exams and college selection.",        color: CYAN   },
  ];

  const floatingEmojis = ["📚","🎓","🔬","✏️","🏆","💡","📐","🌟"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background: `linear-gradient(145deg, ${NAVY} 0%, ${NAVY2} 45%, #0a1f3a 75%, #0d1535 100%)` }}>

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "52px 52px" }}/>

        {/* Animated orbs */}
        {[
          { w: 560, h: 560, x: "-10%", y: "-20%", c: BLUE,    dur: 11 },
          { w: 420, h: 420, x: "70%",  y: "48%",  c: EMERALD, dur: 15 },
          { w: 320, h: 320, x: "38%",  y: "62%",  c: PURPLE,  dur: 9  },
          { w: 260, h: 260, x: "62%",  y: "-8%",  c: CYAN,    dur: 13 },
        ].map((o, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}25,transparent 70%)` }}
            animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.75, 0.35] }}
            transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
        ))}

        {/* Floating dots */}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
            style={{ left: `${(i * 4.2) % 100}%`, top: `${(i * 7.3 + 10) % 90}%`, background: [CYAN,BLUE,PURPLE,EMERALD,GOLD][i % 5] }}
            animate={{ y: [0,-26,0], opacity: [0.2,0.7,0.2], scale:[1,1.5,1] }}
            transition={{ repeat: Infinity, duration: 3 + (i % 5), delay: i * 0.18, ease: "easeInOut" }}/>
        ))}

        {/* Floating emojis */}
        {floatingEmojis.map((emoji, i) => (
          <motion.div key={i} className="absolute text-2xl select-none pointer-events-none hidden lg:block"
            style={{ left: `${[5,88,12,82,46,68,22,58][i]}%`, top: `${[16,10,76,72,8,82,42,30][i]}%` }}
            animate={{ y: [0,-18,0], rotate: [-4,4,-4], opacity: [0.45,0.9,0.45] }}
            transition={{ repeat: Infinity, duration: 4 + i * 0.7, delay: i * 0.5, ease: "easeInOut" }}>
            {emoji}
          </motion.div>
        ))}

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-32 md:py-40 text-center">
          {/* Badge */}
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{ background: `rgba(6,182,212,0.15)`, border: `1.5px solid rgba(6,182,212,0.4)`, color: "#67e8f9", backdropFilter: "blur(12px)" }}
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <motion.span animate={{ rotate:[0,15,-15,0] }} transition={{ repeat:Infinity, duration:2 }}>📚</motion.span>
            {isHindi ? "शैक्षणिक उत्कृष्टता" : "Academic Excellence"}
            <motion.span className="w-2 h-2 rounded-full bg-cyan-400" animate={{ opacity:[1,0.3,1] }} transition={{ repeat:Infinity, duration:0.9 }}/>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="font-serif font-extrabold text-white leading-tight tracking-tight mb-6"
            style={{ fontSize:"clamp(2.6rem,7.5vw,5.5rem)", textShadow:"0 4px 40px rgba(0,0,0,0.55)" }}
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15, ease:[0.22,1,0.36,1] }}>
            {isHindi ? "शैक्षणिक और" : "Academics &"}
            <br/>
            <span style={{ background:`linear-gradient(90deg,${CYAN},${BLUE},${PURPLE},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "पाठ्यक्रम" : "Curriculum"}
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p className="text-white/65 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-14"
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}>
            {isHindi
              ? "नर्सरी से कक्षा XII तक CBSE-संरेखित शिक्षा — जो जिज्ञासा को प्रेरित करती है और आजीवन सीखने वाले बनाती है।"
              : "CBSE-aligned education from Nursery to Class XII — designed to challenge, inspire, and build lifelong learners."}
          </motion.p>

          {/* Stat glass cards */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.7 }}>
            {heroStats.map((s, i) => (
              <motion.div key={i} whileHover={{ y:-6, scale:1.06 }}
                className="text-center py-5 px-2 rounded-2xl relative overflow-hidden group cursor-default"
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.13)", backdropFilter:"blur(16px)" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background:`radial-gradient(circle at center,${s.color}30,transparent 70%)` }}/>
                <div className="text-2xl font-serif font-extrabold text-white mb-0.5" style={{ color: s.color }}>{s.val}</div>
                <p className="text-white/50 text-[10px] font-medium leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 70L1440 70L1440 25C1200 70 960 5 720 25C480 45 240 5 0 25Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ══ CURRICULUM OVERVIEW ═════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(6,182,212,0.1)`, color:"#0891b2", border:`1.5px solid rgba(6,182,212,0.3)` }}>
              <Sparkles size={11}/> {isHindi ? "CBSE पाठ्यक्रम" : "CBSE Curriculum"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-4 leading-tight">
              {isHindi ? "कल की दुनिया के लिए बना " : "A curriculum built for "}
              <span style={{ background:`linear-gradient(90deg,${CYAN},${BLUE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "पाठ्यक्रम" : "tomorrow's world"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp(0.1)}>
              <p className="text-foreground/65 text-lg leading-relaxed mb-6">
                {isHindi
                  ? "हम नर्सरी से कक्षा XII तक CBSE पाठ्यक्रम का पालन करते हैं — भारत के सबसे सम्मानित शिक्षा ढांचों में से एक। हमारा दृष्टिकोण आलोचनात्मक सोच, रचनात्मकता और समस्या-समाधान कौशल विकसित करता है।"
                  : "We follow the CBSE curriculum from Nursery through Class XII — one of India's most respected frameworks. Our approach goes beyond textbooks to build critical thinking, creativity, and problem-solving skills."}
              </p>
              <p className="text-foreground/65 text-lg leading-relaxed mb-8">
                {isHindi
                  ? "प्रत्येक विषय स्मार्ट क्लासरूम टूल, नियमित मूल्यांकन और समर्पित संदेह-निवारण सत्रों के साथ अवधारणा-प्रथम पद्धति का उपयोग करके पढ़ाया जाता है।"
                  : "Every subject is taught using a concept-first methodology with smart classroom tools, regular assessments, and dedicated doubt-clearing sessions to ensure no student is left behind."}
              </p>
              <div className="flex flex-wrap gap-3">
                {(isHindi ? ["NCERT पाठ्यपुस्तकें","डिजिटल संसाधन","प्रायोगिक सत्र","मॉक बोर्ड परीक्षा"] : ["NCERT Textbooks","Digital Resources","Practical Sessions","Mock Board Exams"]).map((tag, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.1)", color:"rgba(0,0,0,0.7)" }}>
                    <CheckCircle2 size={13} style={{ color: EMERALD }}/> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ border:"2px solid rgba(0,0,0,0.08)" }}>
                <video
                  src="/academics-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[380px] object-cover block"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background:"linear-gradient(to top, rgba(7,27,58,0.7) 0%, transparent 60%)" }}/>
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <div className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-white" style={GLASS}>
                    🖥️ {isHindi ? "स्मार्ट क्लासरूम — हर कक्षा में" : "Smart Classrooms — In Every Classroom"}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CLASSES OFFERED ═════════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(139,92,246,0.1)`, color:"#7c3aed", border:"1.5px solid rgba(139,92,246,0.3)" }}>
              <GraduationCap size={11}/> {isHindi ? "उपलब्ध कक्षाएं" : "Classes Offered"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "नर्सरी से कक्षा XII —" : "Nursery to Class XII —"}
              <br/>
              <span style={{ background:`linear-gradient(90deg,${PURPLE},${CYAN})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "सब एक छत के नीचे" : "all under one roof"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {classes.map((c, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} whileHover={{ y:-8, scale:1.03 }}
                className="relative text-center p-7 rounded-3xl overflow-hidden group cursor-default"
                style={LIGHT_CARD}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                  style={{ background:`radial-gradient(circle at center,${c.color}12,transparent 70%)` }}/>
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                  style={{ background:`linear-gradient(90deg,transparent,${c.color},transparent)`, opacity:0.8 }}/>
                <div className="text-4xl mb-4">{c.emoji}</div>
                <div className="text-xl font-serif font-extrabold mb-1" style={{ color: c.color }}>{c.range}</div>
                <div className="text-foreground/60 font-semibold text-sm mb-3">{c.label}</div>
                <p className="text-foreground/45 text-xs leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STREAMS ═════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(16,185,129,0.1)`, color:"#059669", border:"1.5px solid rgba(16,185,129,0.3)" }}>
              <Star size={11} className="fill-emerald-500"/> {isHindi ? "वरिष्ठ माध्यमिक स्ट्रीम" : "Senior Secondary Streams"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "अपना मार्ग चुनें —" : "Choose your path —"}
              <br/>
              <span style={{ background:`linear-gradient(90deg,${EMERALD},${BLUE},${PURPLE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "कक्षा XI और XII" : "Classes XI & XII"}
              </span>
            </h2>
            <p className="text-foreground/55 mt-5 text-lg max-w-xl mx-auto">
              {isHindi ? "हर छात्र की महत्वाकांक्षा और योग्यता के अनुसार चार स्ट्रीम।" : "Four streams tailored to every student's ambition and aptitude."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {streams.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y:-6 }}
                className="relative p-8 rounded-3xl overflow-hidden group"
                style={LIGHT_CARD}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                  style={{ background:`radial-gradient(ellipse at top left,${s.glow},transparent 65%)` }}/>
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                  style={{ background:`linear-gradient(90deg,transparent,${s.color},transparent)`, opacity:0.8 }}/>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background:`${s.color}15`, border:`1px solid ${s.color}30` }}>
                    <s.icon size={22} style={{ color: s.color }}/>
                  </div>
                  <h3 className="text-xl font-serif font-extrabold text-foreground">{s.name}</h3>
                </div>
                <ul className="space-y-2.5 relative z-10">
                  {s.subjects.map((sub, j) => (
                    <li key={j} className="flex items-center gap-3 text-foreground/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }}/>
                      {sub}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEACHING METHODOLOGY ════════════════════════════════ */}
      <section className="py-24" style={{ background: "#f8fafc" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(59,130,246,0.1)`, color:"#2563eb", border:"1.5px solid rgba(59,130,246,0.3)" }}>
              <Lightbulb size={11}/> {isHindi ? "शिक्षण दृष्टिकोण" : "Teaching Approach"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "हम सीखने को" : "How we make"}
              <br/>
              <span style={{ background:`linear-gradient(90deg,${BLUE},${CYAN},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "यादगार कैसे बनाते हैं" : "learning stick"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {methodology.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} whileHover={{ y:-7, scale:1.02 }}
                className="relative p-7 rounded-3xl overflow-hidden group cursor-default"
                style={LIGHT_CARD}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                  style={{ background:`radial-gradient(circle at top left,${m.color}10,transparent 65%)` }}/>
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                  style={{ background:`linear-gradient(90deg,${m.color},transparent)`, opacity:0.6 }}/>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background:`${m.color}12`, border:`1px solid ${m.color}25` }}>
                  <m.icon size={24} style={{ color: m.color }}/>
                </div>
                <h3 className="text-lg font-serif font-extrabold text-foreground mb-3 relative z-10">{m.title}</h3>
                <p className="text-foreground/55 leading-relaxed text-sm relative z-10">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESULTS CTA ═════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp()}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
              style={{ background:`rgba(16,185,129,0.1)`, color:"#059669", border:`1.5px solid rgba(16,185,129,0.3)` }}>
              🏆 {isHindi ? "हमारी उपलब्धि" : "Our Achievement"}
            </span>

            <div className="relative max-w-3xl mx-auto p-10 md:p-14 rounded-3xl overflow-hidden"
              style={{ background:"white", border:"1px solid rgba(0,0,0,0.08)", boxShadow:"0 8px 40px rgba(0,0,0,0.08)" }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl"
                style={{ background:`linear-gradient(90deg,${BLUE},${EMERALD},${GOLD},${PURPLE})` }}/>

              <motion.div
                initial={{ scale:0.5, opacity:0 }} whileInView={{ scale:1, opacity:1 }}
                viewport={{ once:true }} transition={{ type:"spring", stiffness:160, damping:18, delay:0.1 }}
                className="font-serif font-extrabold leading-none mb-4"
                style={{ fontSize:"clamp(4rem,12vw,8rem)", background:`linear-gradient(135deg,${EMERALD},${BLUE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                100%
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-foreground mb-3">
                {isHindi ? "CBSE कक्षा X परिणाम — 2025-26" : "CBSE Class X Result — 2025-26"}
              </h2>
              <p className="text-foreground/55 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                {isHindi
                  ? "कक्षा X CBSE बोर्ड परीक्षा में बैठने वाले हर एक छात्र ने उत्कृष्टता के साथ उत्तीर्ण किया।"
                  : "Every single student who appeared for the Class X CBSE board exam passed with distinction. Parv Mittal topped with 97%."}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {(isHindi ? [
                  { emoji:"🥇", label:"टॉपर: परव मित्तल", val:"97%" },
                  { emoji:"📈", label:"पास प्रतिशत", val:"100%" },
                  { emoji:"🎓", label:"CBSE बोर्ड", val:"2025–26" },
                ] : [
                  { emoji:"🥇", label:"Topper: Parv Mittal", val:"97%" },
                  { emoji:"📈", label:"Pass Percentage", val:"100%" },
                  { emoji:"🎓", label:"CBSE Board", val:"2025–26" },
                ]).map(({ emoji, label, val }, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                    style={{ background:"rgba(0,0,0,0.04)", border:"1px solid rgba(0,0,0,0.08)" }}>
                    <span className="text-xl">{emoji}</span>
                    <div className="text-left">
                      <p className="text-xs text-foreground/40 font-medium">{label}</p>
                      <p className="text-base font-extrabold text-foreground">{val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/achievements">
                <motion.button whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white shadow-lg relative overflow-hidden"
                  style={{ background:`linear-gradient(135deg,${EMERALD},${BLUE})`, boxShadow:`0 8px 30px rgba(16,185,129,0.3)` }}>
                  <span className="relative z-10">{isHindi ? "सभी उपलब्धियां देखें" : "See All Achievements"}</span>
                  <ArrowRight size={16} className="relative z-10"/>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
