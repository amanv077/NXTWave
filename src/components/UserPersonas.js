export default function UserPersonas() {
  return (
    <section id="personas" className="mb-20">
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Target User Personas
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed mb-12 text-center max-w-5xl mx-auto font-light">
          NxtWave's product is designed for specific user archetypes in the Indian education and employment landscape.
          Understanding these personas is crucial for appreciating the product's value proposition and market fit.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-blue-800 mb-6">Ravi, The Ambitious Graduate</h3>
            <p className="text-lg text-blue-600 font-medium mb-6">Age: 22 | Education: B.Com | Location: Tier-3 City (Andhra Pradesh)</p>
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Goals:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                <li>Secure a stable, high-growth IT job in a major city</li>
                <li>Improve family financial situation through better career prospects</li>
                <li>Build technical skills to compete in the modern job market</li>
                <li>Gain confidence in pursuing a career transition</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Pain Points:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                <li>Limited access to quality technical education in hometown</li>
                <li>Language barriers in English-only learning resources</li>
                <li>Lack of industry connections and job search guidance</li>
                <li>Family pressure to pursue traditional career paths</li>
              </ul>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-green-800 mb-6">Priya, The Underprepared Engineer</h3>
            <p className="text-lg text-green-600 font-medium mb-6">Age: 21 | Education: Final Year Mech. Engg. | Location: Tier-2 City (Telangana)</p>
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Goals:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                <li>Pivot to a more lucrative software development career</li>
                <li>Gain practical coding skills missing from college curriculum</li>
                <li>Secure a job offer before graduation</li>
                <li>Build a strong foundation for long-term career growth</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Pain Points:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                <li>Theoretical engineering education without practical application</li>
                <li>Limited placement opportunities in core engineering field</li>
                <li>Feeling behind peers from Computer Science branches</li>
                <li>Uncertainty about career prospects in engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
