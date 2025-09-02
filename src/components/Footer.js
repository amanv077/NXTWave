export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">NxtWave Case Study</h3>
        <p className="mb-4 sm:mb-6 text-slate-200 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
          A deep dive into NxtWave's journey - from startup to market leader in tech education.
          This isn't just data and charts; it's about understanding what really works in the Indian EdTech space.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2">
          <div className="p-3 sm:p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="font-semibold mb-1 sm:mb-2 text-slate-100 text-sm sm:text-base">What I Analyzed</div>
            <div className="text-slate-300 text-xs sm:text-sm">Market fit • Competition • User needs • Growth potential</div>
          </div>
          <div className="p-3 sm:p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="font-semibold mb-1 sm:mb-2 text-slate-100 text-sm sm:text-base">Key Takeaways</div>
            <div className="text-slate-300 text-xs sm:text-sm">Success factors • Challenges faced • Future opportunities</div>
          </div>
          <div className="p-3 sm:p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="font-semibold mb-1 sm:mb-2 text-slate-100 text-sm sm:text-base">Ready to Present</div>
            <div className="text-slate-300 text-xs sm:text-sm">Clean design • Clear insights • Actionable recommendations</div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700 text-xs sm:text-sm text-slate-400">
          Built with Next.js • Styled with Tailwind • Made for product management skills Portfolio
        </div>
      </div>
    </footer>
  );
}
