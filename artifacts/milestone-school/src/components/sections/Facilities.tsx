import { motion } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Link } from "wouter";

const IMAGES = [null, "/library.png", null, "/art-room.png", "/smart-classroom.png", "/school-bus.png"];
const VIDEOS  = ["/science-lab-video3.mp4", null, "/sports-complex-video.mp4", "/creative-arts-video.mp4", null, "/transport-video.mp4"];

const CARD_META = [
  { icon: Microscope, colorClass: "text-emerald-600",  bgClass: "bg-emerald-50",  borderClass: "border-emerald-100", accentHex: "#059669", label: "Science"   },
  { icon: BookOpen,   colorClass: "text-primary",      bgClass: "bg-primary/8",   borderClass: "border-primary/15",  accentHex: "#2563EB", label: "Library"   },
  { icon: Dumbbell,   colorClass: "text-amber-600",    bgClass: "bg-amber-50",    borderClass: "border-amber-100",   accentHex: "#d97706", label: "Sports"    },
  { icon: Palette,    colorClass: "text-pink-600",     bgClass: "bg-pink-50",     borderClass: "border-pink-100",    accentHex: "#db2777", label: "Arts"      },
  { icon: Monitor,    colorClass: "text-violet-600",   bgClass: "bg-violet-50",   borderClass: "border-violet-100",  accentHex: "#7c3aed", label: "Tech"      },
  { icon: Bus,        colorClass: "text-cyan-600",     bgClass: "bg-cyan-50",     borderClass: "border-cyan-100",    accentHex: "#0891b2", label: "Transport" },
];

export default function Facilities() {
  const { lang } = useLanguage();
  const t = SITE[lang].facilities;
  const isHindi = lang === "hi";

  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm uppercase tracking-wider mb-5">
            {t.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            {isHindi ? "विश्वस्तरीय " : "World-class "}
            <span className="text-gradient">{isHindi ? "सुविधाएं" : "Facilities"}</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            {isHindi
              ? "आधुनिक प्रयोगशालाओं से लेकर खेल परिसर तक — हर सुविधा आपके बच्चे की समग्र वृद्धि के लिए।"
              : "From modern laboratories to sports complexes — every facility designed to support your child's holistic growth."}
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((facility, i) => {
            const meta = CARD_META[i];
            const Icon = meta.icon;
            const hasVideo = VIDEOS[i] !== null;
            const hasImage = IMAGES[i] !== null;

            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
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
                    <div className={`w-full h-full flex items-center justify-center ${meta.bgClass}`}>
                      <Icon size={56} className={`${meta.colorClass} opacity-30`}/>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"/>

                  {/* Icon badge — top right */}
                  <div className={`absolute top-4 right-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg ${meta.bgClass} border ${meta.borderClass}`}>
                    <Icon size={20} className={meta.colorClass}/>
                  </div>

                  {/* Category label */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm ${meta.colorClass}`}>
                      {meta.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-lg font-bold font-serif text-foreground mb-2 group-hover:${meta.colorClass} transition-colors duration-200`}>
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{facility.desc}</p>
                  <div className="mt-4 h-0.5 rounded-full w-10" style={{ backgroundColor: meta.accentHex }}/>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <motion.div className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}>
          <Link href="/facilities">
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200">
              {isHindi ? "सभी सुविधाएं देखें" : "Explore All Facilities"}
              <ArrowRight size={16}/>
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
