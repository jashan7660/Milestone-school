import { motion } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus, Shield, Wifi, Camera, Coffee, CheckCircle2, Sparkles } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

/* ── palette ────────────────────────────────────────────────── */
const NAVY    = "#071B3A";
const NAVY2   = "#0A234A";
const CYAN    = "#06B6D4";
const BLUE    = "#3B82F6";
const EMERALD = "#10B981";
const PURPLE  = "#8B5CF6";
const GOLD    = "#F59E0B";

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

export default function FacilitiesPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  /* ── DATA ─────────────────────────────────────────────────── */
  const heroStats = [
    { val: "6+",   label: isHindi ? "प्रमुख सुविधाएं" : "Major Facilities",   color: CYAN   },
    { val: "50+",  label: isHindi ? "कंप्यूटर सिस्टम" : "Computer Systems",   color: BLUE   },
    { val: "4000+",label: isHindi ? "पुस्तकालय पुस्तकें" : "Library Books",    color: PURPLE },
    { val: "GPS",  label: isHindi ? "ट्रैक बसें" : "Tracked Buses",            color: EMERALD},
    { val: "24/7", label: isHindi ? "CCTV निगरानी" : "CCTV Surveillance",     color: GOLD   },
    { val: "3",    label: isHindi ? "विज्ञान लैब" : "Science Labs",            color: CYAN   },
  ];

  const mainFacilities = isHindi ? [
    {
      icon: Microscope, color: CYAN, emoji: "🔬",
      title: "विज्ञान प्रयोगशालाएं",
      image: "/science-lab.png",
      video: "/science-lab-video2.mp4",
      isVideo: true,
      desc: "हमारी पूर्ण रूप से सुसज्जित भौतिकी, रसायन और जीव विज्ञान लैब छात्रों को प्रयोगों और व्यावहारिक कार्य का हाथों-पर अनुभव देती हैं।",
      highlights: ["3 अलग लैब — भौतिकी, रसायन, जीव विज्ञान","आधुनिक उपकरण और सुरक्षा उपकरण","कक्षा VI-XII के लिए नियमित व्यावहारिक सत्र","प्रशिक्षित लैब सहायक उपलब्ध"],
    },
    {
      icon: BookOpen, color: BLUE, emoji: "📚",
      title: "डिजिटल पुस्तकालय",
      image: "/library.png",
      isVideo: false,
      desc: "4,000 से अधिक पुस्तकों वाला एक शांत, अच्छी तरह से भरा पुस्तकालय जो पढ़ने के प्रति प्रेम और स्वतंत्र शोध को प्रोत्साहित करता है।",
      highlights: ["4,000+ पुस्तकें और पत्रिकाएं","समर्पित पठन क्षेत्र","डिजिटल कैटलॉग प्रणाली","एकाग्र शिक्षा के लिए अध्ययन केबिन"],
    },
    {
      icon: Dumbbell, color: EMERALD, emoji: "⚽",
      title: "खेल परिसर",
      image: "/sports.png",
      video: "/sports-complex-video.mp4",
      isVideo: true,
      desc: "शारीरिक विकास हमारी शिक्षा का एक स्तंभ है। हमारी विशाल खेल सुविधाएं विभिन्न बाहरी और इनडोर खेलों को समायोजित करती हैं।",
      highlights: ["क्रिकेट, फुटबॉल और बैडमिंटन मैदान","बास्केटबॉल और वॉलीबॉल कोर्ट","स्केटिंग क्लब के लिए स्केटिंग रिंक","वार्षिक खेल दिवस उत्सव"],
    },
    {
      icon: Monitor, color: PURPLE, emoji: "💻",
      title: "कंप्यूटर प्रयोगशाला",
      image: "/smart-classroom.png",
      isVideo: false,
      desc: "हाई-स्पीड इंटरनेट कनेक्टिविटी के साथ एक आधुनिक कंप्यूटर लैब छात्रों को डिजिटल साक्षरता और प्रोग्रामिंग कौशल विकसित करने में सहायता करती है।",
      highlights: ["50+ नवीनतम हार्डवेयर वर्कस्टेशन","हाई-स्पीड ब्रॉडबैंड इंटरनेट","प्रोग्रामिंग और कोडिंग कक्षाएं","MS Office, Python और वेब बेसिक्स"],
    },
    {
      icon: Palette, color: GOLD, emoji: "🎨",
      title: "रचनात्मक कला और गतिविधि कक्ष",
      image: "/art-room.png",
      video: "/creative-arts-video.mp4",
      isVideo: true,
      desc: "संगीत, नृत्य, कला और नाटक को हमारे परिसर में एक समर्पित स्थान मिलता है। यहाँ छात्र अपनी रचनात्मक आवाज खोजते हैं।",
      highlights: ["वाद्ययंत्रों के साथ समर्पित संगीत कक्ष","स्प्रंग फ्लोरिंग के साथ नृत्य स्टूडियो","कला और शिल्प कक्ष","वार्षिक सांस्कृतिक कार्यक्रम और प्रतियोगिताएं"],
    },
    {
      icon: Bus, color: CYAN, emoji: "🚌",
      title: "सुरक्षित परिवहन नेटवर्क",
      image: "/school-bus.png",
      video: "/transport-video.mp4",
      isVideo: true,
      desc: "हमारे GPS-ट्रैक स्कूल बस बेड़े में कैथल शहर और आसपास के क्षेत्र शामिल हैं, जो छात्रों के लिए हर दिन सुरक्षित और समयबद्ध यात्रा सुनिश्चित करते हैं।",
      highlights: ["GPS-ट्रैक बसें","कैथल और आसपास के क्षेत्र कवर","प्रशिक्षित चालक और परिचर","नियमित वाहन रखरखाव"],
    },
  ] : [
    {
      icon: Microscope, color: CYAN, emoji: "🔬",
      title: "Science Laboratories",
      image: "/science-lab.png",
      video: "/science-lab-video2.mp4",
      isVideo: true,
      desc: "Our fully equipped Physics, Chemistry, and Biology labs give students hands-on experience with experiments and practicals — making science come alive beyond the textbook.",
      highlights: ["3 separate labs — Physics, Chemistry, Biology","Modern apparatus and safety equipment","Regular practical sessions for Classes VI–XII","Trained lab assistants on hand"],
    },
    {
      icon: BookOpen, color: BLUE, emoji: "📚",
      title: "Digital Library",
      image: "/library.png",
      isVideo: false,
      desc: "A peaceful, well-stocked library with over 4,000 books across subjects, fiction, reference material, and digital resources — designed to foster a love for reading and research.",
      highlights: ["4,000+ books and periodicals","Dedicated reading zones","Digital catalogue system","Study cubicles for focused learning"],
    },
    {
      icon: Dumbbell, color: EMERALD, emoji: "⚽",
      title: "Sports Complex",
      image: "/sports.png",
      video: "/sports-complex-video.mp4",
      isVideo: true,
      desc: "Physical development is a pillar of our education. Our sprawling sports facilities cater to a range of outdoor and indoor sports, keeping students fit, disciplined, and team-oriented.",
      highlights: ["Cricket, Football & Badminton grounds","Basketball and Volleyball courts","Skating rink for skating club","Annual Sports Day celebration"],
    },
    {
      icon: Monitor, color: PURPLE, emoji: "💻",
      title: "Computer Laboratory",
      image: "/smart-classroom.png",
      isVideo: false,
      desc: "A modern computer lab with high-speed internet connectivity ensures students develop essential digital literacy and programming skills aligned with today's technology-first world.",
      highlights: ["50+ workstations with latest hardware","High-speed broadband internet","Programming and coding classes","MS Office, Python, and web basics"],
    },
    {
      icon: Palette, color: GOLD, emoji: "🎨",
      title: "Creative Arts & Activity Rooms",
      image: "/art-room.png",
      video: "/creative-arts-video.mp4",
      isVideo: true,
      desc: "Music, dance, art, and drama find a dedicated space on our campus. Our activity rooms are where students discover their creative voice and develop confidence.",
      highlights: ["Dedicated music room with instruments","Dance studio with sprung flooring","Art and craft room","Annual cultural events and competitions"],
    },
    {
      icon: Bus, color: CYAN, emoji: "🚌",
      title: "Safe Transport Network",
      image: "/school-bus.png",
      video: "/transport-video.mp4",
      isVideo: true,
      desc: "Our GPS-tracked school bus fleet covers Kaithal city and surrounding areas, ensuring safe, timely, and comfortable commute for students every single day.",
      highlights: ["GPS-tracked buses","Covers Kaithal & nearby areas","Trained drivers and attendants","Regular vehicle maintenance"],
    },
  ];

  const extras = isHindi ? [
    { icon: Shield, color: BLUE,    title: "24/7 CCTV निगरानी",   desc: "प्रत्येक छात्र और स्टाफ सदस्य की सुरक्षा के लिए पूरा परिसर CCTV कैमरों से कवर है।" },
    { icon: Wifi,   color: CYAN,    title: "परिसर-व्यापी Wi-Fi",  desc: "निर्बाध डिजिटल शिक्षण और शोध के लिए पूरे परिसर में हाई-स्पीड इंटरनेट।"         },
    { icon: Camera, color: PURPLE,  title: "स्मार्ट क्लासरूम",    desc: "प्रत्येक कक्षा में आधुनिक पाठों के लिए इंटरैक्टिव डिजिटल बोर्ड और ऑडियो-विज़ुअल टूल।" },
    { icon: Coffee, color: EMERALD, title: "स्वास्थ्यकर कैफेटेरिया",desc: "सख्त स्वच्छता मानकों के तहत तैयार पौष्टिक स्नैक्स और भोजन परोसने वाला कैंटीन।"   },
  ] : [
    { icon: Shield, color: BLUE,    title: "24/7 CCTV Surveillance", desc: "Entire campus covered with high-definition CCTV cameras for the safety of every student and staff member." },
    { icon: Wifi,   color: CYAN,    title: "Campus-Wide Wi-Fi",      desc: "High-speed internet access across the campus for seamless digital learning and research."               },
    { icon: Camera, color: PURPLE,  title: "Smart Classrooms",       desc: "Every classroom features an interactive digital board and audio-visual tools for engaging modern lessons."  },
    { icon: Coffee, color: EMERALD, title: "Hygienic Cafeteria",     desc: "Clean, supervised canteen serving nutritious snacks and meals prepared under strict hygiene standards."   },
  ];

  const floatingEmojis = ["🔬","💻","📚","⚽","🎨","🚌","🏆","🎓"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background:`linear-gradient(145deg,${NAVY} 0%,${NAVY2} 45%,#0a1f3a 75%,#0d1535 100%)` }}>

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"52px 52px" }}/>

        {/* Animated orbs */}
        {[
          { w:560, h:560, x:"-8%",  y:"-18%", c:CYAN,    dur:11 },
          { w:420, h:420, x:"70%",  y:"50%",  c:PURPLE,  dur:14 },
          { w:300, h:300, x:"40%",  y:"60%",  c:EMERALD, dur:9  },
          { w:260, h:260, x:"64%",  y:"-6%",  c:BLUE,    dur:12 },
        ].map((o, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale:[1,1.22,1], opacity:[0.35,0.7,0.35] }}
            transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
        ))}

        {/* Dots */}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
            style={{ left:`${(i*4.3)%100}%`, top:`${(i*7.1+12)%90}%`, background:[CYAN,BLUE,PURPLE,EMERALD,GOLD][i%5] }}
            animate={{ y:[0,-24,0], opacity:[0.2,0.7,0.2], scale:[1,1.5,1] }}
            transition={{ repeat:Infinity, duration:3+(i%5), delay:i*0.17, ease:"easeInOut" }}/>
        ))}

        {/* Floating emojis */}
        {floatingEmojis.map((emoji, i) => (
          <motion.div key={i} className="absolute text-2xl select-none pointer-events-none hidden lg:block"
            style={{ left:`${[4,87,11,83,47,67,20,55][i]}%`, top:`${[14,9,77,73,7,83,40,28][i]}%` }}
            animate={{ y:[0,-18,0], rotate:[-4,4,-4], opacity:[0.45,0.9,0.45] }}
            transition={{ repeat:Infinity, duration:4+i*0.7, delay:i*0.5, ease:"easeInOut" }}>
            {emoji}
          </motion.div>
        ))}

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-32 md:py-40 text-center">
          {/* Badge */}
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{ background:`rgba(6,182,212,0.15)`, border:`1.5px solid rgba(6,182,212,0.4)`, color:"#67e8f9", backdropFilter:"blur(12px)" }}
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <motion.span animate={{ rotate:[0,15,-15,0] }} transition={{ repeat:Infinity, duration:2 }}>🏗️</motion.span>
            {isHindi ? "बुनियादी ढांचा" : "World-Class Infrastructure"}
            <motion.span className="w-2 h-2 rounded-full bg-cyan-400" animate={{ opacity:[1,0.3,1] }} transition={{ repeat:Infinity, duration:0.9 }}/>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="font-serif font-extrabold text-white leading-tight tracking-tight mb-6"
            style={{ fontSize:"clamp(2.6rem,7.5vw,5.5rem)", textShadow:"0 4px 40px rgba(0,0,0,0.55)" }}
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15, ease:[0.22,1,0.36,1] }}>
            {isHindi ? "सुविधाएं और" : "Facilities &"}
            <br/>
            <span style={{ background:`linear-gradient(90deg,${CYAN},${BLUE},${PURPLE},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "कैंपस" : "Campus"}
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p className="text-white/65 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-14"
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}>
            {isHindi
              ? "विश्व स्तरीय बुनियादी ढांचा जो शैक्षणिक, शारीरिक और रचनात्मक विकास के हर पहलू को समर्थन देने के लिए सोच-समझकर डिज़ाइन किया गया है।"
              : "World-class infrastructure thoughtfully designed to support every aspect of academic, physical, and creative development."}
          </motion.p>

          {/* Stats */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.7 }}>
            {heroStats.map((s, i) => (
              <motion.div key={i} whileHover={{ y:-6, scale:1.06 }}
                className="text-center py-5 px-2 rounded-2xl relative overflow-hidden group cursor-default"
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.13)", backdropFilter:"blur(16px)" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background:`radial-gradient(circle at center,${s.color}28,transparent 70%)` }}/>
                <div className="text-xl font-serif font-extrabold mb-0.5" style={{ color: s.color }}>{s.val}</div>
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

      {/* ══ MAIN FACILITIES ═════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(6,182,212,0.1)`, color:"#0891b2", border:`1.5px solid rgba(6,182,212,0.3)` }}>
              <Sparkles size={11}/> {isHindi ? "हमारा कैंपस" : "Our Campus"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "आपके बच्चे को जो चाहिए —" : "Everything your child needs —"}
              <br/>
              <span style={{ background:`linear-gradient(90deg,${CYAN},${BLUE},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "सब एक कैंपस में" : "in one campus"}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {mainFacilities.map((f, i) => (
              <motion.div key={i} {...fadeUp(0.1)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>

                {/* Media */}
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group"
                    style={{ border:`2px solid ${f.color}25` }}>
                    {f.isVideo && f.video ? (
                      <video src={f.video} autoPlay loop muted playsInline disablePictureInPicture
                        className="w-full h-[340px] object-cover" style={{ pointerEvents:"none" }}/>
                    ) : (
                      <img src={f.image} alt={f.title} className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"/>
                    )}
                    <div className="absolute inset-0" style={{ background:`linear-gradient(to top,${NAVY}80 0%,transparent 55%)` }}/>
                    {/* Icon badge */}
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background:`${f.color}25`, border:`1.5px solid ${f.color}50`, backdropFilter:"blur(12px)" }}>
                      <f.icon size={22} style={{ color: f.color }}/>
                    </div>
                    {/* Facility number */}
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.6)", border:"1px solid rgba(255,255,255,0.15)" }}>
                      {isHindi ? `सुविधा 0${i+1}` : `Facility 0${i+1}`}
                    </div>
                    {/* Glow at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                      style={{ background:`linear-gradient(90deg,transparent,${f.color},transparent)` }}/>
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                    style={{ background:`${f.color}12`, color:f.color, border:`1px solid ${f.color}25` }}>
                    <span>{f.emoji}</span>
                    {isHindi ? `सुविधा 0${i+1}` : `Facility 0${i+1}`}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-foreground mb-4">{f.title}</h3>
                  <p className="text-foreground/60 text-lg leading-relaxed mb-7">{f.desc}</p>

                  <ul className="space-y-3">
                    {f.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground/70 font-medium">
                        <CheckCircle2 size={16} style={{ color: f.color, flexShrink: 0 }}/>
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

      {/* ══ ADDITIONAL FACILITIES ═══════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#f8fafc" }}>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(139,92,246,0.1)`, color:"#7c3aed", border:"1.5px solid rgba(139,92,246,0.3)" }}>
              <Sparkles size={11}/> {isHindi ? "और भी" : "And More"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "सुरक्षा, कनेक्टिविटी" : "Safety, connectivity"}
              <br/>
              <span style={{ background:`linear-gradient(90deg,${PURPLE},${CYAN},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "और आराम" : "& comfort"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {extras.map((e, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} whileHover={{ y:-8, scale:1.03 }}
                className="relative p-7 rounded-3xl text-center overflow-hidden group cursor-default"
                style={LIGHT_CARD}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                  style={{ background:`radial-gradient(circle at center,${e.color}10,transparent 65%)` }}/>
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                  style={{ background:`linear-gradient(90deg,transparent,${e.color},transparent)`, opacity:0.7 }}/>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{ background:`${e.color}12`, border:`1px solid ${e.color}25` }}>
                  <e.icon size={24} style={{ color: e.color }}/>
                </div>
                <h3 className="text-base font-serif font-extrabold text-foreground mb-3 relative z-10">{e.title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed relative z-10">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
