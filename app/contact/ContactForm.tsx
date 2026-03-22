"use client";

import { useState, type FormEvent } from "react";
import { contactConcerns } from "@/lib/data";
import { Send } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  concern: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    concern: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // Placeholder for future backend integration (API route / Supabase / email service)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-text-main mb-3">
          Message Sent!
        </h3>
        <p className="text-text-muted">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-main mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="e.g. Anjali Sharma"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition-shadow placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-main mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition-shadow placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text-main mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 99999 99999"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition-shadow placeholder-gray-400"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="concern"
          className="block text-sm font-medium text-text-main mb-2"
        >
          What brings you here?
        </label>
        <select
          id="concern"
          name="concern"
          value={formData.concern}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
        >
          <option value="" disabled>
            Select a topic...
          </option>
          {contactConcerns.map((concern) => (
            <option key={concern.value} value={concern.value}>
              {concern.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-main mb-2"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us a little bit about what you are going through..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition-shadow placeholder-gray-400 resize-none"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full flex justify-center items-center gap-2 py-3.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          <span>Send Message</span>
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}
