import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "HJEM" },
    { path: "/mood", label: "MOOD" },
    { path: "/contact", label: "KONTAKT" },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-noto flex flex-col">
      {/* Navigation */}
      <nav className="py-4 text-center">
        {/* Navigation - Always Visible */}
        <div className="flex justify-center">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-white no-underline text-sm font-normal tracking-wide transition-all px-6 ${
                isActivePath(path) ? "border-b border-white pb-0.5" : "pb-0.5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content - Centered */}
      <main className="flex-1 flex items-center justify-center text-center px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
