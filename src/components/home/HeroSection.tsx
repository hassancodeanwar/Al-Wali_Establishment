import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Button from '../ui/Button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 dark:from-gray-900/95 dark:to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl ${rtl ? 'mr-0 ml-auto' : 'ml-0'}`}>
          {/* Animated Badge */}
          <div className={`inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 ${
            rtl ? 'text-right' : 'text-left'
          }`}>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-100 text-sm font-medium mx-3">
              {rtl ? '20+ عاماً من الخبرة' : '20+ Years of Experience'}
            </span>
          </div>

          {/* Main Content */}
          <div className={`space-y-8 ${rtl ? 'text-right' : 'text-left'}`}>
          <h3 className="leading-snug max-w-4xl text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            {t.hero.title}
          </h3>

            
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.cta}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="!text-white !border-white/30 hover:!bg-white/10"
              >
                {rtl ? 'استكشف خدماتنا' : 'Explore Our Services'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="animate-bounce" size={32} />
      </button> */}

      {/* Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto fill-white dark:fill-gray-900 preserve-3d"
          style={{ transform: 'translateZ(0)' }}
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;