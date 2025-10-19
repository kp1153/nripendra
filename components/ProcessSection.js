import {
  Phone,
  UserCheck,
  PhoneCall,
  GraduationCap,
  FileText,
  Users,
  Zap,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "हमारे फ्रेंचाइजी एक्सपर्ट से बात करें",
      description:
        "हमारे विशेषज्ञ से जुड़ें और सोलर उद्योग में विकास की रोमांचक दुनिया को अनलॉक करें। अपनी फ्रेंचाइजी के अवसर और प्रश्नों को स्पष्ट करें।",
    },
    {
      number: 2,
      icon: UserCheck,
      title: "फ्रेंचाइजी पार्टनर बनें",
      description:
        "आधिकारिक पार्टनर के रूप में हमारे साथ जुड़ें और सोलर उद्योग में विकास की दुनिया को अनलॉक करें।",
    },
    {
      number: 3,
      icon: PhoneCall,
      title: "ऑनबोर्डिंग डिपार्टमेंट से वेलकम कॉल",
      description:
        "एक गर्मजोशी भरा स्वागत और सभी प्रारंभिक मार्गदर्शन प्राप्त करें। अपनी यात्रा को किकस्टार्ट करने के लिए आवश्यक सभी जानकारी लें।",
    },
    {
      number: 4,
      icon: GraduationCap,
      title: "फ्रेंचाइजी ट्रेनिंग में भाग लें",
      description:
        "सफलता के लिए आपको ज्ञान और कौशल से लैस करने के लिए व्यापक प्रशिक्षण प्राप्त करें।",
    },
    {
      number: 5,
      icon: FileText,
      title: "मार्केटिंग सामग्री प्राप्त करें",
      description:
        "अपनी फ्रेंचाइजी को प्रभावी ढंग से बढ़ावा देने के लिए उच्च गुणवत्ता वाली मार्केटिंग संसाधनों तक पहुंच प्राप्त करें।",
    },
    {
      number: 6,
      icon: Users,
      title: "समर्पित रिलेशनशिप मैनेजर (RM)",
      description:
        "एक समर्पित RM आपके साथ हर कदम पर आपका समर्थन करने के लिए तैयार रहेगा।",
    },
    {
      number: 7,
      icon: Zap,
      title: "APN Solar के साथ काम शुरू करें",
      description:
        "एक सफल APN Solar पार्टनर के रूप में अपनी यात्रा शुरू करें और स्वच्छ ऊर्जा क्रांति में योगदान दें!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            कंपनी प्रक्रिया
          </h2>
          <p className="text-lg text-gray-600">
            सात सरल चरणों में हमारे साथ जुड़ें
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {step.number}
              </div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mt-4">
                <step.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Process Image */}
        <div className="mt-16">
          <img
            src="/images/company-process.jpg"
            alt="Company Process"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
