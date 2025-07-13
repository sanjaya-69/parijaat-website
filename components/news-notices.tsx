import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsNotices() {
  const news = [
    {
      date: "2024-01-15",
      title: "Annual General Meeting 2024",
      excerpt: "Join us for our Annual General Meeting to discuss the year's achievements and future plans.",
    },
    {
      date: "2024-01-10",
      title: "New Digital Banking Services",
      excerpt:
        "We're excited to announce the launch of our new digital banking platform for enhanced customer experience.",
    },
    {
      date: "2024-01-05",
      title: "Special Loan Schemes for SMEs",
      excerpt: "Introducing special loan packages for small and medium enterprises with competitive interest rates.",
    },
    {
      date: "2023-12-28",
      title: "Holiday Banking Hours",
      excerpt: "Please note our special banking hours during the holiday season for your convenience.",
    },
  ]

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News & Notices</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and important notices from Parijat Cooperative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 text-green-600 text-sm mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <CardTitle className="text-xl text-gray-800">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button
                  variant="outline"
                  className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
