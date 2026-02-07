import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/global/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Nyx Portfolio",
  description: "Web Design & Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-main`}>
        <Navbar />
        <main className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
