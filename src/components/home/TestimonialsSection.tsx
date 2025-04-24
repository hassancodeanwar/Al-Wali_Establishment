import React, { useState, useEffect } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Section from '../ui/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';
  const textAlign = rtl ? 'text-right' : 'text-left';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = t.testimonials.items;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      id="testimonials"
      title={t.testimonials.title}
      subtitle={t.testimonials.subtitle}
      className="bg-blue-50 dark:bg-blue-900/20"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-blue-200 dark:text-blue-800">
          <Quote size={80} />
        </div>
        
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl p-8 md:p-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-6"
                />
                <p className={`text-gray-700 dark:text-gray-300 text-lg mb-6 ${textAlign}`}>
                  "{testimonial.quote}"
                </p>
                <div className={`text-center ${textAlign}`}>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center mt-8 gap-6">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="p-3 rounded-full bg-blue-900 hover:bg-blue-800 transition-colors shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-gray-300" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? 'bg-blue-400'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="p-3 rounded-full bg-blue-900 hover:bg-blue-800 transition-colors shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-gray-300" />
        </button>
      </div>

      </div>
    </Section>
  );
};

export default TestimonialsSection;