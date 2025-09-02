export default function SWOT() {
  return (
    <section id="swot" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">SWOT Analysis</h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto px-2">
          A comprehensive strategic analysis reveals NxtWave's current position and future potential in the evolving EdTech landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-4 sm:p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-700 mb-3 sm:mb-4">Strengths</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li><strong>Market Leadership:</strong> Dominant position in vernacular tech education</li>
              <li><strong>Financial Health:</strong> Profitable operations with strong VC backing</li>
              <li><strong>Brand Recognition:</strong> Established presence across social media platforms</li>
              <li><strong>Scalable Model:</strong> Digital-first approach enables rapid expansion</li>
              <li><strong>Government Support:</strong> Official partnerships with NSDC and NASSCOM</li>
            </ul>
          </div>
          <div className="p-4 sm:p-6 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">Weaknesses</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li><strong>Reputation Risk:</strong> Negative reviews impacting brand perception</li>
              <li><strong>Quality Control:</strong> Challenges in maintaining consistent support at scale</li>
              <li><strong>Outcome Verification:</strong> Questions about actual placement success rates</li>
              <li><strong>Content Updates:</strong> Need for continuous curriculum modernization</li>
            </ul>
          </div>
          <div className="p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-700 mb-3 sm:mb-4">Opportunities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li><strong>Market Expansion:</strong> Untapped potential in smaller cities and new segments</li>
              <li><strong>Product Diversification:</strong> B2B solutions and advanced certifications</li>
              <li><strong>Technology Integration:</strong> AI-powered learning and assessment tools</li>
              <li><strong>International Growth:</strong> Similar markets in Southeast Asia</li>
              <li><strong>Policy Support:</strong> Government initiatives for skill development</li>
            </ul>
          </div>
          <div className="p-4 sm:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-700 mb-3 sm:mb-4">Threats</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li><strong>Competition:</strong> New entrants and established players in EdTech space</li>
              <li><strong>Economic Factors:</strong> Impact of inflation on education spending</li>
              <li><strong>Regulatory Changes:</strong> Evolving education and consumer protection laws</li>
              <li><strong>Technology Disruption:</strong> Emerging AI and automation in education</li>
              <li><strong>Market Saturation:</strong> Potential oversupply of coding bootcamps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
