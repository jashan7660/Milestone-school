import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, RotateCcw, Sparkles } from "lucide-react";

/* ─── School palette ───────────────────────────────────────── */
const ROYAL_BLUE  = "#1a55b8";
const DEEP_NAVY   = "#0c1e45";
const EMERALD     = "#1b9657";
const GOLD        = "#d4a017";
const GOLD_LIGHT  = "#f0c040";
const CARD_BG     = "linear-gradient(145deg,#0c1e45 0%,#153270 55%,#0e2a5c 100%)";

/* ─── Tour steps ────────────────────────────────────────────── */
const TOUR_STEPS = [
  {
    path: "/",
    title: "🏠 Home Page",
    message:
      "Welcome to The Milestone Sr. Sec. School! Right here on the Home page you'll discover everything we offer — from our mission to admissions, facilities, and more. We are a proud CBSE-affiliated school in Kaithal, Haryana, dedicated to excellence in education since our founding. Scroll down and you'll find key highlights: smart classrooms, experienced faculty, 100% board results, and vibrant campus life. Our Stats section showcases milestones — students, faculty, and years of excellence. The Admissions Form is right here too, making it easy for families to enquire and enroll. Every section captures the spirit of The Milestone School — academic brilliance combined with holistic development. We believe every child deserves the best start in life, and that's exactly what we provide every single day.",
  },
  {
    path: "/about/story",
    title: "📖 Our Story",
    message:
      "Welcome to Our Story page! This is where the heart of The Milestone Sr. Sec. School comes alive. Every great institution begins with a vision, and ours was simple yet powerful — to create a school where every student thrives academically, socially, and personally. Our founders laid the cornerstone with a deep commitment to quality education and character building. Over the years, The Milestone School has grown from humble beginnings into one of the most trusted CBSE schools in Kaithal district. We have seen generations of students walk through our gates, and watched them go on to achieve remarkable things in medicine, engineering, arts, and business. Our story is not just about buildings and classrooms — it is about relationships, values, and the unwavering belief that education is the greatest gift you can give a child.",
  },
  {
    path: "/about/directors",
    title: "🎓 Our Directors",
    message:
      "Meet the visionary leaders behind The Milestone Sr. Sec. School! On this Directors page you'll get to know the dedicated individuals whose passion and wisdom have shaped this institution. Our directors bring decades of experience in education, administration, and community development. Under their leadership the school has achieved outstanding CBSE results year after year, expanded its infrastructure, introduced smart classrooms, and built partnerships with leading educational organizations. The directors are not just administrators — they are educators at heart. They regularly interact with students and faculty, ensuring that the school's culture remains warm, inclusive, and excellence-driven. Their vision: to be recognized across India as a model of innovative, compassionate, and result-oriented education.",
  },
  {
    path: "/about/divisions",
    title: "🏫 Divisions",
    message:
      "The Milestone Sr. Sec. School is organized into well-defined academic divisions to ensure every student receives age-appropriate, focused, and high-quality education. Our Pre-Primary and Primary wings create a nurturing environment where young children develop curiosity and creativity through play-based learning. The Middle School division bridges childhood and adolescence, helping students build strong fundamentals while exploring sports, arts, and co-curricular activities. Our Senior Secondary division — Classes XI and XII — offers Science, Commerce, and Arts streams, carefully designed to prepare students for competitive examinations and higher education. Across all divisions we maintain small class sizes and individualized attention for each learner.",
  },
  {
    path: "/about/tieups",
    title: "🤝 Tie-Ups",
    message:
      "Education doesn't happen in isolation — The Milestone School believes in the power of collaboration! Our Tie-Ups page showcases the strong partnerships we have built with leading organizations, coaching institutes, technology providers, and community bodies. These alliances give our students access to resources and opportunities far beyond a standard curriculum. Career counseling partnerships help Class X and XII students navigate their futures; sports academy tie-ups bring professional coaching to our campus. We also maintain strong connections with CBSE resource centers, ensuring our teachers receive the latest training. Our community partnerships extend our school's impact into the wider society of Kaithal — together building brighter futures for the children of Haryana.",
  },
  {
    path: "/academics",
    title: "📚 Academics",
    message:
      "Step into the Academics section — the core of everything we do! This page gives you a comprehensive overview of our CBSE curriculum, subjects offered, and innovative teaching methodologies. We offer a rich academic program spanning Nursery to Class XII, with Science, Commerce, and Arts streams at senior secondary level. Our academic calendar balances rigorous study with co-curricular activities. We follow NCERT-prescribed textbooks and supplement them with digital resources and practical experiments that bring concepts to life. Special focus is given to board examination preparation — dedicated revision programs, sample papers, and mock tests have consistently helped our students achieve outstanding results. Academic excellence here is not just expected — it is inspired.",
  },
  {
    path: "/facilities",
    title: "🏗️ Facilities",
    message:
      "Welcome to the Facilities page — see why The Milestone School is one of the best-equipped schools in Kaithal! Our campus features fully equipped Physics, Chemistry, and Biology laboratories. Our computer laboratory provides hands-on experience with the latest technology. Smart classrooms with interactive whiteboards bring lessons to life. We have a well-stocked library with thousands of books and digital resources. Sports facilities include a large playground, basketball and volleyball courts. The school building is spacious and well-ventilated. We also have a dedicated art room, music room, and activity halls. Safe and reliable school bus transportation covers all major areas of Kaithal. Our facilities reflect a simple belief: children learn best when comfortable and inspired.",
  },
  {
    path: "/faculty",
    title: "👩‍🏫 Faculty",
    message:
      "The Faculty page introduces you to the most important asset of The Milestone School — our incredible team of educators! Each teacher is carefully selected for subject expertise, passion for teaching, and ability to connect with students. Our faculty undergoes continuous professional development to stay current with the latest CBSE guidelines. We have specialist teachers for every subject across all grades. Our faculty-to-student ratio ensures personalized attention so no child falls behind. Beyond academics, our teachers serve as mentors and role models, guiding students in character development and goal setting. Many long-serving faculty members have taught multiple generations of the same families — a testament to the trust they have earned in the Kaithal community.",
  },
  {
    path: "/achievements",
    title: "🏆 Achievements",
    message:
      "The Achievements page is where we celebrate excellence — and there is so much to celebrate! Our students have brought home numerous academic, sports, cultural, and community service awards. In CBSE board examinations, students consistently achieve outstanding results with many scoring above 90% and several topping district and state rankings. Our sports teams have won in inter-school competitions across Haryana. Science fairs, debate competitions, quiz bowls — in every arena, Milestone students have made their mark. We are proud of our alumni who have gone on to prestigious careers as doctors, engineers, civil servants, entrepreneurs, and artists. Their success stories inspire our current students every single day.",
  },
  {
    path: "/gallery",
    title: "🖼️ Gallery",
    message:
      "Welcome to the Gallery — a visual celebration of life at The Milestone Sr. Sec. School! Browse through images of vibrant classrooms, science experiments in action, cultural programs, sports day events, annual functions, and the everyday magic of school life. You will see the joy on students' faces during Annual Day performances, the concentration of young scientists in the lab, and the creativity of artists in our art room. These photographs are more than memories — they are proof of the rich and meaningful school experience we provide. We regularly update our gallery to reflect the latest events. Thank you for joining me on this complete tour of The Milestone Sr. Sec. School. We hope to welcome you to our family!",
  },
];

