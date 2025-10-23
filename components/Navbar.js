"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Center */}
        <div className="flex flex-col items-center py-6 text-center">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="h-20 w-20 object-contain mb-3"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">
            विस्तारा प्रीमियम सोलर एजेंसी
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Vistara Premium Solar Agency
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-center md:hidden pb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 bg-gray-100 p-2 rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-6 pb-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
          >
            होम
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-green-600 hover:text-green-800 font-semibold text-lg"
          >
            हमारे बारे में
          </button>

          <div className="relative group">
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
            className="text-red-600 hover:text-red-800 font-semibold text-lg"
          >
            फ्रेंचाइजी
          </button>
          <button
            onClick={() => scrollToSection("why-solar")}
            className="text-indigo-600 hover:text-indigo-800 font-semibold text-lg"
          >
            सोलर बिजनेस क्यों
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-teal-600 hover:text-teal-800 font-semibold text-lg"
          >
            संपर्क करें
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-center py-3 text-blue-600 hover:bg-blue-50 font-semibold text-lg rounded"
            >
              होम
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-center py-3 text-green-600 hover:bg-green-50 font-semibold text-lg rounded"
            >
              हमारे बारे में
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-center py-3 text-purple-600 hover:bg-purple-50 font-semibold text-lg rounded"
            >
              उत्पाद
            </button>
            <button
              onClick={() => scrollToSection("franchise")}
              className="block w-full text-center py-3 text-red-600 hover:bg-red-50 font-semibold text-lg rounded"
            >
              फ्रेंचाइजी
            </button>
            <button
              onClick={() => scrollToSection("why-solar")}
              className="block w-full text-center py-3 text-indigo-600 hover:bg-indigo-50 font-semibold text-lg rounded"
            >
              सोलर बिजनेस क्यों
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-center py-3 text-teal-600 hover:bg-teal-50 font-semibold text-lg rounded"
            >
              संपर्क करें
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
