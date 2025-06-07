import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-bold text-xl gradient-text">
          Your Name
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-blue-600 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button variant="outline" size="sm" className="md:hidden border-2">
          <Menu className="h-4 w-4" />
        </Button>
      </nav>
    </header>
  );
} 