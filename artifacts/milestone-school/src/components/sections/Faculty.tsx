import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import principalImg from "@assets/atul_sharama_1777615661839.jpg";
import facultyPosterImg from "@assets/1_1777975535490.jpg";

export default function Faculty() {
  const team = [
    {
      name: "Mr. Atul Sharma",
      role: "Principal",
      image: principalImg,
      bio: "A dedicated leader with years of experience in shaping young minds. Committed to nurturing a culture of academic excellence, values, and holistic development at The Milestone.",
      pos: "object-top",
    },
    {
      name: "Ms. Poonam Vashith",
      role: "Academic Head",
      image: facultyPosterImg,
      bio: "A passionate educator and academic leader who drives curriculum excellence and inspires students to express, perform, and lead with confidence.",
      pos: "object-[20%_10%]",
    },
    {
      name: "Ms. Hina Pahwa",
      role: "English Facilitator",
      image: facultyPosterImg,
      bio: "A dedicated English facilitator committed to building strong communication, vocabulary, and literary skills in every student through interactive and engaging methods.",
      pos: "object-[50%_10%]",
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
            Our Mentors
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
            Guiding lights of{" "}
            <span className="text-gradient">The Milestone</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-[1.8]">
            Our experienced educators are more than just teachers — they are mentors, facilitators, and role models deeply committed to every student's success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {team.map((member, index) => (
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
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.pos} transition-transform duration-500 group-hover:scale-105`}
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
