import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the admission process at The Milestone?",
      answer: "The admission process begins with filling out the inquiry form online or at the school office. This is followed by a campus visit, a brief interaction with the Principal/Counselor, and submission of previous academic records. Admissions are granted based on seat availability."
    },
    {
      question: "Which curriculum does the school follow?",
      answer: "We are proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We strictly adhere to the CBSE curriculum from Nursery to Class 12, ensuring national-level standardized education."
    },
    {
      question: "What are the school timings?",
      answer: "The school operates from Monday to Saturday. Timings are 7:30 AM to 2:30 PM. Saturdays might have modified timings or specific extracurricular focus depending on the grade."
    },
    {
      question: "Do you provide transport facilities?",
      answer: "Yes, we have a fleet of safe, well-maintained yellow school buses covering Kaithal city and neighboring villages. All buses are equipped with safety features and are accompanied by an attendant."
    },
    {
      question: "What subjects are offered in Classes 11 and 12?",
      answer: "We offer four main streams for Senior Secondary students: Medical (PCB), Non-Medical (PCM), Commerce, and Humanities (Arts), along with various elective subjects like Physical Education, Computer Science, and Fine Arts."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We believe in holistic development. Students can participate in various indoor and outdoor sports, dance, music, art and craft, debating, and specialized club activities that run throughout the academic year."
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="section-label">Common Questions</div>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-foreground mb-4 leading-[1.1] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-[1.8]">
              Find answers to common queries about admissions, curriculum, and campus life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 px-2">
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-4 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}