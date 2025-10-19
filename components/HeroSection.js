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
    {
      image: "/images/vistara-banner-1.jpg",
      title: "पीएम सूर्य घर मुफ्त बिजली योजना के अंतर्गत",
      subtitle: "विस्तार प्रीमियम सोलर एजेंसी",
      description: "भारत सरकार एवं UPNEDA द्वारा संचालित",
    },
    {
      image: "/images/vistara-banner-2.jpg",
      title: "हर घर सोलर ऊर्जा के साथ",
      subtitle: "पर्यावरण बचाएं और बिजली बिल बचाएं",
      description: "बनारस और आसपास के क्षेत्रों में विश्वसनीय सोलर समाधान",
    },
    {
      image: "/images/solar-projects-gallery.jpg",
      title: "25 वर्षों तक मुफ्त बिजली",
      subtitle: "सोलर क्रांति में शामिल हों",
      description: "APN Solar के साथ भारत का तेजी से बढ़ता सोलर नेटवर्क",
    },
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
      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-orange-400">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-2xl mb-8">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                    अभी संपर्क करें
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                    और जानें
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
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

        {/* Slide Indicators */}
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

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25 साल की वारंटी</h3>
              <p className="text-gray-600">उच्च गुणवत्ता वाले सोलर पैनल</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">सरकारी सब्सिडी</h3>
              <p className="text-gray-600">PM सूर्य घर योजना के तहत</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">विशेषज्ञ टीम</h3>
              <p className="text-gray-600">अनुभवी इंस्टॉलेशन सेवा</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">प्रमाणित कंपनी</h3>
              <p className="text-gray-600">ISO & BIS certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
