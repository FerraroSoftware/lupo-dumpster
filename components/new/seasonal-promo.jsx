"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CalendarClock, X } from "lucide-react"

export default function SeasonalPromo() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  // Current season detection
  const getCurrentSeason = () => {
    const month = new Date().getMonth()
    if (month >= 2 && month <= 4) return "spring"
    if (month >= 5 && month <= 7) return "summer"
    if (month >= 8 && month <= 10) return "fall"
    return "winter"
  }

  const season = getCurrentSeason()

  // Seasonal content configuration
  const seasonalContent = {
    spring: {
      title: "Spring Cleaning Special",
      description: "Get 15% off any dumpster rental for your spring cleaning projects!",
      bgColor: "bg-gradient-to-r from-green-500 to-green-700",
      image: "/spring-cleaning.png",
      code: "SPRING15",
    },
    summer: {
      title: "Summer Renovation Deal",
      description: "Book any dumpster for 5 days and get the 6th day FREE!",
      bgColor: "bg-gradient-to-r from-red-500 to-red-700",
      image: "/placeholder-sttwy.png",
      code: "SUMMER6",
    },
    fall: {
      title: "Fall Cleanup Discount",
      description: "10% off all dumpster rentals for yard waste and fall cleanup projects!",
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-700",
      image: "/placeholder-pyw5z.png",
      code: "FALL10",
    },
    winter: {
      title: "Winter Holiday Special",
      description: "Post-holiday cleanup? Get $50 off any size dumpster rental!",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
      image: "/placeholder-g6xqt.png",
      code: "WINTER50",
    },
  }

  const content = seasonalContent[season]

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer)
          return prevTime
        }

        let newSeconds = prevTime.seconds - 1
        let newMinutes = prevTime.minutes
        let newHours = prevTime.hours
        let newDays = prevTime.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <section className={`py-8 ${content.bgColor} text-white relative overflow-hidden`}>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 p-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Close promotion"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <CalendarClock className="h-8 w-8" />
              <h2 className="text-3xl font-bold">{content.title}</h2>
            </div>

            <p className="text-lg mb-4">{content.description}</p>

            <div className="bg-white/20 p-4 rounded-lg inline-block mb-6">
              <p className="font-mono text-lg">
                Use Code: <span className="font-bold">{content.code}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-zinc-100">Claim Offer Now</Button>
              <div className="flex items-center">
                <span className="mr-2">Offer expires in:</span>
                <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
                  <div className="flex flex-col p-1 bg-black/20 rounded-md text-white">
                    <span className="font-mono text-lg">{timeLeft.days.toString().padStart(2, "0")}</span>
                    <span className="text-xs">days</span>
                  </div>
                  <div className="flex flex-col p-1 bg-black/20 rounded-md text-white">
                    <span className="font-mono text-lg">{timeLeft.hours.toString().padStart(2, "0")}</span>
                    <span className="text-xs">hours</span>
                  </div>
                  <div className="flex flex-col p-1 bg-black/20 rounded-md text-white">
                    <span className="font-mono text-lg">{timeLeft.minutes.toString().padStart(2, "0")}</span>
                    <span className="text-xs">min</span>
                  </div>
                  <div className="flex flex-col p-1 bg-black/20 rounded-md text-white">
                    <span className="font-mono text-lg">{timeLeft.seconds.toString().padStart(2, "0")}</span>
                    <span className="text-xs">sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src={content.image || "/placeholder.svg"}
              alt={content.title}
              className="rounded-xl max-h-48 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
