import { motion } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages, GraduationCap, Layers, Lightbulb, BarChart3, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function AcademicsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const classes = isHindi ? [
    { range: "नर्सरी – KG", label: "प्रारंभिक बचपन", desc: "सामाजिक, संज्ञानात्मक और मोटर कौशल विकसित करने के लिए खेल-आधारित शिक्षा।", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
    { range: "I – V", label: "प्राथमिक विद्यालय", desc: "साक्षरता, गणित, विज्ञान और सामाजिक अध्ययन में मजबूत आधार।", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { range: "VI – VIII", label: "मध्य विद्यालय", desc: "वैचारिक गहराई, परियोजना-आधारित कार्य और आलोचनात्मक सोच का विकास।", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { range: "IX – X", label: "माध्यमिक (CBSE बोर्ड)", desc: "बोर्ड परीक्षा उत्कृष्टता पर ध्यान देने वाला कठोर CBSE पाठ्यक्रम।", color: "bg-green-50 border-green-200 text-green-700" },
    { range: "XI – XII", label: "वरिष्ठ माध्यमिक", desc: "कॉलेज और करियर के लिए छात्रों को तैयार करने हेतु विशेष स्ट्रीम।", color: "bg-rose-50 border-rose-200 text-rose-700" },
  ] : [
    { range: "Nursery – KG", label: "Early Childhood", desc: "Play-based learning to develop social, cognitive, and motor skills.", color: "bg-yellow-50 border-yellow-200 text-yellow-700" },
    { range: "I – V", label: "Primary School", desc: "Strong foundation in literacy, numeracy, science, and social studies.", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { range: "VI – VIII", label: "Middle School", desc: "Conceptual depth, project-based work, and emerging critical thinking.", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { range: "IX – X", label: "Secondary (CBSE Board)", desc: "Rigorous CBSE curriculum with a focus on board exam excellence.", color: "bg-green-50 border-green-200 text-green-700" },
    { range: "XI – XII", label: "Senior Secondary", desc: "Specialised streams to prepare students for college and careers.", color: "bg-rose-50 border-rose-200 text-rose-700" },
  ];

  const streams = isHindi ? [
    { name: "विज्ञान (PCM)", icon: FlaskConical, subjects: ["भौतिकी", "रसायन विज्ञान", "गणित", "अंग्रेजी", "कंप्यूटर विज्ञान / शारीरिक शिक्षा"], color: "border-blue-300 bg-blue-50" },
    { name: "विज्ञान (PCB)", icon: FlaskConical, subjects: ["भौतिकी", "रसायन विज्ञान", "जीव विज्ञान", "अंग्रेजी", "शारीरिक शिक्षा"], color: "border-green-300 bg-green-50" },
    { name: "वाणिज्य", icon: BarChart3, subjects: ["लेखाशास्त्र", "व्यवसाय अध्ययन", "अर्थशास्त्र", "अंग्रेजी", "गणित / सूचना विज्ञान"], color: "border-yellow-300 bg-yellow-50" },
    { name: "कला / मानविकी", icon: BookOpen, subjects: ["इतिहास", "राजनीति विज्ञान", "भूगोल", "अंग्रेजी", "हिंदी / समाजशास्त्र"], color: "border-purple-300 bg-purple-50" },
  ] : [
    { name: "Science (PCM)", icon: FlaskConical, subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science / Physical Education"], color: "border-blue-300 bg-blue-50" },
    { name: "Science (PCB)", icon: FlaskConical, subjects: ["Physics", "Chemistry", "Biology", "English", "Physical Education"], color: "border-green-300 bg-green-50" },
    { name: "Commerce", icon: BarChart3, subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics / Informatics"], color: "border-yellow-300 bg-yellow-50" },
    { name: "Arts / Humanities", icon: BookOpen, subjects: ["History", "Political Science", "Geography", "English", "Hindi / Sociology"], color: "border-purple-300 bg-purple-50" },
  ];

  const methodology = isHindi ? [
    { icon: MonitorPlay, title: "स्मार्ट क्लासरूम", desc: "प्रत्येक कक्षा में दृश्य, इंटरैक्टिव शिक्षण के लिए डिजिटल बोर्ड और मल्टीमीडिया टूल।" },
    { icon: FlaskConical, title: "व्यावहारिक शिक्षा", desc: "भौतिकी, रसायन विज्ञान, जीव विज्ञान और कंप्यूटर विज्ञान में लैब सत्र कक्षा सिद्धांत को मजबूत करते हैं।" },
    { icon: Lightbulb, title: "अवधारणा-प्रथम दृष्टिकोण", desc: "शिक्षक रट्टा लगाने के बजाय गहरी समझ पर ध्यान देते हैं, मजबूत वैचारिक आधार बनाते हैं।" },
    { icon: Layers, title: "नियमित मूल्यांकन", desc: "इकाई परीक्षण, परियोजना कार्य और मॉक बोर्ड परीक्षाएं निरंतर सीखने और तैयारी सुनिश्चित करती हैं।" },
    { icon: Languages, title: "अंग्रेजी दक्षता", desc: "समर्पित अंग्रेजी बोलने और लेखन सत्र वैश्विक तैयारी के लिए संचार कौशल बनाते हैं।" },
    { icon: GraduationCap, title: "करियर मार्गदर्शन", desc: "वरिष्ठ छात्रों को प्रतियोगी परीक्षाओं, कॉलेज चयन और करियर मार्गों के लिए परामर्श मिलता है।" },
  ] : [
    { icon: MonitorPlay, title: "Smart Classrooms", desc: "Every classroom is equipped with digital boards and multimedia tools for visual, interactive learning." },
    { icon: FlaskConical, title: "Practical Learning", desc: "Lab sessions in Physics, Chemistry, Biology, and Computer Science reinforce classroom theory." },
    { icon: Lightbulb, title: "Concept-First Approach", desc: "Teachers focus on deep understanding over rote learning, building strong conceptual foundations." },
    { icon: Layers, title: "Regular Assessments", desc: "Unit tests, project work, and mock board exams ensure continuous learning and preparedness." },
    { icon: Languages, title: "English Proficiency", desc: "Dedicated spoken English and writing sessions build communication skills for global readiness." },
    { icon: GraduationCap, title: "Career Guidance", desc: "Senior students receive counselling for competitive exams, college selection, and career paths." },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#0f2f6e] via-primary to-[#1a7a4a] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-wider">
                {isHindi ? "शैक्षणिक उत्कृष्टता" : "Academic Excellence"}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">
                {isHindi ? "शैक्षणिक और पाठ्यक्रम" : "Academics & Curriculum"}
              </h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
                {isHindi
                  ? "नर्सरी से कक्षा XII तक CBSE-संरेखित शिक्षा — जो जिज्ञासा को प्रेरित करती है और आजीवन सीखने वाले बनाती है।"
                  : "CBSE-aligned education from Nursery to Class XII — designed to challenge, inspire, and build lifelong learners."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp()}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                  {isHindi ? "CBSE पाठ्यक्रम" : "CBSE Curriculum"}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                  {isHindi ? "कल की दुनिया के लिए बनाया गया " : "A curriculum built for "}
                  <span className="text-secondary">{isHindi ? "पाठ्यक्रम" : "tomorrow's world"}</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-5 leading-relaxed">
                  {isHindi
                    ? "हम नर्सरी से कक्षा XII तक CBSE पाठ्यक्रम का पालन करते हैं — भारत के सबसे सम्मानित शिक्षा ढांचों में से एक। हमारा दृष्टिकोण पाठ्यपुस्तकों से परे जाकर आलोचनात्मक सोच, रचनात्मकता और समस्या-समाधान कौशल विकसित करता है।"
                    : "We follow the Central Board of Secondary Education (CBSE) curriculum — one of India's most respected education frameworks — from Nursery through Class XII. Our approach goes beyond textbooks to build critical thinking, creativity, and problem-solving skills."}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {isHindi
                    ? "प्रत्येक विषय को स्मार्ट क्लासरूम टूल, नियमित मूल्यांकन और समर्पित संदेह-निवारण सत्रों के साथ अवधारणा-प्रथम पद्धति का उपयोग करके पढ़ाया जाता है।"
                    : "Every subject is taught using a concept-first methodology with smart classroom tools, regular assessments, and dedicated doubt-clearing sessions to ensure no student is left behind."}
                </p>
              </motion.div>
              <motion.div {...fadeUp(0.15)}>
                <img src="/smart-classroom.png" alt="Smart Classroom" className="rounded-3xl w-full h-[400px] object-cover shadow-2xl border-8 border-white" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Classes Offered */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "उपलब्ध कक्षाएं" : "Classes Offered"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {isHindi ? "नर्सरी से कक्षा XII — सब एक छत के नीचे" : "Nursery to Class XII — all under one roof"}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {classes.map((c, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className={`border-2 rounded-2xl p-6 text-center ${c.color} hover:scale-105 transition-transform duration-300`}>
                  <div className="text-2xl font-serif font-bold mb-2">{c.range}</div>
                  <div className="font-semibold text-sm mb-3">{c.label}</div>
                  <p className="text-xs leading-relaxed opacity-80">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Streams for XI & XII */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "वरिष्ठ माध्यमिक स्ट्रीम" : "Senior Secondary Streams"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {isHindi ? "अपना मार्ग चुनें — कक्षा XI और XII" : "Choose your path — Classes XI & XII"}
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                {isHindi ? "हम हर छात्र की महत्वाकांक्षा और योग्यता के अनुसार चार स्ट्रीम प्रदान करते हैं।" : "We offer four streams tailored to every student's ambition and aptitude."}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {streams.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className={`border-2 rounded-2xl p-8 ${s.color} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-white p-2.5 rounded-xl shadow-sm"><s.icon size={22} className="text-primary" /></div>
                    <h3 className="text-xl font-serif font-bold">{s.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.subjects.map((sub, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "शिक्षण दृष्टिकोण" : "Teaching Approach"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {isHindi ? "हम सीखने को यादगार कैसे बनाते हैं" : "How we make learning stick"}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodology.map((m, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl transition-shadow group">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <m.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-3">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results CTA */}
        <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fefce8 0%, #ecfdf5 40%, #eff6ff 100%)" }}>
          {/* Decorative blobs */}
          <div className="absolute top-[-60px] left-[-60px] w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(250,204,21,0.25), transparent 70%)" }} />
          <div className="absolute bottom-[-40px] right-[-40px] w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.20), transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)" }} />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="max-w-4xl mx-auto">
              {/* Top label */}
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: "rgba(16,185,129,0.12)", color: "#059669", border: "1.5px solid rgba(16,185,129,0.3)" }}>
                  🏆 {isHindi ? "हमारी उपलब्धि" : "Our Achievement"}
                </span>
              </div>

              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                {/* Rainbow top bar */}
                <div className="h-1.5" style={{ background: "linear-gradient(90deg, #2563EB, #10B981, #F59E0B, #EF4444, #8B5CF6)" }} />

                <div className="p-10 md:p-14 text-center">
                  {/* Big number */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.1 }}
                    className="inline-block mb-4">
                    <span className="font-serif font-extrabold leading-none"
                      style={{ fontSize: "clamp(4rem, 12vw, 8rem)", background: "linear-gradient(135deg, #16a34a, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      100%
                    </span>
                  </motion.div>

                  <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-slate-800 mb-3 leading-tight">
                    {isHindi ? "CBSE कक्षा X परिणाम — 2025-26" : "CBSE Class X Result — 2025-26"}
                  </h2>
                  <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    {isHindi
                      ? "कक्षा X CBSE बोर्ड परीक्षा में बैठने वाले हर एक छात्र ने उत्कृष्टता के साथ उत्तीर्ण किया। परव मित्तल ने 97% के साथ शीर्ष स्थान प्राप्त किया।"
                      : "Every single student who appeared for the Class X CBSE board exam passed with distinction. Parv Mittal topped with 97%."}
                  </p>

                  {/* Stat pills */}
                  <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {(isHindi ? [
                      { emoji: "🥇", label: "टॉपर: परव मित्तल", val: "97%" },
                      { emoji: "📈", label: "पास प्रतिशत", val: "100%" },
                      { emoji: "🎓", label: "CBSE बोर्ड", val: "2025–26" },
                    ] : [
                      { emoji: "🥇", label: "Topper: Parv Mittal", val: "97%" },
                      { emoji: "📈", label: "Pass Percentage", val: "100%" },
                      { emoji: "🎓", label: "CBSE Board", val: "2025–26" },
                    ]).map(({ emoji, label, val }, i) => (
                      <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl border"
                        style={{ background: "linear-gradient(135deg, #f8fafc, #f1f5f9)", borderColor: "#e2e8f0" }}>
                        <span className="text-xl">{emoji}</span>
                        <div className="text-left">
                          <p className="text-xs text-slate-400 font-medium">{label}</p>
                          <p className="text-base font-extrabold text-slate-800">{val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href="/achievements">
                    <Button size="lg"
                      className="rounded-full px-10 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-0 text-white"
                      style={{ background: "linear-gradient(135deg, #16a34a, #2563EB)" }}>
                      {isHindi ? "सभी उपलब्धियां देखें" : "See All Achievements"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
