import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, locales } from '../data/locales';
import { Content, content } from '../data/content';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  direction: 'rtl' | 'ltr';
  t: Content;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('ar');
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl');

  const setLocale = (newLocale: Locale) => {
    if (locales[newLocale]) {
      setLocaleState(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && locales[savedLocale]) {
      setLocaleState(savedLocale);
    }
  }, []);

  useEffect(() => {
    setDirection(locales[locale].direction);
    document.documentElement.dir = locales[locale].direction;
    document.documentElement.lang = locale;
    document.title = content[locale].meta.title;
  }, [locale]);

  const value = {
    locale,
    setLocale,
    direction,
    t: content[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};