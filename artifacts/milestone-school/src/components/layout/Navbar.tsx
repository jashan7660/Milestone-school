import { useState, useEffect, useCallback, useRef, memo } from "react";
import { useLocation } from "wouter";
import {
  Menu, X, Phone, MapPin, ChevronDown, ChevronRight,
  BookText, Users, LayoutGrid, User2,
  Home, BookOpen, Building2, Trophy, Image,
  GraduationCap, Palette, Check,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logoUrl from "@assets/image_1777543805589.png";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { usePalette, PALETTES } from "@/context/PaletteContext";
import { SITE } from "@/i18n/translations";

/* ── Ticker extracted as memo so Navbar re-renders never reset the animation ── */
const TickerBand = memo(function TickerBand({ items }: { items: string[] }) {
  return (
    <div className="hidden md:block overflow-hidden bg-[#0F172A] text-white text-[11px] py-1.5">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 32s linear infinite", willChange: "transform", animationPlayState: "running" }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-8">{item}<span className="text-white/30">|</span></span>
        ))}
      </div>
    </div>
  );
});

const ABOUT_HREFS = [
  { href: "/about/story",     icon: BookText   },
  { href: "/about/directors", icon: User2      },
  { href: "/faculty",         icon: Users      },
  { href: "/about/divisions", icon: LayoutGrid },
];

const NAV_HREFS = [
  { href: "/",             icon: Home      },
  { href: "/academics",    icon: BookOpen  },
  { href: "/facilities",   icon: Building2 },
  { href: "/achievements", icon: Trophy    },
  { href: "/gallery",      icon: Image     },
];

