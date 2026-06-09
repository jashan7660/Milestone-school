import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Star, ArrowRight, Quote, GraduationCap, Clock, Trophy, BookOpen } from "lucide-react";
import { Link } from "wouter";
import principalImg from "@assets/image_1780557657354.png";
import sulochanaSharmaImg from "@assets/managing_director_1780037204818.jpeg";
import vicePrincipalImg from "@assets/viceprincipal_1780037357684.png";
import sarthakImg from "@assets/sarthak_1780039328255.png";
import secretaryImg from "@assets/secretary_1780039339840.png";

const MEMBERS = [
  { image: principalImg,       pos: "center top", accentHex: "#2563EB", grad: "from-blue-600 to-indigo-700"   },
  { image: sulochanaSharmaImg, pos: "center 18%", accentHex: "#16a34a", grad: "from-emerald-600 to-teal-700"  },
  { image: vicePrincipalImg,   pos: "center 12%", accentHex: "#0891b2", grad: "from-cyan-600 to-blue-700"     },
  { image: sarthakImg,         pos: "center top", accentHex: "#7c3aed", grad: "from-violet-600 to-purple-700" },
  { image: secretaryImg,       pos: "center top", accentHex: "#db2777", grad: "from-pink-600 to-rose-700"     },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Faculty() {
  const { lang } = useLanguage();
  const t = SITE[lang].faculty;
  const isHindi = lang === "hi";

  const highlights = isHindi ? [
    { icon: GraduationCap, label: "योग्यता",    val: "M.A., B.Ed."    },
    { icon: Clock,         label: "अनुभव",       val: "20+ वर्ष"       },
    { icon: Trophy,        label: "बोर्ड परिणाम", val: "100% CBSE"     },
    { icon: BookOpen,      label: "विशेषज्ञता",   val: "CBSE पाठ्यक्रम"},
  ] : [
    { icon: GraduationCap, label: "Qualification", val: "M.A., B.Ed."      },
    { icon: Clock,         label: "Experience",    val: "20+ Years"         },
    { icon: Trophy,        label: "Board Result",  val: "100% CBSE"         },
    { icon: BookOpen,      label: "Expertise",     val: "CBSE Curriculum"   },
  ];

  return (
    <section id="faculty" className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#f0f4ff 0%,#f8fafc 50%,#f0fdf4 100%)" }}>

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(37,99,235,0.07),transparent 70%)", filter: "blur(60px)" }}/>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(16,185,129,0.08),transparent 70%)", filter: "blur(60px)" }}/>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* ── Section Header ── */}
        <motion.div {...fadeUp()} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(37,99,235,0.09)", color: "#2563EB", border: "1.5px solid rgba(37,99,235,0.18)" }}>
            <Star size={11} className="fill-blue-600"/>
            {t.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-tight">
            {t.heading}{" "}
            <span style={{ background: "linear-gradient(90deg,#2563eb,#0891b2,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.accent}
            </span>
          </h2>
          <p className="text-foreground/55 text-lg font-light leading-relaxed">{t.body}</p>
        </motion.div>

        {/* ── Principal Hero Card ── */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            style={{ background: "white", border: "1px solid rgba(37,99,235,0.12)" }}>

            {/* Top gradient bar */}
            <div className="h-1.5" style={{ background: "linear-gradient(90deg,#2563eb,#0891b2,#10b981)" }}/>

            <div className="grid grid-cols-1 md:grid-cols-5" style={{ minHeight: 480 }}>

              {/* Photo side */}
              <div className="md:col-span-2 relative" style={{ minHeight: 480, background: "#c8dde8" }}>
                <img src={MEMBERS[0].image} alt={t.team[0].name}
                  className="absolute inset-0 w-full h-full object-contain object-bottom"/>
                {/* Side gradient to bio */}
                <div className="absolute inset-0 hidden md:block pointer-events-none"
                  style={{ background: "linear-gradient(to right,transparent 60%,rgba(255,255,255,0.95) 100%)" }}/>
                <div className="absolute inset-0 md:hidden pointer-events-none"
                  style={{ background: "linear-gradient(to top,rgba(255,255,255,0.95) 0%,transparent 60%)" }}/>
                {/* Principal badge */}
                <div className="absolute top-5 left-5">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg,#2563eb,#0891b2)" }}>
                    <Star size={11} className="fill-white"/> {isHindi ? "प्रधानाचार्य" : "Principal"}
                  </div>
                </div>
              </div>

              {/* Bio side */}
              <div className="md:col-span-3 px-8 md:px-12 py-10 flex flex-col justify-between relative">
                {/* Decorative large quote mark */}
                <div className="absolute top-6 right-8 text-[120px] font-serif leading-none select-none pointer-events-none"
                  style={{ color: "rgba(37,99,235,0.07)" }}>"</div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-12 rounded-full" style={{ background: "linear-gradient(to bottom,#2563eb,#10b981)" }}/>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-foreground leading-none mb-1">
                        {t.team[0].name}
                      </h3>
                      <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#2563eb" }}>
                        {t.team[0].role}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/60 text-base leading-[1.9] mb-8 italic font-light">
                    "{t.team[0].bio}"
                  </p>
                </div>

                {/* Highlights grid */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {highlights.map((h, hi) => (
                      <div key={hi} className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                        style={{ background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.10)" }}>
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(37,99,235,0.10)" }}>
                          <h.icon size={15} style={{ color: "#2563eb" }}/>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{h.label}</p>
                          <p className="text-sm font-semibold text-foreground">{h.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(isHindi
                      ? ["✦ शिक्षा में नेता", "✦ छात्र-केंद्रित", "✦ समग्र विकास"]
                      : ["✦ Educational Leader", "✦ Student-Centred", "✦ Holistic Development"]
                    ).map((tag, ti) => (
                      <span key={ti} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(37,99,235,0.07)", color: "#2563eb", border: "1px solid rgba(37,99,235,0.15)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Portrait cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {t.team.slice(1).map((member, i) => {
            const meta = MEMBERS[i + 1];
            return (
              <motion.div key={i} {...fadeUp(0.1 + i * 0.08)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden flex flex-col cursor-default"
                style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.07)", transition: "box-shadow 0.3s, transform 0.3s" }}>

                {/* Colored top accent line */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${meta.accentHex},${meta.accentHex}88)` }}/>

                {/* Photo */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 300 }}>
                  <img src={meta.image} alt={member.name}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    style={{ objectFit: "cover", objectPosition: meta.pos }}/>
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.15) 50%,transparent 100%)" }}/>
                  {/* Role pill */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-md"
                      style={{ background: `linear-gradient(135deg,${meta.accentHex},${meta.accentHex}cc)`, backdropFilter: "blur(8px)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block"/>
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-serif font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed flex-1 font-light">{member.bio}</p>
                  {/* Bottom accent bar */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-0.5 rounded-full flex-1" style={{ background: `linear-gradient(to right,${meta.accentHex}50,transparent)` }}/>
                    <div className="w-2 h-2 rounded-full" style={{ background: meta.accentHex }}/>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1.5px ${meta.accentHex}40, 0 20px 60px ${meta.accentHex}18` }}/>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.35)} className="text-center">
          <Link href="/faculty">
            <motion.div
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              className="relative rounded-full cursor-pointer inline-block"
              style={{ padding: "2.5px" }}>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div className="absolute"
                  style={{ width: "200%", height: "200%", top: "-50%", left: "-50%",
                    background: "conic-gradient(from 0deg,#2563eb,#8b5cf6,#0891b2,#06b6d4,#8b5cf6,#2563eb)" }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}/>
              </div>
              <div className="relative z-10 inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-sm"
                style={{ background: "rgba(6,10,28,0.92)", backdropFilter: "blur(16px)" }}>
                {isHindi ? "पूरी टीम से मिलें" : "Meet The Full Team"}
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}>
                  <ArrowRight size={15} style={{ color: "#818cf8" }}/>
                </motion.span>
              </div>
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
