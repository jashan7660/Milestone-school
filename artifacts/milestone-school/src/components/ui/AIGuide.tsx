import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { X, Send, ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";

const TOUR_STEPS = [
  {
    path: "/",
    title: "🏠 Welcome — Home Page",
    message:
      "Welcome to The Milestone Sr. Sec. School! I'm your AI guide, and I'm thrilled to take you on a tour of our wonderful school website. Right here on the Home page, you can discover who we are — a premier CBSE-affiliated school in Kaithal, Haryana, committed to nurturing young minds since our founding. Scroll down and you'll find our key highlights: smart classrooms, experienced faculty, 100% board results, and a vibrant campus life. You'll also see our Stats section showing our milestones — the number of students, faculty members, and years of excellence. Our Admissions Form is right here too, making it easy for families to enquire and enroll. The Home page truly captures the spirit of The Milestone School — academic brilliance combined with holistic development. Every section has been designed to give you a complete picture of life at our school. We believe every child deserves the best start in life, and that's exactly what we provide.",
  },
  {
    path: "/about/story",
    title: "📖 Our Story",
    message:
      "Welcome to Our Story page! This is where the heart of The Milestone Sr. Sec. School comes alive. Every great institution begins with a vision, and ours was simple yet powerful — to create a school where every student thrives academically, socially, and personally. Our founders laid the cornerstone with a deep commitment to quality education and character building. Over the years, The Milestone School has grown from humble beginnings into one of the most trusted CBSE schools in Kaithal district. We have seen generations of students walk through our gates, and watched them go on to achieve remarkable things in medicine, engineering, arts, business, and beyond. Our story is not just about buildings and classrooms — it is about relationships, values, and the unwavering belief that education is the greatest gift you can give a child. As you read through this page, you'll understand the journey that has shaped us into the institution we are proud to be today. Our story continues to be written — by our students, our teachers, and our community.",
  },
  {
    path: "/about/directors",
    title: "🎓 Our Directors",
    message:
      "Meet the visionary leaders behind The Milestone Sr. Sec. School! On this Directors page, you will get to know the dedicated individuals whose passion, wisdom, and tireless efforts have shaped this institution into what it is today. Our directors bring decades of experience in education, administration, and community development. They believe deeply in student-centered learning and have consistently worked to bring the best resources, technology, and teaching methodologies to our classrooms. Under their leadership, the school has achieved outstanding CBSE board results year after year, expanded its infrastructure, introduced smart classrooms, and built partnerships with leading educational organizations. The directors are not just administrators — they are educators at heart. They regularly interact with students and faculty, ensuring that the school's culture remains warm, inclusive, and excellence-driven. Their vision for the future of The Milestone School is ambitious: to be recognized not just in Haryana, but across India as a model of innovative, compassionate, and result-oriented education. We are proud to be guided by such inspiring leaders.",
  },
  {
    path: "/about/divisions",
    title: "🏫 Divisions",
    message:
      "The Milestone Sr. Sec. School is organized into well-defined academic divisions to ensure every student receives age-appropriate, focused, and high-quality education. On this Divisions page, you will discover how we structure learning from the very beginning through to senior secondary level. Our Pre-Primary and Primary wings create a nurturing environment where young children develop curiosity, creativity, and foundational skills through play-based and activity-driven learning. The Middle School division bridges childhood and adolescence, helping students build strong academic fundamentals while exploring sports, arts, and co-curricular activities. Our Senior Secondary division — Classes XI and XII — offers Science, Commerce, and Arts streams, each with subject combinations carefully designed to prepare students for competitive examinations and higher education. Across all divisions, we maintain small class sizes, experienced class teachers, and individualized attention for each learner. Specialized labs, libraries, and dedicated spaces for each division ensure that the learning environment is always optimized for the age group. The Milestone School's division structure reflects our holistic philosophy: grow the whole child at every stage of their journey.",
  },
  {
    path: "/about/tieups",
    title: "🤝 Tie-Ups & Partnerships",
    message:
      "Education does not happen in isolation — and The Milestone Sr. Sec. School firmly believes in the power of collaboration! Our Tie-Ups page showcases the strong partnerships we have built with leading organizations, coaching institutes, technology providers, and community bodies to enrich the learning experience of every student. These strategic alliances give our students access to resources and opportunities far beyond what a standard school curriculum offers. Whether it is career counseling partnerships that help Class X and XII students navigate their futures, or tie-ups with sports academies that bring professional coaching to our campus, each collaboration has been thoughtfully chosen to add real value. We also maintain strong connections with CBSE and its resource centers, ensuring our teachers receive the latest training and our curriculum stays ahead of the curve. Our community partnerships extend our school's impact into the wider society of Kaithal, reinforcing our belief that a good school is a cornerstone of a thriving community. Together with our partners, we are building brighter futures for the children of Haryana.",
  },
  {
    path: "/academics",
    title: "📚 Academics",
    message:
      "Step into the Academics section — the core of everything we do at The Milestone Sr. Sec. School! This page gives you a comprehensive overview of our CBSE curriculum, the subjects we offer, and the innovative teaching methodologies that make learning engaging and effective. We offer a rich academic program spanning Nursery to Class XII, with Science, Commerce, and Arts streams at the senior secondary level. Our academic calendar is carefully planned to balance rigorous study with co-curricular activities, ensuring students are never overwhelmed. We follow NCERT-prescribed textbooks and supplement them with reference materials, digital resources, and practical experiments that bring concepts to life. Special focus is given to board examination preparation — our dedicated revision programs, sample papers, and mock tests have consistently helped our students achieve outstanding results. We also have a strong emphasis on Mathematics and Science at the foundational level, ensuring students develop logical thinking and problem-solving skills from an early age. Our library, science labs, computer lab, and digital classrooms all work together to create an ecosystem where academic excellence is not just expected — it is inspired.",
  },
  {
    path: "/facilities",
    title: "🏗️ Facilities",
    message:
      "Welcome to the Facilities page — where you will see why The Milestone Sr. Sec. School is considered one of the best-equipped schools in Kaithal! A great education requires great infrastructure, and we have invested significantly in creating spaces that inspire learning, creativity, and well-being. Our campus features fully equipped Physics, Chemistry, and Biology laboratories with modern apparatus and trained lab assistants. Our computer laboratory provides students hands-on experience with the latest technology. Smart classrooms with interactive whiteboards and digital content bring lessons to life in ways traditional blackboards never could. We have a well-stocked library with thousands of books, journals, and digital resources to fuel curiosity and research. Our sports facilities include a large playground, basketball and volleyball courts, and dedicated areas for athletics. The school building is spacious, well-ventilated, and designed for comfort across all seasons. We also have a dedicated art room, music room, and activity halls for co-curricular development. Safe and reliable school bus transportation covers all major areas of Kaithal. Our facilities reflect a simple belief: children learn best when they are comfortable, safe, and inspired by their environment.",
  },
  {
    path: "/faculty",
    title: "👩‍🏫 Faculty",
    message:
      "The Faculty page introduces you to the most important asset of The Milestone Sr. Sec. School — our incredible team of educators! We firmly believe that behind every successful student is a dedicated, skilled, and caring teacher. Our faculty members are carefully selected for their subject expertise, passion for teaching, and ability to connect with students at every level. Each teacher at The Milestone School holds the relevant qualifications and undergoes continuous professional development to stay current with the latest pedagogical practices and CBSE guidelines. We have specialist teachers for every subject across all grades — from enthusiastic primary school educators who make learning joyful for young children, to highly experienced senior secondary teachers who guide students through board examinations and beyond. Our faculty-to-student ratio ensures personalized attention so no child falls behind. Beyond academics, our teachers serve as mentors and role models, guiding students in character development, time management, and goal setting. Many of our long-serving faculty members have taught multiple generations of the same families — a testament to the trust and respect they have earned in the Kaithal community. We are proud of each and every member of our teaching family.",
  },
  {
    path: "/achievements",
    title: "🏆 Achievements",
    message:
      "The Achievements page is where we celebrate excellence — and there is so much to celebrate at The Milestone Sr. Sec. School! Over the years, our students have brought home numerous academic, sports, cultural, and community service awards that reflect the diverse talents nurtured within our campus. In CBSE board examinations, our students have consistently achieved outstanding results with many scoring above 90% and several topping district and state rankings. Our sports teams have participated and won in inter-school competitions across Haryana, showcasing our commitment to holistic development. Science fairs, debate competitions, quiz bowls, cultural festivals — in every arena, Milestone students have made their mark. We are also proud of our alumni, many of whom have gone on to prestigious careers as doctors, engineers, civil servants, entrepreneurs, and artists. Their success stories inspire our current students every day. The achievements listed here are not just trophies and certificates — they represent the hard work, dedication, and dreams of thousands of students who have passed through these halls. We look forward to adding many more milestones to this proud legacy.",
  },
  {
    path: "/gallery",
    title: "🖼️ Gallery",
    message:
      "Welcome to the Gallery — a visual celebration of life at The Milestone Sr. Sec. School! A thousand words could not capture what a single photograph can, and our gallery is filled with beautiful moments that tell the story of our school community. Browse through images of our vibrant classrooms, science experiments in action, cultural programs, sports day events, annual functions, and the everyday magic of school life. You will see the joy on students' faces during Annual Day performances, the concentration of young scientists in the lab, the camaraderie of athletes on the field, and the creativity of artists in our art room. These photographs are more than memories — they are proof of the rich, full, and meaningful school experience we provide at The Milestone School. We regularly update our gallery to reflect the latest events and activities, so there is always something new to discover. Whether you are a prospective parent exploring our school, a current student reliving wonderful memories, or an alumnus looking back on your time here — we hope this gallery fills you with pride and joy. Thank you for joining me on this complete tour of The Milestone Sr. Sec. School. We hope to welcome you to our family!",
  },
];

const CHAT_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ["admission", "admissions", "enroll", "enrolment", "join", "apply"],
    response:
      "📋 Admissions at The Milestone Sr. Sec. School are open for all classes from Nursery to Class XII. You can fill out the enquiry form on our Home page, or visit us directly at our campus on Khurana Road, Kaithal. For more details, call us at +91 98125 74766 or email themilestoneKtl@gmail.com.",
  },
  {
    keywords: ["fee", "fees", "cost", "charges", "tuition"],
    response:
      "💰 For the latest fee structure and details about payment schedules, please contact us directly at +91 98125 74766 or visit our school office. Our staff will be happy to provide you with a complete fee breakdown.",
  },
  {
    keywords: ["timing", "time", "schedule", "hours", "school time"],
    response:
      "⏰ School timings are Monday to Saturday, 7:30 AM to 2:30 PM. The school is closed on Sundays and national holidays.",
  },
  {
    keywords: ["cbse", "board", "affiliation", "affiliated"],
    response:
      "✅ Yes! The Milestone Sr. Sec. School is fully affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We follow the NCERT curriculum and CBSE guidelines for all classes from Nursery to Class XII.",
  },
  {
    keywords: ["class", "classes", "stream", "science", "commerce", "arts", "humanities"],
    response:
      "📚 We offer classes from Nursery to Class XII. At the senior secondary level (XI-XII), we have three streams: Science, Commerce, and Arts/Humanities — each with carefully chosen subject combinations to prepare students for their future careers.",
  },
  {
    keywords: ["faculty", "teacher", "teachers", "staff", "professor"],
    response:
      "👩‍🏫 Our faculty comprises highly qualified, experienced, and passionate educators. Every teacher is subject-specialist trained and undergoes regular professional development. Visit our Faculty page to meet our team!",
  },
  {
    keywords: ["facility", "facilities", "lab", "library", "sports", "computer", "smart"],
    response:
      "🏗️ Our facilities include: Science Labs (Physics, Chemistry, Biology), Computer Lab, Smart Classrooms, Library, Sports Ground, Art Room, Music Room, and Safe School Bus Transport. Visit our Facilities page for full details!",
  },
  {
    keywords: ["location", "address", "where", "kaithal", "haryana"],
    response:
      "📍 We are located at: Opp. Pawan Vatika, Khurana Road, Kaithal, Haryana — 136027. Easy to find near the Khurana Bypass!",
  },
  {
    keywords: ["contact", "phone", "email", "call", "number", "whatsapp"],
    response:
      "📞 Contact us:\n• Phone/WhatsApp: +91 98125 74766\n• Email: themilestoneKtl@gmail.com\n• Address: Opp. Pawan Vatika, Khurana Road, Kaithal, Haryana",
  },
  {
    keywords: ["result", "results", "board result", "percentage", "score"],
    response:
      "🏆 The Milestone School is proud of its outstanding CBSE board results! We consistently achieve 100% pass rates with many students scoring above 90%. Our students have been district and state toppers in various years.",
  },
  {
    keywords: ["tour", "guide", "show", "explore"],
    response:
      "🚀 Click the 'Start Tour' button and I'll personally guide you through every page of our school website — Home, Academics, Facilities, Faculty, Achievements, Gallery, and more! Each page gets a full detailed walkthrough.",
  },
  {
    keywords: ["hello", "hi", "hey", "namaste", "hii", "helo"],
    response:
      "👋 Hello! I'm Millie, your AI guide for The Milestone Sr. Sec. School! I can answer questions about admissions, fees, timings, facilities, academics, and more. I can also give you a complete guided tour of our website. How can I help you today?",
  },
];

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const item of CHAT_RESPONSES) {
    if (item.keywords.some((k) => lower.includes(k))) {
      return item.response;
    }
  }
  return "🤔 I'm not sure about that specific question, but I'm here to help! You can ask me about admissions, fees, timings, facilities, faculty, academics, or start a guided tour of our school website. For detailed enquiries, please call us at +91 98125 74766.";
}

