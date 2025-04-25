import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Section from '../ui/Section';
import { Users, Target, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';
  const textAlign = rtl ? 'text-right' : 'text-left';

  return (
    <Section 
      id="about" 
      title={t.about.title}
      subtitle={t.about.subtitle}
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Image */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Al Wali Industrial Site" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg hidden md:block">
            <p className="text-lg font-bold">20+</p>
            <p className="text-sm">{rtl ? 'سنوات من الخبرة' : 'Years of Experience'}</p>
          </div>
        </div>

        {/* About Content */}
        <div className={textAlign}>
          {t.about.description.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
              {paragraph}
            </p>
          ))}

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className={`bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg ${textAlign}`}>
              <div className="flex items-center mb-3">
                <Target className={`text-blue-600 dark:text-blue-400 ${rtl ? 'ml-2' : 'mr-2'}`} />
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{t.about.mission.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t.about.mission.text}</p>
            </div>
            <div className={`bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg ${textAlign}`}>
              <div className="flex items-center mb-3">
                <Award className={`text-blue-600 dark:text-blue-400 ${rtl ? 'ml-2' : 'mr-2'}`} />
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{t.about.vision.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{t.about.vision.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
{/*       <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t.about.team.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{t.about.team.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.about.team.members.map((member) => (
            <div key={member.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-center" />
              <div className={`p-6 ${textAlign}`}>
                <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Section>
  );
};

export default AboutSection;
