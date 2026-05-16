import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, RotateCcw, Sparkles, BookOpen, Clock, Phone, MapPin, Bus, Trophy, Image } from "lucide-react";

/* ─── School theme palette ──────────────────────────────────── */
const BLUE = "#2563EB";
const GREEN = "#10B981";

/* ─── Tour steps ─────────────────────────────────────────────── */
const TOUR_STEPS = [
  { path: "/",                title: "🏠 Home",           message: "Welcome to The Milestone Sr. Sec. School – a CBSE-affiliated school in Kaithal, Haryana! The Home page shows our key highlights: 15+ years of excellence, 100% board pass rate, smart classrooms, experienced faculty, and vibrant campus life. Scroll down to explore admissions, stats, and milestones!" },
  { path: "/about/story",     title: "📖 Our Story",      message: "Every great school starts with a vision! Founded with a deep commitment to quality education and character building, Milestone has grown into one of the most trusted CBSE schools in Kaithal district. Our story is one of dedication – to our students, their families, and the community." },
  { path: "/about/directors", title: "🎓 Directors",      message: "Meet the visionary leaders behind The Milestone School! Our directors bring decades of experience in education. Under their leadership the school has achieved outstanding CBSE results, expanded infrastructure, and introduced smart classrooms and modern teaching methods." },
  { path: "/about/divisions", title: "🏫 Divisions",      message: "The Milestone School has well-defined academic divisions: Pre-Primary & Primary wings nurture curiosity through play-based learning; Middle School bridges childhood and adolescence; Senior Secondary (XI–XII) offers Science, Commerce, and Arts streams to prepare students for competitive exams and higher education." },
  { path: "/about/tieups",    title: "🤝 Tie-Ups",        message: "Education thrives through collaboration! Our Tie-Ups page showcases partnerships with leading organizations, coaching institutes, tech providers, and community bodies. Career counseling, sports academy partnerships, and CBSE resource center connections keep students and teachers updated." },
  { path: "/academics",       title: "📚 Academics",      message: "The Academics section is the core of what we do! CBSE curriculum from Nursery to Class XII, NCERT textbooks supplemented with digital resources and practical experiments. Our academic calendar balances rigorous study with co-curricular activities. Board exam preparation is our special strength!" },
  { path: "/facilities",      title: "🏗️ Facilities",    message: "Best-equipped school in Kaithal! Physics, Chemistry & Biology labs; Computer lab with latest tech; Smart classrooms with interactive whiteboards; Well-stocked library; Sports ground, basketball & volleyball courts; Art room, music room, activity halls, and safe school bus transport." },
  { path: "/faculty",         title: "👩‍🏫 Faculty",     message: "Our incredible educators are selected for subject expertise and passion! Faculty undergoes continuous professional development per CBSE guidelines. Specialist teachers for every subject, great faculty-to-student ratio, and personalized attention ensure no child falls behind. Our teachers are mentors, role models, and friends!" },
  { path: "/achievements",    title: "🏆 Achievements",   message: "Students have won academic, sports, cultural, and community service awards! CBSE board results consistently see students scoring above 90% with district and state toppers. Sports teams win inter-school competitions across Haryana. Science fairs, debates, quiz bowls – Milestone students shine everywhere!" },
  { path: "/gallery",         title: "🖼️ Gallery",        message: "A visual celebration of life at Milestone! See vibrant classrooms, science experiments, cultural programs, Sports Day, Annual Day, and everyday school magic. Joy on students' faces, concentration of young scientists in labs, and creativity in art rooms. Thank you for completing the tour – we hope to welcome you!" },
];

