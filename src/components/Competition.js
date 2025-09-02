export default function Competition() {
  return (
    <section id="competition" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Competitive Landscape</h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto px-2">
          The Indian coding bootcamp market is highly competitive, with distinct business models creating different risk profiles
          for students and institutions. Understanding these differences is crucial for strategic positioning.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-bold text-gray-900 border-b text-xs sm:text-sm">Aspect</th>
                <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-bold text-blue-800 border-b bg-blue-50 text-xs sm:text-sm">NxtWave</th>
                <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-bold text-gray-900 border-b text-xs sm:text-sm">Masai School</th>
                <th className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-bold text-gray-900 border-b text-xs sm:text-sm">Coding Ninjas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b font-semibold text-gray-800 text-xs sm:text-sm">Business Model</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-blue-700 bg-blue-50 font-medium text-xs sm:text-sm">Upfront Fee</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">ISA (Income Share Agreement)</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">Upfront Fee with EMI</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b font-semibold text-gray-800 text-xs sm:text-sm">Risk Allocation</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-blue-700 bg-blue-50 font-medium text-xs sm:text-sm">Student bears primary risk</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">Institution bears outcome risk</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">Student bears primary risk</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b font-semibold text-gray-800 text-xs sm:text-sm">Target Audience</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-blue-700 bg-blue-50 font-medium text-xs sm:text-sm">Tier-2/3 city students</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">Pan-India, outcome-focused</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">Urban students, college-focused</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b font-semibold text-gray-800 text-xs sm:text-sm">Pricing Strategy</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-blue-700 bg-blue-50 font-medium text-xs sm:text-sm">₹3-5 LPA (affordable)</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">No upfront cost</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">₹2-4 LPA (competitive)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b font-semibold text-gray-800 text-xs sm:text-sm">Placement Focus</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-blue-700 bg-blue-50 font-medium text-xs sm:text-sm">Dedicated placement team</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">ISA-based placement guarantee</td>
                <td className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b text-gray-800 font-medium text-xs sm:text-sm">Extensive placement network</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
