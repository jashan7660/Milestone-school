import { useState } from "react";
import { motion } from "framer-motion";
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
import {
  Send, GraduationCap, CheckCircle2, Clock, MapPin, Phone,
  Mail, BookOpen, Users, Trophy, Star, ChevronRight, Sparkles,
  FileText, UserCheck, Building2, PartyPopper,
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

const PROCESS_STEPS = [
  { icon: FileText,    step:"01", title:"Submit Enquiry",          desc:"Fill the online form or call us. Our team responds within 24 hours.",        color:"#2563EB" },
  { icon: Building2,   step:"02", title:"Campus Visit",            desc:"Visit our campus, interact with our counselor, and see our facilities.",      color:"#10B981" },
  { icon: UserCheck,   step:"03", title:"Register & Submit Docs",  desc:"Complete the formal application and submit required documents.",              color:"#8B5CF6" },
  { icon: PartyPopper, step:"04", title:"Welcome to Milestone!",   desc:"Receive confirmation and join The Milestone School family.",                 color:"#F59E0B" },
];

const WHY_ITEMS = [
  { icon: Trophy,   title:"100% Board Results",   desc:"Consistent top scores in CBSE Class X & XII every year" },
  { icon: Users,    title:"Expert Faculty",        desc:"Highly qualified & dedicated teachers with years of experience" },
  { icon: BookOpen, title:"CBSE Curriculum",       desc:"Affiliated with CBSE, New Delhi — Nursery to Class XII" },
  { icon: Building2,title:"Modern Facilities",    desc:"Smart classrooms, science labs, library & sports ground" },
  { icon: Star,     title:"Holistic Development", desc:"Sports, arts, music & co-curricular excellence alongside academics" },
  { icon: MapPin,   title:"Safe Campus",           desc:"Secure, well-maintained campus with CCTV & bus transport" },
];

export default function AdmissionsPage() {
  const { toast }         = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: "Enquiry Submitted Successfully! 🎉",
        description: "Our admissions team will contact you within 24 hours.",
      });
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-32"
               style={{ background:"linear-gradient(135deg,#060f2a 0%,#0d1f4a 40%,#0a2e1e 100%)" }}>

        {/* grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
             style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)", backgroundSize:"48px 48px" }}/>

        {/* animated blobs */}
        <motion.div className="absolute top-[-100px] left-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(37,99,235,0.18),transparent 70%)" }}
          animate={{ scale:[1,1.12,1], x:[0,25,0] }} transition={{ repeat:Infinity, duration:7, ease:"easeInOut" }}/>
        <motion.div className="absolute bottom-[-80px] right-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(16,185,129,0.18),transparent 70%)" }}
          animate={{ scale:[1,1.18,1], x:[0,-20,0] }} transition={{ repeat:Infinity, duration:9, ease:"easeInOut" }}/>
        <motion.div className="absolute top-[40%] left-[50%] w-64 h-64 rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(139,92,246,0.12),transparent 70%)" }}
          animate={{ scale:[1,1.3,1], opacity:[0.5,0.9,0.5] }} transition={{ repeat:Infinity, duration:6 }}/>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — text */}
            <motion.div className="flex-1 text-center lg:text-left"
              initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.75 }}>

              {/* badge */}
              <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-wider"
                style={{ background:"rgba(37,99,235,0.2)", border:"1px solid rgba(37,99,235,0.45)", color:"#93c5fd" }}
                animate={{ boxShadow:["0 0 0 0 rgba(37,99,235,0.4)","0 0 0 10px rgba(37,99,235,0)"] }}
                transition={{ repeat:Infinity, duration:2.2 }}>
                <motion.span animate={{ rotate:[0,15,-15,0] }} transition={{ repeat:Infinity, duration:2 }}>🎓</motion.span>
                Admissions Open — Session 2026–27
              </motion.div>

              {/* headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
                Shape Your Child's
                <br/>
                <span style={{ background:"linear-gradient(90deg,#60a5fa,#34d399,#60a5fa)", backgroundSize:"200%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  Bright Future
                </span>
              </h1>

              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
                Join <strong className="text-white/90">Kaithal's most trusted CBSE school.</strong> 15+ years of academic excellence, 
                world-class facilities, and a nurturing environment where every child thrives.
              </p>

              {/* small chips */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                {["CBSE Affiliated","Nursery to Class XII","100% Board Results","Safe Campus"].map(t => (
                  <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.12)" }}>
                    ✓ {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <motion.a href="#apply-form" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm relative overflow-hidden group"
                  style={{ background:"linear-gradient(135deg,#2563EB,#10B981)", boxShadow:"0 6px 28px rgba(37,99,235,0.55)" }}>
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
                  <GraduationCap size={16}/> Apply Now — Free
                </motion.a>
                <motion.a href="tel:+919812574766" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm"
                  style={{ background:"rgba(255,255,255,0.08)", color:"white", border:"1.5px solid rgba(255,255,255,0.18)", backdropFilter:"blur(8px)" }}>
                  <Phone size={15}/> +91 98125-74766
                </motion.a>
              </div>
            </motion.div>

            {/* Right — logo orb */}
            <motion.div className="flex-shrink-0 flex items-center justify-center"
              initial={{ opacity:0, scale:0.75, rotate:-8 }} animate={{ opacity:1, scale:1, rotate:0 }}
              transition={{ duration:0.9, delay:0.25, type:"spring", stiffness:120 }}>
              <div className="relative w-52 h-52 md:w-72 md:h-72">

                {/* outer pulse ring */}
                <motion.div className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ border:"2px solid rgba(37,99,235,0.35)" }}
                  animate={{ scale:[1,1.12,1], opacity:[0.7,0.2,0.7] }}
                  transition={{ repeat:Infinity, duration:3 }}/>

                {/* spinning dashed ring */}
                <motion.div className="absolute -inset-3 rounded-full pointer-events-none"
                  style={{ border:"1.5px dashed rgba(16,185,129,0.4)" }}
                  animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:12, ease:"linear" }}/>

                {/* second spinning ring — reverse */}
                <motion.div className="absolute -inset-6 rounded-full pointer-events-none"
                  style={{ border:"1px dashed rgba(37,99,235,0.25)" }}
                  animate={{ rotate:-360 }} transition={{ repeat:Infinity, duration:18, ease:"linear" }}/>

                {/* glow center */}
                <div className="absolute inset-4 rounded-full pointer-events-none"
                     style={{ background:"radial-gradient(circle,rgba(37,99,235,0.25) 0%,transparent 70%)" }}/>

                {/* logo — no background */}
                <motion.img src="/logo-nobg.png" alt="The Milestone Sr. Sec. School"
                  animate={{ y:[0,-10,0] }} transition={{ repeat:Infinity, duration:4, ease:"easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                  style={{ filter:"drop-shadow(0 8px 32px rgba(37,99,235,0.5)) drop-shadow(0 0 16px rgba(16,185,129,0.3))" }}/>

                {/* CBSE badge */}
                <motion.div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full text-[10px] font-extrabold text-white flex items-center gap-1"
                  style={{ background:"linear-gradient(135deg,#2563EB,#1d4ed8)", boxShadow:"0 4px 14px rgba(37,99,235,0.6)" }}
                  animate={{ scale:[1,1.08,1] }} transition={{ repeat:Infinity, duration:2 }}>
                  ✓ CBSE
                </motion.div>

                {/* 15+ badge */}
                <motion.div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full text-[10px] font-extrabold text-white flex items-center gap-1"
                  style={{ background:"linear-gradient(135deg,#059669,#10B981)", boxShadow:"0 4px 14px rgba(16,185,129,0.6)" }}
                  animate={{ scale:[1,1.08,1] }} transition={{ repeat:Infinity, duration:2.4 }}>
                  ⭐ 15+ Years
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* quick stats */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14"
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55, duration:0.6 }}>
            {[
              { val:"15+",         label:"Years of Excellence", icon:"🏆" },
              { val:"100%",        label:"Board Pass Rate",     icon:"📈" },
              { val:"Nursery–XII", label:"All Classes",         icon:"📚" },
              { val:"CBSE",        label:"Affiliated Board",    icon:"🎓" },
            ].map((s,i) => (
              <motion.div key={i} whileHover={{ y:-4, scale:1.02 }}
                className="text-center py-5 px-3 rounded-2xl"
                style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", backdropFilter:"blur(8px)" }}>
                <div className="text-xl mb-1">{s.icon}</div>
                <p className="text-2xl md:text-3xl font-serif font-extrabold"
                   style={{ background:"linear-gradient(90deg,#60a5fa,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {s.val}
                </p>
                <p className="text-white/55 text-[11px] mt-1 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-14"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div className="section-label-green mx-auto">How to Apply</div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mt-2">
              Simple 4-Step <span className="text-gradient">Admission Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ icon: Icon, step, title, desc, color }, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.5 }}
                whileHover={{ y:-6 }}
                className="relative bg-card rounded-3xl p-6 border border-border shadow-sm text-center">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ChevronRight size={20} className="text-muted-foreground/40"/>
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                     style={{ background:`${color}18`, border:`2px solid ${color}30` }}>
                  <Icon size={22} style={{ color }}/>
                </div>
                <span className="text-xs font-bold tracking-widest mb-1 block"
                      style={{ color:`${color}` }}>STEP {step}</span>
                <h3 className="font-bold text-foreground text-base mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MILESTONE ────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-14"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div className="section-label mx-auto">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mt-2">
              Why Parents Choose <span className="text-gradient">The Milestone</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.5 }}
                whileHover={{ y:-4 }}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border shadow-sm">
                <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center bg-primary/10">
                  <Icon size={20} className="text-primary"/>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ─────────────────────────────────── */}
      <section id="apply-form" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-14"
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div className="section-label-green mx-auto">Apply Now</div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mt-2">
              Begin Your Child's <span className="text-gradient">Journey Today</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Fill the form below and our admissions team will contact you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

            {/* contact sidebar */}
            <motion.div className="lg:col-span-2 space-y-4"
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.6 }}>

              <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                <h3 className="font-serif font-bold text-lg text-foreground mb-4">Contact Us Directly</h3>
                {[
                  { icon: Phone,    label:"Call / WhatsApp", val:"+91 98125-74766", href:"tel:+919812574766" },
                  { icon: Mail,     label:"Email",           val:"themilestoneKtl@gmail.com", href:"mailto:themilestoneKtl@gmail.com" },
                  { icon: Clock,    label:"School Timings",  val:"Mon–Sat: 7:30 AM – 2:30 PM", href:null },
                  { icon: MapPin,   label:"Address",         val:"Opp. Pawan Vatika, Khurana Road, Kaithal, HR – 136027", href:"https://maps.google.com/?q=Khurana+Rd+Kaithal" },
                ].map(({ icon: Icon, label, val, href }, i) => (
                  <div key={i} className="flex gap-3 mb-4 last:mb-0">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex-shrink-0 flex items-center justify-center">
                      <Icon size={16} className="text-primary"/>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      {href
                        ? <a href={href} target={href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer"
                             className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{val}</a>
                        : <p className="text-sm font-semibold text-foreground">{val}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl p-6 text-white"
                   style={{ background:"linear-gradient(135deg,#0c1e45,#153270)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-emerald-400"/>
                  <span className="font-bold">Quick Facts</span>
                </div>
                {[
                  "Affiliated with CBSE, New Delhi",
                  "Classes: Nursery to Class XII",
                  "Streams: Science, Commerce, Arts",
                  "Safe school bus available",
                  "15+ years of excellence",
                ].map((f,i) => (
                  <div key={i} className="flex items-center gap-2 mb-2 last:mb-0">
                    <ChevronRight size={13} className="text-emerald-400 flex-shrink-0"/>
                    <span className="text-white/80 text-xs">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* form */}
            <motion.div className="lg:col-span-3 bg-card rounded-3xl p-8 border border-border shadow-xl relative overflow-hidden"
              initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
              <div className="absolute top-0 left-0 right-0 h-1.5"
                   style={{ background:"linear-gradient(90deg,#2563EB,#10B981,#2563EB)" }}/>

              {submitted ? (
                <motion.div className="h-full flex flex-col items-center justify-center text-center py-16"
                  initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}>
                  <motion.div animate={{ scale:[1,1.15,1] }} transition={{ repeat:3, duration:0.5 }}>
                    <CheckCircle2 size={64} className="text-emerald-500 mb-4 mx-auto"/>
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Enquiry Submitted!</h3>
                  <p className="text-muted-foreground">Our admissions team will call you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-6">Admission Enquiry Form</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="parentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Parent / Guardian Name *</FormLabel>
                              <FormControl><Input placeholder="Your full name" {...field} className="bg-background"/></FormControl>
                              <FormMessage/>
                            </FormItem>
                          )}/>
                        <FormField control={form.control} name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student Name *</FormLabel>
                              <FormControl><Input placeholder="Child's full name" {...field} className="bg-background"/></FormControl>
                              <FormMessage/>
                            </FormItem>
                          )}/>
                      </div>

                      <FormField control={form.control} name="classApplyingFor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Class Applying For *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background"><SelectValue placeholder="Select class"/></SelectTrigger>
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
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl><Input placeholder="10-digit mobile" {...field} className="bg-background"/></FormControl>
                              <FormMessage/>
                            </FormItem>
                          )}/>
                        <FormField control={form.control} name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email (Optional)</FormLabel>
                              <FormControl><Input placeholder="your@email.com" {...field} className="bg-background"/></FormControl>
                              <FormMessage/>
                            </FormItem>
                          )}/>
                      </div>

                      <FormField control={form.control} name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Any questions?</FormLabel>
                            <FormControl>
                              <Textarea placeholder="How can we help you?" className="resize-none min-h-[90px] bg-background" {...field}/>
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}/>

                      <Button type="submit" disabled={isSubmitting}
                        className="w-full h-12 text-base rounded-xl font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
                        style={{ background:"linear-gradient(135deg,#2563EB,#10B981)" }}>
                        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"/>
                        {isSubmitting
                          ? <span className="flex items-center gap-2"><div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"/> Submitting...</span>
                          : <span className="flex items-center gap-2"><Send size={16}/> Submit Enquiry</span>}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        By submitting, you allow our admissions team to contact you.
                      </p>
                    </form>
                  </Form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
