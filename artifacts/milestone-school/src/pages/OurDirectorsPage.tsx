import { motion } from "framer-motion";
import { Quote, GraduationCap, Award, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import principalImg from "@assets/atul_sharama_1777615661839.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function OurDirectorsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const directors = [
    {
      name: "Mr. Atul Sharma",
      role: isHindi ? "प्रिंसिपल और शैक्षणिक निदेशक" : "Principal & Academic Director",
      qual: isHindi ? "M.A., B.Ed. | 20+ वर्षों का अनुभव" : "M.A., B.Ed. | 20+ Years in Education",
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
      principalQuote: isHindi
        ? '"शिक्षा सबसे बड़ा उपहार है जो हम दे सकते हैं — आइए इसे असाधारण बनाएं।"'
        : '"Education is the greatest gift we can give — let\'s make it extraordinary."',
    },
  ];

  const boardMembers = isHindi ? [
    { name: "Mrs. Sunita Devi", role: "अध्यक्ष", note: "माइलस्टोन परिवार की संस्थापक और मार्गदर्शक शक्ति" },
    { name: "Mr. Rajiv Sharma", role: "प्रबंध निदेशक", note: "रणनीतिक विकास और बुनियादी ढांचे की देखरेख" },
    { name: "Mrs. Anita Khurana", role: "शैक्षणिक सलाहकार", note: "पाठ्यक्रम और शैक्षणिक नीति को आकार देते हैं" },
    { name: "Mr. Sandeep Goyal", role: "वित्त निदेशक", note: "टिकाऊ विकास और संसाधन प्रबंधन सुनिश्चित करते हैं" },
  ] : [
    { name: "Mrs. Sunita Devi", role: "Chairperson", note: "Founder & guiding force of The Milestone family" },
    { name: "Mr. Rajiv Sharma", role: "Managing Director", note: "Oversees strategic development and infrastructure" },
    { name: "Mrs. Anita Khurana", role: "Academic Advisor", note: "Shapes curriculum and academic policy" },
    { name: "Mr. Sandeep Goyal", role: "Finance Director", note: "Ensures sustainable growth and resource management" },
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
            {isHindi ? "हमारे निदेशक" : "Our Directors"}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {isHindi
              ? "उन दूरदर्शी नेताओं से मिलिए जो माइलस्टोन को जुनून, उद्देश्य और शैक्षणिक उत्कृष्टता के प्रति अटूट प्रतिबद्धता के साथ मार्गदर्शन करते हैं।"
              : "Meet the visionary leaders who guide The Milestone with passion, purpose, and an unwavering commitment to educational excellence."}
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Principal spotlight */}
        {directors.map(({ name, role, qual, image, message, achievements, leadershipP, principalQuote }) => (
          <motion.div key={name} {...fadeUp(0)} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

              {/* Photo + meta */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
                <div className="relative">
                  <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-4 ring-primary/20">
                    <img src={image} alt={name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-secondary text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <Star size={11} className="fill-white" /> {isHindi ? "प्रिंसिपल" : "Principal"}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-extrabold text-foreground">{name}</h2>
                  <p className="text-primary font-semibold text-sm mt-1">{role}</p>
                  <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1.5"><GraduationCap size={13} /> {qual}</p>
                </div>
                <div className="w-full bg-muted/40 rounded-2xl p-5 flex flex-col gap-2">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Award size={13} className="text-primary" /> {isHindi ? "मुख्य उपलब्धियां" : "Key Achievements"}
                  </p>
                  {achievements.map(a => (
                    <div key={a} className="flex items-start gap-2 text-xs text-foreground/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-3">
                <p className="section-label mb-2">{isHindi ? "प्रिंसिपल का संदेश" : "Principal's Message"}</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 leading-tight">
                  {principalQuote}
                </h3>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-primary/20 w-12 h-12" />
                  <p className="text-muted-foreground leading-[1.9] text-base pl-6 font-light italic border-l-4 border-primary/30">
                    {message}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-foreground/80 text-base leading-relaxed">{leadershipP}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Board of Directors */}
        <motion.div {...fadeUp(0)}>
          <div className="text-center mb-12">
            <p className="section-label">{isHindi ? "शासी निकाय" : "Governing Body"}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {isHindi ? "निदेशक मंडल" : "Board of Directors"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {boardMembers.map(({ name, role, note }, i) => (
              <motion.div key={name} {...fadeUp(i * 0.1)} className="bg-card border border-border rounded-2xl p-6 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-serif font-bold text-xl shrink-0 shadow-md">
                  {name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base">{name}</h4>
                  <p className="text-primary text-xs font-semibold mt-0.5">{role}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
