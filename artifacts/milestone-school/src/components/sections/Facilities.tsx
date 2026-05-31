import { motion } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import { Link } from "wouter";

const IMAGES = [null, "/library.png", null, "/art-room.png", "/smart-classroom.png", "/school-bus.png"];
const VIDEOS  = ["/science-lab-video3.mp4", null, "/sports-complex-video.mp4", "/creative-arts-video.mp4", null, "/transport-video.mp4"];

const META = [
  { icon: Microscope, label: "Science Lab",   grad: "from-emerald-600 to-teal-500",    glow: "#059669", span: "md:col-span-2 md:row-span-2" },
  { icon: BookOpen,   label: "Digital Library",grad: "from-blue-600 to-blue-400",       glow: "#2563EB", span: "" },
  { icon: Dumbbell,   label: "Sports Complex", grad: "from-amber-500 to-orange-400",    glow: "#d97706", span: "" },
  { icon: Palette,    label: "Creative Arts",  grad: "from-pink-600 to-rose-400",       glow: "#db2777", span: "md:col-span-2" },
  { icon: Monitor,    label: "Computer Lab",   grad: "from-violet-600 to-purple-400",   glow: "#7c3aed", span: "" },
  { icon: Bus,        label: "Transport",      grad: "from-cyan-500 to-sky-400",        glow: "#0891b2", span: "" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function FacilityCard({ facility, i }: { facility: { title: string; desc: string }, i: number }) {
  const meta = META[i];
  const Icon = meta.icon;
  const hasVideo = VIDEOS[i] !== null;
  const hasImage = IMAGES[i] !== null;

  /* Row / col height depending on span */
  const isFeatured = meta.span.includes("row-span-2");
  const mediaH = isFeatured ? "h-full min-h-[340px]" : "h-full min-h-[220px]";

  return (
    <motion.div {...fadeUp(i * 0.07)}
      className={`group relative rounded-3xl overflow-hidden ${meta.span}`}
      style={{ boxShadow: `0 4px 24px ${meta.glow}18` }}
      whileHover={{ y: -6, boxShadow: `0 28px 60px ${meta.glow}30` }}>

      {/* ── Media layer ── */}
      <div className={`relative w-full ${mediaH} overflow-hidden`}>
        {hasVideo ? (
          <video src={VIDEOS[i]!} autoPlay loop muted playsInline disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ pointerEvents: "none" }}/>
        ) : hasImage ? (
          <img src={IMAGES[i]!} alt={facility.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${meta.grad} opacity-30`}/>
        )}

        {/* Always-on dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"/>

        {/* Hover glass shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${meta.glow}18 0%, transparent 60%)` }}/>

        {/* ── Icon badge (top-right) ── */}
        <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${meta.grad} group-hover:scale-110 transition-transform duration-300`}
          style={{ boxShadow: `0 6px 20px ${meta.glow}55` }}>
          <Icon size={22} className="text-white"/>
        </div>

        {/* ── Label pill (top-left) ── */}
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "white", backdropFilter: "blur(12px)" }}>
            <Sparkles size={9}/>
            {meta.label}
          </div>
        </div>

        {/* ── Text overlay at bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Animated border line */}
          <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 mb-3 rounded-full bg-gradient-to-r ${meta.grad}`}/>
          <h3 className="text-white font-serif font-extrabold text-xl mb-2 leading-tight">{facility.title}</h3>
          {/* Bio slides up on hover */}
          <p className="text-white/65 text-sm leading-relaxed font-light max-w-sm
            translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            {facility.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Facilities() {
  const { lang } = useLanguage();
  const t = SITE[lang].facilities;
  const isHindi = lang === "hi";

  return (
    <section id="facilities" className="py-28 relative overflow-hidden bg-background">

      {/* ── Subtle premium bg ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.04) 0%, transparent 70%)" }}/>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 110%, rgba(16,185,129,0.04) 0%, transparent 70%)" }}/>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5 text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(16,185,129,0.08)", color: "#059669", border: "1px solid rgba(16,185,129,0.22)" }}>
            <Sparkles size={11}/> {t.label}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-foreground mb-4 leading-tight">
            {isHindi ? "विश्वस्तरीय " : "World-class "}
            <span className="text-gradient">{isHindi ? "सुविधाएं" : "Facilities"}</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            {isHindi
              ? "हर सुविधा आपके बच्चे की समग्र वृद्धि और उत्कृष्टता के लिए बनाई गई है।"
              : "Every facility crafted to support your child's holistic growth, creativity, and excellence."}
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-5 mb-14">
          {t.items.map((facility, i) => (
            <FacilityCard key={i} facility={facility} i={i}/>
          ))}
        </div>

        {/* ── Premium bottom strip ── */}
        <motion.div {...fadeUp(0.35)}
          className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(16,185,129,0.06) 100%)",
            border: "1px solid rgba(37,99,235,0.15)", boxShadow: "0 4px 32px rgba(37,99,235,0.06)" }}>
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              {isHindi ? "परिसर दौरे की योजना बनाएं" : "Plan a Campus Tour"}
            </h3>
            <p className="text-muted-foreground text-base font-light">
              {isHindi ? "हमारी सुविधाएं खुद देखें और अपने बच्चे का भविष्य महसूस करें।"
                : "See our facilities first-hand and feel the environment your child will grow in."}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/facilities">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#2563EB,#059669)", color: "white", boxShadow: "0 6px 24px rgba(37,99,235,0.30)" }}>
                {isHindi ? "सभी सुविधाएं" : "All Facilities"}
                <ArrowRight size={16}/>
              </button>
            </Link>
            <Link href="/admissions">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-border text-foreground hover:bg-muted/60 hover:-translate-y-0.5 transition-all duration-300">
                {isHindi ? "एडमिशन लें" : "Admissions"}
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
