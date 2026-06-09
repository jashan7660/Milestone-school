import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, User, Phone, Mail, MapPin, BookOpen,
  Briefcase, Calendar, CheckCircle2, ArrowRight, Star,
  ChevronDown, FileText, Clock, Building2,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";

const NAVY  = "#071B3A";
const NAVY2 = "#0A234A";
const CYAN  = "#06B6D4";
const BLUE  = "#3B82F6";
const EMERALD = "#10B981";
const PURPLE  = "#8B5CF6";
const GOLD    = "#F59E0B";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const GLASS = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.11)",
  backdropFilter: "blur(18px)",
};

const LIGHT_CARD = {
  background: "white",
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
};

interface FormData {
  fullName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  highestDegree: string;
  university: string;
  passingYear: string;
  subject: string;
  experience: string;
  prevSchool: string;
  position: string;
  joiningDate: string;
  message: string;
}

const initial: FormData = {
  fullName: "", dob: "", gender: "", phone: "", email: "", address: "",
  highestDegree: "", university: "", passingYear: "", subject: "",
  experience: "", prevSchool: "", position: "", joiningDate: "", message: "",
};

export default function TeacherApplyPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const t = {
    heroLabel:    isHindi ? "शिक्षक भर्ती" : "Teacher Recruitment",
    heroTitle1:   isHindi ? "हमारे " : "Join Our ",
    heroAccent:   isHindi ? "शिक्षक दल में" : "Teaching",
    heroTitle2:   isHindi ? " शामिल हों" : " Family",
    heroSub:      isHindi
      ? "माइलस्टोन में शिक्षण सिर्फ एक पेशा नहीं — यह एक मिशन है। हम ऐसे शिक्षकों की तलाश में हैं जो छात्रों के जीवन में वास्तविक बदलाव लाएं।"
      : "Teaching at The Milestone isn't just a profession — it's a mission. We seek educators who make a real difference in students' lives.",
    step1: isHindi ? "व्यक्तिगत जानकारी" : "Personal Information",
    step2: isHindi ? "शैक्षणिक योग्यता" : "Qualifications",
    step3: isHindi ? "पेशेवर विवरण" : "Professional Details",
    step4: isHindi ? "आवेदन विवरण" : "Application Details",
    submit: isHindi ? "आवेदन जमा करें" : "Submit Application",
    successTitle: isHindi ? "आवेदन प्राप्त हुआ! 🎉" : "Application Received! 🎉",
    successSub:   isHindi
      ? "हमारी HR टीम 3–5 कार्य दिवसों में आपसे संपर्क करेगी।"
      : "Our HR team will contact you within 3–5 working days.",
    required: isHindi ? "यह आवश्यक है" : "This field is required",
  };

  const stats = [
    { val: "80+",    label: isHindi ? "वर्तमान शिक्षक" : "Current Faculty",      color: EMERALD },
    { val: "15+",    label: isHindi ? "वर्षों का अनुभव" : "Years of Excellence", color: GOLD   },
    { val: "100%",   label: isHindi ? "CBSE प्रशिक्षित" : "CBSE Trained",        color: CYAN   },
    { val: "1200+",  label: isHindi ? "छात्रों को मार्गदर्शन" : "Students Mentored", color: PURPLE },
  ];

  const perks = isHindi ? [
    { icon: Star,         title: "प्रतिस्पर्धी वेतन",       desc: "बाजार-अनुरूप पैकेज और वार्षिक वृद्धि",         color: GOLD    },
    { icon: BookOpen,     title: "CPD प्रशिक्षण",          desc: "नियमित CBP/CBSE वर्कशॉप और कौशल विकास",        color: BLUE    },
    { icon: Building2,    title: "आधुनिक बुनियादी ढांचा",  desc: "स्मार्ट क्लासरूम, लैब और स्टाफरूम",           color: CYAN    },
    { icon: Clock,        title: "वर्क-लाइफ बैलेंस",      desc: "संरचित कार्य घंटे और उचित छुट्टियां",          color: EMERALD },
    { icon: GraduationCap,title: "करियर विकास",            desc: "नेतृत्व भूमिकाओं और पदोन्नति के अवसर",        color: PURPLE  },
    { icon: CheckCircle2, title: "सहयोगी वातावरण",        desc: "टीमवर्क और आपसी सम्मान की संस्कृति",          color: GOLD    },
  ] : [
    { icon: Star,         title: "Competitive Pay",         desc: "Market-aligned package with annual increments",  color: GOLD    },
    { icon: BookOpen,     title: "CPD Training",            desc: "Regular CBSE workshops and skill development",   color: BLUE    },
    { icon: Building2,    title: "Modern Infrastructure",   desc: "Smart classrooms, labs and dedicated staffrooms", color: CYAN   },
    { icon: Clock,        title: "Work-Life Balance",       desc: "Structured working hours and fair leave policy",  color: EMERALD},
    { icon: GraduationCap,title: "Career Growth",          desc: "Opportunities for leadership roles and promotion", color: PURPLE  },
    { icon: CheckCircle2, title: "Collaborative Culture",  desc: "Teamwork and mutual respect at every level",      color: GOLD    },
  ];

  const positions = isHindi
    ? ["विषय शिक्षक", "को-ऑर्डिनेटर किंडरगार्टन", "अकादमिक हेड (कक्षा 1-2)", "अकादमिक हेड (कक्षा 3-5)", "अकादमिक हेड (कक्षा 6-8)", "अकादमिक हेड (कक्षा 9-12)", "इवेंट हेड", "अन्य"]
    : ["Subject Teacher", "Coordinator Kindergarten", "Academic Head (Class 1–2)", "Academic Head (Class 3–5)", "Academic Head (Class 6–8)", "Academic Head (Class 9–12)", "Event Head", "Other"];

  const degrees = ["B.Ed.", "M.A.", "M.Sc.", "M.Com.", "M.Ed.", "Ph.D.", "B.A.", "B.Sc.", "B.Com.", isHindi ? "अन्य" : "Other"];

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const req: (keyof FormData)[] = ["fullName", "phone", "email", "gender", "highestDegree", "subject", "experience", "position"];
    const e: Partial<FormData> = {};
    req.forEach(k => { if (!form[k]) e[k] = t.required; });
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = isHindi ? "वैध ईमेल दर्ज करें" : "Enter a valid email";
    if (form.phone && !/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = isHindi ? "10 अंकों का नंबर" : "Enter 10-digit number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const body = `
Name: ${form.fullName}
DOB: ${form.dob}   Gender: ${form.gender}
Phone: ${form.phone}   Email: ${form.email}
Address: ${form.address}

Qualification: ${form.highestDegree} — ${form.university} (${form.passingYear})
Subject: ${form.subject}   Experience: ${form.experience} yrs
Previous School: ${form.prevSchool}

Position Applied: ${form.position}
Preferred Joining: ${form.joiningDate}

Message: ${form.message}
    `.trim();
    window.location.href = `mailto:themilestoneKtl@gmail.com?subject=Teacher Application — ${form.fullName}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputBase = "w-full px-4 py-3 rounded-xl text-sm font-medium text-foreground outline-none transition-all duration-200 focus:ring-2";
  const inputStyle = (k: keyof FormData) => ({
    background: "rgba(0,0,0,0.03)",
    border: errors[k] ? "1.5px solid #ef4444" : "1.5px solid rgba(0,0,0,0.12)",
    boxShadow: errors[k] ? "0 0 0 3px rgba(239,68,68,0.10)" : undefined,
  });

  const Label = ({ text, required }: { text: string; required?: boolean }) => (
    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: NAVY }}>
      {text}{required && <span className="ml-1" style={{ color: "#ef4444" }}>*</span>}
    </label>
  );

  const Err = ({ k }: { k: keyof FormData }) =>
    errors[k] ? <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors[k]}</p> : null;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center"
          style={{ background: `linear-gradient(145deg,${NAVY} 0%,${NAVY2} 50%,#0a1f3a 100%)` }}>

          {[
            { w:500, h:500, x:"-6%",  y:"-20%", c:BLUE,    dur:12 },
            { w:380, h:380, x:"68%",  y:"40%",  c:EMERALD, dur:15 },
            { w:280, h:280, x:"38%",  y:"-18%", c:PURPLE,  dur:9  },
            { w:220, h:220, x:"82%",  y:"-8%",  c:CYAN,    dur:13 },
          ].map((o, i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}28,transparent 70%)` }}
              animate={{ scale:[1,1.22,1], opacity:[0.35,0.75,0.35] }}
              transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
          ))}

          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full pointer-events-none hidden md:block"
              style={{ left:`${(i*5.7)%100}%`, top:`${(i*7.3+10)%85}%`, background:[CYAN,BLUE,PURPLE,EMERALD,GOLD][i%5] }}
              animate={{ y:[0,-20,0], opacity:[0.2,0.6,0.2], scale:[1,1.4,1] }}
              transition={{ repeat:Infinity, duration:3+(i%5), delay:i*0.18, ease:"easeInOut" }}/>
          ))}

          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"48px 48px" }}/>

          <div className="container relative z-10 mx-auto px-4 md:px-6 py-24 text-center">
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={GLASS}>
              <span style={{ color: GOLD }}>✦</span>
              <span className="text-white/70">{t.heroLabel}</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-5 leading-tight">
              {t.heroTitle1}
              <span style={{ background:`linear-gradient(90deg,${CYAN},${EMERALD},${PURPLE})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {t.heroAccent}
              </span>
              {t.heroTitle2}
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
              {t.heroSub}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="flex flex-wrap justify-center gap-4">
              {stats.map((s, i) => (
                <div key={i} className="px-6 py-3 rounded-2xl text-center" style={GLASS}>
                  <div className="text-2xl font-extrabold text-white" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-white/40 text-xs mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 20C480 35 240 5 0 20Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </section>

        {/* ── Why Join Us ── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background:`${BLUE}12`, color:BLUE, border:`1px solid ${BLUE}30` }}>
                <Star size={11} className="fill-current"/> {isHindi ? "हमारे साथ क्यों?" : "Why Join Us?"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
                {isHindi ? "माइलस्टोन में शिक्षण के " : "The "}
                <span style={{ background:`linear-gradient(90deg,${BLUE},${EMERALD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {isHindi ? "लाभ" : "Milestone Advantage"}
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {perks.map((p, i) => (
                <motion.div key={i} {...fadeUp(i * 0.06)}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{ ...LIGHT_CARD, borderTop:`3px solid ${p.color}` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background:`${p.color}14` }}>
                    <p.icon size={20} style={{ color: p.color }}/>
                  </div>
                  <h3 className="font-serif font-bold text-base text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Application Form ── */}
        <section className="py-20" style={{ background:"#f8fafc" }}>
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background:`${EMERALD}12`, color:EMERALD, border:`1px solid ${EMERALD}30` }}>
                <FileText size={11}/> {isHindi ? "आवेदन पत्र" : "Application Form"}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
                {isHindi ? "अभी आवेदन करें" : "Apply Now"}
              </h2>
              <p className="text-foreground/50 text-base mt-3 font-light">
                {isHindi
                  ? "नीचे दिया गया फ़ॉर्म भरें — हमारी टीम 3–5 कार्य दिवसों में संपर्क करेगी।"
                  : "Fill the form below — our team will reach out within 3–5 working days."}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden" style={{ ...LIGHT_CARD, boxShadow:"0 8px 40px rgba(0,0,0,0.08)" }}>
                {/* Rainbow top bar */}
                <div className="h-[3px]" style={{ background:`linear-gradient(90deg,${BLUE},${EMERALD},${GOLD},${PURPLE})` }}/>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success"
                      initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.4 }}
                      className="p-14 text-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background:`${EMERALD}14`, border:`2px solid ${EMERALD}40` }}>
                        <CheckCircle2 size={40} style={{ color:EMERALD }}/>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-extrabold text-foreground mb-3">{t.successTitle}</h3>
                      <p className="text-foreground/55 text-base mb-8 max-w-md mx-auto">{t.successSub}</p>
                      <Link href="/faculty">
                        <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white"
                          style={{ background:`linear-gradient(135deg,${BLUE},${CYAN})`, boxShadow:`0 8px 24px ${BLUE}33` }}>
                          {isHindi ? "Our Faculty देखें" : "View Our Faculty"} <ArrowRight size={15}/>
                        </motion.button>
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} noValidate className="p-8 md:p-12 space-y-10">

                      {/* ── Section 1: Personal ── */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold"
                            style={{ background:`linear-gradient(135deg,${BLUE},${CYAN})` }}>1</div>
                          <h3 className="font-serif font-extrabold text-lg text-foreground">{t.step1}</h3>
                          <div className="flex-1 h-px" style={{ background:`linear-gradient(to right,${BLUE}30,transparent)` }}/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="md:col-span-2">
                            <Label text={isHindi ? "पूरा नाम" : "Full Name"} required/>
                            <div className="relative">
                              <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input className={`${inputBase} pl-10`} style={inputStyle("fullName")}
                                placeholder={isHindi ? "जैसे: श्रीमती रेखा गुप्ता" : "e.g. Mrs. Rekha Gupta"}
                                value={form.fullName} onChange={set("fullName")}/>
                            </div>
                            <Err k="fullName"/>
                          </div>
                          <div>
                            <Label text={isHindi ? "जन्म तिथि" : "Date of Birth"}/>
                            <div className="relative">
                              <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input type="date" className={`${inputBase} pl-10`} style={inputStyle("dob")}
                                value={form.dob} onChange={set("dob")}/>
                            </div>
                          </div>
                          <div>
                            <Label text={isHindi ? "लिंग" : "Gender"} required/>
                            <div className="relative">
                              <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none"/>
                              <select className={`${inputBase} appearance-none pr-8`} style={inputStyle("gender")}
                                value={form.gender} onChange={set("gender")}>
                                <option value="">{isHindi ? "चुनें" : "Select"}</option>
                                <option value="Female">{isHindi ? "महिला" : "Female"}</option>
                                <option value="Male">{isHindi ? "पुरुष" : "Male"}</option>
                                <option value="Other">{isHindi ? "अन्य" : "Other"}</option>
                              </select>
                            </div>
                            <Err k="gender"/>
                          </div>
                          <div>
                            <Label text={isHindi ? "मोबाइल नंबर" : "Mobile Number"} required/>
                            <div className="relative">
                              <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input type="tel" className={`${inputBase} pl-10`} style={inputStyle("phone")}
                                placeholder="9XXXXXXXXX" maxLength={10}
                                value={form.phone} onChange={set("phone")}/>
                            </div>
                            <Err k="phone"/>
                          </div>
                          <div>
                            <Label text={isHindi ? "ईमेल पता" : "Email Address"} required/>
                            <div className="relative">
                              <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input type="email" className={`${inputBase} pl-10`} style={inputStyle("email")}
                                placeholder="name@example.com"
                                value={form.email} onChange={set("email")}/>
                            </div>
                            <Err k="email"/>
                          </div>
                          <div className="md:col-span-2">
                            <Label text={isHindi ? "स्थायी पता" : "Permanent Address"}/>
                            <div className="relative">
                              <MapPin size={15} className="absolute left-3.5 top-3.5 opacity-40"/>
                              <textarea className={`${inputBase} pl-10 resize-none`} style={inputStyle("address")} rows={2}
                                placeholder={isHindi ? "गली, शहर, जिला, राज्य" : "Street, City, District, State"}
                                value={form.address} onChange={set("address")}/>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Section 2: Qualifications ── */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold"
                            style={{ background:`linear-gradient(135deg,${EMERALD},${CYAN})` }}>2</div>
                          <h3 className="font-serif font-extrabold text-lg text-foreground">{t.step2}</h3>
                          <div className="flex-1 h-px" style={{ background:`linear-gradient(to right,${EMERALD}30,transparent)` }}/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <div>
                            <Label text={isHindi ? "उच्चतम डिग्री" : "Highest Degree"} required/>
                            <div className="relative">
                              <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none"/>
                              <select className={`${inputBase} appearance-none pr-8`} style={inputStyle("highestDegree")}
                                value={form.highestDegree} onChange={set("highestDegree")}>
                                <option value="">{isHindi ? "चुनें" : "Select"}</option>
                                {degrees.map(d => <option key={d} value={d}>{d}</option>)}
                              </select>
                            </div>
                            <Err k="highestDegree"/>
                          </div>
                          <div>
                            <Label text={isHindi ? "विश्वविद्यालय / कॉलेज" : "University / College"}/>
                            <input className={inputBase} style={inputStyle("university")}
                              placeholder={isHindi ? "जैसे: कुरुक्षेत्र विश्वविद्यालय" : "e.g. Kurukshetra University"}
                              value={form.university} onChange={set("university")}/>
                          </div>
                          <div>
                            <Label text={isHindi ? "उत्तीर्ण वर्ष" : "Year of Passing"}/>
                            <input type="number" min="1980" max={new Date().getFullYear()} className={inputBase} style={inputStyle("passingYear")}
                              placeholder={isHindi ? "जैसे: 2018" : "e.g. 2018"}
                              value={form.passingYear} onChange={set("passingYear")}/>
                          </div>
                        </div>
                      </div>

                      {/* ── Section 3: Professional ── */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold"
                            style={{ background:`linear-gradient(135deg,${GOLD},#f97316)` }}>3</div>
                          <h3 className="font-serif font-extrabold text-lg text-foreground">{t.step3}</h3>
                          <div className="flex-1 h-px" style={{ background:`linear-gradient(to right,${GOLD}40,transparent)` }}/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <Label text={isHindi ? "विषय विशेषज्ञता" : "Subject Specialization"} required/>
                            <div className="relative">
                              <BookOpen size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input className={`${inputBase} pl-10`} style={inputStyle("subject")}
                                placeholder={isHindi ? "जैसे: गणित, विज्ञान, हिंदी" : "e.g. Mathematics, Science, Hindi"}
                                value={form.subject} onChange={set("subject")}/>
                            </div>
                            <Err k="subject"/>
                          </div>
                          <div>
                            <Label text={isHindi ? "शिक्षण अनुभव (वर्ष)" : "Teaching Experience (years)"} required/>
                            <div className="relative">
                              <Briefcase size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input type="number" min="0" max="50" className={`${inputBase} pl-10`} style={inputStyle("experience")}
                                placeholder="0"
                                value={form.experience} onChange={set("experience")}/>
                            </div>
                            <Err k="experience"/>
                          </div>
                          <div className="md:col-span-2">
                            <Label text={isHindi ? "पिछला विद्यालय / संस्था" : "Previous School / Institution"}/>
                            <div className="relative">
                              <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input className={`${inputBase} pl-10`} style={inputStyle("prevSchool")}
                                placeholder={isHindi ? "यदि लागू हो" : "If applicable"}
                                value={form.prevSchool} onChange={set("prevSchool")}/>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Section 4: Application Details ── */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold"
                            style={{ background:`linear-gradient(135deg,${PURPLE},#a855f7)` }}>4</div>
                          <h3 className="font-serif font-extrabold text-lg text-foreground">{t.step4}</h3>
                          <div className="flex-1 h-px" style={{ background:`linear-gradient(to right,${PURPLE}30,transparent)` }}/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <Label text={isHindi ? "जिस पद के लिए आवेदन" : "Position Applied For"} required/>
                            <div className="relative">
                              <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none"/>
                              <select className={`${inputBase} appearance-none pr-8`} style={inputStyle("position")}
                                value={form.position} onChange={set("position")}>
                                <option value="">{isHindi ? "चुनें" : "Select position"}</option>
                                {positions.map(p => <option key={p} value={p}>{p}</option>)}
                              </select>
                            </div>
                            <Err k="position"/>
                          </div>
                          <div>
                            <Label text={isHindi ? "अनुमानित ज्वाइनिंग तिथि" : "Preferred Joining Date"}/>
                            <div className="relative">
                              <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40"/>
                              <input type="date" className={`${inputBase} pl-10`} style={inputStyle("joiningDate")}
                                value={form.joiningDate} onChange={set("joiningDate")}/>
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <Label text={isHindi ? "अपने बारे में संक्षेप में लिखें" : "Brief Introduction / Cover Note"}/>
                            <textarea className={`${inputBase} resize-none`} style={inputStyle("message")} rows={4}
                              placeholder={isHindi
                                ? "अपनी शिक्षण दर्शन, ताकत और शिक्षण के प्रति जुनून के बारे में बताएं..."
                                : "Tell us about your teaching philosophy, strengths, and passion for education..."}
                              value={form.message} onChange={set("message")}/>
                          </div>
                        </div>
                      </div>

                      {/* ── Submit ── */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t" style={{ borderColor:"rgba(0,0,0,0.08)" }}>
                        <p className="text-xs text-foreground/40 max-w-sm leading-relaxed">
                          {isHindi
                            ? "* आवश्यक फ़ील्ड। जमा करने पर आपका डेटा हमारी HR टीम को ईमेल के माध्यम से भेजा जाएगा।"
                            : "* Required fields. On submit your data will be sent to our HR team via email."}
                        </p>
                        <motion.button type="submit"
                          whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
                          className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-sm text-white whitespace-nowrap"
                          style={{ background:`linear-gradient(135deg,${EMERALD},${BLUE})`, boxShadow:`0 8px 30px rgba(16,185,129,0.30)` }}>
                          {t.submit} <ArrowRight size={15}/>
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact note ── */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div {...fadeUp()} className="max-w-xl mx-auto">
              <p className="text-foreground/50 text-sm mb-3">
                {isHindi ? "सीधे संपर्क करें:" : "Or reach us directly:"}
              </p>
              <a href="mailto:themilestoneKtl@gmail.com"
                className="inline-flex items-center gap-2 font-semibold text-sm hover:underline"
                style={{ color:BLUE }}>
                <Mail size={14}/> themilestoneKtl@gmail.com
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
