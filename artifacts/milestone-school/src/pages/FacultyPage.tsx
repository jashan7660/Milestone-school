import { motion } from "framer-motion";
import { GraduationCap, Star, Users, BookOpen, Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import principalImg from "@assets/pricipal_sir_1780036894116.png";
import amazingEducatorsImg from "@assets/image_1780027878905.png";
import activeParticipImg   from "@assets/image_1780027932559.png";
import commitGrowthImg     from "@assets/image_1780028126827.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function FacultyPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const principal = {
    name: "Mr. Atul Sharma",
    role: isHindi ? "प्रिंसिपल" : "Principal",
    qual: isHindi ? "M.A., B.Ed. | 20+ वर्षों का अनुभव" : "M.A., B.Ed. | 20+ Years in Education",
    image: principalImg,
    bio: isHindi
      ? "एक दूरदर्शी नेता और भावुक शिक्षक, श्री अतुल शर्मा ने युवा मस्तिष्कों को आकार देने में दो दशकों से अधिक समय समर्पित किया है। उनके मार्गदर्शन में माइलस्टोन ने लगातार 100% बोर्ड परिणाम हासिल किए हैं और कैथल के सबसे भरोसेमंद स्कूल के रूप में ख्याति बनाई है।"
      : "A visionary leader and passionate educator, Mr. Atul Sharma has dedicated over two decades to transforming young minds. Under his guidance, The Milestone has achieved consistent 100% board results and built a reputation as Kaithal's most trusted school. He believes every student has a unique gift waiting to be discovered.",
  };

  const teachers = [
    { name: "Mrs. Sunita Sharma", subject: isHindi ? "भौतिकी" : "Physics", qual: "M.Sc. Physics, B.Ed.", exp: isHindi ? "14 वर्ष" : "14 years", image: "/teacher-science.png", dept: isHindi ? "विज्ञान" : "Science" },
    { name: "Mr. Amit Verma", subject: isHindi ? "गणित" : "Mathematics", qual: "M.Sc. Maths, B.Ed.", exp: isHindi ? "12 वर्ष" : "12 years", image: "/teacher-math.png", dept: isHindi ? "गणित" : "Mathematics" },
    { name: "Mrs. Rekha Gupta", subject: isHindi ? "रसायन विज्ञान" : "Chemistry", qual: "M.Sc. Chemistry, B.Ed.", exp: isHindi ? "10 वर्ष" : "10 years", image: "/teacher-science.png", dept: isHindi ? "विज्ञान" : "Science" },
    { name: "Mr. Rajesh Kumar", subject: isHindi ? "अंग्रेजी" : "English", qual: "M.A. English, B.Ed.", exp: isHindi ? "11 वर्ष" : "11 years", image: "/teacher-math.png", dept: isHindi ? "भाषाएं" : "Languages" },
    { name: "Mrs. Priya Yadav", subject: isHindi ? "जीव विज्ञान" : "Biology", qual: "M.Sc. Biology, B.Ed.", exp: isHindi ? "8 वर्ष" : "8 years", image: "/teacher-science.png", dept: isHindi ? "विज्ञान" : "Science" },
    { name: "Mr. Sanjay Rana", subject: isHindi ? "सामाजिक अध्ययन" : "Social Studies", qual: "M.A. History, B.Ed.", exp: isHindi ? "9 वर्ष" : "9 years", image: "/teacher-math.png", dept: isHindi ? "मानविकी" : "Humanities" },
    { name: "Mrs. Kavita Arora", subject: isHindi ? "हिंदी" : "Hindi", qual: "M.A. Hindi, B.Ed.", exp: isHindi ? "13 वर्ष" : "13 years", image: "/teacher-science.png", dept: isHindi ? "भाषाएं" : "Languages" },
    { name: "Mr. Deepak Nain", subject: isHindi ? "कंप्यूटर विज्ञान" : "Computer Science", qual: "M.C.A., B.Ed.", exp: isHindi ? "7 वर्ष" : "7 years", image: "/teacher-math.png", dept: isHindi ? "तकनीक" : "Technology" },
  ];

  const stats = [
    { icon: Users, value: "80+", label: isHindi ? "योग्य शिक्षक" : "Qualified Faculty" },
    { icon: GraduationCap, value: "10+", label: isHindi ? "औसत वर्षों का अनुभव" : "Avg. Years Experience" },
    { icon: Star, value: "100%", label: isHindi ? "CBSE प्रशिक्षित शिक्षक" : "CBSE Trained Teachers" },
    { icon: Heart, value: "1200+", label: isHindi ? "छात्रों को मार्गदर्शन" : "Students Mentored" },
  ];

  const departments = isHindi
    ? ["विज्ञान", "गणित", "भाषाएं", "मानविकी", "तकनीक", "कला और खेल"]
    : ["Science", "Mathematics", "Languages", "Humanities", "Technology", "Arts & Sports"];

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
                {isHindi ? "हमारे मेंटर" : "Our Mentors"}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight">
                {isHindi ? "शिक्षक और कर्मचारी" : "Faculty & Staff"}
              </h1>
              <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
                {isHindi
                  ? "उन समर्पित शिक्षकों से मिलिए जो माइलस्टोन के हर छात्र को असाधारण बनने के लिए प्रेरित करते हैं।"
                  : "Meet the dedicated educators who inspire every student at The Milestone to go beyond the ordinary."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)} className="text-center text-white">
                  <div className="bg-white/15 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"><s.icon size={24} /></div>
                  <div className="text-3xl font-serif font-bold text-secondary mb-1">{s.value}</div>
                  <div className="text-white/75 text-sm font-medium uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principal Spotlight */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "स्कूल नेतृत्व" : "School Leadership"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {isHindi ? "हमारे प्रिंसिपल से मिलिए" : "Meet our Principal"}
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/15 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img src={principal.image} alt={principal.name} className="w-48 h-48 rounded-full object-cover object-top shadow-2xl border-6 border-white mx-auto" />
                  <div className="mt-4">
                    <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full inline-block">{principal.role}</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-serif font-bold mb-1">{principal.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-5">{principal.qual}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{principal.bio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center mb-10">
              <h3 className="text-xl font-serif font-bold text-foreground">
                {isHindi ? "शैक्षणिक विभाग" : "Academic Departments"}
              </h3>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-3">
              {departments.map((d, i) => (
                <div key={i} className="flex items-center gap-2 bg-card border border-border px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <BookOpen size={14} className="text-primary" />
                  <span className="font-medium text-sm">{d}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "हमारे शिक्षक" : "Our Teachers"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                {isHindi ? "अनुभवी शिक्षक, भावुक मेंटर" : "Experienced educators, passionate mentors"}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teachers.map((t, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{t.dept}</div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-serif font-bold text-lg mb-0.5">{t.name}</h3>
                    <p className="text-secondary font-semibold text-sm mb-1">{t.subject}</p>
                    <p className="text-muted-foreground text-xs mb-2">{t.qual}</p>
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      <Star size={11} className="fill-primary" /> {t.exp} {isHindi ? "अनुभव" : "experience"}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Moments */}
        <section className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0f172a 0%, #0a2240 50%, #12103a 100%)" }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background:"rgba(245,158,11,0.12)", color:"#fbbf24", border:"1px solid rgba(245,158,11,0.3)" }}>
                {isHindi ? "हमारे शिक्षक" : "Faculty Highlights"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                {isHindi ? "शिक्षक जो " : "Teachers Who "}
                <span style={{ background:"linear-gradient(90deg,#f59e0b,#f472b6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {isHindi ? "प्रेरित करते हैं" : "Inspire"}
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { img: amazingEducatorsImg,
                  capEN: "Our Amazing Educators — Ms. Renu, Ms. Neelam, Ms. Preeti & Ms. Deepika",
                  capHI: "हमारे अद्भुत शिक्षक — सुश्री रेणु, सुश्री नीलम, सुश्री प्रीति और सुश्री दीपिका",
                  accent: "#f59e0b" },
                { img: activeParticipImg,
                  capEN: "60 Teachers Actively Participated in the CBP Workshop — Interactive & Engaging",
                  capHI: "60 शिक्षकों ने CBP वर्कशॉप में उत्साहपूर्वक भाग लिया — संवादात्मक और आकर्षक",
                  accent: "#60a5fa" },
                { img: commitGrowthImg,
                  capEN: "Commitment to Growth — Empowering Teachers, Strengthening Education",
                  capHI: "विकास के प्रति प्रतिबद्धता — शिक्षकों को सशक्त बनाना, शिक्षा को मजबूत करना",
                  accent: "#34d399" },
              ].map(({ img, capEN, capHI, accent }, i) => (
                <motion.div key={i} {...fadeUp(i * 0.12)}
                  whileHover={{ y: -6, boxShadow: `0 20px 48px ${accent}22` }}
                  className="rounded-2xl overflow-hidden transition-all duration-300 group"
                  style={{ border:`1px solid ${accent}30` }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio:"4/3" }}>
                    <img src={img} alt={isHindi ? capHI : capEN}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="absolute inset-0"
                      style={{ background:"linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 55%)" }}/>
                    <div className="h-1 absolute top-0 left-0 right-0" style={{ background:`linear-gradient(90deg,${accent},${accent}66)` }}/>
                  </div>
                  <div className="p-4" style={{ background:"rgba(255,255,255,0.04)" }}>
                    <p className="text-white/70 text-sm leading-relaxed">{isHindi ? capHI : capEN}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                {isHindi ? "हमारे शिक्षक दल में शामिल होना चाहते हैं?" : "Want to join our faculty?"}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
                {isHindi
                  ? "हम हमेशा ऐसे भावुक, योग्य शिक्षकों की तलाश में रहते हैं जो छात्र उत्कृष्टता के प्रति हमारी प्रतिबद्धता साझा करते हैं।"
                  : "We are always looking for passionate, qualified educators who share our commitment to student excellence."}
              </p>
              <a href="mailto:themilestoneKtl@gmail.com" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-lg">
                {isHindi ? "अपना CV भेजें" : "Send Your CV"} <GraduationCap size={18} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
