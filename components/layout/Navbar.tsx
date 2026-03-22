"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Brain } from "lucide-react";
import Button from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="section-container">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
            <span className="font-display text-lg font-bold tracking-tight text-text-main sm:text-2xl">
              <span className="sm:hidden">{siteConfig.shortName}</span>
              <span className="hidden sm:inline">{siteConfig.name}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors py-1",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-text-muted hover:text-primary"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/booking">
              <Button size="md" className="hidden sm:inline-flex">
                Book Session
              </Button>
            </Link>
            <button
              className="md:hidden p-2 text-text-main"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors py-2",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-text-muted hover:text-primary"
                )}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" className="sm:hidden">
              <Button size="md" className="w-full mt-2">
                Book Session
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
