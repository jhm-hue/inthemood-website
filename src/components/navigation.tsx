"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/film", label: "Films" },
  { path: "/news", label: "News" },
  { path: "/tech", label: "Tech" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 md:py-8 bg-[#131313]/40 backdrop-blur-xl transition-all duration-300">
        {/* Logo — hidden on home page, animated in on other pages */}
        <Link
          href="/"
          className={`text-lg md:text-2xl font-bold tracking-[0.25em] text-white font-heading transition-all duration-700 ease-out ${
            isHome
              ? "opacity-0 -translate-x-4 pointer-events-none"
              : "opacity-100 translate-x-0 hover:opacity-80"
          }`}
          tabIndex={isHome ? -1 : undefined}
        >
          INTHEMOOD PICTURES
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map(({ path, label }) => {
            const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
            return (
              <Link
                key={path}
                href={path}
                className={
                  isActive
                    ? "text-white border-b border-white pb-1 font-bold font-heading uppercase tracking-widest text-sm transition-all duration-300"
                    : "text-white/60 font-medium font-heading uppercase tracking-widest text-sm hover:text-white transition-colors duration-500"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden relative w-6 h-4 flex flex-col justify-between"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-full h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#131313] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map(({ path, label }, i) => {
            const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
            return (
              <Link
                key={path}
                href={path}
                onClick={() => setMobileOpen(false)}
                className={`font-heading uppercase tracking-[0.2em] text-2xl transition-all duration-500 ${
                  isActive ? "text-white font-bold" : "text-white/50 font-medium hover:text-white"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
