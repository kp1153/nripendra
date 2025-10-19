"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - आप अपने actual project images का path यहाँ add करें
  const galleryImages = [
    {
      id: 1,
      src: "/images/solar-projects-gallery.jpg",
      alt: "सोलर प्रोजेक्ट 1",
      title: "रेजिडेंशियल सोलर इंस्टालेशन",
    },
    {
      id: 2,
      src: "/images/vistara-banner-1.jpg",
      alt: "सोलर प्रोजेक्ट 2",
      title: "कमर्शियल सोलर सिस्टम",
    },
    {
      id: 3,
      src: "/images/vistara-banner-2.jpg",
      alt: "सोलर प्रोजेक्ट 3",
      title: "ऑनग्रिड सोलर प्लांट",
    },
    {
      id: 4,
      src: "/images/solar-projects-gallery.jpg",
      alt: "सोलर प्रोजेक्ट 4",
      title: "सोलर स्ट्रीट लाइट",
    },
    {
      id: 5,
      src: "/images/vistara-banner-1.jpg",
      alt: "सोलर प्रोजेक्ट 5",
      title: "सोलर वॉटर पंप",
    },
    {
      id: 6,
      src: "/images/vistara-banner-2.jpg",
      alt: "सोलर प्रोजेक्ट 6",
      title: "हाइब्रिड सोलर सिस्टम",
    },
    {
      id: 7,
      src: "/images/solar-projects-gallery.jpg",
      alt: "सोलर प्रोजेक्ट 7",
      title: "इंडस्ट्रियल सोलर",
    },
    {
      id: 8,
      src: "/images/vistara-banner-1.jpg",
      alt: "सोलर प्रोजेक्ट 8",
      title: "रूफटॉप सोलर",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            हमारे प्रोजेक्ट्स
          </h2>
          <p className="text-lg text-gray-600">
            बनारस और आसपास के क्षेत्रों में हमारे सफल सोलर इंस्टालेशन देखें
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-white text-2xl font-bold text-center mt-4">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">500+</p>
              <p className="text-gray-600">सफल प्रोजेक्ट्स</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">1000+</p>
              <p className="text-gray-600">खुश ग्राहक</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">50+</p>
              <p className="text-gray-600">गांव और शहर</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-600 mb-2">5MW+</p>
              <p className="text-gray-600">कुल स्थापित क्षमता</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
