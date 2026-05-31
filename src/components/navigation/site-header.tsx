import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Facilities", href: "#facilities" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Badge className="rounded-full px-3 py-1 text-xs" variant="secondary">
            SJCET
          </Badge>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">
              Bus Pass Booking
            </p>
            <p className="text-xs text-muted-foreground">
              St. Joseph's College of Engineering and Technology
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          Login
        </Link>
      </div>
    </header>
  );
}
