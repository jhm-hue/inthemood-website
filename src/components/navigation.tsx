"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/film", label: "FILM" },
  { path: "/tech", label: "TECH" },
  { path: "/about", label: "ABOUT" },
  { path: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="py-4 text-center">
      <div className="flex justify-center">
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={`text-white no-underline text-sm font-normal tracking-wide transition-all px-6 ${
              pathname === path ? "border-b border-white pb-0.5" : "pb-0.5"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
