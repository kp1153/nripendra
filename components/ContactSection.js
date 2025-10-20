"use client";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace YOUR_FORM_ID with your actual Formspree Form ID
      const FORMSPREE_ID = "YOUR_FORM_ID";
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        alert("धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        alert("कुछ समस्या हुई। कृपया बाद में कोशिश करें।");
      }
    } catch (error) {
      setSubmitStatus("error");
      alert("कुछ समस्या हुई। कृपया बाद में कोशिश करें।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            संपर्क करें
          </h2>
          <p className="text-lg text-gray-600">
            हमसे जुड़ें और सोलर ऊर्जा की यात्रा शुरू करें
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              हमें संदेश भेजें
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  नाम *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="अपना नाम दर्ज करें"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ईमेल *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="आपका ईमेल"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  मोबाइल नंबर *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="आपका मोबाइल नंबर"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  विषय
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="विषय"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  संदेश *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="अपना संदेश लिखें"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                {isSubmitting ? "भेज रहे हैं..." : "संदेश भेजें"}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              संपर्क जानकारी
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">पता</h4>
                  <p className="text-gray-600">
                    NH-56, बाबतपुर एयरपोर्ट रोड
                    <br />
                    (इंडिया बाबा इंटर कॉलेज)
                    <br />
                    बैजलपट्टी, हरहुआ, वाराणसी
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">फोन</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+918787037469"
                      className="hover:text-orange-600"
                    >
                      +91 87870 37469
                    </a>
                    <br />
                    <a
                      href="tel:+919452761759"
                      className="hover:text-orange-600"
                    >
                      +91 94527 61759
                    </a>
                    <br />
                    <a
                      href="tel:+919936379959"
                      className="hover:text-orange-600"
                    >
                      +91 99363 79959
                    </a>
                    <br />
                    <a
                      href="tel:+919452206759"
                      className="hover:text-orange-600"
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
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">ईमेल</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:dr.nripendra.nns@gmail.com"
                      className="hover:text-orange-600"
                    >
                      dr.nripendra.nns@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    कार्य समय
                  </h4>
                  <p className="text-gray-600">
                    सोमवार - शनिवार: 9:00 AM - 7:00 PM
                    <br />
                    रविवार: बंद
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.3!2d82.89611!3d25.38833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIzJzE3LjgiTiA4MsKwNTMnNDQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
