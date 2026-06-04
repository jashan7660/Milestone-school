import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import goldGloryImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777616289311.jpg";
import silverGloryImg from "@assets/SaveClip.App_614878340_18086449655035990_3947843287675199799_n_1777616304025.jpg";
import parvImg from "@assets/top_result_1777616348864.jpg";
import boardResultImg from "@assets/image_1777616635036.png";

const achievements = [
  {
    src: boardResultImg,
    alt: "CBSE Class 10 — 100% Outstanding Result 2025-26",
    span: "md:col-span-2",
  },
  {
    src: parvImg,
    alt: "Parv Mittal — 97% CBSE Class X Result",
    span: "",
  },
  {
    src: goldGloryImg,
    alt: "Rahul — Gold Glory, 6th Chandigarh Open Skating Championship",
    span: "",
  },
  {
    src: silverGloryImg,
    alt: "Yash — Silver Glory, 6th Chandigarh Open Skating Championship",
    span: "",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5 uppercase tracking-wider">
            <Trophy size={14} />
            Our Achievements
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
            Pride of The Milestone
          </h2>
          <p className="text-muted-foreground text-lg">
            From championship medals to board exam glory — our students continue to make The Milestone family proud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg group ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-semibold text-sm leading-snug">{item.alt}</p>
              </div>
            </motion.div>
          ))}

          {/* Video achievement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-black"
          >
            <video
              src="/video4.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
