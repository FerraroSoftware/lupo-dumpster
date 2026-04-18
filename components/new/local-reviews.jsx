import { Star, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LocalReviews({
  city = "New Port Richey",
  reviews,
  googleReviewUrl = "https://g.page/r/CfoGYOeUqDehEBM/review",
}) {
  // Default reviews use the provided city name so the section reads naturally
  // on every city page without requiring custom review data.
  const defaultReviews = [
    {
      name: "Michael S.",
      neighborhood: `${city}, FL`,
      rating: 5,
      date: "Verified Google review",
      text: `Lupo Dumpster Rentals provided excellent service. The dumpster was delivered on time, and the price was very reasonable. I highly recommend them to anyone in ${city}.`,
    },
    {
      name: "Vitina S.",
      neighborhood: `${city}, FL`,
      rating: 5,
      date: "Verified customer",
      text: "Alex made it extremely easy to rent. He always responds back to text and checked in on us to see if all was well. The 20 yard dumpster was the perfect size and fit a whole house gutting. Best price I could find in the area.",
    },
    {
      name: "Avi L.",
      neighborhood: `${city}, FL`,
      rating: 5,
      date: "5-star Google review",
      text: "Was in constant contact with these guys and they allowed me extra time when I needed it. They placed it exactly where I asked and the dumpster was picked up when it was ready. I'll work with them again for sure.",
    },
    {
      name: "David P.",
      neighborhood: `${city}, FL`,
      rating: 5,
      date: "Verified customer",
      text: `Great experience with Lupo. Professional, courteous, and the dumpster was exactly what I needed for my roofing job. Will definitely use them again for our next project in ${city}.`,
    },
  ];

  const items = reviews || defaultReviews;

  return (
    <section className="py-16 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-6 w-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-black">
            What {city} Customers Say About Lupo
          </h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
            130+ verified 4.9 out of 5 reviews from real {city} neighborhoods —
            kitchen remodels, roofing jobs, estate cleanouts, garage
            haul-aways. Here&apos;s a sample of what our {city} customers have
            told us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {items.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 border border-zinc-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-zinc-800 leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-zinc-900 text-sm">
                    {review.name}
                  </div>
                  <div className="flex items-center text-xs text-zinc-600">
                    <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{review.neighborhood}</span>
                  </div>
                  {review.date && (
                    <div className="text-xs text-zinc-500 mt-0.5">
                      {review.date}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Join 130+ Happy {city} Customers
          </h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            Read every verified review on Google, or share your own after your
            rental — most {city} customers take 30 seconds and leave a
            5-star.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              asChild
            >
              <Link href="/contact">Get Your {city} Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <Link
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Google Reviews
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalReviews;
