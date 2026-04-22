import React from "react";
import Image from "next/image";
import SocialLink from "./SocialLink";
import ActionButton from "./ActionButton";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import ContactImage from "../../public/contact-img.jpg"; // Replace with your actual image path

export default function ContactForm() {
  const socials = [
    { name: "Linkedin", icon: FaLinkedinIn, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "#" },
  ];

  return (
    <section className="w-full bg-[var(--color-white)] pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 md:mb-16">
          {/* Section Badge */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <h5 className="type-h5 tracking-tight uppercase font-bold text-[var(--color-black)]">
              Let&apos;s Connect
            </h5>
          </div>

          {/* Social Links */}
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
            <div className="relative aspect-[4/5] lg:aspect-square w-full overflow-hidden bg-gray-100">
              <Image
                src={ContactImage}
                alt="Let's work together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="w-full lg:w-[55%] flex flex-col pt-4">
            <form className="flex flex-col gap-10">
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="type-body uppercase">Name</label>
                <input
                  type="text"
                  placeholder="Your name here"
                  className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="type-body uppercase">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20"
                />
              </div>

              {/* Company Field */}
              <div className="flex flex-col">
                <label className="type-body uppercase">Company Name</label>
                <input
                  type="text"
                  placeholder="Your company here"
                  className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label className="type-body uppercase">Message</label>
                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full py-4 bg-transparent border-b border-black focus:border-black outline-none transition-colors type-body placeholder:text-black/20 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="mt-4">
                <ActionButton
                  text="Send Message"
                  icon={<span className="text-xl">💌</span>}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
