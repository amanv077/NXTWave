export default function GoToMarket() {
  return (
    <section id="gtm" className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Go-To-Market Strategy</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          NxtWave employs a multi-channel, digitally-driven GTM strategy optimized for rapid acquisition and conversion.
          The funnel leverages social media, content marketing, and direct sales to guide prospects from awareness to enrollment.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Awareness</h3>
              <p className="text-sm text-purple-700">Targeted YouTube ads, social media campaigns, and vernacular content marketing reaching millions of potential students.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg">
              <h3 className="font-bold text-lg text-indigo-800 mb-2">Interest</h3>
              <p className="text-sm text-indigo-700">Free webinars, masterclasses, and lead magnets that educate and capture contact information for nurturing.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Consideration</h3>
              <p className="text-sm text-blue-700">Detailed course demos, student testimonials, and comparison content to build credibility and trust.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
              <h3 className="font-bold text-lg text-green-800 mb-2">Conversion</h3>
              <p className="text-sm text-green-700">High-touch tele-sales, EMI financing options, and limited-time offers to close the enrollment decision.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="text-2xl text-gray-600">↓</div>
            <div className="p-6 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg mt-4">
              <h3 className="font-bold text-lg text-teal-800 mb-2">Retention & Advocacy</h3>
              <p className="text-sm text-teal-700">Community engagement, ongoing support, and success story amplification to build long-term brand loyalty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
