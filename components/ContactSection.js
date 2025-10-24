"use client";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              संपर्क जानकारी
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* पहला पता */}
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">पता</h4>
                  <p className="text-gray-600">
                    NH-56, बाबतपुर एयरपोर्ट रोड
                    <br />
                    (उड़िया बाबा इंटर कॉलेज)
                    <br />
                    बैजलपट्टी, हरहुआ, वाराणसी
                  </p>
                </div>
              </div>

              {/* दूसरा पता */}
              <div className="flex items-start mt-4">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">पता</h4>
                  <p className="text-gray-600">
                    NH-56, बाबतपुर एयरपोर्ट रोड
                    <br />
                    (पिलर नंबर 25 के सामने)
                    <br />
                    बैजलपट्टी, हरहुआ, वाराणसी
                  </p>
                </div>
              </div>

              {/* फोन */}
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">फोन</h4>
                  <p className="text-gray-600 space-y-1">
                    <a
                      href="tel:+918787037469"
                      className="hover:text-orange-600 block"
                    >
                      +91 87870 37469
                    </a>
                    <a
                      href="tel:+919452761759"
                      className="hover:text-orange-600 block"
                    >
                      +91 94527 61759
                    </a>
                    <a
                      href="tel:+919936379959"
                      className="hover:text-orange-600 block"
                    >
                      +91 99363 79959
                    </a>
                    <a
                      href="tel:+919452206759"
                      className="hover:text-orange-600 block"
                    >
                      +91 94522 06759
                    </a>
                  </p>
                </div>
              </div>

              {/* ईमेल */}
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
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
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
    </section>
  );
}
