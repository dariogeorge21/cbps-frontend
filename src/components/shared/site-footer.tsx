import Link from "next/link";

const footerLinks = [
  { label: "About Application", href: "#about" },
  { label: "How to Use?", href: "#how-to-use" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">
            Bus Pass Software
          </p>
          <p className="text-xs text-muted-foreground">
            St. Joseph's College of Engineering and Technology, Palai
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
