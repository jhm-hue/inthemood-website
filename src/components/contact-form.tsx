"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/features/contact/actions";

const initialState: ContactFormState = { success: false, error: null };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h3 className="font-heading font-bold text-2xl tracking-[0.1em] uppercase text-white mb-4">
          Message Sent
        </h3>
        <p className="font-sans font-light italic text-white/60">
          Thank you for reaching out. We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-10" action={formAction}>
      {state.error && (
        <p className="font-sans text-sm text-red-400">{state.error}</p>
      )}
      <div className="relative group">
        <label className="block font-heading font-bold uppercase tracking-[0.15em] text-[10px] text-white/70 group-focus-within:text-white transition-colors mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-white focus:ring-0 text-white font-sans font-light italic px-0 py-3 transition-colors placeholder:text-white/20"
        />
      </div>
      <div className="relative group">
        <label className="block font-heading font-bold uppercase tracking-[0.15em] text-[10px] text-white/70 group-focus-within:text-white transition-colors mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="email@domain.com"
          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-white focus:ring-0 text-white font-sans font-light italic px-0 py-3 transition-colors placeholder:text-white/20"
        />
      </div>
      <div className="relative group">
        <label className="block font-heading font-bold uppercase tracking-[0.15em] text-[10px] text-white/70 group-focus-within:text-white transition-colors mb-2">
          Inquiry
        </label>
        <textarea
          name="message"
          required
          placeholder="Briefly describe your project or reason for contact"
          rows={3}
          className="w-full bg-transparent border-0 border-b border-white/10 focus:border-white focus:ring-0 text-white font-sans font-light italic px-0 py-3 transition-colors resize-none placeholder:text-white/20"
        />
      </div>
      <div className="pt-6">
        <button
          type="submit"
          disabled={isPending}
          className="group flex items-center gap-4 bg-white text-black font-heading font-bold uppercase tracking-[0.2em] text-xs px-12 py-5 hover:bg-[#d4d4d4] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Send Message"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </form>
  );
}
