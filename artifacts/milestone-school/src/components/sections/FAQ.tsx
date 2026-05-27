import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

export default function FAQ() {
  const { lang } = useLanguage();
  const t = SITE[lang].faq;

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="section-label">{t.badge}</div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mb-4 leading-[1.1] tracking-tight">
              {t.heading}
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-[1.8]">{t.body}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border"
          >
            <Accordion type="single" collapsible className="w-full">
              {t.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 px-2">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-4 hover:no-underline hover:text-primary transition-colors">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
