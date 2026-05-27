import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, RotateCcw, Sparkles, BookOpen, Clock, Phone, MapPin, Bus, Trophy, Image } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TOUR_STEPS, CHAT_RESPONSES, SUGGESTIONS_TEXT, UI } from "@/i18n/translations";
import type { Lang } from "@/i18n/translations";

/* ─── Palette ──────────────────────────────────────────────── */
const NEON       = "#00ff88";
const CYAN       = "#00d9ff";
const BLUE       = "#1145b5";
const GLASS      = "rgba(8,12,28,0.88)";
const GLASS_LIGHT = "rgba(8,12,28,0.72)";

/* ─── Premium Language Toggle ──────────────────────────────── */
function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="relative flex rounded-full"
         style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.15)",
                  backdropFilter:"blur(12px)", padding:2,
                  boxShadow:`0 2px 12px rgba(0,0,0,0.35)` }}>
      <motion.div
        className="absolute top-[2px] bottom-[2px] rounded-full pointer-events-none"
        animate={{ x: lang === "en" ? 0 : "100%" }}
        transition={{ type:"spring", stiffness:500, damping:38 }}
        style={{ width:"calc(50% - 2px)", left:2,
                 background:`linear-gradient(135deg,${BLUE},${CYAN})`,
                 boxShadow:`0 0 10px ${CYAN}70, 0 0 20px ${BLUE}50` }}/>
      <button
        onClick={() => setLang("en")}
        className="relative z-10 px-3 py-0.5 text-[10px] font-bold rounded-full transition-colors duration-200"
        style={{ color: lang === "en" ? "white" : "rgba(255,255,255,0.35)",
                 minWidth:36, textAlign:"center" }}>
        EN
      </button>
      <button
        onClick={() => setLang("hi")}
        className="relative z-10 px-3 py-0.5 text-[10px] font-bold rounded-full transition-colors duration-200"
        style={{ color: lang === "hi" ? "white" : "rgba(255,255,255,0.35)",
                 minWidth:36, textAlign:"center" }}>
        हिं
      </button>
    </div>
  );
}

/* ─── Bot response logic ────────────────────────────────────── */
function getBotResponse(input: string, lang: Lang): string {
  const lower = input.toLowerCase();
  for (const item of CHAT_RESPONSES[lang]) {
    if (item.keywords.some(k => lower.includes(k))) return item.response;
  }
  return UI[lang].defaultReply;
}

