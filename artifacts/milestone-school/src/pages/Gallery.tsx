import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { X, ZoomIn, Play, Camera, Trophy, Users, Sparkles, Grid3X3, Video, Microscope } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import img1 from "@assets/image_1777545590594.png";
import img2 from "@assets/image_1777545604788.png";
import img3 from "@assets/image_1777545627241.png";
import img4 from "@assets/image_1777545636545.png";
import img5 from "@assets/image_1777545667661.png";
import img6 from "@assets/image_1777545679631.png";
import img7 from "@assets/b2fa7411-e0bc-4e50-9a9e-19e39989b78e_1777545688228.png";
import img8 from "@assets/image_1777545703703.png";
import img9 from "@assets/image_1777545767228.png";
import farewellImg from "@assets/SaveClip.App_614889198_18086113952035990_6052207292470122772_n_1777615680379.jpg";
import goldGloryImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777615684795.jpg";
import cbse12ResultImg from "@assets/image_1779951744816.png";
import digitalAwarenessImg from "@assets/image_1779951768177.png";
import karateChampImg from "@assets/image_1779951783244.png";
import techDayImg from "@assets/image_1779951809693.png";
import chessGoldImg from "@assets/image_1779951837517.png";
import interClanImg from "@assets/image_1779951863398.png";
import mobileAwarenessImg from "@assets/image_1779951886679.png";
import donationDriveImg from "@assets/image_1779951906514.png";
import littleHandsImg from "@assets/image_1779951931402.png";
import healthDayImg from "@assets/image_1779951947476.png";
import congratsMilestonersImg from "@assets/image_1779951978961.png";
import loveNatureImg from "@assets/image_1779951994342.png";
import englishOlympiadImg from "@assets/image_1779952017127.png";
import childrensInterviewImg from "@assets/image_1779952039519.png";
import notebookCoverImg from "@assets/image_1779952102017.png";
import cylinderRegImg from "@assets/image_1779952115047.png";
import declamationImg from "@assets/image_1779952134161.png";
import debateImg from "@assets/image_1779952144193.png";
import prayerImg from "@assets/image_1779952189203.png";

import natTechDayAwardImg   from "@assets/image_1780027856130.png";
import amazingEducatorsImg  from "@assets/image_1780027878905.png";
import screenToSceneImg     from "@assets/image_1780027894386.png";
import cbpWorkshopImg       from "@assets/image_1780027914989.png";
import activeParticipImg    from "@assets/image_1780027932559.png";
import interviewActivityImg from "@assets/image_1780027948437.png";
import stepFutureImg        from "@assets/image_1780027970016.png";
import togetherDiffImg      from "@assets/image_1780027992471.png";
import grade9NSSImg         from "@assets/image_1780028003851.png";
import buddhaPurnimaImg     from "@assets/image_1780028022711.png";
import mixingStirringImg    from "@assets/image_1780028042335.png";
import mangoShakeImg        from "@assets/image_1780028053955.png";
import commitGrowthImg      from "@assets/image_1780028126827.png";
import healthyLifestyleImg  from "@assets/image_1780028142790.png";

const VIDEO_SRCS = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

type Category = "all" | "events" | "campus" | "achievements" | "highlights";

