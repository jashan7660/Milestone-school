import { motion } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Link } from "wouter";

const CONFETTI = ["#F59E0B","#EF4444","#10B981","#2563EB","#8B5CF6","#EC4899","#06B6D4"];

const CARD_META = [
  { icon: Microscope, color: "#10B981", bg: "#064e3b", label: "Science" },
  { icon: BookOpen,   color: "#2563EB", bg: "#1e3a8a", label: "Library" },
  { icon: Dumbbell,   color: "#F59E0B", bg: "#78350f", label: "Sports"  },
  { icon: Palette,    color: "#EC4899", bg: "#831843", label: "Arts"    },
  { icon: Monitor,    color: "#8B5CF6", bg: "#4c1d95", label: "Tech"    },
  { icon: Bus,        color: "#06B6D4", bg: "#164e63", label: "Transport"},
];

const IMAGES = [null, "/library.png", null, "/art-room.png", "/smart-classroom.png", "/school-bus.png"];
const VIDEOS  = ["/science-lab-video3.mp4", null, "/sports-complex-video.mp4", "/creative-arts-video.mp4", null, "/transport-video.mp4"];

export default function Facilities() {
  const { lang } = useLanguage();
  const t = SITE[lang].facilities;
  const isHindi = lang === "hi";

  return (
    <section id="facilities" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>

      {/* Animated orbs */}
      {[
        { w: 500, h: 500, x: "-7%",  y: "-20%", c: "#10B981", dur: 12 },
        { w: 400, h: 400, x: "73%",  y: "50%",  c: "#2563EB", dur: 15 },
        { w: 280, h: 280, x: "38%",  y: "68%",  c: "#EC4899", dur: 9  },
        { w: 220, h: 220, x: "60%",  y: "-12%", c: "#F59E0B", dur: 11 },
      ].map((o, i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width: o.w, height: o.h, left: o.x, top: o.y, background: `radial-gradient(circle,${o.c}18,transparent 70%)` }}
          animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.65, 0.3] }}
          transition={{ repeat: Infinity, duration: o.dur, ease: "easeInOut" }}/>
      ))}

      {/* Confetti dots */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
          style={{ left: `${(i * 41 + 6) % 94}%`, top: `${(i * 57 + 9) % 88}%`,
            backgroundColor: CONFETTI[i % CONFETTI.length], opacity: 0.3 }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.65, 0.3], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 3.4 + (i % 5) * 0.5, delay: (i * 0.19) % 3, ease: "easeInOut" }}/>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }}/>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.3)" }}>
            <Sparkles size={12}/> {t.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-5 leading-tight tracking-tight">
            {isHindi ? "विश्वस्तरीय " : "World-class "}
            <span style={{ background: "linear-gradient(90deg,#34d399,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {isHindi ? "सुविधाएं" : "facilities"}
            </span>
            {isHindi ? " — हर जरूरत के लिए" : " for every learner"}
          </h2>
          <p className="text-white/55 text-lg font-light leading-relaxed">
            {isHindi
              ? "आधुनिक प्रयोगशालाओं से लेकर खेल परिसर तक — हर सुविधा आपके बच्चे की समग्र वृद्धि के लिए बनाई गई है।"
              : "From modern laboratories to sports complexes — every facility is designed to support your child's holistic growth."}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((facility, i) => {
            const meta = CARD_META[i];
            const Icon = meta.icon;
            const hasVideo = VIDEOS[i] !== null;
            const hasImage = IMAGES[i] !== null;

            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7, boxShadow: `0 24px 56px ${meta.color}28` }}
                className="group rounded-3xl overflow-hidden transition-all duration-350 flex flex-col"
                style={{ background: "rgba(255,255,255,0.04)", border: `1.5px solid ${meta.color}28` }}>

                {/* Colored top bar */}
                <div className="h-1" style={{ background: `linear-gradient(90deg,${meta.color},${meta.color}44)` }}/>

                {/* Media */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 220 }}>
                  {hasVideo ? (
                    <video src={VIDEOS[i]!} autoPlay loop muted playsInline disablePictureInPicture
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ pointerEvents: "none" }}/>
                  ) : hasImage ? (
                    <img src={IMAGES[i]!} alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg,${meta.bg},${meta.bg}cc)` }}>
                      <Icon size={64} style={{ color: meta.color, opacity: 0.5 }}/>
                    </div>
                  )}
                  {/* Dark overlay gradient */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.80) 0%, rgba(10,22,40,0.15) 60%, transparent 100%)" }}/>

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: `linear-gradient(135deg,${meta.color},${meta.color}bb)`, boxShadow: `0 4px 16px ${meta.color}50` }}>
                    <Icon size={20} className="text-white"/>
                  </div>

                  {/* Category label */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: `${meta.color}20`, color: meta.color, border: `1px solid ${meta.color}40`, backdropFilter: "blur(8px)" }}>
                      {meta.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:scale-[1.02] transition-transform duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light flex-1">{facility.desc}</p>
                  <div className="mt-4 h-0.5 rounded-full w-8" style={{ backgroundColor: meta.color }}/>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/facilities">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{ background: "linear-gradient(135deg,#10B981,#059669)", color: "white", boxShadow: "0 8px 32px rgba(16,185,129,0.30)" }}>
              {isHindi ? "सभी सुविधाएं देखें" : "Explore All Facilities"}
              <ArrowRight size={16}/>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
