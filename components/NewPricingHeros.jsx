"use client";

import { Check, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const tiers = [
  {
    name: "10 Yard Dumpster",
    id: "tier-10-yard-dumpster",
    href: "/contact",
    price: "$325",
    description: "Ideal for small-scale cleanouts and more.",
    features: [
      "Dump Fees Included",
      "3-5 Day Rental",
      "Suitable for Rooms",
      "Empty Small Storage",
      "Perfect for Personal Projects",
      "2 tons included in price",
    ],
    mostPopular: false,
    dimensions: "12ft × 8ft × 4ft",
    color: "bg-amber-500",
  },
  {
    name: "15 Yard Dumpster",
    id: "tier-15-yard-dumpster",
    href: "/contact",
    price: "$400",
    description: "Great for larger contractors.",
    features: [
      "Dump Fees Included",
      "3-5 Day Rental",
      "Useful for Property Cleanout",
      "Perfect for Contractors",
      "Suitable for Personal Projects",
      "3 tons included in price",
    ],
    mostPopular: true,
    dimensions: "16ft × 8ft × 4ft",
    color: "bg-red-600",
  },
  {
    name: "20 Yard Dumpster",
    id: "tier-20-yard-dumpster",
    href: "/contact",
    price: "$500",
    description: "For large-scale projects across various domains.",
    features: [
      "Dump Fees Included",
      "3-5 Day Rental",
      "Ideal for Large Scale Cleanouts",
      "Suitable for Major Renovations",
      "Perfect for Commercial Projects",
      "4 tons included in price",
    ],
    mostPopular: false,
    dimensions: "20ft × 8ft × 4ft",
    color: "bg-emerald-600",
  },
];

export default function NewPricingHeros() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-100 overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-red-600/10 shadow-xl shadow-red-600/10 ring-1 ring-red-600/10" />
      </div> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="border-red-600 text-red-600 mb-4 px-3 py-1"
          >
            Pricing
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 uppercase sm:text-4xl">
            Affordable Dumpster Rentals
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          We strive to offer affordable solutions that meet your needs without
          compromising on the quality of our services. Give us a call today.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative overflow-hidden ${
                tier.mostPopular
                  ? "border-red-600 shadow-md"
                  : "border-gray-200"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 left-0 h-1.5 bg-red-600" />
              )}

              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle
                      className={`text-xl font-bold uppercase ${
                        tier.mostPopular ? "text-red-600" : ""
                      }`}
                    >
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {tier.description}
                    </CardDescription>
                  </div>
                  {tier.mostPopular && (
                    <Badge className="bg-red-600 text-white hover:bg-red-700">
                      Most Popular
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${tier.color}`}></div>
                  <span className="text-sm text-muted-foreground">
                    {tier.dimensions}
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Variables affect final pricing
                  </p>
                </div>

                <ul className="space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-3 bg-gray-200 rounded-md">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Prohibited Items:
                  </p>
                  <p className="text-xs text-gray-600">
                    Paint, tires, TVs, electronics, and other hazardous
                    materials are not accepted.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button
                  variant={tier.mostPopular ? "default" : "outline"}
                  className={`w-full ${
                    tier.mostPopular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "text-red-600 border-red-600 hover:bg-red-50 "
                  }`}
                  asChild
                >
                  <Link
                    href={tier.href}
                    className="flex items-center justify-center gap-2"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 p-6 bg-white rounded-lg max-w-2xl mx-auto border border-gray-200">
          <Truck className="h-8 w-8 text-red-600" />
          <p className="text-gray-700">
            <span className="font-semibold">Need help choosing?</span> Our team
            is ready to assist you in selecting the right dumpster size for your
            project.{" "}
            <Link
              href="/contact"
              className="text-red-600 hover:text-red-700 underline"
            >
              Contact us
            </Link>{" "}
            for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
