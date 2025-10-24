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
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">संपर्क करें</h2>
          <p className="text-lg text-gray-600">
            हमसे जुड़ें और सोलर ऊर्जा की यात्रा शुरू करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-6">संपर्क जानकारी</h3>

            {/* पहला पता (original) */}
            <div className="flex items-start mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-gray-700">
                NH-56, बाबतपुर एयरपोर्ट रोड
                <br />
                (उड़िया बाबा इंटर कॉलेज)
                <br />
                बैजलपट्टी, हरहुआ, वाराणसी
              </p>
            </div>

            {/* दूसरा पता (added) */}
            <div className="flex items-start mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-gray-700">
                NH-56, बाबतपुर एयरपोर्ट रोड
                <br />
                (पिलर नंबर 25)
                <br />
                बैजलपट्टी, हरहुआ, वाराणसी
              </p>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-gray-700">
                <p>
                  <a
                    href="https://wa.me/918787037469"
                    className="text-green-600 font-semibold block"
                  >
                    WhatsApp: +91 87870 37469
                  </a>
                </p>
                <p className="mt-2">
                  <a
                    href="tel:+918787037469"
                    className="block hover:text-orange-600"
                  >
                    +91 87870 37469
                  </a>
                  <a
                    href="tel:+919452761759"
                    className="block hover:text-orange-600"
                  >
                    +91 94527 61759
                  </a>
                  <a
                    href="tel:+919936379959"
                    className="block hover:text-orange-600"
                  >
                    +91 99363 79959
                  </a>
                  <a
                    href="tel:+919452206759"
                    className="block hover:text-orange-600"
                  >
                    +91 94522 06759
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-lg mr-4">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-gray-700">dr.nripendra.nns@gmail.com</p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gray-50 p-8 rounded-xl shadow"
          >
            <h3 className="text-2xl font-bold mb-6">संदेश भेजें</h3>

            <input
              type="text"
              name="from_name"
              placeholder="आपका नाम*"
              required
              className="w-full p-3 mb-4 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="फ़ोन नंबर*"
              required
              className="w-full p-3 mb-4 border rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="विषय*"
              required
              className="w-full p-3 mb-4 border rounded"
            />
            <input
              type="email"
              name="from_email"
              placeholder="ईमेल (वैकल्पिक)"
              className="w-full p-3 mb-4 border rounded"
            />
            <textarea
              name="message"
              placeholder="आपका संदेश*"
              required
              className="w-full p-3 mb-4 border rounded h-28"
            ></textarea>

            <button
              disabled={loading}
              className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
            >
              {loading ? "भेजा जा रहा है..." : "भेजें"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
