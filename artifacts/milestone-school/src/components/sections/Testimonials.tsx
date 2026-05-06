import { useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const [api, setApi] = [useRef<CarouselApi>(), (v: CarouselApi) => { api.current = v; }] as const;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (api.current) api.current.scrollNext();
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const testimonials = [
    {
      quote: "The transformation I have seen in my daughter since she joined The Milestone is remarkable. The teachers are incredibly supportive and the focus isn't just on academics, but on making her a confident individual.",
      author: "Mrs. Anita Verma",
      role: "Parent of Grade 8 student"
    },
    {
      quote: "As parents, we were looking for a school with strong values and modern infrastructure in Kaithal. The Milestone exceeded our expectations. The smart classrooms and labs have really sparked my son's interest in Science.",
      author: "Mr. Rakesh Aggarwal",
      role: "Parent of Grade 11 student"
    },
    {
      quote: "The personalized attention my children receive here gives me immense peace of mind. The principal and teachers are always approachable, and the school environment feels safe, nurturing, and disciplined.",
      author: "Priya Sharma",
      role: "Parent of Grade 5 & Grade 9 students"
    },
    {
      quote: "Switching to The Milestone was the best decision for my board exams. The faculty's dedication and the well-structured curriculum helped me secure excellent marks in my 12th standard CBSE boards.",
      author: "Aarav Gupta",
      role: "Alumnus, Batch 2023"
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="section-label-white">What people say</div>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
            Voices of our community
          </h2>
          <p className="text-primary-foreground/75 text-lg font-light leading-[1.8]">
            Don't just take our word for it. Hear from the parents and students who make The Milestone a special place to learn and grow.
          </p>
        </motion.div>

        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 text-white">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="w-10 h-10 text-secondary mb-6 opacity-80" />
                        <p className="text-lg leading-relaxed flex-grow font-medium mb-8">
                          "{item.quote}"
                        </p>
                        <div>
                          <div className="font-bold text-white text-lg">{item.author}</div>
                          <div className="text-white/70 text-sm">{item.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious
                className="static transform-none bg-white/10 text-white border-white/20 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                onClick={startAutoPlay}
              />
              <CarouselNext
                className="static transform-none bg-white/10 text-white border-white/20 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                onClick={startAutoPlay}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
