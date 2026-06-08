import { motion } from "framer-motion";
import {
  School, MapPin, Phone, Mail, FileText, ShieldCheck, Flame,
  Droplets, Building2, Users, GraduationCap, BookOpen, BarChart3,
  CheckCircle2, Download, Landmark, Award, ClipboardList, Sparkles,
  AlertCircle, ExternalLink,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const NAVY   = "#071B3A";
const NAVY2  = "#0A234A";
const CYAN   = "#06B6D4";
const BLUE   = "#3B82F6";
const EMERALD= "#10B981";
const PURPLE = "#8B5CF6";
const GOLD   = "#F59E0B";
const RED    = "#EF4444";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

const GLASS = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(18px)",
};

const LIGHT_CARD = {
  background: "white",
  border: "1px solid rgba(0,0,0,0.07)",
  boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
};

interface SectionHeaderProps { letter: string; title: string; color: string; icon: React.ReactNode }
function SectionHeader({ letter, title, color, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6 pb-4 border-b-2" style={{ borderColor: color }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg text-white flex-shrink-0"
        style={{ background: color }}>
        {letter}
      </div>
      <div className="flex items-center gap-2">
        <span style={{ color }}>{icon}</span>
        <h3 className="text-xl font-extrabold text-foreground uppercase tracking-wide">{title}</h3>
      </div>
    </div>
  );
}

interface TableRowProps { sno: string | number; info: string; detail: React.ReactNode; highlight?: boolean }
function TableRow({ sno, info, detail, highlight }: TableRowProps) {
  return (
    <tr className="border-b border-black/5 last:border-0 hover:bg-blue-50/40 transition-colors">
      <td className="px-4 py-3.5 text-sm font-bold text-foreground/50 w-12 text-center align-top">{sno}</td>
      <td className="px-4 py-3.5 text-sm text-foreground/70 uppercase tracking-wide font-medium align-top">{info}</td>
      <td className={`px-4 py-3.5 text-sm align-top font-semibold ${highlight ? "text-foreground" : "text-foreground/80"}`}>{detail}</td>
    </tr>
  );
}

interface DocCardProps { icon: React.ReactNode; title: string; desc: string; status: "available" | "pending"; color: string; href?: string }
function DocCard({ icon, title, desc, status, color, href }: DocCardProps) {
  const inner = (
    <>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{ background: `radial-gradient(ellipse at top left,${color}12,transparent 65%)` }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
        style={{ background: `linear-gradient(90deg,transparent,${color},transparent)`, opacity: 0.7 }} />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-sm font-bold text-foreground leading-tight">{title}</h3>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
              style={status === "available"
                ? { background: `${EMERALD}15`, color: EMERALD, border: `1px solid ${EMERALD}30` }
                : { background: `${GOLD}15`, color: "#b45309", border: `1px solid ${GOLD}30` }}>
              {status === "available" ? <CheckCircle2 size={9}/> : <AlertCircle size={9}/>}
              {status === "available" ? "Available" : "On Request"}
            </span>
          </div>
          <p className="text-xs text-foreground/50 leading-relaxed">{desc}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color }}>
        {href ? <><ExternalLink size={11}/> Click to view document</> : <><Download size={11}/> Available at school office</>}
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.015 }}
        className="relative p-6 rounded-3xl overflow-hidden group cursor-pointer block"
        style={LIGHT_CARD}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ y: -4, scale: 1.015 }}
      className="relative p-6 rounded-3xl overflow-hidden group cursor-default"
      style={LIGHT_CARD}>
      {inner}
    </motion.div>
  );
}

