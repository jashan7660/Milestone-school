import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, RotateCcw, Sparkles, BookOpen, Clock, Phone, MapPin, Bus, Trophy, Image } from "lucide-react";

/* ─── Futuristic neon palette ──────────────────────────────── */
const NEON  = "#00ff88";   /* neon green glow                 */
const CYAN  = "#00d9ff";   /* cyan accent                     */
const BLUE  = "#1145b5";   /* deep blue                       */
const GLASS = "rgba(8,12,28,0.88)";
const GLASS_LIGHT = "rgba(8,12,28,0.72)";

/* ─── Tour steps ────────────────────────────────────────────── */
const TOUR_STEPS = [
  { path: "/",                icon:"🏠", title:"Home",          message:"Welcome to The Milestone Sr. Sec. School – a CBSE-affiliated school in Kaithal, Haryana! The Home page shows our key highlights: 15+ years of excellence, 100% board pass rate, smart classrooms, experienced faculty, and vibrant campus life. Scroll down to explore admissions, stats, and milestones!" },
  { path: "/about/story",     icon:"📖", title:"Our Story",     message:"Every great school starts with a vision! Founded with a deep commitment to quality education and character building, Milestone has grown into one of the most trusted CBSE schools in Kaithal district. Our story is one of dedication – to our students, their families, and the community." },
  { path: "/about/directors", icon:"🎓", title:"Directors",     message:"Meet the visionary leaders behind The Milestone School! Our directors bring decades of experience in education. Under their leadership the school has achieved outstanding CBSE results, expanded infrastructure, and introduced smart classrooms and modern teaching methods." },
  { path: "/about/divisions", icon:"🏫", title:"Divisions",     message:"The Milestone School has well-defined academic divisions: Pre-Primary & Primary wings nurture curiosity through play-based learning; Middle School bridges childhood and adolescence; Senior Secondary (XI–XII) offers Science, Commerce, and Arts streams to prepare students for competitive exams and higher education." },
  { path: "/about/tieups",    icon:"🤝", title:"Tie-Ups",       message:"Education thrives through collaboration! Our Tie-Ups page showcases partnerships with leading organizations, coaching institutes, tech providers, and community bodies. Career counseling, sports academy partnerships, and CBSE resource center connections keep students and teachers updated." },
  { path: "/academics",       icon:"📚", title:"Academics",     message:"The Academics section is the core of what we do! CBSE curriculum from Nursery to Class XII, NCERT textbooks supplemented with digital resources and practical experiments. Our academic calendar balances rigorous study with co-curricular activities. Board exam preparation is our special strength!" },
  { path: "/facilities",      icon:"🏗️", title:"Facilities",   message:"Best-equipped school in Kaithal! Physics, Chemistry & Biology labs; Computer lab with latest tech; Smart classrooms with interactive whiteboards; Well-stocked library; Sports ground, basketball & volleyball courts; Art room, music room, activity halls, and safe school bus transport." },
  { path: "/faculty",         icon:"👩‍🏫", title:"Faculty",   message:"Our incredible educators are selected for subject expertise and passion! Faculty undergoes continuous professional development per CBSE guidelines. Specialist teachers for every subject, great faculty-to-student ratio, and personalized attention ensure no child falls behind. Our teachers are mentors, role models, and friends!" },
  { path: "/achievements",    icon:"🏆", title:"Achievements",  message:"Students have won academic, sports, cultural, and community service awards! CBSE board results consistently see students scoring above 90% with district and state toppers. Sports teams win inter-school competitions across Haryana. Science fairs, debates, quiz bowls – Milestone students shine everywhere!" },
  { path: "/gallery",         icon:"🖼️", title:"Gallery",       message:"A visual celebration of life at Milestone! See vibrant classrooms, science experiments, cultural programs, Sports Day, Annual Day, and everyday school magic. Joy on students' faces, concentration of young scientists in labs, and creativity in art rooms. Thank you for completing the tour – we hope to welcome you!" },
];

