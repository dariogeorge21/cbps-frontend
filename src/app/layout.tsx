import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const raleway = Raleway({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "SJCET Bus Pass Booking Portal",
	description:
		"Complete your bus pass booking in guided steps with real-time validation and secure processing.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${raleway.variable} h-full`}>
			<body className="min-h-full bg-background text-foreground antialiased font-sans">
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}

