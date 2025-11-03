import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      number: '01',
      title: 'УМНИКИ',
      category: 'Брендинг',
      link: 'https://disk.yandex.ru/d/iJv7CjGsEVzjXA',
      image: 'branding design'
    },
    {
      number: '02',
      title: 'ДВИГАЙ!',
      category: 'Айдентика',
      link: 'https://disk.yandex.ru/d/0qe0ufU0owWsdg',
      image: 'event design'
    },
    {
      number: '03',
      title: 'БУДУЩЕЕ ЗА НАМИ',
      category: 'Плакаты',
      link: 'https://disk.yandex.ru/d/RXQ7eB5LoKDlZQ',
      image: 'poster design'
    },
    {
      number: '04',
      title: 'МКР',
      category: 'Логотип',
      link: 'https://disk.yandex.ru/d/PIg_aIL3PKdKuA',
      image: 'logo design'
    },
    {
      number: '05',
      title: 'ВОЛЖСКИЙ',
      category: 'Дизайн',
      link: 'https://disk.yandex.ru/d/eY03TEZ7vkqz3A',
      image: 'graphic design'
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-white py-24 px-8 relative" ref={ref}>
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-black w-12 h-12" />
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-black w-12 h-12" />
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-black w-12 h-12" />
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-black w-12 h-12" />

      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-800 mb-16 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-black mb-8 text-6xl" style={{ fontWeight: 800 }}>
            ПОЛНЫЕ ВЕРСИИ ПРОЕКТОВ
            <br />
            ДОСТУПНЫ ПО ССЫЛКАМ:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {projects.map((project, index) => (
            <a
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-zinc-100 aspect-[4/3] mb-4">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#ff2202] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-4xl" style={{ fontWeight: 800 }}>
                    {project.number}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-black/40 text-lg">{project.number}</span>
                <div>
                  <h3 className="text-black text-2xl group-hover:text-[#ff2202] transition-colors" style={{ fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <p className="text-black/60 text-lg" style={{ fontWeight: 500 }}>
                    {project.category}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="text-black/60 mt-16 text-lg">2025</p>
      </div>
    </section>
  );
}
