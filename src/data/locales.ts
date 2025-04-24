export type Locale = 'ar' | 'en';

export const locales: Record<Locale, {
  name: string;
  direction: 'rtl' | 'ltr';
  label: string;
}> = {
  ar: {
    name: 'العربية',
    direction: 'rtl',
    label: 'AR',
  },
  en: {
    name: 'English',
    direction: 'ltr',
    label: 'EN',
  }
};