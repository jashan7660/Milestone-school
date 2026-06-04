import { motion } from "framer-motion";
import { GraduationCap, Star, Users, BookOpen, Heart } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import principalImg from "@assets/image_1780557657354.png";
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
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[68vh] flex items-center"
          style={{ background: "linear-gradient(145deg, #071B3A 0%, #0A234A 45%, #0a1f3a 75%, #0d1535 100%)" }}>

          {[
            { w:540, h:540, x:"-8%",  y:"-25%", c:"#3B82F6", dur:12 },
            { w:400, h:400, x:"70%",  y:"45%",  c:"#10B981", dur:15 },
            { w:300, h:300, x:"40%",  y:"-15%", c:"#8B5CF6", dur:9  },
            { w:240, h:240, x:"80%",  y:"-10%", c:"#06B6D4", dur:13 },
          ].map((o,i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}25,transparent 70%)` }}
              animate={{ scale:[1,1.22,1], opacity:[0.35,0.75,0.35] }}
              transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
          ))}

          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
              style={{ left:`${(i*5.1)%100}%`, top:`${(i*7.7+8)%88}%`, background:["#06B6D4","#3B82F6","#8B5CF6","#10B981","#F59E0B"][i%5] }}
              animate={{ y:[0,-22,0], opacity:[0.2,0.65,0.2], scale:[1,1.4,1] }}
              transition={{ repeat:Infinity, duration:3+(i%5), delay:i*0.2, ease:"easeInOut" }}/>
          ))}

          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"48px 48px" }}/>

          <div className="container relative z-10 mx-auto px-4 md:px-6 py-28 text-center">
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.14)" }}>
              <GraduationCap size={11}/> {isHindi ? "हमारे मेंटर" : "Our Mentors"}
            </motion.div>
            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-5 leading-tight">
              {isHindi ? "शिक्षक " : "Faculty "}
              <span style={{ background:"linear-gradient(90deg,#06B6D4,#10B981,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "और कर्मचारी" : "& Staff"}
              </span>
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
              {isHindi
                ? "उन समर्पित शिक्षकों से मिलिए जो माइलस्टोन के हर छात्र को असाधारण बनने के लिए प्रेरित करते हैं।"
                : "Meet the dedicated educators who inspire every student at The Milestone to go beyond the ordinary."}
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap justify-center gap-4">
              {stats.map((s, i) => (
                <div key={i} className="px-6 py-3 rounded-2xl text-center"
                  style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.13)", backdropFilter:"blur(12px)" }}>
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-white/45 text-xs mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 20C480 35 240 5 0 20Z" fill="hsl(var(--background))"/>
            </svg>
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
        <section className="py-20" style={{ background: "#f8fafc" }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{ background:"rgba(245,158,11,0.08)", color:"#d97706", border:"1px solid rgba(245,158,11,0.22)" }}>
                {isHindi ? "हमारे शिक्षक" : "Faculty Highlights"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {isHindi ? "शिक्षक जो " : "Teachers Who "}
                <span style={{ background:"linear-gradient(90deg,#d97706,#db2777)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {isHindi ? "प्रेरित करते हैं" : "Inspire"}
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { img: amazingEducatorsImg,
                  capEN: "Our Amazing Educators — Ms. Renu, Ms. Neelam, Ms. Preeti & Ms. Deepika",
                  capHI: "हमारे अद्भुत शिक्षक — सुश्री रेणु, सुश्री नीलम, सुश्री प्रीति और सुश्री दीपिका",
                  accent: "#d97706" },
                { img: activeParticipImg,
                  capEN: "60 Teachers Actively Participated in the CBP Workshop — Interactive & Engaging",
                  capHI: "60 शिक्षकों ने CBP वर्कशॉप में उत्साहपूर्वक भाग लिया — संवादात्मक और आकर्षक",
                  accent: "#2563eb" },
                { img: commitGrowthImg,
                  capEN: "Commitment to Growth — Empowering Teachers, Strengthening Education",
                  capHI: "विकास के प्रति प्रतिबद्धता — शिक्षकों को सशक्त बनाना, शिक्षा को मजबूत करना",
                  accent: "#059669" },
              ].map(({ img, capEN, capHI, accent }, i) => (
                <motion.div key={i} {...fadeUp(i * 0.12)}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                  className="rounded-2xl overflow-hidden transition-all duration-300 group"
                  style={{ background:"white", border:"1px solid rgba(0,0,0,0.08)", boxShadow:"0 2px 16px rgba(0,0,0,0.06)" }}>
                  <div className="relative overflow-hidden" style={{ aspectRatio:"4/3" }}>
                    <img src={img} alt={isHindi ? capHI : capEN}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="h-1.5 absolute top-0 left-0 right-0" style={{ background:`linear-gradient(90deg,${accent},${accent}88)` }}/>
                  </div>
                  <div className="p-4 border-t" style={{ borderColor: `${accent}20` }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: accent }}/>
                      <p className="text-foreground text-sm font-medium leading-relaxed">{isHindi ? capHI : capEN}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()}
              className="max-w-2xl mx-auto rounded-3xl p-10"
              style={{ background:"linear-gradient(135deg,#071B3A 0%,#0A234A 100%)", boxShadow:"0 20px 60px rgba(7,27,58,0.25)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)" }}>
                <GraduationCap size={26} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                {isHindi ? "हमारे शिक्षक दल में शामिल होना चाहते हैं?" : "Want to join our faculty?"}
              </h2>
              <p className="text-white/65 text-base mb-7 max-w-lg mx-auto font-light">
                {isHindi
                  ? "हम हमेशा ऐसे भावुक, योग्य शिक्षकों की तलाश में रहते हैं जो छात्र उत्कृष्टता के प्रति हमारी प्रतिबद्धता साझा करते हैं।"
                  : "We are always looking for passionate, qualified educators who share our commitment to student excellence."}
              </p>
              <a href="mailto:themilestoneKtl@gmail.com"
                className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{ background:"linear-gradient(135deg,#10B981,#059669)", color:"white", boxShadow:"0 8px 24px rgba(16,185,129,0.4)" }}>
                {isHindi ? "अपना CV भेजें" : "Send Your CV"} <GraduationCap size={16} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
