import {
  Sun,
  Battery,
  Zap,
  Shield,
  Lightbulb,
  Droplet,
  Fence,
} from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      icon: Sun,
      title: "ऑनग्रिड सोलर",
      description:
        "ग्रिड से जुड़ी सोलर प्रणाली जो बिजली बिल को शून्य कर देती है",
      features: ["नेट मीटरिंग", "कम लागत", "सरकारी सब्सिडी"],
    },
    {
      icon: Battery,
      title: "ऑफग्रिड सोलर",
      description: "बैटरी बैकअप के साथ स्वतंत्र सोलर सिस्टम",
      features: ["बैटरी स्टोरेज", "24/7 बिजली", "ग्रिड से स्वतंत्र"],
    },
    {
      icon: Zap,
      title: "हाइब्रिड सोलर",
      description: "ऑनग्रिड और ऑफग्रिड दोनों का संयोजन",
      features: ["बैकअप पावर", "नेट मीटरिंग", "बेहतर दक्षता"],
    },
    {
      icon: Fence,
      title: "सोलर फेंसिंग",
      description: "सौर ऊर्जा से संचालित सुरक्षा बाड़ प्रणाली",
      features: ["सुरक्षा", "कम रखरखाव", "पर्यावरण अनुकूल"],
    },
    {
      icon: Lightbulb,
      title: "सोलर स्ट्रीट लाइट",
      description: "सड़कों और सार्वजनिक क्षेत्रों के लिए सोलर लाइटिंग",
      features: ["स्वचालित", "लंबी आयु", "बिजली बिल नहीं"],
    },
    {
      icon: Droplet,
      title: "सोलर वॉटर हीटर",
      description: "सौर ऊर्जा से गर्म पानी की व्यवस्था",
      features: ["ऊर्जा बचत", "पर्यावरण अनुकूल", "कम रखरखाव"],
    },
    {
      icon: Droplet,
      title: "सोलर वॉटर पंप",
      description: "खेती और सिंचाई के लिए सोलर पंप",
      features: ["डीजल बचत", "कम खर्च", "विश्वसनीय"],
    },
    {
      icon: Sun,
      title: "सोलर होम लाइटिंग",
      description: "घरेलू उपयोग के लिए छोटे सोलर सिस्टम",
      features: ["आपातकालीन लाइट", "मोबाइल चार्जिंग", "पोर्टेबल"],
    },
  ];

  const vendors = [
    { name: "K Solare", category: "Solar Panels" },
    { name: "Pahal Solar", category: "PV Modules" },
    { name: "Goldi Solar", category: "Solar Systems" },
    { name: "RenewSys", category: "Solar Components" },
    { name: "Growatt", category: "Inverters" },
    { name: "Loom Solar", category: "Solar Panels" },
    { name: "Waaree", category: "Solar Modules" },
    { name: "Vikram Solar", category: "Solar Solutions" },
    { name: "Luminous Solar", category: "Power Systems" },
    { name: "Adani Solar", category: "Solar Panels" },
    { name: "Jindal Steel & Power", category: "Infrastructure" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            हमारे उत्पाद
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            एक छत के नीचे संपूर्ण सोलर समाधान - 1KW से लेकर किसी भी आवश्यकता तक
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <product.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="text-orange-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors">
                जानकारी प्राप्त करें
              </button>
            </div>
          ))}
        </div>

        {/* Our Vendors Section */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            हमारे विश्वसनीय विक्रेता
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            हम भारत की प्रतिष्ठित सोलर कंपनियों के साथ काम करते हैं जो उच्च
            गुणवत्ता और विश्वसनीयता के लिए जानी जाती हैं।
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-orange-600 transition-colors text-center"
              >
                <p className="font-semibold text-gray-800 mb-2">
                  {vendor.name}
                </p>
                <p className="text-sm text-gray-600">{vendor.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
