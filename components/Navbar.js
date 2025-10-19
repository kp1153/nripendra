"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">
              विस्तार प्रीमियम सोलर एजेंसी
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              होम
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              हमारे बारे में
            </a>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-600 font-medium flex items-center">
                उत्पाद <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  ऑनग्रिड सोलर
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  ऑफग्रिड सोलर
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  हाइब्रिड सोलर
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  सोलर फेंसिंग
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  सोलर स्ट्रीट लाइट
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  सोलर वॉटर हीटर
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  सोलर वॉटर पंप
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  अन्य उत्पाद
                </a>
              </div>
            </div>

            {/* Franchise Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-600 font-medium flex items-center">
                फ्रेंचाइजी <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  मास्टर प्रीमियम फ्रेंचाइजी
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  व्यवसाय आय मॉडल
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  प्रशिक्षण और सहायता
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
                >
                  पंजीकरण प्रक्रिया
                </a>
              </div>
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              सोलर बिजनेस क्यों
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              गैलरी
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              संपर्क करें
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              होम
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              हमारे बारे में
            </a>

            <div>
              <button
                onClick={() => toggleDropdown("products")}
                className="w-full text-left py-2 text-gray-700 hover:text-orange-600 flex justify-between items-center"
              >
                उत्पाद{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "products" && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    ऑनग्रिड सोलर
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    ऑफग्रिड सोलर
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    हाइब्रिड सोलर
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    सोलर फेंसिंग
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    सोलर स्ट्रीट लाइट
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    सोलर वॉटर हीटर
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    सोलर वॉटर पंप
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    अन्य उत्पाद
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("franchise")}
                className="w-full text-left py-2 text-gray-700 hover:text-orange-600 flex justify-between items-center"
              >
                फ्रेंचाइजी{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openDropdown === "franchise" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "franchise" && (
                <div className="pl-4">
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    मास्टर प्रीमियम फ्रेंचाइजी
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    व्यवसाय आय मॉडल
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    प्रशिक्षण और सहायता
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-600 hover:text-orange-600"
                  >
                    पंजीकरण प्रक्रिया
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              सोलर बिजनेस क्यों
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              गैलरी
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              संपर्क करें
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
