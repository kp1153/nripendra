// app/gallery/page.js
"use client";
import { useState, useEffect } from "react";
import { Download, FileText, Award } from "lucide-react";

const certificates = [
  {
    name: "APN Franchise Certificate",
    nameHindi: "एपीएन फ्रैंचाइज़ प्रमाणपत्र",
    file: "/certificates/apn-franchise.jpg",
    type: "image",
    icon: Award,
  },
  {
    name: "GST Certificate",
    nameHindi: "जीएसटी प्रमाणपत्र",
    file: "/certificates/gst-certificate.pdf",
    type: "pdf",
    icon: FileText,
  },
  {
    name: "Udyam Certificate",
    nameHindi: "उद्यम प्रमाणपत्र",
    file: "/certificates/udyam-certificate.pdf",
    type: "pdf",
    icon: FileText,
  },
];

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
];

export default function GalleryPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slide);
  }, []);

  const handleDownload = (file, name) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Close Button */}
      <button
        onClick={() => window.history.back()}
        className="fixed top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg"
      >
        ✕
      </button>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Certificates Section */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-2"
            style={{ color: "#D4AF37" }}
          >
            प्रमाणपत्र
          </h2>
          <p className="text-center text-gray-600 mb-8">Certificates</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-orange-200"
                >
                  <div className="flex flex-col items-center">
                    <Icon
                      className="w-16 h-16 mb-4"
                      style={{ color: "#D4AF37" }}
                    />
                    <h3 className="text-xl font-bold text-gray-800 text-center mb-1">
                      {cert.nameHindi}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      {cert.name}
                    </p>

                    <div className="flex gap-3 w-full">
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-semibold transition-colors"
                      >
                        देखें
                      </a>
                      <button
                        onClick={() => handleDownload(cert.file, cert.name)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-orange-300 mb-16"></div>

        {/* Photo Gallery Section */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-2"
            style={{ color: "#D4AF37" }}
          >
            फोटो गैलरी
          </h2>
          <p className="text-center text-gray-600 mb-8">Photo Gallery</p>

          <div
            className="relative bg-black rounded-lg overflow-hidden"
            style={{ height: "70vh" }}
          >
            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrent((current - 1 + images.length) % images.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white text-4xl w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            >
              ‹
            </button>

            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white text-4xl w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
            >
              ›
            </button>

            {/* Image Display */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={images[current]}
                alt={`Gallery ${current + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === idx ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
