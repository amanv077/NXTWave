export default function ProductDeepDive() {
  return (
    <section id="product" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-gray-100 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Product Deep Dive: CCBP 4.0
        </h2>
        <p className="text-gray-800 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 text-center max-w-5xl mx-auto font-light px-2">
          NxtWave's flagship product, CCBP 4.0 (Continuous Career Building Programs), is a comprehensive learning platform
          designed to transform non-technical graduates into employable software developers. The product combines structured
          curriculum, vernacular language support, and placement assistance to address the unique challenges of the Indian job market.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4">Structured Learning Path</h3>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">A carefully designed curriculum that builds skills progressively from fundamentals to advanced topics, preventing overwhelm and ensuring steady progress.</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4">Vernacular Language Support</h3>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">Content delivery in regional languages (Telugu, Hindi, Tamil) alongside English, making tech education accessible to students from non-English speaking backgrounds.</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4">Hands-On Projects</h3>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">Real-world project portfolio including popular applications like Zomato Clone and Wikipedia Search, providing practical experience for job applications.</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4">Live Doubt Clarification</h3>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">24/7 support system for instant help with coding challenges, designed to keep students motivated and prevent learning plateaus.</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4">Placement Assistance Program</h3>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">Comprehensive career support including resume building, interview preparation, and direct connections with hiring companies.</p>
          </div>
          <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 lg:mb-4">Community & Mentorship</h3>
            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base">Active learning community with peer support and mentorship programs to foster collaboration and continuous learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
