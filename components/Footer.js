import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              &copy; 2025 विस्तारा प्रीमियम सोलर एजेंसी। सर्वाधिकार सुरक्षित।
            </p>
            <p className="mt-2 md:mt-0">
              Web Developer:{" "}
              <a
                href="https://www.web-developer-kp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors"
              >
                कामता प्रसाद
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
