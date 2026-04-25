import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Sadiq Ali | Web Developer",
  description: "Reliable Web Development Partner for Digital Agencies",
  icons: {
    icon: "/profile.png",
  },
  openGraph: {
    title: "Sadiq Ali | Web Developer",
    description: "Specialized in high-end agency builds and clean development.",
    images: ["/profile.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadiq Ali | Web Developer",
    description: "Reliable web developer for digital agencies.",
    images: ["/profile.png"],
  },
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
