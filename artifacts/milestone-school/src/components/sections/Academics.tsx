import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const CARD_META = [
  {
    icon: BookOpen,
    accent: "#1a56db",
    accentLight: "#dbeafe",
    accentMid: "#3b82f6",
    gradient: "linear-gradient(135deg, #1a56db, #2563eb)",
    shadow: "rgba(26,86,219,0.22)",
    bar: "linear-gradient(90deg, #1a56db, #60a5fa)",
  },
  {
    icon: MonitorPlay,
    accent: "#1c9e5e",
    accentLight: "#dcfce7",
    accentMid: "#22c55e",
    gradient: "linear-gradient(135deg, #1c9e5e, #16a34a)",
    shadow: "rgba(28,158,94,0.22)",
    bar: "linear-gradient(90deg, #1c9e5e, #4ade80)",
  },
  {
    icon: FlaskConical,
    accent: "#7c3aed",
    accentLight: "#ede9fe",
    accentMid: "#a78bfa",
    gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    shadow: "rgba(124,58,237,0.22)",
    bar: "linear-gradient(90deg, #7c3aed, #a78bfa)",
  },
  {
    icon: Languages,
    accent: "#0891b2",
    accentLight: "#cffafe",
    accentMid: "#22d3ee",
    gradient: "linear-gradient(135deg, #0891b2, #0e7490)",
    shadow: "rgba(8,145,178,0.22)",
    bar: "linear-gradient(90deg, #0891b2, #22d3ee)",
  },
];

function AcademicCard({
  feature, index, meta,
}: {
  feature: { title: string; desc: string };
  index: number;
  meta: typeof CARD_META[0];
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = meta.icon;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="relative flex flex-col overflow-hidden rounded-2xl bg-white"
      style={{
        boxShadow: hovered
          ? `0 20px 50px ${meta.shadow}, 0 4px 16px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.35s ease",
      }}
    >
      {/* Colored top bar */}
      <div className="h-1 w-full flex-shrink-0" style={{ background: meta.bar }} />

      {/* Shimmer on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            initial={{ x: "-110%" }}
            animate={{ x: "210%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.45) 50%, transparent 62%)",
            }}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-col flex-1 p-7">
        {/* Icon */}
        <motion.div
          className="mb-6 flex items-center justify-center rounded-2xl flex-shrink-0 self-start"
          style={{
            width: 60, height: 60,
            background: hovered ? meta.gradient : meta.accentLight,
            transition: "background 0.35s ease",
            boxShadow: hovered ? `0 8px 24px ${meta.shadow}` : "none",
          }}
        >
          <Icon
            size={26}
            style={{
              color: hovered ? "#ffffff" : meta.accent,
              transition: "color 0.35s ease",
            }}
          />
        </motion.div>

        {/* Index number */}
        <div
          className="absolute top-5 right-6 font-serif font-extrabold leading-none select-none"
          style={{
            fontSize: 52,
            color: hovered ? `${meta.accent}10` : `${meta.accent}08`,
            transition: "color 0.35s ease",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3
          className="font-serif font-extrabold mb-3 leading-tight"
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
            color: "#0f172a",
          }}
        >
          {feature.title}
        </h3>

        {/* Animated underline */}
        <motion.div
          className="mb-4 rounded-full"
          style={{ height: 2, background: meta.bar, originX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0.25, opacity: hovered ? 1 : 0.4 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#64748b", lineHeight: 1.75 }}
        >
          {feature.desc}
        </p>

        {/* Learn more */}
        <motion.div
          className="flex items-center gap-1.5 mt-5 font-semibold text-sm"
          style={{ color: meta.accent }}
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <span>Explore</span>
          <ArrowRight size={14} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Academics() {
  const { lang } = useLanguage();
  const t = SITE[lang].academics;

  return (
    <section id="academics" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(170deg, #f8faff 0%, #f0f7ff 50%, #f5fff8 100%)" }} />

      {/* Decorative orbs */}
      <div className="absolute pointer-events-none" style={{ top: "-8%", right: "-4%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,86,219,0.06) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-10%", left: "-5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(28,158,94,0.06) 0%, transparent 70%)" }} />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.35,
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{
                  background: "rgba(26,86,219,0.08)",
                  border: "1px solid rgba(26,86,219,0.18)",
                }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: "#1a56db" }}
                />
                <span
                  style={{
                    color: "#1a56db",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.label}
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-serif font-extrabold leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", color: "#0f172a" }}
              >
                {t.heading}{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1c9e5e, #4ade80)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t.accent}
                </span>
              </h2>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  height: 2, width: 70, borderRadius: 99, originX: 0.5, margin: "0 auto 20px",
                  background: "linear-gradient(90deg, transparent, #1a56db, transparent)",
                }}
              />

              {/* Body */}
              <p
                className="text-lg font-light leading-[1.85]"
                style={{ color: "#475569" }}
              >
                {t.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <AcademicCard feature={feature} index={index} meta={CARD_META[index]} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
