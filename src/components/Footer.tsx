import React from 'react';
import { useLanguage } from './LanguageContext';
import { Linkedin, MessageCircle, Send } from 'lucide-react';
import sibLogo from 'figma:asset/b749fdc4a159b7cb5a9fec02c7fc5f253de55771.png';

export function Footer() {
  const { language, t } = useLanguage();

  // Define the three column contents
  const CompanySection = () => (
    <div className={`flex flex-col items-center ${language === 'fa' ? 'md:items-end' : 'md:items-start'}`}>
      <div className={`flex items-center gap-3 mb-6 ${language === 'fa' ? 'flex-row-reverse' : ''}`}>
        <img
          src={sibLogo}
          alt="SIB Capital Management"
          className="h-12 w-auto brightness-0 invert"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
      <p className={`text-white/80 max-w-md ${language === 'fa' ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
        {language === 'fa' 
          ? '۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم'
          : 'We are available for you 24 hours a day, 7 days a week.'
        }
      </p>
    </div>
  );

  const SocialMediaSection = () => (
    <div className="flex flex-col items-center">
      <p className="text-sm font-medium mb-4">
        {language === 'fa' ? 'شبکه‌های اجتماعی' : 'Follow Us'}
      </p>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/company/sib-capital-management/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
          aria-label={language === 'fa' ? 'صفحه لینکدین' : 'LinkedIn Page'}
        >
          <Linkedin className="w-5 h-5 text-white group-hover:text-white/90" />
        </a>
        <a
          href="https://whatsapp.com/channel/0029Vb6IAKR1XqueF62y3C11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
          aria-label={language === 'fa' ? 'کانال واتساپ' : 'WhatsApp Channel'}
        >
          <MessageCircle className="w-5 h-5 text-white group-hover:text-white/90" />
        </a>
        <a
          href="https://t.me/hedgingsolution"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
          aria-label={language === 'fa' ? 'کانال تلگرام' : 'Telegram Channel'}
        >
          <Send className="w-5 h-5 text-white group-hover:text-white/90" />
        </a>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className={`flex flex-col items-center ${language === 'fa' ? 'md:items-start' : 'md:items-end'}`}>
      <h4 className={`font-semibold mb-4 ${language === 'fa' ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
        {language === 'fa' ? 'اطلاعات تماس' : 'Contact Information'}
      </h4>
      <div className={`space-y-2 text-white/80 ${language === 'fa' ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
        <p className="text-sm">
          {language === 'fa' 
            ? 'تهران، سعادت‌آباد، خیابان علامه طباطبایی جنوبی، خیابان غربی، پلاک ۱۰، طبقه پنجم'
            : '5th Floor, No. 10, Gharbi St., Allameh Tabatabaei Jonoubi St., Sa\'adat Abad, Tehran'
          }
        </p>
        <a 
          href="tel:+982188689785"
          className="text-sm ltr block hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {language === 'fa' ? '۰۲۱-۸۸۶۸۹۷۸۵' : '+98 21 8868 9785'}
        </a>
        <p className="text-sm ltr">www.sibcm.ir</p>
      </div>
    </div>
  );

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {language === 'fa' ? (
            // Persian RTL Layout: Company (Right), Social (Center), Contact (Left)
            <>
              <div className="md:order-3">
                <ContactSection />
              </div>
              <div className="md:order-2">
                <SocialMediaSection />
              </div>
              <div className="md:order-1">
                <CompanySection />
              </div>
            </>
          ) : (
            // English LTR Layout: Company (Left), Social (Center), Contact (Right)
            <>
              <div className="md:order-1">
                <CompanySection />
              </div>
              <div className="md:order-2">
                <SocialMediaSection />
              </div>
              <div className="md:order-3">
                <ContactSection />
              </div>
            </>
          )}
        </div>

        {/* Bottom Section - Copyright Notice */}
        <div className="pt-8 border-t border-white/20">
          <p className="text-center text-white/80 text-sm">
            {language === 'fa' 
              ? '© ۲۰۲۵ شرکت مدیریت سرمایه سیب — تمامی حقوق محفوظ است.'
              : '© 2025 Sib Capital Management — All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
}