type Mode = "idle" | "tour" | "chat";
interface ChatMsg { from: "user" | "bot"; text: string; }

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function AIGuide() {
  const { lang, setLang }       = useLanguage();
  const t                       = UI[lang];
  const tourSteps               = TOUR_STEPS[lang];
  const suggestions             = SUGGESTIONS_TEXT[lang];

  const [mode, setMode]         = useState<Mode>("idle");
  const [tourStep, setTourStep] = useState(0);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { from:"bot", text: UI[lang].welcomeMsg },
  ]);
  const [input, setInput]       = useState("");
  const [thinking, setThinking] = useState(false);
  const [, navigate]            = useLocation();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Reset welcome message when language changes */
  useEffect(() => {
    setMessages([{ from:"bot", text: UI[lang].welcomeMsg }]);
  }, [lang]);

  const audioRef      = useRef<HTMLAudioElement | null>(null);
  const nextStepRef   = useRef<() => void>(() => {});
  const chatEndRef    = useRef<HTMLDivElement>(null);
  const msgBoxRef     = useRef<HTMLDivElement>(null);
  const scrollRafRef  = useRef<number | null>(null);

  const cancelPageScroll = useCallback(() => {
    if (scrollRafRef.current) { cancelAnimationFrame(scrollRafRef.current); scrollRafRef.current = null; }
  }, []);

  const startPageScroll = useCallback((durationSec: number) => {
    cancelPageScroll();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      const totalMs = Math.max(durationSec * 1000, 1000);
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / totalMs, 1);
        const e = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2, 2)/2;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max > 0) window.scrollTo(0, max * e);
        if (p < 1) scrollRafRef.current = requestAnimationFrame(tick);
      };
      scrollRafRef.current = requestAnimationFrame(tick);
    }, 600);
  }, [cancelPageScroll]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current = null;
    }
    cancelPageScroll();
  }, [cancelPageScroll]);

  useEffect(() => () => { stopAudio(); }, [stopAudio]);

  const scrollMsgBox = useCallback(() => {
    if (msgBoxRef.current) msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
  }, []);

  const playTourAudio = useCallback((step: number) => {
    stopAudio();
    const audio = new Audio(`/audio/tour-${step}.mp3`);
    audioRef.current = audio;
    audio.onended = () => { audioRef.current = null; nextStepRef.current(); };
    audio.addEventListener("loadedmetadata", () => { startPageScroll(audio.duration); });
    audio.play().catch(() => {});
  }, [stopAudio, startPageScroll]);

  const startStep = useCallback((step: number) => {
    if (step >= tourSteps.length) {
      stopAudio();
      setMode("idle"); setTourStep(0); navigate("/");
      window.scrollTo({ top:0, behavior:"smooth" }); return;
    }
    stopAudio(); setTourStep(step);
    navigate(tourSteps[step].path);
    nextStepRef.current = () => startStep(step + 1);
    playTourAudio(step);
  }, [navigate, playTourAudio, stopAudio, tourSteps]);

  const startTour = useCallback(() => { setMode("tour"); startStep(0); }, [startStep]);
  const stopTour  = useCallback(() => {
    stopAudio(); setMode("idle"); setTourStep(0);
    window.scrollTo({ top:0, behavior:"smooth" });
  }, [stopAudio]);
  const nextStep = useCallback(() => { startStep(tourStep + 1); }, [startStep, tourStep]);
  const prevStep = useCallback(() => { startStep(Math.max(0, tourStep - 1)); }, [startStep, tourStep]);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages]);

  const sendMessage = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages(m => [...m, { from:"user", text:msg }]);
    setInput(""); setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages(m => [...m, { from:"bot", text: getBotResponse(msg, lang) }]);
    }, 700);
  };

  const step        = tourSteps[tourStep];
  const panelWidth  = isMobile ? Math.min(window.innerWidth - 24, 320) : 340;

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-4 z-[9998] flex flex-col items-end gap-2 sm:gap-3 select-none"
         style={{ fontFamily:"'Poppins',sans-serif" }}>

      {/* ══ TOUR PANEL ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {mode === "tour" && (
          <motion.div key="tour"
            initial={{ opacity:0, y:28, scale:0.88 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:0.90 }}
            transition={{ type:"spring", stiffness:340, damping:28 }}
            className="overflow-hidden relative"
            style={{
              width: panelWidth,
              background: GLASS,
              backdropFilter:"blur(28px)",
              WebkitBackdropFilter:"blur(28px)",
              borderRadius:22,
              border:`1px solid rgba(0,255,136,0.25)`,
              boxShadow:`0 0 0 1px rgba(0,217,255,0.08), 0 20px 60px rgba(0,0,0,0.60), 0 0 40px rgba(0,255,136,0.08)`,
            }}>

            {/* Animated neon border top */}
            <motion.div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[22px]"
              style={{ background:`linear-gradient(90deg,transparent,${NEON},${CYAN},${NEON},transparent)` }}
              animate={{ opacity:[0.6,1,0.6] }} transition={{ repeat:Infinity, duration:2.5 }}/>

            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2.5"
                 style={{ borderBottom:`1px solid rgba(255,255,255,0.06)` }}>
              <div className="flex items-center gap-2">
                <motion.div className="relative w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${BLUE},#0a2a7a)`,
                           boxShadow:`0 0 12px ${NEON}60, 0 0 24px ${CYAN}30` }}
                  animate={{ boxShadow:[`0 0 10px ${NEON}50,0 0 20px ${CYAN}20`,`0 0 18px ${NEON}80,0 0 36px ${CYAN}40`,`0 0 10px ${NEON}50,0 0 20px ${CYAN}20`] }}
                  transition={{ repeat:Infinity, duration:2 }}>
                  <span style={{ fontSize:13 }}>🤖</span>
                  <motion.div className="absolute bottom-0.5 left-1 w-1 h-1 rounded-full"
                    style={{ background:NEON }}
                    animate={{ scaleY:[1,0.1,1] }} transition={{ repeat:Infinity, duration:3.5, delay:0.3 }}/>
                  <motion.div className="absolute bottom-0.5 right-1 w-1 h-1 rounded-full"
                    style={{ background:NEON }}
                    animate={{ scaleY:[1,0.1,1] }} transition={{ repeat:Infinity, duration:3.5, delay:0.5 }}/>
                </motion.div>
                <div>
                  <div style={{ fontWeight:800, fontSize:11, color:"white", letterSpacing:"0.01em", lineHeight:1.2 }}>
                    <AnimatePresence mode="wait">
                      <motion.span key={t.millieTour}
                        initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:-4 }} transition={{ duration:0.2 }}>
                        {t.millieTour}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div style={{ fontSize:8, color:NEON, fontWeight:700, letterSpacing:"0.08em", marginTop:1 }}>
                    {t.aiSubtitleTour}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Language Toggle — premium, inside panel */}
                <LangToggle lang={lang} setLang={setLang}/>
                {/* Step counter pill */}
                <div className="px-1.5 py-0.5 rounded-full text-[9px] font-bold"
                     style={{ background:`rgba(0,255,136,0.12)`, color:NEON, border:`1px solid ${NEON}40` }}>
                  {tourStep+1}/{tourSteps.length}
                </div>
                <motion.button onClick={stopTour} whileHover={{ scale:1.15 }} whileTap={{ scale:0.9 }}
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.55)" }}>
                  <X size={11}/>
                </motion.button>
              </div>
            </div>

            <div className="px-4 pt-3 pb-4">
              {/* Step icon + title */}
              <AnimatePresence mode="wait">
                <motion.div key={tourStep+"-title-"+lang}
                  initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
                  exit={{ opacity:0, x:12 }}
                  transition={{ duration:0.3 }}
                  className="flex items-center gap-2 mb-3">
                  <motion.div className="w-9 h-9 rounded-xl flex items-center justify-center text-[18px] flex-shrink-0"
                    style={{ background:`linear-gradient(135deg,rgba(0,255,136,0.15),rgba(0,217,255,0.10))`,
                             border:`1px solid rgba(0,255,136,0.25)`,
                             boxShadow:`0 0 14px rgba(0,255,136,0.15)` }}
                    animate={{ boxShadow:[`0 0 10px rgba(0,255,136,0.10)`,`0 0 22px rgba(0,255,136,0.25)`,`0 0 10px rgba(0,255,136,0.10)`] }}
                    transition={{ repeat:Infinity, duration:2.2 }}>
                    {step.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:800, color:"white", lineHeight:1.2 }}>{step.title}</div>
                    <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.35)", fontWeight:500 }}>
                      {t.pageOf} {tourStep+1} {t.of} {tourSteps.length}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Message box */}
              <AnimatePresence mode="wait">
                <motion.div key={tourStep+"-msg-"+lang}
                  initial={{ opacity:0 }} animate={{ opacity:1 }}
                  exit={{ opacity:0 }}
                  transition={{ duration:0.25 }}
                  ref={msgBoxRef}
                  className="rounded-[14px] p-3 mb-3"
                  style={{
                    background:"rgba(255,255,255,0.04)",
                    border:`1px solid rgba(255,255,255,0.08)`,
                    minHeight:90, maxHeight:150, overflowY:"auto",
                    scrollbarWidth:"thin",
                    scrollbarColor:`${NEON}30 transparent`,
                  }}>
                  <TypewriterText key={tourStep+"-"+lang} text={step.message} onScroll={scrollMsgBox}/>
                </motion.div>
              </AnimatePresence>

              {/* Step dots */}
              <div className="flex justify-center gap-1.5 mb-3">
                {tourSteps.map((_, i) => (
                  <motion.div key={i}
                    onClick={() => startStep(i)}
                    className="cursor-pointer rounded-full"
                    style={{
                      width: i === tourStep ? 18 : 6,
                      height: 6,
                      background: i === tourStep
                        ? `linear-gradient(90deg,${NEON},${CYAN})`
                        : i < tourStep ? `${NEON}60` : "rgba(255,255,255,0.15)",
                      boxShadow: i === tourStep ? `0 0 8px ${NEON}80` : "none",
                      transition: "all 0.3s ease",
                    }}/>
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-2">
                <motion.button onClick={prevStep} disabled={tourStep===0}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.95 }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[12px] text-[12px] font-semibold disabled:opacity-25 transition-all"
                  style={{ background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.65)",
                           border:"1px solid rgba(255,255,255,0.10)" }}>
                  <ChevronLeft size={13}/> {t.prev}
                </motion.button>
                <motion.button onClick={nextStep}
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.95 }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-[12px] text-[12px] font-bold relative overflow-hidden"
                  style={{ background:`linear-gradient(135deg,${BLUE},#0d2d9c)`,
                           color:"white",
                           boxShadow:`0 4px 18px rgba(17,69,181,0.55), 0 0 0 1px ${NEON}30`,
                           border:`1px solid ${NEON}40` }}>
                  <motion.div className="absolute inset-0"
                    style={{ background:`linear-gradient(135deg,transparent,${NEON}15,transparent)` }}
                    animate={{ x:["-100%","100%"] }} transition={{ repeat:Infinity, duration:2.5, ease:"linear" }}/>
                  {tourStep===tourSteps.length-1
                    ? <><RotateCcw size={12}/> {t.finish}</>
                    : <>{t.next} <ChevronRight size={12}/></>}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ CHAT PANEL ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {mode === "chat" && (
          <motion.div key="chat"
            initial={{ opacity:0, y:28, scale:0.88 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:0.90 }}
            transition={{ type:"spring", stiffness:340, damping:28 }}
            className="flex flex-col overflow-hidden relative"
            style={{ width: panelWidth,
                     height: isMobile ? 420 : 500,
                     background:GLASS,
                     backdropFilter:"blur(28px)", WebkitBackdropFilter:"blur(28px)",
                     borderRadius:22,
                     border:`1px solid rgba(0,255,136,0.22)`,
                     boxShadow:`0 0 0 1px rgba(0,217,255,0.06), 0 20px 60px rgba(0,0,0,0.60), 0 0 40px rgba(0,255,136,0.06)` }}>

            {/* neon top edge */}
            <motion.div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[22px] z-10"
              style={{ background:`linear-gradient(90deg,transparent,${CYAN},${NEON},${CYAN},transparent)` }}
              animate={{ opacity:[0.5,1,0.5] }} transition={{ repeat:Infinity, duration:2.8 }}/>

            {/* Chat header */}
            <div className="flex items-center justify-between px-3 py-2.5 flex-shrink-0"
                 style={{ borderBottom:`1px solid rgba(255,255,255,0.06)` }}>
              <div className="flex items-center gap-2">
                <motion.div className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${BLUE},#0a1e6e)`,
                           boxShadow:`0 0 14px ${NEON}50, 0 0 28px ${CYAN}25` }}
                  animate={{ boxShadow:[`0 0 12px ${NEON}40,0 0 24px ${CYAN}20`,`0 0 22px ${NEON}70,0 0 44px ${CYAN}35`,`0 0 12px ${NEON}40,0 0 24px ${CYAN}20`] }}
                  transition={{ repeat:Infinity, duration:2.2 }}>
                  <img src="/ai-robot.png" alt="Millie" className="w-8 h-8 object-contain rounded-full"/>
                  <motion.div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                    style={{ background:NEON, borderColor:GLASS }}
                    animate={{ scale:[1,1.35,1], boxShadow:[`0 0 4px ${NEON}`,`0 0 10px ${NEON}`,`0 0 4px ${NEON}`] }}
                    transition={{ repeat:Infinity, duration:1.4 }}/>
                </motion.div>
                <div>
                  <p style={{ fontWeight:800, fontSize:12, color:"white", lineHeight:1.1 }}>
                    <AnimatePresence mode="wait">
                      <motion.span key={t.millieChat}
                        initial={{ opacity:0, y:3 }} animate={{ opacity:1, y:0 }}
                        exit={{ opacity:0, y:-3 }} transition={{ duration:0.18 }}>
                        {t.millieChat}
                      </motion.span>
                    </AnimatePresence>
                  </p>
                  <p style={{ fontSize:8, color:NEON, fontWeight:700, letterSpacing:"0.07em", marginTop:1 }}>
                    {t.aiSubtitle}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background:NEON }}
                      animate={{ opacity:[1,0.3,1] }} transition={{ repeat:Infinity, duration:1.2 }}/>
                    <p style={{ fontSize:8.5, color:"rgba(255,255,255,0.40)", fontWeight:500 }}>
                      <AnimatePresence mode="wait">
                        <motion.span key={t.online}
                          initial={{ opacity:0 }} animate={{ opacity:1 }}
                          exit={{ opacity:0 }} transition={{ duration:0.2 }}>
                          {t.online}
                        </motion.span>
                      </AnimatePresence>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Language Toggle — premium, inside panel */}
                <LangToggle lang={lang} setLang={setLang}/>
                <motion.button onClick={()=>setMode("idle")} whileHover={{ scale:1.15 }} whileTap={{ scale:0.9 }}
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.50)" }}>
                  <X size={13}/>
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5"
                 style={{ scrollbarWidth:"thin", scrollbarColor:`${NEON}25 transparent` }}>
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div key={i} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.22 }}
                    className={`flex ${msg.from==="user"?"justify-end":"justify-start"} items-end gap-1.5`}>
                    {msg.from==="bot" && (
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px]"
                           style={{ background:`linear-gradient(135deg,${BLUE},#091d6b)`,
                                    boxShadow:`0 0 8px ${NEON}30` }}>🤖</div>
                    )}
                    <div className="max-w-[83%] px-3 py-2.5 rounded-2xl text-[11.5px] leading-relaxed whitespace-pre-line"
                         style={msg.from==="bot"
                           ? { background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.88)",
                               border:`1px solid rgba(255,255,255,0.10)`,
                               borderBottomLeftRadius:5, backdropFilter:"blur(4px)" }
                           : { background:`linear-gradient(135deg,${BLUE}cc,#0d2d9c)`,
                               color:"white",
                               boxShadow:`0 4px 16px rgba(17,69,181,0.50), 0 0 0 1px ${NEON}25`,
                               border:`1px solid ${NEON}30`,
                               borderBottomRightRadius:5 }}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {thinking && (
                  <motion.div initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0 }} className="flex items-end gap-1.5">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px]"
                         style={{ background:`linear-gradient(135deg,${BLUE},#091d6b)`, boxShadow:`0 0 8px ${NEON}30` }}>🤖</div>
                    <div className="px-3 py-2.5 rounded-2xl flex gap-1.5 items-center"
                         style={{ background:"rgba(255,255,255,0.07)", border:`1px solid rgba(255,255,255,0.10)`, borderBottomLeftRadius:5 }}>
                      {[0, 0.18, 0.36].map((d, k) => (
                        <motion.div key={k} className="w-2 h-2 rounded-full"
                          style={{ background:NEON }}
                          animate={{ y:[0,-5,0], opacity:[0.3,1,0.3] }}
                          transition={{ repeat:Infinity, duration:0.85, delay:d }}/>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={chatEndRef}/>
            </div>

            {/* Quick suggestions */}
            <div className="flex-shrink-0 px-3 pt-2 pb-1.5"
                 style={{ borderTop:`1px solid rgba(255,255,255,0.06)` }}>
              <AnimatePresence mode="wait">
                <motion.p key={"qlabel-"+lang}
                  initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                  transition={{ duration:0.2 }}
                  style={{ fontSize:9, color:`${NEON}80`, fontWeight:700, marginBottom:6,
                           textTransform:"uppercase", letterSpacing:"0.08em" }}>
                  {t.quickQuestions}
                </motion.p>
              </AnimatePresence>
              <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth:"none" }}>
                <AnimatePresence mode="wait">
                  <motion.div key={"sugg-"+lang}
                    initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:-4 }} transition={{ duration:0.22 }}
                    className="flex gap-1.5">
                    {suggestions.map((text, idx) => {
                      const icons = [<BookOpen size={11}/>, <Clock size={11}/>, <Trophy size={11}/>,
                                     <MapPin size={11}/>, <Bus size={11}/>, <Phone size={11}/>,
                                     <Image size={11}/>, <Sparkles size={11}/>];
                      return (
                        <motion.button key={text} onClick={()=>sendMessage(text)}
                          whileHover={{ scale:1.05, y:-1 }} whileTap={{ scale:0.95 }}
                          className="flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-full font-semibold flex-shrink-0"
                          style={{ background:"rgba(0,255,136,0.07)", color:NEON,
                                   border:`1px solid rgba(0,255,136,0.22)` }}>
                          <span style={{ opacity:0.8 }}>{icons[idx % icons.length]}</span>
                          {text}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Input */}
            <div className="px-3 py-3 flex gap-2 flex-shrink-0"
                 style={{ borderTop:`1px solid rgba(255,255,255,0.06)` }}>
              <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-[12px]"
                   style={{ background:"rgba(255,255,255,0.05)",
                            border:`1.5px solid rgba(0,255,136,0.20)` }}>
                <input value={input} onChange={e=>setInput(e.target.value)}
                       onKeyDown={e=>e.key==="Enter"&&sendMessage()}
                       placeholder={t.placeholder}
                       className="flex-1 text-[12px] outline-none bg-transparent"
                       style={{ color:"rgba(255,255,255,0.85)", caretColor: NEON }}/>
              </div>
              <motion.button onClick={()=>sendMessage()}
                whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
                className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                style={{ background:`linear-gradient(135deg,${BLUE},#0d2d9c)`,
                         boxShadow:`0 4px 16px rgba(17,69,181,0.50), 0 0 0 1px ${NEON}35` }}>
                <motion.div className="absolute inset-0"
                  style={{ background:`linear-gradient(135deg,transparent,${NEON}20,transparent)` }}
                  animate={{ x:["-100%","100%"] }} transition={{ repeat:Infinity, duration:2, ease:"linear" }}/>
                <Send size={14} color="white" className="relative z-10"/>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ IDLE BUTTONS + FLOATING ROBOT ════════════════════════ */}
      <div className="flex flex-col items-end gap-2.5">
        <AnimatePresence>
          {mode === "idle" && (
            <motion.div key="idle-btns"
              initial={{ opacity:0, y:12, scale:0.93 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:8, scale:0.93 }}
              className="flex flex-col items-end gap-2">

              {/* Start Tour button */}
              <motion.button onClick={startTour}
                initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.06 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.94 }}
                className={`flex items-center gap-2 rounded-full font-bold relative overflow-hidden ${isMobile ? "px-4 py-2 text-[11px]" : "px-5 py-2.5 text-[12px]"}`}
                style={{ background:GLASS_LIGHT, backdropFilter:"blur(16px)",
                         border:`1px solid ${NEON}40`,
                         boxShadow:`0 0 18px ${NEON}25, 0 8px 32px rgba(0,0,0,0.45)`,
                         color:"white" }}>
                <motion.div className="absolute inset-0 rounded-full"
                  style={{ background:`linear-gradient(90deg,transparent,${NEON}18,transparent)` }}
                  animate={{ x:["-100%","100%"] }} transition={{ repeat:Infinity, duration:2.4, ease:"linear" }}/>
                <motion.span animate={{ rotate:[0,360] }}
                  transition={{ repeat:Infinity, duration:4, ease:"linear" }}
                  style={{ display:"inline-block" }}>🚀</motion.span>
                <AnimatePresence mode="wait">
                  <motion.span key={"st-"+lang} className="relative"
                    initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:-4 }} transition={{ duration:0.18 }}>
                    {t.startTour}
                  </motion.span>
                </AnimatePresence>
                <motion.div className="w-1.5 h-1.5 rounded-full"
                  style={{ background:NEON, boxShadow:`0 0 6px ${NEON}` }}
                  animate={{ opacity:[1,0.2,1] }} transition={{ repeat:Infinity, duration:1.2 }}/>
              </motion.button>

              {/* Chat with AI button */}
              <motion.button onClick={()=>setMode("chat")}
                initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.12 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.94 }}
                className={`flex items-center gap-2 rounded-full font-bold relative overflow-hidden ${isMobile ? "px-4 py-2 text-[11px]" : "px-5 py-2.5 text-[12px]"}`}
                style={{ background:`linear-gradient(135deg,${BLUE}dd,#091d6bdd)`,
                         backdropFilter:"blur(16px)",
                         border:`1px solid ${CYAN}40`,
                         boxShadow:`0 0 18px ${CYAN}25, 0 8px 32px rgba(17,69,181,0.45)`,
                         color:"white" }}>
                <motion.div className="absolute inset-0 rounded-full"
                  style={{ background:`linear-gradient(90deg,transparent,${CYAN}18,transparent)` }}
                  animate={{ x:["-100%","100%"] }} transition={{ repeat:Infinity, duration:2.8, ease:"linear" }}/>
                <motion.span animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:1.8 }}
                  style={{ display:"inline-block" }}>
                  <Sparkles size={13} color={CYAN}/>
                </motion.span>
                <AnimatePresence mode="wait">
                  <motion.span key={"ca-"+lang} className="relative"
                    initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:-4 }} transition={{ duration:0.18 }}>
                    {t.chatWithAI}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Robot Orb */}
        <motion.button
          onClick={()=>{ if(mode==="tour") stopTour(); else if(mode==="chat") setMode("idle"); }}
          animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:2.8, ease:"easeInOut" }}
          whileHover={{ scale:1.1 }} whileTap={{ scale:0.93 }}
          className="relative cursor-pointer" title="Millie — AI Guide">

          {/* Outer ambient glow */}
          <motion.div className="absolute -inset-5 rounded-full pointer-events-none"
            animate={{ opacity:[0.25,0.08,0.25], scale:[1,1.08,1] }}
            transition={{ repeat:Infinity, duration:3 }}
            style={{ background:`radial-gradient(circle,${NEON}50 0%,${CYAN}20 40%,transparent 70%)` }}/>

          {/* Spinning neon ring */}
          <motion.div className="absolute -inset-2 rounded-full pointer-events-none"
            animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:6, ease:"linear" }}
            style={{ border:`1.5px solid transparent`,
                     borderTop:`1.5px solid ${NEON}90`, borderRight:`1.5px solid ${CYAN}60`,
                     borderRadius:"50%",
                     boxShadow:`0 0 8px ${NEON}40` }}/>

          {/* Counter-spin ring */}
          <motion.div className="absolute -inset-3.5 rounded-full pointer-events-none"
            animate={{ rotate:-360 }} transition={{ repeat:Infinity, duration:10, ease:"linear" }}
            style={{ border:`1px dashed rgba(0,217,255,0.30)`, borderRadius:"50%" }}/>

          <img src="/ai-robot.png" alt="Millie AI Guide"
               className="relative z-10"
               style={{ width: isMobile ? 66 : 86, height: isMobile ? 66 : 86, objectFit:"contain",
                        filter:`drop-shadow(0 0 12px ${NEON}80) drop-shadow(0 0 24px ${CYAN}50) drop-shadow(0 4px 16px rgba(0,0,0,0.60))` }}/>

          {/* Particle sparks */}
          {[0,1,2].map(i => (
            <motion.div key={i}
              className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{ background: i%2===0 ? NEON : CYAN,
                       top:"50%", left:"50%",
                       boxShadow:`0 0 4px ${i%2===0?NEON:CYAN}` }}
              animate={{
                x:[0, (i===0?-28:i===1?20:8)],
                y:[0, (i===0?-20:i===1?-28:22)],
                opacity:[0,1,0], scale:[0,1.2,0],
              }}
              transition={{ repeat:Infinity, duration:2.2, delay:i*0.7, ease:"easeOut" }}/>
          ))}
        </motion.button>
      </div>
    </div>
  );
}

/* ── Typewriter with neon cursor ────────────────────────────── */
function TypewriterText({ text, onScroll }: { text: string; onScroll?: () => void }) {
  const [shown, setShown] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    setShown(""); idx.current = 0;
    const iv = setInterval(() => {
      if (idx.current < text.length) {
        setShown(text.slice(0, ++idx.current));
        onScroll?.();
      } else clearInterval(iv);
    }, 35);
    return () => clearInterval(iv);
  }, [text, onScroll]);
  return (
    <p style={{ color:"rgba(255,255,255,0.78)", fontSize:11.5, lineHeight:1.8, fontWeight:400 }}>
      {shown}
      <motion.span animate={{ opacity:[1,0] }} transition={{ repeat:Infinity, duration:0.55 }}
        style={{ display:"inline-block", width:2, height:12, background:NEON,
                 marginLeft:2, verticalAlign:"middle", borderRadius:1,
                 boxShadow:`0 0 6px ${NEON}` }}/>
    </p>
  );
}
