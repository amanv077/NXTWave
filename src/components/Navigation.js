export default function Navigation({ activeSection, onSectionChange }) {
  const sections = [
    { id: 'summary', label: 'Overview', icon: '📊' },
    { id: 'product', label: 'Product', icon: '🔍' },
    { id: 'personas', label: 'Users', icon: '👥' },
    { id: 'gtm', label: 'GTM', icon: '🚀' },
    { id: 'metrics', label: 'Metrics', icon: '📈' },
    { id: 'financials', label: 'Financials', icon: '💰' },
    { id: 'narrative', label: 'Narratives', icon: '⚖️' },
    { id: 'competition', label: 'Competition', icon: '🏆' },
    { id: 'swot', label: 'SWOT', icon: '🔄' },
    { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
  ];

  const scrollToSection = (sectionId) => {
    onSectionChange(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-lg">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center py-2 sm:py-3">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <img 
                src="/logo.png" 
                alt="NxtWave Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>
          </div>
          
          {/* Navigation sections */}
          <div className="flex justify-center flex-1">
            <div className="flex space-x-1 md:space-x-2 overflow-x-auto py-2 sm:py-3 px-2 bg-slate-100 rounded-full shadow-inner max-w-full">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-slate-800 text-white shadow-lg transform scale-105'
                      : 'text-slate-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span className="text-sm sm:text-base">{section.icon}</span>
                  <span className="hidden sm:inline text-xs sm:text-sm">{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
