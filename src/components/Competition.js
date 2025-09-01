export default function Competition() {
  return (
    <section id="competition" className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Competitive Landscape</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          The Indian coding bootcamp market is highly competitive, with distinct business models creating different risk profiles
          for students and institutions. Understanding these differences is crucial for strategic positioning.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left font-bold text-gray-900 border-b">Aspect</th>
                <th className="px-6 py-4 text-left font-bold text-blue-800 border-b bg-blue-50">NxtWave</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900 border-b">Masai School</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900 border-b">Coding Ninjas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b font-semibold text-gray-800">Business Model</td>
                <td className="px-6 py-4 border-b text-blue-700 bg-blue-50 font-medium">Upfront Fee</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">ISA (Income Share Agreement)</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">Upfront Fee with EMI</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b font-semibold text-gray-800">Risk Allocation</td>
                <td className="px-6 py-4 border-b text-blue-700 bg-blue-50 font-medium">Student bears primary risk</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">Institution bears outcome risk</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">Student bears primary risk</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b font-semibold text-gray-800">Target Audience</td>
                <td className="px-6 py-4 border-b text-blue-700 bg-blue-50 font-medium">Tier-2/3 city students</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">Pan-India, outcome-focused</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">Urban students, college-focused</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b font-semibold text-gray-800">Pricing Strategy</td>
                <td className="px-6 py-4 border-b text-blue-700 bg-blue-50 font-medium">₹3-5 LPA (affordable)</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">No upfront cost</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">₹2-4 LPA (competitive)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b font-semibold text-gray-800">Placement Focus</td>
                <td className="px-6 py-4 border-b text-blue-700 bg-blue-50 font-medium">Dedicated placement team</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">ISA-based placement guarantee</td>
                <td className="px-6 py-4 border-b text-gray-800 font-medium">Extensive placement network</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
