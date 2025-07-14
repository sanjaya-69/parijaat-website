import { Card, CardContent } from "@/components/ui/card"
import { Play, ImageIcon, FileText } from "lucide-react"
import Image from "next/image"

export default function Media() {
  const mediaItems = [
        {
      type: "gallery",
      title: "Board Member",
      thumbnail: "/image4.jpg?height=200&width=300",
      icon: <FileText className="h-8 w-8 text-white" />,
    },
        {
      type: "gallery",
      title: "Board Member",
      thumbnail: "/image5.jpg?height=200&width=300",
      icon: <FileText className="h-8 w-8 text-white" />,
    },
    {
      type: "gallery",
      title: "Cooperative Success Stories",
      thumbnail: "./image1.jpeg?height=200&width=300",
      icon: <Play className="h-8 w-8 text-white" />,
    },
    {
      type: "gallery",
      title: "Annual Meeting 2024",
      thumbnail: "./image2.jpeg?height=200&width=300",
      icon: <ImageIcon className="h-8 w-8 text-white" />,
    },
    {
      type: "gallery",
      title: "Annual Meeting 2023",
      thumbnail: "/image3.jpeg?height=200&width=300",
      icon: <FileText className="h-8 w-8 text-white" />,
    },
  ]

  return (
    <section id="media" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Media Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of videos, photos, and documents showcasing our activities and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize mt-1">{item.type}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
