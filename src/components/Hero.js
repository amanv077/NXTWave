export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-20 lg:py-28 xl:py-36 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 lg:mb-16">
          <div className="relative mb-6 sm:mb-8">
            {/* Elegant circular background */}
            <div className="bg-white rounded-full p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100">
              <img 
                src="/logo.png" 
                alt="NxtWave Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
              />
            </div>
          </div>
          
          {/* Classic typography */}
          <div className="text-center max-w-4xl mx-auto px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white mb-4 sm:mb-6 tracking-wide leading-tight">
              Transforming Careers Through 
              <span className="block font-medium">Innovative Tech Education</span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-white/40 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Excellence in education, innovation in approach, success in outcomes
            </p>
          </div>
        </div>
        {/* Elegant stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2 sm:mb-3 font-serif">$230M</div>
              <div className="text-slate-300 font-light text-xs sm:text-sm lg:text-base tracking-wide uppercase">Post-Money Valuation</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2 sm:mb-3 font-serif">100,000+</div>
              <div className="text-slate-300 font-light text-xs sm:text-sm lg:text-base tracking-wide uppercase">Students Trained</div>
            </div>
          </div>
          <div className="text-center group sm:col-span-2 lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2 sm:mb-3 font-serif">2,000+</div>
              <div className="text-slate-300 font-light text-xs sm:text-sm lg:text-base tracking-wide uppercase">Hiring Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
