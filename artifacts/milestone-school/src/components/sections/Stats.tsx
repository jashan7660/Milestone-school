import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-medium tracking-wide uppercase text-sm">{label}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute inset-0 bg-[url('/school-bus.png')] opacity-10 bg-cover bg-center mix-blend-overlay z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Counter end={15} label="Years of Excellence" suffix="+" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Counter end={1200} label="Happy Students" suffix="+" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Counter end={80} label="Qualified Teachers" suffix="+" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Counter end={100} label="Pass Percentage" suffix="%" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}