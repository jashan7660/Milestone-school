import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import {
  Menu, X, Phone, MapPin, ChevronDown, ChevronRight,
  BookText, Users, LayoutGrid, Handshake, User2,
  Sun, Moon, Home, BookOpen, Building2, Trophy, Image,
  GraduationCap, Bell,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logoUrl from "@assets/image_1777543805589.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const ABOUT_HREFS = [
  { href: "/about/story",    icon: BookText   },
  { href: "/about/directors", icon: User2     },
  { href: "/faculty",         icon: Users     },
  { href: "/about/divisions", icon: LayoutGrid },
  { href: "/about/tieups",    icon: Handshake  },
];

const NAV_HREFS = [
  { href: "/",             icon: Home     },
  { href: "/academics",    icon: BookOpen },
  { href: "/facilities",   icon: Building2 },
  { href: "/achievements", icon: Trophy   },
  { href: "/gallery",      icon: Image    },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileAbout, setMobileAbout]   = useState(false);
  const [desktopAbout, setDesktopAbout] = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [hidden, setHidden]             = useState(false);
  const [location, setLocation]         = useLocation();
  const { theme, toggle: toggleTheme }  = useTheme();
  const { lang, setLang }               = useLanguage();
  const t                               = SITE[lang].navbar;
  const ABOUT_ITEMS = ABOUT_HREFS.map((h, i) => ({ ...h, name: t.aboutItems[i].name, desc: t.aboutItems[i].desc }));
  const NAV_LINKS   = NAV_HREFS.map((h, i) => ({ ...h, name: i === 0 ? t.home : t.navLinks[i - 1] }));
  const aboutRef                        = useRef<HTMLDivElement>(null);
  const hoverTimeout                    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY                     = useRef(0);
  const tickerRef                       = useRef<HTMLDivElement>(null);

  /* Scroll behaviour: compact + hide on scroll down, show on scroll up */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > lastScrollY.current + 8 && y > 120) setHidden(true);
      else if (y < lastScrollY.current - 8) setHidden(false);
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

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);
  const isAboutActive = ABOUT_ITEMS.some(i => location.startsWith(i.href)) || location === "/about";

  const handleAboutEnter = () => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); setDesktopAbout(true); };
  const handleAboutLeave = () => { hoverTimeout.current = setTimeout(() => setDesktopAbout(false), 140); };

  return (
    <>
      {/* ── Announcement Ticker ── */}
      <div className="hidden md:block overflow-hidden bg-[#0F172A] text-white text-[11px] py-1.5">
        <div ref={tickerRef} className="flex whitespace-nowrap animate-[ticker_28s_linear_infinite]">
          {[...t.ticker, ...t.ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8">{item}<span className="text-white/30">|</span></span>
          ))}
        </div>
      </div>

      {/* ── Top info bar ── */}
      <div className="hidden md:flex bg-[#1e3a5f] text-white/90 text-xs py-2 px-6 justify-between items-center">
        <div className="flex items-center gap-5">
          <a href="https://maps.google.com/?q=Khurana+Rd+Chiranjeev+Colony+Kaithal+Haryana+136027" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin size={12} /> Khurana Rd, Chiranjeev Colony, Kaithal
          </a>
          <a href="tel:+919812574766" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={12} /> +91 98125-74766
          </a>
        </div>
        <div className="flex items-center gap-4">
          {[
            { href: "https://wa.me/919812574766", icon: <FaWhatsapp size={14} />, hover: "hover:text-green-400", label: "WhatsApp" },
            { href: "https://www.instagram.com/the_milestone_sr_sec_school", icon: <FaInstagram size={14} />, hover: "hover:text-pink-400", label: "Instagram" },
            { href: "https://www.facebook.com/themilestoneschoolkaithal/", icon: <FaFacebook size={14} />, hover: "hover:text-blue-400", label: "Facebook" },
            { href: "https://www.youtube.com/channel/UCOJitGDAsBRroJF_hNdVONg", icon: <FaYoutube size={14} />, hover: "hover:text-red-400", label: "YouTube" },
          ].map(({ href, icon, hover, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className={`transition-all duration-200 ${hover} hover:scale-110`}>{icon}</a>
          ))}

          {/* ── Language Toggle ── */}
          <span className="w-px h-3.5 bg-white/20 mx-1" />
          <div className="relative flex rounded-full"
               style={{ background:"rgba(255,255,255,0.10)", border:"1px solid rgba(255,255,255,0.18)",
                        backdropFilter:"blur(12px)", padding:2 }}>
            <motion.div
              className="absolute top-[2px] bottom-[2px] rounded-full pointer-events-none"
              animate={{ x: lang === "en" ? 0 : "100%" }}
              transition={{ type:"spring", stiffness:500, damping:38 }}
              style={{ width:"calc(50% - 2px)", left:2,
                       background:"linear-gradient(135deg,#3b82f6,#0ea5e9)",
                       boxShadow:"0 0 8px rgba(14,165,233,0.60)" }}/>
            <button
              onClick={() => setLang("en")}
              className="relative z-10 font-bold tracking-wide transition-colors duration-200"
              style={{ fontSize:10, padding:"1px 10px",
                       color: lang === "en" ? "white" : "rgba(255,255,255,0.45)",
                       minWidth:34, textAlign:"center" }}>
              EN
            </button>
            <button
              onClick={() => setLang("hi")}
              className="relative z-10 font-bold tracking-wide transition-colors duration-200"
              style={{ fontSize:10, padding:"1px 10px",
                       color: lang === "hi" ? "white" : "rgba(255,255,255,0.45)",
                       minWidth:34, textAlign:"center" }}>
              हिं
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#0F172A]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] py-1.5"
            : "bg-white dark:bg-[#0F172A] py-2.5 border-b border-border"
        }`}
      >
        {/* Subtle gradient top border on scroll */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, #2563EB, #10B981, #2563EB)" }} />
        )}

        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <button onClick={() => navigate("/")} className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-emerald-500/20 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img src={logoUrl} alt="The Milestone Logo"
                className="relative h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg text-[#2563EB] dark:text-white tracking-tight">The Milestone</span>
              <span className="text-[11px] text-muted-foreground font-medium tracking-wide">Sr. Sec. School · CBSE</span>
            </div>
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* Home */}
            <NavBtn active={isActive("/")} onClick={() => navigate("/")}>
              <Home size={12} /> Home
            </NavBtn>

            {/* About Us — dropdown */}
            <div ref={aboutRef} className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
              <NavBtn active={isAboutActive} onClick={() => navigate("/about/story")}>
                About Us
                <motion.span animate={{ rotate: desktopAbout ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={12} />
                </motion.span>
              </NavBtn>

              <AnimatePresence>
                {desktopAbout && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+10px)] left-0 w-68 rounded-2xl shadow-2xl border border-border/60 overflow-hidden z-50"
                    style={{ width: 272, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)" }}
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    {/* Gradient header */}
                    <div className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-white"
                      style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)" }}>
                      About The Milestone
                    </div>
                    <div className="p-2">
                      {ABOUT_ITEMS.map(({ name, href, icon: Icon, desc }, i) => (
                        <motion.button
                          key={name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.04 }}
                          onClick={() => navigate(href)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group
                            ${isActive(href) ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700"}`}
                        >
                          <div className={`p-1.5 rounded-lg transition-all duration-150 flex-shrink-0
                            ${isActive(href) ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}`}>
                            <Icon size={13} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] font-semibold leading-tight">{name}</div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{desc}</div>
                          </div>
                          <ChevronRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-300" />
                        </motion.button>
                      ))}
                    </div>
                    <div className="mx-3 mb-3 rounded-xl px-3 py-2 text-[11px] font-semibold flex items-center gap-1.5"
                      style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", color: "#2563EB" }}>
                      <Trophy size={11} /> Kaithal's most trusted CBSE school since 2008
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {NAV_LINKS.filter(l => l.href !== "/").map(({ name, href, icon: Icon }) => (
              <NavBtn key={name} active={isActive(href)} onClick={() => navigate(href)}>
                <Icon size={12} /> {name}
              </NavBtn>
            ))}
          </nav>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-2">

            {/* Admissions Open — glowing CTA */}
            <button
              onClick={() => navigate("/admissions")}
              className="hidden md:flex items-center gap-2 px-5 h-9 rounded-full text-sm font-bold text-white relative overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)", boxShadow: "0 4px 20px rgba(37,99,235,0.40)" }}
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <GraduationCap size={14} />
              Admissions Open
              {/* Pulse dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
            </button>

            {/* Bell */}
            <button className="hidden md:flex p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted transition-all duration-200 relative group" aria-label="Notifications">
              <Bell size={17} className="group-hover:animate-[ring_0.4s_ease-in-out]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-background" />
            </button>

            {/* Dark/Light toggle */}
            <button onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-muted transition-all duration-200"
              aria-label="Toggle theme">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="block">
                  {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>

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

              <MobileNavBtn active={isActive("/")} onClick={() => navigate("/")} icon={<Home size={16}/>}>Home</MobileNavBtn>

              {/* About accordion */}
              <div>
                <button
                  onClick={() => setMobileAbout(v => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${isAboutActive ? "bg-blue-600 text-white" : "text-foreground hover:bg-slate-100 dark:hover:bg-white/5"}`}
                >
                  <span className="flex items-center gap-2.5"><User2 size={16} /> About Us</span>
                  <motion.span animate={{ rotate: mobileAbout ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={15} className="opacity-60" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileAbout && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-3 mt-1 flex flex-col gap-1"
                    >
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

              <button
                onClick={() => navigate("/admissions")}
                className="mt-3 w-full flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-bold text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #2563EB, #10B981)", boxShadow: "0 4px 16px rgba(37,99,235,0.35)" }}
              >
                <GraduationCap size={16} /> Admissions Open 2026–27
              </button>

              <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-2 text-xs text-muted-foreground px-1">
                <a href="tel:+919812574766" className="flex items-center gap-2 hover:text-foreground transition-colors"><Phone size={12} /> +91 98125-74766</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Small helpers ── */
function NavBtn({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 group
        ${active ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20" : "text-foreground/70 hover:text-blue-600 hover:bg-blue-50/60 dark:hover:bg-white/5"}`}
    >
      {children}
      {/* Underline slide */}
      <span className={`absolute bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-transform duration-200 origin-left
        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
    </button>
  );
}

function MobileNavBtn({ children, active, onClick, icon }: { children: React.ReactNode; active: boolean; onClick: () => void; icon: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
        ${active ? "bg-blue-600 text-white" : "text-foreground hover:bg-slate-100 dark:hover:bg-white/5"}`}>
      <span className="flex items-center gap-2.5">{icon}{children}</span>
      <ChevronRight size={14} className="opacity-40" />
    </button>
  );
}
