import { Shield, Award, Users, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              हमारे बारे में
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-orange-600">
                विस्तारा प्रीमियम सोलर एजेंसी
              </span>{" "}
              APN Solar के साथ मिलकर बनारस और आसपास के क्षेत्रों में स्वच्छ और
              नवीकरणीय ऊर्जा समाधान प्रदान कर रही है।
            </p>
            <p className="text-lg text-gray-700 mb-4">
              APN Solar भारत की अग्रणी सौर ऊर्जा कंपनी है और पीएम सूर्य घर मुफ्त
              बिजली योजना में गर्व से भागीदार है। राष्ट्रीय पोर्टल पर पंजीकृत
              होकर, हम पूरे भारत में ग्राहकों के लिए सरकारी सब्सिडी तक निर्बाध
              पहुंच की सुविधा प्रदान करते हैं।
            </p>
            <p className="text-lg text-gray-700 mb-6">
              सोलर प्रौद्योगिकी, इंजीनियरिंग और परियोजना प्रबंधन में विशेषज्ञता
              रखने वाले उत्साही पेशेवरों की टीम द्वारा संचालित, हम एक हरित और
              अधिक टिकाऊ पृथ्वी बनाने के लिए समर्पित हैं।
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/solar-projects-gallery.jpg"
              alt="Solar Projects"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-lg">वर्षों की वारंटी</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            प्रमाणन और मान्यता
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">ISO Certified</h4>
              <p className="text-gray-600 text-sm">
                ISO 9001:2015, ISO 45001:2018, ISO 14001:2015
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">OEM Certified</h4>
              <p className="text-gray-600 text-sm">
                TUV-Rhineland & BIS Certified Manufacturer
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">पुरस्कार विजेता</h4>
              <p className="text-gray-600 text-sm">
                भारत में पुरस्कार विजेता मान्यता
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            हमारी विशेषज्ञता के क्षेत्र
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                डिज़ाइन और इंजीनियरिंग
              </h4>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">परियोजना प्रबंधन</h4>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">सामग्री की आपूर्ति</h4>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                निर्माण और कमीशनिंग
              </h4>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">संचालन और रखरखाव</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}