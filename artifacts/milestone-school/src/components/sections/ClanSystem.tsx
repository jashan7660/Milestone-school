import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Shield, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LOGO_SRC = "/clan-logos.png";

const clans = [
  {
    rank: 1,
    name: "The Leaders",
    nameHi: "द लीडर्स",
    fullName: "The Leaders Clan",
    fullNameHi: "द लीडर्स क्लान",
    color: "#e53e3e",
    colorDark: "#c53030",
    colorGlow: "rgba(229,62,62,0.4)",
    colorBg: "rgba(229,62,62,0.08)",
    colorBorder: "rgba(229,62,62,0.35)",
    colorBar: "from-red-500 to-red-400",
    logoPos: "0% 22%",
    motto: "Lead with Courage",
    mottoHi: "साहस से नेतृत्व करो",
    captain: "Arjun Sharma",
    captainHi: "अर्जुन शर्मा",
    points: 4820,
    progress: 96,
    badges: ["🏆 Champions", "⚡ Top Scorer"],
  },
  {
    rank: 2,
    name: "The Legends",
    nameHi: "द लेजेंड्स",
    fullName: "The Legends Clan",
    fullNameHi: "द लेजेंड्स क्लान",
    color: "#3182ce",
    colorDark: "#2b6cb0",
    colorGlow: "rgba(49,130,206,0.4)",
    colorBg: "rgba(49,130,206,0.08)",
    colorBorder: "rgba(49,130,206,0.35)",
    colorBar: "from-blue-500 to-blue-400",
    logoPos: "33.33% 22%",
    motto: "Set Benchmarks with Hardwork",
    mottoHi: "मेहनत से मानदंड स्थापित करो",
    captain: "Priya Verma",
    captainHi: "प्रिया वर्मा",
    points: 4560,
    progress: 91,
    badges: ["📚 Academic Star", "🤝 Team Spirit"],
  },
  {
    rank: 3,
    name: "The Victors",
    nameHi: "द विक्टर्स",
    fullName: "The Victors Clan",
    fullNameHi: "द विक्टर्स क्लान",
    color: "#38a169",
    colorDark: "#2f855a",
    colorGlow: "rgba(56,161,105,0.4)",
    colorBg: "rgba(56,161,105,0.08)",
    colorBorder: "rgba(56,161,105,0.35)",
    colorBar: "from-green-500 to-green-400",
    logoPos: "66.66% 22%",
    motto: "Win with Pride",
    mottoHi: "गर्व के साथ जीतो",
    captain: "Rohit Malik",
    captainHi: "रोहित मलिक",
    points: 4290,
    progress: 85,
    badges: ["⚽ Sports Star", "🌿 Green Shield"],
  },
  {
    rank: 4,
    name: "The Elites",
    nameHi: "द एलीट्स",
    fullName: "The Elites Clan",
    fullNameHi: "द एलीट्स क्लान",
    color: "#805ad5",
    colorDark: "#6b46c1",
    colorGlow: "rgba(128,90,213,0.4)",
    colorBg: "rgba(128,90,213,0.08)",
    colorBorder: "rgba(128,90,213,0.35)",
    colorBar: "from-purple-500 to-purple-400",
    logoPos: "100% 22%",
    motto: "Be Extraordinary Consistently",
    mottoHi: "हर बार असाधारण बनो",
    captain: "Sneha Yadav",
    captainHi: "स्नेहा यादव",
    points: 3980,
    progress: 79,
    badges: ["🌟 Rising Star", "🎨 Creative Mind"],
  },
];

const rankMedal = ["🥇", "🥈", "🥉", "🎖️"];

