export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 sm:py-28 lg:py-36 relative overflow-hidden">
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
        <div className="flex flex-col items-center justify-center mb-16 sm:mb-20">
          <div className="relative mb-8">
            {/* Elegant circular background */}
            <div className="bg-white rounded-full p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100">
              <img 
                src="/logo.png" 
                alt="NxtWave Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"
              />
            </div>
          </div>
          
          {/* Classic typography */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 tracking-wide leading-tight">
              Transforming Careers Through 
              <span className="block font-medium">Innovative Tech Education</span>
            </h1>
            <div className="w-24 h-px bg-white/40 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Excellence in education, innovation in approach, success in outcomes
            </p>
          </div>
        </div>
        {/* Elegant stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-light text-white mb-3 font-serif">$230M</div>
              <div className="text-slate-300 font-light text-sm sm:text-base tracking-wide uppercase">Post-Money Valuation</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-light text-white mb-3 font-serif">100,000+</div>
              <div className="text-slate-300 font-light text-sm sm:text-base tracking-wide uppercase">Students Trained</div>
            </div>
          </div>
          <div className="text-center group sm:col-span-2 md:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-light text-white mb-3 font-serif">2,000+</div>
              <div className="text-slate-300 font-light text-sm sm:text-base tracking-wide uppercase">Hiring Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
