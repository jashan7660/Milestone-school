import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, MonitorPlay, FlaskConical, Languages } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const ICONS = [
  <BookOpen    className="w-8 h-8 text-secondary" />,
  <MonitorPlay className="w-8 h-8 text-secondary" />,
  <FlaskConical className="w-8 h-8 text-secondary" />,
  <Languages   className="w-8 h-8 text-secondary" />,
];

export default function Academics() {
  const { lang } = useLanguage();
  const t = SITE[lang].academics;

  return (
    <section id="academics" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
                {t.label}
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
                {t.heading} <span className="text-gradient">{t.accent}</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-[1.8]">
                {t.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {ICONS[index]}
                  </div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
