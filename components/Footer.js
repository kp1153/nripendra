import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              विस्तारा प्रीमियम सोलर एजेंसी
            </h3>
            <p className="text-sm mb-4">
              बनारस और आसपास के क्षेत्रों में सोलर ऊर्जा समाधान का विश्वसनीय नाम
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              त्वरित लिंक
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  होम
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  सोलर बिजनेस क्यों
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  गैलरी
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              हमारे उत्पाद
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  ऑनग्रिड सोलर
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  ऑफग्रिड सोलर
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  हाइब्रिड सोलर
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  सोलर स्ट्रीट लाइट
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  सोलर वॉटर पंप
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              संपर्क जानकारी
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-orange-500" />
                <span className="text-sm">
                  NH-56, बाबतपुर एयरपोर्ट रोड
                  <br />
                  बनारस, उत्तर प्रदेश
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-orange-500" />
                <a
                  href="tel:+918787037469"
                  className="text-sm hover:text-orange-500"
                >
                  +91 87870 37469
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-orange-500" />
                <a
                  href="mailto:dr.nripendra.nns@gmail.com"
                  className="text-sm hover:text-orange-500"
                >
                  dr.nripendra.nns@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              &copy; 2025 विस्तारा प्रीमियम सोलर एजेंसी। सर्वाधिकार सुरक्षित।
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500 transition-colors">
                गोपनीयता नीति
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                नियम और शर्तें
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
