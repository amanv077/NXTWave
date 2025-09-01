export default function ExecutiveSummary() {
  return (
    <section id="summary" className="mb-20">
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Executive Summary
        </h2>
        <p className="text-gray-800 text-xl leading-relaxed mb-12 text-center max-w-5xl mx-auto font-light">
          NxtWave is a leading EdTech company revolutionizing tech education in India, particularly in Tier-2 and Tier-3 cities.
          Founded with a mission to bridge the skill gap in the Indian tech industry, NxtWave has rapidly scaled to serve over 100,000 students
          while achieving profitability in a challenging market. This case study explores the company's product strategy, market positioning,
          and the dual narratives that shape its perception in the industry.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-slate-800 mb-2">$33M</div>
            <p className="text-slate-600 font-medium">Series A Funding (2023)</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-slate-800 mb-2">100,000+</div>
            <p className="text-slate-600 font-medium">Students Trained</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-slate-800 mb-2">2,000+</div>
            <p className="text-slate-600 font-medium">Hiring Companies</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-slate-800 mb-2">$230M</div>
            <p className="text-slate-600 font-medium">Post-Money Valuation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
