import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  Send, GraduationCap, CheckCircle2, Clock, MapPin, Phone,
  Mail, BookOpen, Users, Trophy, Star, ChevronRight, Sparkles,
  FileText, UserCheck, Building2, PartyPopper, Zap, Heart,
  ShieldCheck, Bus, FlaskConical, Laptop,
} from "lucide-react";

const formSchema = z.object({
  parentName:       z.string().min(2, "Parent name is required"),
  studentName:      z.string().min(2, "Student name is required"),
  classApplyingFor: z.string().min(1, "Please select a class"),
  phone:            z.string().min(10, "Valid phone number required"),
  email:            z.string().email("Valid email required").optional().or(z.literal("")),
  message:          z.string().optional(),
});

const CLASSES = [
  "Nursery","LKG","UKG",
  "Class 1","Class 2","Class 3","Class 4","Class 5",
  "Class 6","Class 7","Class 8","Class 9","Class 10",
  "Class 11 (Science)","Class 11 (Commerce)","Class 11 (Arts)",
  "Class 12 (Science)","Class 12 (Commerce)","Class 12 (Arts)",
];

const FLOATING_ICONS = [
  { icon: "🎓", x: "8%",  y: "18%", delay: 0 },
  { icon: "📚", x: "88%", y: "12%", delay: 0.4 },
  { icon: "🏆", x: "5%",  y: "72%", delay: 0.8 },
  { icon: "⭐", x: "92%", y: "65%", delay: 0.3 },
  { icon: "✅", x: "78%", y: "40%", delay: 0.6 },
  { icon: "🚀", x: "20%", y: "85%", delay: 1.0 },
];

