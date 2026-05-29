import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";
import principalImg from "@assets/pricipal_sir_1780036894116.png";
import sulochanaSharmaImg from "@assets/managing_director_1780037204818.jpeg";
import vicePrincipalImg from "@assets/viceprincipal_1780037357684.png";

const localImages = [
  { image: principalImg,       position: "center center", fit: "contain" as const, bg: "#f0f4f8" },
  { image: sulochanaSharmaImg, position: "center 6%",     fit: "cover"   as const, bg: "transparent" },
  { image: vicePrincipalImg,   position: "center 5%",     fit: "cover"   as const, bg: "transparent" },
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
              className="h-full"
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-card h-full flex flex-col">
                <div
                  className="overflow-hidden rounded-t-xl flex-shrink-0"
                  style={{ height: "400px", background: localImages[index].bg }}
                >
                  <img
                    src={localImages[index].image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: localImages[index].fit,
                      objectPosition: localImages[index].position,
                      display: "block",
                      borderRadius: "12px 12px 0 0",
                    }}
                  />
                </div>
                <CardContent className="p-6 text-center bg-card flex-1 flex flex-col justify-start">
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
