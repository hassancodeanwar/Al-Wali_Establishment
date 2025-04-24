import React, { useState, useEffect } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t, direction, locale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home',    label: t.navigation.home },
    { href: '#about',   label: t.navigation.about },
    { href: '#services',label: t.navigation.services },
    { href: '#projects',label: t.navigation.projects },
    { href: '#contact', label: t.navigation.contact },
  ];

  const logoText = locale === 'ar' ? 'مؤسسة الوالي' : 'Al Wali Establishment';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="relative group flex items-center">
            <span
              className={`text-2xl font-bold transition-transform duration-300 group-hover:scale-105
                ${isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white'}`}
            >
              {logoText}
            </span>
          </a>

          <div
            className={`hidden md:flex items-center gap-8
              ${direction === 'rtl' ? 'mr-8' : 'ml-8'}`}
          >
            <ul
              className={`flex items-center space-x-8
                ${direction === 'rtl' ? 'space-x-reverse' : ''}`}
            >
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`relative py-2 text-sm font-medium
                      transition-colors duration-200
                      ${isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                        : 'text-white hover:text-blue-200'}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-gray-300/50 dark:bg-gray-700/50" />
            <ThemeToggle />
            <div className="h-6 w-px bg-gray-300/50 dark:bg-gray-700/50" />
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`p-2 rounded-lg transition-colors
                ${isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden fixed inset-x-0 top-[calc(100%+1px)]
             bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg transition-all duration-300
             ${mobileMenuOpen
               ? 'opacity-100 translate-y-0'
               : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        >
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;