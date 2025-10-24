"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sliding Banner - Pink */}
        <div
          className="overflow-hidden py-3"
          style={{ backgroundColor: "#EC4899" }}
        >
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-white font-semibold text-base md:text-lg mx-4">
              विस्तारा प्रीमियम सोलर एजेंसी आपका स्वागत करती है
            </span>
            <span className="text-white font-semibold text-base md:text-lg mx-4">
              विस्तारा प्रीमियम सोलर एजेंसी आपका स्वागत करती है
            </span>
            <span className="text-white font-semibold text-base md:text-lg mx-4">
              विस्तारा प्रीमियम सोलर एजेंसी आपका स्वागत करती है
            </span>
          </div>
        </div>

        {/* Logo Section - Center with 3D Effect */}
        <div className="flex flex-col items-center py-6 text-center">
          <div
            style={{
              transform: "perspective(1000px) rotateX(15deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-20 w-20 object-contain mb-3 rounded-full"
              style={{
                filter:
                  "drop-shadow(0 20px 35px rgba(0,0,0,0.5)) drop-shadow(0 8px 20px rgba(212,175,55,0.7))",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.4), 0 10px 20px rgba(212,175,55,0.3), inset 0 0 30px rgba(212,175,55,0.2)",
                transform: "translateZ(50px)",
              }}
            />
          </div>
          <h1
            className="text-2xl md:text-3xl font-bold mb-1"
            style={{ color: "#D4AF37" }}
          >
            विस्तारा प्रीमियम सोलर एजेंसी
          </h1>
          <p
            className="text-base md:text-lg font-semibold"
            style={{ color: "#D4AF37" }}
          >
            Vistara Premium Solar Agency
          </p>
        </div>

        {/* Mobile & Desktop Menu */}
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 pb-6 space-y-3 md:space-y-0">
          <button
            onClick={() => scrollToSection("hero")}
            className="w-full md:w-auto text-center py-3 md:py-0 text-blue-600 hover:text-blue-800 font-semibold text-base md:text-lg"
          >
            होम
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="w-full md:w-auto text-center py-3 md:py-0 text-green-600 hover:text-green-800 font-semibold text-base md:text-lg"
          >
            हमारे बारे में
          </button>

          <button
            onClick={() => scrollToSection("products")}
            className="block md:hidden w-full text-center py-3 text-purple-600 hover:text-purple-800 font-semibold text-base"
          >
            उत्पाद
          </button>

          <div className="hidden md:block relative group">
            <button className="text-purple-600 hover:text-purple-800 font-semibold text-lg flex items-center">
              उत्पाद <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-50 font-medium border-l-4 border-orange-500"
              >
                ऑनग्रिड सोलर
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 font-medium border-l-4 border-green-600"
              >
                ऑफग्रिड सोलर
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 font-medium border-l-4 border-blue-600"
              >
                हाइब्रिड सोलर
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-50 font-medium border-l-4 border-orange-500"
              >
                सोलर फेंसिंग
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 font-medium border-l-4 border-green-600"
              >
                सोलर स्ट्रीट लाइट
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 font-medium border-l-4 border-blue-600"
              >
                सोलर वॉटर हीटर
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-50 font-medium border-l-4 border-orange-500"
              >
                सोलर वॉटर पंप
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 font-medium border-l-4 border-green-600"
              >
                अन्य उत्पाद
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("franchise")}
            className="w-full md:w-auto text-center py-3 md:py-0 text-red-600 hover:text-red-800 font-semibold text-base md:text-lg"
          >
            फ्रेंचाइजी
          </button>
          <button
            onClick={() => scrollToSection("why-solar")}
            className="w-full md:w-auto text-center py-3 md:py-0 text-indigo-600 hover:text-indigo-800 font-semibold text-base md:text-lg"
          >
            सोलर बिजनेस क्यों
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full md:w-auto text-center py-3 md:py-0 text-teal-600 hover:text-teal-800 font-semibold text-base md:text-lg"
          >
            संपर्क करें
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="w-full md:w-auto text-center py-3 md:py-0 text-pink-600 hover:text-pink-800 font-semibold text-base md:text-lg"
          >
            गैलरी
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </nav>
  );
}
