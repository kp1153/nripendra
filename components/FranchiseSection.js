import {
  Users,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Headphones,
} from "lucide-react";

export default function FranchiseSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "डायरेक्ट सेल इनकम",
      description: "15% कमीशन",
    },
    {
      icon: Users,
      title: "इनडायरेक्ट सेल इनकम",
      description: "15% कमीशन",
    },
    {
      icon: Briefcase,
      title: "प्रोडक्ट सेल्स",
      description: "60% कमीशन",
    },
    {
      icon: Award,
      title: "AMC इनकम",
      description: "आजीवन कमाई",
    },
  ];

  const support = [
    {
      icon: GraduationCap,
      title: "प्रशिक्षण",
      description: "एक दिन की फिजिकल ट्रेनिंग + तकनीकी और सॉफ्टवेयर प्रशिक्षण",
    },
    {
      icon: Briefcase,
      title: "बिजनेस सॉफ्टवेयर",
      description: "सोलर बिजनेस के लिए विशेष सॉफ्टवेयर",
    },
    {
      icon: Users,
      title: "डेडिकेटेड RM",
      description: "बिक्री और व्यवसाय विकास के लिए समर्पित संबंध प्रबंधक",
    },
    {
      icon: Headphones,
      title: "ग्राहक सेवा",
      description: "एक बिंदु ग्राहक सेवा सहायता",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            मास्टर प्रीमियम फ्रेंचाइजी पार्टनर
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            सोलर क्रांति में शामिल हों। पैन इंडिया स्तर पर असीमित डाउनलाइन
            एजेंट्स/फ्रीलांस नियुक्त करें और अपने व्यवसाय को बढ़ाएं।
          </p>
        </div>

        {/* Investment Details */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-8 text-white mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            फ्रेंचाइजी निवेश
          </h3>
          <p className="text-5xl md:text-6xl font-bold mb-2">₹5,50,000</p>
          <p className="text-xl mb-4">+ GST (नॉन-रिफंडेबल)</p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-lg">
              <strong>बोनस इंसेंटिव:</strong> 18 महीने में 250 kW सोलर प्रोजेक्ट
              पूरा करने पर ₹5,50,000 का बोनस
            </p>
          </div>
        </div>

        {/* Income Opportunities */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            5 तरीकों से व्यवसाय आय
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-orange-600 font-bold text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            आपको क्या मिलेगा
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {support.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-start"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kit Details */}
        <div className="bg-white border-2 border-orange-600 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            5 kW ऑनग्रिड 1ph सिस्टम DIY किट शामिल
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>545 वाट मोनो हाफ कट पैनल (9 नंबर)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>5 kW ऑनग्रिड इन्वर्टर</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>मॉड्यूल माउंटिंग स्ट्रक्चर</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>DC और AC केबल</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>500 विजिटिंग कार्ड</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>500 प्रोडक्ट ब्रोशर</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>1 पार्टनर सर्टिफिकेट</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✓</span>
                <span>मार्केटिंग मटेरियल (स्टैंडी, बैनर)</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              अभी रजिस्टर करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
