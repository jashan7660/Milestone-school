import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Crown, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import principalImg from "@assets/pricipal_sir_1780036894116.png";
import sulochanaSharmaImg from "@assets/managing_director_1780037204818.jpeg";
import vicePrincipalImg from "@assets/viceprincipal_1780037357684.png";
import sarthakImg from "@assets/sarthak_1780039328255.png";
import secretaryImg from "@assets/secretary_1780039339840.png";

const CONFETTI = ["#F59E0B","#EF4444","#10B981","#2563EB","#8B5CF6","#EC4899"];

const CARD_ACCENTS = [
  { color: "#F59E0B", bg: "#78350f" },
  { color: "#10B981", bg: "#064e3b" },
  { color: "#60a5fa", bg: "#1e3a8a" },
  { color: "#a78bfa", bg: "#4c1d95" },
  { color: "#f472b6", bg: "#831843" },
];

const localImages = [
  { image: principalImg,       position: "center top",    fit: "cover" as const },
  { image: sulochanaSharmaImg, position: "center 6%",     fit: "cover" as const },
  { image: vicePrincipalImg,   position: "center 5%",     fit: "cover" as const },
  { image: sarthakImg,         position: "center top",    fit: "cover" as const },
  { image: secretaryImg,       position: "center top",    fit: "cover" as const },
];

export default function Faculty() {
  const { lang } = useLanguage();
  const t = SITE[lang].faculty;
  const isHindi = lang === "hi";

  return (
    <section id="faculty" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f172a 0%, #0a2240 50%, #0a1e0f 100%)" }}>

      {/* Animated orbs */}
      {[
        { w: 500, h: 500, x: "-7%",  y: "-22%", c: "#F59E0B", dur: 12 },
        { w: 380, h: 380, x: "74%",  y: "48%",  c: "#10B981", dur: 15 },
        { w: 260, h: 260, x: "38%",  y: "62%",  c: "#8B5CF6", dur: 9  },
        { w: 200, h: 200, x: "64%",  y: "-12%", c: "#EC4899", dur: 11 },
      ].map((o, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}18,transparent 70%)` }}
          animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.65, 0.3] }}
          transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
      ))}

      {/* Confetti dots */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
          style={{ left: `${(i * 47 + 9) % 94}%`, top: `${(i * 59 + 7) % 88}%`,
            backgroundColor: CONFETTI[i % CONFETTI.length], opacity: 0.3 }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 3.2 + (i % 5) * 0.5, delay: (i * 0.20) % 3, ease: "easeInOut" }}/>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.3)" }}>
            <Crown size={12}/> {t.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-5 leading-tight tracking-tight">
            {t.heading}{" "}
            <span style={{ background: "linear-gradient(90deg,#fbbf24,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.accent}
            </span>
          </h2>
          <p className="text-white/55 text-lg font-light leading-relaxed">{t.body}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {t.team.map((member, i) => {
            const acc = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, boxShadow: `0 20px 48px ${acc.color}28` }}
                className="group rounded-3xl overflow-hidden transition-all duration-350 flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)", border: `1.5px solid ${acc.color}30` }}>

                {/* Colored top bar */}
                <div className="h-1" style={{ background: `linear-gradient(90deg,${acc.color},${acc.color}44)` }}/>

                {/* Photo */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 300 }}>
                  <img src={localImages[i].image} alt={member.name}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    style={{ objectFit: localImages[i].fit, objectPosition: localImages[i].position, display: "block" }}/>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.35) 55%, transparent 100%)" }}/>
                  {/* Role badge on photo */}
                  <div className="absolute bottom-4 left-0 right-0 px-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
                      style={{ background: `linear-gradient(135deg,${acc.color},${acc.color}bb)`, color: "white", boxShadow: `0 4px 16px ${acc.color}40` }}>
                      <Sparkles size={9}/>
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:scale-[1.02] transition-transform duration-300" style={{ color: "white" }}>
                    {member.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed font-light flex-1">{member.bio}</p>
                  <div className="mt-4 h-0.5 rounded-full w-8" style={{ backgroundColor: acc.color }}/>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/faculty">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg,#F59E0B,#d97706)", color: "white", boxShadow: "0 8px 32px rgba(245,158,11,0.30)" }}>
              {isHindi ? "पूरी टीम देखें" : "Meet The Full Team"}
              <ArrowRight size={16}/>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
