import React, { useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Section from '../ui/Section';

const ProjectsSection: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';
  const textAlign = rtl ? 'text-right' : 'text-left';
  
  const [activeCategory, setActiveCategory] = useState(t.projects.categories[0]);
  
  const filteredProjects = activeCategory === t.projects.categories[0]
    ? t.projects.items
    : t.projects.items.filter(project => project.category === activeCategory);

  return (
    <Section
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
      className="bg-white dark:bg-gray-900"
    >
      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center mb-10 space-x-2">
        {t.projects.categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full mb-2 transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm text-blue-200 mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
            <div className={`p-6 ${textAlign}`}>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              <div className={`mt-4 ${rtl ? 'text-right' : 'text-left'}`}>
                <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;