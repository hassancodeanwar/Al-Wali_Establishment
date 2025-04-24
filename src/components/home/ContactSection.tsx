import React, { useState } from 'react';
import { useLocale } from '../../contexts/LocaleContext';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, direction } = useLocale();
  const rtl = direction === 'rtl';
  const textAlign = rtl ? 'text-right' : 'text-left';
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <Section
      id="contact"
      title={t.contact.title}
      subtitle={t.contact.subtitle}
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className={textAlign}>
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className={`text-2xl font-bold mb-6 ${textAlign} text-gray-800 dark:text-white`}>
              {rtl ? 'معلومات الاتصال' : 'Contact Information'}
            </h3>
            
            <div className="space-y-6">
              <div className={`flex ${rtl ? 'flex-row-reverse' : ''} items-start`}>
                <MapPin className={`${rtl ? 'ml-4' : 'mr-4'} text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                    {rtl ? 'العنوان' : 'Address'}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.address}</p>
                </div>
              </div>
              
              <div className={`flex ${rtl ? 'flex-row-reverse' : ''} items-start`}>
                <Phone className={`${rtl ? 'ml-4' : 'mr-4'} text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                    {rtl ? 'الهاتف' : 'Phone'}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.phone}</p>
                </div>
              </div>
              
              <div className={`flex ${rtl ? 'flex-row-reverse' : ''} items-start`}>
                <Mail className={`${rtl ? 'ml-4' : 'mr-4'} text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                    {rtl ? 'البريد الإلكتروني' : 'Email'}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.email}</p>
                </div>
              </div>
            </div>
            
            {/* Map Preview */}
            <div className="mt-8 rounded-lg overflow-hidden h-[200px] bg-gray-200 dark:bg-gray-700">
              <img 
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Map Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className={textAlign}>
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
            <h3 className={`text-2xl font-bold mb-6 ${textAlign} text-gray-800 dark:text-white`}>
              {rtl ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-4 flex items-center text-green-800 dark:text-green-200">
                <CheckCircle className={`${rtl ? 'ml-3' : 'mr-3'} text-green-500 dark:text-green-400 flex-shrink-0`} />
                <p>{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-gray-700 dark:text-gray-300 font-medium mb-1 ${textAlign}`}
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white ${textAlign}`}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-gray-700 dark:text-gray-300 font-medium mb-1 ${textAlign}`}
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white ${textAlign}`}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className={`block text-gray-700 dark:text-gray-300 font-medium mb-1 ${textAlign}`}
                    >
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white ${textAlign}`}
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block text-gray-700 dark:text-gray-300 font-medium mb-1 ${textAlign}`}
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white ${textAlign}`}
                    ></textarea>
                  </div>
                  
                  <div className={rtl ? 'text-right' : 'text-left'}>
                    <Button type="submit" variant="primary">
                      {t.contact.form.submit}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;