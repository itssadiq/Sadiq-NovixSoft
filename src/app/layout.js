import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Weights: Regular, Medium, Semibold
  style: ["normal", "italic"], // Styles: Normal, Italic
  variable: "--font-figtree",
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio built with Next.js and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
