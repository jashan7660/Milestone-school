import { motion } from "framer-motion";
import { Handshake, Globe2, BookOpen, FlaskConical, Trophy, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function TieupsPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const categories = isHindi ? [
    {
      icon: BookOpen,
      title: "शैक्षणिक साझेदारी",
      color: "text-primary bg-primary/10",
      partners: [
        { name: "CBSE Board of Education", desc: "पूर्ण माध्यमिक और वरिष्ठ माध्यमिक संबद्धता के साथ CBSE संबद्ध स्कूल", type: "नियामक" },
        { name: "National Informatics Centre", desc: "डिजिटल साक्षरता और कंप्यूटर शिक्षा एकीकरण", type: "तकनीक" },
        { name: "NCERT", desc: "सभी कक्षाओं के लिए पाठ्यपुस्तक और पाठ्यक्रम संरेखण", type: "पाठ्यक्रम" },
      ],
    },
    {
      icon: FlaskConical,
      title: "विज्ञान और प्रौद्योगिकी",
      color: "text-violet-600 bg-violet-100",
      partners: [
        { name: "Vigyan Prasar", desc: "विज्ञान लोकप्रियकरण और छात्र अनुसंधान कार्यक्रम", type: "विज्ञान" },
        { name: "Atal Innovation Mission", desc: "छात्रों के लिए टिंकरिंग लैब और नवाचार-आधारित शिक्षा", type: "नवाचार" },
        { name: "NASSCOM Foundation", desc: "IT कौशल विकास और डिजिटल जागरूकता कार्यशालाएं", type: "तकनीक" },
      ],
    },
    {
      icon: Trophy,
      title: "खेल और पाठ्येतर",
      color: "text-amber-600 bg-amber-100",
      partners: [
        { name: "Roller Skating Federation of India", desc: "रोलर स्केटिंग प्रशिक्षण और प्रतियोगिताओं के लिए आधिकारिक संबद्धता", type: "खेल" },
        { name: "Haryana Sports Authority", desc: "राज्य खेल विकास कार्यक्रम और जिला प्रतियोगिताएं", type: "खेल" },
        { name: "Nehru Yuva Kendra Sangathan", desc: "युवा विकास और NSS गतिविधि समन्वय", type: "युवा" },
      ],
    },
    {
      icon: Heart,
      title: "समुदाय और सामाजिक",
      color: "text-rose-600 bg-rose-100",
      partners: [
        { name: "Rotary Club — Kaithal", desc: "सामुदायिक सेवा, छात्रवृत्ति अभियान और सामाजिक जागरूकता", type: "NGO" },
        { name: "Red Cross Society", desc: "प्राथमिक चिकित्सा प्रशिक्षण, रक्तदान और स्वास्थ्य शिविर", type: "स्वास्थ्य" },
        { name: "District Education Office, Kaithal", desc: "सरकारी योजना भागीदारी और शैक्षणिक मान्यता", type: "सरकार" },
      ],
    },
    {
      icon: Globe2,
      title: "करियर और उच्च शिक्षा",
      color: "text-teal-600 bg-teal-100",
      partners: [
        { name: "Career Launcher", desc: "करियर परामर्श कार्यशालाएं और प्रतियोगी परीक्षा जागरूकता", type: "करियर" },
        { name: "Kurukshetra University", desc: "कक्षा XI-XII के छात्रों के लिए उच्च शिक्षा जागरूकता कार्यक्रम", type: "विश्वविद्यालय" },
        { name: "Guru Jambheshwar University", desc: "वरिष्ठ छात्रों के लिए विज्ञान और प्रौद्योगिकी जागरूकता", type: "विश्वविद्यालय" },
      ],
    },
  ] : [
    {
      icon: BookOpen,
      title: "Academic Partnerships",
      color: "text-primary bg-primary/10",
      partners: [
        { name: "CBSE Board of Education", desc: "Affiliated CBSE school with full secondary & senior secondary affiliation", type: "Regulatory" },
        { name: "National Informatics Centre", desc: "Digital literacy and computer education integration", type: "Technology" },
        { name: "NCERT", desc: "Textbook and curriculum alignment for all classes", type: "Curriculum" },
      ],
    },
    {
      icon: FlaskConical,
      title: "Science & Technology",
      color: "text-violet-600 bg-violet-100",
      partners: [
        { name: "Vigyan Prasar", desc: "Science popularisation and student research programs", type: "Science" },
        { name: "Atal Innovation Mission", desc: "Tinkering Lab & innovation-based learning for students", type: "Innovation" },
        { name: "NASSCOM Foundation", desc: "IT skill development and digital awareness workshops", type: "Technology" },
      ],
    },
    {
      icon: Trophy,
      title: "Sports & Co-Curricular",
      color: "text-amber-600 bg-amber-100",
      partners: [
        { name: "Roller Skating Federation of India", desc: "Official affiliation for roller skating training and competitions", type: "Sports" },
        { name: "Haryana Sports Authority", desc: "State sports development programs and district competitions", type: "Sports" },
        { name: "Nehru Yuva Kendra Sangathan", desc: "Youth development and NSS activity coordination", type: "Youth" },
      ],
    },
    {
      icon: Heart,
      title: "Community & Social",
      color: "text-rose-600 bg-rose-100",
      partners: [
        { name: "Rotary Club — Kaithal", desc: "Community service, scholarship drives and social awareness", type: "NGO" },
        { name: "Red Cross Society", desc: "First aid training, blood donation drives and health camps", type: "Health" },
        { name: "District Education Office, Kaithal", desc: "Government scheme participation and academic recognition", type: "Government" },
      ],
    },
    {
      icon: Globe2,
      title: "Career & Higher Education",
      color: "text-teal-600 bg-teal-100",
      partners: [
        { name: "Career Launcher", desc: "Career counselling workshops and competitive exam awareness", type: "Career" },
        { name: "Kurukshetra University", desc: "Higher education awareness programs for Class XI–XII students", type: "University" },
        { name: "Guru Jambheshwar University", desc: "Science and technology awareness for senior students", type: "University" },
      ],
    },
  ];

  const benefits = isHindi ? [
    { title: "व्यापक शिक्षा", desc: "साझेदारियां छात्रों को पाठ्यपुस्तकों से परे वास्तविक दुनिया के ज्ञान से अवगत कराती हैं" },
    { title: "प्रतियोगिता का अनुभव", desc: "छात्र जिला, राज्य और राष्ट्रीय स्तर के कार्यक्रमों में भाग लेते हैं" },
    { title: "करियर तैयारी", desc: "उद्योग जागरूकता कार्यक्रम छात्रों को स्कूल के बाद जीवन के लिए तैयार करते हैं" },
    { title: "सामुदायिक मूल्य", desc: "सामाजिक सेवा साझेदारियां सहानुभूति और नागरिक जिम्मेदारी का निर्माण करती हैं" },
  ] : [
    { title: "Broader Learning", desc: "Partnerships expose students to real-world knowledge beyond textbooks" },
    { title: "Competition Exposure", desc: "Students participate in district, state, and national-level events" },
    { title: "Career Readiness", desc: "Industry awareness programs prepare students for life after school" },
    { title: "Community Values", desc: "Social service partnerships build empathy and civic responsibility" },
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
            {isHindi ? "हमारे टाई-अप" : "Our Tie-ups"}
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {isHindi
              ? "माइलस्टोन अग्रणी शैक्षणिक बोर्डों, खेल निकायों और सामुदायिक संगठनों के साथ साझेदारी करता है ताकि हर छात्र के लिए एक संपूर्ण स्कूल अनुभव सुनिश्चित हो सके।"
              : "The Milestone partners with leading educational boards, sports bodies, and community organisations to deliver a truly rounded school experience for every student."}
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 py-20 max-w-5xl">

        {/* Benefits strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {benefits.map(({ title, desc }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.1)} className="bg-muted/40 rounded-2xl p-5 text-center">
              <Handshake className="text-primary mx-auto mb-3" size={26} />
              <h4 className="font-bold text-foreground text-sm mb-1">{title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner categories */}
        <div className="flex flex-col gap-12">
          {categories.map(({ icon: Icon, title, color, partners }, ci) => (
            <motion.div key={title} {...fadeUp(ci * 0.08)}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${color}`}>
                  <Icon size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">{title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {partners.map(({ name, desc, type }, i) => (
                  <motion.div key={name} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-bold text-foreground text-sm leading-snug">{name}</h4>
                      <span className="text-[10px] font-semibold bg-muted text-muted-foreground rounded-full px-2.5 py-1 shrink-0 whitespace-nowrap">{type}</span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0)} className="mt-20 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-10 text-white text-center">
          <Handshake className="mx-auto mb-4 opacity-80" size={40} />
          <h3 className="text-2xl font-serif font-bold mb-3">
            {isHindi ? "हमारे साथ साझेदारी में रुचि है?" : "Interested in Partnering With Us?"}
          </h3>
          <p className="text-white/80 max-w-xl mx-auto text-sm mb-6 leading-relaxed">
            {isHindi
              ? "हम शैक्षणिक संस्थानों, NGOs, खेल निकायों और कॉर्पोरेट्स से सहयोग का स्वागत करते हैं जो गुणवत्तापूर्ण शिक्षा और छात्र विकास के प्रति हमारी प्रतिबद्धता साझा करते हैं।"
              : "We welcome collaborations from educational institutions, NGOs, sports bodies, and corporates who share our commitment to quality education and student development."}
          </p>
          <a href="mailto:themilestoneKtl@gmail.com" className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors shadow-lg text-sm">
            {isHindi ? "संपर्क करें" : "Get in Touch"}
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
