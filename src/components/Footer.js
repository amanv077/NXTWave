export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">NxtWave Case Study</h3>
        <p className="mb-6 text-slate-200 max-w-2xl mx-auto leading-relaxed">
          A deep dive into NxtWave's journey - from startup to market leader in tech education.
          This isn't just data and charts; it's about understanding what really works in the Indian EdTech space.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="font-semibold mb-2 text-slate-100">What I Analyzed</div>
            <div className="text-slate-300 text-sm">Market fit • Competition • User needs • Growth potential</div>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="font-semibold mb-2 text-slate-100">Key Takeaways</div>
            <div className="text-slate-300 text-sm">Success factors • Challenges faced • Future opportunities</div>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <div className="font-semibold mb-2 text-slate-100">Ready to Present</div>
            <div className="text-slate-300 text-sm">Clean design • Clear insights • Actionable recommendations</div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-700 text-sm text-slate-400">
          Built with Next.js • Styled with Tailwind • Made for product management skills Portfolio
        </div>
      </div>
    </footer>
  );
}
