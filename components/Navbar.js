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
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900">
                विस्तारा प्रीमियम सोलर एजेंसी
              </h1>
              <p className="text-sm text-gray-600">
                Vistara Premium Solar Agency
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8 pb-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-700 hover:text-orange-600 font-medium"
          >
            होम
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-orange-600 font-medium"
          >
            हमारे बारे में
          </button>

          <div className="relative group">
            <button className="text-gray-700 hover:text-orange-600 font-medium flex items-center">
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
            className="text-gray-700 hover:text-orange-600 font-medium"
          >
            फ्रेंचाइजी
          </button>
          <button
            onClick={() => scrollToSection("why-solar")}
            className="text-gray-700 hover:text-orange-600 font-medium"
          >
            सोलर बिजनेस क्यों
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-orange-600 font-medium"
          >
            संपर्क करें
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              होम
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              हमारे बारे में
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              उत्पाद
            </button>
            <button
              onClick={() => scrollToSection("franchise")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              फ्रेंचाइजी
            </button>
            <button
              onClick={() => scrollToSection("why-solar")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              सोलर बिजनेस क्यों
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              संपर्क करें
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}