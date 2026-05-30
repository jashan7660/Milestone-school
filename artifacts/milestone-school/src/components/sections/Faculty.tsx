import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Crown, Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";
import principalImg from "@assets/pricipal_sir_1780036894116.png";
import sulochanaSharmaImg from "@assets/managing_director_1780037204818.jpeg";
import vicePrincipalImg from "@assets/viceprincipal_1780037357684.png";
import sarthakImg from "@assets/sarthak_1780039328255.png";
import secretaryImg from "@assets/secretary_1780039339840.png";

const CONFETTI = ["#F59E0B","#EF4444","#10B981","#2563EB","#8B5CF6","#EC4899"];

const MEMBERS = [
  { image: principalImg,       pos: "center top",  accent: "#F59E0B", glow: "rgba(245,158,11,0.35)",  featured: true  },
  { image: sulochanaSharmaImg, pos: "center 6%",   accent: "#10B981", glow: "rgba(16,185,129,0.30)",  featured: false },
  { image: vicePrincipalImg,   pos: "center 5%",   accent: "#60a5fa", glow: "rgba(96,165,250,0.30)",  featured: false },
  { image: sarthakImg,         pos: "center top",  accent: "#a78bfa", glow: "rgba(167,139,250,0.30)", featured: false },
  { image: secretaryImg,       pos: "center top",  accent: "#f472b6", glow: "rgba(244,114,182,0.30)", featured: false },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Faculty() {
  const { lang } = useLanguage();
  const t = SITE[lang].faculty;
  const isHindi = lang === "hi";

  return (
    <section id="faculty" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f0c1a 0%, #0a1628 40%, #0a200f 75%, #0f0c1a 100%)" }}>

      {/* Animated orbs */}
      {[
        { w: 600, h: 600, x: "-8%",  y: "-25%", c: "#F59E0B", dur: 14 },
        { w: 450, h: 450, x: "75%",  y: "45%",  c: "#8B5CF6", dur: 16 },
        { w: 300, h: 300, x: "40%",  y: "68%",  c: "#EC4899", dur: 10 },
        { w: 220, h: 220, x: "65%",  y: "-10%", c: "#10B981", dur: 12 },
      ].map((o, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: o.w, height: o.h, left: o.x, top: o.y,
            background: `radial-gradient(circle,${o.c}1a,transparent 70%)` }}
          animate={{ scale: [1, 1.28, 1], opacity: [0.28, 0.65, 0.28] }}
          transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
      ))}

      {/* Confetti dots */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none hidden md:block"
          style={{ width: i % 3 === 0 ? 8 : 5, height: i % 3 === 0 ? 8 : 5,
            left: `${(i * 43 + 9) % 94}%`, top: `${(i * 61 + 7) % 89}%`,
            backgroundColor: CONFETTI[i % CONFETTI.length], opacity: 0.28 }}
          animate={{ y: [0, -18, 0], opacity: [0.28, 0.6, 0.28], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3.5 + (i % 5) * 0.55, delay: (i * 0.22) % 3, ease: "easeInOut" }}/>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.30)" }}>
            <Crown size={12}/> {t.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-5 leading-tight">
            {t.heading}{" "}
            <span style={{ background: "linear-gradient(90deg,#fbbf24,#f472b6,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.accent}
            </span>
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">{t.body}</p>
        </motion.div>

        {/* ── Featured Principal card ── */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <div className="group relative rounded-3xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${MEMBERS[0].accent}35`,
              boxShadow: `0 8px 48px ${MEMBERS[0].glow}` }}>
            <div className="h-1.5" style={{ background: `linear-gradient(90deg,${MEMBERS[0].accent},#EC4899,#8B5CF6)` }}/>

            <div className="grid grid-cols-1 md:grid-cols-5 min-h-[380px]">
              {/* Photo side */}
              <div className="md:col-span-2 relative overflow-hidden" style={{ minHeight: 340 }}>
                <img src={MEMBERS[0].image} alt={t.team[0].name}
                  className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: MEMBERS[0].pos }}/>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 40%, rgba(10,16,32,0.95) 100%)" }}/>
                <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(to top, rgba(10,16,32,0.98) 0%, transparent 50%)" }}/>
                {/* Gold star badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: "linear-gradient(135deg,#F59E0B,#d97706)", boxShadow: "0 4px 20px rgba(245,158,11,0.50)" }}>
                  <Star size={13} className="text-white fill-white"/>
                  <span className="text-white text-[11px] font-bold uppercase tracking-widest">{isHindi ? "प्रधानाचार्य" : "Principal"}</span>
                </div>
              </div>

              {/* Bio side */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-white/20 mb-4"><Quote size={40}/></div>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-white mb-2 leading-tight">{t.team[0].name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: MEMBERS[0].accent }}>
                  {t.team[0].role}
                </p>
                <p className="text-white/60 text-lg leading-relaxed mb-8 font-light italic border-l-4 pl-5"
                  style={{ borderColor: `${MEMBERS[0].accent}55` }}>
                  "{t.team[0].bio}"
                </p>
                <div className="flex flex-wrap gap-3">
                  {(isHindi
                    ? ["M.A., B.Ed.", "20+ वर्षों का अनुभव", "CBSE विशेषज्ञ"]
                    : ["M.A., B.Ed.", "20+ Years in Education", "CBSE Expert"]
                  ).map((tag, ti) => (
                    <span key={ti} className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ background: `${MEMBERS[0].accent}15`, color: MEMBERS[0].accent, border: `1px solid ${MEMBERS[0].accent}35` }}>
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
              <motion.div key={i} {...fadeUp(i * 0.1 + 0.2)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ background: "rgba(255,255,255,0.03)", border: `1.5px solid ${meta.accent}28` }}
                whileHover={{ y: -8, boxShadow: `0 28px 60px ${meta.glow}` }}>

                {/* Top accent bar */}
                <div className="h-1" style={{ background: `linear-gradient(90deg,${meta.accent},${meta.accent}44)` }}/>

                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: 320 }}>
                  <img src={meta.image} alt={member.name}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    style={{ objectFit: "cover", objectPosition: meta.pos }}/>

                  {/* Gradient overlay — always */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,12,26,1) 0%, rgba(10,12,26,0.55) 45%, rgba(10,12,26,0.05) 100%)" }}/>

                  {/* Hover: shimmer glow */}
                  <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at bottom,${meta.accent}18,transparent 70%)` }}/>

                  {/* Name + role overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2"
                      style={{ background: `${meta.accent}20`, color: meta.accent, border: `1px solid ${meta.accent}45`, backdropFilter: "blur(8px)" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meta.accent }}/>
                      {member.role}
                    </div>
                    <h3 className="text-xl font-serif font-extrabold text-white leading-tight">{member.name}</h3>
                  </div>
                </div>

                {/* Bio — revealed area below photo */}
                <div className="px-5 py-4">
                  <p className="text-white/45 text-xs leading-relaxed font-light line-clamp-3">{member.bio}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-px flex-1 rounded-full" style={{ background: `linear-gradient(90deg,${meta.accent}55,transparent)` }}/>
                    <Star size={11} style={{ color: meta.accent }}/>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.55)} className="text-center">
          <Link href="/faculty">
            <button className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg,#F59E0B,#d97706)", color: "white",
                boxShadow: "0 8px 32px rgba(245,158,11,0.35)", border: "1px solid rgba(255,255,255,0.15)" }}>
              {isHindi ? "पूरी टीम से मिलें" : "Meet The Full Team"}
              <ArrowRight size={18}/>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
