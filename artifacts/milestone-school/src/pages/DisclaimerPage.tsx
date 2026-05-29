import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
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
    title: "1. General Information",
    body: `The information provided on this website by The Milestone Sr. Sec. School ("the School", "we", "us", or "our") is for general informational purposes only. While we make every effort to keep the content accurate, relevant, and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related content contained on the website.`,
  },
  {
    title: "2. No Professional Advice",
    body: `The content published on this website, including information about academic programmes, admission procedures, fee structures, results, and co-curricular activities, does not constitute professional, legal, financial, or medical advice. It is intended for general awareness only. For specific advice relevant to your circumstances, please contact the School directly or consult a qualified professional.`,
  },
  {
    title: "3. Academic and Result Information",
    body: `Results, achievements, rankings, and other academic statistics mentioned on this website reflect historical performance and are shared for informational purposes. They are not a guarantee of future outcomes. Individual student performance may vary based on a wide range of factors. The School does not make any warranties regarding specific academic results for prospective students.`,
  },
  {
    title: "4. External Links Disclaimer",
    body: `This website may contain links to external websites operated by third parties — such as the CBSE Board, government education portals, sports federations, or affiliated institutions. These links are provided for the convenience of visitors and do not imply any endorsement, sponsorship, or affiliation with those external sites by The Milestone Sr. Sec. School. We have no control over the nature, content, or availability of those sites and take no responsibility for them.`,
  },
  {
    title: "5. Errors and Omissions",
    body: `Every effort is made to present accurate information on this website. However, errors and omissions may occur. Information including but not limited to dates, fees, timetables, contact details, and programme specifics is subject to change without notice. The School shall not be held liable for any errors or omissions in the published content. We encourage visitors to verify critical information by contacting the School directly.`,
  },
  {
    title: "6. Images and Media",
    body: `Photographs, videos, and other media displayed on this website may include images of students, staff, and campus facilities. All such media is used with appropriate permissions and is intended to represent the life and environment of The Milestone Sr. Sec. School. Images are not to be reproduced, downloaded, or used without the School's written permission.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, The Milestone Sr. Sec. School shall not be liable for any loss or damage — including without limitation, indirect or consequential loss or damage — arising from the use of, or reliance on, the information contained on this website. This includes any action taken or not taken based on such information.`,
  },
  {
    title: "8. Changes to This Disclaimer",
    body: `We reserve the right to update or modify this Disclaimer at any time without prior notice. Any changes will be posted on this page with a revised effective date. Continued use of the website following any changes constitutes your acceptance of the updated Disclaimer.`,
  },
  {
    title: "9. Contact",
    body: `If you have any questions about this Disclaimer or require clarification on any content published on our website, please reach out to us:\n\nThe Milestone Sr. Sec. School\nOpp. Pawan Vatika, Khurana Road, Kaithal, Haryana 136027\nEmail: themilestoneKtl@gmail.com\nPhone: +91 98125-74766`,
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>
        {[
          { w:420, h:420, x:"-8%",  y:"-30%", c:"#f59e0b", dur:12 },
          { w:320, h:320, x:"72%",  y:"40%",  c:"#8B5CF6", dur:15 },
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
            <AlertCircle size={11}/> Legal
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-4">
            <span style={{ background:"linear-gradient(90deg,#fbbf24,#f472b6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Disclaimer
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/60 text-base max-w-xl mx-auto">
            Last updated: June 2025 · Important information about the use of this website.
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
