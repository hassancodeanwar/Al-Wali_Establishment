import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';
  const textAlign = rtl ? 'text-right' : 'text-left';

  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    
    if (IconComponent) {
      return <IconComponent className="h-10 w-10 text-blue-600 dark:text-blue-400" />;
    }
    
    return <LucideIcons.Activity className="h-10 w-10 text-blue-600 dark:text-blue-400" />;
  };

  return (
    <Section
      id="services"
      title={t.services.title}
      subtitle={t.services.subtitle}
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((service) => (
          <div 
            key={service.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:translate-y-[-4px]"
          >
            <div className={`flex ${rtl ? 'flex-row-reverse' : 'flex-row'} items-start mb-4`}>
              <div className={`${rtl ? 'ml-4' : 'mr-4'} p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md`}>
                {renderIcon(service.icon)}
              </div>
              <h3 className={`text-xl font-bold text-gray-800 dark:text-white ${textAlign}`}>{service.title}</h3>
            </div>
            <p className={`text-gray-600 dark:text-gray-400 ${textAlign}`}>{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;