export default function ClanSystem() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="clan-system"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* Background glow blobs */}
      {[
        { color: "rgba(229,62,62,0.12)",   top: "5%",  left: "5%",  size: 380 },
        { color: "rgba(49,130,206,0.12)",  top: "8%",  right: "5%", size: 340 },
        { color: "rgba(56,161,105,0.10)",  bottom:"10%", left: "20%",size: 300 },
        { color: "rgba(128,90,213,0.12)", bottom:"8%", right:"8%",  size: 360 },
      ].map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size, height: b.size,
            background: b.color,
            top: b.top, left: (b as any).left, right: (b as any).right, bottom: (b as any).bottom,
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 1.2, ease: "easeInOut" }}
        />
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              background: "rgba(255,255,255,0.25)",
              left: `${4 + i * 5.2}%`,
              top: `${8 + (i % 6) * 16}%`,
            }}
            animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>

        {/* ── Section Header ── */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white/70 font-semibold text-xs mb-5 uppercase tracking-widest border border-white/15"
            style={{ background: "rgba(255,255,255,0.06)" }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Shield size={13} />
            {isHindi ? "प्रतिस्पर्धा और गौरव" : "Competition & Glory"}
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-4 leading-tight tracking-tight">
            {isHindi ? "द " : "THE "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {isHindi ? "क्लान" : "CLAN"}
            </span>
            {isHindi ? " सिस्टम" : " SYSTEM"}
          </h2>

          <p className="text-white/55 text-base md:text-lg leading-relaxed font-light">
            {isHindi
              ? "माइलस्टोन में नेतृत्व, आत्मविश्वास, टीमवर्क और स्वस्थ प्रतिस्पर्धा का निर्माण।"
              : "Building leadership, confidence, teamwork, and healthy competition at The Milestone Sr. Sec. School."}
          </p>
        </motion.div>

        {/* Live leaderboard badge */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border"
            style={{ background: "rgba(245,158,11,0.12)", borderColor: "rgba(245,158,11,0.3)" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <Trophy size={15} className="text-yellow-400" />
            <span className="text-white/75 text-sm font-semibold">
              {isHindi ? "लाइव लीडरबोर्ड" : "Live Leaderboard"}
            </span>
            <span className="font-bold text-sm" style={{ color: "#f59e0b" }}>
              {isHindi ? "• द लीडर्स आगे हैं!" : "• The Leaders lead!"}
            </span>
          </div>
        </motion.div>

        {/* ── Clan Cards Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {clans.map((clan) => (
            <motion.div
              key={clan.name}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative group cursor-pointer"
            >
              {/* Hover glow ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 40px 8px ${clan.colorGlow}`, borderRadius: 16 }}
              />

              {/* Card */}
              <div
                className="relative rounded-2xl overflow-hidden h-full flex flex-col border transition-all duration-500 group-hover:border-opacity-60"
                style={{
                  background: "linear-gradient(160deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 100%)",
                  borderColor: clan.colorBorder,
                  borderWidth: 1,
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full flex-shrink-0"
                  style={{ background: `linear-gradient(90deg, ${clan.color}, transparent)` }}
                />

                {/* Rank badge */}
                <div className="absolute top-3.5 right-3.5 text-xl leading-none">
                  {rankMedal[clan.rank - 1]}
                </div>

                <div className="p-6 flex flex-col flex-1 items-center">

                  {/* Logo from sprite image */}
                  <motion.div
                    className="w-24 h-24 rounded-full overflow-hidden mb-5 flex-shrink-0 border-2"
                    style={{
                      borderColor: clan.colorBorder,
                      boxShadow: `0 0 0 4px ${clan.colorBg}, 0 4px 20px ${clan.colorGlow}`,
                    }}
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 5 + clan.rank, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${LOGO_SRC})`,
                        backgroundSize: "400% auto",
                        backgroundPosition: clan.logoPos,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </motion.div>

                  {/* Clan name */}
                  <h3
                    className="text-xl font-serif font-extrabold text-center mb-0.5 uppercase tracking-wide group-hover:scale-105 transition-transform duration-300"
                    style={{ color: clan.color }}
                  >
                    {isHindi ? clan.fullNameHi : clan.fullName}
                  </h3>

                  {/* Motto pill */}
                  <div
                    className="w-full rounded-xl px-3 py-2.5 text-center mb-5 mt-3"
                    style={{ background: clan.color }}
                  >
                    <div className="text-white/70 text-[9px] font-bold uppercase tracking-widest mb-0.5">
                      {isHindi ? "आदर्श वाक्य" : "Motto"}
                    </div>
                    <div className="text-white font-bold text-sm leading-snug">
                      {isHindi ? clan.mottoHi : clan.motto}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-2 justify-center">
                    {clan.badges.map((badge, bi) => (
                      <span
                        key={bi}
                        className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold"
                        style={{
                          background: clan.colorBg,
                          color: clan.color,
                          border: `1px solid ${clan.colorBorder}`,
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom stats ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {[
            { icon: "⚔️", label: isHindi ? "कुल मैच" : "Total Matches",    value: "148" },
            { icon: "📅", label: isHindi ? "सत्र" : "Season",              value: "2024–25" },
            { icon: "👥", label: isHindi ? "कुल सदस्य" : "Total Members",  value: "480+" },
            { icon: "🏆", label: isHindi ? "पिछला विजेता" : "Last Champions", value: isHindi ? "द लेजेंड्स" : "The Legends" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
              whileHover={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-white font-bold text-base">{stat.value}</div>
              <div className="text-white/35 text-xs mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
