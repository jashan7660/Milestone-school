import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import {
  Menu, X, Phone, MapPin,
  Home, BookOpen, Building2, Trophy, Image, ChevronDown, ChevronRight,
  BookText, Users, LayoutGrid, Handshake, User2,
  Sun, Moon,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/image_1777543805589.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const ABOUT_ITEMS = [
  { name: "Our Story",     href: "/about/story",     icon: BookText,   desc: "History, vision & values" },
  { name: "Our Directors", href: "/about/directors",  icon: User2,      desc: "Leadership & management" },
  { name: "Our Faculty",   href: "/faculty",          icon: Users,      desc: "Meet our dedicated teachers" },
  { name: "Divisions",     href: "/about/divisions",  icon: LayoutGrid, desc: "Academic sections & wings" },
  { name: "Tie-ups",       href: "/about/tieups",     icon: Handshake,  desc: "Partnerships & collaborations" },
];

const NAV_LINKS = [
  { name: "Home",         href: "/",               icon: Home },
  { name: "Academics",    href: "/academics",      icon: BookOpen },
  { name: "Facilities",   href: "/facilities",     icon: Building2 },
  { name: "Achievements", href: "/achievements",   icon: Trophy },
  { name: "Gallery",      href: "/gallery",        icon: Image },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileAbout, setMobileAbout]     = useState(false);
  const [desktopAbout, setDesktopAbout]   = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [location, setLocation]           = useLocation();
  const { theme, toggle: toggleTheme }    = useTheme();
  const aboutRef                          = useRef<HTMLDivElement>(null);
  const hoverTimeout                      = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useCallback((href: string) => {
    setMobileOpen(false);
    setMobileAbout(false);
    setDesktopAbout(false);
    if (href === "#admissions") {
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" }), 350);
      } else {
        document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    setLocation(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [setLocation, location]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isAboutActive = ABOUT_ITEMS.some(i => location.startsWith(i.href)) || location === "/about";

  /* Desktop hover: open immediately, close with small delay so user can move to dropdown */
  const handleAboutEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDesktopAbout(true);
  };
  const handleAboutLeave = () => {
    hoverTimeout.current = setTimeout(() => setDesktopAbout(false), 120);
  };

  return (
    <>
      {/* ── Top info bar ── */}
      <div className="hidden md:flex bg-primary text-primary-foreground text-xs py-2 px-6 justify-between items-center">
        {/* Left: location & contact */}
        <div className="flex items-center gap-5">
          <a
            href="https://maps.google.com/?q=Opp.+Pawan+Vatika,+Khurana+Rd,+Kaithal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <MapPin size={13} /> Opp. Pawan Vatika, Khurana Rd, Kaithal
          </a>
          <a
            href="tel:+919812574766"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Phone size={13} /> +91 98125-74766
          </a>
        </div>
        {/* Right: social media icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/919812574766"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-300 transition-colors"
          >
            <FaWhatsapp size={15} />
          </a>
          <a
            href="https://www.instagram.com/the_milestone_sr_sec_school?igsh=MTZtYmk4aHN3dWxjNA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-300 transition-colors"
          >
            <FaInstagram size={15} />
          </a>
          <a
            href="https://www.facebook.com/themilestoneschoolkaithal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-300 transition-colors"
          >
            <FaFacebook size={15} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOJitGDAsBRroJF_hNdVONg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-300 transition-colors"
          >
            <FaYoutube size={15} />
          </a>
        </div>
      </div>

      {/* ── Sticky header ── */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-background/95 backdrop-blur-md shadow-lg py-2"
                 : "bg-white dark:bg-background py-3 border-b border-border"
      }`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-3 group shrink-0">
            <img src={logoUrl} alt="The Milestone Logo" className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg text-primary">The Milestone</span>
              <span className="text-[11px] text-muted-foreground font-medium tracking-wide">Sr. Sec. School · CBSE</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <button
              onClick={() => navigate("/")}
              className={`relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200
                ${isActive("/") ? "text-primary bg-primary/10" : "text-foreground/75 hover:text-primary hover:bg-primary/8"}`}
            >
              <Home size={13} /> Home
              {isActive("/") && <motion.span layoutId="nav-pill" className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
            </button>

            {/* About Us — dropdown */}
            <div
              ref={aboutRef}
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                onClick={() => navigate("/about/story")}
                className={`relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200
                  ${isAboutActive ? "text-primary bg-primary/10" : "text-foreground/75 hover:text-primary hover:bg-primary/8"}`}
              >
                About Us
                <motion.span
                  animate={{ rotate: desktopAbout ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={13} />
                </motion.span>
                {isAboutActive && <motion.span layoutId="nav-pill" className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {desktopAbout && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[calc(100%+8px)] left-0 w-64 bg-white dark:bg-card rounded-2xl shadow-2xl border border-border overflow-hidden z-50"
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    <div className="p-2">
                      {ABOUT_ITEMS.map(({ name, href, icon: Icon, desc }) => (
                        <button
                          key={name}
                          onClick={() => navigate(href)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group
                            ${isActive(href) ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"}`}
                        >
                          <div className={`p-1.5 rounded-lg transition-colors duration-150 ${isActive(href) ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"}`}>
                            <Icon size={14} />
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold leading-tight">{name}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">{desc}</div>
                          </div>
                          <ChevronRight size={13} className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-muted-foreground" />
                        </button>
                      ))}
                    </div>
                    <div className="mx-3 mb-2 bg-primary/6 rounded-xl px-3 py-2 text-[11px] text-primary font-medium flex items-center gap-1.5">
                      <Trophy size={11} /> Kaithal's most trusted CBSE school since 2008
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {NAV_LINKS.filter(l => l.href !== "/").map(({ name, href, icon: Icon }) => (
              <button
                key={name}
                onClick={() => navigate(href)}
                className={`relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200
                  ${isActive(href) ? "text-primary bg-primary/10" : "text-foreground/75 hover:text-primary hover:bg-primary/8"}`}
              >
                <Icon size={13} />
                {name}
                {isActive(href) && <motion.span layoutId="nav-pill" className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
              </button>
            ))}
          </nav>

          {/* Right side: CTA + theme + burger */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate("#admissions")}
              className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full px-5 h-9 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Admissions Open
            </Button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="block">
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={mobileOpen ? "close" : "open"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="block">
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sticky top-[57px] z-40 lg:hidden bg-white dark:bg-card border-b border-border shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">

              {/* Home */}
              <button
                onClick={() => navigate("/")}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                  ${isActive("/") ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted hover:text-primary"}`}
              >
                <span className="flex items-center gap-2.5"><Home size={16} /> Home</span>
                <ChevronRight size={15} className="opacity-50" />
              </button>

              {/* About Us accordion */}
              <div>
                <button
                  onClick={() => setMobileAbout(v => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${isAboutActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted hover:text-primary"}`}
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
                        <button
                          key={name}
                          onClick={() => navigate(href)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 text-left
                            ${isActive(href) ? "bg-primary/10 text-primary font-semibold" : "text-foreground/80 hover:bg-muted hover:text-primary"}`}
                        >
                          <div className="bg-primary/10 p-1.5 rounded-lg text-primary shrink-0"><Icon size={13} /></div>
                          <div>
                            <div className="font-semibold text-[13px] leading-tight">{name}</div>
                            <div className="text-[11px] text-muted-foreground">{desc}</div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other links */}
              {NAV_LINKS.filter(l => l.href !== "/").map(({ name, href, icon: Icon }) => (
                <button
                  key={name}
                  onClick={() => navigate(href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${isActive(href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted hover:text-primary"}`}
                >
                  <span className="flex items-center gap-2.5"><Icon size={16} /> {name}</span>
                  <ChevronRight size={15} className="opacity-50" />
                </button>
              ))}

              <Button
                onClick={() => navigate("#admissions")}
                className="mt-3 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold h-11 rounded-xl text-sm"
              >
                Admissions Open 2026-2027
              </Button>

              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2 text-xs text-muted-foreground px-1">
                <span className="flex items-center gap-2"><Phone size={12} /> +91 98125-74766</span>
                <span className="flex items-center gap-2"><Mail size={12} /> themilestoneKtl@gmail.com</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
