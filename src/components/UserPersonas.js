export default function UserPersonas() {
  return (
    <section id="personas" className="mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-gray-100 mx-2 sm:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Target User Personas
        </h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 text-center max-w-5xl mx-auto font-light px-2">
          NxtWave's product is designed for specific user archetypes in the Indian education and employment landscape.
          Understanding these personas is crucial for appreciating the product's value proposition and market fit.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-3 sm:mb-4 lg:mb-6">Ravi, The Ambitious Graduate</h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-600 font-medium mb-3 sm:mb-4 lg:mb-6">Age: 22 | Education: B.Com | Location: Tier-3 City (Andhra Pradesh)</p>
            <div className="mb-4 sm:mb-6">
              <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">Goals:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 leading-relaxed text-xs sm:text-sm lg:text-base">
                <li>Secure a stable, high-growth IT job in a major city</li>
                <li>Improve family financial situation through better career prospects</li>
                <li>Build technical skills to compete in the modern job market</li>
                <li>Gain confidence in pursuing a career transition</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">Pain Points:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 leading-relaxed text-xs sm:text-sm lg:text-base">
                <li>Limited access to quality technical education in hometown</li>
                <li>Language barriers in English-only learning resources</li>
                <li>Lack of industry connections and job search guidance</li>
                <li>Family pressure to pursue traditional career paths</li>
              </ul>
            </div>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-3 sm:mb-4 lg:mb-6">Priya, The Underprepared Engineer</h3>
            <p className="text-sm sm:text-base lg:text-lg text-green-600 font-medium mb-3 sm:mb-4 lg:mb-6">Age: 21 | Education: Final Year Mech. Engg. | Location: Tier-2 City (Telangana)</p>
            <div className="mb-4 sm:mb-6">
              <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">Goals:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 leading-relaxed text-xs sm:text-sm lg:text-base">
                <li>Pivot to a more lucrative software development career</li>
                <li>Gain practical coding skills missing from college curriculum</li>
                <li>Secure a job offer before graduation</li>
                <li>Build a strong foundation for long-term career growth</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">Pain Points:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 leading-relaxed text-xs sm:text-sm lg:text-base">
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
