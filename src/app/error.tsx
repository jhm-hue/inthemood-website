"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-8">
      <div className="max-w-xl text-center space-y-8">
        {/* Decorative line */}
        <div className="w-px h-16 bg-white/20 mx-auto" />

        <h1 className="font-heading font-bold text-4xl md:text-6xl tracking-[0.15em] uppercase text-white">
          Something
          <br />
          Went Wrong
        </h1>

        <p className="font-sans font-light text-base md:text-lg text-[var(--on-surface)] leading-relaxed max-w-md mx-auto">
          An unexpected error occurred. The scene could not be loaded.
        </p>

        <button
          onClick={reset}
          className="rounded-none bg-gradient-to-br from-primary to-[var(--primary-container)] text-[var(--on-primary)] px-8 py-3 font-sans text-sm uppercase tracking-widest hover:from-[var(--primary-container)] hover:to-[var(--primary-container)] transition-all"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
