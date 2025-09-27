"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Phone, Shield, Star } from "lucide-react";
import Link from "next/link";

export default function ClientForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceNeeded: "",
      message: "",
    },
  });

  const handleServiceChange = (value) => {
    setValue("serviceNeeded", value);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Redirect to thank you page on success
        router.push("/thank-you");
      } else {
        // Handle error
        console.error("Form submission failed");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="client-form"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Get Your <span className="text-red-600">FREE Quote</span> Today
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>24-hour response guaranteed.</strong>
          </p>
          {/* <div className="mt-4 inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Limited time offer - Book within 48 hours
          </div> */}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Why 500+ Customers Choose Us
                </h3>

                <ul className="space-y-4">
                  {[
                    {
                      icon: CheckCircle,
                      text: "Same-day service available",
                      highlight: true,
                    },
                    {
                      icon: Star,
                      text: "4.9/5 stars (200+ reviews)",
                      highlight: false,
                    },
                    {
                      icon: Shield,
                      text: "Fully licensed & insured",
                      highlight: false,
                    },
                    {
                      icon: Phone,
                      text: "Free estimates in 2 hours",
                      highlight: true,
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-full ${
                          item.highlight ? "bg-red-600" : "bg-red-100"
                        }`}
                      >
                        <item.icon
                          className={`h-5 w-5 ${
                            item.highlight ? "text-white" : "text-red-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`${
                          item.highlight
                            ? "font-semibold text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-bold text-green-800">
                      100% Satisfaction Guarantee
                    </span>
                  </div>
                  {/* <p className="text-sm text-green-700">
                    Not happy? We'll make it right or your money back.
                  </p> */}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-medium text-gray-900 mb-2">
                    Need immediate help? Call now!
                  </p>
                  <Link
                    href="tel:7273176717"
                    className="flex items-center justify-center gap-2 text-xl font-bold text-red-600 hover:text-red-700 transition-colors bg-red-50 py-3 px-4 rounded-lg border-2 border-red-200 hover:border-red-300"
                  >
                    <Phone className="h-6 w-6" />
                    <span>(727) 317-6717</span>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Available 7 days a week
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-medium text-gray-700">
                      500+ Happy Clients
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    "Got a quote in 30 minutes and service the next day.
                    Incredible!"
                  </p>
                  <p className="text-sm font-medium mt-1">
                    - Sarah M., Verified Customer
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8 bg-black text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Get Your FREE Quote
                  </h2>
                  <p className="text-gray-300">
                    Takes 2 minutes • No obligation • Instant response
                  </p>
                </div>

                <form
                  className="p-6 md:p-8 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-medium">
                        First Name*
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-medium">
                        Last Name*
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email Address*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">
                        Phone Number*
                      </Label>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceNeeded" className="font-medium">
                      Service Needed*
                    </Label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger
                        className={errors.serviceNeeded ? "border-red-500" : ""}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dumpster-rental">
                          Dumpster Rental
                        </SelectItem>
                        <SelectItem value="junk-removal">
                          Junk Removal
                        </SelectItem>
                        <SelectItem value="construction-cleanup">
                          Construction Cleanup
                        </SelectItem>
                        <SelectItem value="residential-cleanup">
                          Residential Cleanup
                        </SelectItem>
                        <SelectItem value="commercial-services">
                          Commercial Services
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input
                      type="hidden"
                      {...register("serviceNeeded", {
                        required: "Service selection is required",
                      })}
                    />
                    {errors.serviceNeeded && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.serviceNeeded.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">
                      Message*
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project or inquiry..."
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Your Request...
                      </div>
                    ) : (
                      "Get My FREE Quote Now →"
                    )}
                  </Button>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Shield className="h-4 w-4" />
                      <span>
                        Your information is secure and will never be shared
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-green-600">
                        ✓ No spam, ever
                      </p>
                      <p className="text-sm font-medium text-green-600">
                        ✓ Response within 2 hours
                      </p>
                      <p className="text-sm font-medium text-green-600">
                        ✓ Free consultation included
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