/* ─── Chat responses ─────────────────────────────────────────── */
const CHAT_RESPONSES: { keywords: string[]; response: string }[] = [
  { keywords: ["admission","enroll","apply","join","enquiry"], response:"📋 Admissions are open for Nursery to Class XII. Fill the enquiry form on our Home page, or call +91 98125 74766 / email themilestoneKtl@gmail.com. Visit us at Opp. Pawan Vatika, Khurana Road, Kaithal." },
  { keywords: ["fee","fees","cost","charges","tuition","price"], response:"💰 For the latest fee structure and payment schedules, please contact us at +91 98125 74766 or visit the school office. Our staff will provide a complete breakdown." },
  { keywords: ["timing","time","schedule","hours","school time","open"], response:"⏰ School timings: Monday – Saturday, 7:30 AM – 2:30 PM. Closed on Sundays and national holidays." },
  { keywords: ["cbse","board","affiliation","affiliated","curriculum"], response:"✅ Yes! We are fully affiliated with CBSE, New Delhi, and follow the NCERT curriculum for all classes from Nursery to Class XII." },
  { keywords: ["class","classes","stream","science","commerce","arts","humanities","subject"], response:"📚 We offer Nursery to Class XII. Senior secondary (XI–XII) streams: Science, Commerce, and Arts/Humanities — each with carefully chosen subject combinations." },
  { keywords: ["faculty","teacher","teachers","staff"], response:"👩‍🏫 Our faculty are highly qualified, experienced, and passionate educators. Every teacher is subject-specialist trained. Visit our Faculty page to meet the team!" },
  { keywords: ["facility","facilities","lab","library","sports","computer","smart classroom","bus"], response:"🏗️ Facilities include: Science Labs, Computer Lab, Smart Classrooms, Library, Sports Ground, Art Room, Music Room, and School Bus Transport. See our Facilities page for details!" },
  { keywords: ["location","address","where","kaithal","haryana","direction"], response:"📍 Opp. Pawan Vatika, Khurana Road, Kaithal, Haryana – 136027. Easy to find near the Khurana Bypass!" },
  { keywords: ["contact","phone","email","call","number","whatsapp"], response:"📞 Phone/WhatsApp: +91 98125 74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Opp. Pawan Vatika, Khurana Road, Kaithal, Haryana" },
  { keywords: ["result","results","board result","percentage","score","rank"], response:"🏆 The Milestone School is proud of its outstanding CBSE board results! We consistently achieve 100% pass rates with many students scoring above 90% and district toppers every year." },
  { keywords: ["tour","guide","show","explore","website"], response:"🚀 Click the 'Start Tour' button and I'll personally guide you through every page — Home, Academics, Facilities, Faculty, Achievements, Gallery, and more!" },
  { keywords: ["hello","hi","hey","namaste","hii","helo","good morning","good afternoon"], response:"👋 Hello! I'm Millie, your AI guide for The Milestone Sr. Sec. School! Ask me about admissions, fees, timings, facilities, academics, or start a guided tour. How can I help?" },
  { keywords: ["achievement","award","prize","trophy","win"], response:"🏅 Our students have won numerous academic, sports, and cultural awards at district and state levels. Many are district/state CBSE toppers! Visit our Achievements page for the full list." },
  { keywords: ["gallery","photo","image","picture","event"], response:"🖼️ Our Gallery page is filled with beautiful moments — Annual Day, Sports Day, lab sessions, cultural events, and everyday school life. Check it out!" },
  { keywords: ["director","principal","founder","management"], response:"🎓 Our Directors page introduces the visionary leaders who have built The Milestone School with decades of experience in education and community development." },
  { keywords: ["transport","bus","van","pick","drop"], response:"🚌 Yes! We provide safe and reliable school bus transportation covering all major areas of Kaithal. Contact us at +91 98125 74766 for route details." },
];

