import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";
import principalImg from "@assets/pricipal_sir_1780036894116.png";
import sulochanaSharmaImg from "@assets/managing_director_1780037204818.jpeg";
import vicePrincipalImg from "@assets/viceprincipal_1780037357684.png";
import sarthakImg from "@assets/sarthak_1780039328255.png";
import secretaryImg from "@assets/secretary_1780039339840.png";

const MEMBERS = [
  { image: principalImg,       pos: "center top", accent: "hsl(var(--primary))",   accentHex: "#2563EB", bg: "bg-primary/8"   },
  { image: sulochanaSharmaImg, pos: "center 6%",  accent: "#16a34a",               accentHex: "#16a34a", bg: "bg-green-50"    },
  { image: vicePrincipalImg,   pos: "center 5%",  accent: "hsl(var(--secondary))", accentHex: "#059669", bg: "bg-secondary/8" },
  { image: sarthakImg,         pos: "center top", accent: "#7c3aed",               accentHex: "#7c3aed", bg: "bg-violet-50"   },
  { image: secretaryImg,       pos: "center top", accent: "#db2777",               accentHex: "#db2777", bg: "bg-pink-50"     },
];

export default function Faculty() {
  const { lang } = useLanguage();
  const t = SITE[lang].faculty;
  const isHindi = lang === "hi";

  return (
    <section id="faculty" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-5">
            {t.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            {t.heading}{" "}
            <span className="text-gradient">{t.accent}</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">{t.body}</p>
        </motion.div>

        {/* ── Featured Principal card ── */}
        <motion.div className="mb-8"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <div className="group rounded-3xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <div className="grid grid-cols-1 md:grid-cols-5 min-h-[340px]">

              {/* Photo side */}
              <div className="md:col-span-2 relative overflow-hidden" style={{ minHeight: 300 }}>
                <img src={MEMBERS[0].image} alt={t.team[0].name}
                  className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: MEMBERS[0].pos }}/>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden md:block"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"/>
                {/* Principal badge */}
                <div className="absolute top-5 left-5">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-lg">
                    <Star size={11} className="fill-white"/>
                    {isHindi ? "प्रधानाचार्य" : "Principal"}
                  </div>
                </div>
              </div>

              {/* Bio side */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <div className="text-primary/20 mb-3"><Quote size={36}/></div>
                <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-foreground mb-1">{t.team[0].name}</h3>
                <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-5">{t.team[0].role}</p>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 italic border-l-4 border-primary/25 pl-5">
                  "{t.team[0].bio}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {(isHindi
                    ? ["M.A., B.Ed.", "20+ वर्षों का अनुभव", "CBSE विशेषज्ञ"]
                    : ["M.A., B.Ed.", "20+ Years in Education", "CBSE Expert"]
                  ).map((tag, ti) => (
                    <span key={ti} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Portrait cards row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {t.team.slice(1).map((member, i) => {
            const meta = MEMBERS[i + 1];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 280 }}>
                  <img src={meta.image} alt={member.name}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    style={{ objectFit: "cover", objectPosition: meta.pos }}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"/>
                  {/* Role pill at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm shadow-sm"
                      style={{ color: meta.accentHex }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meta.accentHex }}/>
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 bg-card">
                  <h3 className="text-lg font-bold font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{member.bio}</p>
                  <div className="mt-4 h-0.5 rounded-full w-10" style={{ backgroundColor: meta.accentHex }}/>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Link href="/faculty">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200">
              {isHindi ? "पूरी टीम से मिलें" : "Meet The Full Team"}
              <ArrowRight size={16}/>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
