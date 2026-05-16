import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, RotateCcw, Mic, Sparkles, MapPin, Clock, BookOpen, Phone, Bus, Trophy, Image } from "lucide-react";

/* ─── Premium Green + White palette ─────────────────────────── */
const G1 = "#00C853";   // primary green
const G2 = "#69F0AE";   // secondary green
const G3 = "#00E676";   // accent glow
const GLASS_BG   = "rgba(255,255,255,0.92)";
const GLASS_DARK = "rgba(10,30,15,0.92)";

/* ─── Tour steps ─────────────────────────────────────────────── */
const TOUR_STEPS = [
  { path: "/",               title: "🏠 Home",         message: "Welcome to The Milestone Sr. Sec. School! On the Home page you'll discover everything we offer — from our mission to admissions, facilities, and more. We are a proud CBSE-affiliated school in Kaithal, Haryana, dedicated to excellence. Scroll down and you'll find key highlights: smart classrooms, experienced faculty, 100% board results, and vibrant campus life. Stats, milestones, and the Admissions Form are all right here!" },
  { path: "/about/story",    title: "📖 Our Story",    message: "This is where the heart of The Milestone School comes alive! Every great institution begins with a vision — to create a school where every student thrives academically, socially, and personally. Our founders laid the cornerstone with a deep commitment to quality education and character building. Over the years we've grown into one of the most trusted CBSE schools in Kaithal district." },
  { path: "/about/directors",title: "🎓 Directors",    message: "Meet the visionary leaders behind The Milestone School! Our directors bring decades of experience in education and community development. Under their leadership the school has achieved outstanding CBSE results, expanded infrastructure, and introduced smart classrooms. They are educators at heart — regularly interacting with students and faculty to keep the culture warm and excellence-driven." },
  { path: "/about/divisions",title: "🏫 Divisions",    message: "The Milestone School has well-defined academic divisions ensuring age-appropriate, high-quality education for every learner. Pre-Primary and Primary wings nurture curiosity through play-based learning. Middle School bridges childhood and adolescence. Senior Secondary (XI–XII) offers Science, Commerce, and Arts streams — carefully designed to prepare students for competitive exams and higher education." },
  { path: "/about/tieups",   title: "🤝 Tie-Ups",      message: "Education thrives through collaboration! Our Tie-Ups page showcases strong partnerships with leading organizations, coaching institutes, tech providers, and community bodies. Career counseling tie-ups help students navigate their futures. Sports academy partnerships bring professional coaching to campus. CBSE resource center connections keep our teachers updated with the latest training." },
  { path: "/academics",      title: "📚 Academics",    message: "The Academics section is the core of everything we do! Get a comprehensive overview of our CBSE curriculum, subjects, and innovative teaching methods. We offer programs from Nursery to Class XII. Our academic calendar balances rigorous study with co-curricular activities. NCERT textbooks are supplemented with digital resources and practical experiments. Board exam preparation is our special strength!" },
  { path: "/facilities",     title: "🏗️ Facilities",  message: "See why The Milestone School is one of the best-equipped schools in Kaithal! Physics, Chemistry, and Biology laboratories with modern apparatus. Computer lab with latest technology. Smart classrooms with interactive whiteboards. Well-stocked library with thousands of books. Sports ground, basketball and volleyball courts. Art room, music room, activity halls, and safe school bus transport." },
  { path: "/faculty",        title: "👩‍🏫 Faculty",   message: "Meet the most important asset of The Milestone School — our incredible educators! Each teacher is carefully selected for subject expertise and passion. Our faculty undergoes continuous professional development to stay current with CBSE guidelines. Specialist teachers for every subject, great faculty-to-student ratio, and personalized attention ensure no child falls behind. Our teachers are mentors, role models, and friends." },
  { path: "/achievements",   title: "🏆 Achievements", message: "This is where we celebrate excellence! Our students have won academic, sports, cultural, and community service awards. CBSE board results consistently see students scoring above 90% with district and state toppers. Sports teams win inter-school competitions across Haryana. Science fairs, debates, quiz bowls — Milestone students shine everywhere. Our alumni are doctors, engineers, civil servants, entrepreneurs, and artists!" },
  { path: "/gallery",        title: "🖼️ Gallery",      message: "A visual celebration of life at The Milestone School! Browse vibrant classrooms, science experiments, cultural programs, Sports Day, Annual Day, and everyday school magic. See the joy on students' faces, concentration of young scientists in labs, and creativity in art rooms. We update the gallery regularly to reflect the latest events. Thank you for joining this complete tour — we hope to welcome you to our family!" },
];