/* ─── Chat responses ─────────────────────────────────────────── */
const CHAT_RESPONSES: { keywords: string[]; response: string }[] = [
  { keywords: ["admission","enroll","apply","join","enquiry","aam","प्रवेश"],
    response: "📋 Admissions open for Session 2026–27 — Nursery to Class XII!\n\n📞 Call/WhatsApp: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Opp. Pawan Vatika, Khurana Road, Kaithal\n\nOr click \"Admissions Open\" in the top menu!" },
  { keywords: ["fee","fees","cost","charges","tuition","price","kitna","शुल्क"],
    response: "💰 For the complete fee structure and payment schedule, contact us directly:\n📞 +91 98125-74766\n✉️ themilestoneKtl@gmail.com\n\nOur admissions team will share a transparent breakdown." },
  { keywords: ["timing","time","schedule","hours","open","samay","समय","kab"],
    response: "⏰ School Timings:\nMonday – Saturday: 7:30 AM – 2:30 PM\n\nClosed on Sundays and national holidays.\n\nOffice timings: 8:00 AM – 3:00 PM." },
  { keywords: ["cbse","board","affiliation","affiliated","curriculum","board"],
    response: "✅ Fully affiliated with CBSE, New Delhi!\n\nNCSRT curriculum for Nursery to Class XII.\nBoard exams: Class X & XII (CBSE pattern)." },
  { keywords: ["class","stream","science","commerce","arts","subject","pcm","pcb","कक्षा"],
    response: "📚 Classes: Nursery to Class XII\n\nSenior Secondary (XI–XII) streams:\n• Science (PCM / PCB)\n• Commerce\n• Arts / Humanities\n\nAll with carefully chosen subject combinations!" },
  { keywords: ["faculty","teacher","staff","sir","ma'am","शिक्षक"],
    response: "👩‍🏫 Our faculty are highly qualified, experienced, and passionate!\n\nSubject specialists | Regular professional development | Great student ratio | Personalized attention.\n\nVisit our Faculty page to meet the team!" },
  { keywords: ["facility","facilities","lab","library","sports","computer","smart","bus","transport","सुविधा"],
    response: "🏗️ World-class facilities at Milestone:\n🔬 Science Labs (Physics, Chemistry, Biology)\n💻 Computer Lab\n🖥️ Smart Classrooms\n📚 Library\n⚽ Sports Ground\n🎨 Art & Music Rooms\n🚌 Safe School Bus Transport" },
  { keywords: ["location","address","where","kaithal","haryana","kahan","कहाँ"],
    response: "📍 Address:\nOpp. Pawan Vatika, Khurana Road\nChiranjeev Colony, Kaithal, Haryana – 136027\n\nNear the Khurana Bypass — easy to find!" },
  { keywords: ["contact","phone","email","call","whatsapp","number","संपर्क"],
    response: "📞 Phone/WhatsApp: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Khurana Road, Kaithal, Haryana\n\n🕐 Mon–Sat: 8:00 AM – 3:00 PM" },
  { keywords: ["result","results","board","percentage","score","rank","topper","परिणाम"],
    response: "🏆 Outstanding CBSE Results every year!\n\n✅ 100% pass rate consistently\n⭐ Many students score above 90%\n🥇 District & State level toppers\n\nAcademic excellence is our hallmark!" },
  { keywords: ["tour","guide","explore","show","dikhao"],
    response: "🚀 Click the glowing 'Start Tour' button! I'll guide you through every page — Home, Academics, Facilities, Faculty, Achievements, Gallery, and more. Each page auto-scrolls so you see everything!" },
  { keywords: ["hello","hi","hey","namaste","hii","helo","नमस्ते"],
    response: "👋 Namaste! I'm Millie, your AI Guide for The Milestone Sr. Sec. School!\n\nI can help with admissions, fees, timings, facilities, academics, and more.\n\nOr click 'Start Tour' for a guided website tour! 🚀" },
  { keywords: ["achievement","award","prize","trophy","win","gold","medal"],
    response: "🏅 Our students win:\n📖 CBSE Board Exams — District & State toppers\n⚽ Inter-School Sports across Haryana\n🎭 Cultural Competitions\n🔬 Science Fairs & Quiz Bowls\n🏅 Gold at Chandigarh Open Skating Championship\n\nVisit our Achievements page for the full list!" },
  { keywords: ["transport","bus","van","pick","drop","vehicle","गाड़ी"],
    response: "🚌 Safe, reliable school bus transport covering all major areas of Kaithal!\n\nCall +91 98125-74766 for route details and timings." },
  { keywords: ["year","found","start","establish","history","2008","कब"],
    response: "📅 The Milestone Sr. Sec. School was established with a vision to provide quality CBSE education in Kaithal.\n\n15+ years of excellence, trusted by hundreds of families across Kaithal and nearby areas!" },
];

