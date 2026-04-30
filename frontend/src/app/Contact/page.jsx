"use client";

import { useState } from "react";
import { Flower2, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon. 🙏");

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      detail: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      detail: "support@samagri.com",
      link: "mailto:support@samagri.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      detail: "+91 98765 43210",
      link: "https://wa.me/919876543210",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      detail: "Mumbai, Maharashtra, India",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen mx-auto container bg-gradient-to-br from-[#FFF8E7] via-[#FF9933]/5 to-[#FFF8E7] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-8 gap-8 p-8">
          {[...Array(64)].map((_, i) => (
            <Flower2 key={i} className="h-8 w-8 text-[#D4AF37]" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-[#800000] text-3xl font-bold mb-2">Contact Us</h1>

          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Flower2 className="h-6 w-6 text-[#D4AF37]" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Have questions about our products or need assistance? We're here to
            help you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-[#800000] text-2xl font-semibold mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#FF9933]/40 rounded-xl focus:border-[#FF9933] outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#FF9933]/40 rounded-xl focus:border-[#FF9933] outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-[#FF9933]/40 rounded-xl focus:border-[#FF9933] outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF9933] to-[#D4AF37] text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition"
              >
                <div className="flex items-center justify-center gap-2">
                  <Flower2 className="h-5 w-5" />
                  Send Message
                </div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-[#800000] text-2xl font-semibold mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : ""}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FFF8E7] transition"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF9933]/20 to-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#800000]">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map / Visit us */}
            <div className="bg-white rounded-2xl p-6 shadow-xl relative">
              {/* Decorative corners */}
              <Flower2 className="absolute top-4 left-4 text-[#D4AF37] h-6 w-6" />
              <Flower2 className="absolute top-4 right-4 text-[#D4AF37] h-6 w-6" />
              <Flower2 className="absolute bottom-4 left-4 text-[#D4AF37] h-6 w-6" />
              <Flower2 className="absolute bottom-4 right-4 text-[#D4AF37] h-6 w-6" />

              <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FF9933]/10 h-64 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-[#FF9933] mx-auto mb-4" />
                  <h4 className="text-[#800000] text-xl font-semibold mb-2">
                    Visit Us
                  </h4>
                  <p className="text-gray-600">Mumbai, Maharashtra</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#800000] to-[#FF9933] rounded-2xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="opacity-90">Monday - Friday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="opacity-90">Saturday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="opacity-90">Sunday</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
