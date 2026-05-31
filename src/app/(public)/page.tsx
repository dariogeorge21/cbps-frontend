import { SiteHeader } from "@/components/navigation/site-header";
import { LandingHero } from "@/components/shared/landing-hero";
import { SiteFooter } from "@/components/shared/site-footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const facilityCards = [
  {
    title: "Route Coverage",
    description: "Live seats, timings, and pickup points in one view.",
  },
  {
    title: "Secure Payments",
    description: "Clear fare breakdowns with verified receipts.",
  },
];

export default function PublicLandingPage() {
  return (
    <div id="top" className="flex min-h-9xl flex-col">
      <SiteHeader />
      
      {/* Main Section occupies full screen */}
      <main className="flex-1 bg-background/80 backdrop-blur">
      
        <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(6,182,212,0.16),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.06),_transparent_45%)]" />
          
        
          
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-14 lg:py-20">
            {/* Campus Logo */}
            <div className="mb-8">
              <img src="/logo.png" alt="Campus Logo" className="h-24" />
            </div>

            <LandingHero />
            <p className="mt-6 max-w-2xl text-center text-sm text-muted-foreground">
              Built for students and staff to reserve seats efficiently while
              keeping operations transparent and reliable.
            </p>
          </div>
        </section>

        
      </main>
      <SiteFooter />
    </div>
  );
}
