import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import principalImg from "@assets/pricipal_sir_1780036894116.png";
import sulochanaSharmaImg from "@assets/managing_director_1780037204818.jpeg";
import facultyPosterImg from "@assets/1_1777975535490.jpg";

const localImages = [
  { image: principalImg,        pos: "object-center",       style: { transform: "scale(1.35)", transformOrigin: "50% 38%" } },
  { image: sulochanaSharmaImg,  pos: "object-center",       style: { transform: "scale(1.15)", transformOrigin: "50% 20%" } },
  { image: facultyPosterImg,    pos: "object-[50%_10%]",    style: {} },
];

export default function Faculty() {
  const { lang } = useLanguage();
  const t = SITE[lang].faculty;

  return (
    <section id="faculty" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            {t.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
            {t.heading}{" "}
            <span className="text-gradient">{t.accent}</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-[1.8]">
            {t.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {t.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-card group h-full">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={localImages[index].image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${localImages[index].pos} transition-transform duration-500 group-hover:scale-105`}
                    style={localImages[index].style}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 text-center relative z-10 bg-card">
                  <h3 className="text-xl font-bold font-serif text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
