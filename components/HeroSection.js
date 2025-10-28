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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  const stats = [
    {
      icon: Sun,
      title: "25 साल की वारंटी",
      subtitle: "उच्च गुणवत्ता वाले सोलर पैनल",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "सरकारी सब्सिडी",
      subtitle: "PM सूर्य घर योजना के तहत",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "विशेषज्ञ टीम",
      subtitle: "अनुभवी इंस्टॉलेशन सेवा",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "प्रमाणित कंपनी",
      subtitle: "ISO & BIS certified",
      color: "from-purple-500 to-purple-600",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-[70vh] overflow-hidden rounded-2xl shadow-2xl group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          ))}

          <Button
            onClick={prevSlide}
            size="icon"
            variant="secondary"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            size="icon"
            variant="secondary"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 w-2 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-12 left-8 right-8 z-30 text-white">
            <Badge className="bg-orange-600 hover:bg-orange-700 text-white mb-4 text-sm px-4 py-1">
              APN Solar - Master Premium Franchise
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              विस्तारा प्रीमियम सोलर एजेंसी
            </h2>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
              बनारस में सोलर ऊर्जा का भरोसेमंद नाम
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
