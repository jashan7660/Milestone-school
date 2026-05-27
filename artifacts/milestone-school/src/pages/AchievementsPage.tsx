import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award, GraduationCap, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import goldGloryImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777616289311.jpg";
import silverGloryImg from "@assets/SaveClip.App_614878340_18086449655035990_3947843287675199799_n_1777616304025.jpg";
import parvImg from "@assets/top_result_1777616348864.jpg";
import boardResultImg from "@assets/image_1777616635036.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function AchievementsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const toppers = [
    { name: "Parv Mittal", score: "97%", class: isHindi ? "CBSE कक्षा X — 2025-26" : "CBSE Class X — 2025-26", image: parvImg, badge: isHindi ? "स्कूल टॉपर" : "School Topper" },
  ];

  const gallery = [
    { src: boardResultImg, title: isHindi ? "CBSE कक्षा X — 100% उत्कृष्ट परिणाम 2025-26" : "CBSE Class X — 100% Outstanding Result 2025-26", span: "md:col-span-2" },
    { src: parvImg, title: isHindi ? "परव मित्तल — 97% CBSE कक्षा X" : "Parv Mittal — 97% CBSE Class X", span: "" },
    { src: goldGloryImg, title: isHindi ? "राहुल — गोल्ड, 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप" : "Rahul — Gold, 6th Chandigarh Open Skating Championship", span: "" },
    { src: silverGloryImg, title: isHindi ? "यश — सिल्वर, 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप" : "Yash — Silver, 6th Chandigarh Open Skating Championship", span: "" },
  ];

  const highlights = [
    { icon: GraduationCap, value: "100%", label: isHindi ? "CBSE कक्षा X परिणाम 2025-26" : "CBSE Class X Result 2025-26", color: "bg-blue-600" },
    { icon: Star, value: "97%", label: isHindi ? "स्कूल टॉपर — परव मित्तल" : "School Topper — Parv Mittal", color: "bg-secondary" },
    { icon: Trophy, value: isHindi ? "स्वर्ण" : "Gold", label: isHindi ? "चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप" : "Chandigarh Open Skating Championship", color: "bg-yellow-500" },
    { icon: Medal, value: isHindi ? "रजत" : "Silver", label: isHindi ? "चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप" : "Chandigarh Open Skating Championship", color: "bg-gray-400" },
  ];

  const awards = isHindi ? [
    { title: "100% बोर्ड परिणाम", year: "2025-26", desc: "CBSE कक्षा X बोर्ड में बैठे हर छात्र ने उत्तीर्ण किया — स्कूल की शैक्षणिक कठोरता और शिक्षक समर्पण का प्रमाण।", icon: Award },
    { title: "CBSE कक्षा X टॉपर", year: "2025-26", desc: "परव मित्तल ने CBSE कक्षा X में 97% का उत्कृष्ट प्रदर्शन किया और स्कूल के उच्चतम स्कोरर रहे।", icon: Star },
    { title: "स्वर्ण — स्केटिंग चैम्पियनशिप", year: "2024", desc: "राहुल ने 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप में स्वर्ण पदक जीता।", icon: Trophy },
    { title: "रजत — स्केटिंग चैम्पियनशिप", year: "2024", desc: "यश ने 6वीं चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप में रजत पदक हासिल किया।", icon: Medal },
    { title: "अंतर-विद्यालय प्रतियोगिताएं", year: "चालू", desc: "छात्र जिला और राज्य स्तरीय प्रश्नोत्तरी, वाद-विवाद, विज्ञान मेले और सांस्कृतिक प्रतियोगिताओं में नियमित रूप से भाग लेते और जीतते हैं।", icon: Users },
    { title: "लगातार तीन 100% परिणाम", year: "2022–25", desc: "माइलस्टोन ने लगातार तीन शैक्षणिक वर्षों तक CBSE बोर्ड में 100% पास रिकॉर्ड बनाए रखा है।", icon: GraduationCap },
  ] : [
    { title: "100% Board Result", year: "2025-26", desc: "Every student who appeared for CBSE Class X boards passed — a testimony to the school's academic rigour and teacher dedication.", icon: Award },
    { title: "CBSE Class X Topper", year: "2025-26", desc: "Parv Mittal achieved an outstanding 97% in CBSE Class X, ranking as the school's highest scorer.", icon: Star },
    { title: "Gold — Skating Championship", year: "2024", desc: "Rahul brought home the Gold medal at the 6th Chandigarh Open Skating Championship, representing The Milestone on a state stage.", icon: Trophy },
    { title: "Silver — Skating Championship", year: "2024", desc: "Yash secured Silver at the 6th Chandigarh Open Skating Championship — a proud moment for our sports programme.", icon: Medal },
    { title: "Inter-School Competitions", year: "Ongoing", desc: "Students regularly participate and win at district and state-level quiz, debate, science fair, and cultural competitions.", icon: Users },
    { title: "Three Consecutive 100% Results", year: "2022–25", desc: "The Milestone has maintained a 100% CBSE board pass record for three consecutive academic years.", icon: GraduationCap },
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
                {isHindi ? "हमारा गौरव" : "Our Pride"}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">
                {isHindi ? "उपलब्धियां" : "Achievements"}
              </h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
                {isHindi
                  ? "बोर्ड परीक्षा की शान से लेकर चैम्पियनशिप पोडियम तक — हमारे छात्र माइलस्टोन परिवार को बेहद गर्वित करते रहते हैं।"
                  : "From board exam glory to championship podiums — our students continue to make The Milestone family immensely proud."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Highlights Strip */}
        <section className="py-14 bg-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center text-white">
                  <div className={`${h.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}><h.icon size={24} className="text-white" /></div>
                  <div className="text-3xl font-serif font-bold mb-1">{h.value}</div>
                  <div className="text-white/65 text-xs font-medium">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Results */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "शैक्षणिक परिणाम" : "Academic Results"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{isHindi ? "CBSE बोर्ड परिणाम" : "CBSE Board Results"}</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                {isHindi
                  ? "बोर्ड परीक्षाओं में निरंतर उत्कृष्टता — हमारी शिक्षण गुणवत्ता और छात्र समर्पण का प्रतिबिंब।"
                  : "Consistent excellence in board exams — a reflection of our teaching quality and student dedication."}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {gallery.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className={`relative rounded-2xl overflow-hidden shadow-lg group ${item.span}`}>
                  <img src={item.src} alt={item.title} className="w-full h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white font-semibold text-sm leading-snug">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* School Topper */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "स्टार परफॉर्मर" : "Star Performers"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{isHindi ? "स्कूल टॉपर" : "School Toppers"}</h2>
            </motion.div>
            <div className="flex justify-center">
              {toppers.map((t, i) => (
                <motion.div key={i} {...fadeUp(0.1)} className="bg-card border-2 border-secondary/30 rounded-3xl p-8 text-center max-w-sm shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="relative inline-block mb-5">
                    <img src={t.image} alt={t.name} className="w-36 h-36 rounded-full object-cover object-top border-4 border-secondary shadow-lg mx-auto" />
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">{t.badge}</div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-1">{t.name}</h3>
                  <div className="text-4xl font-serif font-bold text-secondary mb-2">{t.score}</div>
                  <p className="text-muted-foreground text-sm">{t.class}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognitions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "पुरस्कार और मान्यताएं" : "Awards & Recognitions"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{isHindi ? "जीतने की संस्कृति" : "A culture of winning"}</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                {isHindi
                  ? "शैक्षणिक उत्कृष्टता, खेल की शान और रचनात्मक उपलब्धियां — माइलस्टोन हर तरह की सफलता का जश्न मनाता है।"
                  : "Academic excellence, sporting glory, and creative achievements — The Milestone celebrates every kind of success."}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((a, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl transition-shadow group">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0 group-hover:bg-primary transition-colors">
                      <a.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif font-bold text-lg leading-snug">{a.title}</h3>
                      </div>
                      <div className="text-secondary font-semibold text-xs mb-3 uppercase tracking-wider">{a.year}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "एक्शन में" : "In Action"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {isHindi ? "हमारे छात्रों को चमकते देखें" : "Watch our students shine"}
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-black">
              <video src="/video4.mp4" controls playsInline preload="metadata" className="w-full h-auto" />
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
