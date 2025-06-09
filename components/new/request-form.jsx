"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CheckCircle, Clock, Phone, Shield, Star, Truck } from "lucide-react"
import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function RequestForm() {
  const router = useRouter()
  const [date, setDate] = useState(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      dropoffDate: "",
      dropoffTime: "",
      contents: "",
      details: "",
    },
  })

  // Update the date in react-hook-form when calendar date changes
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate)
    setValue("dropoffDate", selectedDate ? format(selectedDate, "yyyy-MM-dd") : "")
  }

  // Handle time selection in react-hook-form
  const handleTimeChange = (value) => {
    setValue("dropoffTime", value)
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/sendinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          dropoffDate: data.dropoffDate ? format(new Date(data.dropoffDate), "PPP") : "",
        }),
      })

      if (response.ok) {
        // Redirect to thank you page on success
        router.push("/thank-you")
      } else {
        // Handle error
        console.error("Form submission failed")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="request-form" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Get Your Dumpster <span className="text-red-600">Today</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 15 minutes during business hours. Same-day delivery
            often available!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Why Choose Lupo Dumpster Rentals?</h3>

                <ul className="space-y-4">
                  {[
                    { icon: Truck, text: "Same-day delivery available" },
                    { icon: CheckCircle, text: "Licensed & insured " },
                    { icon: Star, text: "5-star rated service" },
                    { icon: Clock, text: "Flexible rental periods" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <item.icon className="h-5 w-5 text-red-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="font-medium text-gray-900 mb-2">Need immediate assistance?</p>
                  <Link
                    href="tel:7273176717"
                    className="flex items-center justify-center gap-2 text-lg font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(727) 317-6717</span>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium text-gray-700">100+ Reviews</span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    &ldquo;Excellent service! The dumpster was delivered on time and pickup was prompt. Will definitely use
                    again.&rdquo;
                  </p>
                  <p className="text-sm font-medium mt-1">- Michael R., New Port Richey</p>
                </div>
              </div>

              <div className="bg-black rounded-xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Our Service Guarantee</h3>
                <p className="text-blue-100 mb-4">
                  We guarantee on-time delivery and pickup, or we&apos;ll discount your next rental by 10%.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-zinc-700/50 rounded-lg p-3 text-center">
                    <p className="font-bold">100%</p>
                    <p className="text-blue-200 text-sm">Satisfaction Rate</p>
                  </div>
                  <div className="bg-zinc-700/50 rounded-lg p-3 text-center">
                    <p className="font-bold">5,000+</p>
                    <p className="text-blue-200 text-sm">Rentals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8 bg-black text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Request Your Dumpster</h2>
                  <p className="text-gray-300">Complete the form below for a quick quote and scheduling.</p>
                </div>

                <form className="p-6 md:p-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium">
                        Name*
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email*
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
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">
                        Phone*
                      </Label>
                      <Input
                        id="phone"
                        placeholder="(727) 555-0123"
                        {...register("phone", { required: "Phone number is required" })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="font-medium">
                        Drop-off Location*
                      </Label>
                      <Input
                        id="location"
                        placeholder="123 Main St, New Port Richey, FL"
                        {...register("location", { required: "Location is required" })}
                        className={errors.location ? "border-red-500" : ""}
                      />
                      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="font-medium">
                        Drop-off Date*
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal ${errors.dropoffDate ? "border-red-500" : ""}`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={handleDateChange} initialFocus />
                        </PopoverContent>
                      </Popover>
                      <input type="hidden" {...register("dropoffDate", { required: "Date is required" })} />
                      {errors.dropoffDate && <p className="text-red-500 text-sm mt-1">{errors.dropoffDate.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="font-medium">
                        Drop-off Time*
                      </Label>
                      <Select onValueChange={handleTimeChange}>
                        <SelectTrigger className={errors.dropoffTime ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                          <SelectItem value="evening">Evening (4PM - 7PM)</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" {...register("dropoffTime", { required: "Time is required" })} />
                      {errors.dropoffTime && <p className="text-red-500 text-sm mt-1">{errors.dropoffTime.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contents" className="font-medium">
                      What&apos;s going in the dumpster?*
                    </Label>
                    <Input
                      id="contents"
                      placeholder="Construction debris, household items, etc."
                      {...register("contents", { required: "This field is required" })}
                      className={errors.contents ? "border-red-500" : ""}
                    />
                    {errors.contents && <p className="text-red-500 text-sm mt-1">{errors.contents.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details" className="font-medium">
                      Additional Details (Optional)
                    </Label>
                    <Textarea
                      id="details"
                      placeholder="Any special instructions or requirements..."
                      {...register("details")}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request My Dumpster Now"}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    <span>Your information is secure and will never be shared</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
