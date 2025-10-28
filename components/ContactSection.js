"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-600 hover:bg-orange-700 text-white mb-4 text-sm px-4 py-1">
            संपर्क करें
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            हमसे जुड़ें
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            सोलर ऊर्जा की यात्रा शुरू करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">संपर्क जानकारी</CardTitle>
              <CardDescription>हमसे कैसे संपर्क करें</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">पहला पता</h4>
                  <p className="text-gray-700 leading-relaxed">
                    NH-56, बाबतपुर एयरपोर्ट रोड
                    <br />
                    (उड़िया बाबा इंटर कॉलेज)
                    <br />
                    बैजलपट्टी, हरहुआ, वाराणसी
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    दूसरा पता
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    NH-56, बाबतपुर एयरपोर्ट रोड
                    <br />
                    (पिलर नंबर 25)
                    <br />
                    बैजलपट्टी, हरहुआ, वाराणसी
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-100 to-green-50 p-3 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    फोन / व्हाट्सऐप
                  </h4>
                  <div className="space-y-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-green-200 hover:bg-green-50"
                    >
                      <a
                        href="https://wa.me/918787037469"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Phone className="h-4 w-4 mr-2 text-green-600" />
                        WhatsApp: +91 87870 37469
                      </a>
                    </Button>
                    <div className="space-y-1 pl-2">
                      <a
                        href="tel:+918787037469"
                        className="block text-sm text-gray-700 hover:text-orange-600"
                      >
                        +91 87870 37469
                      </a>
                      <a
                        href="tel:+919452761759"
                        className="block text-sm text-gray-700 hover:text-orange-600"
                      >
                        +91 94527 61759
                      </a>
                      <a
                        href="tel:+919936379959"
                        className="block text-sm text-gray-700 hover:text-orange-600"
                      >
                        +91 99363 79959
                      </a>
                      <a
                        href="tel:+919452206759"
                        className="block text-sm text-gray-700 hover:text-orange-600"
                      >
                        +91 94522 06759
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-xl flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">ईमेल</h4>
                  <a
                    href="mailto:dr.nripendra.nns@gmail.com"
                    className="text-gray-700 hover:text-orange-600"
                  >
                    dr.nripendra.nns@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">संदेश भेजें</CardTitle>
              <CardDescription>हम 24 घंटे में जवाब देंगे</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    नाम*
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="आपका नाम"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    फ़ोन नंबर*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="फ़ोन नंबर"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    विषय*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="विषय"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ईमेल (वैकल्पिक)
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="ईमेल (वैकल्पिक)"
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    संदेश*
                  </label>
                  <textarea
                    name="message"
                    placeholder="आपका संदेश"
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white placeholder-gray-400 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin mr-2"
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
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
