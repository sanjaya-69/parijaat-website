import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, PiggyBank, CreditCard, Home, Briefcase, GraduationCap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <PiggyBank className="h-8 w-8 text-green-600" />,
      title: "Savings Account",
      description: "Secure and flexible savings options with competitive interest rates.",
    },
    {
      icon: <Banknote className="h-8 w-8 text-green-600" />,
      title: "Loans & Credit",
      description: "Various loan products to meet your personal and business needs.",
    },
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Home Loans",
      description: "Affordable home financing solutions for your dream home.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: "Business Loans",
      description: "Support for entrepreneurs and small business development.",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      title: "Education Loans",
      description: "Invest in education with our flexible education financing.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "Digital Banking",
      description: "Modern banking solutions with digital convenience.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of financial services designed to meet the diverse needs of our members and
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
