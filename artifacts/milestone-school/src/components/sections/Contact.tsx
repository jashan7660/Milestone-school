import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactCards = [
  {
    icon: MapPin,
    color: "bg-primary/10 text-primary",
    title: "Campus Location",
    lines: ["Opp. Pawan Vatika, Khurana Road,", "Kaithal, Haryana 136027, India"],
  },
  {
    icon: Phone,
    color: "bg-secondary/10 text-secondary",
    title: "Phone Numbers",
    lines: ["+91 98125-74766", "+91 93065-27660"],
  },
  {
    icon: Mail,
    color: "bg-primary/10 text-primary",
    title: "Email",
    lines: ["themilestoneKtl@gmail.com"],
  },
  {
    icon: Clock,
    color: "bg-secondary/10 text-secondary",
    title: "Working Hours",
    lines: ["Monday to Saturday", "7:30 AM – 2:30 PM"],
  },
];

export default function Contact() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-4 leading-[1.1] tracking-tight">
            Visit us or <span className="text-gradient">reach out</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-[1.8]">
            We welcome you to visit our campus, meet our staff, and discover the Milestone difference firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactCards.map(({ icon: Icon, color, title, lines }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="border-none shadow-sm bg-muted/30 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className={`${color} p-3 rounded-full shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base mb-1">{title}</h4>
                      {lines.map((line, j) => (
                        <p key={j} className="text-muted-foreground text-sm leading-[1.7]">{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <a
              href="https://maps.app.goo.gl/kKD3gv1Gs7t2FbNE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors mt-2"
            >
              <ExternalLink size={15} />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-muted"
            style={{ minHeight: "440px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Opp+Pawan+Vatika+Khurana+Road+Kaithal+Haryana+136027+India&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "440px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Milestone Sr. Sec. School — Kaithal Location"
              className="w-full h-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
