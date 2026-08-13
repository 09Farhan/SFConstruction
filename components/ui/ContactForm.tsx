"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLocale } from "next-intl";

export function ContactForm() {
  const locale = useLocale();
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.success && (
        <div className="p-4 bg-green-50 text-green-800 border border-green-200 rounded-sm">
          {state.message}
        </div>
      )}

      {state?.error && (
        <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-sm">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="John Doe"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="(555) 123-4567"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full h-12 px-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
            defaultValue=""
          >
            <option value="" disabled>Select a service...</option>
            {services.map(s => (
              <option key={s.id} value={s.id}>
                {locale === "es" ? s.titleEs : s.titleEn}
              </option>
            ))}
            <option value="other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground block">
          Preferred Contact Method
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="contactMethod" value="phone" className="accent-primary w-4 h-4" defaultChecked />
            <span>Phone</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="contactMethod" value="email" className="accent-primary w-4 h-4" />
            <span>Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="contactMethod" value="whatsapp" className="accent-primary w-4 h-4" />
            <span>WhatsApp</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full p-4 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-y"
          placeholder="Tell us about your project, timeline, and goals..."
        ></textarea>
      </div>

      <Button type="submit" size="lg" className="w-full font-bold h-14 text-lg" disabled={isPending}>
        {isPending ? "Sending Request..." : "Request Free Estimate"}
      </Button>
    </form>
  );
}
