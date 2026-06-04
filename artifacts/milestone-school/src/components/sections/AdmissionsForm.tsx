import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/i18n/translations";

const formSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  studentName: z.string().min(2, "Student name is required"),
  classApplyingFor: z.string().min(1, "Please select a class"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  message: z.string().optional(),
});

const CLASSES = ["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11 (Science)", "Class 11 (Commerce)", "Class 11 (Arts)", "Class 12 (Science)", "Class 12 (Commerce)", "Class 12 (Arts)"];

export default function AdmissionsForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();
  const t = SITE[lang].admissions;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { parentName: "", studentName: "", classApplyingFor: "", phone: "", email: "", message: "" },
  });

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: t.toastTitle, description: t.toastDesc, variant: "default" });
      form.reset();
    }, 1500);
  };

  return (
    <section id="admissions" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label-green">{t.label}</div>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-foreground mb-5 leading-[1.1] tracking-tight">
              {t.heading} <span className="text-gradient">{t.accent}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-[1.85] font-light">
              {t.body}
            </p>

            <div className="bg-card p-8 rounded-3xl shadow-sm border border-border">
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">{t.processTitle}</h3>
              <ol className="space-y-4 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-muted">
                {t.steps.map((step, i) => (
                  <li key={i} className="relative pl-10">
                    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${i === t.steps.length - 1 ? "bg-secondary" : "bg-primary"} text-white flex items-center justify-center text-xs font-bold`}>{i + 1}</div>
                    <strong className="block text-foreground mb-1">{step.title}</strong>
                    <span className="text-sm text-muted-foreground">{step.desc}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">{t.formTitle}</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.parentName}</FormLabel>
                        <FormControl><Input placeholder={t.parentPlaceholder} {...field} className="bg-background" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.studentName}</FormLabel>
                        <FormControl><Input placeholder={t.studentPlaceholder} {...field} className="bg-background" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField control={form.control} name="classApplyingFor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.classLabel}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder={t.classPlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CLASSES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.phone}</FormLabel>
                        <FormControl><Input placeholder={t.phonePlaceholder} {...field} className="bg-background" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.email}</FormLabel>
                        <FormControl><Input placeholder={t.emailPlaceholder} {...field} className="bg-background" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField control={form.control} name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.message}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.msgPlaceholder} className="resize-none min-h-[100px] bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="group w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-4 relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      {t.submitting}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      {t.submit} <Send className="w-4 h-4" />
                    </div>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">{t.disclaimer}</p>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
