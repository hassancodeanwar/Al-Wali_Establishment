import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { locales, Locale } from '../../data/locales';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();
  
  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      setLocale(newLocale);
    }
  };

  return (
    <div className="flex items-center">
      {Object.entries(locales).map(([code, { label }]) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code as Locale)}
          className={`px-2 py-1 mx-1 text-sm font-medium rounded transition-colors ${
            locale === code
              ? 'bg-blue-600 dark:bg-blue-500 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          aria-label={`Switch to ${locales[code as Locale].name}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;