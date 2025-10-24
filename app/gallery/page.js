// app/gallery/page.js
"use client";
import { useState, useEffect } from "react";

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button
        onClick={() => history.back()}
        className="absolute top-4 right-6 text-white text-3xl"
      >
        ✕
      </button>

      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute left-6 text-white text-4xl"
      >
        ‹
      </button>

      <img
        src={images[current]}
        alt="gallery"
        className="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-lg"
      />

      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-6 text-white text-4xl"
      >
        ›
      </button>
    </div>
  );
}