const SUGGESTIONS = [
  { icon: <BookOpen size={12}/>, text: "Admission enquiry?" },
  { icon: <Clock size={12}/>,    text: "School timings?" },
  { icon: <Trophy size={12}/>,   text: "Board results?" },
  { icon: <MapPin size={12}/>,   text: "School location?" },
  { icon: <Bus size={12}/>,      text: "Transport/bus?" },
  { icon: <Phone size={12}/>,    text: "Contact details?" },
  { icon: <Image size={12}/>,    text: "Gallery & events?" },
  { icon: <Sparkles size={12}/>, text: "Fee structure?" },
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const item of CHAT_RESPONSES) {
    if (item.keywords.some(k => lower.includes(k))) return item.response;
  }
  return "🤔 Great question! For more details:\n📞 Call: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n\nOr start the guided tour to explore our website!";
}

type Mode = "idle" | "tour" | "chat";
interface ChatMsg { from: "user" | "bot"; text: string; }
const TOUR_DURATION = 10000;

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function AIGuide() {
  const [mode, setMode]         = useState<Mode>("idle");
  const [tourStep, setTourStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { from:"bot", text:"👋 Namaste! I'm Millie, your AI Guide!\n\nAsk me anything about The Milestone Sr. Sec. School — admissions, timings, facilities, academics, and more." },
  ]);
  const [input, setInput]       = useState("");
  const [thinking, setThinking] = useState(false);
  const [, navigate]            = useLocation();

  const timerRef       = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRafRef   = useRef<number | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chatEndRef     = useRef<HTMLDivElement>(null);

  const cancelScroll = useCallback(() => {
    if (scrollRafRef.current)   cancelAnimationFrame(scrollRafRef.current);
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollRafRef.current = scrollTimerRef.current = null;
  }, []);

  const clearTimers = useCallback(() => {
    if (timerRef.current)    clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    cancelScroll();
  }, [cancelScroll]);

  const startAutoScroll = useCallback((duration: number) => {
    cancelScroll();
    scrollTimerRef.current = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      const scrollDur = duration - 600;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / scrollDur, 1);
        const e = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2,2)/2;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo(0, max * e);
        if (p < 1) scrollRafRef.current = requestAnimationFrame(tick);
      };
      scrollRafRef.current = requestAnimationFrame(tick);
    }, 350);
  }, [cancelScroll]);

  const startStep = useCallback((step: number) => {
    if (step >= TOUR_STEPS.length) {
      setMode("idle"); setTourStep(0); setProgress(0); navigate("/");
      window.scrollTo({ top:0, behavior:"smooth" }); return;
    }
    clearTimers(); setTourStep(step); setProgress(0);
    navigate(TOUR_STEPS[step].path);
    startAutoScroll(TOUR_DURATION);
    const t0 = Date.now();
    progressRef.current = setInterval(() =>
      setProgress(Math.min(((Date.now()-t0)/TOUR_DURATION)*100,100)), 150);
    timerRef.current = setTimeout(() => { clearTimers(); startStep(step+1); }, TOUR_DURATION);
  }, [clearTimers, navigate, startAutoScroll]);

  const startTour = useCallback(() => { setMode("tour"); startStep(0); }, [startStep]);
  const stopTour  = useCallback(() => {
    clearTimers(); setMode("idle"); setTourStep(0); setProgress(0);
    window.scrollTo({ top:0, behavior:"smooth" });
  }, [clearTimers]);
  const nextStep = useCallback(() => { clearTimers(); startStep(tourStep+1); }, [clearTimers, startStep, tourStep]);
  const prevStep = useCallback(() => { clearTimers(); startStep(Math.max(0,tourStep-1)); }, [clearTimers, startStep, tourStep]);

  useEffect(() => () => clearTimers(), [clearTimers]);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages]);

  const sendMessage = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages(m => [...m, { from:"user", text:msg }]);
    setInput(""); setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages(m => [...m, { from:"bot", text:getBotResponse(msg) }]);
    }, 700);
  };

  const step    = TOUR_STEPS[tourStep];
  const secLeft = Math.max(0, Math.round((TOUR_DURATION*(1-progress/100))/1000));

  /* shared panel style — dark navy glass matching website header */
  const panelStyle: React.CSSProperties = {
    background: "rgba(10,22,50,0.92)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(37,99,235,0.35)",
    boxShadow: "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(37,99,235,0.12)",
  };

  return (
    <div className="fixed bottom-5 right-4 z-[9998] flex flex-col items-end gap-3 select-none"
         style={{ fontFamily:"'Poppins',sans-serif" }}>

      {/* ══ TOUR PANEL ══════════════════════════════════════════ */}
      <AnimatePresence>
        {mode === "tour" && (
          <motion.div key="tour"
            initial={{ opacity:0, y:24, scale:0.93 }} animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:16, scale:0.93 }}
            transition={{ type:"spring", stiffness:320, damping:26 }}
            className="w-[290px] rounded-2xl overflow-hidden"
            style={panelStyle}>

            {/* header */}
            <div className="flex items-center justify-between px-4 py-2.5"
                 style={{ background:"rgba(37,99,235,0.15)", borderBottom:"1px solid rgba(37,99,235,0.2)" }}>
              <div className="flex items-center gap-2">
                <motion.div className="w-6 h-6 rounded-full flex items-center justify-center text-[11px]"
                  style={{ background:`linear-gradient(135deg,${BLUE},${GREEN})` }}
                  animate={{ boxShadow:[`0 0 6px ${BLUE}80`,`0 0 14px ${BLUE}60`,`0 0 6px ${BLUE}80`] }}
                  transition={{ repeat:Infinity, duration:2 }}>
                  🤖
                </motion.div>
                <span style={{ fontWeight:700, fontSize:11.5, color:"rgba(255,255,255,0.9)" }}>
                  Millie — Website Tour
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ fontSize:10, color:"rgba(255,255,255,0.4)", fontWeight:600 }}>
                  {tourStep+1}/{TOUR_STEPS.length}
                </span>
                <button onClick={stopTour}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-all"
                  style={{ color:"rgba(255,255,255,0.35)" }}><X size={11}/></button>
              </div>
            </div>

            <div className="px-4 pt-3 pb-4">
              <motion.p key={tourStep+"-t"} initial={{ opacity:0, x:-8 }} animate={{ opacity:1, x:0 }}
                className="font-bold mb-2.5" style={{ fontSize:12.5, color:GREEN }}>
                {step.title}
              </motion.p>

              <div className="rounded-xl p-3 mb-3" style={{
                background:"rgba(37,99,235,0.08)",
                border:"1px solid rgba(37,99,235,0.15)",
                minHeight:95, maxHeight:125, overflowY:"auto",
                scrollbarWidth:"thin", scrollbarColor:"rgba(37,99,235,0.3) transparent" }}>
                <TypewriterText key={tourStep} text={step.message}/>
              </div>

              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span style={{ fontSize:9.5, color:"rgba(255,255,255,0.35)" }}>Page {tourStep+1} of {TOUR_STEPS.length}</span>
                  <span style={{ fontSize:9.5, color:GREEN, fontWeight:600 }}>Next in {secLeft}s</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background:"rgba(255,255,255,0.08)" }}>
                  <motion.div className="h-full rounded-full"
                    style={{ width:`${progress}%`, background:`linear-gradient(90deg,${BLUE},${GREEN})` }}/>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={prevStep} disabled={tourStep===0}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-[11px] font-semibold transition-all disabled:opacity-20 hover:scale-105"
                  style={{ background:"rgba(37,99,235,0.12)", color:"rgba(255,255,255,0.7)", border:"1px solid rgba(37,99,235,0.2)" }}>
                  <ChevronLeft size={12}/> Prev
                </button>
                <button onClick={nextStep}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-[11px] font-bold transition-all hover:scale-105"
                  style={{ background:`linear-gradient(90deg,${BLUE},${GREEN})`,
                           color:"white", boxShadow:`0 4px 14px rgba(37,99,235,0.4)` }}>
                  {tourStep===TOUR_STEPS.length-1
                    ? <><RotateCcw size={11}/> Finish</>
                    : <>Next <ChevronRight size={11}/></>}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ══ CHAT PANEL ══════════════════════════════════════════ */}
        {mode === "chat" && (
          <motion.div key="chat"
            initial={{ opacity:0, y:24, scale:0.93 }} animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:16, scale:0.93 }}
            transition={{ type:"spring", stiffness:320, damping:26 }}
            className="w-[290px] rounded-2xl overflow-hidden flex flex-col"
            style={{ height:455, ...panelStyle }}>

            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                 style={{ background:"rgba(37,99,235,0.15)", borderBottom:"1px solid rgba(37,99,235,0.2)" }}>
              <div className="flex items-center gap-2.5">
                <motion.div className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${BLUE},${GREEN})` }}
                  animate={{ boxShadow:[`0 0 0 2px rgba(37,99,235,0.4)`,`0 0 0 5px rgba(37,99,235,0.1)`,`0 0 0 2px rgba(37,99,235,0.4)`] }}
                  transition={{ repeat:Infinity, duration:2.2 }}>
                  <img src="/ai-robot.png" alt="Millie" className="w-8 h-8 object-contain rounded-full"/>
                  <motion.div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
                    style={{ background:GREEN, borderColor:"rgba(10,22,50,0.92)" }}
                    animate={{ scale:[1,1.3,1] }} transition={{ repeat:Infinity, duration:1.5 }}/>
                </motion.div>
                <div>
                  <p style={{ fontWeight:700, fontSize:12.5, color:"rgba(255,255,255,0.95)", lineHeight:1 }}>Millie</p>
                  <p style={{ fontSize:9.5, color:GREEN, marginTop:2 }}>● AI Guide — Online</p>
                </div>
              </div>
              <button onClick={()=>setMode("idle")}
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-all"
                style={{ color:"rgba(255,255,255,0.35)" }}><X size={13}/></button>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5"
                 style={{ scrollbarWidth:"thin", scrollbarColor:"rgba(37,99,235,0.3) transparent" }}>
              {messages.map((msg,i) => (
                <motion.div key={i} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.2 }}
                  className={`flex ${msg.from==="user"?"justify-end":"justify-start"} items-end gap-1.5`}>
                  {msg.from==="bot" && (
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]"
                         style={{ background:`linear-gradient(135deg,${BLUE},${GREEN})` }}>🤖</div>
                  )}
                  <div className="max-w-[83%] px-3 py-2.5 rounded-2xl text-[11.5px] leading-relaxed whitespace-pre-line"
                       style={msg.from==="bot"
                         ? { background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.88)",
                             border:"1px solid rgba(37,99,235,0.2)", borderBottomLeftRadius:4 }
                         : { background:`linear-gradient(135deg,${BLUE},#1d4ed8)`,
                             color:"white", boxShadow:`0 4px 12px rgba(37,99,235,0.4)`,
                             borderBottomRightRadius:4 }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {thinking && (
                  <motion.div initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0 }} className="flex items-end gap-1.5">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]"
                         style={{ background:`linear-gradient(135deg,${BLUE},${GREEN})` }}>🤖</div>
                    <div className="px-3 py-2.5 rounded-2xl flex gap-1 items-center"
                         style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(37,99,235,0.2)", borderBottomLeftRadius:4 }}>
                      {[0,0.15,0.3].map((d,i) => (
                        <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
                          style={{ background:GREEN }}
                          animate={{ y:[0,-4,0], opacity:[0.5,1,0.5] }}
                          transition={{ repeat:Infinity, duration:0.8, delay:d }}/>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={chatEndRef}/>
            </div>

            {/* suggestions */}
            <div className="px-3 pt-2 pb-1.5 flex flex-wrap gap-1.5 flex-shrink-0"
                 style={{ borderTop:"1px solid rgba(37,99,235,0.15)" }}>
              {SUGGESTIONS.map(s => (
                <motion.button key={s.text} onClick={()=>sendMessage(s.text)}
                  whileHover={{ scale:1.06, y:-1 }} whileTap={{ scale:0.96 }}
                  className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full font-medium"
                  style={{ background:"rgba(37,99,235,0.12)", color:"rgba(255,255,255,0.75)",
                           border:"1px solid rgba(37,99,235,0.25)" }}>
                  <span style={{ color:GREEN }}>{s.icon}</span>
                  {s.text}
                </motion.button>
              ))}
            </div>

            {/* input */}
            <div className="px-3 py-2.5 flex gap-2 flex-shrink-0"
                 style={{ borderTop:"1px solid rgba(37,99,235,0.15)" }}>
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl"
                   style={{ background:"rgba(255,255,255,0.06)", border:"1.5px solid rgba(37,99,235,0.3)" }}>
                <input value={input} onChange={e=>setInput(e.target.value)}
                       onKeyDown={e=>e.key==="Enter"&&sendMessage()}
                       placeholder="Ask me anything…"
                       className="flex-1 text-[11.5px] outline-none bg-transparent"
                       style={{ color:"rgba(255,255,255,0.85)" }}/>
              </div>
              <motion.button onClick={()=>sendMessage()}
                whileHover={{ scale:1.1 }} whileTap={{ scale:0.9 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:`linear-gradient(135deg,${BLUE},${GREEN})`,
                         boxShadow:`0 4px 14px rgba(37,99,235,0.4)` }}>
                <Send size={13} color="white"/>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ IDLE — FLOATING BUTTONS + ROBOT ══════════════════ */}
      <div className="flex flex-col items-end gap-2.5">
        <AnimatePresence>
          {mode === "idle" && (
            <motion.div key="idle-btns"
              initial={{ opacity:0, y:10, scale:0.95 }} animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:8, scale:0.95 }} className="flex flex-col items-end gap-2">

              {/* Start Tour pill */}
              <motion.button onClick={startTour}
                initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.05 }}
                whileHover={{ scale:1.05, x:-2 }} whileTap={{ scale:0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold text-white"
                style={{
                  background:"rgba(10,22,50,0.90)",
                  backdropFilter:"blur(12px)",
                  border:"1px solid rgba(37,99,235,0.4)",
                  boxShadow:"0 4px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(37,99,235,0.1)",
                }}>
                <motion.span animate={{ rotate:[0,360] }}
                  transition={{ repeat:Infinity, duration:4, ease:"linear" }}
                  style={{ display:"inline-block" }}>🚀</motion.span>
                <span style={{ color:"rgba(255,255,255,0.9)" }}>Start Tour</span>
                <motion.div className="w-1.5 h-1.5 rounded-full ml-1"
                  animate={{ opacity:[1,0.3,1] }} transition={{ repeat:Infinity, duration:1.2 }}
                  style={{ background:GREEN }}/>
              </motion.button>

              {/* Chat with AI pill */}
              <motion.button onClick={()=>setMode("chat")}
                initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.12 }}
                whileHover={{ scale:1.05, x:-2 }} whileTap={{ scale:0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold text-white"
                style={{
                  background:`linear-gradient(135deg,${BLUE},${GREEN})`,
                  boxShadow:`0 4px 20px rgba(37,99,235,0.5)`,
                }}>
                <motion.span animate={{ scale:[1,1.15,1] }} transition={{ repeat:Infinity, duration:1.6 }}
                  style={{ display:"inline-block" }}>
                  <Sparkles size={13} color="white"/>
                </motion.span>
                Chat with AI
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot orb — floating */}
        <motion.button
          onClick={()=>{ if(mode==="tour") stopTour(); else if(mode==="chat") setMode("idle"); }}
          animate={{ y:[0,-7,0] }} transition={{ repeat:Infinity, duration:2.8, ease:"easeInOut" }}
          whileHover={{ scale:1.1 }} whileTap={{ scale:0.93 }}
          className="relative cursor-pointer" title="Millie — AI Guide">

          {/* ambient glow */}
          <motion.div className="absolute -inset-3 rounded-full pointer-events-none"
            animate={{ opacity:[0.5,0.12,0.5] }} transition={{ repeat:Infinity, duration:2.5 }}
            style={{ background:`radial-gradient(circle,${BLUE}50 0%,transparent 70%)` }}/>

          {/* spinning ring */}
          <motion.div className="absolute -inset-1 rounded-full pointer-events-none"
            animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:8, ease:"linear" }}
            style={{ border:`1.5px dashed rgba(37,99,235,0.45)`, borderRadius:"50%" }}/>

          <img src="/ai-robot.png" alt="Millie AI Guide"
               className="relative z-10"
               style={{ width:82, height:82, objectFit:"contain",
                        filter:`drop-shadow(0 4px 16px rgba(37,99,235,0.55)) drop-shadow(0 0 8px rgba(16,185,129,0.3))` }}/>
        </motion.button>
      </div>
    </div>
  );
}

/* ── Typewriter with cursor ─────────────────────────────────── */
function TypewriterText({ text }: { text:string }) {
  const [shown, setShown] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    setShown(""); idx.current = 0;
    const iv = setInterval(() => {
      if (idx.current < text.length) setShown(text.slice(0, ++idx.current));
      else clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <p style={{ color:"rgba(255,255,255,0.82)", fontSize:11.5, lineHeight:1.7 }}>
      {shown}
      <motion.span animate={{ opacity:[1,0] }} transition={{ repeat:Infinity, duration:0.55 }}
        style={{ display:"inline-block", width:2, height:11, background:GREEN,
                 marginLeft:2, verticalAlign:"middle", borderRadius:1 }}/>
    </p>
  );
}