interface GalleryItem {
  src: string;
  altEN: string;
  altHI: string;
  category: Category;
  featured?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { src: farewellImg,           altEN: "Farewell Celebration — Turning Pages, Carrying Memories",              altHI: "विदाई समारोह — पन्ने पलटते हुए, यादें संजोते हुए",                     category: "highlights",   featured: true },
  { src: goldGloryImg,          altEN: "Gold Glory — 6th Chandigarh Open Skating Championship",               altHI: "गोल्ड ग्लोरी — 6वीं चंडीगढ़ ओपन स्केटिंग चैंपियनशिप",             category: "achievements", featured: true },
  { src: karateChampImg,        altEN: "Karate Champions — Chandigarh State Championship 2026",               altHI: "कराटे चैंपियंस — चंडीगढ़ राज्य चैंपियनशिप 2026",                   category: "achievements", featured: true },
  { src: chessGoldImg,          altEN: "Reyansh Sharma — Gold Medal, Chess Championship",                     altHI: "रेयांश शर्मा — गोल्ड मेडल, शतरंज चैंपियनशिप",                      category: "achievements", featured: true },
  { src: cbse12ResultImg,       altEN: "CBSE Grade XII Science Result 2025-26 — Drishti 92%",                 altHI: "CBSE कक्षा XII विज्ञान परिणाम 2025-26 — दृष्टि 92%",                 category: "achievements", featured: true },
  { src: declamationImg,        altEN: "Gold Glory — Nandini, Declamation Competition",                       altHI: "गोल्ड ग्लोरी — नंदिनी, वक्तृत्व प्रतियोगिता",                      category: "achievements" },
  { src: debateImg,             altEN: "Gold Glory — Reshika & Yashika, Debate Competition",                  altHI: "गोल्ड ग्लोरी — रेशिका और यशिका, वाद-विवाद प्रतियोगिता",            category: "achievements" },
  { src: englishOlympiadImg,    altEN: "Young Achievers — English Olympiad Winners",                          altHI: "युवा उपलब्धिकर्ता — इंग्लिश ओलंपियाड विजेता",                      category: "achievements" },
  { src: img6,                  altEN: "Annual Day Stage Performance",                                        altHI: "वार्षिक दिवस मंच प्रदर्शन",                                         category: "events",       featured: true },
  { src: img3,                  altEN: "Cultural Celebration at The Milestone",                               altHI: "माइलस्टोन में सांस्कृतिक उत्सव",                                    category: "events" },
  { src: img4,                  altEN: "Student Music Performance on Stage",                                  altHI: "मंच पर छात्र संगीत प्रदर्शन",                                       category: "events" },
  { src: img9,                  altEN: "Investiture Ceremony at School Entrance",                             altHI: "स्कूल प्रवेश पर निवेश समारोह",                                      category: "events" },
  { src: digitalAwarenessImg,   altEN: "Empowering Young Minds — Digital Awareness with Haryana Police",      altHI: "युवा मन सशक्तिकरण — हरियाणा पुलिस के साथ डिजिटल जागरूकता",        category: "events" },
  { src: techDayImg,            altEN: "National Technology Day — Poster-Making, Deewal 2nd Position",        altHI: "राष्ट्रीय प्रौद्योगिकी दिवस — पोस्टर बनाना, दीवाल द्वितीय स्थान", category: "events" },
  { src: interClanImg,          altEN: "Inter Clan Awareness Drive 2026",                                     altHI: "इंटर क्लान जागरूकता अभियान 2026",                                   category: "events" },
  { src: mobileAwarenessImg,    altEN: "Mobile Addiction Awareness Programme",                                altHI: "मोबाइल नशा जागरूकता कार्यक्रम",                                    category: "events" },
  { src: donationDriveImg,      altEN: "Donation Drive — Giving Back to the Community",                      altHI: "डोनेशन ड्राइव — समुदाय को वापस देना",                              category: "events" },
  { src: healthDayImg,          altEN: "Encouraging a Healthy Lifestyle — World Health Day",                  altHI: "स्वस्थ जीवनशैली को प्रोत्साहन — विश्व स्वास्थ्य दिवस",             category: "events" },
  { src: congratsMilestonersImg,altEN: "Congratulations Milestoners — Welcome Song & Solo Dance",             altHI: "बधाई माइलस्टोनर्स — स्वागत गीत और एकल नृत्य",                      category: "events" },
  { src: childrensInterviewImg, altEN: "Children's Interview — Budding Communicators",                        altHI: "बच्चों का साक्षात्कार — उभरते संचारक",                              category: "events" },
  { src: cylinderRegImg,        altEN: "Cylinder Regulator Change — Hands-on Science Learning",              altHI: "सिलेंडर रेगुलेटर बदलाव — प्रयोगात्मक विज्ञान सीखना",               category: "events" },
  { src: img8,                  altEN: "Award Winners with Certificates",                                     altHI: "प्रमाण पत्र के साथ पुरस्कार विजेता",                                category: "achievements" },
  { src: img1,                  altEN: "Students with School Principal in Office",                            altHI: "स्कूल प्रिंसिपल के साथ छात्र कार्यालय में",                        category: "campus" },
  { src: img2,                  altEN: "Group Photo at The Tribune Visit",                                    altHI: "द ट्रिब्यून विजिट पर ग्रुप फोटो",                                  category: "campus" },
  { src: img5,                  altEN: "Class Group Photograph in Auditorium",                                altHI: "सभागार में कक्षा समूह फोटो",                                        category: "campus" },
  { src: img7,                  altEN: "School Assembly with Students and Staff",                             altHI: "छात्रों और कर्मचारियों के साथ स्कूल सभा",                          category: "campus" },
  { src: littleHandsImg,        altEN: "Little Hands, Big Learning — Early Childhood Activities",             altHI: "छोटे हाथ, बड़ी सीख — प्रारंभिक बाल्यावस्था गतिविधियां",            category: "campus" },
  { src: loveNatureImg,         altEN: "Learning to Love Nature — Environmental Education",                   altHI: "प्रकृति से प्यार करना सीखना — पर्यावरण शिक्षा",                    category: "campus" },
  { src: notebookCoverImg,      altEN: "Notebook Cover Designing — Creative Arts Activity",                   altHI: "नोटबुक कवर डिज़ाइनिंग — रचनात्मक कला गतिविधि",                    category: "campus" },
  { src: prayerImg,             altEN: "Prayer & Magic Words — Morning Assembly",                             altHI: "प्रार्थना और जादुई शब्द — सुबह की सभा",                             category: "campus" },
  { src: natTechDayAwardImg,   altEN: "National Technology Day — Deewal Wins 2nd Position, Poster Making at ITI Kaithal", altHI: "राष्ट्रीय प्रौद्योगिकी दिवस — दीवाल को ITI कैथल में पोस्टर-मेकिंग में द्वितीय स्थान", category: "achievements", featured: true },
  { src: amazingEducatorsImg,  altEN: "Our Amazing Educators — Ms. Renu, Ms. Neelam, Ms. Preeti, Ms. Deepika", altHI: "हमारे अद्भुत शिक्षक — सुश्री रेणु, सुश्री नीलम, सुश्री प्रीति, सुश्री दीपिका", category: "campus" },
  { src: screenToSceneImg,     altEN: "From Screen to Scene — Kids Learn Healthy Daily Habits vs Screen Time",   altHI: "स्क्रीन से दृश्य तक — बच्चों ने स्वस्थ दिनचर्या और स्क्रीन टाइम का अंतर सीखा",      category: "events" },
  { src: cbpWorkshopImg,       altEN: "CBP Workshop 2026 — Promoting Mental Health & Wellness at The Milestone",  altHI: "CBP वर्कशॉप 2026 — माइलस्टोन में मानसिक स्वास्थ्य और कल्याण को बढ़ावा",             category: "events" },
  { src: activeParticipImg,    altEN: "Active Participation — 60 Teachers in CBP Workshop, Interactive & Engaging", altHI: "सक्रिय भागीदारी — CBP वर्कशॉप में 60 शिक्षकों की उत्साही सहभागिता",                category: "events" },
  { src: interviewActivityImg, altEN: "Interview Activity — From Learning to Leading, Mock Interviews at The Milestone", altHI: "इंटरव्यू एक्टिविटी — लर्निंग से लीडिंग तक, माइलस्टोन में मॉक इंटरव्यू",            category: "events" },
  { src: stepFutureImg,        altEN: "A Step Towards the Future — Confidence, Communication & Life Skills",       altHI: "भविष्य की ओर एक कदम — आत्मविश्वास, संचार और जीवन कौशल",                          category: "events" },
  { src: togetherDiffImg,      altEN: "Together We Can Make a Difference — NSS Community Service Drive",           altHI: "मिलकर हम बदलाव ला सकते हैं — NSS सामुदायिक सेवा अभियान",                         category: "events" },
  { src: grade9NSSImg,         altEN: "Grade 9 Students in Noble Cause — National Service Scheme Initiative",      altHI: "कक्षा 9 के छात्र एक नेक काम में — राष्ट्रीय सेवा योजना पहल",                    category: "events" },
  { src: buddhaPurnimaImg,     altEN: "Happy Buddha Purnima — Cultural Stage Performance, 12 May 2025",            altHI: "हैप्पी बुद्ध पूर्णिमा — सांस्कृतिक मंच प्रदर्शन, 12 मई 2025",                   category: "events" },
  { src: mixingStirringImg,    altEN: "Mixing, Stirring & Smiling — Summer Mango Activity with Students",          altHI: "मिक्सिंग, स्टिरिंग और मुस्कुराहट — छात्रों के साथ ग्रीष्मकालीन आम गतिविधि",      category: "campus" },
  { src: mangoShakeImg,        altEN: "Summer Special Mango Shake — Students Present Healthy Drink to School Head", altHI: "समर स्पेशल मैंगो शेक — छात्रों ने स्कूल प्रमुख को स्वस्थ पेय भेंट किया",          category: "campus" },
  { src: commitGrowthImg,      altEN: "Commitment to Growth — Empowering Teachers, Strengthening Education",       altHI: "विकास के प्रति प्रतिबद्धता — शिक्षकों को सशक्त बनाना, शिक्षा को मजबूत करना",    category: "campus" },
  { src: healthyLifestyleImg,  altEN: "Encouraging a Healthy Lifestyle — World Health Day Activities at The Milestone", altHI: "स्वस्थ जीवनशैली को प्रोत्साहन — माइलस्टोन में विश्व स्वास्थ्य दिवस गतिविधियां", category: "events" },
];

