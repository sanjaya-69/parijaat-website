import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Community Focused",
      description: "Serving our community with dedication and commitment to financial inclusion.",
    },
    {
      icon: <Target className="h-12 w-12 text-green-600" />,
      title: "Goal Oriented",
      description: "Focused on achieving sustainable growth and development for all members.",
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Quality Service",
      description: "Providing excellent financial services with transparency and reliability.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Growth Focused",
      description: "Committed to the economic growth and prosperity of our members.",
    },
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Parijat Cooperative</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Established in 2067 BS (2014 AD), Parijat Saving and Credit Cooperative Ltd. is a community-focused cooperative based in Pokhara, Nepal. Guided by the principles of mutual support, transparency, and sustainable development, we are dedicated to improving the economic and social well-being of our members.

As a registered cooperative under the Cooperative Act of Nepal, we operate with a commitment to democratic values and inclusive participation. Our members are at the heart of every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
