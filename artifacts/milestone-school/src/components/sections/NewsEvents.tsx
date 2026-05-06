import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsEvents() {
  const events = [
    {
      date: "Mar 15, 2024",
      month: "Mar",
      day: "15",
      title: "Admissions Open for 2026-2027",
      description: "Registration for Nursery to Class 11 has begun. Visit the school office between 9 AM - 2 PM."
    },
    {
      date: "Apr 10, 2024",
      month: "Apr",
      day: "10",
      title: "Annual Science & Tech Exhibition",
      description: "Students from classes 6 to 12 will showcase their innovative working models in the main auditorium."
    },
    {
      date: "Apr 22, 2024",
      month: "Apr",
      day: "22",
      title: "Parent-Teacher Meeting",
      description: "First PTM of the academic session to discuss the curriculum roadmap and student goals."
    },
    {
      date: "May 05, 2024",
      month: "May",
      day: "05",
      title: "Inter-School Sports Meet",
      description: "The Milestone will be hosting the district level basketball and athletics tournament."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
              Happenings
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              News & Announcements
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group">
            View All Updates <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border shadow-sm hover:shadow-md transition-shadow group flex overflow-hidden">
                <div className="bg-primary/5 border-r border-border p-6 flex flex-col items-center justify-center min-w-[100px] text-center">
                  <span className="text-secondary font-bold text-sm uppercase tracking-wider">{event.month}</span>
                  <span className="text-3xl font-serif font-bold text-primary">{event.day}</span>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}