/* ─── Chat responses ─────────────────────────────────────────── */
const CHAT_RESPONSES: { keywords: string[]; response: string }[] = [
  { keywords: ["admission","enroll","apply","join","enquiry","aam","प्रवेश"],
    response: "📋 Admissions open for Session 2026–27 — Nursery to Class XII!\n\n📞 Call/WhatsApp: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Opp. Pawan Vatika, Khurana Road, Kaithal\n\nOr click \"Admissions Open\" in the top menu!" },
  { keywords: ["fee","fees","cost","charges","tuition","price","kitna","शुल्क"],
    response: "💰 For the complete fee structure and payment schedule, contact us directly:\n📞 +91 98125-74766\n✉️ themilestoneKtl@gmail.com\n\nOur admissions team will share a transparent breakdown." },
  { keywords: ["timing","time","schedule","hours","open","samay","समय","kab"],
    response: "⏰ School Timings:\nMonday – Saturday: 7:30 AM – 2:30 PM\n\nClosed on Sundays and national holidays.\n\nOffice timings: 8:00 AM – 3:00 PM." },
  { keywords: ["cbse","board","affiliation","affiliated","curriculum"],
    response: "✅ Fully affiliated with CBSE, New Delhi!\n\nNCERT curriculum for Nursery to Class XII.\nBoard exams: Class X & XII (CBSE pattern)." },
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
    response: "🚀 Click the glowing 'Start Tour' button! I'll guide you through every page — Home, Academics, Facilities, Faculty, Achievements, Gallery, and more!" },
  { keywords: ["hello","hi","hey","namaste","hii","helo","नमस्ते"],
    response: "👋 Namaste! I'm Millie, your AI Guide for The Milestone Sr. Sec. School!\n\nI can help with admissions, fees, timings, facilities, academics, and more.\n\nOr click 'Start Tour' for a guided website tour! 🚀" },
  { keywords: ["achievement","award","prize","trophy","win","gold","medal"],
    response: "🏅 Our students win:\n📖 CBSE Board Exams — District & State toppers\n⚽ Inter-School Sports across Haryana\n🎭 Cultural Competitions\n🔬 Science Fairs & Quiz Bowls\n🏅 Gold at Chandigarh Open Skating Championship\n\nVisit our Achievements page for the full list!" },
  { keywords: ["transport","bus","van","pick","drop","vehicle","गाड़ी"],
    response: "🚌 Safe, reliable school bus transport covering all major areas of Kaithal!\n\nCall +91 98125-74766 for route details and timings." },
  { keywords: ["year","found","start","establish","history","2008","कब"],
    response: "📅 The Milestone Sr. Sec. School was established with a vision to provide quality CBSE education in Kaithal.\n\n15+ years of excellence, trusted by hundreds of families!" },
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
  return "🤔 Great question! For more details:\n📞 Call: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n\nOr start the guided tour to explore our website!";
}

