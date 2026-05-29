import { motion } from "framer-motion";
import { Smile, BookOpen, Microscope, TrendingUp, Palette, FlaskConical, Calculator, Globe2, GraduationCap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function DivisionsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const divisions = isHindi ? [
    { label:"प्रारंभिक वर्ष",       classes:"नर्सरी · LKG · UKG",           icon:Smile,        accent:"#f472b6", glow:"rgba(244,114,182,0.18)", desc:"एक पोषणकारी वातावरण जहां छोटे शिक्षार्थी खेल, कला, कहानियों और संरचित गतिविधियों के माध्यम से सीखने का आनंद खोजते हैं। हमारा प्रारंभिक वर्ष कार्यक्रम आजीवन सीखने के लिए सामाजिक, भावनात्मक और संज्ञानात्मक नींव रखता है।", highlights:["गतिविधि-आधारित शिक्षा","हिंदी और अंग्रेजी साक्षरता","संख्या तैयारी","मोटर कौशल विकास","सुरक्षित और देखभाल करने वाला वातावरण"] },
    { label:"प्राथमिक विंग",         classes:"कक्षा I – V",                   icon:BookOpen,      accent:"#f59e0b", glow:"rgba(245,158,11,0.18)",  desc:"प्राथमिक विंग संरचित शिक्षा को रचनात्मक अन्वेषण के साथ मिश्रित करते हुए एक आकर्षक CBSE पाठ्यक्रम के माध्यम से मूल शैक्षणिक कौशल बनाता है।", highlights:["CBSE संरेखित पाठ्यक्रम","स्मार्ट क्लासरूम शिक्षा","EVS और सामान्य जागरूकता","कला, संगीत और खेल एकीकृत","पठन संवर्धन कार्यक्रम"] },
    { label:"मध्य विद्यालय",         classes:"कक्षा VI – VIII",               icon:Globe2,        accent:"#60a5fa", glow:"rgba(96,165,250,0.18)",  desc:"मध्य विद्यालय वह है जहां शैक्षणिक गहराई व्यक्तिगत विकास से मिलती है। छात्र विज्ञान, गणित, सामाजिक विज्ञान और भाषाओं में CBSE पाठ्यक्रम के साथ जुड़ते हैं।", highlights:["विषय विशेषज्ञता शुरू होती है","प्रयोगशाला प्रयोग","परियोजना-आधारित शिक्षा","नेतृत्व और जीवन कौशल","अंतर-सदन प्रतियोगिताएं"] },
    { label:"माध्यमिक",              classes:"कक्षा IX – X",                  icon:Calculator,    accent:"#34d399", glow:"rgba(52,211,153,0.18)",  desc:"माध्यमिक विभाग कठोर शैक्षणिक तैयारी, नियमित मूल्यांकन और व्यक्तिगत मार्गदर्शन के साथ CBSE बोर्ड परीक्षाओं के लिए छात्रों को तैयार करता है।", highlights:["100% बोर्ड परिणाम (2025-26)","नियमित मॉक परीक्षाएं","संदेह निवारण सत्र","करियर जागरूकता परामर्श","NCC और पाठ्येतर गतिविधियां"] },
    { label:"विज्ञान स्ट्रीम",        classes:"कक्षा XI – XII · PCM / PCB",  icon:FlaskConical,  accent:"#a78bfa", glow:"rgba(167,139,250,0.18)", desc:"हमारी विज्ञान स्ट्रीम छात्रों को चिकित्सा, इंजीनियरिंग, अनुसंधान और प्रौद्योगिकी में करियर के लिए ज्ञान और व्यावहारिक कौशल से लैस करती है।", highlights:["भौतिकी, रसायन, गणित (PCM)","भौतिकी, रसायन, जीव विज्ञान (PCB)","उन्नत लैब व्यावहारिक","JEE / NEET तैयारी मार्गदर्शन","विज्ञान ओलंपियाड भागीदारी"] },
    { label:"वाणिज्य स्ट्रीम",        classes:"कक्षा XI – XII · वाणिज्य",    icon:TrendingUp,    accent:"#22d3ee", glow:"rgba(34,211,238,0.18)",  desc:"वाणिज्य स्ट्रीम भविष्य के उद्यमियों, लेखाकारों और व्यापार नेताओं को आकार देती है। लेखाशास्त्र, अर्थशास्त्र और व्यवसाय अध्ययन पर मजबूत जोर के साथ।", highlights:["लेखाशास्त्र, अर्थशास्त्र, व्यवसाय अध्ययन","व्यावहारिक वित्तीय कौशल","CA फाउंडेशन जागरूकता","वाणिज्य योग्यता विकास","वास्तविक दुनिया केस स्टडी शिक्षा"] },
    { label:"मानविकी / कला स्ट्रीम", classes:"कक्षा XI – XII · कला",         icon:Palette,       accent:"#fbbf24", glow:"rgba(251,191,36,0.18)",  desc:"मानविकी स्ट्रीम आलोचनात्मक सोच, रचनात्मकता और सामाजिक जागरूकता को पोषित करती है। इतिहास, राजनीति विज्ञान, भूगोल, मनोविज्ञान और ललित कला का अन्वेषण।", highlights:["इतिहास, राजनीति, भूगोल","मनोविज्ञान और समाजशास्त्र विकल्प","ललित कला और रचनात्मक अभिव्यक्ति","UPSC / CLAT जागरूकता","वाद-विवाद, नाटक और वक्तृता"] },
    { label:"पाठ्येतर विभाग",         classes:"सभी कक्षाएं",                  icon:Microscope,    accent:"#f87171", glow:"rgba(248,113,113,0.18)", desc:"पढ़ाई के अलावा, माइलस्टोन का पाठ्येतर विभाग सुनिश्चित करता है कि हर छात्र को खेल और स्केटिंग से लेकर नाटक, संगीत और वक्तृता तक अपनी रुचियां खोजने का मौका मिले।", highlights:["रोलर स्केटिंग और इनडोर खेल","नाटक और थिएटर क्लब","वक्तृता और वाद-विवाद","कला, शिल्प और संगीत","NSS और सामाजिक सेवा गतिविधियां"] },
  ] : [
    { label:"Early Years",            classes:"Nursery · LKG · UKG",          icon:Smile,        accent:"#f472b6", glow:"rgba(244,114,182,0.18)", desc:"A nurturing environment where young learners discover the joy of learning through play, art, stories, and structured activities. Our Early Years program lays the social, emotional, and cognitive foundation for lifelong learning.", highlights:["Activity-based learning","Hindi & English literacy","Number readiness","Motor skills development","Safe & caring environment"] },
    { label:"Primary Wing",           classes:"Classes I – V",                 icon:BookOpen,      accent:"#f59e0b", glow:"rgba(245,158,11,0.18)",  desc:"The Primary Wing builds core academic skills through an engaging CBSE curriculum, blending structured learning with creative exploration. Students develop reading fluency, mathematical thinking, and scientific curiosity.", highlights:["CBSE aligned curriculum","Smart classroom learning","EVS & general awareness","Art, music & sports integrated","Reading enrichment programs"] },
    { label:"Middle School",          classes:"Classes VI – VIII",             icon:Globe2,        accent:"#60a5fa", glow:"rgba(96,165,250,0.18)",  desc:"Middle School is where academic depth meets personal growth. Students engage with a rich CBSE curriculum across Science, Mathematics, Social Science, and languages — while developing critical thinking and collaboration skills.", highlights:["Subject specialisation begins","Laboratory practicals","Project-based learning","Leadership & life skills","Inter-house competitions"] },
    { label:"Secondary",              classes:"Classes IX – X",                icon:Calculator,    accent:"#34d399", glow:"rgba(52,211,153,0.18)",  desc:"The Secondary Division prepares students for CBSE Board Examinations with rigorous academic preparation, regular assessments, and personalised guidance. We have achieved 100% board results consecutively.", highlights:["100% board results (2025-26)","Regular mock exams","Doubt clearing sessions","Career awareness counselling","NCC & co-curricular activities"] },
    { label:"Science Stream",         classes:"Classes XI – XII · PCM / PCB", icon:FlaskConical,  accent:"#a78bfa", glow:"rgba(167,139,250,0.18)", desc:"Our Science stream equips students with the knowledge and practical skills needed for careers in medicine, engineering, research, and technology. State-of-the-art labs support hands-on learning beyond textbooks.", highlights:["Physics, Chemistry, Maths (PCM)","Physics, Chemistry, Biology (PCB)","Advanced lab practicals","JEE / NEET preparation guidance","Science Olympiad participation"] },
    { label:"Commerce Stream",        classes:"Classes XI – XII · Commerce",  icon:TrendingUp,    accent:"#22d3ee", glow:"rgba(34,211,238,0.18)",  desc:"The Commerce stream shapes future entrepreneurs, accountants, and business leaders. With a strong emphasis on Accountancy, Economics, and Business Studies, students are prepared for CA, MBA, and commerce-based careers.", highlights:["Accounts, Economics, Business Studies","Practical financial skills","CA Foundation awareness","Commerce aptitude development","Real-world case study learning"] },
    { label:"Humanities / Arts",      classes:"Classes XI – XII · Arts",      icon:Palette,       accent:"#fbbf24", glow:"rgba(251,191,36,0.18)",  desc:"The Humanities stream nurtures critical thinking, creativity, and social awareness. Students explore History, Political Science, Geography, Psychology, and Fine Arts — preparing for careers in law, journalism, civil services, and the arts.", highlights:["History, Polity, Geography","Psychology & Sociology options","Fine Arts & creative expression","UPSC / CLAT awareness","Debate, theatre & declamation"] },
    { label:"Co-Curricular Division", classes:"All Classes",                   icon:Microscope,    accent:"#f87171", glow:"rgba(248,113,113,0.18)", desc:"Beyond academics, The Milestone's Co-Curricular Division ensures every student has the opportunity to explore their passions — from sports and skating to drama, music, and declamation. Our students are district and state-level champions.", highlights:["Roller skating & indoor games","Drama & theatre club","Declamation & debate","Art, craft & music","NSS & social service activities"] },
  ];

  const statsData = isHindi ? [
    { val:"8",            label:"शैक्षणिक विभाग" },
    { val:"1000+",        label:"नामांकित छात्र" },
    { val:"नर्सरी – XII", label:"पूर्ण स्पेक्ट्रम" },
    { val:"100%",         label:"बोर्ड परिणाम" },
  ] : [
    { val:"8",            label:"Academic Divisions" },
    { val:"1,000+",       label:"Students Enrolled" },
    { val:"Nursery–XII",  label:"Full Spectrum" },
    { val:"100%",         label:"Board Results" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[68vh] flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

        {[
          { w:520, h:520, x:"-8%",  y:"-25%", c:"#2563EB", dur:12 },
          { w:400, h:400, x:"70%",  y:"42%",  c:"#f59e0b", dur:14 },
          { w:280, h:280, x:"38%",  y:"-18%", c:"#10B981", dur:9  },
          { w:220, h:220, x:"82%",  y:"-12%", c:"#a78bfa", dur:11 },
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
            <GraduationCap size={11}/> {isHindi ? "हमारे बारे में" : "About Us"}
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-5 leading-tight text-white">
            {isHindi ? "हमारे " : "Our "}
            <span style={{ background:"linear-gradient(90deg,#f59e0b,#f472b6,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "विभाग" : "Divisions"}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
            {isHindi
              ? "नर्सरी से कक्षा XII तक, माइलस्टोन का प्रत्येक विभाग छात्रों की जरूरतों को पूरा करने और उन्हें आगे ले जाने के लिए डिज़ाइन किया गया है।"
              : "From Nursery to Class XII, each division at The Milestone is designed to meet students where they are and take them further than they imagined."}
          </motion.p>

          {/* Stats */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-4">
            {statsData.map((s,i) => (
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

      {/* ── DIVISION CARDS ───────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0a2240 50%, #12103a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>

        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map(({ label, classes, icon: Icon, accent, glow, desc, highlights }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.07)}
                whileHover={{ y: -6, boxShadow: `0 20px 50px ${accent}18` }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${accent}30` }}>
                <div className="h-1" style={{ background:`linear-gradient(90deg,${accent},${accent}66)` }}/>
                <div className="p-7 flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background:glow, border:`1px solid ${accent}40`,
                               boxShadow:`0 0 16px ${accent}25` }}>
                      <Icon size={22} style={{ color: accent }}/>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-serif">{label}</h3>
                      <p className="text-xs font-semibold mt-0.5" style={{ color: accent }}>{classes}</p>
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {highlights.map(h => (
                      <span key={h} className="text-[11px] font-medium px-3 py-1 rounded-full"
                        style={{ background:`${accent}12`, color:`${accent}`, border:`1px solid ${accent}25` }}>
                        {h}
                      </span>
                    ))}
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
