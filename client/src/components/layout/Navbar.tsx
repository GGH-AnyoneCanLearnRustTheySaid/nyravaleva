import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT & BOOKING", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 md:px-12 md:py-10 flex flex-col items-center md:items-start md:flex-row justify-between pointer-events-none">
      {/* Left Nav */}
      <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 md:gap-8 pointer-events-auto order-2 md:order-1 mt-6 md:mt-0 max-w-[90%] md:max-w-none">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <a
              className={cn(
                "text-lg md:text-xl font-sans tracking-[0.2em] uppercase transition-colors duration-300 hover:text-white",
                location === item.href ? "text-white" : "text-neutral-500"
              )}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </div>

      {/* Center Logo - Absolute centered on desktop, relative on mobile */}
      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 pointer-events-auto order-1 md:order-2">
        <Link href="/">
          <a className="text-6xl md:text-7xl font-display uppercase tracking-[0.15em] text-white hover:opacity-80 transition-opacity whitespace-nowrap">
            NYRA VALE
          </a>
        </Link>
      </div>
    </nav>
  );
}
