import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

import img1 from "@assets/image_1777545590594.png";
import img2 from "@assets/image_1777545604788.png";
import img3 from "@assets/image_1777545627241.png";
import img4 from "@assets/image_1777545636545.png";
import img5 from "@assets/image_1777545667661.png";
import img6 from "@assets/image_1777545679631.png";
import img7 from "@assets/b2fa7411-e0bc-4e50-9a9e-19e39989b78e_1777545688228.png";
import img8 from "@assets/image_1777545703703.png";
import img9 from "@assets/image_1777545767228.png";
import farewellImg from "@assets/SaveClip.App_614889198_18086113952035990_6052207292470122772_n_1777615680379.jpg";
import goldGloryImg from "@assets/SaveClip.App_616509678_18086449688035990_8536646500599410673_n_1777615684795.jpg";

const VIDEO_SRCS = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

const highlightPhotos = [
  { src: farewellImg, alt: "Farewell Celebration — Turning Pages, Carrying Memories" },
  { src: goldGloryImg, alt: "Gold Glory — 6th Chandigarh Open Skating Championship" },
];

export default function GalleryPage() {
  const { lang } = useLanguage();
  const isHindi = lang === "hi";

  const images = [
    { src: img1, alt: isHindi ? "स्कूल प्रिंसिपल के साथ छात्र कार्यालय में" : "Students with school principal in office" },
    { src: img2, alt: isHindi ? "द ट्रिब्यून विजिट पर ग्रुप फोटो" : "Group photo at The Tribune visit" },
    { src: img3, alt: isHindi ? "माइलस्टोन में सांस्कृतिक उत्सव" : "Cultural celebration at The Milestone" },
    { src: img4, alt: isHindi ? "मंच पर छात्र संगीत प्रदर्शन" : "Student music performance on stage" },
    { src: img5, alt: isHindi ? "सभागार में कक्षा समूह फोटो" : "Class group photograph in auditorium" },
    { src: img6, alt: isHindi ? "वार्षिक दिवस मंच प्रदर्शन" : "Annual day stage performance" },
    { src: img7, alt: isHindi ? "छात्रों और कर्मचारियों के साथ स्कूल सभा" : "School assembly with students and staff" },
    { src: img8, alt: isHindi ? "प्रमाण पत्र के साथ पुरस्कार विजेता" : "Award winners with certificates" },
    { src: img9, alt: isHindi ? "स्कूल प्रवेश पर निवेश समारोह" : "Investiture ceremony at school entrance" },
  ];

  const videoLabels = isHindi
    ? ["स्कूल कार्यक्रम", "कैंपस के पल", "छात्र गतिविधियां"]
    : ["School Event", "Campus Moments", "Student Activities"];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-secondary selection:text-secondary-foreground">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/30 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary/40 blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-6 uppercase tracking-wider">
                {isHindi ? "कैंपस जीवन" : "Campus Life"}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {isHindi ? "माइलस्टोन के पल" : "Moments at The Milestone"}
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {isHindi
                  ? "द माइलस्टोन सी.सेक. स्कूल में हमारे छात्रों, उत्सवों, उपलब्धियों और रोजमर्रा की खुशियों की झलकियां।"
                  : "Glimpses of our students, celebrations, achievements, and everyday joys at The Milestone Sr. Sec. School."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="relative rounded-2xl overflow-hidden group bg-muted aspect-[4/3] shadow-md hover:shadow-2xl transition-shadow duration-500"
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium text-base leading-snug">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* School Highlights */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-5 uppercase tracking-wider">
                {isHindi ? "स्कूल हाइलाइट्स" : "School Highlights"}
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-5 leading-tight">
                {isHindi ? "उत्सव, उपलब्धियां और कैंपस जीवन" : "Celebrations, Achievements & Campus Life"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {isHindi
                  ? "चमकदार विदाई समारोहों से लेकर चैम्पियनशिप स्वर्ण पदकों तक — माइलस्टोन में जीवन यादगार पलों से भरा है।"
                  : "From glittering farewell ceremonies to championship gold medals — life at The Milestone is full of memorable milestones."}
              </p>
            </motion.div>

            {/* Highlight photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {highlightPhotos.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="rounded-2xl overflow-hidden shadow-lg group relative">
                  <img src={item.src} alt={item.alt} className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold text-base leading-snug">{item.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight videos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VIDEO_SRCS.map((src, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="rounded-2xl overflow-hidden shadow-lg bg-black">
                  <video src={src} controls playsInline preload="metadata" className="w-full h-56 object-cover" />
                  <div className="bg-card px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">{videoLabels[i]}</p>
                    <p className="text-xs text-muted-foreground">{isHindi ? "द माइलस्टोन सी.सेक. स्कूल" : "The Milestone Sr. Sec. School"}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <ArrowLeft className="mr-2 h-4 w-4" /> {isHindi ? "होम पर वापस जाएं" : "Back to Home"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
