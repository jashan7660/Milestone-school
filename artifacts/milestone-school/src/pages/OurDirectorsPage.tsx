import { motion } from "framer-motion";
import { Quote, GraduationCap, Award, Star, Users, Play } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import principalImg from "@assets/pricipal_sir_1780036894116.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function OurDirectorsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const principal = {
    name: "Mr. Atul Sharma",
    role:  isHindi ? "प्रिंसिपल और शैक्षणिक निदेशक" : "Principal & Academic Director",
    qual:  isHindi ? "M.A., B.Ed. | 20+ वर्षों का अनुभव" : "M.A., B.Ed. | 20+ Years in Education",
    image: principalImg,
    message: isHindi
      ? "माइलस्टोन में, हम मानते हैं कि हर छात्र संभावनाओं का एक अनूठा ब्रह्मांड है। हमारी भूमिका केवल पढ़ाना नहीं है — बल्कि प्रेरित करना, मार्गदर्शन करना और उस जिज्ञासा को जगाना है जो शिक्षार्थियों को नेताओं में बदलती है। हम एक ऐसा स्कूल बनाने के लिए प्रतिबद्ध हैं जहां हर बच्चा देखा, सुना और अपना सर्वश्रेष्ठ हासिल करने के लिए सशक्त महसूस करे।"
      : "At The Milestone, we believe that every student is a unique universe of potential. Our role is not just to teach — but to inspire, guide, and ignite the curiosity that turns learners into leaders. We are committed to building a school where every child feels seen, heard, and empowered to achieve their best.",
    achievements: isHindi ? [
      "100% CBSE बोर्ड परिणाम की ओर स्कूल का नेतृत्व",
      "20+ वर्षों का शैक्षणिक नेतृत्व",
      "कैथल में स्मार्ट क्लासरूम अपनाने के अग्रणी",
      "छात्रों के समग्र विकास के चैंपियन",
    ] : [
      "Led school to 100% CBSE board results",
      "20+ years of educational leadership",
      "Pioneer of smart classroom adoption in Kaithal",
      "Champion of holistic student development",
    ],
    leadershipP: isHindi
      ? "श्री अतुल शर्मा का नेतृत्व दर्शन इस विश्वास में निहित है कि शैक्षणिक उत्कृष्टता और व्यक्तिगत विकास साथ-साथ चलते हैं। उनकी खुले दरवाजे की नीति और छात्रों की व्यक्तिगत मेंटरशिप ने माइलस्टोन को कैथल के हजारों परिवारों के लिए घर से दूर एक घर बना दिया है।"
      : "Mr. Atul Sharma's leadership philosophy is rooted in the belief that academic excellence and personal growth go hand-in-hand. His open-door policy and personal mentorship of students has made The Milestone a home away from home for thousands of families in Kaithal.",
    quote: isHindi
      ? '"शिक्षा सबसे बड़ा उपहार है जो हम दे सकते हैं — आइए इसे असाधारण बनाएं।"'
      : '"Education is the greatest gift we can give — let\'s make it extraordinary."',
  };

  const boardMembers = isHindi ? [
    { name: "Mrs. Sulochana Sharma", role: "अध्यक्ष",            note: "माइलस्टोन परिवार की संस्थापक और मार्गदर्शक शक्ति",        accent: "#f59e0b" },
    { name: "Ms. Yogita Sharma",     role: "प्रबंध निदेशक",       note: "रणनीतिक विकास और बुनियादी ढांचे की देखरेख",               accent: "#10B981" },
    { name: "Ms. Shalu Grover",      role: "इवेंट हेड",           note: "सभी स्कूल कार्यक्रमों और गतिविधियों की योजना और संचालन",  accent: "#a78bfa" },
    { name: "Mr. Sarthak Sharma",    role: "प्रबंधन",             note: "दैनिक संचालन और प्रशासनिक कार्यों का समन्वय",            accent: "#60a5fa" },
    { name: "Ms. Ashima Sindhwani",  role: "शैक्षणिक सलाहकार",   note: "पाठ्यक्रम और शैक्षणिक नीति को आकार देते हैं",            accent: "#f472b6" },
  ] : [
    { name: "Mrs. Sulochana Sharma", role: "Managing Director",         note: "Founder & guiding force of The Milestone family",                    accent: "#f59e0b" },
    { name: "Ms. Yogita Sharma",     role: "Managing Director",   note: "Oversees strategic development and infrastructure",                   accent: "#10B981" },
    { name: "Ms. Shalu Grover",      role: "Event Head",          note: "Plans and coordinates all school events and activities",              accent: "#a78bfa" },
    { name: "Mr. Sarthak Sharma",    role: "Management",          note: "Coordinates day-to-day operations and administration",                accent: "#60a5fa" },
    { name: "Ms. Ashima Sindhwani",  role: "Academic Advisor",    note: "Shapes curriculum and academic policy",                              accent: "#f472b6" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[62vh] flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

        {[
          { w:500, h:500, x:"-10%", y:"-30%", c:"#2563EB", dur:11 },
          { w:380, h:380, x:"70%",  y:"42%",  c:"#10B981", dur:14 },
          { w:280, h:280, x:"42%",  y:"-20%", c:"#f59e0b", dur:9  },
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
            <Users size={11}/> {isHindi ? "हमारे बारे में" : "About Us"}
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-5 leading-tight text-white">
            {isHindi ? "हमारे " : "Our "}
            <span style={{ background:"linear-gradient(90deg,#f59e0b,#f472b6,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "निदेशक" : "Directors"}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {isHindi
              ? "उन दूरदर्शी नेताओं से मिलिए जो माइलस्टोन को जुनून, उद्देश्य और शैक्षणिक उत्कृष्टता के प्रति अटूट प्रतिबद्धता के साथ मार्गदर्शन करते हैं।"
              : "Meet the visionary leaders who guide The Milestone with passion, purpose, and an unwavering commitment to educational excellence."}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 20C480 35 240 5 0 20Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ── PRINCIPAL SPOTLIGHT ──────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(37,99,235,0.08)", color:"hsl(var(--primary))", border:"1px solid rgba(37,99,235,0.18)" }}>
              {isHindi ? "नेतृत्व" : "Leadership"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {isHindi ? "प्रिंसिपल का " : "Principal's "}
              <span className="text-primary">{isHindi ? "संदेश" : "Message"}</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)}
            className="rounded-3xl overflow-hidden"
            style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(37,99,235,0.18)",
                     boxShadow:"0 4px 40px rgba(37,99,235,0.08)" }}>
            <div className="h-1" style={{ background:"linear-gradient(90deg,#2563EB,#10B981,#8B5CF6)" }}/>
            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

              {/* Photo + meta */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
                <div className="relative">
                  <div className="w-52 h-72 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ border:"3px solid rgba(37,99,235,0.3)", boxShadow:"0 0 40px rgba(37,99,235,0.2)" }}>
                    <img src={principal.image} alt={principal.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5"
                    style={{ background:"linear-gradient(135deg,#10B981,#0f9)}" }}>
                    <Star size={11} className="fill-white" /> {isHindi ? "प्रिंसिपल" : "Principal"}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-extrabold text-foreground">{principal.name}</h2>
                  <p className="text-primary font-semibold text-sm mt-1">{principal.role}</p>
                  <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1.5">
                    <GraduationCap size={13} /> {principal.qual}
                  </p>
                </div>

                {/* Achievements */}
                <div className="w-full rounded-2xl p-5"
                  style={{ background:"rgba(37,99,235,0.06)", border:"1px solid rgba(37,99,235,0.18)" }}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 text-foreground">
                    <Award size={13} className="text-primary" /> {isHindi ? "मुख्य उपलब्धियां" : "Key Achievements"}
                  </p>
                  {principal.achievements.map(a => (
                    <div key={a} className="flex items-start gap-2 text-xs text-foreground/70 mb-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="relative rounded-2xl p-6"
                  style={{ background:"rgba(37,99,235,0.04)", border:"1px solid rgba(37,99,235,0.12)" }}>
                  <Quote className="absolute -top-3 -left-2 w-10 h-10 text-primary/15" />
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-snug pl-4">
                    {principal.quote}
                  </h3>
                  <p className="text-muted-foreground leading-[1.9] text-base pl-4 font-light border-l-4 border-primary/30 italic">
                    {principal.message}
                  </p>
                </div>
                <div className="rounded-2xl p-6"
                  style={{ background:"rgba(16,185,129,0.04)", border:"1px solid rgba(16,185,129,0.15)" }}>
                  <p className="text-foreground/75 text-base leading-relaxed">{principal.leadershipP}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPAL VIDEO MESSAGE ──────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0a1628 0%, #0f2240 50%, #0a1e0f 100%)" }}>

        {/* Ambient orbs */}
        {[
          { w:420, h:420, x:"-5%",  y:"-20%", c:"#2563EB", dur:10 },
          { w:320, h:320, x:"72%",  y:"45%",  c:"#10B981", dur:13 },
        ].map((o,i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale:[1,1.2,1], opacity:[0.4,0.75,0.4] }}
            transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
        ))}

        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"48px 48px" }}/>

        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">

          {/* Heading */}
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(16,185,129,0.12)", color:"#34d399", border:"1px solid rgba(16,185,129,0.3)" }}>
              <Play size={11} className="fill-[#34d399]" />
              {isHindi ? "वीडियो संदेश" : "Video Message"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {isHindi ? "प्रिंसिपल का " : "Principal's "}
              <span style={{ background:"linear-gradient(90deg,#34d399,#60a5fa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "वीडियो संदेश" : "Video Address"}
              </span>
            </h2>
            <p className="text-white/50 text-sm mt-3 font-light max-w-xl mx-auto">
              {isHindi
                ? "श्री अतुल शर्मा का माइलस्टोन परिवार के लिए हृदय से संदेश"
                : "A heartfelt address from Mr. Atul Sharma to the entire Milestone family"}
            </p>
          </motion.div>

          {/* Video player card */}
          <motion.div {...fadeUp(0.15)}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1.5px solid rgba(16,185,129,0.25)",
              boxShadow: "0 0 60px rgba(16,185,129,0.12), 0 24px 60px rgba(0,0,0,0.4)"
            }}>
            {/* Top gradient bar */}
            <div className="h-1" style={{ background:"linear-gradient(90deg,#2563EB,#10B981,#8B5CF6)" }}/>

            <div className="p-4 md:p-6">
              {/* Name tag above video */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background:"linear-gradient(135deg,#2563EB,#10B981)" }}>
                  AS
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">Mr. Atul Sharma</p>
                  <p className="text-white/45 text-xs mt-0.5">{isHindi ? "प्रिंसिपल, द माइलस्टोन Sr. Sec. School" : "Principal, The Milestone Sr. Sec. School"}</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background:"rgba(239,68,68,0.15)", color:"#f87171", border:"1px solid rgba(239,68,68,0.25)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block"/>
                  {isHindi ? "लाइव संदेश" : "Message"}
                </div>
              </div>

              {/* Video element */}
              <div className="relative w-full rounded-2xl overflow-hidden"
                style={{ background:"#000", aspectRatio:"16/9", boxShadow:"0 8px 32px rgba(0,0,0,0.5)" }}>
                <video
                  src="/principal-message.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                  poster=""
                  preload="metadata"
                />
              </div>

              {/* Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-white/35 text-xs">
                  {isHindi ? "The Milestone Sr. Sec. School, कैथल" : "The Milestone Sr. Sec. School, Kaithal"}
                </p>
                <div className="flex items-center gap-2">
                  <GraduationCap size={13} className="text-green-400"/>
                  <span className="text-white/40 text-xs">{isHindi ? "M.A., B.Ed. | 20+ वर्ष" : "M.A., B.Ed. | 20+ Years"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOARD OF DIRECTORS ───────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0a2240 50%, #12103a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>

        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(245,158,11,0.12)", color:"#fbbf24", border:"1px solid rgba(245,158,11,0.3)" }}>
              {isHindi ? "शासी निकाय" : "Governing Body"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {isHindi ? "निदेशक " : "Board of "}
              <span style={{ background:"linear-gradient(90deg,#f59e0b,#f472b6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "मंडल" : "Directors"}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {boardMembers.map(({ name, role, note, accent }, i) => (
              <motion.div key={name} {...fadeUp(i * 0.1)}
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${accent}20` }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${accent}30` }}>
                <div className="h-1" style={{ background:`linear-gradient(90deg,${accent},${accent}66)` }}/>
                <div className="p-6 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-serif font-bold text-lg shrink-0 shadow-lg"
                    style={{ background:`linear-gradient(135deg,${accent},${accent}88)`,
                             boxShadow:`0 4px 16px ${accent}40` }}>
                    {name.split(" ").map(w => w[0]).join("").slice(0,2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{name}</h4>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: accent }}>{role}</p>
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">{note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
