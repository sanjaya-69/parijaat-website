"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quick contact:", { email, message })
    alert("Thank you for your message!")
    setEmail("")
    setMessage("")
  }

  const userLinks = ["Home", "About", "Services", "Media"]

  // const memberLinks = ["Members", "test", "About Us", "Home"]

  const quickMenuLinks = ["Donors' List", "Reports", "Testimonials", "Members"]

  const governanceLinks = ["Governance", "Committee", "Membership Form", "About Us", "Home"]

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6 border-b-2 border-green-600 pb-2 inline-block">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                <p className="text-gray-600">Pokhara-8, Newroad</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">+977-061531688</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">info@parijatcocos.com.np</p>
              </div>
            </div>
          </div>

          {/* User Links */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6 border-b-2 border-green-600 pb-2 inline-block">
              User Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-3">
                {userLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-green-600 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
              {/* <div className="space-y-3">
                {memberLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-green-600 transition-colors">
                    {link}
                  </a>
                ))}
              </div> */}
            </div>
          </div>

          {/* Quick Menu
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6 border-b-2 border-green-600 pb-2 inline-block">
              Quick Menu
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-3">
                {quickMenuLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-green-600 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                {governanceLinks.map((link, index) => (
                  <a key={index} href="#" className="block text-gray-600 hover:text-green-600 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div> */}

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-6 border-b-2 border-green-600 pb-2 inline-block">
              Quick Contact
            </h3>
            <form onSubmit={handleQuickContact} className="space-y-4">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Textarea
                placeholder="Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full resize-none"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 w-full">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            ©2025 Parijat Saving & Credit Cooperative Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