type Mode = "idle" | "tour" | "chat";

interface ChatMessage {
  from: "user" | "bot";
  text: string;
}

const TOUR_DURATION = 42000;

export default function AIGuide() {
  const [mode, setMode] = useState<Mode>("idle");
  const [tourStep, setTourStep] = useState(0);
  const [tourProgress, setTourProgress] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: "bot",
      text: "👋 Hi! I'm Millie, your AI guide! Ask me anything about The Milestone School or click 'Start Tour' to explore the website with me!",
    },
  ]);
  const [input, setInput] = useState("");
  const [, navigate] = useLocation();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const startTourStep = useCallback(
    (step: number) => {
      if (step >= TOUR_STEPS.length) {
        setMode("idle");
        setTourStep(0);
        setTourProgress(0);
        navigate("/");
        return;
      }
      clearTimers();
      setTourStep(step);
      setTourProgress(0);
      navigate(TOUR_STEPS[step].path);

      const startTime = Date.now();
      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min((elapsed / TOUR_DURATION) * 100, 100);
        setTourProgress(pct);
      }, 200);

      timerRef.current = setTimeout(() => {
        clearTimers();
        startTourStep(step + 1);
      }, TOUR_DURATION);
    },
    [clearTimers, navigate]
  );

  const startTour = useCallback(() => {
    setMode("tour");
    startTourStep(0);
  }, [startTourStep]);

  const stopTour = useCallback(() => {
    clearTimers();
    setMode("idle");
    setTourStep(0);
    setTourProgress(0);
  }, [clearTimers]);

  const nextStep = useCallback(() => {
    clearTimers();
    startTourStep(tourStep + 1);
  }, [clearTimers, startTourStep, tourStep]);

  const prevStep = useCallback(() => {
    clearTimers();
    startTourStep(Math.max(0, tourStep - 1));
  }, [clearTimers, startTourStep, tourStep]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: getBotResponse(trimmed) }]);
    }, 600);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  const currentStep = TOUR_STEPS[tourStep];

  return (
    <div className="fixed bottom-6 right-5 z-[9998] flex flex-col items-end gap-2 select-none">
      <AnimatePresence mode="wait">
        {mode === "tour" && (
          <motion.div
            key="tour-panel"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f1e3d 0%, #1a3a6b 60%, #0d3352 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="text-lg"
                >
                  🤖
                </motion.div>
                <span className="text-white font-bold text-sm">Millie — Tour Guide</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white/50 text-xs">
                  {tourStep + 1}/{TOUR_STEPS.length}
                </span>
                <button
                  onClick={stopTour}
                  className="ml-1 text-white/60 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="px-4 pt-3 pb-1">
              <motion.p
                key={tourStep + "-title"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-amber-300 font-bold text-sm mb-2"
              >
                {currentStep.title}
              </motion.p>

              <div className="h-44 overflow-y-auto pr-1 scrollbar-thin">
                <TypewriterText key={tourStep} text={currentStep.message} />
              </div>

              <div className="mt-2 mb-2">
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${tourProgress}%`,
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    }}
                    transition={{ ease: "linear" }}
                  />
                </div>
                <p className="text-white/40 text-[10px] mt-1 text-right">
                  Next page in {Math.max(0, Math.round((TOUR_DURATION * (1 - tourProgress / 100)) / 1000))}s
                </p>
              </div>

              <div className="flex gap-2 pb-3">
                <button
                  onClick={prevStep}
                  disabled={tourStep === 0}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold transition-all disabled:opacity-30"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                >
                  <ChevronLeft size={14} /> Prev
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold transition-all"
                  style={{
                    background: "linear-gradient(90deg, #f59e0b, #d97706)",
                    color: "white",
                  }}
                >
                  {tourStep === TOUR_STEPS.length - 1 ? (
                    <>
                      <RotateCcw size={14} /> End Tour
                    </>
                  ) : (
                    <>
                      Next <ChevronRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {mode === "chat" && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              background: "linear-gradient(135deg, #0f1e3d 0%, #1a3a6b 60%, #0d3352 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              height: "420px",
            }}
          >
            <div
              className="px-4 py-3 flex items-center justify-between flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="text-lg"
                >
                  🤖
                </motion.div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">Millie</p>
                  <p className="text-green-400 text-[10px]">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setMode("idle")}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line"
                    style={
                      msg.from === "bot"
                        ? {
                            background: "rgba(255,255,255,0.1)",
                            color: "rgba(255,255,255,0.9)",
                            borderBottomLeftRadius: "4px",
                          }
                        : {
                            background: "linear-gradient(90deg, #f59e0b, #d97706)",
                            color: "white",
                            borderBottomRightRadius: "4px",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div
              className="px-3 py-3 flex gap-2 flex-shrink-0"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-xl text-xs outline-none text-white placeholder-white/40"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <button
                onClick={sendMessage}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
              >
                <Send size={14} color="white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2">
        {mode === "idle" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-end gap-1.5"
            >
              <motion.button
                onClick={startTour}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold"
                style={{
                  background: "linear-gradient(90deg, #1a55b8, #0d3a8e)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 20px rgba(26,85,184,0.5)",
                }}
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  style={{ display: "inline-block" }}
                >
                  🚀
                </motion.span>
                <AnimatedWords text="Start Tour" />
              </motion.button>

              <motion.button
                onClick={() => setMode("chat")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold"
                style={{
                  background: "linear-gradient(90deg, #d97706, #b45309)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 4px 20px rgba(217,119,6,0.5)",
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ display: "inline-block" }}
                >
                  💬
                </motion.span>
                <AnimatedWords text="Chat with AI Assistant" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}

        <motion.button
          onClick={() => {
            if (mode === "tour") stopTour();
            else if (mode === "chat") setMode("idle");
            else setMode("idle");
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer"
          title="AI Guide"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ background: "radial-gradient(circle, #1a55b8 0%, transparent 70%)" }}
          />
          <img
            src="/ai-robot.png"
            alt="AI Guide"
            className="relative z-10 drop-shadow-2xl"
            style={{ width: "90px", height: "90px", objectFit: "contain" }}
          />
        </motion.button>
      </div>
    </div>
  );
}

function AnimatedWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="flex gap-1">
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    indexRef.current = 0;
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-white/80 text-xs leading-relaxed">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
        className="inline-block w-0.5 h-3 bg-amber-400 ml-0.5 align-middle"
      />
    </p>
  );
}
