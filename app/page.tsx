import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import NewsNotices from "@/components/news-notices"
import Media from "@/components/media"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <NewsNotices />
      <Media />
      <Contact />
      <Footer />
    </div>
  )
}
