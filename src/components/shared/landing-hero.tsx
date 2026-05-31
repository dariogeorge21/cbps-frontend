import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const highlights = [
  "Guided booking flow",
  "Real-time validation",
  "Secure payment processing",
];

const steps = [
  "Select route and dates",
  "Review fare summary",
  "Confirm and pay",
  "Download digital pass",
];

export function LandingHero() {
  return (
    <Card className="w-full max-w-3xl border-border/70 bg-card/95 shadow-soft backdrop-blur">
      <CardHeader className="space-y-3">
        <Badge className="w-fit rounded-full px-3 py-1" variant="secondary">
          Campus Bus Pass Portal
        </Badge>
        <CardTitle className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Bus Pass Booking Portal
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          Complete your pass booking in a few guided steps with real-time
          validation, transparent fare breakdowns, and secure processing.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg">Book Now</Button>
          <Button size="lg" variant="outline">
            How it Works
          </Button>
        </div>
        <Separator />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              Booking highlights
            </p>
            <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">Steps</p>
            <ol className="list-decimal space-y-2 pl-4 text-sm text-muted-foreground">
              {steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