const STAT_ITEMS_EN = [
  { icon: Camera,   val: "600+",  label: "Memories Captured" },
  { icon: Trophy,   val: "50+",   label: "Events Celebrated" },
  { icon: Users,    val: "15+",   label: "Years of Campus Life" },
  { icon: Sparkles, val: "100%",  label: "Pure Joy" },
];
const STAT_ITEMS_HI = [
  { icon: Camera,   val: "600+",  label: "यादें कैद" },
  { icon: Trophy,   val: "50+",   label: "उत्सव मनाए" },
  { icon: Users,    val: "15+",   label: "कैंपस जीवन के वर्ष" },
  { icon: Sparkles, val: "100%",  label: "शुद्ध आनंद" },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const FILTERS: { key: Category; labelEN: string; labelHI: string; icon: React.ReactNode }[] = [
    { key: "all",          labelEN: "All",          labelHI: "सभी",        icon: <Grid3X3 size={13}/> },
    { key: "highlights",   labelEN: "Highlights",   labelHI: "हाइलाइट्स", icon: <Sparkles size={13}/> },
    { key: "events",       labelEN: "Events",       labelHI: "कार्यक्रम", icon: <Camera size={13}/> },
    { key: "achievements", labelEN: "Achievements", labelHI: "उपलब्धियां",icon: <Trophy size={13}/> },
    { key: "campus",       labelEN: "Campus Life",  labelHI: "कैंपस जीवन",icon: <Users size={13}/> },
  ];

  const filtered = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.category === activeFilter);

  const videoLabels = isHindi
    ? ["स्कूल कार्यक्रम", "कैंपस के पल", "छात्र गतिविधियां"]
    : ["School Event", "Campus Moments", "Student Activities"];

  const statsItems = isHindi ? STAT_ITEMS_HI : STAT_ITEMS_EN;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

        {/* Animated orbs */}
        {[
          { w: 500, h: 500, x: "-8%",  y: "-20%", c: "#2563EB", dur: 9 },
          { w: 380, h: 380, x: "70%",  y: "40%",  c: "#10B981", dur: 12 },
          { w: 260, h: 260, x: "30%",  y: "60%",  c: "#8B5CF6", dur: 7 },
        ].map((o, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle, ${o.c}28, transparent 70%)` }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
        ))}

        {/* Floating camera icons */}
        {["📸", "🎭", "🏆", "🎬", "✨", "🎓"].map((emoji, i) => (
          <motion.div key={i} className="absolute text-2xl select-none pointer-events-none hidden md:block"
            style={{ left: `${[8,85,15,78,45,62][i]}%`, top: `${[20,15,72,68,12,78][i]}%` }}
            animate={{ y: [0, -14, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ repeat: Infinity, duration: 4 + i * 0.7, delay: i * 0.5, ease: "easeInOut" }}>
            {emoji}
          </motion.div>
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-28 md:py-36 text-center">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7"
            style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)" }}>
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }}>📸</motion.span>
            {isHindi ? "कैंपस जीवन" : "Campus Life"}
            <motion.span className="w-2 h-2 rounded-full bg-green-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.9 }}/>
          </motion.div>

          <motion.h1 className="font-serif font-extrabold text-white leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            {isHindi ? "माइलस्टोन के" : "Moments at"}
            <br/>
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #34d399, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {isHindi ? "यादगार पल" : "The Milestone"}
            </span>
          </motion.h1>

          <motion.p className="text-white/65 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            {isHindi
              ? "हमारे छात्रों, उत्सवों, उपलब्धियों और कैंपस की खुशियों की झलकियां — हर पल अनमोल है।"
              : "Glimpses of our students, celebrations, achievements, and everyday joys — every moment here is a milestone."}
          </motion.p>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 70L1440 70L1440 25C1200 70 960 5 720 25C480 45 240 5 0 25Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────────── */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            {statsItems.map(({ icon: Icon, val, label }, i) => (
              <motion.div key={i}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.09)" }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: `${["#2563EB","#10B981","#8B5CF6","#F59E0B"][i]}15`, border: `1.5px solid ${["#2563EB","#10B981","#8B5CF6","#F59E0B"][i]}30` }}>
                  <Icon size={20} style={{ color: ["#2563EB","#10B981","#8B5CF6","#F59E0B"][i] }}/>
                </div>
                <div>
                  <p className="text-2xl font-serif font-extrabold text-foreground leading-none">{val}</p>
                  <p className="text-muted-foreground text-xs mt-0.5 font-medium">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FILTER TABS ────────────────────────────────────────────── */}
      <section className="pb-4 bg-background sticky top-[64px] z-30 border-b border-border/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {FILTERS.map(({ key, labelEN, labelHI, icon }) => (
              <motion.button key={key}
                onClick={() => setActiveFilter(key)}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-250 flex-shrink-0"
                style={activeFilter === key ? {
                  background: "linear-gradient(135deg, #2563EB, #10B981)",
                  color: "white",
                  boxShadow: "0 4px 18px rgba(37,99,235,0.35)",
                } : {
                  background: "rgba(0,0,0,0.04)",
                  color: "var(--muted-foreground)",
                  border: "1.5px solid var(--border)",
                }}>
                {icon}
                {isHindi ? labelHI : labelEN}
                {activeFilter === key && (
                  <motion.span layoutId="tab-active-dot" className="w-1.5 h-1.5 rounded-full bg-white/80"/>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASONRY PHOTO GRID ─────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((item, i) => (
                <motion.div key={item.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 cursor-pointer break-inside-avoid mb-5"
                  style={item.featured ? { border: "2.5px solid transparent", backgroundImage: "linear-gradient(white,white), linear-gradient(135deg,#2563EB,#10B981)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" } : {}}
                  onClick={() => setLightbox({ src: item.src, alt: isHindi ? item.altHI : item.altEN })}>

                  {item.featured && (
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#2563EB,#10B981)", boxShadow: "0 2px 12px rgba(37,99,235,0.45)" }}>
                      <Sparkles size={9}/> {isHindi ? "फीचर्ड" : "Featured"}
                    </div>
                  )}

                  <img src={item.src} alt={isHindi ? item.altHI : item.altEN}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ display: "block" }}/>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)" }}>
                    <div className="self-end">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <ZoomIn size={16} className="text-white"/>
                      </div>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 text-white"
                        style={{ background: "rgba(255,255,255,0.18)" }}>
                        {isHindi
                          ? { events:"कार्यक्रम", campus:"कैंपस", achievements:"उपलब्धि", highlights:"हाइलाइट" }[item.category]
                          : item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <p className="text-white text-sm font-semibold leading-snug line-clamp-2">
                        {isHindi ? item.altHI : item.altEN}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Camera size={48} className="mx-auto mb-3 opacity-30"/>
              <p>{isHindi ? "इस श्रेणी में कोई चित्र नहीं है।" : "No photos in this category yet."}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── VIDEO SECTION ──────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f172a 0%, #0f2d1a 50%, #1e1b4b 100%)" }}>

        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "44px 44px" }}/>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: "rgba(139,92,246,0.18)", color: "#c4b5fd", border: "1.5px solid rgba(139,92,246,0.4)" }}>
              <Video size={12}/> {isHindi ? "हाइलाइट वीडियो" : "Highlight Videos"}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white mb-3">
              {isHindi ? "जिएं " : "Relive the "}
              <span style={{ background: "linear-gradient(90deg,#a78bfa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {isHindi ? "जादुई पलों को" : "Magic Moments"}
              </span>
            </h2>
            <p className="text-white/55 max-w-xl mx-auto">
              {isHindi ? "हमारे स्कूल कार्यक्रमों, उत्सवों और छात्र गतिविधियों के वीडियो देखें।" : "Watch our school events, celebrations, and student activities come to life."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_SRCS.map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>

                {/* Colored accent bar */}
                <div className="h-1" style={{ background: ["linear-gradient(90deg,#2563EB,#60a5fa)", "linear-gradient(90deg,#10B981,#34d399)", "linear-gradient(90deg,#8B5CF6,#a78bfa)"][i] }}/>

                <div className="relative bg-black">
                  <video src={src} controls playsInline preload="metadata"
                    className="w-full object-cover"
                    style={{ height: "200px" }}/>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center pointer-events-none"
                    style={{ background: ["#2563EB","#10B981","#8B5CF6"][i] + "cc" }}>
                    <Play size={12} className="text-white fill-white ml-0.5"/>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#60a5fa","#34d399","#a78bfa"][i] }}/>
                    <p className="font-bold text-white text-sm">{videoLabels[i]}</p>
                  </div>
                  <p className="text-white/40 text-xs">{isHindi ? "द माइलस्टोन सी.सेक. स्कूल" : "The Milestone Sr. Sec. School"}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── SCIENCE LAB VIDEOS (autoplay · loop · muted · no controls) ── */}
          <motion.div className="mt-14"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(16,185,129,0.18)", color: "#34d399", border: "1.5px solid rgba(16,185,129,0.4)" }}>
                <Microscope size={12}/> {isHindi ? "विज्ञान प्रयोगशाला" : "Science Lab in Action"}
              </div>
              <div className="h-px flex-1 opacity-20" style={{ background: "rgba(255,255,255,0.4)" }}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { src: "/science-lab-video.mp4",  labelEN: "Science Lab — Practical Session",   labelHI: "विज्ञान लैब — प्रयोगात्मक सत्र" },
                { src: "/science-lab-video2.mp4", labelEN: "Science Lab — Hands-on Experiment", labelHI: "विज्ञान लैब — प्रायोगिक प्रयोग"  },
              ].map((v, i) => (
                <div key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}>
                  <div className="h-1" style={{ background: "linear-gradient(90deg,#10B981,#34d399)" }}/>
                  <div className="relative bg-black">
                    <video
                      src={v.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      className="w-full object-cover"
                      style={{ height: "240px", pointerEvents: "none" }}
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "#10B981cc", pointerEvents: "none" }}>
                      <Microscope size={13} className="text-white"/>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>
                      <p className="font-bold text-white text-sm">{isHindi ? v.labelHI : v.labelEN}</p>
                    </div>
                    <p className="text-white/40 text-xs">{isHindi ? "द माइलस्टोन सी.सेक. स्कूल" : "The Milestone Sr. Sec. School"}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── CAMPUS ACTIVITY VIDEOS (autoplay · loop · muted · no controls) ── */}
          <motion.div className="mt-10"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(139,92,246,0.18)", color: "#c4b5fd", border: "1.5px solid rgba(139,92,246,0.4)" }}>
                <Sparkles size={12}/> {isHindi ? "कैंपस गतिविधियां" : "Campus Activities"}
              </div>
              <div className="h-px flex-1 opacity-20" style={{ background: "rgba(255,255,255,0.4)" }}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { src: "/activity-video1.mp4", labelEN: "School Activities — Campus Highlights",    labelHI: "स्कूल गतिविधियां — कैंपस हाइलाइट्स", accent: "#8B5CF6", dot: "#a78bfa" },
                { src: "/activity-video2.mp4", labelEN: "Student Life — Moments at The Milestone", labelHI: "छात्र जीवन — माइलस्टोन के पल",        accent: "#2563EB", dot: "#60a5fa" },
                { src: "/activity-video3.mp4", labelEN: "Campus Events — School Life",             labelHI: "कैंपस इवेंट्स — स्कूल जीवन",           accent: "#EC4899", dot: "#f9a8d4" },
              ].map((v, i) => (
                <div key={i}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${v.accent}55`,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg,${v.accent},${v.dot})` }}/>
                  <div className="relative bg-black">
                    <video
                      src={v.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      className="w-full object-cover"
                      style={{ height: "240px", pointerEvents: "none" }}
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: v.accent + "cc", pointerEvents: "none" }}>
                      <Sparkles size={13} className="text-white"/>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: v.dot }}/>
                      <p className="font-bold text-white text-sm">{isHindi ? v.labelHI : v.labelEN}</p>
                    </div>
                    <p className="text-white/40 text-xs">{isHindi ? "द माइलस्टोन सी.सेक. स्कूल" : "The Milestone Sr. Sec. School"}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────────────────── */}
      <section className="py-16"
        style={{ background: "linear-gradient(135deg, #fefce8 0%, #ecfdf5 50%, #eff6ff 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold mb-3">
              {isHindi ? "हमारी कहानी का हिस्सा बनें" : "Be Part of Our Story"}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-slate-800 mb-6">
              {isHindi ? "आपके बच्चे की यादें यहाँ बनेंगी 🌟" : "Your child's best memories start here 🌟"}
            </h2>
            <a href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #2563EB, #10B981)" }}>
              {isHindi ? "प्रवेश के लिए आवेदन करें" : "Apply for Admissions"} →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ background: "rgba(5,10,20,0.92)", backdropFilter: "blur(16px)" }}
            onClick={() => setLightbox(null)}>

            <motion.div className="relative max-w-5xl w-full"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              onClick={e => e.stopPropagation()}>

              <img src={lightbox.src} alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"/>

              <div className="mt-4 px-2 flex items-start justify-between gap-4">
                <p className="text-white/80 text-sm md:text-base leading-snug">{lightbox.alt}</p>
                <button onClick={() => setLightbox(null)}
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/20 transition-colors">
                  <X size={16} className="text-white"/>
                </button>
              </div>
            </motion.div>

            {/* Close hint */}
            <p className="absolute bottom-5 text-white/30 text-xs">{isHindi ? "बंद करने के लिए क्लिक करें" : "Click anywhere to close"}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