type Mode = "idle" | "tour" | "chat";
interface ChatMsg { from: "user" | "bot"; text: string; }

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function AIGuide() {
  const [mode, setMode]         = useState<Mode>("idle");
  const [tourStep, setTourStep] = useState(0);
  const [messages, setMessages] = useState<ChatMsg[]>([
    { from:"bot", text:"👋 Namaste! I'm Millie, your AI Guide!\n\nAsk me anything about The Milestone Sr. Sec. School — admissions, timings, facilities, academics, and more." },
  ]);
  const [input, setInput]       = useState("");
  const [thinking, setThinking] = useState(false);
  const [, navigate]            = useLocation();

  const audioRef    = useRef<HTMLAudioElement | null>(null);
  const nextStepRef = useRef<() => void>(() => {});
  const chatEndRef  = useRef<HTMLDivElement>(null);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.onended = null;
      audioRef.current = null;
    }
  }, []);

  useEffect(() => () => { stopAudio(); }, [stopAudio]);

  const playTourAudio = useCallback((step: number) => {
    stopAudio();
    const audio = new Audio(`/audio/tour-${step}.mp3`);
    audioRef.current = audio;
    audio.onended = () => { audioRef.current = null; nextStepRef.current(); };
    audio.play().catch(() => {});
  }, [stopAudio]);

  const startStep = useCallback((step: number) => {
    if (step >= TOUR_STEPS.length) {
      stopAudio();
      setMode("idle"); setTourStep(0); navigate("/");
      window.scrollTo({ top:0, behavior:"smooth" }); return;
    }
    stopAudio(); setTourStep(step);
    navigate(TOUR_STEPS[step].path);
    window.scrollTo({ top:0, behavior:"smooth" });
    nextStepRef.current = () => startStep(step + 1);
    playTourAudio(step);
  }, [navigate, playTourAudio, stopAudio]);

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
      setMessages(m => [...m, { from:"bot", text:getBotResponse(msg) }]);
    }, 700);
  };

  const step = TOUR_STEPS[tourStep];

  return (
    <div className="fixed bottom-5 right-4 z-[9998] flex flex-col items-end gap-3 select-none"
         style={{ fontFamily:"'Poppins',sans-serif" }}>

      {/* ══ TOUR PANEL ═══════════════════════════════════════════ */}
      <AnimatePresence>
        {mode === "tour" && (
          <motion.div key="tour"
            initial={{ opacity:0, y:28, scale:0.88 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:0.90 }}
            transition={{ type:"spring", stiffness:340, damping:28 }}
            className="w-[340px] overflow-hidden relative"
            style={{
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
            <div className="flex items-center justify-between px-4 py-3"
                 style={{ borderBottom:`1px solid rgba(255,255,255,0.06)` }}>
              <div className="flex items-center gap-2.5">
                {/* Animated AI orb in header */}
                <motion.div className="relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${BLUE},#0a2a7a)`,
                           boxShadow:`0 0 12px ${NEON}60, 0 0 24px ${CYAN}30` }}
                  animate={{ boxShadow:[`0 0 10px ${NEON}50,0 0 20px ${CYAN}20`,`0 0 18px ${NEON}80,0 0 36px ${CYAN}40`,`0 0 10px ${NEON}50,0 0 20px ${CYAN}20`] }}
                  transition={{ repeat:Infinity, duration:2 }}>
                  <span style={{ fontSize:15 }}>🤖</span>
                  {/* Blinking eye dots */}
                  <motion.div className="absolute bottom-1 left-1.5 w-1 h-1 rounded-full"
                    style={{ background:NEON }}
                    animate={{ scaleY:[1,0.1,1] }} transition={{ repeat:Infinity, duration:3.5, delay:0.3 }}/>
                  <motion.div className="absolute bottom-1 right-1.5 w-1 h-1 rounded-full"
                    style={{ background:NEON }}
                    animate={{ scaleY:[1,0.1,1] }} transition={{ repeat:Infinity, duration:3.5, delay:0.5 }}/>
                </motion.div>
                <div>
                  <div style={{ fontWeight:800, fontSize:11.5, color:"white", letterSpacing:"0.01em", lineHeight:1.2 }}>
                    Millie — Website Tour
                  </div>
                  <div style={{ fontSize:8.5, color:NEON, fontWeight:700, letterSpacing:"0.08em", marginTop:1 }}>
                    AI GUIDE · MILESTONE SCHOOL
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Step counter pill */}
                <div className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                     style={{ background:`rgba(0,255,136,0.12)`, color:NEON, border:`1px solid ${NEON}40` }}>
                  {tourStep+1} / {TOUR_STEPS.length}
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
              <motion.div key={tourStep+"-title"}
                initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
                transition={{ duration:0.35 }}
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
                    Page {tourStep+1} of {TOUR_STEPS.length}
                  </div>
                </div>
              </motion.div>

              {/* Message box */}
              <motion.div key={tourStep+"-msg"}
                initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.3 }}
                className="rounded-[14px] p-3 mb-3"
                style={{
                  background:"rgba(255,255,255,0.04)",
                  border:`1px solid rgba(255,255,255,0.08)`,
                  minHeight:90, maxHeight:150, overflowY:"auto",
                  scrollbarWidth:"thin",
                  scrollbarColor:`${NEON}30 transparent`,
                }}>
                <TypewriterText key={tourStep} text={step.message}/>
              </motion.div>

              {/* Step dots */}
              <div className="flex justify-center gap-1.5 mb-3">
                {TOUR_STEPS.map((_, i) => (
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
                  <ChevronLeft size={13}/> Prev
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
                  {tourStep===TOUR_STEPS.length-1
                    ? <><RotateCcw size={12}/> Finish</>
                    : <>Next <ChevronRight size={12}/></>}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ══ CHAT PANEL ══════════════════════════════════════════ */}
        {mode === "chat" && (
          <motion.div key="chat"
            initial={{ opacity:0, y:28, scale:0.88 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:20, scale:0.90 }}
            transition={{ type:"spring", stiffness:340, damping:28 }}
            className="w-[340px] flex flex-col overflow-hidden relative"
            style={{ height:500,
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
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                 style={{ borderBottom:`1px solid rgba(255,255,255,0.06)` }}>
              <div className="flex items-center gap-2.5">
                <motion.div className="relative w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background:`linear-gradient(135deg,${BLUE},#0a1e6e)`,
                           boxShadow:`0 0 14px ${NEON}50, 0 0 28px ${CYAN}25` }}
                  animate={{ boxShadow:[`0 0 12px ${NEON}40,0 0 24px ${CYAN}20`,`0 0 22px ${NEON}70,0 0 44px ${CYAN}35`,`0 0 12px ${NEON}40,0 0 24px ${CYAN}20`] }}
                  transition={{ repeat:Infinity, duration:2.2 }}>
                  <img src="/ai-robot.png" alt="Millie" className="w-10 h-10 object-contain rounded-full"/>
                  <motion.div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
                    style={{ background:NEON, borderColor:GLASS }}
                    animate={{ scale:[1,1.35,1], boxShadow:[`0 0 4px ${NEON}`,`0 0 10px ${NEON}`,`0 0 4px ${NEON}`] }}
                    transition={{ repeat:Infinity, duration:1.4 }}/>
                </motion.div>
                <div>
                  <p style={{ fontWeight:800, fontSize:13, color:"white", lineHeight:1.1 }}>Millie</p>
                  <p style={{ fontSize:8.5, color:NEON, fontWeight:700, letterSpacing:"0.07em", marginTop:1 }}>
                    AI GUIDE · MILESTONE SCHOOL
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background:NEON }}
                      animate={{ opacity:[1,0.3,1] }} transition={{ repeat:Infinity, duration:1.2 }}/>
                    <p style={{ fontSize:9, color:"rgba(255,255,255,0.40)", fontWeight:500 }}>Online — Ready to help</p>
                  </div>
                </div>
              </div>
              <motion.button onClick={()=>setMode("idle")} whileHover={{ scale:1.15 }} whileTap={{ scale:0.9 }}
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.50)" }}>
                <X size={13}/>
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5"
                 style={{ scrollbarWidth:"thin", scrollbarColor:`${NEON}25 transparent` }}>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.22 }}
                  className={`flex ${msg.from==="user"?"justify-end":"justify-start"} items-end gap-1.5`}>
                  {msg.from==="bot" && (
                    <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] flex-shrink-0"
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
              <p style={{ fontSize:9, color:`${NEON}80`, fontWeight:700, marginBottom:6,
                          textTransform:"uppercase", letterSpacing:"0.08em" }}>Quick questions</p>
              <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth:"none" }}>
                {SUGGESTIONS.map(s => (
                  <motion.button key={s.text} onClick={()=>sendMessage(s.text)}
                    whileHover={{ scale:1.05, y:-1 }} whileTap={{ scale:0.95 }}
                    className="flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-full font-semibold flex-shrink-0"
                    style={{ background:"rgba(0,255,136,0.07)", color:NEON,
                             border:`1px solid rgba(0,255,136,0.22)` }}>
                    <span style={{ opacity:0.8 }}>{s.icon}</span>
                    {s.text}
                  </motion.button>
                ))}
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
                       placeholder="Ask me anything…"
                       className="flex-1 text-[12px] outline-none bg-transparent"
                       style={{ color:"rgba(255,255,255,0.85)",
                                caretColor: NEON }}/>
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

      {/* ══ IDLE BUTTONS + FLOATING ROBOT ═══════════════════════ */}
      <div className="flex flex-col items-end gap-2.5">
        <AnimatePresence>
          {mode === "idle" && (
            <motion.div key="idle-btns"
              initial={{ opacity:0, y:12, scale:0.93 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:8, scale:0.93 }}
              className="flex flex-col items-end gap-2">

              {/* AI Guide label */}
              <motion.div initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{ background:GLASS_LIGHT, backdropFilter:"blur(16px)",
                         border:`1px solid ${NEON}35`,
                         boxShadow:`0 0 14px ${NEON}20, 0 4px 20px rgba(0,0,0,0.4)` }}>
                <motion.div className="w-1.5 h-1.5 rounded-full" style={{ background:NEON }}
                  animate={{ opacity:[1,0.2,1], boxShadow:[`0 0 4px ${NEON}`,`0 0 10px ${NEON}`,`0 0 4px ${NEON}`] }}
                  transition={{ repeat:Infinity, duration:1.3 }}/>
                <span style={{ fontSize:9.5, fontWeight:800, color:"white", letterSpacing:"0.06em" }}>
                  MILESTONE — AI GUIDE
                </span>
              </motion.div>

              {/* Start Tour button */}
              <motion.button onClick={startTour}
                initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.06 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.94 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[12px] font-bold relative overflow-hidden"
                style={{ background:GLASS_LIGHT, backdropFilter:"blur(16px)",
                         border:`1px solid ${NEON}40`,
                         boxShadow:`0 0 18px ${NEON}25, 0 8px 32px rgba(0,0,0,0.45)`,
                         color:"white" }}>
                {/* Shimmer sweep */}
                <motion.div className="absolute inset-0 rounded-full"
                  style={{ background:`linear-gradient(90deg,transparent,${NEON}18,transparent)` }}
                  animate={{ x:["-100%","100%"] }} transition={{ repeat:Infinity, duration:2.4, ease:"linear" }}/>
                <motion.span animate={{ rotate:[0,360] }}
                  transition={{ repeat:Infinity, duration:4, ease:"linear" }}
                  style={{ display:"inline-block" }}>🚀</motion.span>
                <span className="relative">Start Tour</span>
                <motion.div className="w-1.5 h-1.5 rounded-full"
                  style={{ background:NEON, boxShadow:`0 0 6px ${NEON}` }}
                  animate={{ opacity:[1,0.2,1] }} transition={{ repeat:Infinity, duration:1.2 }}/>
              </motion.button>

              {/* Chat with AI button */}
              <motion.button onClick={()=>setMode("chat")}
                initial={{ opacity:0, x:14 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.12 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.94 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[12px] font-bold relative overflow-hidden"
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
                <span className="relative">Chat with AI</span>
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

          {/* Glowing background disc */}
          <motion.div className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ boxShadow:[`0 0 16px ${NEON}60,0 0 32px ${CYAN}30`,`0 0 28px ${NEON}90,0 0 56px ${CYAN}50`,`0 0 16px ${NEON}60,0 0 32px ${CYAN}30`] }}
            transition={{ repeat:Infinity, duration:2.2 }}
            style={{ background:`radial-gradient(circle,${BLUE}cc,#050c22)`, borderRadius:"50%", width:"100%", height:"100%" }}/>

          <img src="/ai-robot.png" alt="Millie AI Guide"
               className="relative z-10"
               style={{ width:86, height:86, objectFit:"contain",
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
function TypewriterText({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    setShown(""); idx.current = 0;
    const iv = setInterval(() => {
      if (idx.current < text.length) setShown(text.slice(0, ++idx.current));
      else clearInterval(iv);
    }, 16);
    return () => clearInterval(iv);
  }, [text]);
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
