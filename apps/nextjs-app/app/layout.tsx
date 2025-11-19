
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../../packages/ui/src/styles/shadcn/shadcn-green.css"
import "../../../packages/ui/src/styles/custom/scroll.css"
import { ThemeProvider } from "@repo/ui/providers/theme-provider";
import "../../../packages/ui/src/styles/custom/heroBackgroundAnimation.css"
import { Toaster } from "@repo/ui/molecules/custom/v1/Toaster";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google";
import { TRPCReactProvider } from "@/trpc/client";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable @next/next/no-sync-scripts */}
        <script src="/scripts/theme.js" />
        {/* eslint-enable @next/next/no-sync-scripts */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <TRPCReactProvider>
            <ThemeProvider defaultTheme="dark" >
              {children}
              <Analytics/>
              <Toaster />
            </ThemeProvider>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID as string}/>
          </TRPCReactProvider>
      </body>
    </html>
  );
}
