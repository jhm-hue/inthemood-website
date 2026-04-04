"use client";

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

  return (
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

      {/* Nav Links */}
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

    </nav>
  );
}
