"use client"

import { useState } from "react"
import { Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-green-600">
                <Phone className="h-4 w-4" />
                <span>+061-531688</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <MapPin className="h-4 w-4" />
                <span>Pokhara-8, Newroad</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <Facebook className="h-4 w-4 text-blue-600 cursor-pointer hover:text-blue-800" />
                <Twitter className="h-4 w-4 text-blue-400 cursor-pointer hover:text-blue-600" />
                <Linkedin className="h-4 w-4 text-blue-700 cursor-pointer hover:text-blue-900" />
                <Youtube className="h-4 w-4 text-red-600 cursor-pointer hover:text-red-800" />
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-sm">JOIN NOW</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">P</div>
              </div>
              <div className="text-green-600">
                <div className="font-bold text-lg">पारिजात बचत तथा</div>
                <div className="text-sm">ऋण सहकारी संस्था लि.</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-green-600 font-semibold hover:text-green-800">
                HOME
              </a>
              <div className="relative group">
                <a href="#about" className="text-gray-700 hover:text-green-600 flex items-center">
                  ABOUT <span className="ml-1">▼</span>
                </a>
              </div>
              <div className="relative group">
                <a href="#services" className="text-gray-700 hover:text-green-600 flex items-center">
                  SERVICES <span className="ml-1">▼</span>
                </a>
              </div>
              <a href="#news" className="text-gray-700 hover:text-green-600">
                NEWS & NOTICES
              </a>
              <div className="relative group">
                <a href="#media" className="text-gray-700 hover:text-green-600 flex items-center">
                  MEDIA <span className="ml-1">▼</span>
                </a>
              </div>
              <a href="#contact" className="text-gray-700 hover:text-green-600">
                CONTACT
              </a>
              <a href="#careers" className="text-gray-700 hover:text-green-600">
                CAREERS
              </a>
              <Search className="h-5 w-5 text-gray-700 cursor-pointer hover:text-green-600" />
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-green-600 font-semibold">
                  HOME
                </a>
                <a href="#about" className="text-gray-700 hover:text-green-600">
                  ABOUT
                </a>
                <a href="#services" className="text-gray-700 hover:text-green-600">
                  SERVICES
                </a>
                <a href="#news" className="text-gray-700 hover:text-green-600">
                  NEWS & NOTICES
                </a>
                <a href="#media" className="text-gray-700 hover:text-green-600">
                  MEDIA
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-600">
                  CONTACT
                </a>
                <a href="#careers" className="text-gray-700 hover:text-green-600">
                  CAREERS
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
