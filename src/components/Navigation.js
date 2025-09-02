import { useEffect, useState } from 'react';

export default function Navigation({ activeSection, onSectionChange }) {
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('section');
      if (heroElement) {
        const heroBottom = heroElement.offsetTop + heroElement.offsetHeight;
        const shouldBeSticky = window.scrollY >= heroBottom - 100;
        
        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
          
          // Handle placeholder height to prevent layout shift
          const placeholder = document.getElementById('nav-placeholder');
          const navElement = document.querySelector('nav');
          if (placeholder && navElement) {
            if (shouldBeSticky) {
              placeholder.style.height = `${navElement.offsetHeight}px`;
            } else {
              placeholder.style.height = '0px';
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  // Auto-scroll navigation to show active tab
  useEffect(() => {
    const scrollToActiveTab = () => {
      const navContainer = document.querySelector('.overflow-x-auto');
      const activeTab = document.querySelector(`[data-section-id="${activeSection}"]`);
      
      if (navContainer && activeTab) {
        const containerRect = navContainer.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        // Check if the active tab is not fully visible
        if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
          // Calculate the scroll position to center the active tab
          const scrollLeft = navContainer.scrollLeft + (tabRect.left - containerRect.left) - (containerRect.width / 2) + (tabRect.width / 2);
          
          navContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      }
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(scrollToActiveTab, 100);
    
    return () => clearTimeout(timeoutId);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    onSectionChange(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`${isSticky ? 'fixed' : 'relative'} top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-lg transition-all duration-300`}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-center py-2 sm:py-3">
          <div className="flex space-x-1 md:space-x-2 overflow-x-auto px-2 bg-slate-100 rounded-full shadow-inner scrollbar-hide max-w-full">
            {sections.map((section) => (
              <button
                key={section.id}
                data-section-id={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 min-w-0 ${
                  activeSection === section.id
                    ? 'bg-slate-800 text-white shadow-lg transform scale-105'
                    : 'text-slate-700 hover:bg-white hover:shadow-md'
                }`}
              >
                <span className="text-sm sm:text-base flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5">{section.icon}</span>
                <span className="hidden sm:inline text-xs sm:text-sm">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
