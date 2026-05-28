import { motion } from "framer-motion";
import {
  Eye, Target, Heart, Award, Users, BookOpen, Shield,
  ArrowRight, Trophy, Star, GraduationCap, MapPin, Calendar,
  CheckCircle, Sparkles, Quote
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
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.88 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AboutPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const pillars = isHindi ? [
    {
      icon: Eye,
      title: "हमारी दृष्टि",
      gradient: "from-[#0f2f6e] to-[#1a56c4]",
      accent: "#60a5fa",
      desc: "एक उत्कृष्टता केंद्र बनना जो जिज्ञासु, दयालु और सक्षम शिक्षार्थियों का पोषण करे, जो सार्थक जीवन जीएं और समाज में सकारात्मक योगदान दें।"
    },
    {
      icon: Target,
      title: "हमारा मिशन",
      gradient: "from-[#14532d] to-[#16a34a]",
      accent: "#4ade80",
      desc: "एक समग्र, CBSE-संरेखित शिक्षा प्रदान करना जो शैक्षणिक कठोरता और चरित्र निर्माण को संतुलित करे — हर छात्र को उनकी अनूठी क्षमता खोजने के लिए सशक्त करे।"
    },
    {
      icon: Heart,
      title: "हमारे मूल्य",
      gradient: "from-[#4c1d95] to-[#7c3aed]",
      accent: "#c4b5fd",
      desc: "ईमानदारी, करुणा, अनुशासन, जिज्ञासा और सम्मान — कक्षाओं में, खेल मैदान पर और दैनिक जीवन में हम जो कुछ भी करते हैं उसकी नींव।"
    },
  ] : [
    {
      icon: Eye,
      title: "Our Vision",
      gradient: "from-[#0f2f6e] to-[#1a56c4]",
      accent: "#60a5fa",
      desc: "To be a centre of excellence that nurtures curious, compassionate, and capable learners who go on to lead meaningful lives and contribute positively to society."
    },
    {
      icon: Target,
      title: "Our Mission",
      gradient: "from-[#14532d] to-[#16a34a]",
      accent: "#4ade80",
      desc: "To provide a holistic, CBSE-aligned education that balances academic rigour with character building — empowering every student to discover their unique potential."
    },
    {
      icon: Heart,
      title: "Our Values",
      gradient: "from-[#4c1d95] to-[#7c3aed]",
      accent: "#c4b5fd",
      desc: "Integrity, compassion, discipline, curiosity, and respect form the foundation of everything we do — in classrooms, on the sports field, and in daily life."
    },
  ];

  const milestones = isHindi ? [
    { year: "2008", event: "द माइलस्टोन सी.सेक. स्कूल की स्थापना 120 छात्रों और गुणवत्तापूर्ण शिक्षा के सपने के साथ कैथल में हुई।", icon: Sparkles },
    { year: "2012", event: "CBSE मान्यता प्राप्त हुई और अत्याधुनिक बुनियादी ढांचे के साथ कक्षा I-X तक विस्तार किया गया।", icon: GraduationCap },
    { year: "2016", event: "कक्षा XI और XII के लिए वरिष्ठ माध्यमिक स्ट्रीम — विज्ञान, वाणिज्य और कला — शुरू किए गए।", icon: BookOpen },
    { year: "2019", event: "स्मार्ट क्लासरूम विंग, डिजिटल पुस्तकालय और पूर्ण सुसज्जित विज्ञान प्रयोगशालाओं का उद्घाटन।", icon: Star },
    { year: "2022", event: "लगातार तीसरे वर्ष 100% बोर्ड परिणाम; स्कूल की शक्ति 1,000 छात्रों को पार कर गई।", icon: Trophy },
    { year: "2025", event: "CBSE कक्षा X — 100% उत्कृष्ट परिणाम जिसमें कई 90%+ स्कोरर; स्केटिंग चैम्पियनशिप में स्वर्ण और रजत।", icon: Award },
  ] : [
    { year: "2008", event: "The Milestone Sr. Sec. School founded in Kaithal with 120 students and a vision of quality education.", icon: Sparkles },
    { year: "2012", event: "Received CBSE affiliation and expanded to Classes I–X with state-of-the-art infrastructure.", icon: GraduationCap },
    { year: "2016", event: "Launched Senior Secondary streams — Science, Commerce, and Arts — for Classes XI & XII.", icon: BookOpen },
    { year: "2019", event: "Inaugurated the Smart Classroom wing, Digital Library, and fully equipped Science Laboratories.", icon: Star },
    { year: "2022", event: "Achieved 100% board result for the third consecutive year; school strength crossed 1,000 students.", icon: Trophy },
    { year: "2025", event: "CBSE Class X — 100% outstanding result with multiple 90%+ scorers; gold & silver at skating championship.", icon: Award },
  ];

  const whyUs = isHindi ? [
    { icon: BookOpen,      text: "नर्सरी से कक्षा XII तक CBSE पाठ्यक्रम",    sub: "Nursery – Class XII" },
    { icon: Users,         text: "80+ अनुभवी और समर्पित शिक्षक",             sub: "Dedicated Faculty" },
    { icon: Award,         text: "100% बोर्ड परीक्षा पास रिकॉर्ड",           sub: "Consistent Excellence" },
    { icon: Shield,        text: "सुरक्षित, CCTV-निगरानी कैंपस",             sub: "Safe Campus" },
    { icon: Heart,         text: "मूल्यों और चरित्र पर समग्र ध्यान",         sub: "Holistic Development" },
    { icon: Target,        text: "व्यापक पाठ्येतर कार्यक्रम",                sub: "Co-Curricular Activities" },
  ] : [
    { icon: BookOpen,      text: "CBSE curriculum from Nursery to Class XII", sub: "Nursery – Class XII" },
    { icon: Users,         text: "80+ experienced and dedicated faculty",     sub: "Dedicated Faculty" },
    { icon: Award,         text: "100% board exam pass record",               sub: "Consistent Excellence" },
    { icon: Shield,        text: "Safe, CCTV-monitored campus",               sub: "Safe Campus" },
    { icon: Heart,         text: "Holistic focus on values and character",    sub: "Holistic Development" },
    { icon: Target,        text: "Extensive co-curricular programmes",        sub: "Beyond Classrooms" },
  ];

  const achievements = [
    { src: boardResultImg, alt: isHindi ? "CBSE कक्षा 10 — 100% उत्कृष्ट परिणाम 2025-26" : "CBSE Class 10 — 100% Outstanding Result 2025-26", badge: isHindi ? "100% परिणाम" : "100% Result", span: "md:col-span-2 md:row-span-2" },
    { src: parvImg, alt: isHindi ? "पार्व मित्तल — 97% CBSE कक्षा X परिणाम" : "Parv Mittal — 97% CBSE Class X", badge: "97%" },
    { src: nandiniGoldImg, alt: isHindi ? "नंदिनी — गोल्ड ग्लोरी, डिक्लेमेशन (जिला)" : "Nandini — Gold, Declamation (District)", badge: isHindi ? "स्वर्ण" : "Gold" },
    { src: goldGloryImg, alt: isHindi ? "राहुल — स्वर्ण, स्केटिंग चैम्पियनशिप" : "Rahul — Gold, Skating Championship", badge: isHindi ? "स्वर्ण 🥇" : "Gold 🥇" },
    { src: silverGloryImg, alt: isHindi ? "यश — रजत, स्केटिंग चैम्पियनशिप" : "Yash — Silver, Skating Championship", badge: isHindi ? "रजत 🥈" : "Silver 🥈" },
  ];

  const stats = [
    { value: "15+", label: isHindi ? "उत्कृष्टता के वर्ष" : "Years of Excellence", icon: Calendar },
    { value: "1200+", label: isHindi ? "खुश छात्र" : "Happy Students", icon: Users },
    { value: "80+", label: isHindi ? "योग्य शिक्षक" : "Qualified Teachers", icon: GraduationCap },
    { value: "100%", label: isHindi ? "बोर्ड पास रेट" : "Board Pass Rate", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-[#071b45] via-[#0f2f6e] to-[#0d4a28] py-28 md:py-40 overflow-hidden">
          {/* decorative rings */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white/8 -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-3xl rounded-full" />
          {/* dot grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-sm mb-8 uppercase tracking-widest border border-white/15">
                <MapPin size={13} />
                {isHindi ? "कैथल, हरियाणा" : "Kaithal, Haryana"}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.05]">
                {isHindi ? "माइलस्टोन के" : "About"}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#86efac]">
                    {isHindi ? "बारे में" : "The Milestone"}
                  </span>
                </span>
              </h1>
              <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {isHindi
                  ? "कैथल में 15 वर्षों से एक भरोसेमंद नाम — गुणवत्तापूर्ण शिक्षा, मजबूत मूल्यों और एक पोषण देने वाले कैंपस के माध्यम से उज्ज्वल भविष्य बना रहे हैं।"
                  : "A trusted name in Kaithal for over 15 years — shaping bright futures through quality education, strong values, and a nurturing campus."}
              </p>
            </motion.div>

            {/* Hero Stats Strip */}
            <motion.div {...fadeUp(0.25)} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl py-5 px-4 text-center hover:bg-white/15 transition-colors">
                  <s.icon size={20} className="text-secondary mx-auto mb-2 opacity-90" />
                  <div className="text-3xl font-serif font-bold text-white mb-1">{s.value}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="hsl(210,40%,99%)" />
            </svg>
          </div>
        </section>

        {/* ── School Story ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Image side */}
              <motion.div {...scaleIn(0.1)} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/8 to-secondary/8 rounded-3xl -z-10" />
                <img
                  src="/hero.png"
                  alt="School campus"
                  className="rounded-3xl w-full h-[460px] object-cover shadow-2xl"
                />
                {/* Floating badge bottom-left */}
                <div className="absolute -bottom-5 -left-5 bg-primary text-white px-7 py-5 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-serif font-bold leading-none">15+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest opacity-80 mt-1">{isHindi ? "उत्कृष्टता के वर्ष" : "Years of Excellence"}</div>
                </div>
                {/* Floating badge top-right */}
                <div className="absolute -top-5 -right-5 bg-secondary text-white px-7 py-5 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-serif font-bold leading-none">1200+</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest opacity-80 mt-1">{isHindi ? "प्रसन्न छात्र" : "Happy Students"}</div>
                </div>
                {/* Floating badge mid-right */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden lg:flex bg-white border border-border shadow-xl px-4 py-3 rounded-2xl flex-col items-center gap-1">
                  <GraduationCap size={22} className="text-primary" />
                  <div className="text-xl font-serif font-bold text-foreground">80+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{isHindi ? "शिक्षक" : "Teachers"}</div>
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div {...fadeUp(0.15)}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-widest">
                  <Sparkles size={13} />
                  {isHindi ? "हमारी कहानी" : "Our Story"}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
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
                    ? "खुराना बाईपास के पास, कैथल में स्थित हमारा कैंपस 1,200 से अधिक छात्रों, 80+ योग्य शिक्षकों का घर है जो शिक्षा की परिवर्तनकारी शक्ति में गहरा विश्वास रखते हैं।"
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
                    <div key={i} className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3 border border-border">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Vision / Mission / Values ── */}
        <section className="py-24 bg-gradient-to-b from-muted/40 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, hsl(218,90%,42%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-widest">
                {isHindi ? "हमारे मार्गदर्शक सिद्धांत" : "Our Guiding Principles"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {isHindi ? "दृष्टि, मिशन और" : "Vision, Mission &"}{" "}
                <span className="text-secondary">{isHindi ? "मूल्य" : "Values"}</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                {isHindi
                  ? "तीन मूल सिद्धांत जो हर कार्य, हर निर्णय और हर बच्चे की यात्रा को मार्गदर्शन देते हैं।"
                  : "Three core principles that guide every action, every decision, and every child's journey with us."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.12)}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-95`} />
                  {/* decorative circle */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

                  <div className="relative z-10 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
                      <p.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">{p.title}</h3>
                    <p className="text-white/80 leading-relaxed text-[15px]">{p.desc}</p>
                    <div className="mt-6 h-1 w-12 rounded-full" style={{ backgroundColor: p.accent }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principal's Message ── */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

              {/* Portrait */}
              <motion.div {...scaleIn()} className="lg:col-span-2 text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-20 scale-110" />
                  <img
                    src="/principal.png"
                    alt="Mr. Atul Sharma — Principal"
                    className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top shadow-2xl border-8 border-white mx-auto"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-5 py-2 rounded-full whitespace-nowrap shadow-lg border-2 border-white">
                    {isHindi ? "प्रिंसिपल, द माइलस्टोन" : "Principal, The Milestone"}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mt-10 mb-1 text-foreground">Mr. Atul Sharma</h3>
                <p className="text-muted-foreground text-sm">{isHindi ? "M.A., B.Ed. | 20+ वर्षों का अनुभव" : "M.A., B.Ed. | 20+ Years in Education"}</p>
              </motion.div>

              {/* Message */}
              <motion.div {...fadeUp(0.15)} className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-widest">
                  <Quote size={13} />
                  {isHindi ? "प्रिंसिपल का संदेश" : "Principal's Message"}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                  {isHindi ? "हमारे " : "A word from our "}
                  <span className="text-primary">{isHindi ? "प्रिंसिपल" : "Principal"}</span>
                </h2>

                <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-3xl p-8 mb-6">
                  <Quote size={40} className="text-primary/15 absolute top-6 left-6" />
                  <blockquote className="relative z-10">
                    <p className="text-foreground text-lg md:text-xl leading-relaxed font-medium italic">
                      {isHindi
                        ? '"माइलस्टोन में, हम केवल पढ़ाते नहीं — हम प्रेरित करते हैं। हमारे दरवाजे से गुजरने वाला हर बच्चा एक अनकही कहानी है। हमारी भूमिका वह वातावरण, मार्गदर्शन और प्रोत्साहन प्रदान करना है जो उस कहानी को असाधारण बनाए।"'
                        : '"At The Milestone, we do not just educate — we inspire. Every child who walks through our doors is a story waiting to unfold. Our role is to provide the environment, the guidance, and the encouragement to make that story extraordinary."'}
                    </p>
                  </blockquote>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  {isHindi
                    ? '"हम मानते हैं कि शिक्षा पाठ्यपुस्तकों तक सीमित नहीं है। यह प्रयोगशाला में, खेल मैदान पर, संगीत कक्ष में और शिक्षक-छात्र की हर बातचीत में बनती है।"'
                    : '"We believe education is not confined to textbooks. It is built in the laboratory, on the sports field, in the music room, and in every interaction between a teacher and a student. We are committed to delivering all of that — with excellence and with heart."'}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <p className="text-foreground font-bold text-sm">— Mr. Atul Sharma, {isHindi ? "प्रिंसिपल" : "Principal"}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary/3 to-transparent" />
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-widest">
                {isHindi ? "हमारी यात्रा" : "Our Journey"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {isHindi ? "वर्षों के दौरान" : "Milestones"}{" "}
                <span className="text-secondary">{isHindi ? "माइलस्टोन" : "through the years"}</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                {isHindi ? "2008 से अब तक — हर साल एक नई ऊंचाई।" : "From 2008 to today — every year a new milestone reached."}
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* center line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent -translate-x-1/2" />

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.1)}
                    className={`relative flex items-center gap-0 mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                  >
                    {/* Card */}
                    <div className={`flex-1 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"} pl-16 md:pl-0`}>
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <div className="bg-primary/10 text-primary p-2 rounded-xl">
                            <m.icon size={16} />
                          </div>
                          <span className="text-primary font-serif font-bold text-2xl">{m.year}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-[15px]">{m.event}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg border-4 border-background">
                        <m.icon size={16} />
                      </div>
                    </div>

                    {/* Empty spacer for alternating */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Achievements Gallery ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 font-semibold text-sm mb-5 uppercase tracking-widest">
                <Trophy size={13} />
                {isHindi ? "हमारी उपलब्धियां" : "Our Achievements"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
                {isHindi ? "माइलस्टोन का" : "Pride of"}{" "}
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
                <motion.div
                  key={i}
                  {...scaleIn(i * 0.08)}
                  className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer ${item.span ?? ""}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* always-visible gradient + caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-lg">
                      {item.badge}
                    </span>
                    <p className="text-white font-semibold text-sm leading-snug drop-shadow">{item.alt}</p>
                  </div>
                </motion.div>
              ))}

              {/* Video tile */}
              <motion.div {...scaleIn(0.4)} className="relative rounded-3xl overflow-hidden shadow-lg bg-black border border-border">
                <video src="/video4.mp4" controls playsInline preload="metadata" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {isHindi ? "हाइलाइट्स" : "Highlights"}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-24 relative overflow-hidden">
          {/* layered background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#071b45] via-[#0f2f6e] to-[#0d4a28]" />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold text-sm mb-5 uppercase tracking-widest border border-white/15">
                {isHindi ? "माइलस्टोन क्यों" : "Why The Milestone"}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                {isHindi ? "अभिभावक हमें " : "Why parents "}<span className="text-[#4ade80]">{isHindi ? "क्यों चुनते हैं" : "choose us"}</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {isHindi
                  ? "हमारे स्कूल की हर विशेषता एक लक्ष्य को ध्यान में रखकर बनाई गई है — आपके बच्चे की सफलता और खुशी।"
                  : "Every feature of our school is designed with one goal in mind — your child's success and happiness."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className="group flex items-start gap-5 bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-6 hover:bg-white/14 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-secondary/80 group-hover:bg-secondary p-3 rounded-xl flex-shrink-0 transition-colors shadow-lg">
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">{item.sub}</div>
                    <span className="font-semibold text-white text-[15px] leading-snug">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn(0.4)} className="text-center">
              <Link href="/academics">
                <Button
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-12 py-6 text-base font-bold shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-secondary/50"
                >
                  {isHindi ? "शैक्षणिक देखें" : "Explore Academics"}
                  <ArrowRight className="ml-2 h-5 w-5" />
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
