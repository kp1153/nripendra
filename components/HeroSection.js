"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Zap,
  Users,
  Award,
} from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/images/1.jpeg" },
    { image: "/images/2.jpeg" },
    { image: "/images/3.jpeg" },
    { image: "/images/4.jpeg" },
    { image: "/images/5.jpeg" },
    { image: "/images/6.jpeg" },
    { image: "/images/7.jpeg" },
    { image: "/images/8.jpeg" },
    { image: "/images/9.jpeg" },
    { image: "/images/10.jpeg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-orange-600 w-8"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">25 साल की वारंटी</h3>
              <p className="text-lg font-semibold text-blue-600">उच्च गुणवत्ता वाले सोलर पैनल</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">सरकारी सब्सिडी</h3>
              <p className="text-lg font-semibold text-blue-600">PM सूर्य घर योजना के तहत</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">विशेषज्ञ टीम</h3>
              <p className="text-lg font-semibold text-blue-600">अनुभवी इंस्टॉलेशन सेवा</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">प्रमाणित कंपनी</h3>
              <p className="text-lg font-semibold text-blue-600">ISO & BIS certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}