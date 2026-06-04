import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Shield, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const LOGO_SRC = "/clan-logos.png";

const clans = [
  {
    rank: 1,
    fullName: "The Leaders Clan",
    fullNameHi: "द लीडर्स क्लान",
    color: "#e53e3e",
    colorLight: "rgba(229,62,62,0.08)",
    colorBorder: "rgba(229,62,62,0.25)",
    logoPos: "0% 22%",
    motto: "Lead with Courage",
    mottoHi: "साहस से नेतृत्व करो",
    badges: ["🏆 Champions", "⚡ Top Scorer"],
  },
  {
    rank: 2,
    fullName: "The Legends Clan",
    fullNameHi: "द लेजेंड्स क्लान",
    color: "#3182ce",
    colorLight: "rgba(49,130,206,0.08)",
    colorBorder: "rgba(49,130,206,0.25)",
    logoPos: "33.33% 22%",
    motto: "Set Benchmarks with Hardwork",
    mottoHi: "मेहनत से मानदंड स्थापित करो",
    badges: ["📚 Academic Star", "🤝 Team Spirit"],
  },
  {
    rank: 3,
    fullName: "The Victors Clan",
    fullNameHi: "द विक्टर्स क्लान",
    color: "#38a169",
    colorLight: "rgba(56,161,105,0.08)",
    colorBorder: "rgba(56,161,105,0.25)",
    logoPos: "66.66% 22%",
    motto: "Win with Pride",
    mottoHi: "गर्व के साथ जीतो",
    badges: ["⚽ Sports Star", "🌿 Green Shield"],
  },
  {
    rank: 4,
    fullName: "The Elites Clan",
    fullNameHi: "द एलीट्स क्लान",
    color: "#805ad5",
    colorLight: "rgba(128,90,213,0.08)",
    colorBorder: "rgba(128,90,213,0.25)",
    logoPos: "100% 22%",
    motto: "Be Extraordinary Consistently",
    mottoHi: "हर बार असाधारण बनो",
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
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="clan-system" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>

        {/* ── Section Header — same pattern as other sections ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
              <Shield size={13} />
              {isHindi ? "प्रतिस्पर्धा और गौरव" : "Competition & Glory"}
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
              {isHindi ? "द " : "The "}
              <span className="text-gradient">
                {isHindi ? "क्लान सिस्टम" : "Clan System"}
              </span>
            </h2>

            <p className="text-muted-foreground text-lg font-light leading-[1.8]">
              {isHindi
                ? "माइलस्टोन में नेतृत्व, आत्मविश्वास, टीमवर्क और स्वस्थ प्रतिस्पर्धा का निर्माण।"
                : "Building leadership, confidence, teamwork, and healthy competition at The Milestone Sr. Sec. School."}
            </p>
          </motion.div>
        </div>

        {/* ── Clan Cards ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {clans.map((clan) => (
            <motion.div
              key={clan.fullName}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="relative group"
            >
              <div
                className="relative rounded-2xl overflow-hidden h-full flex flex-col bg-card border border-border shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Top color accent bar */}
                <div
                  className="h-1.5 w-full flex-shrink-0"
                  style={{ background: `linear-gradient(90deg, ${clan.color}, transparent)` }}
                />

                {/* Rank medal */}
                <div className="absolute top-4 right-4 text-xl leading-none">
                  {rankMedal[clan.rank - 1]}
                </div>

                <div className="p-6 flex flex-col flex-1 items-center text-center">

                  {/* Logo */}
                  <motion.div
                    className="w-28 h-28 rounded-full overflow-hidden mb-5 flex-shrink-0 border-2 shadow-md"
                    style={{
                      borderColor: clan.colorBorder,
                      boxShadow: `0 4px 20px ${clan.colorBorder}`,
                    }}
                    animate={{ rotate: [0, 2, -2, 0] }}
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
                    className="text-lg font-serif font-extrabold uppercase tracking-wide mb-3 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: clan.color }}
                  >
                    {isHindi ? clan.fullNameHi : clan.fullName}
                  </h3>

                  {/* Motto pill */}
                  <div
                    className="w-full rounded-xl px-3 py-3 text-center mb-4"
                    style={{ background: clan.color }}
                  >
                    <div className="text-white/70 text-[9px] font-bold uppercase tracking-widest mb-1">
                      {isHindi ? "आदर्श वाक्य" : "Motto"}
                    </div>
                    <div className="text-white font-bold text-sm leading-snug">
                      {isHindi ? clan.mottoHi : clan.motto}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
                    {clan.badges.map((badge, bi) => (
                      <span
                        key={bi}
                        className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold"
                        style={{
                          background: clan.colorLight,
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

        {/* ── Bottom stats row ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {[
            { icon: "⚔️", label: isHindi ? "कुल मैच" : "Total Matches",     value: "148" },
            { icon: "📅", label: isHindi ? "सत्र" : "Season",               value: "2024–25" },
            { icon: "👥", label: isHindi ? "कुल सदस्य" : "Total Members",   value: "480+" },
            { icon: "🏆", label: isHindi ? "पिछला विजेता" : "Last Champions", value: isHindi ? "द लेजेंड्स" : "The Legends" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -3 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-foreground font-bold text-lg">{stat.value}</div>
              <div className="text-muted-foreground text-xs mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
