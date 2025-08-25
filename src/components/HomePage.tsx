import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Shield, Award, TrendingUp, BarChart3, Users, CheckCircle, Globe, Zap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const { t, language } = useLanguage();

  // Refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const insightsRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const insightsInView = useInView(insightsRef, { once: true, margin: "-100px" });

  const services = [
    {
      key: 'hedging',
      title: t('quick.hedging.title'),
      description: t('quick.hedging.desc'),
      icon: Shield,
      color: '#4764AE',
    },
    {
      key: 'brokerage',
      title: t('quick.brokerage.title'),
      description: t('quick.brokerage.desc'),
      icon: TrendingUp,
      color: '#282F6B',
    },
    {
      key: 'portfolio',
      title: t('quick.portfolio.title'),
      description: t('quick.portfolio.desc'),
      icon: BarChart3,
      color: '#4764AE',
    },
  ];



  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1629721380223-9d5026d42b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc1NTI2OTMxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Financial technology abstract visualization"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-[28px] md:text-[48px] font-bold mb-6 leading-[1.4]"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-2 text-center">
                {language === 'fa' 
                  ? 'حفظ سرمایه شما در برابر نوسانات بازار با ابزارهای نوین مالی'
                  : 'Protect your capital against market fluctuations with modern financial tools'
                }
              </div>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 leading-relaxed text-center"
              style={{ color: '#E5E9F5' }}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {language === 'fa' 
                ? 'راهکارهای پوشش ریسک و سرمایه‌گذاری مطمئن برای کسب‌وکار شما.'
                : 'Risk-hedging and secure investment solutions for your business'
              }
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                   className="h-[52px] bg-[#E5E5E5] text-[#292F6B] hover:bg-[#d4d4d8] font-bold px-8 py-3 rounded-lg transition-colors duration-300"
                   onClick={() => onPageChange('contact')}
                >
                  {language === 'fa' ? 'مشاوره رایگان دریافت کنید' : 'Get Free Consultation'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access Services */}
      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('quick.title')}
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-[360px]"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md h-full flex flex-col">
                    <CardHeader className="text-center p-6 flex-grow">
                      <motion.div 
                        className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: service.color }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-[20px] font-bold mb-3 text-primary">{service.title}</CardTitle>
                      <CardDescription className="text-center leading-[1.6] text-muted-foreground line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center pt-0 pb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          onClick={() => onPageChange(service.key)}
                          className="bg-[#4764AE] text-white hover:bg-[#282F6B] font-bold transition-colors duration-300"
                        >
                          {t('common.learnMore')}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section ref={aboutRef} className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
              
              </motion.div>
              <motion.h2 
                className="text-center !text-center text-3xl md:text-4xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {language === 'fa' ? 'درباره ما' : 'About Us'}
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {language === 'fa' 
                  ? 'در دنیای پرتلاطم اقتصاد، مدیریت ریسک دیگر یک انتخاب نیست، بلکه یک مزیت رقابتی است. ما در شرکت مدیریت سرمایه سیب با دسترسی به بازارهای جهانی و ابزارهای مالی پیشرفته، به شما کمک می‌کنیم تا ریسک‌های ناشی از نوسانات ارز و کالا را مدیریت کرده و آن‌ها را به فرصت‌هایی برای رشد پایدار تبدیل کنید.'
                  : 'Sib Management leverages specialized expertise and diverse financial instruments to help businesses manage risk and enhance their investment performance.'
                }
              </motion.p>

              {/* Feature Items */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {[
                    { key: 'licensed', icon: Award },
                    { key: 'team', icon: Users },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4 feature-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.key === 'team' 
                              ? (language === 'fa' 
                                ? 'تیم متخصص ایرانی و بین‌المللی با بیش از ۱۵ سال تجربه.' 
                                : 'A specialized team of Iranian and international experts with over 15 years of experience.')
                              : t(`trust.highlights.${item.key}`)
                            }
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {[
                    { key: 'transparency', icon: CheckCircle },
                    { key: 'technology', icon: Zap },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4 feature-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        whileHover={{ x: -5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {t(`trust.highlights.${item.key}`)}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={() => onPageChange('about')} className="financial-gradient text-white">
                    {t('common.learnMore')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" onClick={() => onPageChange('contact')}>
                    {t('common.contactUs')}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section ref={insightsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('insights.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
              {language === 'fa' 
                ? 'آخرین اخبار و مقالات بازار مالی'
                : 'Latest financial market analysis and reports'
              }
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                key: 'energy',
                icon: Zap,
                color: 'from-yellow-500 to-orange-500',
                title: t('insights.energy'),
                thumbnail: 'https://images.unsplash.com/photo-1706043911713-391e022d2bbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtYXJrZXQlMjBvaWwlMjBnYXN8ZW58MXx8fHwxNzU1Mjc3ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                date: language === 'fa' ? '۲۳ دی ۱۴۰۳' : 'January 13, 2025'
              },
              { 
                key: 'forex',
                icon: TrendingUp,
                color: 'from-blue-500 to-blue-600',
                title: t('insights.forex'),
                thumbnail: 'https://images.unsplash.com/photo-1640552435845-d65c23b75934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JleCUyMHRyYWRpbmclMjBzY3JlZW58ZW58MXx8fHwxNzU1Mjc3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                date: language === 'fa' ? '۲۱ دی ۱۴۰۳' : 'January 11, 2025'
              },
              { 
                key: 'hedging',
                icon: Shield,
                color: 'from-green-500 to-green-600',
                title: t('insights.hedging'),
                thumbnail: 'https://images.unsplash.com/photo-1744782211816-c5224434614f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydHMlMjBhbmFseXNpc3xlbnwxfHx8fDE3NTUyNjkzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                date: language === 'fa' ? '۱۹ دی ۱۴۰۳' : 'January 9, 2025'
              }
            ].map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={insight.thumbnail}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <motion.div 
                        className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {insight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {insight.date}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors">
                          {language === 'fa' ? 'مطالعه مقاله' : 'Read Article'}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={insightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => onPageChange('insights')}
                className="financial-gradient text-white"
              >
                {t('insights.viewAll')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}