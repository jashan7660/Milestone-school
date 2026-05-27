import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

export default function WhyChooseUs() {
  const { lang } = useLanguage();
  const t = SITE[lang].whyUs;

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-foreground/5 skew-x-12 translate-x-32 -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold mb-5 leading-[1.1] tracking-tight">
              {t.heading}{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient-hero">{t.accent}</span>
            </h2>

            <p className="text-primary-foreground/78 text-lg mb-10 leading-[1.85] font-light">
              {t.body}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
              {t.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full px-8 shadow-lg"
              onClick={() => document.querySelector("#admissions")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.cta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="/hero.png" alt="Happy students" className="rounded-2xl w-full h-48 object-cover shadow-lg border-4 border-primary-foreground/20" />
                <img src="/art-room.png" alt="Art room" className="rounded-2xl w-full h-64 object-cover shadow-lg border-4 border-primary-foreground/20" />
              </div>
              <div className="space-y-4">
                <img src="/sports.png" alt="Sports" className="rounded-2xl w-full h-64 object-cover shadow-lg border-4 border-primary-foreground/20" />
                <img src="/library.png" alt="Library" className="rounded-2xl w-full h-48 object-cover shadow-lg border-4 border-primary-foreground/20" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl border-4 border-secondary">
              <span className="font-bold text-2xl">100%</span>
              <span className="text-xs text-center font-bold uppercase mt-1">{t.badge2}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
