"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import dumpsterrental from "../public/dumpsterrental.png";

export default function HeroAndContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToastMessage({
          title: "Quote Request Sent",
          description: "We'll get back to you as soon as possible!",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setToastMessage({
        title: "Error",
        description: "Failed to send your request. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    "10, 15, 20 Yard Dumpsters",
    "Best Pricing Guaranteed",
    "Flexible Rental & Same Day Drop Off",
    "Licensed & Insured",
  ];

  const ContactForm = () => (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-zinc-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-xl"
      variants={itemVariants}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Get a Free Quote
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-200"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-zinc-700 bg-opacity-50 border-zinc-600 text-white placeholder-zinc-400 focus:border-green-500 focus:ring-green-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-200"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-zinc-700 bg-opacity-50 border-zinc-600 text-white placeholder-zinc-400 focus:border-green-500 focus:ring-green-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-zinc-200"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-zinc-700 bg-opacity-50 border-zinc-600 text-white placeholder-zinc-400 focus:border-green-500 focus:ring-green-500"
            placeholder="(123) 456-7890"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-zinc-200"
          >
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-zinc-700 bg-opacity-50 border-zinc-600 text-white placeholder-zinc-400 focus:border-green-500 focus:ring-green-500"
            placeholder="City, State"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-zinc-200"
          >
            What are you getting rid of?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-zinc-700 bg-opacity-50 border-zinc-600 text-white placeholder-zinc-400 focus:border-green-500 focus:ring-green-500"
            placeholder="Describe the items you need to dispose of..."
            rows="4"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Get Your Free Quote"}
      </button>
    </motion.form>
  );

  return (
    <div className="relative bg-zinc-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={dumpsterrental}
          alt="Dumpster rental background"
          fill
          className="opacity-30 object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <motion.div
        className="relative z-10 w-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <motion.h1
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                Lupo Dumpster Rentals
              </motion.h1>
              <motion.p
                className="mt-6 max-w-3xl text-xl text-zinc-200"
                variants={itemVariants}
              >
                Pasco County Dumpster Rental Professionals
              </motion.p>
              <motion.p
                className="mt-2 max-w-3xl text-lg text-zinc-300"
                variants={itemVariants}
              >
                Locally owned and operated business specializing in dumpster
                rentals, junk removal services, and more in Pasco County,
                Florida.
              </motion.p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-zinc-800 bg-opacity-50 p-4 rounded-lg transition-all hover:bg-opacity-70"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-500 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
              <motion.div className="mt-10" variants={itemVariants}>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now for a Free Quote
                </a>
              </motion.div>
            </div>
            <motion.div className="mt-12 lg:mt-0" variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.div>
      {toastMessage && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-md ${
            toastMessage.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          <h3 className="font-bold">{toastMessage.title}</h3>
          <p>{toastMessage.description}</p>
        </div>
      )}
    </div>
  );
}
