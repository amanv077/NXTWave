'use client';

import { useState } from 'react';

export default function TwoNarratives() {
  const [narrativeView, setNarrativeView] = useState('official');

  return (
    <section id="narrative" className="mb-8 sm:mb-12 lg:mb-16">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">The Duality of Perception</h2>
        <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto font-medium px-2">
          NxtWave operates in a complex ecosystem where external perception and internal reality sometimes diverge.
          This section presents the contrasting narratives that shape stakeholder understanding of the company.
        </p>
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setNarrativeView('official')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all text-sm sm:text-base ${
                narrativeView === 'official'
                  ? 'bg-emerald-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              Official Narrative
            </button>
            <button
              onClick={() => setNarrativeView('counter')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all text-sm sm:text-base ${
                narrativeView === 'counter'
                  ? 'bg-rose-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              Counter Narrative
            </button>
          </div>
        </div>

        {narrativeView === 'official' && (
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">The Success Story</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-emerald-500 text-2xl mr-4">✓</span>
                <div className="text-gray-800">
                  <strong className="text-emerald-900">Industry Recognition:</strong> Named Technology Pioneer 2024 by World Economic Forum,
                  featured in Deloitte Technology Fast 50 India, demonstrating thought leadership in EdTech.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 text-2xl mr-4">✓</span>
                <div className="text-gray-800">
                  <strong className="text-emerald-900">Government Partnerships:</strong> Official collaborations with NSDC and NASSCOM,
                  providing institutional credibility and access to government-funded programs.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 text-2xl mr-4">✓</span>
                <div className="text-gray-800">
                  <strong className="text-emerald-900">Student Success Stories:</strong> Numerous testimonials of career transitions
                  from non-technical backgrounds to high-paying software roles, validating the product value proposition.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 text-2xl mr-4">✓</span>
                <div className="text-gray-800">
                  <strong className="text-emerald-900">Scale & Impact:</strong> 100,000+ students trained, 2,000+ hiring partners,
                  demonstrating significant market penetration and ecosystem influence.
                </div>
              </div>
            </div>
          </div>
        )}

        {narrativeView === 'counter' && (
          <div className="p-6 bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl border border-rose-200 shadow-lg">
            <h3 className="text-2xl font-bold text-rose-800 mb-4">The Critical Perspective</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-rose-500 text-2xl mr-4">✗</span>
                <div className="text-gray-800">
                  <strong className="text-rose-900">Placement Discrepancies:</strong> Significant gap between advertised placement rates (90%)
                  and user-reported outcomes (35%), with allegations of inflated success metrics.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 text-2xl mr-4">✗</span>
                <div className="text-gray-800">
                  <strong className="text-rose-900">Content Quality Concerns:</strong> Reports of outdated curriculum, over-reliance on external
                  resources like YouTube, and insufficient depth in advanced topics.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 text-2xl mr-4">✗</span>
                <div className="text-gray-800">
                  <strong className="text-rose-900">Support System Issues:</strong> Promised mentorship sessions rarely occur,
                  live doubt clarification is inconsistent, and post-enrollment support diminishes.
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-rose-500 text-2xl mr-4">✗</span>
                <div className="text-gray-800">
                  <strong className="text-rose-900">Sales Practices:</strong> High-pressure sales tactics, aggressive follow-ups,
                  and concerns about transparency in course outcomes and refund policies.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
