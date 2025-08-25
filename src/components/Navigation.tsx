import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from './ui/sheet';
import { ChevronDown, Menu, Globe } from 'lucide-react';
import { useLanguage, Language } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import sibLogo from 'figma:asset/b749fdc4a159b7cb5a9fec02c7fc5f253de55771.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const servicePages = [
    { key: 'hedging', label: t('nav.hedging') },
    { key: 'brokerage', label: t('nav.brokerage') },
    { key: 'portfolio', label: t('nav.portfolio') },
  ];

  const mainPages = [
    { key: 'home', label: t('nav.home') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') },
    { key: 'education', label: t('nav.education') },
    { key: 'insights', label: t('nav.insights') },
  ];

  const NavLink = ({ pageKey, children, className = "" }: { pageKey: string; children: React.ReactNode; className?: string }) => (
    <motion.button
      onClick={() => onPageChange(pageKey)}
      className={`px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary/20 relative ${
        currentPage === pageKey ? 'text-primary bg-secondary/10' : 'text-foreground'
      } ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4764AE]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );

  const ServicesDropdown = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div 
      className={`relative ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={() => !isMobile && setServicesOpen(true)}
      onMouseLeave={() => !isMobile && setServicesOpen(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="ghost"
          onClick={() => isMobile && setServicesOpen(!servicesOpen)}
          className={`flex items-center gap-1 px-3 py-2 hover:bg-secondary/20 ${
            servicePages.some(service => currentPage === service.key) ? 'text-primary bg-secondary/10' : 'text-foreground'
          } ${isMobile ? 'w-full justify-start' : ''}`}
        >
          {t('nav.services')}
          <motion.div
            animate={{ rotate: servicesOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Button>
      </motion.div>
      <AnimatePresence>
        {servicesOpen && (
          <motion.div 
            className={`${isMobile ? 'mt-2 pl-4' : 'absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg min-w-[200px] z-50'}`}
            initial={{ opacity: 0, y: isMobile ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isMobile ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            {servicePages.map((service, index) => (
              <motion.div 
                key={service.key} 
                className={isMobile ? 'mb-1' : 'px-1 py-1'}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <motion.button
                  onClick={() => {
                    onPageChange(service.key);
                    setServicesOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-secondary/20 ${
                    currentPage === service.key ? 'text-primary bg-secondary/10' : 'text-foreground'
                  }`}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(71, 100, 174, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  {service.label}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const LanguageDropdown = () => (
    <div 
      className="relative"
      onMouseEnter={() => setLanguageOpen(true)}
      onMouseLeave={() => setLanguageOpen(false)}
    >
      <motion.button
        className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-secondary/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
        <motion.div
          animate={{ rotate: languageOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3 h-3" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {languageOpen && (
          <motion.div 
            className="absolute top-full right-0 mt-1 bg-white border rounded-md shadow-lg min-w-[80px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {[
              { value: 'en', label: 'EN' },
              { value: 'fa', label: 'فا' }
            ].map((lang, index) => (
              <motion.button
                key={lang.value}
                onClick={() => {
                  setLanguage(lang.value as Language);
                  setLanguageOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-secondary/20 ${
                  language === lang.value ? 'text-primary bg-secondary/10' : 'text-foreground'
                }`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(71, 100, 174, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                {lang.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.nav 
      className="bg-white border-b border-border sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.button
              onClick={() => onPageChange('home')}
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={sibLogo}
                alt="SIB Capital Management"
                className="h-10 w-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink pageKey="home">{t('nav.home')}</NavLink>
            <ServicesDropdown />
            <NavLink pageKey="about">{t('nav.about')}</NavLink>
            <NavLink pageKey="contact">{t('nav.contact')}</NavLink>
            <NavLink pageKey="education">{t('nav.education')}</NavLink>
            <NavLink pageKey="insights">{t('nav.insights')}</NavLink>
          </motion.div>

          {/* Language Selector & Mobile Menu */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="hidden md:block">
              <LanguageDropdown />
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button variant="ghost" size="sm">
                    <Menu className="w-5 h-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side={language === 'fa' ? 'left' : 'right'} className="w-[250px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle>{language === 'fa' ? 'منو' : 'Menu'}</SheetTitle>
                  <SheetDescription>
                    {language === 'fa' ? 'صفحات سایت و تنظیمات زبان' : 'Site navigation and language settings'}
                  </SheetDescription>
                </SheetHeader>
                <motion.div 
                  className="flex flex-col space-y-4 mt-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink pageKey="home" className="w-full justify-start">{t('nav.home')}</NavLink>
                  <ServicesDropdown isMobile />
                  <NavLink pageKey="about" className="w-full justify-start">{t('nav.about')}</NavLink>
                  <NavLink pageKey="contact" className="w-full justify-start">{t('nav.contact')}</NavLink>
                  <NavLink pageKey="education" className="w-full justify-start">{t('nav.education')}</NavLink>
                  <NavLink pageKey="insights" className="w-full justify-start">{t('nav.insights')}</NavLink>
                  
                  {/* Mobile Language Selector */}
                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Language</div>
                    <div className="flex gap-2">
                      <motion.button
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-2 rounded-md text-sm transition-colors ${
                          language === 'en' ? 'bg-primary text-white' : 'bg-secondary/10 text-foreground hover:bg-secondary/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        English
                      </motion.button>
                      <motion.button
                        onClick={() => setLanguage('fa')}
                        className={`px-3 py-2 rounded-md text-sm transition-colors ${
                          language === 'fa' ? 'bg-primary text-white' : 'bg-secondary/10 text-foreground hover:bg-secondary/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        فارسی
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}