import React from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className={`flex flex-col items-center space-y-8 ${rtl ? 'text-right' : 'text-left'}`}>
          {/* Logo */}
          <h3 className="text-2xl font-bold text-white">
            Al Wali
          </h3>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {Object.entries(t.navigation).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;