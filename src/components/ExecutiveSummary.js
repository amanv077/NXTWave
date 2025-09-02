export default function ExecutiveSummary() {
  return (
    <section id="summary" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-gray-100 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Executive Summary
        </h2>
        <p className="text-gray-800 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 text-center max-w-5xl mx-auto font-light px-2">
          NxtWave is a leading EdTech company revolutionizing tech education in India, particularly in Tier-2 and Tier-3 cities.
          Founded with a mission to bridge the skill gap in the Indian tech industry, NxtWave has rapidly scaled to serve over 100,000 students
          while achieving profitability in a challenging market. This case study explores the company's product strategy, market positioning,
          and the dual narratives that shape its perception in the industry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 sm:mb-2">$33M</div>
            <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">Series A Funding (2023)</p>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 sm:mb-2">100,000+</div>
            <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">Students Trained</p>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 sm:mb-2">2,000+</div>
            <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">Hiring Companies</p>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 sm:mb-2">$230M</div>
            <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">Post-Money Valuation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