const SUGGESTIONS = [
  "Admission enquiry?",
  "School timings?",
  "Fee structure?",
  "CBSE affiliation?",
  "Facilities available?",
  "Contact details?",
  "Board results?",
  "Transport/bus?",
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const item of CHAT_RESPONSES) {
    if (item.keywords.some((k) => lower.includes(k))) return item.response;
  }
  return "🤔 Great question! For detailed info please call +91 98125 74766 or email themilestoneKtl@gmail.com. You can also start the guided tour to explore every section of our school website!";
}

type Mode = "idle" | "tour" | "chat";
interface ChatMessage { from: "user" | "bot"; text: string; }
const TOUR_DURATION = 10000;

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function AIGuide() {
  const [mode, setMode]             = useState<Mode>("idle");
  const [tourStep, setTourStep]     = useState(0);
  const [tourProgress, setProgress] = useState(0);
  const [messages, setMessages]     = useState<ChatMessage[]>([
    { from: "bot", text: "👋 Namaste! I'm Millie, your AI Guide for The Milestone Sr. Sec. School. Ask me anything, or tap a suggestion below!" },
  ]);
  const [input, setInput]           = useState("");
  const [, navigate]                = useLocation();
  const timerRef                    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef                 = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRafRef                = useRef<number | null>(null);
  const scrollTimerRef              = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chatEndRef                  = useRef<HTMLDivElement>(null);

  const cancelScroll = useCallback(() => {
    if (scrollRafRef.current)   cancelAnimationFrame(scrollRafRef.current);
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollRafRef.current  = null;
    scrollTimerRef.current = null;
  }, []);

  const clearTimers = useCallback(() => {
    if (timerRef.current)    clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    cancelScroll();
  }, [cancelScroll]);

  /* Slowly scroll page from top → bottom over `duration` ms */
  const startAutoScroll = useCallback((duration: number) => {
    cancelScroll();
    /* Wait a tick for the new page to mount, then scroll */
    scrollTimerRef.current = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

      const scrollDuration = duration - 600; /* leave 600 ms for nav/mount */
      const startTime      = performance.now();

      const tick = (now: number) => {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        /* ease-in-out so it feels cinematic */
        const eased    = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo(0, maxScroll * eased);
        if (progress < 1) scrollRafRef.current = requestAnimationFrame(tick);
      };

      scrollRafRef.current = requestAnimationFrame(tick);
    }, 350);
  }, [cancelScroll]);

  const startStep = useCallback((step: number) => {
    if (step >= TOUR_STEPS.length) {
      setMode("idle"); setTourStep(0); setProgress(0); navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    clearTimers();
    setTourStep(step); setProgress(0);
    navigate(TOUR_STEPS[step].path);
    startAutoScroll(TOUR_DURATION);
    const t0 = Date.now();
    progressRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - t0) / TOUR_DURATION) * 100, 100));
    }, 150);
    timerRef.current = setTimeout(() => { clearTimers(); startStep(step + 1); }, TOUR_DURATION);
  }, [clearTimers, navigate, startAutoScroll]);

  const startTour = useCallback(() => { setMode("tour"); startStep(0); }, [startStep]);
  const stopTour  = useCallback(() => {
    clearTimers();
    setMode("idle"); setTourStep(0); setProgress(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [clearTimers]);
  const nextStep  = useCallback(() => { clearTimers(); startStep(tourStep + 1); }, [clearTimers, startStep, tourStep]);
  const prevStep  = useCallback(() => { clearTimers(); startStep(Math.max(0, tourStep - 1)); }, [clearTimers, startStep, tourStep]);

  useEffect(() => () => clearTimers(), [clearTimers]);
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages(m => [...m, { from: "user", text: msg }]);
    setInput("");
    setTimeout(() => setMessages(m => [...m, { from: "bot", text: getBotResponse(msg) }]), 650);
  };

  const step = TOUR_STEPS[tourStep];
  const secLeft = Math.max(0, Math.round((TOUR_DURATION * (1 - tourProgress / 100)) / 1000));

  return (
    <div className="fixed bottom-5 right-5 z-[9998] flex flex-col items-end gap-3 select-none"
         style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── TOUR PANEL ── */}
      <AnimatePresence>
        {mode === "tour" && (
          <motion.div key="tour"
            initial={{ opacity: 0, y: 24, scale: 0.93 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.93 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="w-[310px] rounded-2xl overflow-hidden"
            style={{ background: CARD_BG, border: `1px solid rgba(212,160,23,0.30)`,
                     boxShadow: `0 8px 40px rgba(12,30,69,0.7), 0 0 0 1px rgba(255,255,255,0.06)` }}>

            {/* header */}
            <div className="flex items-center justify-between px-4 py-3"
                 style={{ background: "rgba(212,160,23,0.12)", borderBottom: "1px solid rgba(212,160,23,0.2)" }}>
              <div className="flex items-center gap-2">
                <motion.span animate={{ rotate:[0,12,-12,0] }} transition={{ repeat:Infinity, duration:2.4 }}
                             className="text-base">🤖</motion.span>
                <span style={{ color: GOLD_LIGHT, fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:13 }}>
                  Millie — Tour Guide
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color:"rgba(255,255,255,0.4)", fontSize:11 }}>{tourStep+1}/{TOUR_STEPS.length}</span>
                <button onClick={stopTour} className="transition-opacity hover:opacity-100 opacity-50"
                        style={{ color:"white" }}><X size={15}/></button>
              </div>
            </div>

            {/* step title */}
            <div className="px-4 pt-3">
              <motion.p key={tourStep+"-t"} initial={{ opacity:0, x:-8 }} animate={{ opacity:1, x:0 }}
                        style={{ color:GOLD_LIGHT, fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:13, marginBottom:6 }}>
                {step.title}
              </motion.p>

              {/* typewriter */}
              <div className="h-[148px] overflow-y-auto pr-1"
                   style={{ scrollbarWidth:"thin", scrollbarColor:"rgba(212,160,23,0.3) transparent" }}>
                <TypewriterText key={tourStep} text={step.message} />
              </div>

              {/* progress bar */}
              <div className="mt-3 mb-1">
                <div className="flex justify-between items-center mb-1">
                  <span style={{ color:"rgba(255,255,255,0.35)", fontSize:10 }}>Page {tourStep+1} of {TOUR_STEPS.length}</span>
                  <span style={{ color:"rgba(255,255,255,0.35)", fontSize:10 }}>Next in {secLeft}s</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background:"rgba(255,255,255,0.08)" }}>
                  <motion.div className="h-full rounded-full"
                    style={{ width:`${tourProgress}%`, background:`linear-gradient(90deg,${GOLD},${GOLD_LIGHT})` }}
                    transition={{ ease:"linear" }} />
                </div>
              </div>

              {/* nav buttons */}
              <div className="flex gap-2 pb-4 mt-3">
                <button onClick={prevStep} disabled={tourStep===0}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-25"
                  style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.8)",
                           border:"1px solid rgba(255,255,255,0.1)" }}>
                  <ChevronLeft size={13}/> Prev
                </button>
                <button onClick={nextStep}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold transition-all"
                  style={{ background:`linear-gradient(90deg,${GOLD},#b8860b)`, color:"white",
                           boxShadow:`0 4px 14px rgba(212,160,23,0.4)` }}>
                  {tourStep===TOUR_STEPS.length-1
                    ? <><RotateCcw size={13}/> Finish</>
                    : <>Next <ChevronRight size={13}/></>}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── CHAT PANEL ── */}
        {mode === "chat" && (
          <motion.div key="chat"
            initial={{ opacity:0, y:24, scale:0.93 }} animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:16, scale:0.93 }}
            transition={{ type:"spring", stiffness:320, damping:28 }}
            className="w-[310px] rounded-2xl overflow-hidden flex flex-col"
            style={{ height:420, background:CARD_BG,
                     border:`1px solid rgba(212,160,23,0.30)`,
                     boxShadow:`0 8px 40px rgba(12,30,69,0.7), 0 0 0 1px rgba(255,255,255,0.06)` }}>

            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                 style={{ background:"rgba(212,160,23,0.12)", borderBottom:"1px solid rgba(212,160,23,0.2)" }}>
              <div className="flex items-center gap-2">
                <motion.span animate={{ rotate:[0,12,-12,0] }} transition={{ repeat:Infinity, duration:2.4 }}
                             className="text-base">🤖</motion.span>
                <div>
                  <p style={{ color:GOLD_LIGHT, fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:13, lineHeight:1 }}>
                    Millie
                  </p>
                  <p style={{ color:"#34d399", fontSize:10, marginTop:2 }}>● Online — AI Assistant</p>
                </div>
              </div>
              <button onClick={()=>setMode("idle")} className="opacity-50 hover:opacity-100 transition-opacity"
                      style={{ color:"white" }}><X size={15}/></button>
            </div>

            {/* messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2"
                 style={{ scrollbarWidth:"thin", scrollbarColor:"rgba(212,160,23,0.25) transparent" }}>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.04 }}
                  className={`flex ${msg.from==="user"?"justify-end":"justify-start"}`}>
                  <div className="max-w-[88%] px-3 py-2 text-xs leading-relaxed whitespace-pre-line rounded-2xl"
                       style={msg.from==="bot"
                         ? { background:"rgba(255,255,255,0.09)", color:"rgba(255,255,255,0.88)",
                             border:"1px solid rgba(255,255,255,0.08)", borderBottomLeftRadius:4 }
                         : { background:`linear-gradient(135deg,${ROYAL_BLUE},#1040a0)`, color:"white",
                             boxShadow:"0 2px 10px rgba(26,85,184,0.4)", borderBottomRightRadius:4 }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef}/>
            </div>

            {/* suggestions */}
            <div className="px-3 pb-1 flex flex-wrap gap-1 flex-shrink-0"
                 style={{ borderTop:"1px solid rgba(255,255,255,0.06)" }}>
              {SUGGESTIONS.slice(0,4).map((s) => (
                <button key={s} onClick={()=>sendMessage(s)}
                  className="text-[10px] px-2 py-1 rounded-full transition-all hover:scale-105"
                  style={{ background:"rgba(212,160,23,0.15)", color:GOLD_LIGHT,
                           border:"1px solid rgba(212,160,23,0.25)" }}>
                  {s}
                </button>
              ))}
              {SUGGESTIONS.slice(4).map((s) => (
                <button key={s} onClick={()=>sendMessage(s)}
                  className="text-[10px] px-2 py-1 rounded-full transition-all hover:scale-105"
                  style={{ background:"rgba(26,85,184,0.2)", color:"rgba(180,210,255,0.9)",
                           border:"1px solid rgba(26,85,184,0.3)" }}>
                  {s}
                </button>
              ))}
            </div>

            {/* input */}
            <div className="px-3 py-3 flex gap-2 flex-shrink-0" style={{ background:"rgba(0,0,0,0.2)" }}>
              <input value={input} onChange={e=>setInput(e.target.value)}
                     onKeyDown={e=>e.key==="Enter"&&sendMessage()}
                     placeholder="Ask me anything about the school…"
                     className="flex-1 px-3 py-2 rounded-xl text-xs outline-none"
                     style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)",
                              color:"white", caretColor:GOLD_LIGHT }}/>
              <button onClick={()=>sendMessage()}
                      className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                      style={{ background:`linear-gradient(135deg,${GOLD},#b8860b)`,
                               boxShadow:"0 3px 12px rgba(212,160,23,0.4)" }}>
                <Send size={13} color="white"/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── IDLE BUTTONS + ROBOT ── */}
      <div className="flex flex-col items-end gap-2">
        <AnimatePresence>
          {mode==="idle" && (
            <motion.div key="labels"
              initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:4 }}
              className="flex flex-col items-end gap-2">

              {/* Start Tour */}
              <motion.button onClick={startTour}
                initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
                transition={{ delay:0.1 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.96 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                style={{ background:`linear-gradient(90deg,${DEEP_NAVY},${ROYAL_BLUE})`,
                         color:"white", border:`1px solid rgba(212,160,23,0.4)`,
                         boxShadow:`0 4px 20px rgba(12,30,69,0.55), inset 0 1px 0 rgba(255,255,255,0.08)`,
                         fontFamily:"'Poppins',sans-serif", letterSpacing:"0.02em" }}>
                <motion.span animate={{ rotate:[0,360] }}
                             transition={{ repeat:Infinity, duration:3, ease:"linear" }}
                             style={{ display:"inline-block" }}>🚀</motion.span>
                <AnimatedWords text="Start Tour" color={GOLD_LIGHT}/>
              </motion.button>

              {/* Chat with AI */}
              <motion.button onClick={()=>setMode("chat")}
                initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
                transition={{ delay:0.2 }}
                whileHover={{ scale:1.06, x:-2 }} whileTap={{ scale:0.96 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                style={{ background:`linear-gradient(90deg,#0a5c2e,${EMERALD})`,
                         color:"white", border:"1px solid rgba(27,150,87,0.5)",
                         boxShadow:"0 4px 20px rgba(10,92,46,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
                         fontFamily:"'Poppins',sans-serif", letterSpacing:"0.02em" }}>
                <motion.span animate={{ scale:[1,1.25,1] }}
                             transition={{ repeat:Infinity, duration:1.6 }}
                             style={{ display:"inline-block" }}>
                  <Sparkles size={14} color={GOLD_LIGHT}/>
                </motion.span>
                <AnimatedWords text="Chat with AI Assistant" color="white"/>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot */}
        <motion.button
          onClick={()=>{ if(mode==="tour") stopTour(); else if(mode==="chat") setMode("idle"); }}
          animate={{ y:[0,-7,0] }}
          transition={{ repeat:Infinity, duration:2.8, ease:"easeInOut" }}
          whileHover={{ scale:1.1 }} whileTap={{ scale:0.94 }}
          className="relative cursor-pointer" title="Millie — AI Guide">

          {/* glow ring */}
          <motion.div className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ scale:[1,1.22,1], opacity:[0.5,0,0.5] }}
            transition={{ repeat:Infinity, duration:2.2, ease:"easeInOut" }}
            style={{ background:`radial-gradient(circle,${ROYAL_BLUE} 0%,transparent 70%)` }}/>

          {/* gold halo */}
          <motion.div className="absolute -inset-1 rounded-full pointer-events-none"
            animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:8, ease:"linear" }}
            style={{ border:`1.5px dashed rgba(212,160,23,0.35)`, borderRadius:"50%" }}/>

          <img src="/ai-robot.png" alt="Millie AI Guide"
               className="relative z-10 drop-shadow-2xl"
               style={{ width:88, height:88, objectFit:"contain", filter:"drop-shadow(0 4px 16px rgba(26,85,184,0.5))" }}/>
        </motion.button>
      </div>
    </div>
  );
}

/* ── Animated word-by-word label ────────────────────────────── */
function AnimatedWords({ text, color }: { text: string; color: string }) {
  return (
    <span className="flex gap-[3px]">
      {text.split(" ").map((w, i) => (
        <motion.span key={w+i} style={{ color }}
          initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }}
          transition={{ delay: i*0.08, duration:0.35 }}>
          {w}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Typewriter with cursor ─────────────────────────────────── */
function TypewriterText({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  const idx = useRef(0);
  useEffect(() => {
    setShown(""); idx.current = 0;
    const iv = setInterval(() => {
      if (idx.current < text.length) { setShown(text.slice(0, ++idx.current)); }
      else clearInterval(iv);
    }, 16);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <p style={{ color:"rgba(255,255,255,0.80)", fontSize:11.5, lineHeight:1.7 }}>
      {shown}
      <motion.span animate={{ opacity:[1,0] }} transition={{ repeat:Infinity, duration:0.55 }}
                   style={{ display:"inline-block", width:2, height:12,
                            background:GOLD_LIGHT, marginLeft:2, verticalAlign:"middle" }}/>
    </p>
  );
}
