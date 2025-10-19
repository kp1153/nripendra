import { DollarSign, TrendingUp, Package } from "lucide-react";

export default function BusinessIncomeSection() {
  const projectIncome = [
    {
      product: "ऑनग्रिड सोलर",
      monthly: "20",
      commission: "15%",
      rate: "₹46,000",
      perKW: "₹6,000",
      earning: "₹1,20,000",
    },
    {
      product: "ऑफग्रिड सोलर",
      monthly: "10",
      commission: "15%",
      rate: "₹78,000",
      perKW: "₹10,174",
      earning: "₹1,01,740",
    },
    {
      product: "सोलर वॉटर पंप",
      monthly: "5",
      commission: "15%",
      rate: "₹72,000",
      perKW: "₹9,391",
      earning: "₹46,955",
    },
  ];

  const productIncome = [
    {
      product: "स्ट्रीट लाइट 20W",
      quantity: "10 नंबर",
      commission: "15%",
      rate: "₹9,000",
      perProduct: "₹1,174",
      earning: "₹11,740",
    },
    {
      product: "वॉटर हीटर 150 LPD",
      quantity: "10 नंबर",
      commission: "15%",
      rate: "₹17,000",
      perProduct: "₹2,217",
      earning: "₹22,170",
    },
    {
      product: "रॉक लाइट",
      quantity: "24 नंबर",
      commission: "15%",
      rate: "₹1,800",
      perProduct: "₹234",
      earning: "₹4,616",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            अनुमानित ROI और व्यवसाय आय
          </h2>
          <p className="text-lg text-gray-600">
            मासिक आय की संभावनाएं और कमीशन विवरण
          </p>
        </div>

        {/* Projects Income */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-orange-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              प्रोजेक्ट्स से आय
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">उत्पाद</th>
                    <th className="px-6 py-4 text-center">मासिक (KW/HP)</th>
                    <th className="px-6 py-4 text-center">कमीशन %</th>
                    <th className="px-6 py-4 text-center">रेट प्रति KW</th>
                    <th className="px-6 py-4 text-center">कमीशन प्रति KW</th>
                    <th className="px-6 py-4 text-right">मासिक आय</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectIncome.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {item.product}
                      </td>
                      <td className="px-6 py-4 text-center">{item.monthly}</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-semibold">
                        {item.commission}
                      </td>
                      <td className="px-6 py-4 text-center">{item.rate}</td>
                      <td className="px-6 py-4 text-center">{item.perKW}</td>
                      <td className="px-6 py-4 text-right font-bold text-green-600">
                        {item.earning}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-orange-50 font-bold">
                    <td colSpan="5" className="px-6 py-4 text-right">
                      कुल प्रोजेक्ट आय:
                    </td>
                    <td className="px-6 py-4 text-right text-xl text-orange-600">
                      ₹2,68,695
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Product Selling Income */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Package className="h-8 w-8 text-orange-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              उत्पाद विक्रय से आय
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">उत्पाद</th>
                    <th className="px-6 py-4 text-center">मासिक मात्रा</th>
                    <th className="px-6 py-4 text-center">कमीशन %</th>
                    <th className="px-6 py-4 text-center">प्रति उत्पाद रेट</th>
                    <th className="px-6 py-4 text-center">
                      प्रति उत्पाद कमीशन
                    </th>
                    <th className="px-6 py-4 text-right">मासिक आय</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {productIncome.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {item.product}
                      </td>
                      <td className="px-6 py-4 text-center">{item.quantity}</td>
                      <td className="px-6 py-4 text-center text-orange-600 font-semibold">
                        {item.commission}
                      </td>
                      <td className="px-6 py-4 text-center">{item.rate}</td>
                      <td className="px-6 py-4 text-center">
                        {item.perProduct}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-green-600">
                        {item.earning}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-orange-50 font-bold">
                    <td colSpan="5" className="px-6 py-4 text-right">
                      कुल उत्पाद आय:
                    </td>
                    <td className="px-6 py-4 text-right text-xl text-orange-600">
                      ₹38,526
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Total Income Summary */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-8 text-white text-center">
          <DollarSign className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            कुल अनुमानित मासिक आय
          </h3>
          <p className="text-5xl md:text-6xl font-bold mb-4">₹3,07,221</p>
          <p className="text-xl">
            वार्षिक आय: <span className="font-bold">₹36,86,652</span>
          </p>
          <p className="mt-4 text-lg opacity-90">
            * यह अनुमानित आय है। वास्तविक आय आपके प्रयास और बाजार की स्थिति पर
            निर्भर करती है।
          </p>
        </div>
      </div>
    </section>
  );
}
