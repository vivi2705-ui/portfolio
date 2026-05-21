"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setEmailSubmitted(true);
      } else {
        setError(resData.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 opacity-40"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-[#0f0a2e] my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#1e1560] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="bg-[#0f0a2e]">
            <Link href="https://github.com/vivi2705-ui">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          </div>
          
          <div className="bg-[#5B45D4]">
            
          <Link href="https://www.linkedin.com/in/jerielle-vinoria-sawadogo-7740582b4">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          </div>


        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="bg-[#e8f5e9] border border-green-300 rounded-lg p-4 mt-2">
            <p className="text-green-700 font-medium">✓ Message sent successfully!</p>
            <p className="text-green-600 text-sm mt-1">I&apos;ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="email" className="text-[#0f0a2e] block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-[#c9c0f0] placeholder-[#6b5fa8] text-[#0f0a2e] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#5B45D4]"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-[#0f0a2e] block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-[#c9c0f0] placeholder-[#6b5fa8] text-[#0f0a2e] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#5B45D4]"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-[#0f0a2e] block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="bg-white border border-[#c9c0f0] placeholder-[#6b5fa8] text-[#0f0a2e] text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-[#5B45D4]"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-br from-[#5B45D4] to-[#EC4899] hover:opacity-90 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
