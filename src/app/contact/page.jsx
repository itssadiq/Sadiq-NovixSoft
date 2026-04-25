import React from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

// --- SEO OPTIMIZATION ---
export const metadata = {
  title: "Contact | Sadiq Ali | Web Developer",
  description:
    "Let's build something great together. Reach out for agency-standard web development, WordPress builds, or MERN applications.",
  openGraph: {
    title: "Contact Sadiq Ali",
    description: "Greet me with a 'Hi!' and share your project idea.",
    images: ["/profile.png"],
  },
};

const ContactPage = () => {
  const contactInfo = {
    email: "devsadiqali@gmail.com",
    phone: "+92 300 2454781",
    coords: "24.8608° N / 67.0104° E",
    location: "Karachi, Pakistan",
  };

  return (
    <main className="min-h-screen bg-[var(--color-white)]">
      <Navbar />

      {/* Hero Section with Contact Layout enabled */}
      <PageHero
        isContact={true}
        badgeText="Contact us"
        title="Greet me with a 'Hi!' and share your idea."
        contactData={contactInfo}
      />

      <ContactForm />

      <Footer />
    </main>
  );
};

export default ContactPage;
