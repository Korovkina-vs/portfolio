import { useRef, useState, useEffect } from 'react';
import Group405 from '../imports/Group405';

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-[#ff2202] py-24 px-8 relative flex items-center" ref={ref}>
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-black w-12 h-12" />
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-black w-12 h-12" />
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-black w-12 h-12" />
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-black w-12 h-12" />

      <div className="max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-800 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Logo and design tagline */}
            <div className={`transition-all duration-800 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="w-80 h-10 mb-8">
                <Group405 />
              </div>
              <div className="inline-block">
                <p className="text-black text-5xl mb-2" style={{ fontWeight: 800, letterSpacing: '0.1em' }}>
                  .DESIGN
                </p>
                <div className="h-0.5 bg-black w-24" />
              </div>
            </div>

            {/* Right side - Contact info */}
            <div className={`transition-all duration-800 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <h2 className="text-black mb-12 text-6xl" style={{ fontWeight: 800 }}>
                КОНТАКТЫ
              </h2>
              
              <div className="space-y-4 text-black text-xl" style={{ fontWeight: 600 }}>
                <a 
                  href="https://t.me/korovkina_vs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  // ТГ: @korovkina_vs
                </a>
                <a 
                  href="https://t.me/krvkn_vs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  // Канал: @krvkn_vs
                </a>
                <a 
                  href="mailto:korviktoriyser@gmail.com"
                  className="block hover:text-white transition-colors"
                >
                  // korviktoriyser@gmail.com
                </a>
                <a 
                  href="tel:+79272050809"
                  className="block hover:text-white transition-colors"
                >
                  // +7 927 205 08 09
                </a>
              </div>

              <p className="text-black/60 mt-16 text-lg">2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
