import { motion } from "framer-motion";
import farewellImg from "@assets/SaveClip.App_614889198_18086113952035990_6052207292470122772_n_1777615680379.jpg";
import goldSkatingImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777615684795.jpg";
import dramaImg from "@assets/2_1777975525377.jpg";
import stepFutureImg from "@assets/3_1777975544009.jpg";
import donationImg from "@assets/4_1777975552878.jpg";
import nssImg from "@assets/9_1777975562152.jpg";

const videos = [
  { src: "/video1.mp4", label: "School Event" },
  { src: "/video2.mp4", label: "Campus Moments" },
  { src: "/video3.mp4", label: "Student Activities" },
];

const highlights = [
  { src: farewellImg,   alt: "Farewell Celebration — Turning Pages, Carrying Memories",          span: "" },
  { src: goldSkatingImg,alt: "Gold Glory — 6th Chandigarh Open Skating Championship",            span: "" },
  { src: dramaImg,      alt: "Drama Highlights — Play Enactment & Job Interview Activity",       span: "" },
  { src: nssImg,        alt: "NSS — Together We Can Make a Difference",                          span: "" },
  { src: donationImg,   alt: "Donation Drive — Spreading Joy & Kindness",                        span: "" },
  { src: stepFutureImg, alt: "Not Just an Activity — A Step Towards the Future",                 span: "" },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="section-label-green">School Highlights</div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
            Celebrations, Achievements &{" "}
            <span className="text-gradient">Campus Life</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-[1.8]">
            From glittering farewell ceremonies to championship gold medals — life at The Milestone is full of memorable milestones.
          </p>
        </motion.div>

        {/* Photo highlights — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className={`rounded-2xl overflow-hidden shadow-lg group relative ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 md:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-semibold text-sm leading-snug">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-black"
            >
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-56 object-cover"
              />
              <div className="bg-card px-4 py-3">
                <p className="text-sm font-semibold text-foreground">{video.label}</p>
                <p className="text-xs text-muted-foreground">The Milestone Sr. Sec. School</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
