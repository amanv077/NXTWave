export default function ProductMetrics() {
  return (
    <section id="metrics" className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Product Metrics Dashboard</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          Key performance indicators reveal the health of NxtWave's product ecosystem. While enrollment numbers are strong,
          user satisfaction and placement outcomes present opportunities for improvement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">User Satisfaction (NPS)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-medium">Detractors (45%)</span>
                <div className="w-32 bg-red-200 rounded-full h-4">
                  <div className="bg-red-600 h-4 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-medium">Passives (30%)</span>
                <div className="w-32 bg-yellow-200 rounded-full h-4">
                  <div className="bg-yellow-600 h-4 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-medium">Promoters (20%)</span>
                <div className="w-32 bg-green-200 rounded-full h-4">
                  <div className="bg-green-600 h-4 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold text-red-600">NPS: -25</div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Placement Success Rate</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-medium">Claimed Rate</span>
                <div className="text-2xl font-bold text-blue-600">90%</div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-medium">User-Reported Rate</span>
                <div className="text-2xl font-bold text-orange-600">35%</div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Gap Analysis:</strong> Significant discrepancy between claimed and reported placement rates indicates
                  potential issues with measurement methodology or actual outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Common User Feedback</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">9/10</div>
              <p className="text-sm text-gray-800 font-medium">Placement Support</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">8/10</div>
              <p className="text-sm text-gray-800 font-medium">Course Quality</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">7/10</div>
              <p className="text-sm text-gray-800 font-medium">Mentor Availability</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">9/10</div>
              <p className="text-sm text-gray-800 font-medium">Sales Promises</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">4/10</div>
              <p className="text-sm text-gray-800 font-medium">Community Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
