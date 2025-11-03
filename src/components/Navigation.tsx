import { useState } from 'react';
import Group405 from '../imports/Group405';

interface NavigationProps {
  activeSection: string;
}

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const sections = [
    { id: 'home', label: 'ГЛАВНАЯ', number: '00' },
    { id: 'about', label: 'ОБО МНЕ', number: '01' },
    { id: 'work', label: 'РАБОТЫ', number: '02' },
    { id: 'contact', label: 'КОНТАКТЫ', number: '03' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="w-48 h-8 hover:opacity-80 transition-opacity">
            <Group405 />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`font-medium text-sm transition-colors ${
                  activeSection === section.id ? 'text-[#ff2202]' : 'text-white hover:text-[#ff2202]'
                }`}
              >
                <span className="mr-2">{section.number}</span>
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#ff2202] transition-colors"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-8 py-6 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left font-medium transition-colors ${
                    activeSection === section.id ? 'text-[#ff2202]' : 'text-white'
                  }`}
                >
                  <span className="mr-2">{section.number}</span>
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
