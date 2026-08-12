import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio | Putra Sedana",
  description: "A frontend developer specializing in React, Next.js, and modern web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/photo.jpg" />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased bg-slate-900 text-white jetbrains-mono`}>{children}</body>
    </html>
  );
}
