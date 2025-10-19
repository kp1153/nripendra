import { Leaf, Zap, TrendingUp, Award } from "lucide-react";

export default function WhySolarSection() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "भविष्य का व्यवसाय",
      description: "AMC के साथ जीवन भर की आय की संभावना",
    },
    {
      icon: Leaf,
      title: "पर्यावरण बचाएं",
      description: "स्वच्छ और हरित ऊर्जा से पर्यावरण की रक्षा करें",
    },
    {
      icon: Zap,
      title: "बिजली बिल बचाएं",
      description: "रूपांतरित बिजली अगला बाजार है",
    },
    {
      icon: Award,
      title: "25+ साल जीरो बिल",
      description: "25 वर्षों और उससे अधिक के लिए शून्य यूनिट बिल",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            आपको सोलर बिजनेस क्यों शुरू करना चाहिए
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            भारत में सोलर पावर उद्योग हर साल बढ़ रहा है और 2023-25 में विश्व
            स्तर पर दूसरा सबसे बड़ा सोलर बाजार बनने का अनुमान है।
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow text-center"
            >
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Opportunity Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                उद्यमियों के लिए बड़ा अवसर
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                इस क्षेत्र में प्रवेश करने वाले उद्यमियों के लिए अधिक टिकाऊ
                भविष्य में योगदान करने का अवसर है, साथ ही तेजी से बढ़ते सेक्टर
                में लाभदायक व्यवसाय बनाने का मौका है।
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">तेजी से बढ़ता हुआ बाजार</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">
                    सरकारी समर्थन और सब्सिडी
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">कम निवेश, उच्च रिटर्न</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 text-xl">✓</span>
                  <span className="text-gray-700">
                    पर्यावरण के प्रति जिम्मेदार व्यवसाय
                  </span>
                </li>
              </ul>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                आज ही शुरू करें
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/solar-projects-gallery.jpg"
                alt="Solar Business Opportunity"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-bold">2nd</p>
                <p className="text-sm">Largest Solar Market</p>
                <p className="text-xs">By 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
