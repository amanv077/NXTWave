export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 relative">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-7xl md:text-8xl font-bold mb-8 text-white tracking-tight">
          NxtWave
        </h1>
        <p className="text-xl md:text-2xl mb-16 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
          Transforming Careers Through Innovative Tech Education
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
            <div className="text-5xl font-bold text-white mb-3">$230M</div>
            <div className="text-slate-200 font-medium text-lg">Post-Money Valuation</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
            <div className="text-5xl font-bold text-white mb-3">100,000+</div>
            <div className="text-slate-200 font-medium text-lg">Students Trained</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
            <div className="text-5xl font-bold text-white mb-3">2,000+</div>
            <div className="text-slate-200 font-medium text-lg">Hiring Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
