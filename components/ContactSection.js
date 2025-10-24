"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_45dxuc4",
        "template_t2ry7vg",
        form.current,
        "yF3fvDRlO8cZIj5-V"
      )
      .then(
        () => {
          alert("संदेश सफलतापूर्वक भेजा गया ✅");
          form.current.reset();
        },
        () => {
          alert("भेजने में समस्या हुई, दोबारा कोशिश करें ❗");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            संपर्क करें
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            हमसे जुड़ें और सोलर ऊर्जा की यात्रा शुरू करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              संपर्क जानकारी
            </h3>

            {/* पहला पता (original) */}
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-lg mr-4 shadow-sm">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">पता</h4>
                <p className="text-gray-700 leading-relaxed">
                  NH-56, बाबतपुर एयरपोर्ट रोड
                  <br />
                  (उड़िया बाबा इंटर कॉलेज)
                  <br />
                  बैजलपट्टी, हरहुआ, वाराणसी
                </p>
              </div>
            </div>

            {/* दूसरा पता (added) */}
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-lg mr-4 shadow-sm">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">दूसरा पता</h4>
                <p className="text-gray-700 leading-relaxed">
                  NH-56, बाबतपुर एयरपोर्ट रोड
                  <br />
                  (पिलर नंबर 25)
                  <br />
                  बैजलपट्टी, हरहुआ, वाराणसी
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-lg mr-4 shadow-sm">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  फोन / व्हाट्सऐप
                </h4>
                <div className="text-gray-700">
                  <a
                    href="https://wa.me/918787037469"
                    className="inline-block text-green-700 font-semibold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp: +91 87870 37469
                  </a>

                  <div className="mt-3 space-y-1">
                    <a
                      href="tel:+918787037469"
                      className="block text-gray-800 hover:text-orange-600"
                    >
                      +91 87870 37469
                    </a>
                    <a
                      href="tel:+919452761759"
                      className="block text-gray-800 hover:text-orange-600"
                    >
                      +91 94527 61759
                    </a>
                    <a
                      href="tel:+919936379959"
                      className="block text-gray-800 hover:text-orange-600"
                    >
                      +91 99363 79959
                    </a>
                    <a
                      href="tel:+919452206759"
                      className="block text-gray-800 hover:text-orange-600"
                    >
                      +91 94522 06759
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-lg mr-4 shadow-sm">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">ईमेल</h4>
                <p className="text-gray-700">dr.nripendra.nns@gmail.com</p>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              संदेश भेजें
            </h3>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              नाम*
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="आपका नाम"
              required
              className="w-full p-3 mb-4 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              फ़ोन नंबर*
            </label>
            <input
              type="text"
              name="phone"
              placeholder="फ़ोन नंबर"
              required
              className="w-full p-3 mb-4 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              विषय*
            </label>
            <input
              type="text"
              name="subject"
              placeholder="विषय"
              required
              className="w-full p-3 mb-4 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              ईमेल (वैकल्पिक)
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="ईमेल (वैकल्पिक)"
              className="w-full p-3 mb-4 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              संदेश*
            </label>
            <textarea
              name="message"
              placeholder="आपका संदेश"
              required
              className="w-full p-3 mb-6 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 h-36 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
            />

            <button
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  भेजा जा रहा है...
                </>
              ) : (
                "भेजें"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
