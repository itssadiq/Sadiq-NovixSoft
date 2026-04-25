"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

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
