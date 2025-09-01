export default function Roadmap() {
  return (
    <section id="roadmap" className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Strategic Product Roadmap</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          Looking ahead, NxtWave has multiple opportunities to evolve its product ecosystem and strengthen its market position.
          The roadmap focuses on addressing current weaknesses while capitalizing on emerging opportunities.
        </p>
        <div className="relative">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
              <div className="ml-6">
                <div className="text-sm font-semibold text-blue-600 mb-1">Q1-Q2 2025</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Optimize Core Product</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Implement AI-powered doubt resolution system</li>
                  <li>Launch verified placement tracking dashboard</li>
                  <li>Enhance mentor matching algorithm</li>
                  <li>Introduce modular course structure</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2"></div>
              <div className="ml-6">
                <div className="text-sm font-semibold text-green-600 mb-1">Q3-Q4 2025</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expand Product Portfolio</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Launch advanced specializations (AI/ML, DevOps)</li>
                  <li>Develop B2B corporate training solutions</li>
                  <li>Create industry-specific career tracks</li>
                  <li>Introduce micro-credentialing system</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
              <div className="ml-6">
                <div className="text-sm font-semibold text-purple-600 mb-1">2026-2027</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Build Comprehensive Ecosystem</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Launch NxtWave Pro subscription platform</li>
                  <li>Develop freelance marketplace for graduates</li>
                  <li>Create startup incubation program</li>
                  <li>Establish alumni network and career services</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
              <div className="ml-6">
                <div className="text-sm font-semibold text-orange-600 mb-1">2027+</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Scale & Innovate</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Expand to international markets</li>
                  <li>Integrate emerging technologies (AR/VR, Metaverse)</li>
                  <li>Develop predictive career guidance AI</li>
                  <li>Establish research partnerships with universities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
