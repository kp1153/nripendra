export default function FranchiseSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            हमारे साथ जुड़ें
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            अगर आप सोलर उद्योग में अवसर तलाश रहे हैं, तो हमारे साथ पार्टनरशिप करें। हम अपने पार्टनर्स को पूर्ण समर्थन और मार्गदर्शन प्रदान करते हैं।
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              व्यापक प्रशिक्षण
            </h3>
            <p className="text-gray-600">
              तकनीकी और व्यावसायिक प्रशिक्षण के साथ आपको सफलता के लिए तैयार करते हैं
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              पूर्ण सहायता
            </h3>
            <p className="text-gray-600">
              मार्केटिंग सामग्री और समर्पित सपोर्ट टीम के साथ आपका साथ
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              विकास का अवसर
            </h3>
            <p className="text-gray-600">
              तेजी से बढ़ते सोलर उद्योग में अपना व्यवसाय स्थापित करें
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            पार्टनरशिप प्रक्रिया
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative bg-gray-50 rounded-xl p-6">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  प्रारंभिक संपर्क
                </h4>
                <p className="text-gray-600">
                  हमारे विशेषज्ञ से बात करें और अपनी रुचि व्यक्त करें
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-gray-50 rounded-xl p-6">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  पंजीकरण
                </h4>
                <p className="text-gray-600">
                  आधिकारिक पार्टनर के रूप में पंजीकरण करें
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-gray-50 rounded-xl p-6">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  प्रशिक्षण प्राप्त करें
                </h4>
                <p className="text-gray-600">
                  व्यापक तकनीकी और व्यावसायिक प्रशिक्षण
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-gray-50 rounded-xl p-6">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                4
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  मार्केटिंग सामग्री
                </h4>
                <p className="text-gray-600">
                  प्रचार के लिए सभी आवश्यक सामग्री प्राप्त करें
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative bg-gray-50 rounded-xl p-6">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                5
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  समर्पित सहायता
                </h4>
                <p className="text-gray-600">
                  आपकी यात्रा में निरंतर मार्गदर्शन और सहायता
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative bg-gray-50 rounded-xl p-6">
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                6
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  व्यवसाय शुरू करें
                </h4>
                <p className="text-gray-600">
                  सफल पार्टनर के रूप में अपनी यात्रा आरंभ करें
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-6">
            रुचि रखते हैं? आज ही संपर्क करें!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918787037469">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                फोन करें
              </button>
            </a>
            <a href="mailto:dr.nripendra.nns@gmail.com">
              <button className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                ईमेल करें
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}