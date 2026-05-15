"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  type: z.enum(["general", "order", "media", "booking"]),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: "general" },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background p-8 sm:p-12 rounded-3xl border border-border shadow-xl"
        >
          <h2 className="text-3xl font-serif font-bold mb-2 text-center">Send a Message</h2>
          <p className="text-muted-foreground text-center mb-8">We typically respond within 2–3 business days.</p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center"
              >
                <CheckCircle2 size={64} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                    <input
                      {...register("name")}
                      className="w-full p-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input
                      {...register("email")}
                      className="w-full p-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="Your email"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Inquiry Type</label>
                  <select
                    {...register("type")}
                    className="w-full p-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  >
                    <option value="general">General Question</option>
                    <option value="order">Order Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="booking">Event Booking</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                  <input
                    {...register("subject")}
                    className="w-full p-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Message subject"
                  />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full p-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
