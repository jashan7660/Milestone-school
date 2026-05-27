import { motion } from "framer-motion";
import { Microscope, Monitor, BookOpen, Dumbbell, Palette, Bus } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Science Laboratories",
      description: "Fully equipped Biology, Chemistry, and Physics labs for hands-on practical learning.",
      icon: <Microscope className="w-6 h-6" />,
      image: "/science-lab.png"
    },
    {
      title: "Digital Library",
      description: "Extensive collection of 4,000+ books with comfortable reading zones and digital resources.",
      icon: <BookOpen className="w-6 h-6" />,
      image: "/library.png"
    },
    {
      title: "Sports Complex",
      description: "Spacious outdoor playgrounds and indoor sports facilities for physical development.",
      icon: <Dumbbell className="w-6 h-6" />,
      image: "/sports.png"
    },
    {
      title: "Creative Arts",
      description: "Dedicated activity rooms for Dance, Music, Art, and various creative clubs.",
      icon: <Palette className="w-6 h-6" />,
      image: "/art-room.png"
    },
    {
      title: "Computer Labs",
      description: "Modern computer labs with high-speed internet to build essential digital skills.",
      icon: <Monitor className="w-6 h-6" />,
      image: "/smart-classroom.png"
    },
    {
      title: "Transport Network",
      description: "Safe and extensive school bus network covering Kaithal and surrounding areas.",
      icon: <Bus className="w-6 h-6" />,
      image: "/school-bus.png"
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider">
            Infrastructure
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            World-class facilities for holistic development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-primary shadow-sm">
                  {facility.icon}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground group-hover:text-primary transition-colors">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}