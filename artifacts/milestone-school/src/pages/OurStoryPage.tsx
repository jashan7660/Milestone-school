import { motion } from "framer-motion";
import { Eye, Target, Heart, CheckCircle2, BookOpen, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

/* ── Cinematic Story Video ─────────────────────────────────── */
function StoryVideo({ isHindi }: { isHindi: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(true);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) setStarted(true);
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const handleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="relative py-0 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#070e1c 0%,#0a1f14 50%,#0d0a22 100%)" }}>

      {/* Ambient glow blobs */}
      {[
        { c:"#2563eb22", w:600, h:600, l:"-10%", t:"-20%" },
        { c:"#10b98118", w:480, h:480, l:"65%",  t:"30%"  },
        { c:"#8b5cf614", w:360, h:360, l:"30%",  t:"-10%" },
      ].map((b,i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width:b.w, height:b.h, left:b.l, top:b.t,
                   background:`radial-gradient(circle,${b.c},transparent 70%)`,
                   filter:"blur(40px)" }}/>
      ))}

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background:"rgba(37,99,235,0.15)", color:"#60a5fa", border:"1px solid rgba(37,99,235,0.3)" }}>
            🎬 {isHindi ? "हमारी झलक" : "Watch Our Story"}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            {isHindi ? "एक झलक " : "A Glimpse "}
            <span style={{ background:"linear-gradient(90deg,#60a5fa,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "माइलस्टोन की" : "Inside Milestone"}
            </span>
          </h2>
          <p className="text-white/45 text-sm max-w-xl mx-auto">
            {isHindi
              ? "हमारे जीवंत परिसर, समर्पित शिक्षकों और उत्साही छात्रों की दुनिया में कदम रखें।"
              : "Step into our vibrant campus, meet our dedicated faculty, and experience the energy of our students."}
          </p>
        </motion.div>

        {/* Video Card */}
        <motion.div {...fadeUp(0.1)}
          className="relative mx-auto max-w-4xl"
          style={{ borderRadius: 24, overflow: "hidden",
                   boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 32px 80px rgba(0,0,0,0.70), 0 0 60px rgba(37,99,235,0.18)" }}>

          {/* Neon top edge */}
          <div className="absolute top-0 left-0 right-0 h-[2px] z-20"
            style={{ background:"linear-gradient(90deg,transparent,#60a5fa,#34d399,#60a5fa,transparent)" }}/>

          <video
            ref={videoRef}
            src="/school-story.mp4"
            autoPlay
            playsInline
            loop
            muted={muted}
            onClick={handlePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="w-full block"
            style={{ aspectRatio:"16/9", objectFit:"cover", cursor:"pointer", display:"block" }}
          />

          {/* Gradient overlay (fades at bottom) */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background:"linear-gradient(to top,rgba(7,14,28,0.55) 0%,transparent 40%)" }}/>

          {/* Big play button overlay — shown before first play */}
          {!started && (
            <motion.div
              initial={{ opacity:0, scale:0.8 }}
              animate={{ opacity:1, scale:1 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
              onClick={handlePlay}>
              <motion.div
                whileHover={{ scale:1.12 }}
                whileTap={{ scale:0.95 }}
                className="flex items-center justify-center rounded-full"
                style={{ width:88, height:88,
                         background:"rgba(255,255,255,0.12)",
                         backdropFilter:"blur(16px)",
                         border:"2px solid rgba(255,255,255,0.30)",
                         boxShadow:"0 0 0 16px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.50)" }}>
                <Play size={34} fill="white" color="white" style={{ marginLeft:4 }}/>
              </motion.div>
            </motion.div>
          )}

          {/* Bottom controls bar */}
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-3"
            style={{ background:"linear-gradient(to top,rgba(7,14,28,0.90),transparent)",
                     backdropFilter: started ? "none" : undefined }}>
            <motion.button
              onClick={handlePlay}
              whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
              className="flex items-center justify-center rounded-full"
              style={{ width:40, height:40,
                       background:"rgba(255,255,255,0.12)",
                       border:"1px solid rgba(255,255,255,0.20)" }}>
              {playing
                ? <Pause size={16} fill="white" color="white"/>
                : <Play  size={16} fill="white" color="white" style={{ marginLeft:2 }}/>}
            </motion.button>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={handleMute}
                whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
                className="flex items-center justify-center rounded-full"
                style={{ width:36, height:36,
                         background:"rgba(255,255,255,0.10)",
                         border:"1px solid rgba(255,255,255,0.18)" }}>
                {muted
                  ? <VolumeX size={14} color="rgba(255,255,255,0.7)"/>
                  : <Volume2 size={14} color="rgba(255,255,255,0.7)"/>}
              </motion.button>
              <span className="text-white/50 text-[11px] font-medium hidden sm:inline">
                {isHindi ? "द माइलस्टोन सी.सेक. स्कूल" : "The Milestone Sr. Sec. School"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stat chips below video */}
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-3 mt-10">
          {(isHindi ? [
            { emoji:"🏫", label:"जीवंत परिसर" },
            { emoji:"👨‍🏫", label:"समर्पित शिक्षक" },
            { emoji:"🎓", label:"होनहार छात्र" },
            { emoji:"🏆", label:"पुरस्कार विजेता" },
          ] : [
            { emoji:"🏫", label:"Vibrant Campus" },
            { emoji:"👨‍🏫", label:"Dedicated Faculty" },
            { emoji:"🎓", label:"Bright Students" },
            { emoji:"🏆", label:"Award Winners" },
          ]).map((c) => (
            <div key={c.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)",
                       color:"rgba(255,255,255,0.75)", backdropFilter:"blur(8px)" }}>
              <span>{c.emoji}</span> {c.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function OurStoryPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const milestones = isHindi ? [
    { year: "2008", event: "द माइलस्टोन सी.सेक. स्कूल की स्थापना 120 छात्रों और सभी के लिए गुणवत्तापूर्ण शिक्षा के दृढ़ संकल्प के साथ कैथल में हुई।", color: "#60a5fa" },
    { year: "2012", event: "CBSE मान्यता प्राप्त हुई और अत्याधुनिक बुनियादी ढांचे और स्मार्ट क्लासरूम के साथ कक्षा I-X तक विस्तार किया गया।", color: "#34d399" },
    { year: "2016", event: "कक्षा XI और XII के लिए वरिष्ठ माध्यमिक स्ट्रीम — विज्ञान (PCM/PCB), वाणिज्य और कला — शुरू किए गए।", color: "#a78bfa" },
    { year: "2019", event: "स्मार्ट क्लासरूम विंग, डिजिटल पुस्तकालय और पूर्ण सुसज्जित विज्ञान व कंप्यूटर प्रयोगशालाओं का उद्घाटन।", color: "#f59e0b" },
    { year: "2022", event: "लगातार तीसरे वर्ष 100% बोर्ड परिणाम प्राप्त किया। स्कूल की शक्ति 1,000 छात्रों को पार कर गई।", color: "#f472b6" },
    { year: "2024", event: "पाठ्येतर कार्यक्रमों का विस्तार — नाटक, स्केटिंग, वक्तृता — जिसने जिला और राज्य स्तरीय विजेताओं को तैयार किया।", color: "#22d3ee" },
    { year: "2025", event: "कक्षा 10 के छात्रों ने 100% उत्कृष्ट परिणाम प्राप्त किए। छात्रों ने राज्य स्तरीय प्रतियोगिताओं में स्वर्ण और रजत पदक जीते।", color: "#34d399" },
  ] : [
    { year: "2008", event: "The Milestone Sr. Sec. School founded in Kaithal with 120 students and a bold vision of quality education for all.", color: "#60a5fa" },
    { year: "2012", event: "Received CBSE affiliation and expanded to Classes I–X with state-of-the-art infrastructure and smart classrooms.", color: "#34d399" },
    { year: "2016", event: "Launched Senior Secondary streams — Science (PCM/PCB), Commerce, and Arts — for Classes XI & XII.", color: "#a78bfa" },
    { year: "2019", event: "Inaugurated the Smart Classroom wing, Digital Library, and fully equipped Science & Computer Laboratories.", color: "#f59e0b" },
    { year: "2022", event: "Achieved 100% board result for the third consecutive year. School strength crossed 1,000 students.", color: "#f472b6" },
    { year: "2024", event: "Expanded co-curricular programs — drama, skating, declamation — producing district and state level champions.", color: "#22d3ee" },
    { year: "2025", event: "Class 10 students achieved 100% outstanding results. Students won Gold & Silver Glory at state-level competitions.", color: "#34d399" },
  ];

  const pillars = isHindi ? [
    { icon: Eye,    title: "हमारी दृष्टि", accent: "#60a5fa", glow: "rgba(96,165,250,0.15)",  desc: "एक उत्कृष्टता केंद्र बनना जो जिज्ञासु, दयालु और सक्षम शिक्षार्थियों का पोषण करे, जो सार्थक जीवन जीएं और समाज में सकारात्मक योगदान दें।" },
    { icon: Target, title: "हमारा मिशन",  accent: "#34d399", glow: "rgba(52,211,153,0.15)",  desc: "एक समग्र, CBSE-संरेखित शिक्षा प्रदान करना जो शैक्षणिक कठोरता और चरित्र निर्माण को संतुलित करे — हर छात्र को उनकी अनूठी क्षमता खोजने के लिए सशक्त करे।" },
    { icon: Heart,  title: "हमारे मूल्य", accent: "#a78bfa", glow: "rgba(167,139,250,0.15)", desc: "ईमानदारी, करुणा, अनुशासन, जिज्ञासा और सम्मान — कक्षाओं में, खेल मैदान पर और दैनिक जीवन में हम जो कुछ भी करते हैं उसकी नींव।" },
  ] : [
    { icon: Eye,    title: "Our Vision",  accent: "#60a5fa", glow: "rgba(96,165,250,0.15)",  desc: "To be a centre of excellence that nurtures curious, compassionate, and capable learners who go on to lead meaningful lives and contribute positively to society." },
    { icon: Target, title: "Our Mission", accent: "#34d399", glow: "rgba(52,211,153,0.15)",  desc: "To provide a holistic, CBSE-aligned education that balances academic rigour with character building — empowering every student to discover their unique potential." },
    { icon: Heart,  title: "Our Values",  accent: "#a78bfa", glow: "rgba(167,139,250,0.15)", desc: "Integrity, compassion, discipline, curiosity, and respect form the foundation of everything we do — in classrooms, on the sports field, and in daily life." },
  ];

  const strengths = isHindi ? [
    "2012 से CBSE संबद्ध",
    "सभी कक्षाओं में 1,000+ छात्र",
    "नर्सरी से कक्षा XII",
    "100% बोर्ड परिणाम (कक्षा 10, 2025-26)",
    "जिला और राज्य स्तरीय उपलब्धिकर्ता",
    "हिंदी दक्षता के साथ अंग्रेजी माध्यम",
  ] : [
    "CBSE Affiliated since 2012",
    "1,000+ Students across all classes",
    "Nursery to Class XII",
    "100% Board Results (Class 10, 2025-26)",
    "District & State level achievers",
    "English medium with Hindi competency",
  ];

  const heroStats = isHindi ? [
    { val: "2008",   label: "स्थापित" },
    { val: "1,000+", label: "छात्र" },
    { val: "17+",    label: "वर्ष उत्कृष्टता" },
    { val: "100%",   label: "बोर्ड परिणाम" },
  ] : [
    { val: "2008",   label: "Founded" },
    { val: "1,000+", label: "Students" },
    { val: "17+",    label: "Years of Excellence" },
    { val: "100%",   label: "Board Results" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[68vh] flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

        {[
          { w:520, h:520, x:"-8%",  y:"-28%", c:"#2563EB", dur:12 },
          { w:400, h:400, x:"68%",  y:"40%",  c:"#10B981", dur:15 },
          { w:300, h:300, x:"38%",  y:"-18%", c:"#8B5CF6", dur:9  },
          { w:220, h:220, x:"80%",  y:"-15%", c:"#60a5fa", dur:11 },
        ].map((o,i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale:[1,1.22,1], opacity:[0.35,0.75,0.35] }}
            transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
        ))}

        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 text-center">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.14)" }}>
            <BookOpen size={11}/> {isHindi ? "हमारे बारे में" : "About Us"}
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-5 leading-tight text-white">
            {isHindi ? "हमारी " : "Our "}
            <span style={{ background:"linear-gradient(90deg,#60a5fa,#34d399,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "कहानी" : "Story"}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
            {isHindi
              ? "2008 से, द माइलस्टोन सी.सेक. स्कूल कैथल में जीवन बदल रहा है — एक समय में एक छात्र — गुणवत्तापूर्ण शिक्षा और समग्र विकास की शक्ति के माध्यम से।"
              : "Since 2008, The Milestone Sr. Sec. School has been transforming lives in Kaithal — one student at a time — through the power of quality education and holistic development."}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-4">
            {heroStats.map((s,i) => (
              <div key={i} className="px-6 py-3 rounded-2xl text-center"
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.13)", backdropFilter:"blur(12px)" }}>
                <div className="text-2xl font-extrabold text-white">{s.val}</div>
                <div className="text-white/45 text-xs mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 20C480 35 240 5 0 20Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.p {...fadeUp(0)} className="text-muted-foreground text-lg leading-[1.9] font-light">
            {isHindi
              ? "कैथल में गुणवत्तापूर्ण CBSE शिक्षा लाने के दृष्टिकोण से जन्मा, द माइलस्टोन सी.सेक. स्कूल 120 छात्रों की विनम्र शुरुआत से बढ़कर 1,000 से अधिक शिक्षार्थियों की एक जीवंत संस्था बन गया है। हम मानते हैं कि हर बच्चे को जीवन में सर्वोत्तम शुरुआत मिलनी चाहिए — और हमने 17 वर्ष उसे साकार करने में लगाए हैं।"
              : "Born from a vision to bring quality CBSE education to Kaithal, The Milestone Sr. Sec. School has grown from a humble beginning of 120 students to a thriving institution of over 1,000 learners. We believe every child deserves the best start in life — and we've dedicated 17 years to making that a reality."}
          </motion.p>
        </div>
      </section>

      {/* ── VIDEO SECTION ────────────────────────────────────────── */}
      <StoryVideo isHindi={isHindi} />

      {/* ── VISION / MISSION / VALUES ───────────────────────────── */}
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(37,99,235,0.08)", color:"#2563eb", border:"1px solid rgba(37,99,235,0.18)" }}>
              {isHindi ? "हमारा आधार" : "Our Foundation"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {isHindi ? "दृष्टि, मिशन " : "Vision, Mission "}
              <span style={{ background:"linear-gradient(90deg,#2563eb,#8b5cf6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "और मूल्य" : "& Values"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, accent, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.12)}
                whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(0,0,0,0.10)` }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background:"white", border:"1px solid rgba(0,0,0,0.08)", boxShadow:"0 2px 20px rgba(0,0,0,0.06)" }}>
                <div className="h-1.5" style={{ background:`linear-gradient(90deg,${accent},${accent}88)` }}/>
                <div className="p-7">
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 w-14 h-14"
                    style={{ background:`${accent}12`, border:`1px solid ${accent}30` }}>
                    <Icon size={24} style={{ color: accent }}/>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(37,99,235,0.08)", color:"hsl(var(--primary))", border:"1px solid rgba(37,99,235,0.18)" }}>
              {isHindi ? "हमारी यात्रा" : "Our Journey"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {isHindi ? "वर्षों के दौरान " : "Milestones Through "}
              <span className="text-primary">{isHindi ? "माइलस्टोन" : "the Years"}</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ background:"linear-gradient(to bottom,#2563EB,#10B981,#8B5CF6,#2563EB30)" }}/>

            <div className="flex flex-col gap-10">
              {milestones.map(({ year, event, color }, i) => (
                <motion.div key={year} {...fadeUp(i * 0.08)}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"} pl-14 md:pl-0`}>
                    <motion.div whileHover={{ y: -3, boxShadow: `0 12px 32px rgba(0,0,0,0.10)` }}
                      className="rounded-2xl p-5 transition-all duration-300"
                      style={{ background:"white", border:`1px solid ${color}25`,
                               boxShadow:`0 2px 16px rgba(0,0,0,0.06)`, borderLeft:`3px solid ${color}` }}>
                      <span className="inline-block text-xs font-bold rounded-full px-3 py-1 mb-3"
                        style={{ background:`${color}14`, color }}>{year}</span>
                      <p className="text-foreground/75 text-sm leading-relaxed">{event}</p>
                    </motion.div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background z-10 shadow-md"
                    style={{ background: color }}/>
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ──────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(16,185,129,0.08)", color:"#059669", border:"1px solid rgba(16,185,129,0.2)" }}>
              {isHindi ? "संक्षेप में" : "Quick Facts"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {isHindi ? "एक नज़र में " : "The Milestone "}
              <span style={{ background:"linear-gradient(90deg,#059669,#2563eb)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "माइलस्टोन" : "at a Glance"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {strengths.map((s, i) => (
              <motion.div key={s} {...fadeUp(i * 0.07)}
                whileHover={{ y: -4, boxShadow:"0 8px 24px rgba(0,0,0,0.10)" }}
                className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300"
                style={{ background:"white", border:"1px solid rgba(16,185,129,0.2)", boxShadow:"0 2px 12px rgba(0,0,0,0.05)" }}>
                <CheckCircle2 size={18} style={{ color:"#059669", flexShrink:0 }}/>
                <span className="text-foreground text-sm font-medium">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
