import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
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
    title: "1. Introduction",
    body: `The Milestone Sr. Sec. School ("the School", "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you disagree with its terms, please discontinue use of the website.`,
  },
  {
    title: "2. Information We Collect",
    body: `We may collect information from you in the following ways:\n\n• Personal Identification Information: Name, email address, phone number, and postal address when you voluntarily submit an enquiry, admission form, or contact form on our website.\n\n• Non-Personal Information: Browser type, device type, operating system, IP address, and pages visited — collected automatically through standard web server logs and analytics tools to help us improve the website experience.\n\n• Cookies and Tracking Data: We may use cookies and similar tracking technologies to enhance your browsing experience (see Section 5 below).`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect for the following purposes:\n\n• To respond to your enquiries, admission requests, or feedback.\n• To send you important school updates, event information, or newsletters (only where you have opted in).\n• To improve our website content, structure, and user experience.\n• To comply with applicable legal obligations.\n• To process admission-related documentation and communications.\n\nWe will never sell, trade, or rent your personal information to third parties for commercial purposes.`,
  },
  {
    title: "4. How We Share Your Information",
    body: `We do not share your personal data with third parties except in the following limited circumstances:\n\n• With trusted service providers who assist us in operating the website or conducting school activities, under strict confidentiality agreements.\n• When required by law, court order, or governmental authority.\n• To protect the rights, property, or safety of the School, its students, staff, or the public.`,
  },
  {
    title: "5. Cookies",
    body: `Our website may use cookies — small text files stored on your device — to personalise your experience and analyse website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the website. We do not use cookies to collect sensitive personal information.`,
  },
  {
    title: "6. Third-Party Links",
    body: `Our website may contain links to external websites, including social media platforms, government portals, and educational bodies. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any website you visit outside of our domain.`,
  },
  {
    title: "7. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.`,
  },
  {
    title: "8. Children's Privacy",
    body: `This website is operated by a school and may be accessed by students who are minors. We do not knowingly collect personal information directly from children under the age of 13 without verifiable parental consent. Information submitted through admission or enquiry forms on behalf of a minor is understood to be provided by a parent or legal guardian.`,
  },
  {
    title: "9. Your Rights",
    body: `You have the right to:\n\n• Access the personal information we hold about you.\n• Request correction of inaccurate or incomplete data.\n• Request deletion of your personal information, subject to legal obligations.\n• Withdraw consent for any communication at any time.\n\nTo exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised date. Your continued use of the website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "11. Contact Information",
    body: `For any questions, concerns, or requests related to this Privacy Policy, please contact us:\n\nThe Milestone Sr. Sec. School\nOpp. Pawan Vatika, Khurana Road, Kaithal, Haryana 136027\nEmail: themilestoneKtl@gmail.com\nPhone: +91 98125-74766`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 flex items-center"
        style={{ background: "linear-gradient(145deg, #0a1628 0%, #0f2d50 40%, #0a2a1a 75%, #12103a 100%)" }}>
        {[
          { w:420, h:420, x:"-8%",  y:"-30%", c:"#10B981", dur:12 },
          { w:320, h:320, x:"72%",  y:"40%",  c:"#2563EB", dur:15 },
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
            <ShieldCheck size={11}/> Legal
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-4">
            Privacy{" "}
            <span style={{ background:"linear-gradient(90deg,#34d399,#60a5fa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Policy
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/60 text-base max-w-xl mx-auto">
            Last updated: June 2025 · Your privacy matters to us — here's how we protect it.
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