/* ─── Chat data ──────────────────────────────────────────────── */
const CHAT_RESPONSES: { keywords: string[]; response: string }[] = [
  { keywords: ["admission","enroll","apply","join","enquiry"], response:"📋 Admissions open for Nursery to Class XII!\n\nFill the enquiry form on our Home page, or:\n📞 Call: +91 98125 74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Opp. Pawan Vatika, Khurana Road, Kaithal" },
  { keywords: ["fee","fees","cost","charges","tuition","price"], response:"💰 For the latest fee structure and payment schedule, please contact us directly:\n📞 +91 98125 74766\n\nOur staff will provide a complete, transparent breakdown." },
  { keywords: ["timing","time","schedule","hours","open"], response:"⏰ School Timings:\nMonday – Saturday: 7:30 AM – 2:30 PM\n\nClosed on Sundays and national holidays." },
  { keywords: ["cbse","board","affiliation","affiliated","curriculum"], response:"✅ Yes! Fully affiliated with CBSE, New Delhi.\n\nWe follow NCERT curriculum for all classes from Nursery to Class XII." },
  { keywords: ["class","stream","science","commerce","arts","subject"], response:"📚 Classes: Nursery to Class XII\n\nSenior Secondary (XI–XII) Streams:\n• Science\n• Commerce\n• Arts / Humanities\n\nAll with carefully chosen subject combinations!" },
  { keywords: ["faculty","teacher","staff"], response:"👩‍🏫 Our faculty are highly qualified, experienced, and passionate! Subject-specialist trained with regular professional development.\n\nVisit our Faculty page to meet the team!" },
  { keywords: ["facility","facilities","lab","library","sports","computer","smart","bus","transport"], response:"🏗️ World-class facilities:\n🔬 Science Labs (Physics, Chemistry, Biology)\n💻 Computer Lab\n🖥️ Smart Classrooms\n📚 Library\n⚽ Sports Ground\n🎨 Art & Music Rooms\n🚌 School Bus Transport" },
  { keywords: ["location","address","where","kaithal","haryana"], response:"📍 Our Address:\nOpp. Pawan Vatika, Khurana Road\nKaithal, Haryana – 136027\n\nEasy to find near the Khurana Bypass!" },
  { keywords: ["contact","phone","email","call","whatsapp","number"], response:"📞 Phone/WhatsApp: +91 98125 74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Opp. Pawan Vatika, Khurana Road, Kaithal, Haryana" },
  { keywords: ["result","results","board","percentage","score","rank"], response:"🏆 Outstanding CBSE Results!\n\n✅ 100% pass rate every year\n⭐ Many students score 90%+\n🥇 District & State toppers\n\nAcademic excellence is our hallmark!" },
  { keywords: ["tour","guide","explore","show"], response:"🚀 Click the glowing 'Start Tour' button and I'll personally guide you through every page — Home, Academics, Facilities, Faculty, Achievements, Gallery, and more! Each page auto-scrolls for you." },
  { keywords: ["hello","hi","hey","namaste","hii"], response:"👋 Namaste! I'm Millie, your AI Guide for The Milestone Sr. Sec. School!\n\nI can help with admissions, fees, timings, facilities, academics, and more.\n\nOr start a guided tour of the full website! 🚀" },
  { keywords: ["achievement","award","prize","trophy","win"], response:"🏅 Our students win at:\n📖 CBSE Board Exams (District & State toppers)\n⚽ Inter-School Sports\n🎭 Cultural Competitions\n🔬 Science Fairs\n\nVisit our Achievements page for the full list!" },
  { keywords: ["transport","bus","van","pick","drop"], response:"🚌 Yes! Safe, reliable school bus transport covering all major areas of Kaithal.\n\nCall +91 98125 74766 for route details." },
];