export default function PublicDisclosurePage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const documents = isHindi ? [
    { icon: <FileText size={20} color={BLUE}/>,    title: "संबद्धता / अपग्रेडेशन पत्र", desc: "CBSE द्वारा जारी नवीनतम संबद्धता या अपग्रेडेशन पत्र की प्रति।", status: "available" as const, color: BLUE, href: "/affiliation-letter.pdf"    },
    { icon: <Landmark size={20} color={PURPLE}/>,  title: "ट्रस्ट / सोसायटी पंजीकरण प्रमाण पत्र", desc: "संस्था का कानूनी पंजीकरण दस्तावेज़।", status: "available" as const, color: PURPLE, href: "/society-registration.pdf"  },
    { icon: <ShieldCheck size={20} color={EMERALD}/>,title:"राज्य/केंद्र शासित प्रदेश की अनापत्ति प्रमाण पत्र",desc:"राज्य शिक्षा विभाग द्वारा जारी NOC।",status: "available" as const, color: EMERALD, href: "/noc-certificate.pdf" },
    { icon: <Award size={20} color={GOLD}/>,       title: "मान्यता प्रमाण पत्र",desc:"उचित प्राधिकरण द्वारा जारी विद्यालय मान्यता।",status: "available" as const, color: GOLD, href: "/recognition-certificate.pdf"    },
    { icon: <Building2 size={20} color={CYAN}/>,   title: "भवन सुरक्षा प्रमाण पत्र", desc: "सक्षम प्राधिकरण द्वारा जारी भवन सुरक्षा स्थिति का प्रमाण पत्र।", status: "available" as const, color: CYAN, href: "/building-safety-certificate.pdf"    },
    { icon: <Flame size={20} color={RED}/>,        title: "अग्नि सुरक्षा प्रमाण पत्र", desc: "अग्निशमन विभाग द्वारा जारी वैध अग्नि सुरक्षा प्रमाण पत्र।", status: "available" as const, color: RED, href: "/fire-safety-certificate.pdf"     },
    { icon: <Droplets size={20} color={BLUE}/>,    title: "पेयजल एवं स्वास्थ्य प्रमाण पत्र", desc: "स्वास्थ्य विभाग से पेयजल एवं स्वच्छता अनुपालन।", status: "available" as const, color: BLUE, href: "/drinking-water-certificate.pdf"    },
    { icon: <ClipboardList size={20} color={PURPLE}/>,title:"DEO स्व-प्रमाणन",desc:"DEO को स्व-प्रमाणन की प्रति — छात्र सुरक्षा आश्वासन।",status: "available" as const,color: PURPLE, href: "/deo-self-certification.pdf"  },
  ] : [
    { icon: <FileText size={20} color={BLUE}/>,    title: "Affiliation / Upgradation Letter", desc: "Copy of latest affiliation or upgradation letter issued by CBSE.", status: "available" as const, color: BLUE, href: "/affiliation-letter.pdf"    },
    { icon: <Landmark size={20} color={PURPLE}/>,  title: "Trust / Society Registration Certificate", desc: "Legal registration document of the managing institution.", status: "available" as const, color: PURPLE, href: "/society-registration.pdf"  },
    { icon: <ShieldCheck size={20} color={EMERALD}/>,title:"No Objection Certificate (State/UT)",desc:"NOC issued by the State Education Department.",status: "available" as const, color: EMERALD, href: "/noc-certificate.pdf" },
    { icon: <Award size={20} color={GOLD}/>,       title: "Recognition Certificate", desc: "School recognition issued by the competent authority.", status: "available" as const, color: GOLD, href: "/recognition-certificate.pdf"    },
    { icon: <Building2 size={20} color={CYAN}/>,   title: "Building Safety Certificate", desc: "Certificate of structural safety issued by a competent authority.", status: "available" as const, color: CYAN, href: "/building-safety-certificate.pdf"    },
    { icon: <Flame size={20} color={RED}/>,        title: "Fire Safety Certificate", desc: "Valid fire safety certificate issued by the Fire Department.", status: "available" as const, color: RED, href: "/fire-safety-certificate.pdf"     },
    { icon: <Droplets size={20} color={BLUE}/>,    title: "Drinking Water & Sanitation Certificate", desc: "Health department compliance for drinking water and sanitation.", status: "available" as const, color: BLUE, href: "/drinking-water-certificate.pdf"    },
    { icon: <ClipboardList size={20} color={PURPLE}/>,title:"DEO Self-Certification",desc:"Copy of self-certification submitted to DEO — student safety assurance.",status: "available" as const,color: PURPLE, href: "/deo-self-certification.pdf"  },
  ];

  const resultsX = [
    { sno: 1, year: "2021-22", registered: 27, passed: 26, color: PURPLE  },
    { sno: 2, year: "2022-23", registered: 35, passed: 35, color: BLUE    },
    { sno: 3, year: "2023-24", registered: 49, passed: 49, color: EMERALD },
  ];

  const resultsXII = [
    { sno: 1, year: "2021-22", registered: 47, passed: 43, color: PURPLE  },
    { sno: 2, year: "2022-23", registered: 41, passed: 37, color: BLUE    },
    { sno: 3, year: "2023-24", registered: 67, passed: 61, color: EMERALD },
  ];

  const floatingEmojis = ["📋","🏫","📜","🎓","🏆","📊","⚖️","🔍"];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center"
        style={{ background: `linear-gradient(145deg,${NAVY} 0%,${NAVY2} 45%,#0a1f3a 75%,#0d1535 100%)` }}>

        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"52px 52px" }}/>

        {[
          { w:520, h:520, x:"-8%",  y:"-18%", c:BLUE,    dur:12 },
          { w:380, h:380, x:"68%",  y:"46%",  c:EMERALD, dur:16 },
          { w:300, h:300, x:"36%",  y:"60%",  c:PURPLE,  dur:10 },
          { w:240, h:240, x:"60%",  y:"-6%",  c:CYAN,    dur:14 },
        ].map((o, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale:[1,1.22,1], opacity:[0.3,0.7,0.3] }}
            transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
        ))}

        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
            style={{ left:`${(i*4.4)%100}%`, top:`${(i*7.1+10)%90}%`, background:[CYAN,BLUE,PURPLE,EMERALD,GOLD][i%5] }}
            animate={{ y:[0,-24,0], opacity:[0.2,0.7,0.2], scale:[1,1.5,1] }}
            transition={{ repeat:Infinity, duration:3+(i%5), delay:i*0.2, ease:"easeInOut" }}/>
        ))}

        {floatingEmojis.map((emoji, i) => (
          <motion.div key={i} className="absolute text-2xl select-none pointer-events-none hidden lg:block"
            style={{ left:`${[5,88,12,82,46,68,22,58][i]}%`, top:`${[16,10,76,72,8,82,42,30][i]}%` }}
            animate={{ y:[0,-16,0], rotate:[-4,4,-4], opacity:[0.4,0.85,0.4] }}
            transition={{ repeat:Infinity, duration:4+i*0.7, delay:i*0.5, ease:"easeInOut" }}>
            {emoji}
          </motion.div>
        ))}

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-28 md:py-36 text-center">
          <motion.div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
            style={{ background:`rgba(6,182,212,0.15)`, border:`1.5px solid rgba(6,182,212,0.4)`, color:"#67e8f9", backdropFilter:"blur(12px)" }}
            initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <motion.span animate={{ rotate:[0,12,-12,0] }} transition={{ repeat:Infinity, duration:2.5 }}>📋</motion.span>
            {isHindi ? "CBSE दिशानिर्देश अनुपालन" : "CBSE Guidelines Compliance"}
            <motion.span className="w-2 h-2 rounded-full bg-cyan-400" animate={{ opacity:[1,0.3,1] }} transition={{ repeat:Infinity, duration:0.9 }}/>
          </motion.div>

          <motion.h1 className="font-serif font-extrabold text-white leading-tight tracking-tight mb-6"
            style={{ fontSize:"clamp(2.4rem,7vw,5rem)", textShadow:"0 4px 40px rgba(0,0,0,0.55)" }}
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15, ease:[0.22,1,0.36,1] }}>
            {isHindi ? "सार्वजनिक" : "Public"}
            <br/>
            <span style={{ background:`linear-gradient(90deg,${CYAN},${BLUE},${PURPLE},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {isHindi ? "प्रकटीकरण" : "Disclosure"}
            </span>
          </motion.h1>

          <motion.p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}>
            {isHindi
              ? "CBSE दिशानिर्देशों के अनुसार अनिवार्य सार्वजनिक प्रकटीकरण — विद्यालय, स्टाफ, बुनियादी ढांचे और शैक्षणिक रिकॉर्ड पर पूर्ण पारदर्शिता।"
              : "Mandatory public disclosure as per CBSE guidelines — full transparency on school details, staff, infrastructure, and academic records."}
          </motion.p>

          <motion.div className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.6 }}>
            {[
              { icon:<School size={13}/>,       label: isHindi ? "CBSE संबद्ध" : "CBSE Affiliated",    c: CYAN    },
              { icon:<MapPin size={13}/>,        label: isHindi ? "कैथल, हरियाणा" : "Kaithal, Haryana", c: EMERALD },
              { icon:<GraduationCap size={13}/>, label: isHindi ? "नर्सरी – XII" : "Nursery – XII",     c: GOLD    },
              { icon:<Users size={13}/>,         label: isHindi ? "संबद्धता: 531433" : "Affiliation: 531433", c: PURPLE  },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ ...GLASS, color:"rgba(255,255,255,0.75)" }}>
                <span style={{ color: p.c }}>{p.icon}</span> {p.label}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 70L1440 70L1440 25C1200 70 960 5 720 25C480 45 240 5 0 25Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ══ A. GENERAL INFORMATION ══════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(6,182,212,0.1)`, color:"#0891b2", border:`1.5px solid rgba(6,182,212,0.3)` }}>
              <School size={11}/> {isHindi ? "अनुभाग A" : "Section A"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "सामान्य " : "General "}
              <span style={{ background:`linear-gradient(90deg,${CYAN},${BLUE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "जानकारी" : "Information"}
              </span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-4xl mx-auto rounded-3xl overflow-hidden" style={LIGHT_CARD}>
            <div className="p-6 md:p-8">
              <SectionHeader letter="A" title={isHindi ? "सामान्य जानकारी" : "General Information"} color={BLUE} icon={<School size={18}/>}/>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background:`#f1f5f9` }}>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50 w-12">S.NO.</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">INFORMATION</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow sno="1" info={isHindi ? "विद्यालय का नाम" : "Name of the School"} detail={<span className="font-bold text-foreground">The Milestone Sr. Sec. School</span>} highlight />
                  <TableRow sno="2" info={isHindi ? "संबद्धता संख्या" : "Affiliation No."} detail={<span className="font-bold" style={{ color: BLUE }}>531433</span>} />
                  <TableRow sno="3" info={isHindi ? "स्कूल कोड" : "School Code"} detail={<span className="font-bold" style={{ color: BLUE }}>41410</span>} />
                  <TableRow sno="4" info={isHindi ? "पिन कोड सहित पूरा पता" : "Complete Address with Pin Code"} detail={
                    <span>The Milestone Sr. Sec. School, Bye-Pass,<br/>Khurana Road, Kaithal – 136027</span>
                  } />
                  <TableRow sno="5" info={isHindi ? "प्रिंसिपल का नाम एवं योग्यता" : "Principal Name & Qualification"} detail={
                    <span><span className="font-bold text-foreground">Atul Sharma</span><br/><span className="text-foreground/60 text-xs">M.A., M.Phil., B.Ed. (English)</span></span>
                  } />
                  <TableRow sno="6" info={isHindi ? "स्कूल ईमेल आईडी" : "School Email ID"} detail={
                    <a href="mailto:themilestonektl@gmail.com" className="font-semibold hover:underline" style={{ color: CYAN }}>
                      themilestonektl@gmail.com
                    </a>
                  } />
                  <TableRow sno="7" info={isHindi ? "संपर्क विवरण (लैंडलाइन/मोबाइल)" : "Contact Details (Landline/Mobile)"} detail={
                    <span>
                      <a href="tel:01746230294" className="hover:underline" style={{ color: EMERALD }}>01746-230294</a>
                      {", "}
                      <a href="tel:9812574766" className="hover:underline" style={{ color: EMERALD }}>9812574766</a>
                      {", "}
                      <a href="tel:9812308463" className="hover:underline" style={{ color: EMERALD }}>9812308463</a>
                    </span>
                  } />
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ B. DOCUMENTS & CERTIFICATES ═══════════════════════════ */}
      <section className="py-24" style={{ background:"#f8fafc" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(139,92,246,0.1)`, color:"#7c3aed", border:"1.5px solid rgba(139,92,246,0.3)" }}>
              <FileText size={11}/> {isHindi ? "अनुभाग B" : "Section B"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "अनिवार्य " : "Mandatory "}
              <span style={{ background:`linear-gradient(90deg,${PURPLE},${BLUE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "कानूनी दस्तावेज़" : "Legal Documents"}
              </span>
            </h2>
            <p className="text-foreground/50 mt-4 text-base max-w-xl mx-auto">
              {isHindi
                ? "सभी दस्तावेज़ CBSE दिशानिर्देशों के अनुसार बनाए रखे जाते हैं। प्रतियां स्कूल कार्यालय में उपलब्ध हैं।"
                : "All documents are maintained as per CBSE guidelines. Copies available at the school office."}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {documents.map((d, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}>
                <DocCard {...d}/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ C. SCHOOL INFRASTRUCTURE ══════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(16,185,129,0.1)`, color:"#059669", border:"1.5px solid rgba(16,185,129,0.3)" }}>
              <Building2 size={11}/> {isHindi ? "अनुभाग C" : "Section C"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "विद्यालय का " : "School "}
              <span style={{ background:`linear-gradient(90deg,${EMERALD},${CYAN})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "बुनियादी ढांचा" : "Infrastructure"}
              </span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="max-w-4xl mx-auto rounded-3xl overflow-hidden" style={LIGHT_CARD}>
            <div className="p-6 md:p-8">
              <SectionHeader letter="C" title={isHindi ? "बुनियादी ढांचा एवं सुविधाएं" : "School Infrastructure"} color={EMERALD} icon={<Building2 size={18}/>}/>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background:`#f1f5f9` }}>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50 w-12">S.NO.</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">INFORMATION</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow sno="1"
                    info={isHindi ? "विद्यालय का कुल परिसर क्षेत्र (वर्ग मीटर में)" : "Total Campus Area of the School (in Square Mtr)"}
                    detail={<span className="font-bold text-foreground">8159 <span className="font-normal text-foreground/50 text-xs">sq. mtr.</span></span>}
                    highlight />
                  <TableRow sno="2"
                    info={isHindi ? "कक्षाओं की संख्या एवं आकार" : "No. and Size of the Class Rooms"}
                    detail={<span className="font-bold text-foreground">60</span>}
                    highlight />
                  <TableRow sno="3"
                    info={isHindi ? "प्रयोगशालाओं की संख्या एवं आकार (कंप्यूटर लैब सहित, वर्ग मीटर में)" : "No. and Size of Laboratories including Computer Labs (in Sq Mtr)"}
                    detail={
                      <div className="space-y-1">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BLUE }}/><span>Physics Lab – 1</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: EMERALD }}/><span>Chemistry Lab – 1</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: CYAN }}/><span>Biology Lab – 1</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: PURPLE }}/><span>Computer Lab – 2</span></div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: GOLD }}/><span>Psychology Lab – 1</span></div>
                      </div>
                    } />
                  <TableRow sno="4"
                    info={isHindi ? "इंटरनेट सुविधा (हाँ/नहीं)" : "Internet Facility (Y/N)"}
                    detail={<span className="font-bold flex items-center gap-1.5" style={{ color: EMERALD }}><CheckCircle2 size={14}/> YES</span>} />
                  <TableRow sno="5"
                    info={isHindi ? "लड़कियों के शौचालयों की संख्या" : "No. of Girls Toilets"}
                    detail={<span className="font-bold text-foreground">10</span>} />
                  <TableRow sno="6"
                    info={isHindi ? "लड़कों के शौचालयों की संख्या" : "No. of Boys Toilets"}
                    detail={<span className="font-bold text-foreground">10</span>} />
                  <TableRow sno="7"
                    info={isHindi ? "विद्यालय के बुनियादी ढांचे को कवर करने वाले निरीक्षण वीडियो का YouTube लिंक" : "Link of YouTube Video of the Inspection of School covering the Infrastructure"}
                    detail={
                      <a href="https://www.youtube.com/watch?v=GprLzo8M0Qk" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold hover:underline"
                        style={{ color: BLUE }}>
                        <ExternalLink size={13}/> {isHindi ? "देखने के लिए क्लिक करें" : "Click to View"}
                      </a>
                    } />
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ D. STAFF (TEACHING) ══════════════════════════════════ */}
      <section className="py-24" style={{ background:"#f8fafc" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(245,158,11,0.1)`, color:"#b45309", border:"1.5px solid rgba(245,158,11,0.3)" }}>
              <Users size={11}/> {isHindi ? "अनुभाग D" : "Section D"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "शिक्षण " : "Teaching "}
              <span style={{ background:`linear-gradient(90deg,${GOLD},${PURPLE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "स्टाफ विवरण" : "Staff Details"}
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div {...fadeUp(0.1)} className="rounded-3xl overflow-hidden" style={LIGHT_CARD}>
              <div className="p-6 md:p-8">
                <SectionHeader letter="D" title={isHindi ? "शिक्षण स्टाफ" : "Staff (Teaching)"} color={GOLD} icon={<Users size={18}/>}/>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background:`#f1f5f9` }}>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50 w-12">S.NO.</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">INFORMATION</th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow sno="1" info={isHindi ? "प्रिंसिपल" : "Principal"} detail={<span className="font-bold text-foreground">1</span>} highlight />
                    <TableRow sno="2" info={isHindi ? "शिक्षकों की कुल संख्या" : "Total No. of Teachers"} detail={
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-lg" style={{ color: BLUE }}>85</span>
                          <span className="text-xs text-foreground/50">{isHindi ? "(कुल)" : "(Total)"}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-1">
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background:`${CYAN}15`, color: CYAN, border:`1px solid ${CYAN}30` }}>
                            PRT: 41
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background:`${EMERALD}15`, color: EMERALD, border:`1px solid ${EMERALD}30` }}>
                            PGT: 27
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background:`${PURPLE}15`, color: PURPLE, border:`1px solid ${PURPLE}30` }}>
                            TGT: 17
                          </span>
                        </div>
                      </div>
                    } />
                    <TableRow sno="3" info={isHindi ? "शिक्षक अनुभाग अनुपात" : "Teachers Section Ratio"} detail={
                      <span className="font-extrabold text-lg" style={{ color: GOLD }}>1:30</span>
                    } />
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="p-8 rounded-3xl" style={LIGHT_CARD}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background:`${GOLD}15`, border:`1.5px solid ${GOLD}30` }}>
                  <Sparkles size={18} color={GOLD}/>
                </div>
                <h3 className="font-bold text-foreground text-lg">{isHindi ? "स्टाफ योग्यता" : "Staff Qualifications"}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isHindi ? [
                  "सभी शिक्षक प्रासंगिक विषयों में स्नातक / स्नातकोत्तर डिग्री धारक",
                  "B.Ed / M.Ed प्रशिक्षित शिक्षण पेशेवर",
                  "CBSE के तहत नियमित पेशेवर विकास कार्यशालाएं",
                  "विशेषज्ञ संकाय — कक्षा XI और XII की प्रमुख विषयों के लिए",
                  "डिजिटल शिक्षण पद्धतियों में प्रशिक्षित स्टाफ",
                  "आत्मविश्वास से भरे, प्रेरित और अनुभवी शिक्षक",
                ] : [
                  "All teachers hold graduate / post-graduate degrees in relevant subjects",
                  "B.Ed / M.Ed trained teaching professionals",
                  "Regular professional development workshops under CBSE",
                  "Specialist faculty for key subjects in Classes XI & XII",
                  "Staff trained in digital teaching methodologies",
                  "Confident, motivated, and experienced educators",
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: EMERALD }}/>
                    <span className="text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ E. ACADEMIC RESULTS ══════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background:`rgba(16,185,129,0.1)`, color:"#059669", border:"1.5px solid rgba(16,185,129,0.3)" }}>
              <BarChart3 size={11}/> {isHindi ? "अनुभाग E" : "Section E"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground leading-tight">
              {isHindi ? "बोर्ड परीक्षा " : "Board Exam "}
              <span style={{ background:`linear-gradient(90deg,${EMERALD},${CYAN})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "प्रदर्शन" : "Performance"}
              </span>
            </h2>
            <p className="text-foreground/50 mt-4 text-base max-w-xl mx-auto">
              {isHindi
                ? "पिछले 3 वर्षों के CBSE बोर्ड परीक्षा परिणाम।"
                : "CBSE board exam results for the last 3 academic years."}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Class X */}
            <motion.div {...fadeUp(0.1)} className="rounded-3xl overflow-hidden" style={LIGHT_CARD}>
              <div className="px-6 py-4 flex items-center gap-3" style={{ background:`linear-gradient(135deg,${NAVY},${NAVY2})` }}>
                <GraduationCap size={18} color={CYAN}/>
                <h3 className="font-bold text-white text-base">{isHindi ? "परिणाम — कक्षा X" : "Result Class: X"}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background:"#f1f5f9" }}>
                      {(isHindi
                        ? ["क्र.सं.","वर्ष","पंजीकृत छात्र","उत्तीर्ण छात्र","उत्तीर्ण %"]
                        : ["Sr. No.","Year","No. of Registered Students","No. of Students Passed","Pass %"]
                      ).map((h, i) => (
                        <th key={i} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {resultsX.map((r) => {
                      const pct = Math.round((r.passed / r.registered) * 100);
                      return (
                        <tr key={r.sno} className="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
                          <td className="px-5 py-4 font-bold text-foreground/40 text-center">{r.sno}</td>
                          <td className="px-5 py-4">
                            <span className="font-bold text-sm px-3 py-1 rounded-full"
                              style={{ background:`${r.color}12`, color:r.color, border:`1px solid ${r.color}25` }}>
                              {r.year}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-semibold text-foreground/70">{r.registered}</td>
                          <td className="px-5 py-4 font-semibold text-foreground/70">{r.passed}</td>
                          <td className="px-5 py-4">
                            <span className="flex items-center gap-1.5 font-bold text-sm" style={{ color: pct === 100 ? EMERALD : BLUE }}>
                              <CheckCircle2 size={13}/> {pct}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Class XII */}
            <motion.div {...fadeUp(0.2)} className="rounded-3xl overflow-hidden" style={LIGHT_CARD}>
              <div className="px-6 py-4 flex items-center gap-3" style={{ background:`linear-gradient(135deg,${NAVY},${NAVY2})` }}>
                <GraduationCap size={18} color={GOLD}/>
                <h3 className="font-bold text-white text-base">{isHindi ? "परिणाम — कक्षा XII" : "Result Class: XII"}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background:"#f1f5f9" }}>
                      {(isHindi
                        ? ["क्र.सं.","वर्ष","पंजीकृत छात्र","उत्तीर्ण छात्र","उत्तीर्ण %"]
                        : ["Sr. No.","Year","No. of Registered Students","No. of Students Passed","Pass %"]
                      ).map((h, i) => (
                        <th key={i} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-foreground/50">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {resultsXII.map((r) => {
                      const pct = Math.round((r.passed / r.registered) * 100);
                      return (
                        <tr key={r.sno} className="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
                          <td className="px-5 py-4 font-bold text-foreground/40 text-center">{r.sno}</td>
                          <td className="px-5 py-4">
                            <span className="font-bold text-sm px-3 py-1 rounded-full"
                              style={{ background:`${r.color}12`, color:r.color, border:`1px solid ${r.color}25` }}>
                              {r.year}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-semibold text-foreground/70">{r.registered}</td>
                          <td className="px-5 py-4 font-semibold text-foreground/70">{r.passed}</td>
                          <td className="px-5 py-4">
                            <span className="flex items-center gap-1.5 font-bold text-sm" style={{ color: pct === 100 ? EMERALD : BLUE }}>
                              <CheckCircle2 size={13}/> {pct}%
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <div className="flex items-center gap-2 text-xs text-foreground/40 px-2">
              <AlertCircle size={12}/> {isHindi
                ? "विस्तृत परिणाम विद्यालय कार्यालय में उपलब्ध हैं।"
                : "Detailed result records available at the school office."}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEE DISCLOSURE NOTE ══════════════════════════════ */}
      <section className="py-16" style={{ background:"#f8fafc" }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp()} className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl text-center relative overflow-hidden"
            style={{ background:`linear-gradient(135deg,${NAVY} 0%,${NAVY2} 100%)` }}>
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"40px 40px" }}/>
            {[
              { w:340,h:340, x:"-5%", y:"-30%", c:CYAN,   dur:10 },
              { w:280,h:280, x:"70%", y:"40%",  c:EMERALD,dur:13 },
            ].map((o,i) => (
              <motion.div key={i} className="absolute rounded-full pointer-events-none"
                style={{ width:o.w,height:o.h,left:o.x,top:o.y,background:`radial-gradient(circle,${o.c}20,transparent 70%)` }}
                animate={{ scale:[1,1.2,1],opacity:[0.3,0.6,0.3] }}
                transition={{ repeat:Infinity,duration:o.dur,ease:"easeInOut" }}/>
            ))}
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-3xl flex items-center justify-center mb-5"
                style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)" }}>
                <BookOpen size={28} color={CYAN}/>
              </div>
              <h3 className="font-serif font-extrabold text-white text-2xl md:text-3xl mb-4">
                {isHindi ? "शुल्क संरचना" : "Fee Structure"}
              </h3>
              <p className="text-white/55 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                {isHindi
                  ? "कक्षा-वार शुल्क विवरण, मासिक और वार्षिक दोनों, स्कूल कार्यालय में उपलब्ध है। अधिक जानकारी के लिए हमसे संपर्क करें।"
                  : "Class-wise fee details, both monthly and annual, are available at the school office. Please contact us for complete information."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:9812574766"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ background:`linear-gradient(135deg,${EMERALD},#059669)`, color:"white", boxShadow:`0 6px 24px ${EMERALD}40` }}>
                  <Phone size={14}/> {isHindi ? "9812574766 कॉल करें" : "Call 9812574766"}
                </a>
                <a href="mailto:themilestonektl@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ ...GLASS, color:"rgba(255,255,255,0.75)" }}>
                  <Mail size={14}/> {isHindi ? "ईमेल करें" : "Email Us"}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
