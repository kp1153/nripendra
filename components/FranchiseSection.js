"use client";
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
        {/* Logo Section - Center */}
        <div className="flex flex-col items-center py-6 text-center">
          {/* Slider Text - Pink & Bold */}
          <div className="w-full overflow-hidden mb-3">
            <style jsx>{`
              @keyframes slide {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              .animate-slide {
                display: inline-block;
                animation: slide 15s linear infinite;
              }
            `}</style>
            <div className="whitespace-nowrap">
              <span className="text-pink-600 font-bold text-base md:text-lg animate-slide">
                विस्तारा प्रीमियम सोलर एजेंसी आपका स्वागत करती है
              </span>
            </div>
          </div>

          {/* Logo with 3D Effect */}
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="h-20 w-20 object-contain mb-3 transition-all duration-300 hover:scale-110 hover:rotate-6"
            style={{
              filter:
                "drop-shadow(0 4px 6px rgba(234, 179, 8, 0.4)) drop-shadow(0 10px 15px rgba(234, 179, 8, 0.3))",
            }}
          />

          {/* Agency Name - Golden Color (Hindi & English) */}
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-1">
            विस्तारा प्रीमियम सोलर एजेंसी
          </h1>
          <p className="text-sm md:text-base text-yellow-600 font-semibold">
            Vistara Premium Solar Agency
          </p>
        </div>

        {/* Menu - Mobile First (No Hamburger) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 pb-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm md:text-lg"
          >
            होम
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-green-600 hover:text-green-800 font-semibold text-sm md:text-lg"
          >
            हमारे बारे में
          </button>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="text-purple-600 hover:text-purple-800 font-semibold text-sm md:text-lg flex items-center">
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
            onClick={() => scrollToSection("gallery")}
            className="text-orange-600 hover:text-orange-800 font-semibold text-sm md:text-lg"
          >
            गैलरी
          </button>
          <button
            onClick={() => scrollToSection("franchise")}
            className="text-red-600 hover:text-red-800 font-semibold text-sm md:text-lg"
          >
            फ्रेंचाइजी
          </button>
          <button
            onClick={() => scrollToSection("why-solar")}
            className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm md:text-lg"
          >
            सोलर बिजनेस क्यों
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-teal-600 hover:text-teal-800 font-semibold text-sm md:text-lg"
          >
            संपर्क करें
          </button>
        </div>
      </div>
    </nav>
  );
}