const SUGGESTIONS = [
  { icon: <BookOpen size={11}/>, text: "Admission enquiry?" },
  { icon: <Clock size={11}/>,    text: "School timings?" },
  { icon: <Trophy size={11}/>,   text: "Board results?" },
  { icon: <MapPin size={11}/>,   text: "School location?" },
  { icon: <Bus size={11}/>,      text: "Transport/bus?" },
  { icon: <Phone size={11}/>,    text: "Contact details?" },
  { icon: <Image size={11}/>,    text: "Gallery & events?" },
  { icon: <Sparkles size={11}/>, text: "Fee structure?" },
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const item of CHAT_RESPONSES) {
    if (item.keywords.some(k => lower.includes(k))) return item.response;
  }
  return "🤔 Great question! For detailed info please:\n📞 Call: +91 98125 74766\n✉️ Email: themilestoneKtl@gmail.com\n\nOr start the guided tour to explore every section of our website!";
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
    { from: "bot", text: "👋 Namaste! I'm Millie, your AI Guide for The Milestone Sr. Sec. School.\n\nAsk me anything or tap a suggestion below!" },
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
    }, 800);
  };

  const step = TOUR_STEPS[tourStep];
  const secLeft = Math.max(0, Math.round((TOUR_DURATION*(1-progress/100))/1000));

  return (
    <div className="fixed bottom-5 right-4 z-[9998] flex flex-col items-end gap-3 select-none"
         style={{ fontFamily:"'Poppins',sans-serif" }}>

      {/* ══ TOUR PANEL ══════════════════════════════════════════ */}
      <AnimatePresence>
        {mode === "tour" && (
          <motion.div key="tour"
            initial={{ opacity:0, y:28, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:0.9 }}
            transition={{ type:"spring", stiffness:340, damping:28 }}
            className="w-[300px] rounded-2xl overflow-hidden"
            style={{
              background: GLASS_BG,
              backdropFilter:"blur(20px)",
              border:`1.5px solid rgba(0,200,83,0.35)`,
              boxShadow:`0 8px 40px rgba(0,200,83,0.18), 0 0 0 1px rgba(0,200,83,0.08), inset 0 1px 0 rgba(255,255,255,0.9)`,
            }}>

            {/* header bar */}
            <div className="flex items-center justify-between px-4 py-2.5"
                 style={{ background:`linear-gradient(90deg,${G1}18,${G2}12)`,
                          borderBottom:`1px solid rgba(0,200,83,0.15)` }}>
              <div className="flex items-center gap-2">
                <motion.div className="w-6 h-6 rounded-full flex items-center justify-center"
                  animate={{ boxShadow:[`0 0 6px ${G3}`,`0 0 14px ${G3}`,`0 0 6px ${G3}`] }}
                  transition={{ repeat:Infinity, duration:2 }}
                  style={{ background:`linear-gradient(135deg,${G1},${G2})` }}>
                  <span style={{ fontSize:11 }}>🤖</span>
                </motion.div>
                <span style={{ fontWeight:700, fontSize:12, color:"#0a2010" }}>
                  Millie — Tour Guide
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ fontSize:10, color:"#888", fontWeight:600 }}>{tourStep+1}/{TOUR_STEPS.length}</span>
                <button onClick={stopTour}
                  className="w-5 h-5 rounded-full flex items-center justify-center transition-all hover:bg-red-50"
                  style={{ color:"#bbb" }}><X size={12}/></button>
              </div>
            </div>

            <div className="px-4 pt-3 pb-4">
              {/* step title */}
              <motion.p key={tourStep+"-t"} initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }}
                        className="font-bold mb-2" style={{ fontSize:13, color:G1 }}>
                {step.title}
              </motion.p>

              {/* typewriter message */}
              <div className="rounded-xl p-3 mb-3"
                   style={{ background:`linear-gradient(135deg,rgba(0,200,83,0.06),rgba(105,240,174,0.04))`,
                            border:`1px solid rgba(0,200,83,0.12)`, minHeight:100, maxHeight:130, overflowY:"auto",
                            scrollbarWidth:"thin", scrollbarColor:`${G2} transparent` }}>
                <TypewriterText key={tourStep} text={step.message} />
              </div>

              {/* progress */}
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <span style={{ fontSize:10, color:"#888" }}>Page {tourStep+1} of {TOUR_STEPS.length}</span>
                  <span style={{ fontSize:10, color:G1, fontWeight:600 }}>Next in {secLeft}s</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ background:"rgba(0,200,83,0.1)" }}>
                  <motion.div className="h-full rounded-full"
                    style={{ width:`${progress}%`,
                             background:`linear-gradient(90deg,${G1},${G3})`,
                             boxShadow:`0 0 8px ${G3}` }}/>
                </div>
              </div>

              {/* nav buttons */}
              <div className="flex gap-2">
                <button onClick={prevStep} disabled={tourStep===0}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-25 hover:scale-105"
                  style={{ background:"rgba(0,200,83,0.08)", color:G1, border:`1px solid rgba(0,200,83,0.2)` }}>
                  <ChevronLeft size={13}/> Prev
                </button>
                <button onClick={nextStep}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105"
                  style={{ background:`linear-gradient(90deg,${G1},#009624)`, color:"white",
                           boxShadow:`0 4px 14px rgba(0,200,83,0.4)` }}>
                  {tourStep===TOUR_STEPS.length-1
                    ? <><RotateCcw size={12}/> Finish</>
                    : <>Next <ChevronRight size={12}/></>}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ══ CHAT PANEL ══════════════════════════════════════════ */}
        {mode === "chat" && (
          <motion.div key="chat"
            initial={{ opacity:0, y:28, scale:0.9 }} animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:0.9 }}
            transition={{ type:"spring", stiffness:340, damping:28 }}
            className="w-[300px] rounded-2xl overflow-hidden flex flex-col"
            style={{
              height:460,
              background:GLASS_BG,
              backdropFilter:"blur(20px)",
              border:`1.5px solid rgba(0,200,83,0.35)`,
              boxShadow:`0 8px 40px rgba(0,200,83,0.18), 0 0 0 1px rgba(0,200,83,0.08), inset 0 1px 0 rgba(255,255,255,0.9)`,
            }}>

            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                 style={{ background:`linear-gradient(90deg,${G1}18,${G2}12)`,
                          borderBottom:`1px solid rgba(0,200,83,0.15)` }}>
              <div className="flex items-center gap-2.5">
                {/* animated orb */}
                <motion.div className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${G1},${G2})` }}
                  animate={{ boxShadow:[`0 0 0 2px ${G3}40`,`0 0 0 6px ${G3}20`,`0 0 0 2px ${G3}40`] }}
                  transition={{ repeat:Infinity, duration:2 }}>
                  <img src="/ai-robot.png" alt="Millie"
                       className="w-8 h-8 object-contain rounded-full"/>
                  <motion.div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
                    style={{ background:G1 }}
                    animate={{ scale:[1,1.3,1] }} transition={{ repeat:Infinity, duration:1.5 }}/>
                </motion.div>
                <div>
                  <p style={{ fontWeight:700, fontSize:13, color:"#0a2010", lineHeight:1 }}>Millie</p>
                  <p style={{ fontSize:10, color:G1, marginTop:2 }}>● AI Guide — Online</p>
                </div>
              </div>
              <button onClick={()=>setMode("idle")}
                className="w-6 h-6 rounded-full flex items-center justify-center transition-all hover:bg-red-50"
                style={{ color:"#bbb" }}><X size={13}/></button>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5"
                 style={{ scrollbarWidth:"thin", scrollbarColor:`${G2} transparent` }}>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity:0, y:6, scale:0.97 }}
                  animate={{ opacity:1, y:0, scale:1 }} transition={{ duration:0.25 }}
                  className={`flex ${msg.from==="user"?"justify-end":"justify-start"} items-end gap-1.5`}>
                  {msg.from==="bot" && (
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                         style={{ background:`linear-gradient(135deg,${G1},${G2})`, fontSize:10 }}>
                      🤖
                    </div>
                  )}
                  <div className="max-w-[82%] px-3 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line"
                       style={msg.from==="bot"
                         ? { background:"white", color:"#1a1a1a",
                             border:`1px solid rgba(0,200,83,0.15)`,
                             boxShadow:`0 2px 12px rgba(0,200,83,0.08)`,
                             borderBottomLeftRadius:4 }
                         : { background:`linear-gradient(135deg,${G1},#009624)`,
                             color:"white",
                             boxShadow:`0 4px 14px rgba(0,200,83,0.35)`,
                             borderBottomRightRadius:4 }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* thinking indicator */}
              <AnimatePresence>
                {thinking && (
                  <motion.div initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0 }} className="flex items-end gap-1.5">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                         style={{ background:`linear-gradient(135deg,${G1},${G2})`, fontSize:10 }}>🤖</div>
                    <div className="px-3 py-2.5 rounded-2xl flex gap-1 items-center"
                         style={{ background:"white", border:`1px solid rgba(0,200,83,0.15)`,
                                  boxShadow:`0 2px 12px rgba(0,200,83,0.08)`, borderBottomLeftRadius:4 }}>
                      {[0,0.15,0.3].map((delay,i) => (
                        <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
                          style={{ background:G1 }}
                          animate={{ y:[0,-4,0], opacity:[0.5,1,0.5] }}
                          transition={{ repeat:Infinity, duration:0.8, delay }}/>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={chatEndRef}/>
            </div>

            {/* suggestions */}
            <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 flex-shrink-0"
                 style={{ borderTop:`1px solid rgba(0,200,83,0.1)` }}>
              {SUGGESTIONS.map((s) => (
                <motion.button key={s.text} onClick={()=>sendMessage(s.text)}
                  whileHover={{ scale:1.05, y:-1 }} whileTap={{ scale:0.97 }}
                  className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full font-medium"
                  style={{ background:"white", color:"#1a6630",
                           border:`1px solid rgba(0,200,83,0.25)`,
                           boxShadow:`0 2px 8px rgba(0,200,83,0.1)` }}>
                  <span style={{ color:G1 }}>{s.icon}</span>
                  {s.text}
                </motion.button>
              ))}
            </div>

            {/* input */}
            <div className="px-3 py-3 flex gap-2 flex-shrink-0"
                 style={{ borderTop:`1px solid rgba(0,200,83,0.1)`, background:"rgba(255,255,255,0.7)" }}>
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl"
                   style={{ background:"white", border:`1.5px solid rgba(0,200,83,0.3)`,
                            boxShadow:`0 0 0 0px ${G3}`, transition:"box-shadow 0.2s" }}>
                <input value={input} onChange={e=>setInput(e.target.value)}
                       onKeyDown={e=>e.key==="Enter"&&sendMessage()}
                       placeholder="Ask me anything…"
                       className="flex-1 text-xs outline-none bg-transparent"
                       style={{ color:"#1a1a1a" }}/>
                <motion.button animate={{ opacity:[0.4,0.8,0.4] }}
                  transition={{ repeat:Infinity, duration:2 }}
                  style={{ color:G2 }}><Mic size={13}/></motion.button>
              </div>
              <motion.button onClick={()=>sendMessage()}
                whileHover={{ scale:1.12 }} whileTap={{ scale:0.92 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background:`linear-gradient(135deg,${G1},#009624)`,
                         boxShadow:`0 4px 14px rgba(0,200,83,0.4)` }}>
                <Send size={13} color="white"/>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ IDLE — BUTTONS + ROBOT ══════════════════════════════ */}
      <div className="flex flex-col items-end gap-2">
        <AnimatePresence>
          {mode === "idle" && (
            <motion.div key="idle-btns"
              initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:6 }} className="flex flex-col items-end gap-2">

              {/* Start Tour */}
              <motion.button onClick={startTour}
                initial={{ opacity:0, x:16 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.08 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold"
                style={{
                  background:"white",
                  color:"#0a5c25",
                  border:`1.5px solid rgba(0,200,83,0.4)`,
                  boxShadow:`0 4px 20px rgba(0,200,83,0.2), inset 0 1px 0 rgba(255,255,255,1)`,
                }}>
                <motion.span animate={{ rotate:[0,360] }} transition={{ repeat:Infinity, duration:3, ease:"linear" }}
                             style={{ display:"inline-block" }}>🚀</motion.span>
                <GlowWords text="Start Tour" color="#0a5c25"/>
                <motion.div className="w-1.5 h-1.5 rounded-full"
                  animate={{ opacity:[1,0.3,1], scale:[1,1.4,1] }}
                  transition={{ repeat:Infinity, duration:1.2 }}
                  style={{ background:G1 }}/>
              </motion.button>

              {/* Chat with AI */}
              <motion.button onClick={()=>setMode("chat")}
                initial={{ opacity:0, x:16 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.16 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold"
                style={{
                  background:`linear-gradient(90deg,${G1},#009624)`,
                  color:"white",
                  border:"none",
                  boxShadow:`0 4px 20px rgba(0,200,83,0.45), 0 1px 0 rgba(255,255,255,0.2) inset`,
                }}>
                <motion.span animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:1.6 }}
                             style={{ display:"inline-block" }}>
                  <Sparkles size={13} color="white"/>
                </motion.span>
                <GlowWords text="Chat with AI Assistant" color="white"/>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot orb */}
        <motion.button
          onClick={()=>{ if(mode==="tour") stopTour(); else if(mode==="chat") setMode("idle"); }}
          animate={{ y:[0,-7,0] }} transition={{ repeat:Infinity, duration:2.8, ease:"easeInOut" }}
          whileHover={{ scale:1.1 }} whileTap={{ scale:0.94 }}
          className="relative cursor-pointer" title="Millie — AI Guide">

          {/* outer glow ring */}
          <motion.div className="absolute -inset-2 rounded-full pointer-events-none"
            animate={{ opacity:[0.6,0.15,0.6] }} transition={{ repeat:Infinity, duration:2.2 }}
            style={{ background:`radial-gradient(circle,${G3}55 0%,transparent 70%)` }}/>

          {/* spinning dashed ring */}
          <motion.div className="absolute -inset-1 rounded-full pointer-events-none"
            animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:7, ease:"linear" }}
            style={{ border:`1.5px dashed rgba(0,200,83,0.5)`, borderRadius:"50%" }}/>

          {/* solid glow border */}
          <motion.div className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ boxShadow:[`0 0 10px ${G3}60`,`0 0 22px ${G3}80`,`0 0 10px ${G3}60`] }}
            transition={{ repeat:Infinity, duration:2 }}
            style={{ borderRadius:"50%" }}/>

          <img src="/ai-robot.png" alt="Millie AI Guide"
               className="relative z-10"
               style={{ width:86, height:86, objectFit:"contain",
                        filter:`drop-shadow(0 4px 16px rgba(0,200,83,0.5)) drop-shadow(0 0 8px rgba(0,230,118,0.3))` }}/>
        </motion.button>
      </div>
    </div>
  );
}

/* ── Word-by-word animated label ────────────────────────────── */
function GlowWords({ text, color }: { text:string; color:string }) {
  return (
    <span className="flex gap-[3px] flex-wrap">
      {text.split(" ").map((w,i) => (
        <motion.span key={w+i} style={{ color }}
          initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:i*0.07, duration:0.3 }}>
          {w}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Typewriter with blinking green cursor ──────────────────── */
function TypewriterText({ text }: { text:string }) {
  const [shown, setShown] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    setShown(""); idx.current = 0;
    const iv = setInterval(() => {
      if (idx.current < text.length) setShown(text.slice(0, ++idx.current));
      else clearInterval(iv);
    }, 20);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <p style={{ color:"#1a4a2a", fontSize:11.5, lineHeight:1.7 }}>
      {shown}
      <motion.span animate={{ opacity:[1,0] }} transition={{ repeat:Infinity, duration:0.55 }}
        style={{ display:"inline-block", width:2, height:12, background:G1,
                 marginLeft:2, verticalAlign:"middle", borderRadius:1 }}/>
    </p>
  );
}
