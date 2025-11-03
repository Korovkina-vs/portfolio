import { useRef, useState, useEffect } from 'react';
import profilePhoto from 'figma:asset/679830285cc665075e6a5634bb5fc2d40d1538e5.png';

export function AboutSection() {
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
    <section id="about" className="min-h-screen bg-[#ff2202] py-24 px-8 relative" ref={ref}>
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-white w-12 h-12" />
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-white w-12 h-12" />
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-white w-12 h-12" />
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-white w-12 h-12" />

      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-800 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Photo Section */}
            <div className={`relative transition-all duration-800 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative h-[600px] overflow-hidden bg-white/10">
                <img
                  src={profilePhoto}
                  alt="Виктория Коровкина"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white/80 mt-4 text-lg">2025</p>
            </div>

            {/* Text Section */}
            <div className={`text-white transition-all duration-800 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <h2 className="mb-12 text-white text-6xl" style={{ fontWeight: 800 }}>
                ОБО МНЕ
              </h2>
              
              <div className="space-y-6 text-white text-xl leading-relaxed" style={{ fontWeight: 500 }}>
                <p className="indent-16">
                  \ Привет, меня зовут Вика Коровкина, и я графический дизайнер из Самарской области.
                </p>
                
                <p className="indent-16">
                  // Я не просто следую техническому заданию, я создаю смысловую и визуальную концепции дизайна, 
                  прорабатывая различные варианты дискрипторов. В процессе я формирую визуальный код, основанный 
                  на ключевых ценностях проекта.
                </p>

                <div className="mt-16 pt-8 border-t border-white/20">
                  <h3 className="text-white text-3xl mb-6" style={{ fontWeight: 800 }}>
                    МОЯ ЦЕЛЬ —
                  </h3>
                  <p className="text-white text-lg indent-16" style={{ fontWeight: 500 }}>
                    донести через дизайн глубокие смыслы и идеи, побудить людей к действию. 
                    Визуально передать важные мысли, создавая работы, которые действительно цепляют и вдохновляют.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
