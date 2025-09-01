export default function ProductDeepDive() {
  return (
    <section id="product" className="mb-12 sm:mb-16 lg:mb-20">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Product Deep Dive: CCBP 4.0
        </h2>
        <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 text-center max-w-5xl mx-auto font-light px-2">
          NxtWave's flagship product, CCBP 4.0 (Continuous Career Building Programs), is a comprehensive learning platform
          designed to transform non-technical graduates into employable software developers. The product combines structured
          curriculum, vernacular language support, and placement assistance to address the unique challenges of the Indian job market.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Structured Learning Path</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">A carefully designed curriculum that builds skills progressively from fundamentals to advanced topics, preventing overwhelm and ensuring steady progress.</p>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Vernacular Language Support</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Content delivery in regional languages (Telugu, Hindi, Tamil) alongside English, making tech education accessible to students from non-English speaking backgrounds.</p>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Hands-On Projects</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Real-world project portfolio including popular applications like Zomato Clone and Wikipedia Search, providing practical experience for job applications.</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Live Doubt Clarification</h3>
            <p className="text-gray-700 leading-relaxed">24/7 support system for instant help with coding challenges, designed to keep students motivated and prevent learning plateaus.</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Placement Assistance Program</h3>
            <p className="text-gray-700 leading-relaxed">Comprehensive career support including resume building, interview preparation, and direct connections with hiring companies.</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Community & Mentorship</h3>
            <p className="text-gray-700 leading-relaxed">Active learning community with peer support and mentorship programs to foster collaboration and continuous learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
