"use client";
import {
  Sun,
  Battery,
  Zap,
  Shield,
  Lightbulb,
  Droplet,
  Fence,
  Download,
  FileText,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// React state hook को इम्पोर्ट करें
import React, { useState } from "react";

export default function ProductsSection() {
  // सब्सिडी विवरण को दिखाने/छुपाने के लिए स्टेट
  const [showSubsidyDetails, setShowSubsidyDetails] = useState(false);

  // 1.jpg इमेज से निकाली गई अनुदान तालिका का डेटा
  const subsidyData = [
    { capacity: "1KW", centre: "30000", state: "15000", total: "45000" },
    { capacity: "2KW", centre: "60000", state: "30000", total: "90000" },
    { capacity: "3KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "4KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "5KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "6KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "7KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "8KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "9KW", centre: "78000", state: "30000", total: "108000" },
    { capacity: "10KW", centre: "78000", state: "30000", total: "108000" },
  ];

  // 1.jpg इमेज से निकाले गए मुख्य लाभ
  const subsidyFeatures = [
    "सोलर मॉड्यूल की 25 वर्षों तक की परफॉरमेंस वारंटी",
    "ऑनग्रिड सोलर सिस्टम लगभग जीरो मेंटेनेंस खर्च",
    "ऑनग्रिड सोलर इन्वर्टर पर 10 वर्ष तक की ऑनसाइट वारंटी",
    "सरकारी पोर्टल पर निःशुल्क रजिस्ट्रेशन",
    "सोलर रूफ टॉप में खर्च की गई धनराशि की 3-4 वर्षों में वापसी",
  ];

  const products = [
    {
      icon: Sun,
      title: "ऑनग्रिड सोलर",
      description:
        "ग्रिड से जुड़ी सोलर प्रणाली जो बिजली बिल को शून्य कर देती है",
      features: ["नेट मीटरिंग", "कम लागत", "सरकारी सब्सिडी"],
      category: "residential",
    },
    {
      icon: Battery,
      title: "ऑफग्रिड सोलर",
      description: "बैटरी बैकअप के साथ स्वतंत्र सोलर सिस्टम",
      features: ["बैटरी स्टोरेज", "24/7 बिजली", "ग्रिड से स्वतंत्र"],
      category: "residential",
    },
    {
      icon: Zap,
      title: "हाइब्रिड सोलर",
      description: "ऑनग्रिड और ऑफग्रिड दोनों का संयोजन",
      features: ["बैकअप पावर", "नेट मीटरिंग", "बेहतर दक्षता"],
      category: "residential",
    },
    {
      icon: Sun,
      title: "सोलर होम लाइटिंग",
      description: "घरेलू उपयोग के लिए छोटे सोलर सिस्टम",
      features: ["आपातकालीन लाइट", "मोबाइल चार्जिंग", "पोर्टेबल"],
      category: "residential",
    },
    {
      icon: Fence,
      title: "सोलर फेंसिंग",
      description: "सौर ऊर्जा से संचालित सुरक्षा बाड़ प्रणाली",
      features: ["सुरक्षा", "कम रखरखाव", "पर्यावरण अनुकूल"],
      category: "commercial",
    },
    {
      icon: Lightbulb,
      title: "सोलर स्ट्रीट लाइट",
      description: "सड़कों और सार्वजनिक क्षेत्रों के लिए सोलर लाइटिंग",
      features: ["स्वचालित", "लंबी आयु", "बिजली बिल नहीं"],
      category: "commercial",
    },
    {
      icon: Droplet,
      title: "सोलर वॉटर हीटर",
      description: "सौर ऊर्जा से गर्म पानी की व्यवस्था",
      features: ["ऊर्जा बचत", "पर्यावरण अनुकूल", "कम रखरखाव"],
      category: "residential",
    },
    {
      icon: Droplet,
      title: "सोलर वॉटर पंप",
      description: "खेती और सिंचाई के लिए सोलर पंप",
      features: ["डीजल बचत", "कम खर्च", "विश्वसनीय"],
      category: "agriculture",
    },
  ];

  const vendors = [
    {
      name: "Adani Solar",
      logo: "/logos/adani.png",
      colors: "from-blue-600 to-blue-800",
    },
    {
      name: "Jindal Steel & Power",
      logo: "/logos/jindal.png",
      colors: "from-orange-500 to-green-600",
    },
    {
      name: "Luminous Solar",
      logo: "/logos/luminious.png",
      colors: "from-blue-600 to-yellow-500",
    },
    {
      name: "Vikram Solar",
      logo: "/logos/vikram.png",
      colors: "from-red-600 to-red-800",
    },
    {
      name: "Waaree",
      logo: "/logos/waaree.png",
      colors: "from-green-600 to-green-800",
    },
    {
      name: "K Solare",
      logo: "/logos/ksolare.png",
      colors: "from-orange-500 to-yellow-500",
    },
    {
      name: "Pahal Solar",
      logo: "/logos/pahal.jpeg",
      colors: "from-blue-700 to-blue-900",
    },
    {
      name: "Goldi Solar",
      logo: "/logos/goldi.png",
      colors: "from-blue-800 to-indigo-900",
    },
    {
      name: "Loom Solar",
      logo: "/logos/Loom.png",
      colors: "from-green-500 to-green-700",
    },
    {
      name: "RenewSys",
      logo: "/logos/RenewSys.jpeg",
      colors: "from-blue-500 to-cyan-600",
    },
    {
      name: "Growatt",
      logo: "/logos/Growatt.png",
      colors: "from-green-600 to-green-800",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-orange-600 hover:bg-orange-700 text-white mb-4 text-sm px-4 py-1">
            हमारे उत्पाद
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            संपूर्ण सोलर समाधान
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            1KW से लेकर किसी भी आवश्यकता तक - एक छत के नीचे
          </p>
        </div>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 border-none shadow-2xl mb-4 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <FileText className="h-12 w-12 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    सरकारी सब्सिडी विवरण
                  </h3>
                  <p className="text-orange-100 text-lg">
                    पीएम सूर्य घर मुफ्त बिजली योजना की पूरी जानकारी
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* विवरण देखने/छुपाने के लिए बटन */}
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                  onClick={() => setShowSubsidyDetails(!showSubsidyDetails)}
                >
                  <Eye className="h-5 w-5 mr-2" />
                  {showSubsidyDetails ? "विवरण छुपाएँ" : "विवरण देखें"}
                </Button>
                {/* इमेज फ़ाइल को सीधे देखने का विकल्प (पिछली 404 त्रुटि से बचने के लिए) */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50"
                >
                  <a href="/1.jpg" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    मूल फ़ाइल देखें
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 404 से बचने और जानकारी को कोड के माध्यम से दिखाने के लिए नया सेक्शन */}
        {showSubsidyDetails && (
          <Card className="shadow-2xl mb-12 p-6 bg-white border border-orange-200 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
              पीएम सूर्य घर मुफ्त बिजली योजना अनुदान विवरण
            </h3>

            {/* सब्सिडी तालिका */}
            <div className="overflow-x-auto mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                अनुदान सूची (₹ में)
              </h4>
              <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                      संयंत्र क्षमता
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                      केन्द्र द्वारा अनुदान
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                      राज्य द्वारा अनुदान
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      कुल प्राप्त अनुदान
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {subsidyData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                        {row.capacity}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r">
                        ₹{row.centre}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r">
                        ₹{row.state}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-green-600">
                        ₹{row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* मुख्य लाभ और वारंटी */}
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              मुख्य लाभ और वारंटी
            </h4>
            <ul className="space-y-2 list-disc pl-5">
              {subsidyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <Zap className="h-5 w-5 mr-2 text-orange-600 flex-shrink-0 mt-1" />
                  {feature}
                </li>
              ))}
              <li className="flex items-start text-gray-700 font-bold text-lg pt-2">
                <Shield className="h-5 w-5 mr-2 text-red-600 flex-shrink-0 mt-1" />
                सरकार द्वारा ₹1,08,000/- तक की अधिकतम सब्सिडी उपलब्ध है।
              </li>
            </ul>

            <div className="mt-6 text-right">
              <Button
                onClick={() => setShowSubsidyDetails(false)}
                variant="outline"
                className="text-orange-600 border-orange-600 hover:bg-orange-50"
              >
                विवरण छुपाएँ
              </Button>
            </div>
          </Card>
        )}
        {/* अंत: नया सब्सिडी विवरण सेक्शन */}

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all">सभी</TabsTrigger>
            <TabsTrigger value="residential">घरेलू</TabsTrigger>
            <TabsTrigger value="commercial">व्यावसायिक</TabsTrigger>
            <TabsTrigger value="agriculture">कृषि</TabsTrigger>
          </TabsList>

          <TabsContent
            value="all"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <CardHeader>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <Badge
                          variant="secondary"
                          className="mr-2 bg-green-100 text-green-700 hover:bg-green-100"
                        >
                          ✓
                        </Badge>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent
            value="residential"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products
              .filter((p) => p.category === "residential")
              .map((product, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Badge
                            variant="secondary"
                            className="mr-2 bg-green-100 text-green-700 hover:bg-green-100"
                          >
                            ✓
                          </Badge>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent
            value="commercial"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products
              .filter((p) => p.category === "commercial")
              .map((product, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Badge
                            variant="secondary"
                            className="mr-2 bg-green-100 text-green-700 hover:bg-green-100"
                          >
                            ✓
                          </Badge>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent
            value="agriculture"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products
              .filter((p) => p.category === "agriculture")
              .map((product, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <Badge
                            variant="secondary"
                            className="mr-2 bg-green-100 text-green-700 hover:bg-green-100"
                          >
                            ✓
                          </Badge>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>

        <Card className="border-none shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">
              हमारे विश्वसनीय विक्रेता
            </CardTitle>
            <CardDescription className="text-base">
              भारत की प्रतिष्ठित सोलर कंपनियों के साथ साझेदारी
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {vendors.map((vendor, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-br ${vendor.colors} rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center`}
                >
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="h-20 w-auto object-contain bg-white rounded px-3 py-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
