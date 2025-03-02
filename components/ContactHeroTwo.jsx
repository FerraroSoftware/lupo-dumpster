"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  Truck,
  MapPin,
  DollarSign,
  ShieldCheck,
  LucideHeading2,
} from "lucide-react";
import { format } from "date-fns";

// Import components from the correct paths based on your project structure
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import dumpsterrentalpascocounty from "../public/dumpster-rental-pasco-county.jpg";

export default function HeroSection() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: null,
    time: "",
    dumpsterContents: "",
    additionalDetails: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.location || formData.location.length < 5) {
      newErrors.location = "Location must be at least 5 characters";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    if (!formData.dumpsterContents || formData.dumpsterContents.length < 5) {
      newErrors.dumpsterContents =
        "Please describe what will go in the dumpster";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateSelect = (date) => {
    setFormData((prev) => ({
      ...prev,
      date,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        date: null,
        time: "",
        dumpsterContents: "",
        additionalDetails: "",
      });
      router.push("/thank-you");
    } catch (error) {
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="w-full">
      {/* Mobile layout: Image only behind left column, form below */}
      <div className="md:hidden">
        {/* Content with background image */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={dumpsterrentalpascocounty || "/placeholder.svg"}
              alt="Dumpster rental service"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/70 z-0" />

          {/* Left Column Content */}
          <div className="relative z-10 px-6 py-12 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Pasco County Dumpster Rental Professionals
              </h1>
              <p className="text-lg text-gray-200">
                Lupo Dumpster Rentals and Junk Removal is a locally owned and
                operated business that specializes in providing dumpster rentals
                and junk removal services and more in Pasco County, Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 text-white my-6">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-red-500" />
                <LucideHeading2>10, 15, 20 Yard Dumpsters</LucideHeading2>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <h2>Serving All of Pasco County</h2>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-red-500" />
                <h2>Best Pricing Guaranteed</h2>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-red-500" />
                <h2>Licensed & Insured</h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-transparent border border-red-600 hover:bg-red-600"
                onClick={() => (window.location.href = "tel:17273176717")}
              >
                Call Now: (727) 317-6717
              </Button>
            </div>
          </div>
        </div>

        {/* Form below on mobile */}
        <div className="bg-black p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-1">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="bg-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-white mb-1">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-white mb-1">Phone</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(727) 555-0123"
                className="bg-white"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-white mb-1">Drop-off Location</label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="123 Main St, New Port Richey, FL"
                className="bg-white"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-white mb-1">Drop-off Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full bg-white pl-3 text-left font-normal",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      {formData.date ? (
                        format(formData.date, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={handleDateSelect}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-1">Drop-off Time</label>
                <Input
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="bg-white h-10"
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-white mb-1">
                What&apos;s going in the dumpster?
              </label>
              <Input
                name="dumpsterContents"
                value={formData.dumpsterContents}
                onChange={handleInputChange}
                placeholder="Construction debris, household items, etc."
                className="bg-white"
              />
              {errors.dumpsterContents && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dumpsterContents}
                </p>
              )}
            </div>

            <div>
              <label className="block text-white mb-1">
                Additional Details (Optional)
              </label>
              <Textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleInputChange}
                placeholder="Any special instructions or requirements..."
                className="bg-white"
              />
            </div>

            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}

            {submitSuccess && (
              <p className="text-sm text-green-500">
                Thank you! We&apos;ll contact you shortly to confirm your
                rental.
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Dumpster"}
            </Button>
          </form>
        </div>
      </div>

      {/* Desktop layout: Original two-column layout */}
      <div className="hidden md:block relative min-h-[800px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={dumpsterrentalpascocounty || "/placeholder.svg"}
            alt="Dumpster rental service"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* add overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:py-24">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Pasco County Dumpster Rental Professionals
              </h1>
              <p className="max-w-xl text-lg text-gray-200">
                Lupo Dumpster Rentals and Junk Removal is a locally owned and
                operated business that specializes in providing dumpster rentals
                and junk removal services and more in Pasco County, Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white my-6">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-red-500" />
                <span>10, 15, 20 Yard Dumpsters</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Serving All of Pasco County</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-red-500" />
                <span>Best Pricing Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-red-500" />
                <span>Licensed & Insured</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-transparent border border-red-600 hover:bg-red-600"
                onClick={() => (window.location.href = "tel:17273176717")}
              >
                Call Now: (727) 317-6717
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg bg-black/60 p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white mb-1">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="bg-white"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-1">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="bg-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-1">Phone</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(727) 555-0123"
                  className="bg-white"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-white mb-1">
                  Drop-off Location
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="123 Main St, New Port Richey, FL"
                  className="bg-white"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-1">Drop-off Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full bg-white pl-3 text-left font-normal",
                          !formData.date && "text-muted-foreground"
                        )}
                      >
                        {formData.date ? (
                          format(formData.date, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={handleDateSelect}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white mb-1">Drop-off Time</label>
                  <Input
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="bg-white h-10"
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white mb-1">
                  What&apos;s going in the dumpster?
                </label>
                <Input
                  name="dumpsterContents"
                  value={formData.dumpsterContents}
                  onChange={handleInputChange}
                  placeholder="Construction debris, household items, etc."
                  className="bg-white"
                />
                {errors.dumpsterContents && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dumpsterContents}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white mb-1">
                  Additional Details (Optional)
                </label>
                <Textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  placeholder="Any special instructions or requirements..."
                  className="bg-white"
                />
              </div>

              {submitError && (
                <p className="text-sm text-red-500">{submitError}</p>
              )}

              {submitSuccess && (
                <p className="text-sm text-green-500">
                  Thank you! We&apos;ll contact you shortly to confirm your
                  rental.
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Dumpster"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
