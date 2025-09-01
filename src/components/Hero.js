export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <img 
              src="/logo.png" 
              alt="NxtWave Logo" 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light px-2">
          Transforming Careers Through Innovative Tech Education
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">$230M</div>
            <div className="text-slate-200 font-medium text-base sm:text-lg">Post-Money Valuation</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">100,000+</div>
            <div className="text-slate-200 font-medium text-base sm:text-lg">Students Trained</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl sm:col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">2,000+</div>
            <div className="text-slate-200 font-medium text-base sm:text-lg">Hiring Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
