"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

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
                <p className="text-gray-600">+977-061581688 </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <p className="text-gray-600">parijatsacos99@gmail.com</p>
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
            </div>
          </div>

           {/* Profile Section */}
           <div className="text-center">
            <img
              src="../officer.jpeg"
              alt="Binod Paudel"
              className="mx-auto rounded-lg w-40 h-40 object-cover"
            />
            <h4 className="mt-4 text-lg font-bold text-gray-800">Binod Paudel</h4>
            {/* <div className="flex justify-center space-x-4 mt-2 text-green-600 text-lg">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div> */}
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p><span className="font-medium"></span>Information Officer</p>
              <p>📞 9846418981</p>
              {/* <p>📧 info@parijat.com.np</p> */}
            </div>
          </div>
    

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
