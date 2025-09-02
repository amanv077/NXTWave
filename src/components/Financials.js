export default function Financials() {
  return (
    <section id="financials" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Financial Performance</h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto px-2">
          NxtWave's financial trajectory demonstrates impressive growth and profitability in the competitive EdTech sector.
          The company's ability to scale while maintaining healthy margins is a testament to its operational efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-3 sm:mb-4">Revenue & Profit Growth</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">FY22 Revenue</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">₹301.8 Cr</span>
              </div>
              <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">FY24 Revenue</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">₹1400 Cr</span>
              </div>
              <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">FY22 Profit</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">₹26 Cr</span>
              </div>
              <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                <span className="font-semibold text-gray-800 text-sm sm:text-base">FY24 Profit</span>
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">₹128.4 Cr</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-3 sm:mb-4">Funding Rounds</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Seed Round (Nov 2021)</span>
                  <span className="text-lg sm:text-xl font-bold text-orange-600">$2.84M</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Initial funding to validate product-market fit and expand operations.</p>
              </div>
              <div className="p-3 sm:p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Series A (Feb 2023)</span>
                  <span className="text-lg sm:text-xl font-bold text-red-600">$33M</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Major investment round led by top-tier VC firms to fuel aggressive expansion.</p>
              </div>
              <div className="p-3 sm:p-4 bg-white rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">Post-Money Valuation</span>
                  <span className="text-lg sm:text-xl font-bold text-purple-600">$230M</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Current valuation reflecting strong market position and growth potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
