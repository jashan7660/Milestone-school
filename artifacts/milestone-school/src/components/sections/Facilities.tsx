import { motion, AnimatePresence } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const IMAGES = [null, "/library.png", null, "/art-room.png", "/smart-classroom.png", "/school-bus.png"];
const ICONS  = [Microscope, BookOpen, Dumbbell, Palette, Monitor, Bus];

export default function Facilities() {
  const { lang } = useLanguage();
  const t = SITE[lang].facilities;

  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider">
                {t.label}
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                {t.heading}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((facility, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-60 overflow-hidden">
                  {index === 0 ? (
                    <video
                      src="/science-lab-video3.mp4"
                      autoPlay loop muted playsInline disablePictureInPicture
                      className="w-full h-full object-cover"
                      style={{ pointerEvents: "none" }}
                    />
                  ) : index === 2 ? (
                    <video
                      src="/sports-video.mp4"
                      autoPlay loop muted playsInline disablePictureInPicture
                      className="w-full h-full object-cover"
                      style={{ pointerEvents: "none" }}
                    />
                  ) : (
                    <img
                      src={IMAGES[index]!}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-primary shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-serif mb-3 text-foreground group-hover:text-primary transition-colors">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{facility.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
