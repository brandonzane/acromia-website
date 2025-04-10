import { ClientLayout } from "@/components/ClientLayout";
import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/glow-effects.css";
import { twMerge } from "tailwind-merge";

// const dmSans = DM_Sans({ subsets: ["latin"] });
const halcomBold = localFont({ src: "../assets/fonts/Halcom-Bold.otf" });

export const metadata: Metadata = {
  title: "Acromia | Design and Development Agency",
  description: "Results driven design and development agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={twMerge(
          halcomBold.className,
          "antialiased bg-white text-primary-black"
        )}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
