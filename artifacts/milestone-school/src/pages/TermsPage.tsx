import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using the website of The Milestone Sr. Sec. School ("the School", "we", "us", or "our") located at Khurana Road, Kaithal, Haryana, you accept and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please discontinue use of this website immediately. These terms apply to all visitors, students, parents, and others who access or use the website.`,
  },
  {
    title: "2. Use of Website",
    body: `This website is provided for informational purposes about The Milestone Sr. Sec. School — its programmes, admissions, faculty, facilities, events, and other school-related activities. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse this website by knowingly introducing viruses or other malicious material, attempting unauthorised access to any part of the website, or using automated tools to scrape or harvest content without permission.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All content published on this website — including text, photographs, videos, graphics, logos, and designs — is the intellectual property of The Milestone Sr. Sec. School unless otherwise stated. This content is protected under applicable Indian copyright and intellectual property laws. You may not reproduce, distribute, republish, or commercially exploit any content from this website without prior written permission from the School. Personal, non-commercial use with appropriate attribution is permitted.`,
  },
  {
    title: "4. Accuracy of Information",
    body: `We endeavour to keep the information on this website accurate and up to date. However, the School does not warrant or guarantee the completeness, accuracy, or timeliness of any information presented. Academic schedules, fee structures, event dates, and other operational details are subject to change without notice. For the most current information, please contact the School directly at themilestoneKtl@gmail.com or call +91 98125-74766.`,
  },
  {
    title: "5. Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, The Milestone Sr. Sec. School shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or its content. This includes but is not limited to loss of data, loss of revenue, or any other loss arising from reliance on information published on this website. Your use of the website is entirely at your own risk.`,
  },
  {
    title: "6. Third-Party Links",
    body: `This website may contain links to external websites operated by third parties (such as government portals, educational boards, or social media platforms). These links are provided for your convenience only. The Milestone Sr. Sec. School does not endorse, control, or take responsibility for the content, privacy practices, or accuracy of any third-party website. We encourage you to read the terms and privacy policies of any external site you visit.`,
  },
  {
    title: "7. Privacy",
    body: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms & Conditions by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    title: "8. Changes to Terms",
    body: `The Milestone Sr. Sec. School reserves the right to modify these Terms & Conditions at any time without prior notice. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically to stay informed of any updates.`,
  },
  {
    title: "9. Governing Law",
    body: `These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Kaithal, Haryana, India.`,
  },
  {
    title: "10. Contact Information",
    body: `If you have any questions or concerns regarding these Terms & Conditions, please contact us:\n\nThe Milestone Sr. Sec. School\nOpp. Pawan Vatika, Khurana Road, Kaithal, Haryana 136027\nEmail: themilestoneKtl@gmail.com\nPhone: +91 98125-74766`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>
        {[
          { w:420, h:420, x:"-8%",  y:"-30%", c:"#2563EB", dur:12 },
          { w:320, h:320, x:"72%",  y:"40%",  c:"#10B981", dur:15 },
        ].map((o,i) => (
          <motion.div key={i} className="absolute rounded-full pointer-events-none"
            style={{ width:o.w, height:o.h, left:o.x, top:o.y, background:`radial-gradient(circle,${o.c}22,transparent 70%)` }}
            animate={{ scale:[1,1.2,1], opacity:[0.35,0.7,0.35] }}
            transition={{ repeat:Infinity, duration:o.dur, ease:"easeInOut" }}/>
        ))}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize:"44px 44px" }}/>
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.14)" }}>
            <FileText size={11}/> Legal
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-4">
            Terms &amp;{" "}
            <span style={{ background:"linear-gradient(90deg,#60a5fa,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Conditions
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/60 text-base max-w-xl mx-auto">
            Last updated: June 2025 · Please read these terms carefully before using our website.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 20C1200 60 960 5 720 20C480 35 240 5 0 20Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 md:px-6 py-20 max-w-3xl">
        <div className="flex flex-col gap-10">
          {sections.map(({ title, body }, i) => (
            <motion.div key={title} {...fadeUp(i * 0.05)}>
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">{title}</h2>
              <p className="text-muted-foreground leading-[1.85] text-base whitespace-pre-line">{body}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
