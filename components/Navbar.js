"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          <div className="mb-4">
            <img
              src="/logo.jpeg"
              alt="विस्तारा प्रीमियम सोलर एजेंसी"
              className="max-w-xs"
            />
          </div>

          <div className="hidden md:flex space-x-8">
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
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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

            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-600 font-medium flex items-center">
                फ्रेंचाइजी <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => scrollToSection("franchise")}
                  className="w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-50 font-medium border-l-4 border-orange-500"
                >
                  मास्टर प्रीमियम फ्रेंचाइजी
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 font-medium border-l-4 border-green-600"
                >
                  कंपनी प्रक्रिया
                </button>
                <button
                  onClick={() => scrollToSection("franchise")}
                  className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 font-medium border-l-4 border-blue-600"
                >
                  प्रशिक्षण और सहायता
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("why-solar")}
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              सोलर बिजनेस क्यों
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              गैलरी
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              संपर्क करें
            </button>
          </div>

          <div className="md:hidden absolute right-4 top-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
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

            <div>
              <button
                onClick={() => toggleDropdown("products")}
                className="w-full text-left py-2 text-gray-700 hover:text-orange-600 flex justify-between items-center"
              >
                उत्पाद
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "products" && (
                <div className="pl-4">
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    ऑनग्रिड सोलर
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    ऑफग्रिड सोलर
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    हाइब्रिड सोलर
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    सोलर फेंसिंग
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    सोलर स्ट्रीट लाइट
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    सोलर वॉटर हीटर
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    सोलर वॉटर पंप
                  </button>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="block w-full text-left py-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    अन्य उत्पाद
                  </button>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("franchise")}
                className="w-full text-left py-2 text-gray-700 hover:text-orange-600 flex justify-between items-center"
              >
                फ्रेंचाइजी
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "franchise" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "franchise" && (
                <div className="pl-4">
                  <button
                    onClick={() => scrollToSection("franchise")}
                    className="block w-full text-left py-2 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    मास्टर प्रीमियम फ्रेंचाइजी
                  </button>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="block w-full text-left py-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    कंपनी प्रक्रिया
                  </button>
                  <button
                    onClick={() => scrollToSection("franchise")}
                    className="block w-full text-left py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    प्रशिक्षण और सहायता
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("why-solar")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              सोलर बिजनेस क्यों
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              गैलरी
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
