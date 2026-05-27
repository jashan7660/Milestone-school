import { motion } from "framer-motion";
import { Smile, BookOpen, Microscope, TrendingUp, Palette, FlaskConical, Calculator, Globe2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function DivisionsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const divisions = isHindi ? [
    {
      label: "प्रारंभिक वर्ष",
      classes: "नर्सरी · LKG · UKG",
      color: "from-pink-400 to-rose-500",
      bg: "bg-pink-50 border-pink-100 dark:bg-pink-950/20",
      icon: Smile,
      desc: "एक पोषणकारी वातावरण जहां छोटे शिक्षार्थी खेल, कला, कहानियों और संरचित गतिविधियों के माध्यम से सीखने का आनंद खोजते हैं। हमारा प्रारंभिक वर्ष कार्यक्रम आजीवन सीखने के लिए सामाजिक, भावनात्मक और संज्ञानात्मक नींव रखता है।",
      highlights: ["गतिविधि-आधारित शिक्षा", "हिंदी और अंग्रेजी साक्षरता", "संख्या तैयारी", "मोटर कौशल विकास", "सुरक्षित और देखभाल करने वाला वातावरण"],
    },
    {
      label: "प्राथमिक विंग",
      classes: "कक्षा I – V",
      color: "from-orange-400 to-amber-500",
      bg: "bg-orange-50 border-orange-100 dark:bg-orange-950/20",
      icon: BookOpen,
      desc: "प्राथमिक विंग संरचित शिक्षा को रचनात्मक अन्वेषण के साथ मिश्रित करते हुए एक आकर्षक CBSE पाठ्यक्रम के माध्यम से मूल शैक्षणिक कौशल बनाता है।",
      highlights: ["CBSE संरेखित पाठ्यक्रम", "स्मार्ट क्लासरूम शिक्षा", "EVS और सामान्य जागरूकता", "कला, संगीत और खेल एकीकृत", "पठन संवर्धन कार्यक्रम"],
    },
    {
      label: "मध्य विद्यालय",
      classes: "कक्षा VI – VIII",
      color: "from-blue-400 to-indigo-500",
      bg: "bg-blue-50 border-blue-100 dark:bg-blue-950/20",
      icon: Globe2,
      desc: "मध्य विद्यालय वह है जहां शैक्षणिक गहराई व्यक्तिगत विकास से मिलती है। छात्र विज्ञान, गणित, सामाजिक विज्ञान और भाषाओं में CBSE पाठ्यक्रम के साथ जुड़ते हैं।",
      highlights: ["विषय विशेषज्ञता शुरू होती है", "प्रयोगशाला प्रयोग", "परियोजना-आधारित शिक्षा", "नेतृत्व और जीवन कौशल", "अंतर-सदन प्रतियोगिताएं"],
    },
    {
      label: "माध्यमिक",
      classes: "कक्षा IX – X",
      color: "from-teal-400 to-emerald-500",
      bg: "bg-teal-50 border-teal-100 dark:bg-teal-950/20",
      icon: Calculator,
      desc: "माध्यमिक विभाग कठोर शैक्षणिक तैयारी, नियमित मूल्यांकन और व्यक्तिगत मार्गदर्शन के साथ CBSE बोर्ड परीक्षाओं के लिए छात्रों को तैयार करता है।",
      highlights: ["100% बोर्ड परिणाम (2025-26)", "नियमित मॉक परीक्षाएं", "संदेह निवारण सत्र", "करियर जागरूकता परामर्श", "NCC और पाठ्येतर गतिविधियां"],
    },
    {
      label: "विज्ञान स्ट्रीम",
      classes: "कक्षा XI – XII · PCM / PCB",
      color: "from-violet-400 to-purple-600",
      bg: "bg-violet-50 border-violet-100 dark:bg-violet-950/20",
      icon: FlaskConical,
      desc: "हमारी विज्ञान स्ट्रीम छात्रों को चिकित्सा, इंजीनियरिंग, अनुसंधान और प्रौद्योगिकी में करियर के लिए ज्ञान और व्यावहारिक कौशल से लैस करती है।",
      highlights: ["भौतिकी, रसायन, गणित (PCM)", "भौतिकी, रसायन, जीव विज्ञान (PCB)", "उन्नत लैब व्यावहारिक", "JEE / NEET तैयारी मार्गदर्शन", "विज्ञान ओलंपियाड भागीदारी"],
    },
    {
      label: "वाणिज्य स्ट्रीम",
      classes: "कक्षा XI – XII · वाणिज्य",
      color: "from-cyan-400 to-sky-500",
      bg: "bg-cyan-50 border-cyan-100 dark:bg-cyan-950/20",
      icon: TrendingUp,
      desc: "वाणिज्य स्ट्रीम भविष्य के उद्यमियों, लेखाकारों और व्यापार नेताओं को आकार देती है। लेखाशास्त्र, अर्थशास्त्र और व्यवसाय अध्ययन पर मजबूत जोर के साथ।",
      highlights: ["लेखाशास्त्र, अर्थशास्त्र, व्यवसाय अध्ययन", "व्यावहारिक वित्तीय कौशल", "CA फाउंडेशन जागरूकता", "वाणिज्य योग्यता विकास", "वास्तविक दुनिया केस स्टडी शिक्षा"],
    },
    {
      label: "मानविकी / कला स्ट्रीम",
      classes: "कक्षा XI – XII · कला",
      color: "from-amber-400 to-yellow-500",
      bg: "bg-amber-50 border-amber-100 dark:bg-amber-950/20",
      icon: Palette,
      desc: "मानविकी स्ट्रीम आलोचनात्मक सोच, रचनात्मकता और सामाजिक जागरूकता को पोषित करती है। इतिहास, राजनीति विज्ञान, भूगोल, मनोविज्ञान और ललित कला का अन्वेषण।",
      highlights: ["इतिहास, राजनीति, भूगोल", "मनोविज्ञान और समाजशास्त्र विकल्प", "ललित कला और रचनात्मक अभिव्यक्ति", "UPSC / CLAT जागरूकता", "वाद-विवाद, नाटक और वक्तृता"],
    },
    {
      label: "पाठ्येतर विभाग",
      classes: "सभी कक्षाएं",
      color: "from-rose-400 to-pink-500",
      bg: "bg-rose-50 border-rose-100 dark:bg-rose-950/20",
      icon: Microscope,
      desc: "पढ़ाई के अलावा, माइलस्टोन का पाठ्येतर विभाग सुनिश्चित करता है कि हर छात्र को खेल और स्केटिंग से लेकर नाटक, संगीत और वक्तृता तक अपनी रुचियां खोजने का मौका मिले।",
      highlights: ["रोलर स्केटिंग और इनडोर खेल", "नाटक और थिएटर क्लब", "वक्तृता और वाद-विवाद", "कला, शिल्प और संगीत", "NSS और सामाजिक सेवा गतिविधियां"],
    },
  ] : [
    {
      label: "Early Years",
      classes: "Nursery · LKG · UKG",
      color: "from-pink-400 to-rose-500",
      bg: "bg-pink-50 border-pink-100 dark:bg-pink-950/20",
      icon: Smile,
      desc: "A nurturing environment where young learners discover the joy of learning through play, art, stories, and structured activities. Our Early Years program lays the social, emotional, and cognitive foundation for lifelong learning.",
      highlights: ["Activity-based learning", "Hindi & English literacy", "Number readiness", "Motor skills development", "Safe & caring environment"],
    },
    {
      label: "Primary Wing",
      classes: "Classes I – V",
      color: "from-orange-400 to-amber-500",
      bg: "bg-orange-50 border-orange-100 dark:bg-orange-950/20",
      icon: BookOpen,
      desc: "The Primary Wing builds core academic skills through an engaging CBSE curriculum, blending structured learning with creative exploration. Students develop reading fluency, mathematical thinking, and scientific curiosity.",
      highlights: ["CBSE aligned curriculum", "Smart classroom learning", "EVS & general awareness", "Art, music & sports integrated", "Reading enrichment programs"],
    },
    {
      label: "Middle School",
      classes: "Classes VI – VIII",
      color: "from-blue-400 to-indigo-500",
      bg: "bg-blue-50 border-blue-100 dark:bg-blue-950/20",
      icon: Globe2,
      desc: "Middle School is where academic depth meets personal growth. Students engage with a rich CBSE curriculum across Science, Mathematics, Social Science, and languages — while developing critical thinking and collaboration skills.",
      highlights: ["Subject specialisation begins", "Laboratory practicals", "Project-based learning", "Leadership & life skills", "Inter-house competitions"],
    },
    {
      label: "Secondary",
      classes: "Classes IX – X",
      color: "from-teal-400 to-emerald-500",
      bg: "bg-teal-50 border-teal-100 dark:bg-teal-950/20",
      icon: Calculator,
      desc: "The Secondary Division prepares students for CBSE Board Examinations with rigorous academic preparation, regular assessments, and personalised guidance. We have achieved 100% board results consecutively.",
      highlights: ["100% board results (2025-26)", "Regular mock exams", "Doubt clearing sessions", "Career awareness counselling", "NCC & co-curricular activities"],
    },
    {
      label: "Science Stream",
      classes: "Classes XI – XII · PCM / PCB",
      color: "from-violet-400 to-purple-600",
      bg: "bg-violet-50 border-violet-100 dark:bg-violet-950/20",
      icon: FlaskConical,
      desc: "Our Science stream equips students with the knowledge and practical skills needed for careers in medicine, engineering, research, and technology. State-of-the-art labs support hands-on learning beyond textbooks.",
      highlights: ["Physics, Chemistry, Maths (PCM)", "Physics, Chemistry, Biology (PCB)", "Advanced lab practicals", "JEE / NEET preparation guidance", "Science Olympiad participation"],
    },
    {
      label: "Commerce Stream",
      classes: "Classes XI – XII · Commerce",
      color: "from-cyan-400 to-sky-500",
      bg: "bg-cyan-50 border-cyan-100 dark:bg-cyan-950/20",
      icon: TrendingUp,
      desc: "The Commerce stream shapes future entrepreneurs, accountants, and business leaders. With a strong emphasis on Accountancy, Economics, and Business Studies, students are prepared for CA, MBA, and commerce-based careers.",
      highlights: ["Accounts, Economics, Business Studies", "Practical financial skills", "CA Foundation awareness", "Commerce aptitude development", "Real-world case study learning"],
    },
    {
      label: "Humanities / Arts Stream",
      classes: "Classes XI – XII · Arts",
      color: "from-amber-400 to-yellow-500",
      bg: "bg-amber-50 border-amber-100 dark:bg-amber-950/20",
      icon: Palette,
      desc: "The Humanities stream nurtures critical thinking, creativity, and social awareness. Students explore History, Political Science, Geography, Psychology, and Fine Arts — preparing for careers in law, journalism, civil services, and the arts.",
      highlights: ["History, Polity, Geography", "Psychology & Sociology options", "Fine Arts & creative expression", "UPSC / CLAT awareness", "Debate, theatre & declamation"],
    },
    {
      label: "Co-Curricular Division",
      classes: "All Classes",
      color: "from-rose-400 to-pink-500",
      bg: "bg-rose-50 border-rose-100 dark:bg-rose-950/20",
      icon: Microscope,
      desc: "Beyond academics, The Milestone's Co-Curricular Division ensures every student has the opportunity to explore their passions — from sports and skating to drama, music, and declamation. Our students are district and state-level champions.",
      highlights: ["Roller skating & indoor games", "Drama & theatre club", "Declamation & debate", "Art, craft & music", "NSS & social service activities"],
    },
  ];

  const statsData = isHindi ? [
    { val: "8", label: "शैक्षणिक विभाग" },
    { val: "1000+", label: "नामांकित छात्र" },
    { val: "नर्सरी – XII", label: "पूर्ण स्पेक्ट्रम" },
    { val: "100%", label: "बोर्ड परिणाम" },
  ] : [
    { val: "8", label: "Academic Divisions" },
    { val: "1000+", label: "Students Enrolled" },
    { val: "Nursery – XII", label: "Full Spectrum" },
    { val: "100%", label: "Board Results" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/75 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p {...fadeUp(0)} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            {isHindi ? "हमारे बारे में" : "About Us"}
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight">
            {isHindi ? "हमारे विभाग" : "Our Divisions"}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {isHindi
              ? "नर्सरी से कक्षा XII तक, माइलस्टोन का प्रत्येक विभाग छात्रों की जरूरतों को पूरा करने और उन्हें आगे ले जाने के लिए डिज़ाइन किया गया है।"
              : "From Nursery to Class XII, each division at The Milestone is designed to meet students where they are and take them further than they imagined."}
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Stats strip */}
        <motion.div {...fadeUp(0)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {statsData.map(({ val, label }) => (
            <div key={label} className="bg-primary text-primary-foreground rounded-2xl p-5 text-center">
              <div className="text-2xl font-extrabold font-serif">{val}</div>
              <div className="text-primary-foreground/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Division cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {divisions.map(({ label, classes, color, bg, icon: Icon, desc, highlights }, i) => (
            <motion.div key={label} {...fadeUp(i * 0.07)} className={`rounded-3xl border p-7 flex flex-col gap-5 hover:shadow-lg transition-shadow ${bg}`}>
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-br ${color} p-3 rounded-xl text-white shadow-md shrink-0`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground font-serif">{label}</h3>
                  <p className={`text-xs font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent mt-0.5`}>{classes}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              <ul className="flex flex-col gap-1.5">
                {highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-xs text-foreground/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
