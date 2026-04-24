"use client";
import React, { useState } from "react";
import Image from "next/image";
import SocialLink from "./SocialLink";
import ActionButton from "./ActionButton";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import ContactImage from "../../public/contact-img.jpg";

export default function ContactForm() {
  const [status, setStatus] = useState(""); // For handling success/error messages

  const socials = [
    {
      name: "Linkedin",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/dev-sadiq-ali/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/devsadiqali/",
    },
  ];

  // FORM SUBMISSION HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xwpbwyej", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
              Let&apos;s Connect
            </h5>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socials.map((social) => (
              <SocialLink
                key={social.name}
                href={social.href}
                label={social.name}
                icon={social.icon}
                variant="light"
              />
            ))}
          </div>
        </div>

        {/* MAIN CONTENT: IMAGE & FORM */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT: IMAGE */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden bg-gray-100 rounded-[10px]">
              <Image
                src={ContactImage}
                alt="Let's work together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="w-full lg:w-[55%] flex flex-col pt-4">
            {status === "SUCCESS" ? (
              <div className="h-full flex flex-col justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="type-h2">Message Received! 🚀</h2>
                <p className="type-body-large text-[var(--color-dim-grey)]">
                  Thanks for reaching out. I&apos;ll get back to you.
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="type-body font-bold underline text-left mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="type-body uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name here"
                    className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="type-body uppercase">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20"
                  />
                </div>

                {/* Company Field */}
                <div className="flex flex-col">
                  <label className="type-body uppercase">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company here"
                    className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label className="type-body uppercase">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20 resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="mt-4 flex flex-col gap-4">
                  <ActionButton
                    text={
                      status === "Sending..." ? "Sending..." : "Send Message"
                    }
                    icon={<span className="text-xl">💌</span>}
                  />
                  {status === "ERROR" && (
                    <span className="type-body-small text-red-500">
                      Something went wrong. Please try again or email me
                      directly.
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
