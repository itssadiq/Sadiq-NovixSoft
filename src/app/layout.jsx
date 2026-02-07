import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer"; // 1. Import Footer

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

        {/* 2. Add Footer here, outside the main constraint if you want full width, 
            but keeping it inside the flow implies it sits at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
