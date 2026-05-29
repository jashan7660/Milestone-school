import { motion } from "framer-motion";
import { Handshake, Globe2, BookOpen, FlaskConical, Trophy, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function TieupsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const categories = isHindi ? [
    { icon:BookOpen,    title:"शैक्षणिक साझेदारी",       accent:"#60a5fa", glow:"rgba(96,165,250,0.15)",
      partners:[
        { name:"CBSE Board of Education",        desc:"पूर्ण माध्यमिक और वरिष्ठ माध्यमिक संबद्धता के साथ CBSE संबद्ध स्कूल", type:"नियामक" },
        { name:"National Informatics Centre",    desc:"डिजिटल साक्षरता और कंप्यूटर शिक्षा एकीकरण",                            type:"तकनीक" },
        { name:"NCERT",                          desc:"सभी कक्षाओं के लिए पाठ्यपुस्तक और पाठ्यक्रम संरेखण",                 type:"पाठ्यक्रम" },
      ]},
    { icon:FlaskConical, title:"विज्ञान और प्रौद्योगिकी", accent:"#a78bfa", glow:"rgba(167,139,250,0.15)",
      partners:[
        { name:"Vigyan Prasar",             desc:"विज्ञान लोकप्रियकरण और छात्र अनुसंधान कार्यक्रम",              type:"विज्ञान" },
        { name:"Atal Innovation Mission",   desc:"छात्रों के लिए टिंकरिंग लैब और नवाचार-आधारित शिक्षा",          type:"नवाचार" },
        { name:"NASSCOM Foundation",        desc:"IT कौशल विकास और डिजिटल जागरूकता कार्यशालाएं",                type:"तकनीक" },
      ]},
    { icon:Trophy,      title:"खेल और पाठ्येतर",          accent:"#f59e0b", glow:"rgba(245,158,11,0.15)",
      partners:[
        { name:"Roller Skating Federation of India", desc:"रोलर स्केटिंग प्रशिक्षण और प्रतियोगिताओं के लिए आधिकारिक संबद्धता", type:"खेल" },
        { name:"Haryana Sports Authority",           desc:"राज्य खेल विकास कार्यक्रम और जिला प्रतियोगिताएं",                  type:"खेल" },
        { name:"Nehru Yuva Kendra Sangathan",        desc:"युवा विकास और NSS गतिविधि समन्वय",                               type:"युवा" },
      ]},
    { icon:Heart,       title:"समुदाय और सामाजिक",        accent:"#f472b6", glow:"rgba(244,114,182,0.15)",
      partners:[
        { name:"Rotary Club — Kaithal",           desc:"सामुदायिक सेवा, छात्रवृत्ति अभियान और सामाजिक जागरूकता",          type:"NGO" },
        { name:"Red Cross Society",               desc:"प्राथमिक चिकित्सा प्रशिक्षण, रक्तदान और स्वास्थ्य शिविर",        type:"स्वास्थ्य" },
        { name:"District Education Office, Kaithal", desc:"सरकारी योजना भागीदारी और शैक्षणिक मान्यता",                   type:"सरकार" },
      ]},
    { icon:Globe2,      title:"करियर और उच्च शिक्षा",     accent:"#34d399", glow:"rgba(52,211,153,0.15)",
      partners:[
        { name:"Career Launcher",           desc:"करियर परामर्श कार्यशालाएं और प्रतियोगी परीक्षा जागरूकता",               type:"करियर" },
        { name:"Kurukshetra University",    desc:"कक्षा XI-XII के छात्रों के लिए उच्च शिक्षा जागरूकता कार्यक्रम",         type:"विश्वविद्यालय" },
        { name:"Guru Jambheshwar University", desc:"वरिष्ठ छात्रों के लिए विज्ञान और प्रौद्योगिकी जागरूकता",             type:"विश्वविद्यालय" },
      ]},
  ] : [
    { icon:BookOpen,    title:"Academic Partnerships",    accent:"#60a5fa", glow:"rgba(96,165,250,0.15)",
      partners:[
        { name:"CBSE Board of Education",        desc:"Affiliated CBSE school with full secondary & senior secondary affiliation", type:"Regulatory" },
        { name:"National Informatics Centre",    desc:"Digital literacy and computer education integration",                       type:"Technology" },
        { name:"NCERT",                          desc:"Textbook and curriculum alignment for all classes",                         type:"Curriculum" },
      ]},
    { icon:FlaskConical, title:"Science & Technology",    accent:"#a78bfa", glow:"rgba(167,139,250,0.15)",
      partners:[
        { name:"Vigyan Prasar",             desc:"Science popularisation and student research programs",              type:"Science" },
        { name:"Atal Innovation Mission",   desc:"Tinkering Lab & innovation-based learning for students",           type:"Innovation" },
        { name:"NASSCOM Foundation",        desc:"IT skill development and digital awareness workshops",              type:"Technology" },
      ]},
    { icon:Trophy,      title:"Sports & Co-Curricular",   accent:"#f59e0b", glow:"rgba(245,158,11,0.15)",
      partners:[
        { name:"Roller Skating Federation of India", desc:"Official affiliation for roller skating training and competitions", type:"Sports" },
        { name:"Haryana Sports Authority",           desc:"State sports development programs and district competitions",        type:"Sports" },
        { name:"Nehru Yuva Kendra Sangathan",        desc:"Youth development and NSS activity coordination",                   type:"Youth" },
      ]},
    { icon:Heart,       title:"Community & Social",       accent:"#f472b6", glow:"rgba(244,114,182,0.15)",
      partners:[
        { name:"Rotary Club — Kaithal",           desc:"Community service, scholarship drives and social awareness",         type:"NGO" },
        { name:"Red Cross Society",               desc:"First aid training, blood donation drives and health camps",         type:"Health" },
        { name:"District Education Office, Kaithal", desc:"Government scheme participation and academic recognition",        type:"Government" },
      ]},
    { icon:Globe2,      title:"Career & Higher Education", accent:"#34d399", glow:"rgba(52,211,153,0.15)",
      partners:[
        { name:"Career Launcher",             desc:"Career counselling workshops and competitive exam awareness",            type:"Career" },
        { name:"Kurukshetra University",      desc:"Higher education awareness programs for Class XI–XII students",         type:"University" },
        { name:"Guru Jambheshwar University", desc:"Science and technology awareness for senior students",                  type:"University" },
      ]},
  ];

  const benefits = isHindi ? [
    { title:"व्यापक शिक्षा",     desc:"साझेदारियां छात्रों को पाठ्यपुस्तकों से परे वास्तविक दुनिया के ज्ञान से अवगत कराती हैं",   accent:"#60a5fa" },
    { title:"प्रतियोगिता का अनुभव", desc:"छात्र जिला, राज्य और राष्ट्रीय स्तर के कार्यक्रमों में भाग लेते हैं",              accent:"#f59e0b" },
    { title:"करियर तैयारी",      desc:"उद्योग जागरूकता कार्यक्रम छात्रों को स्कूल के बाद जीवन के लिए तैयार करते हैं",         accent:"#34d399" },
    { title:"सामुदायिक मूल्य",   desc:"सामाजिक सेवा साझेदारियां सहानुभूति और नागरिक जिम्मेदारी का निर्माण करती हैं",           accent:"#f472b6" },
  ] : [
    { title:"Broader Learning",    desc:"Partnerships expose students to real-world knowledge beyond textbooks",     accent:"#60a5fa" },
    { title:"Competition Exposure", desc:"Students participate in district, state, and national-level events",       accent:"#f59e0b" },
    { title:"Career Readiness",    desc:"Industry awareness programs prepare students for life after school",        accent:"#34d399" },
    { title:"Community Values",    desc:"Social service partnerships build empathy and civic responsibility",         accent:"#f472b6" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[62vh] flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

        {[
          { w:500, h:500, x:"-8%",  y:"-28%", c:"#2563EB", dur:12 },
          { w:380, h:380, x:"68%",  y:"44%",  c:"#10B981", dur:15 },
          { w:260, h:260, x:"40%",  y:"-18%", c:"#f59e0b", dur:9  },
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
            <Handshake size={11}/> {isHindi ? "हमारे बारे में" : "About Us"}
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-5 leading-tight text-white">
            {isHindi ? "हमारे " : "Our "}
            <span style={{ background:"linear-gradient(90deg,#34d399,#60a5fa,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "टाई-अप" : "Tie-ups"}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {isHindi
              ? "माइलस्टोन अग्रणी शैक्षणिक बोर्डों, खेल निकायों और सामुदायिक संगठनों के साथ साझेदारी करता है ताकि हर छात्र के लिए एक संपूर्ण स्कूल अनुभव सुनिश्चित हो सके।"
              : "The Milestone partners with leading educational boards, sports bodies, and community organisations to deliver a truly rounded school experience for every student."}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 20C480 35 240 5 0 20Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {benefits.map(({ title, desc, accent }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-5 text-center transition-all duration-300"
                style={{ background:`${accent}08`, border:`1px solid ${accent}25` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background:`${accent}18`, border:`1px solid ${accent}35` }}>
                  <Handshake size={18} style={{ color: accent }}/>
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1.5">{title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER CATEGORIES ───────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0a2240 50%, #12103a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>

        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl">

          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(52,211,153,0.12)", color:"#34d399", border:"1px solid rgba(52,211,153,0.3)" }}>
              {isHindi ? "हमारे साझेदार" : "Our Partners"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              {isHindi ? "साझेदारी " : "Partnerships "}
              <span style={{ background:"linear-gradient(90deg,#34d399,#60a5fa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "श्रेणी अनुसार" : "by Category"}
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-14">
            {categories.map(({ icon: Icon, title, accent, glow, partners }, ci) => (
              <motion.div key={title} {...fadeUp(ci * 0.08)}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background:glow, border:`1px solid ${accent}40` }}>
                    <Icon size={20} style={{ color: accent }}/>
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-white">{title}</h2>
                  <div className="h-px flex-1 opacity-20" style={{ background:"rgba(255,255,255,0.5)" }}/>
                </div>

                {/* Partner cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {partners.map(({ name, desc, type }, i) => (
                    <motion.div key={name} {...fadeUp(i * 0.08)}
                      whileHover={{ y: -4, boxShadow: `0 12px 30px ${accent}18` }}
                      className="rounded-2xl overflow-hidden transition-all duration-300"
                      style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${accent}25` }}>
                      <div className="h-0.5" style={{ background:`linear-gradient(90deg,${accent},${accent}44)` }}/>
                      <div className="p-5 flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-bold text-white text-sm leading-snug">{name}</h4>
                          <span className="text-[10px] font-bold rounded-full px-2.5 py-1 shrink-0 whitespace-nowrap"
                            style={{ background:`${accent}18`, color: accent, border:`1px solid ${accent}35` }}>
                            {type}
                          </span>
                        </div>
                        <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a2a1a 0%, #0f2d50 50%, #1e1b4b 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>

        <motion.div {...fadeUp(0)} className="relative z-10 container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background:"rgba(52,211,153,0.15)", border:"1.5px solid rgba(52,211,153,0.35)" }}>
            <Handshake size={28} style={{ color:"#34d399" }}/>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            {isHindi ? "हमारे साथ साझेदारी में रुचि है?" : "Interested in Partnering With Us?"}
          </h3>
          <p className="text-white/60 max-w-xl mx-auto text-sm mb-8 leading-relaxed">
            {isHindi
              ? "हम शैक्षणिक संस्थानों, NGOs, खेल निकायों और कॉर्पोरेट्स से सहयोग का स्वागत करते हैं जो गुणवत्तापूर्ण शिक्षा और छात्र विकास के प्रति हमारी प्रतिबद्धता साझा करते हैं।"
              : "We welcome collaborations from educational institutions, NGOs, sports bodies, and corporates who share our commitment to quality education and student development."}
          </p>
          <a href="mailto:themilestoneKtl@gmail.com"
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105"
            style={{ background:"linear-gradient(135deg,#10B981,#0d9e74)",
                     color:"white",
                     boxShadow:"0 8px 28px rgba(16,185,129,0.4)" }}>
            {isHindi ? "संपर्क करें" : "Get in Touch"}
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