export default function Navbar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [mobileAbout,  setMobileAbout]  = useState(false);
  const [desktopAbout, setDesktopAbout] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [location, setLocation]         = useLocation();
  const { lang, setLang }               = useLanguage();
  const { palette, setPalette }         = usePalette();
  const t                               = SITE[lang].navbar;
  const ABOUT_ITEMS = ABOUT_HREFS.map((h, i) => ({ ...h, name: t.aboutItems[i].name, desc: t.aboutItems[i].desc }));
  const NAV_LINKS   = NAV_HREFS.map((h, i) => ({ ...h, name: i === 0 ? t.home : t.navLinks[i - 1] }));
  const aboutRef      = useRef<HTMLDivElement>(null);
  const hoverTimeout  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY   = useRef(0);
  const tickerRef     = useRef<HTMLDivElement>(null);

  /* Scroll behaviour */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useCallback((href: string) => {
    setMobileOpen(false); setMobileAbout(false); setDesktopAbout(false);
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [setLocation]);

  const isActive      = (href: string) => href === "/" ? location === "/" : location.startsWith(href);
  const isAboutActive = ABOUT_ITEMS.some(i => location.startsWith(i.href)) || location === "/about";
  const handleAboutEnter = () => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); setDesktopAbout(true); };
  const handleAboutLeave = () => { hoverTimeout.current = setTimeout(() => setDesktopAbout(false), 140); };

  return (
    <>
      {/* ── Sticky wrapper: ticker + info bar + main nav all stick together ── */}
      <div className="sticky top-0 z-50">

      {/* ── Announcement Ticker ── */}
      <TickerBand items={t.ticker} />

      {/* ── Top info bar ── */}
      <div className="hidden md:flex bg-[#1e3a5f] text-white/90 text-xs py-2 px-6 justify-between items-center">
        <div className="flex items-center gap-5">
          <a href="https://maps.google.com/?q=Khurana+Rd+Chiranjeev+Colony+Kaithal+Haryana+136027"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin size={12} /> {t.address}
          </a>
          <a href="tel:+919812574766" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={12} /> +91 98125-74766
          </a>
        </div>
        <div className="flex items-center gap-4">
          {[
            { href: "https://wa.me/919812574766",                                    icon: <FaWhatsapp size={16} />, color: "#25D366", hoverColor: "#1ebe57", label: "WhatsApp" },
            { href: "https://www.instagram.com/the_milestone_sr_sec_school",         icon: <FaInstagram size={16} />, color: "#E1306C", hoverColor: "#ff4d8d", label: "Instagram" },
            { href: "https://www.facebook.com/themilestoneschoolkaithal/",           icon: <FaFacebook size={16} />, color: "#1877F2", hoverColor: "#4a9aff", label: "Facebook" },
            { href: "https://www.youtube.com/channel/UCOJitGDAsBRroJF_hNdVONg",     icon: <FaYoutube size={16} />,  color: "#FF0000", hoverColor: "#ff4444", label: "YouTube" },
          ].map(({ href, icon, color, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ color }}
              className="transition-all duration-200 hover:scale-125 hover:brightness-125">{icon}</a>
          ))}

          {/* Language Toggle */}
          <span className="w-px h-3.5 bg-white/20 mx-1" />
          <div className="relative flex rounded-full"
            style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(12px)", padding: 2 }}>
            <motion.div
              className="absolute top-[2px] bottom-[2px] rounded-full pointer-events-none"
              animate={{ x: lang === "en" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
              style={{ width: "calc(50% - 2px)", left: 2, background: "linear-gradient(135deg,#3b82f6,#0ea5e9)", boxShadow: "0 0 8px rgba(14,165,233,0.60)" }}/>
            <button onClick={() => setLang("en")} className="relative z-10 font-bold tracking-wide transition-colors duration-200"
              style={{ fontSize: 10, padding: "1px 10px", color: lang === "en" ? "white" : "rgba(255,255,255,0.45)", minWidth: 34, textAlign: "center" }}>EN</button>
            <button onClick={() => setLang("hi")} className="relative z-10 font-bold tracking-wide transition-colors duration-200"
              style={{ fontSize: 10, padding: "1px 10px", color: lang === "hi" ? "white" : "rgba(255,255,255,0.45)", minWidth: 34, textAlign: "center" }}>हिं</button>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#0F172A]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] py-1.5"
            : "bg-white dark:bg-[#0F172A] py-2.5 border-b border-border"
        }`}
      >
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, ${palette.primary}, ${palette.secondary}, ${palette.primary})` }} />
        )}

        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-emerald-500/20 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img src={logoUrl} alt="The Milestone Logo"
                className="relative h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg text-primary dark:text-white tracking-tight">The Milestone</span>
              <span className="text-[11px] text-muted-foreground font-medium tracking-wide">Sr. Sec. School · CBSE</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <NavBtn active={isActive("/")} onClick={() => navigate("/")}>
              <Home size={12} /> {t.home}
            </NavBtn>

            {/* About dropdown */}
            <div ref={aboutRef} className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
              <NavBtn active={isAboutActive} onClick={() => navigate("/about/story")}>
                {t.aboutUs}
                <motion.span animate={{ rotate: desktopAbout ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={12} />
                </motion.span>
              </NavBtn>
              <AnimatePresence>
                {desktopAbout && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+10px)] left-0 z-50 overflow-hidden"
                    style={{
                      width: 278,
                      borderRadius: 18,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.07)",
                      background: "white",
                    }}
                    onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}
                  >
                    {/* ── Slim gradient accent bar ── */}
                    <div className="relative px-4 py-3 overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)` }}>
                      <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.5)" }}/>
                      <div className="absolute -bottom-5 -left-2 w-12 h-12 rounded-full opacity-15" style={{ background: "rgba(255,255,255,0.4)" }}/>
                      <p className="relative text-[9px] font-bold tracking-[0.2em] uppercase text-white/60 mb-0.5">Explore</p>
                      <p className="relative text-[13px] font-extrabold text-white leading-tight">{t.aboutHeader}</p>
                    </div>

                    {/* ── Items ── */}
                    <div className="p-2">
                      {ABOUT_ITEMS.map(({ name, href, icon: Icon, desc }, i) => {
                        const active = isActive(href);
                        const iconGrads = [
                          "linear-gradient(135deg,#3b82f6,#06b6d4)",
                          "linear-gradient(135deg,#8b5cf6,#a855f7)",
                          "linear-gradient(135deg,#f59e0b,#ef4444)",
                          "linear-gradient(135deg,#10b981,#059669)",
                        ];
                        return (
                          <motion.button key={name}
                            initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.045 }}
                            onClick={() => navigate(href)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-[13px] text-left group transition-all duration-150 relative overflow-hidden"
                            style={{
                              background: active ? `${palette.primary}10` : "transparent",
                              border: `1px solid ${active ? palette.primary + "30" : "transparent"}`,
                            }}
                          >
                            {/* hover shimmer */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-[13px]"
                              style={{ background: "linear-gradient(135deg,#f8faff,#eef4ff)" }}/>
                            {/* coloured icon */}
                            <div className="relative z-10 w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm transition-transform duration-150 group-hover:scale-110"
                              style={{ background: active ? palette.primary : iconGrads[i] }}>
                              <Icon size={14} color="white" strokeWidth={2.3}/>
                            </div>
                            <div className="relative z-10 flex-1 min-w-0">
                              <div className={`text-[12.5px] font-bold leading-tight transition-colors duration-150 ${active ? "" : "text-slate-700 group-hover:text-slate-900"}`}
                                style={ active ? { color: palette.primary } : undefined }>{name}</div>
                              <div className="text-[10.5px] text-slate-400 mt-0.5 truncate">{desc}</div>
                            </div>
                            <ChevronRight size={11} className="relative z-10 flex-shrink-0 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150"/>
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* ── Footer trust strip ── */}
                    <div className="mx-2.5 mb-2.5 rounded-[13px] px-3 py-2 flex items-center gap-2"
                      style={{ background: `linear-gradient(135deg,${palette.primary}10,${palette.secondary}18)`, border: `1px solid ${palette.primary}22` }}>
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg,${palette.primary},${palette.secondary})` }}>
                        <Trophy size={10} color="white"/>
                      </div>
                      <span className="text-[11px] font-semibold leading-tight" style={{ color: palette.primary }}>{t.trusted}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.filter(l => l.href !== "/").map(({ name, href, icon: Icon }) => (
              <NavBtn key={name} active={isActive(href)} onClick={() => navigate(href)}>
                <Icon size={12} /> {name}
              </NavBtn>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-1.5">

            {/* Admissions CTA */}
            <motion.div onClick={() => navigate("/admissions")}
              whileHover={{ scale:1.06 }} whileTap={{ scale:0.95 }}
              className="hidden md:flex relative rounded-full cursor-pointer"
              style={{ padding:"1.5px" }}>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div className="absolute"
                  style={{ width:"200%", height:"200%", top:"-50%", left:"-50%",
                    background:"conic-gradient(from 0deg,#16a34a,#4ade80,#f59e0b,#fbbf24,#22c55e,#16a34a)" }}
                  animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:3, ease:"linear" }}/>
              </div>
              <div className="relative z-10 flex items-center gap-2 px-5 h-9 rounded-full text-sm font-bold text-white"
                style={{ background:"rgba(6,10,28,0.92)", backdropFilter:"blur(16px)" }}>
                <GraduationCap size={14} />
                {t.admissionsOpen}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
              </div>
            </motion.div>

            {/* Hamburger */}
            <button className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={mobileOpen ? "x" : "m"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="block">
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sticky top-0 z-40 lg:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-border shadow-2xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <MobileNavBtn active={isActive("/")} onClick={() => navigate("/")} icon={<Home size={16}/>}>{t.home}</MobileNavBtn>

              {/* About accordion */}
              <div>
                <button onClick={() => setMobileAbout(v => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${isAboutActive ? "text-white" : "text-foreground hover:bg-slate-100 dark:hover:bg-white/5"}`}
                  style={ isAboutActive ? { background: palette.primary } : undefined }>
                  <span className="flex items-center gap-2.5"><User2 size={16} /> {t.aboutUs}</span>
                  <motion.span animate={{ rotate: mobileAbout ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={15} className="opacity-60" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileAbout && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-3 mt-1 flex flex-col gap-1">
                      {ABOUT_ITEMS.map(({ name, href, icon: Icon, desc }) => (
                        <button key={name} onClick={() => navigate(href)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left
                            ${isActive(href) ? "bg-blue-50 text-blue-700 font-semibold" : "text-foreground/80 hover:bg-slate-50 dark:hover:bg-white/5"}`}>
                          <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600 shrink-0"><Icon size={13} /></div>
                          <div><div className="font-semibold text-[13px]">{name}</div><div className="text-[11px] text-muted-foreground">{desc}</div></div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {NAV_LINKS.filter(l => l.href !== "/").map(({ name, href, icon: Icon }) => (
                <MobileNavBtn key={name} active={isActive(href)} onClick={() => navigate(href)} icon={<Icon size={16}/>}>{name}</MobileNavBtn>
              ))}

              {/* Mobile palette switcher */}
              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1 flex items-center gap-1.5">
                  <Palette size={11}/> {lang === "hi" ? "थीम चुनें" : "Choose Theme"}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {PALETTES.map(p => {
                    const isSelected = p.id === palette.id;
                    return (
                      <button key={p.id} onClick={() => setPalette(p.id)}
                        className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all duration-200 relative"
                        style={{
                          background: isSelected ? `${p.primary}18` : "transparent",
                          border: `1.5px solid ${isSelected ? p.primary : "transparent"}`,
                        }}>
                        <div className="w-8 h-8 rounded-lg relative overflow-hidden shadow-sm"
                          style={{ background: `linear-gradient(135deg, ${p.primary}, ${p.secondary})` }}>
                          {isSelected && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <Check size={12} className="text-white" strokeWidth={3}/>
                            </div>
                          )}
                        </div>
                        <span className="text-[9px] font-semibold text-center leading-tight text-slate-600 truncate w-full">
                          {lang === "hi" ? p.nameHI : p.nameEN}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.div onClick={() => navigate("/admissions")}
                whileHover={{ scale:1.03 }} whileTap={{ scale:0.96 }}
                className="mt-3 w-full relative rounded-xl cursor-pointer"
                style={{ padding:"1.5px" }}>
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <motion.div className="absolute"
                    style={{ width:"200%", height:"200%", top:"-50%", left:"-50%",
                      background:"conic-gradient(from 0deg,#16a34a,#4ade80,#f59e0b,#fbbf24,#22c55e,#16a34a)" }}
                    animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:3, ease:"linear" }}/>
                </div>
                <div className="relative z-10 w-full flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-bold text-white"
                  style={{ background:"rgba(6,10,28,0.92)", backdropFilter:"blur(16px)" }}>
                  <GraduationCap size={16} /> {t.mobileAdmissions}
                </div>
              </motion.div>

              <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-2 text-xs text-muted-foreground px-1">
                <a href="tel:+919812574766" className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone size={12} /> +91 98125-74766</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      </div>{/* ── end sticky wrapper ── */}
    </>
  );
}

/* ── Small helpers ── */
function NavBtn({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 group
        ${active ? "text-primary bg-primary/8 dark:bg-primary/15" : "text-foreground/70 hover:text-primary hover:bg-primary/6 dark:hover:bg-white/5"}`}
    >
      {children}
      <span className={`absolute bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-200 origin-left
        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
    </button>
  );
}

function MobileNavBtn({ children, active, onClick, icon }: { children: React.ReactNode; active: boolean; onClick: () => void; icon: React.ReactNode }) {
  const { palette } = usePalette();
  return (
    <button onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${active ? "text-white" : "text-foreground hover:bg-slate-100 dark:hover:bg-white/5"}`}
      style={ active ? { background: palette.primary } : undefined }>
      <span className="flex items-center gap-2.5">{icon}{children}</span>
      <ChevronRight size={14} className="opacity-40" />
    </button>
  );
}