export default function AdmissionsPage() {
  const { toast }         = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { parentName:"", studentName:"", classApplyingFor:"", phone:"", email:"", message:"" },
  });

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: isHindi ? "जांच सफलतापूर्वक जमा हो गई! 🎉" : "Enquiry Submitted Successfully! 🎉",
        description: isHindi ? "हमारी प्रवेश टीम 24 घंटे के भीतर आपसे संपर्क करेगी।" : "Our admissions team will contact you within 24 hours.",
      });
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const PROCESS_STEPS = isHindi ? [
    { icon: FileText,    step:"01", title:"जांच जमा करें",           desc:"ऑनलाइन फॉर्म भरें या हमें कॉल करें। हमारी टीम 24 घंटे में जवाब देती है।",   color:"#2563EB", bg:"#eff6ff" },
    { icon: Building2,   step:"02", title:"कैंपस विजिट",             desc:"हमारे कैंपस आएं, काउंसलर से मिलें और हमारी विश्व स्तरीय सुविधाएं देखें।",    color:"#10B981", bg:"#ecfdf5" },
    { icon: UserCheck,   step:"03", title:"पंजीकरण और दस्तावेज जमा", desc:"औपचारिक आवेदन पूरा करें और आवश्यक दस्तावेज जमा करें।",                    color:"#8B5CF6", bg:"#f5f3ff" },
    { icon: PartyPopper, step:"04", title:"माइलस्टोन में स्वागत!",   desc:"पुष्टि प्राप्त करें और माइलस्टोन स्कूल परिवार में शामिल हों।",            color:"#F59E0B", bg:"#fffbeb" },
  ] : [
    { icon: FileText,    step:"01", title:"Submit Enquiry",          desc:"Fill the online form or call us. Our team responds within 24 hours.",      color:"#2563EB", bg:"#eff6ff" },
    { icon: Building2,   step:"02", title:"Campus Visit",            desc:"Visit our campus, meet our counselor, and tour our world-class facilities.", color:"#10B981", bg:"#ecfdf5" },
    { icon: UserCheck,   step:"03", title:"Register & Submit Docs",  desc:"Complete the formal application and submit the required documents.",        color:"#8B5CF6", bg:"#f5f3ff" },
    { icon: PartyPopper, step:"04", title:"Welcome to Milestone!",   desc:"Receive confirmation and join The Milestone School family.",               color:"#F59E0B", bg:"#fffbeb" },
  ];

  const WHY_ITEMS = isHindi ? [
    { icon: Trophy,       title:"100% बोर्ड परिणाम",    desc:"CBSE कक्षा X और XII में प्रतिवर्ष निरंतर शीर्ष स्कोर",         color:"#F59E0B" },
    { icon: Users,        title:"विशेषज्ञ शिक्षक",      desc:"अनुभवी और समर्पित शिक्षक जो हर छात्र पर व्यक्तिगत ध्यान देते हैं", color:"#2563EB" },
    { icon: BookOpen,     title:"CBSE पाठ्यक्रम",        desc:"CBSE, नई दिल्ली से संबद्ध — नर्सरी से कक्षा XII तक",            color:"#10B981" },
    { icon: Laptop,       title:"स्मार्ट क्लासरूम",     desc:"इंटरएक्टिव व्हाइटबोर्ड और डिजिटल लर्निंग टूल्स",              color:"#8B5CF6" },
    { icon: FlaskConical, title:"आधुनिक लैब्स",         desc:"भौतिकी, रसायन, जीव विज्ञान और कंप्यूटर लैब्स",                color:"#EC4899" },
    { icon: ShieldCheck,  title:"सुरक्षित कैंपस",       desc:"CCTV निगरानी और सुरक्षित बस परिवहन के साथ",                    color:"#06B6D4" },
  ] : [
    { icon: Trophy,       title:"100% Board Results",   desc:"Consistent top scores in CBSE Class X & XII every year",          color:"#F59E0B" },
    { icon: Users,        title:"Expert Faculty",        desc:"Highly qualified & dedicated teachers with personalized attention",color:"#2563EB" },
    { icon: BookOpen,     title:"CBSE Curriculum",       desc:"Affiliated with CBSE, New Delhi — Nursery to Class XII",          color:"#10B981" },
    { icon: Laptop,       title:"Smart Classrooms",      desc:"Interactive whiteboards and cutting-edge digital learning tools",  color:"#8B5CF6" },
    { icon: FlaskConical, title:"Modern Labs",           desc:"Fully equipped Physics, Chemistry, Biology & Computer labs",       color:"#EC4899" },
    { icon: ShieldCheck,  title:"Safe Campus",           desc:"CCTV surveillance & safe school bus transport for all students",   color:"#06B6D4" },
  ];

  const TESTIMONIALS = isHindi ? [
    { quote:"माइलस्टोन में प्रवेश हमारे परिवार का सबसे अच्छा निर्णय था। मेरी बेटी ने कक्षा XII में 95% अंक प्राप्त किए!", author:"श्रीमती अनीता वर्मा", role:"अभिभावक · कक्षा 12" },
    { quote:"शिक्षक वाकई असाधारण हैं। मेरे बेटे को हर विषय में व्यक्तिगत ध्यान मिलता है। स्मार्ट क्लासरूम ने उसे विज्ञान से प्यार करा दिया!", author:"श्री राकेश अग्रवाल", role:"अभिभावक · कक्षा 10" },
    { quote:"15+ वर्षों का अनुभव दिखता है। बच्चों का चरित्र निर्माण और अकादमिक उत्कृष्टता — दोनों यहाँ मिलते हैं।", author:"प्रिया शर्मा", role:"अभिभावक · कक्षा 5 और 9" },
  ] : [
    { quote:"Joining Milestone was the best decision for our family. My daughter scored 95% in Class XII and got into her dream college!", author:"Mrs. Anita Verma", role:"Parent · Class 12" },
    { quote:"The teachers are truly exceptional. My son gets personalized attention in every subject. Smart classrooms made him fall in love with Science!", author:"Mr. Rakesh Aggarwal", role:"Parent · Class 10" },
    { quote:"15+ years of experience shows. Character building and academic excellence — both are nurtured beautifully here.", author:"Priya Sharma", role:"Parent · Classes 5 & 9" },
  ];

  const heroStats = isHindi ? [
    { val:"15+",  label:"उत्कृष्टता के वर्ष", icon:"🏆", color:"#F59E0B" },
    { val:"100%", label:"बोर्ड पास रेट",       icon:"📈", color:"#10B981" },
    { val:"1000+",label:"खुश परिवार",          icon:"❤️", color:"#EC4899" },
    { val:"CBSE", label:"संबद्ध बोर्ड",         icon:"🎓", color:"#2563EB" },
  ] : [
    { val:"15+",  label:"Years of Excellence", icon:"🏆", color:"#F59E0B" },
    { val:"100%", label:"Board Pass Rate",     icon:"📈", color:"#10B981" },
    { val:"1000+",label:"Happy Families",      icon:"❤️", color:"#EC4899" },
    { val:"CBSE", label:"Affiliated Board",    icon:"🎓", color:"#2563EB" },
  ];

  const contactItems = [
    { icon: Phone,  label: isHindi ? "कॉल / WhatsApp" : "Call / WhatsApp", val: "+91 98125-74766", href: "tel:+919812574766", color:"#10B981" },
    { icon: Mail,   label: isHindi ? "ईमेल" : "Email", val: "themilestoneKtl@gmail.com", href: "mailto:themilestoneKtl@gmail.com", color:"#2563EB" },
    { icon: Clock,  label: isHindi ? "स्कूल समय" : "School Timings", val: isHindi ? "सोम-शनि: 7:30 AM – 2:30 PM" : "Mon–Sat: 7:30 AM – 2:30 PM", href: null, color:"#8B5CF6" },
    { icon: MapPin, label: isHindi ? "पता" : "Address", val: "Opp. Pawan Vatika, Khurana Road, Kaithal HR – 136027", href: "https://maps.google.com/?q=Khurana+Rd+Kaithal", color:"#F59E0B" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background:"linear-gradient(145deg,#0a1628 0%,#0d2d4a 30%,#0a3a2a 65%,#0f1e32 100%)" }}>

        {/* Radial glow layers */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse 80% 60% at 50% 0%,rgba(37,99,235,0.18) 0%,transparent 70%)" }}/>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse 60% 50% at 80% 80%,rgba(16,185,129,0.15) 0%,transparent 70%)" }}/>

        {/* Animated orbs */}
        {[
          { w:500, h:500, x:"-10%", y:"-20%", c:"#2563EB", dur:10 },
          { w:400, h:400, x:"75%",  y:"50%",  c:"#10B981", dur:13 },
          { w:300, h:300, x:"40%",  y:"70%",  c:"#8B5CF6", dur:8 },
        ].map((o, i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale:[1,1.2,1], opacity:[0.6,1,0.6] }}
            transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
        ))}

        {/* Floating emoji icons */}
        {FLOATING_ICONS.map(({ icon, x, y, delay }, i) => (
          <motion.div key={i} className="absolute text-2xl select-none pointer-events-none"
            style={{ left:x, top:y }}
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:[0,0.7,0.7,0], y:[20,-10,-10,20] }}
            transition={{ repeat:Infinity, duration:6, delay, ease:"easeInOut" }}>
            {icon}
          </motion.div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize:"50px 50px" }}/>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">

            {/* Urgency pill */}
            <motion.div
              initial={{ opacity:0, y:-20, scale:0.9 }}
              animate={{ opacity:1, y:0, scale:1 }}
              transition={{ duration:0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 text-sm font-bold"
              style={{ background:"linear-gradient(135deg,rgba(245,158,11,0.25),rgba(239,68,68,0.2))", border:"1.5px solid rgba(245,158,11,0.5)", color:"#fcd34d", backdropFilter:"blur(12px)" }}>
              <motion.span animate={{ scale:[1,1.3,1] }} transition={{ repeat:Infinity, duration:1.5 }}>🔥</motion.span>
              {isHindi ? "सीमित सीटें बचीं — सत्र 2026–27 के लिए अभी आवेदन करें!" : "Limited Seats Left — Apply Now for Session 2026–27!"}
              <motion.span className="w-2 h-2 rounded-full bg-green-400" animate={{ opacity:[1,0.2,1] }} transition={{ repeat:Infinity, duration:0.8 }}/>
            </motion.div>

            {/* School name */}
            <motion.p className="text-white/60 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}>
              {isHindi ? "द माइलस्टोन सी.सेक. स्कूल · कैथल, हरियाणा" : "The Milestone Sr. Sec. School · Kaithal, Haryana"}
            </motion.p>

            <motion.h1
              className="font-serif font-extrabold text-white leading-[1.06] tracking-tight mb-6"
              style={{ fontSize:"clamp(2.2rem,6.5vw,5rem)", textShadow:"0 4px 40px rgba(0,0,0,0.6)" }}
              initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15, ease:[0.22,1,0.36,1] }}>
              {isHindi ? "अपने बच्चे का" : "Give Your Child"}
              <br/>
              <span style={{ background:"linear-gradient(90deg,#60a5fa,#34d399,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "सुनहरा भविष्य" : "The Best Start"}
              </span>
              <br/>
              <span className="text-white/85" style={{ fontSize:"70%", fontWeight:700 }}>
                {isHindi ? "माइलस्टोन स्कूल में!" : "in Life — at Milestone!"}
              </span>
            </motion.h1>

            <motion.p className="text-white/70 text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}>
              {isHindi
                ? <>कैथल का <strong className="text-white">सबसे भरोसेमंद CBSE स्कूल</strong> — जहाँ शिक्षा, संस्कार और सफलता का संगम होता है।</>
                : <>Kaithal's <strong className="text-white">most trusted CBSE school</strong> — where education, values, and excellence converge to shape tomorrow's leaders.</>}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.6 }}>
              <motion.a href="#apply-form"
                whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:0.97 }}
                className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base relative overflow-hidden group shadow-2xl"
                style={{ background:"linear-gradient(135deg,#2563EB,#10B981)", boxShadow:"0 8px 40px rgba(37,99,235,0.45)" }}>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
                <GraduationCap size={20}/>
                {isHindi ? "अभी आवेदन करें — निःशुल्क" : "Apply Now — It's Free!"}
              </motion.a>
              <motion.a href="tel:+919812574766"
                whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:0.97 }}
                className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base"
                style={{ background:"rgba(255,255,255,0.10)", border:"2px solid rgba(255,255,255,0.35)", backdropFilter:"blur(12px)" }}>
                <Phone size={18}/> {isHindi ? "अभी कॉल करें" : "Call Now"}
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
              initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55, duration:0.6 }}>
              {heroStats.map((s,i) => (
                <motion.div key={i}
                  whileHover={{ y:-5, scale:1.04 }}
                  className="text-center py-5 px-3 rounded-2xl relative overflow-hidden group cursor-default"
                  style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.14)", backdropFilter:"blur(16px)" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background:`radial-gradient(circle at center,${s.color}18,transparent 70%)` }}/>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="text-2xl md:text-3xl font-serif font-extrabold text-white">{s.val}</p>
                  <p className="text-white/55 text-[11px] mt-0.5 font-medium leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* ── PROCESS STEPS ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(16,185,129,0.1)", color:"#10B981", border:"1px solid rgba(16,185,129,0.25)" }}>
              <Zap size={11}/> {isHindi ? "कैसे आवेदन करें" : "How to Apply"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground">
              {isHindi ? "सरल " : "Simple "}<span className="text-gradient">{isHindi ? "4-चरण प्रक्रिया" : "4-Step Process"}</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              {isHindi ? "हमारी प्रवेश प्रक्रिया सरल और पारदर्शी है। कोई छिपी फीस नहीं।" : "Our admission process is simple, transparent, and stress-free. No hidden charges."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 z-0"
              style={{ background:"linear-gradient(90deg,#2563EB,#10B981,#8B5CF6,#F59E0B)" }}/>

            {PROCESS_STEPS.map(({ icon: Icon, step, title, desc, color, bg }, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.12, duration:0.6 }}
                whileHover={{ y:-8, boxShadow:"0 20px 60px rgba(0,0,0,0.12)" }}
                className="relative bg-card rounded-3xl p-7 border border-border text-center z-10 transition-all duration-300">
                {/* Step number badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white shadow-lg"
                  style={{ background:`linear-gradient(135deg,${color},${color}cc)` }}>
                  {i+1}
                </div>
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 mt-2 flex items-center justify-center"
                  style={{ background:bg, border:`2px solid ${color}30` }}>
                  <Icon size={26} style={{ color }}/>
                </div>
                <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color }}>{isHindi ? "चरण" : "STEP"} {step}</span>
                <h3 className="font-bold text-foreground text-base mb-2 leading-snug">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MILESTONE ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#f0f7ff 0%,#f0fdf4 50%,#faf5ff 100%)" }}>
        <div className="absolute inset-0 dark:opacity-5 opacity-100"
          style={{ backgroundImage:"radial-gradient(#2563EB15 1px,transparent 1px)", backgroundSize:"32px 32px" }}/>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="text-center mb-16"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(37,99,235,0.10)", color:"#2563EB", border:"1px solid rgba(37,99,235,0.25)" }}>
              <Heart size={11}/> {isHindi ? "हमें क्यों चुनें" : "Why Choose Us"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground">
              {isHindi ? "अभिभावक " : "Why Parents "}<span className="text-gradient">{isHindi ? "माइलस्टोन को क्यों चुनते हैं" : "Trust The Milestone"}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ITEMS.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.07, duration:0.5 }}
                whileHover={{ y:-5, boxShadow:"0 16px 48px rgba(0,0,0,0.10)" }}
                className="group flex gap-4 p-6 bg-white dark:bg-card rounded-2xl border border-border/60 shadow-sm transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background:`radial-gradient(circle,${color}18,transparent 70%)`, transform:"translate(30%,-30%)" }}/>
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background:`${color}15`, border:`1.5px solid ${color}30` }}>
                  <Icon size={22} style={{ color }}/>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5 text-[15px]">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-14"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(245,158,11,0.1)", color:"#F59E0B", border:"1px solid rgba(245,158,11,0.3)" }}>
              <Star size={11}/> {isHindi ? "अभिभावकों के अनुभव" : "Parent Stories"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
              {isHindi ? "हमारे " : "Hear from Our "}
              <span className="text-gradient">{isHindi ? "खुश परिवारों की बात" : "Happy Families"}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author, role }, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.6 }}
                whileHover={{ y:-5 }}
                className="bg-card rounded-3xl p-7 border border-border shadow-sm relative overflow-hidden">
                <div className="absolute top-5 right-6 text-5xl font-serif text-primary/10 select-none">"</div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_,j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400"/>)}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                    style={{ background:`linear-gradient(135deg,#2563EB,#10B981)` }}>
                    {author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{author}</p>
                    <p className="text-muted-foreground text-xs">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ─────────────────────────────────────── */}
      <section id="apply-form" className="py-24 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#0a1628 0%,#0d2d4a 50%,#0a2a1a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,0.12) 0%,transparent 70%)" }}/>
        <div className="absolute inset-0 dark:opacity-5 opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize:"48px 48px" }}/>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background:"rgba(16,185,129,0.2)", color:"#34d399", border:"1px solid rgba(16,185,129,0.4)" }}>
              <Sparkles size={11}/> {isHindi ? "अभी आवेदन करें" : "Apply Now"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white">
              {isHindi ? "अपने बच्चे की " : "Begin Your Child's "}
              <span style={{ background:"linear-gradient(90deg,#60a5fa,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                {isHindi ? "यात्रा आज शुरू करें" : "Journey Today"}
              </span>
            </h2>
            <p className="text-white/60 mt-3 max-w-xl mx-auto">
              {isHindi
                ? "नीचे फॉर्म भरें और हमारी प्रवेश टीम 24 घंटे के भीतर आपसे संपर्क करेगी।"
                : "Fill the form below and our admissions team will personally call you within 24 hours."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

            {/* Left: Contact + Quick Facts */}
            <motion.div className="lg:col-span-2 space-y-5"
              initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.6 }}>

              <div className="rounded-3xl p-6 border"
                style={{ background:"rgba(255,255,255,0.06)", borderColor:"rgba(255,255,255,0.12)", backdropFilter:"blur(16px)" }}>
                <h3 className="font-serif font-bold text-lg text-white mb-5 flex items-center gap-2">
                  <Phone size={16} className="text-emerald-400"/>
                  {isHindi ? "सीधे संपर्क करें" : "Contact Us Directly"}
                </h3>
                {contactItems.map(({ icon: Icon, label, val, href, color }, i) => (
                  <div key={i} className="flex gap-3.5 mb-5 last:mb-0 group">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background:`${color}22`, border:`1px solid ${color}40` }}>
                      <Icon size={15} style={{ color }}/>
                    </div>
                    <div>
                      <p className="text-white/45 text-[11px] font-medium mb-0.5">{label}</p>
                      {href
                        ? <a href={href} target={href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer"
                            className="text-sm font-semibold text-white/90 hover:text-white transition-colors">{val}</a>
                        : <p className="text-sm font-semibold text-white/90">{val}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick facts */}
              <div className="rounded-3xl p-6"
                style={{ background:"linear-gradient(135deg,rgba(37,99,235,0.3),rgba(16,185,129,0.2))", border:"1px solid rgba(255,255,255,0.15)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={18} className="text-emerald-400"/>
                  <span className="font-bold text-white">{isHindi ? "त्वरित तथ्य" : "Quick Facts"}</span>
                </div>
                {(isHindi ? [
                  "CBSE, नई दिल्ली से संबद्ध",
                  "नर्सरी से कक्षा XII",
                  "विज्ञान, वाणिज्य, कला स्ट्रीम",
                  "सुरक्षित स्कूल बस",
                  "15+ वर्षों की उत्कृष्टता",
                ] : [
                  "Affiliated with CBSE, New Delhi",
                  "Classes: Nursery to Class XII",
                  "Streams: Science, Commerce, Arts",
                  "Safe school bus available",
                  "15+ years of excellence",
                ]).map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"/>
                    <span className="text-white/75 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div className="lg:col-span-3 rounded-3xl p-8 relative overflow-hidden border"
              style={{ background:"rgba(255,255,255,0.95)", borderColor:"rgba(255,255,255,0.3)", backdropFilter:"blur(20px)" }}
              initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                style={{ background:"linear-gradient(90deg,#2563EB,#10B981,#8B5CF6,#2563EB)" }}/>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div className="flex flex-col items-center justify-center text-center py-20"
                    key="success"
                    initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                    transition={{ type:"spring", stiffness:200, damping:20 }}>
                    <motion.div
                      animate={{ scale:[1,1.2,1,1.15,1] }}
                      transition={{ duration:0.8 }}>
                      <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background:"linear-gradient(135deg,#10B981,#2563EB)" }}>
                        <CheckCircle2 size={48} className="text-white"/>
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-serif font-extrabold text-slate-800 mb-2">
                      {isHindi ? "जांच जमा हो गई! 🎉" : "Enquiry Submitted! 🎉"}
                    </h3>
                    <p className="text-slate-500 max-w-xs">
                      {isHindi ? "हमारी प्रवेश टीम 24 घंटे के भीतर आपको कॉल करेगी।" : "Our admissions team will personally call you within 24 hours."}
                    </p>
                    <div className="mt-6 flex gap-2">
                      {[...Array(5)].map((_,j) => <Star key={j} size={18} className="text-amber-400 fill-amber-400"/>)}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity:0 }} animate={{ opacity:1 }}>
                    <h3 className="text-xl font-serif font-extrabold text-slate-800 mb-1">
                      {isHindi ? "प्रवेश जांच फॉर्म" : "Admission Enquiry Form"}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">{isHindi ? "सभी * अनिवार्य हैं।" : "All * fields are required."}</p>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField control={form.control} name="parentName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-slate-700">{isHindi ? "अभिभावक / संरक्षक नाम *" : "Parent / Guardian Name *"}</FormLabel>
                                <FormControl><Input placeholder={isHindi ? "आपका पूरा नाम" : "Your full name"} {...field} className="bg-slate-50 border-slate-200 focus:border-blue-400"/></FormControl>
                                <FormMessage/>
                              </FormItem>
                            )}/>
                          <FormField control={form.control} name="studentName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-slate-700">{isHindi ? "छात्र का नाम *" : "Student Name *"}</FormLabel>
                                <FormControl><Input placeholder={isHindi ? "बच्चे का पूरा नाम" : "Child's full name"} {...field} className="bg-slate-50 border-slate-200 focus:border-blue-400"/></FormControl>
                                <FormMessage/>
                              </FormItem>
                            )}/>
                        </div>

                        <FormField control={form.control} name="classApplyingFor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700">{isHindi ? "किस कक्षा के लिए आवेदन *" : "Class Applying For *"}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-50 border-slate-200">
                                    <SelectValue placeholder={isHindi ? "कक्षा चुनें" : "Select class"}/>
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>{CLASSES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                              </Select>
                              <FormMessage/>
                            </FormItem>
                          )}/>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField control={form.control} name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-slate-700">{isHindi ? "फोन नंबर *" : "Phone Number *"}</FormLabel>
                                <FormControl><Input placeholder={isHindi ? "10-अंक मोबाइल" : "10-digit mobile"} {...field} className="bg-slate-50 border-slate-200"/></FormControl>
                                <FormMessage/>
                              </FormItem>
                            )}/>
                          <FormField control={form.control} name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-slate-700">{isHindi ? "ईमेल (वैकल्पिक)" : "Email (Optional)"}</FormLabel>
                                <FormControl><Input placeholder="your@email.com" {...field} className="bg-slate-50 border-slate-200"/></FormControl>
                                <FormMessage/>
                              </FormItem>
                            )}/>
                        </div>

                        <FormField control={form.control} name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700">{isHindi ? "कोई प्रश्न?" : "Any questions?"}</FormLabel>
                              <FormControl>
                                <Textarea placeholder={isHindi ? "हम आपकी कैसे मदद कर सकते हैं?" : "How can we help you?"} className="resize-none min-h-[80px] bg-slate-50 border-slate-200" {...field}/>
                              </FormControl>
                              <FormMessage/>
                            </FormItem>
                          )}/>

                        <Button type="submit" disabled={isSubmitting}
                          className="w-full h-13 text-base rounded-xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group border-0"
                          style={{ background:"linear-gradient(135deg,#2563EB,#10B981)", color:"white", height:"52px" }}>
                          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
                          {isSubmitting
                            ? <span className="flex items-center gap-2"><div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"/>{isHindi ? "जमा हो रहा है..." : "Submitting..."}</span>
                            : <span className="flex items-center gap-2"><Send size={16}/>{isHindi ? "जांच जमा करें — निःशुल्क" : "Submit Enquiry — It's Free!"}</span>}
                        </Button>
                        <p className="text-xs text-center text-slate-400">
                          {isHindi ? "जमा करके, आप हमारी प्रवेश टीम को संपर्क करने की अनुमति देते हैं।" : "By submitting, you allow our admissions team to contact you. No spam, ever."}
                        </p>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
