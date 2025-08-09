import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agriculture Analytics Dashboard",
  description: "An interactive agriculture data visualization dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
         className={`min-h-screen w-full bg-white text-black ${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        </div>
      </body>
    </html>
  );
}
