import { useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "The transformation in my daughter since joining The Milestone is remarkable. Teachers are incredibly supportive — focused on building confidence, not just academics.",
    author: "Mrs. Anita Verma",
    role: "Parent, Grade 8",
    initial: "A",
  },
  {
    quote: "We wanted a school with strong values and modern infrastructure. The Milestone exceeded our expectations. Smart classrooms have sparked my son's interest in Science.",
    author: "Mr. Rakesh Aggarwal",
    role: "Parent, Grade 11",
    initial: "R",
  },
  {
    quote: "Personalized attention gives me immense peace of mind. The principal and teachers are always approachable, and the environment feels safe, nurturing, and disciplined.",
    author: "Priya Sharma",
    role: "Parent, Grade 5 & 9",
    initial: "P",
  },
  {
    quote: "Switching to The Milestone was the best decision for my boards. The faculty's dedication helped me secure excellent marks in 12th standard CBSE.",
    author: "Aarav Gupta",
    role: "Alumnus, Batch 2023",
    initial: "A",
  },
];

export default function Testimonials() {
  const apiRef = useRef<CarouselApi>();
  const setApi = (v: CarouselApi) => { apiRef.current = v; };
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      apiRef.current?.scrollNext();
    }, 3500);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => { startAutoPlay(); return () => stopAutoPlay(); }, [startAutoPlay, stopAutoPlay]);

  return (
    <section className="py-14 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Compact heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="section-label-white mb-2">Community</div>
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-white leading-tight">
            Voices of Our Community
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {testimonials.map((item, i) => (
                <CarouselItem key={i} className="pl-3 md:basis-1/2">
                  <div className="h-full rounded-2xl p-5 flex flex-col gap-3"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                  >
                    <Quote className="w-7 h-7 text-secondary opacity-80 flex-shrink-0" />
                    <p className="text-sm md:text-base leading-relaxed text-white/90 flex-grow">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 font-bold text-sm text-secondary-foreground">
                        {item.initial}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{item.author}</div>
                        <div className="text-white/60 text-xs">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center gap-3 mt-6">
              <CarouselPrevious
                className="static transform-none bg-white/10 text-white border-white/20 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary w-9 h-9"
                onClick={startAutoPlay}
              />
              <CarouselNext
                className="static transform-none bg-white/10 text-white border-white/20 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary w-9 h-9"
                onClick={startAutoPlay}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
