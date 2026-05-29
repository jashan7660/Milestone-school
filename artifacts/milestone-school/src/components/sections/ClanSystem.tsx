import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Shield, Star, Trophy, Zap, Flame, Droplets, Leaf, Crown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const clans = [
  {
    rank: 1,
    name: "Phoenix",
    nameHi: "फीनिक्स",
    color: "#ef4444",
    colorLight: "#fef2f2",
    colorMid: "#fca5a5",
    gradient: "from-red-500 to-orange-500",
    gradientBg: "from-red-50 to-orange-50",
    border: "border-red-400",
    glow: "shadow-red-400/40",
    motto: "Rise from the ashes, conquer the sky",
    mottoHi: "राख से उठो, आकाश को जीतो",
    points: 4820,
    icon: Flame,
    captain: "Arjun Sharma",
    captainHi: "अर्जुन शर्मा",
    badges: ["🏆 Champions", "⚡ Top Scorer", "🎯 Perfect Aim"],
    progress: 96,
  },
  {
    rank: 2,
    name: "Neptune",
    nameHi: "नेपच्यून",
    color: "#3b82f6",
    colorLight: "#eff6ff",
    colorMid: "#93c5fd",
    gradient: "from-blue-500 to-cyan-500",
    gradientBg: "from-blue-50 to-cyan-50",
    border: "border-blue-400",
    glow: "shadow-blue-400/40",
    motto: "Deep as the ocean, strong as the tide",
    mottoHi: "समुद्र जितना गहरा, लहर जितना ताकतवर",
    points: 4560,
    icon: Droplets,
    captain: "Priya Verma",
    captainHi: "प्रिया वर्मा",
    badges: ["🌊 Wave Rider", "📚 Academic Star", "🤝 Team Spirit"],
    progress: 91,
  },
  {
    rank: 3,
    name: "Falcon",
    nameHi: "फाल्कन",
    color: "#22c55e",
    colorLight: "#f0fdf4",
    colorMid: "#86efac",
    gradient: "from-green-500 to-emerald-500",
    gradientBg: "from-green-50 to-emerald-50",
    border: "border-green-400",
    glow: "shadow-green-400/40",
    motto: "Soar high, strike fast, never look back",
    mottoHi: "ऊँचे उड़ो, तेज़ मारो, पीछे मत देखो",
    points: 4290,
    icon: Leaf,
    captain: "Rohit Malik",
    captainHi: "रोहित मलिक",
    badges: ["🦅 Swift Strike", "🌿 Green Shield", "⚽ Sports Star"],
    progress: 85,
  },
  {
    rank: 4,
    name: "Thunder",
    nameHi: "थंडर",
    color: "#eab308",
    colorLight: "#fefce8",
    colorMid: "#fde047",
    gradient: "from-yellow-500 to-amber-500",
    gradientBg: "from-yellow-50 to-amber-50",
    border: "border-yellow-400",
    glow: "shadow-yellow-400/40",
    motto: "Strike with power, shine with glory",
    mottoHi: "शक्ति से प्रहार करो, गौरव से चमको",
    points: 3980,
    icon: Zap,
    captain: "Sneha Yadav",
    captainHi: "स्नेहा यादव",
    badges: ["⚡ Lightning Fast", "🌟 Rising Star", "🎨 Creative Mind"],
    progress: 79,
  },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count.toLocaleString()}</span>;
}

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
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="clan-system" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">

      {/* Animated background blobs */}
      {[
        { color: "bg-red-500/10",    size: "w-96 h-96",   pos: "top-10 left-10",    delay: 0 },
        { color: "bg-blue-500/10",   size: "w-80 h-80",   pos: "top-20 right-20",   delay: 1.5 },
        { color: "bg-green-500/10",  size: "w-72 h-72",   pos: "bottom-20 left-1/3",delay: 0.8 },
        { color: "bg-yellow-500/10", size: "w-64 h-64",   pos: "bottom-10 right-10",delay: 2 },
      ].map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute ${blob.size} ${blob.color} ${blob.pos} rounded-full blur-3xl`}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: blob.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: `${5 + i * 5}%`, top: `${10 + (i % 5) * 20}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 font-semibold text-sm mb-6 uppercase tracking-wider border border-white/20 backdrop-blur-sm"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Shield size={14} />
            {isHindi ? "प्रतिस्पर्धा और गौरव" : "Competition & Glory"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-5 leading-tight tracking-tight">
            {isHindi ? "हमारा " : "Our "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {isHindi ? "क्लान सिस्टम" : "Clan System"}
            </span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            {isHindi
              ? "चार क्लान, एक लक्ष्य — माइलस्टोन में उत्कृष्टता का मुकुट जीतना।"
              : "Four clans, one goal — to claim the crown of excellence at The Milestone."}
          </p>
        </motion.div>

        {/* Live leaderboard banner */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Trophy size={16} className="text-yellow-400" />
            <span className="text-white/80 text-sm font-semibold">
              {isHindi ? "लाइव लीडरबोर्ड" : "Live Leaderboard"}
            </span>
            <span className="text-yellow-400 font-bold text-sm">
              {isHindi ? "• फीनिक्स आगे है!" : "• Phoenix leads!"}
            </span>
          </div>
        </motion.div>

        {/* Clan Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {clans.map((clan) => {
            const Icon = clan.icon;
            return (
              <motion.div
                key={clan.name}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group cursor-pointer"
              >
                {/* Glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  style={{ background: clan.color, opacity: 0, filter: "blur(20px)" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ boxShadow: `0 0 40px 10px ${clan.color}` }}
                />

                <div
                  className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm h-full flex flex-col"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {/* Clan color top bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${clan.color}, transparent)` }}
                  />

                  {/* Rank badge */}
                  <div className="absolute top-4 right-4 text-2xl">
                    {rankMedal[clan.rank - 1]}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                      style={{ background: `${clan.color}22`, border: `2px solid ${clan.color}44` }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4 + clan.rank, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon size={32} style={{ color: clan.color }} />
                    </motion.div>

                    {/* Name + Motto */}
                    <div className="text-center mb-5">
                      <h3
                        className="text-2xl font-serif font-extrabold mb-1 group-hover:scale-105 transition-transform"
                        style={{ color: clan.color }}
                      >
                        {isHindi ? clan.nameHi : clan.name}
                      </h3>
                      <p className="text-white/50 text-xs leading-relaxed italic">
                        "{isHindi ? clan.mottoHi : clan.motto}"
                      </p>
                    </div>

                    {/* Captain */}
                    <div className="flex items-center gap-2 mb-5 justify-center">
                      <Crown size={13} style={{ color: clan.color }} />
                      <span className="text-white/60 text-xs">
                        {isHindi ? "कप्तान:" : "Captain:"}{" "}
                        <span className="text-white/90 font-semibold">
                          {isHindi ? clan.captainHi : clan.captain}
                        </span>
                      </span>
                    </div>

                    {/* Points */}
                    <div className="text-center mb-4">
                      <div
                        className="text-4xl font-black tabular-nums"
                        style={{ color: clan.color }}
                      >
                        <CountUp target={clan.points} inView={inView} />
                      </div>
                      <div className="text-white/40 text-xs font-medium uppercase tracking-widest mt-0.5">
                        {isHindi ? "अंक" : "Points"}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs text-white/40 mb-1.5">
                        <span>{isHindi ? "प्रगति" : "Progress"}</span>
                        <span>{clan.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${clan.color}, ${clan.colorMid})` }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${clan.progress}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.4 + clan.rank * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5 justify-center">
                      {clan.badges.map((badge, bi) => (
                        <span
                          key={bi}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: `${clan.color}20`, color: clan.colorMid, border: `1px solid ${clan.color}30` }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-300 mt-auto"
                      style={{
                        background: `linear-gradient(135deg, ${clan.color}33, ${clan.color}11)`,
                        border: `1px solid ${clan.color}50`,
                        color: clan.color,
                      }}
                      whileHover={{ background: clan.color, color: "#fff" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {isHindi ? "विवरण देखें →" : "View Details →"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            { icon: "⚔️", label: isHindi ? "कुल मैच" : "Total Matches",   value: "148" },
            { icon: "🎯", label: isHindi ? "इस सीजन" : "This Season",     value: "2024–25" },
            { icon: "👥", label: isHindi ? "कुल सदस्य" : "Total Members",  value: "480+" },
            { icon: "🏆", label: isHindi ? "पिछला विजेता" : "Last Champion", value: isHindi ? "नेपच्यून" : "Neptune" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl border border-white/10 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-white font-bold text-lg">{stat.value}</div>
              <div className="text-white/40 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
