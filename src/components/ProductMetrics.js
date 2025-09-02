export default function ProductMetrics() {
  return (
    <section id="metrics" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Product Metrics Dashboard</h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto px-2">
          Key performance indicators reveal the health of NxtWave's product ecosystem. While enrollment numbers are strong,
          user satisfaction and placement outcomes present opportunities for improvement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-3 sm:mb-4">User Satisfaction (NPS)</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-medium text-sm sm:text-base">Detractors (45%)</span>
                <div className="w-24 sm:w-32 bg-red-200 rounded-full h-3 sm:h-4">
                  <div className="bg-red-600 h-3 sm:h-4 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-medium text-sm sm:text-base">Passives (30%)</span>
                <div className="w-24 sm:w-32 bg-yellow-200 rounded-full h-3 sm:h-4">
                  <div className="bg-yellow-600 h-3 sm:h-4 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-medium text-sm sm:text-base">Promoters (20%)</span>
                <div className="w-24 sm:w-32 bg-green-200 rounded-full h-3 sm:h-4">
                  <div className="bg-green-600 h-3 sm:h-4 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <div className="text-center mt-3 sm:mt-4">
                <div className="text-xl sm:text-2xl font-bold text-red-600">NPS: -25</div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-3 sm:mb-4">Placement Success Rate</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium text-sm sm:text-base">Claimed Rate</span>
                <div className="text-xl sm:text-2xl font-bold text-blue-600">90%</div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-medium text-sm sm:text-base">User-Reported Rate</span>
                <div className="text-xl sm:text-2xl font-bold text-orange-600">35%</div>
              </div>
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-xs sm:text-sm text-yellow-800">
                  <strong>Gap Analysis:</strong> Significant discrepancy between claimed and reported placement rates indicates
                  potential issues with measurement methodology or actual outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg sm:text-xl font-bold text-center text-gray-900 mb-3 sm:mb-4">Common User Feedback</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-red-600">9/10</div>
              <p className="text-xs sm:text-sm text-gray-800 font-medium">Placement Support</p>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl font-bold text-red-600">8/10</div>
              <p className="text-xs sm:text-sm text-gray-800 font-medium">Course Quality</p>
            </div>
            <div className="text-center">
              <div class="text-lg sm:text-2xl font-bold text-red-600">7/10</div>
              <p class="text-xs sm:text-sm text-gray-800 font-medium">Mentor Availability</p>
            </div>
            <div class="text-center">
              <div class="text-lg sm:text-2xl font-bold text-red-600">9/10</div>
              <p class="text-xs sm:text-sm text-gray-800 font-medium">Sales Promises</p>
            </div>
            <div class="text-center">
              <div class="text-lg sm:text-2xl font-bold text-red-600">4/10</div>
              <p class="text-xs sm:text-sm text-gray-800 font-medium">Community Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
