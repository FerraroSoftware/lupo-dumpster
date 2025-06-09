import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Efficient Home Renovation Waste Management",
      excerpt:
        "Planning a home renovation? Learn how to manage waste efficiently and save money with these expert tips from our team.",
      image: "/placeholder-alwkg.png",
      author: "Alex Lupo",
      date: "May 10, 2023",
      category: "Home Renovation",
    },
    {
      id: 2,
      title: "How to Choose the Right Dumpster Size for Your Project",
      excerpt:
        "Selecting the correct dumpster size is crucial for your project's success. This guide helps you make the right choice every time.",
      image: "/placeholder-9idxg.png",
      author: "Amanda Lupo",
      date: "April 22, 2023",
      category: "Dumpster Guide",
    },
    {
      id: 3,
      title: "The Environmental Impact of Proper Waste Disposal",
      excerpt:
        "Discover how proper waste disposal methods can significantly reduce your environmental footprint and benefit your community.",
      image: "/placeholder-v5oub.png",
      author: "Alex Lupo",
      date: "March 15, 2023",
      category: "Sustainability",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">Our Blog</div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Latest Tips & Insights</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on waste management, home projects, and environmental topics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-zinc-500 mb-3">
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-zinc-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-red-600 font-medium inline-flex items-center group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-black hover:bg-zinc-800 text-white">View All Blog Posts</Button>
        </div>
      </div>
    </section>
  )
}
