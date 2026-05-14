import { useState, useEffect, useRef } from 'react';
import { Wrench, ChevronRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  href?: string;
  icon?: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

interface Props {
  title: string;
  description: string;
  categories: ServiceCategory[];
}

// Map category titles to images
const CATEGORY_IMAGES: Record<string, string> = {
  'Residential Plumbing Services': '/images/photos/freepik-male-plumber-working-fix-problems-client-s-house_23-2150990700.jpg',
  'Commercial Plumbing Services':  '/images/photos/freepik-man-installs-heating-system-house-checks-pipes-with-wrench_169016-55834.jpg',
  'Specialty Plumbing Services':   '/images/photos/freepik-female-plumber-working-fix-problems-client-s-house_23-2150990725.jpg',
  'Maintenance Services':          '/images/photos/plumber-bathroom.jpg',
};

export function ServicesSection({ title, description, categories }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Claymorphism Design System Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
        
        .clay-title { font-family: 'Poppins', sans-serif; }
        .clay-subtitle { font-family: 'Montserrat', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .clay-card {
          background: #ffffff;
          border-radius: 2.5rem;
          box-shadow: 
            inset -8px -8px 16px rgba(0, 0, 0, 0.02), 
            inset 8px 8px 16px rgba(255, 255, 255, 0.9),
            15px 30px 60px rgba(28, 57, 142, 0.06);
          border: 2px solid rgba(255, 255, 255, 0.8);
        }

        .clay-inner-groove {
          box-shadow: 
            inset 8px 8px 16px rgba(28, 57, 142, 0.04),
            inset -8px -8px 16px rgba(255, 255, 255, 0.8);
        }

        .clay-button-active {
          background: #3B82F6;
          color: #FFFFFF;
          box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.3), 0 8px 16px rgba(59, 130, 246, 0.3);
        }

        .clay-button-inactive {
          background: #FFFFFF;
          color: #1C398E;
          box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.02), inset 2px 2px 4px rgba(255, 255, 255, 0.9), 2px 4px 8px rgba(28, 57, 142, 0.03);
        }
      `}} />

      {/* Ambient Depth Elements */}
      <div className="absolute top-0 -left-20 w-[30%] h-[30%] bg-[#3B82F6]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-[30%] h-[30%] bg-[#16A34A]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <h2 className="clay-title text-3xl md:text-5xl font-black text-[#1C398E] mb-6 tracking-tighter leading-tight uppercase">{title}</h2>
            <p className="clay-subtitle text-base md:text-lg text-[#1C398E]/50 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-[10px] font-mono font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeTab === index ? 'clay-button-active' : 'clay-button-inactive'
                }`}
              >
                {category.title.replace(' Services', '').replace(' Plumbing', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Category Card - Takes 4 columns */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {(() => {
              let categoryHref = '/contact';
              const catTitle = categories[activeTab].title.toLowerCase();
              if (catTitle.includes('residential')) categoryHref = '/residential-plumbing';
              if (catTitle.includes('commercial')) categoryHref = '/commercial-plumbing';
              if (catTitle.includes('specialty')) categoryHref = '/specialty-plumbing';
              if (catTitle.includes('maintenance')) categoryHref = '/maintenance-plan';

              return (
                <a href={categoryHref} className="clay-card block overflow-hidden h-full min-h-[300px] relative group cursor-pointer">
                  {CATEGORY_IMAGES[categories[activeTab].title] && (
                    <img
                      src={CATEGORY_IMAGES[categories[activeTab].title]}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C398E]/90 via-[#1C398E]/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="clay-title text-2xl font-black text-white leading-tight uppercase mb-2">{categories[activeTab].title}</h3>
                    <div className="w-12 h-1 bg-white/40 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  </div>
                </a>
              );
            })()}
          </div>

          {/* Services Grid - Takes 8 columns */}
          <div className={`lg:col-span-8 grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {categories[activeTab].services.map((service, idx) => {
              // Extract href from description if missing
              let href = service.href;
              if (!href && service.description.includes('href=')) {
                const match = service.description.match(/href=['"]([^'"]+)['"]/);
                if (match) href = match[1];
              }

              // Default "View All" links if missing
              if (!href && service.title.toLowerCase().includes('view all')) {
                const catTitle = categories[activeTab].title.toLowerCase();
                if (catTitle.includes('residential')) href = '/residential-plumbing';
                if (catTitle.includes('commercial')) href = '/commercial-plumbing';
                if (catTitle.includes('specialty')) href = '/specialty-plumbing';
                if (catTitle.includes('maintenance')) href = '/maintenance-plan';
              }

              // Fallback
              if (!href) href = '/contact';

              // Clean description of nested links
              const cleanDescription = service.description.replace(/<a[^>]*>|<\/a>|<strong>|<\/strong>/g, '');

              return (
                <a
                  key={idx}
                  href={href}
                  className="clay-card p-6 flex items-start gap-5 group transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full cursor-pointer"
                >
                  {/* Decorative background accent */}
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#3B82F6]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#F8FAFC] clay-inner-groove p-3 flex items-center justify-center group-hover:bg-white transition-colors duration-500 shadow-sm relative z-10">
                    {service.icon ? (
                      <div 
                        className="w-full h-full bg-[#3B82F6] group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                        style={{
                          WebkitMaskImage: `url('${service.icon}')`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url('${service.icon}')`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center'
                        }}
                      ></div>
                    ) : (
                      <Wrench size={28} className="text-[#3B82F6]" strokeWidth={2.5} />
                    )}
                  </div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="clay-title text-base font-black text-[#1C398E] leading-tight group-hover:text-[#3B82F6] transition-colors">{service.title}</h4>
                      <div className="shrink-0 w-7 h-7 rounded-full bg-white clay-badge flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                        <ChevronRight size={14} strokeWidth={4} />
                      </div>
                    </div>
                    <p className="clay-subtitle text-xs text-[#1C398E]/50 font-medium leading-relaxed">
                      {cleanDescription}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
