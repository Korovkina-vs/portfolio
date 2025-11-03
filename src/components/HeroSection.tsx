import { useEffect, useState } from 'react';

// Corner decorative element
const CornerDecoration = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const positionClasses = {
    'top-left': 'top-24 left-8 border-t-2 border-l-2',
    'top-right': 'top-24 right-8 border-t-2 border-r-2',
    'bottom-left': 'bottom-8 left-8 border-b-2 border-l-2',
    'bottom-right': 'bottom-8 right-8 border-b-2 border-r-2',
  };

  return <div className={`fixed ${positionClasses[position]} border-white w-12 h-12 pointer-events-none z-50`} />;
};

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Corner decorations */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />

      {/* Decorative background elements - similar to Figma design */}
      <div className="absolute top-32 right-1/4 w-64 h-64 border-2 border-white/10 rounded-full" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-white/10 rounded-full" />
      
      <div className="relative z-10 text-left px-8 max-w-7xl w-full">
        <div className={`transition-all duration-800 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white uppercase mb-4 text-xl" style={{ fontWeight: 600 }}>
            Графический дизайнер
            <br />— Коровкина Виктория
          </p>
          
          <h1 className="text-white mb-12 leading-tight" style={{ fontSize: '10rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            ПОРТФ<span className="text-[#ff2202]">О</span>ЛИО
          </h1>

          <div className="text-white/80 text-xl mb-16 max-w-2xl" style={{ fontWeight: 500 }}>
            <p className="mb-2 uppercase">Содержание:</p>
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-4">
                <span className="text-white/60">00</span>
                <span>Обо мне</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/60">01</span>
                <span>Работы</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/60">02</span>
                <span>Контакты</span>
              </div>
            </div>
          </div>
        </div>

        <p className="absolute bottom-8 right-8 text-white/60 text-lg">2025</p>
      </div>
    </section>
  );
}
