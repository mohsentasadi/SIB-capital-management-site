import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  ArrowRight, DollarSign, Zap, TrendingUp, CheckCircle, FileText, MessageSquare, ChevronDown,
  Globe, Factory, Gem, Briefcase, Beaker, Leaf, CookingPot
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import bannerImage from 'figma:asset/d7af6c748e819a583ba8ebfc93174a552d78987f.png';
import newBenefitsImage from 'figma:asset/09a9ca30e03a40a8938db7be08a89d6ccfbf011f.png';

interface HedgingPageProps {
  onPageChange: (page: string) => void;
}

// Helper function to convert English digits to Persian digits
const toPersianDigits = (n: string | number): string => {
  const persianDigits: { [key: string]: string } = {
    '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
    '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
  };
  return String(n).replace(/[0-9]/g, (d) => persianDigits[d]);
};


export function HedgingPage({ onPageChange }: HedgingPageProps) {
  const { language, t } = useLanguage();

  const [isCurrencyListOpen, setCurrencyListOpen] = useState(false);

  const currencyList = [
    { en: 'EUR/USD', fa: 'یورو / دلار آمریکا' },
    { en: 'USD/JPY', fa: 'دلار آمریکا / ین ژاپن' },
    { en: 'GBP/USD', fa: 'پوند بریتانیا / دلار آمریکا' },
    { en: 'USD/CHF', fa: 'دلار آمریکا / فرانک سوئیس' },
    { en: 'AUD/USD', fa: 'دلار استرالیا / دلار آمریکا' },
    { en: 'USD/CAD', fa: 'دلار آمریکا / دلار کانادا' },
    { en: 'NZD/USD', fa: 'دلار نیوزیلند / دلار آمریکا' },
    { en: 'EUR/JPY', fa: 'یورو / ین ژاپن' },
  ];


  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const whoWeServeRef = useRef(null);
  const productsRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const whoWeServeInView = useInView(whoWeServeRef, { once: true, margin: "-100px" });
  const productsInView = useInView(productsRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const translations = {
    en: {
      hedging: {
        hero: {
          title: 'Comprehensive Risk Hedging Solutions',
          description: 'Protect your investments from market volatility with our sophisticated hedging solutions and expert guidance across global markets.',
          button: 'Get Started'
        },
        overview: {
          title: 'Overview',
          description: 'In today\'s volatile environment, fluctuations in currency exchange rates, energy prices, metals, and raw materials can directly impact the profitability and financial stability of businesses.',
          solution: 'Sib\'s hedging solutions, utilizing advanced financial instruments and custom-designed strategies, help you minimize the impact of this volatility and stabilize your financial flows.',
          stats: {
            markets: 'Global Markets',
            countries: 'Countries'
          }
        },
        whoWeServe: {
          title: 'Who We Serve',
          description: 'Our services are designed for a wide range of economic players:',
          clients: [
            'Importers and exporters of goods',
            'Manufacturers dependent on energy or raw material prices',
            'Businesses in the metals industry',
            'Companies with foreign currency or international transactions',
            'Institutional investors and investment funds',
            'Petrochemical companies',
            'Businesses in the agricultural sector',
            'Food producers'
          ]
        },
        products: {
          title: 'Products & Markets',
          description: 'Access to international markets with comprehensive coverage and diverse instruments',
          exchanges: {
            title: 'Exchanges',
            description: 'We provide access to over 33 international markets in 150 countries.',
          },
          markets: {
            title: 'Markets',
            commodities: {
              title: 'Commodities',
              energy: 'Crude Oil, Natural Gas, Petroleum Products',
              metals: 'Gold, Silver, Copper, Aluminum, and other industrial metals',
              agriculture: 'Grains, Coffee, Sugar, Cotton, and other agricultural products'
            },
            forex: {
              title: 'Foreign Exchange',
              description: 'Trading in major and most-traded currency pairs worldwide.',
              linkText: 'View the List of Major Currencies'
            }
          }
        },
        process: {
          title: 'Our Process',
          steps: [
            {
              number: '1',
              title: 'Needs Analysis & Risk Assessment',
              description: 'A detailed review of your cost structure, financial flows, and business sensitivity to price fluctuations.'
            },
            {
              number: '2',
              title: 'Custom Strategy Design',
              description: 'Selecting the appropriate instruments, such as futures, options, forwards, or swaps.'
            },
            {
              number: '3',
              title: 'Trade Execution',
              description: 'Optimal execution using secure and fast trading platforms, in full compliance with regulatory requirements.'
            },
            {
              number: '4',
              title: 'Continuous Monitoring & Adjustment',
              description: 'Actively monitoring the market and revising the strategy to ensure continued effectiveness under changing conditions.'
            }
          ]
        },
        benefits: {
          title: 'Key Benefits',
          description: 'Our hedging solutions provide multiple advantages for your business:',
          list: [
            'Stabilized cash flow and financial predictability',
            'Reduced impact of market volatility on profitability',
            'Access to international markets and diverse financial instruments',
            'Trade execution with competitive fees and full transparency',
            'Access to a specialized team of local and international experts'
          ]
        },
        cta: {
          title: 'Act Today to Protect Your Capital',
          description: 'Contact Sib\'s consultants, and we will design a hedging solution tailored to your business needs.',
          primaryBtn: 'Request a Free Consultation',
          secondaryBtn: 'Get Started'
        }
      }
    },
    fa: {
      hedging: {
        hero: {
            title: 'راهکارهای جامع پوشش ریسک',
            description: 'با استفاده از ابزارهای مالی پیشرفته و استراتژی‌های اختصاصی، سرمایه خود را در برابر نوسانات بازار محافظت کنید.',
            button: 'شروع همکاری'
        },
        overview: {
          title: 'معرفی کلی',
          description: 'در فضای پرنوسان امروز، نوسانات نرخ ارز، قیمت انرژی، فلزات و مواد اولیه می‌تواند به‌طور مستقیم بر سودآوری و ثبات مالی کسب‌وکارها تأثیر بگذارد.',
          solution: 'راهکارهای پوشش ریسک سیب، با استفاده از ابزارهای مالی پیشرفته و طراحی استراتژی‌های اختصاصی، به شما کمک می‌کند تا اثر این نوسانات را به حداقل رسانده و جریان‌های مالی خود را تثبیت کنید.',
          stats: {
            markets: 'بازار بین‌المللی',
            countries: 'کشور'
          }
        },
        whoWeServe: {
          title: 'مخاطبان ما',
          description: 'خدمات ما برای طیف گسترده‌ای از فعالان اقتصادی طراحی شده است:',
          clients: [
            'شرکت‌های واردکننده و صادرکننده کالا',
            'تولیدکنندگان وابسته به قیمت انرژی یا مواد اولیه',
            'کسب‌وکارهای فعال در صنایع فلزات',
            'شرکت‌های دارای تراکنش‌های ارزی یا بین‌المللی',
            'سرمایه‌گذاران نهادی و صندوق‌های سرمایه‌گذاری',
            'شرکت‌های پتروشیمی',
            'کسب‌و‌کارهای حوزه کشاورزی',
            'تولیدکنندگان موارد غذایی'
          ]
        },
        products: {
          title: 'محصولات و بازارها',
          description: 'دسترسی به بازارهای بین‌المللی با پوشش جامع و ابزارهای متنوع',
          exchanges: {
            title: 'بورس‌ها',
            description: 'ما به بیش از ۳۳ بازار بین‌المللی در ۱۵۰ کشور دسترسی داریم.',
          },
          markets: {
            title: 'بازارها',
            commodities: {
              title: 'کالاها (Commodities)',
              energy: 'نفت خام، گاز طبیعی، فرآورده‌های نفتی',
              metals: 'طلا، نقره، مس، آلومینیوم و سایر فلزات صنعتی',
              agriculture: 'غلات، قهوه، شکر، پنبه و سایر محصولات کشاورزی'
            },
            forex: {
              title: 'ارزهای خارجی (Forex)',
              description: 'معاملات در جفت‌ارزهای اصلی و پرمعامله جهان',
              linkText: 'مشاهده لیست ارزهای اصلی'
            }
          }
        },
        process: {
          title: 'فرآیند ما',
          steps: [
            {
              number: '۱',
              title: 'تحلیل نیاز و ارزیابی ریسک',
              description: 'بررسی دقیق ساختار هزینه، جریان‌های مالی و حساسیت کسب‌وکار به نوسانات قیمت.'
            },
            {
              number: '۲',
              title: 'طراحی استراتژی اختصاصی',
              description: 'انتخاب ابزارهای مناسب مانند قراردادهای آتی، اختیار معامله، فوروارد یا سوآپ.'
            },
            {
              number: '۳',
              title: 'اجرای معاملات',
              description: 'اجرای بهینه با استفاده از پلتفرم‌های معاملاتی امن و سریع، مطابق با الزامات قانونی.'
            },
            {
              number: '۴',
              title: 'پایش و تعدیل مستمر',
              description: 'رصد بازار و بازنگری در استراتژی برای اطمینان از حفظ اثرگذاری در شرایط متغیر.'
            }
          ]
        },
        benefits: {
          title: 'مزایای کلیدی',
          description: 'راهکارهای پوشش ریسک ما مزایای متعددی برای کسب‌وکار شما فراهم می‌کند:',
          list: [
            'تثبیت جریان نقدی و پیش‌بینی‌پذیری مالی',
            'کاهش اثر نوسانات بازار بر سودآوری',
            'دسترسی به بازارهای بین‌المللی و ابزارهای متنوع مالی',
            'اجرای معاملات با کارمزد حداقلی و شفافیت کامل',
            'بهره‌مندی از تیم متخصص ایرانی و بین‌المللی'
          ]
        },
        cta: {
          title: 'امروز برای محافظت از سرمایه خود اقدام کنید',
          description: 'با مشاوران سیب در تماس باشید تا راهکار پوشش ریسک مناسب کسب‌وکار شما را طراحی کنیم.',
          primaryBtn: 'درخواست مشاوره رایگان',
          secondaryBtn: 'شروع همکاری'
        }
      }
    }
  };

  const hedgingData = translations[language].hedging;

  const clientIcons = [
    Globe,
    Factory,
    Gem,
    DollarSign,
    Briefcase,
    Beaker,
    Leaf,
    CookingPot
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {hedgingData.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {hedgingData.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => onPageChange('contact')}
              >
                {hedgingData.hero.button}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {hedgingData.overview.title}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {hedgingData.overview.description}
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {hedgingData.overview.solution}
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="aspect-video rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80"
                  alt="Risk management dashboard and analytics"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-4 text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary">{language === 'fa' ? toPersianDigits('33+') : '33+'}</div>
                  <div className="text-sm text-muted-foreground">
                    {hedgingData.overview.stats.markets}
                  </div>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-4 text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary">{language === 'fa' ? toPersianDigits('150') : '150'}</div>
                  <div className="text-sm text-muted-foreground">
                    {hedgingData.overview.stats.countries}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section ref={whoWeServeRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={whoWeServeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              {hedgingData.whoWeServe.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {hedgingData.whoWeServe.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hedgingData.whoWeServe.clients.map((client: string, index: number) => {
              const IconComponent = clientIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={whoWeServeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group h-full flex flex-col justify-center items-center p-6 text-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg leading-tight">{client}</CardTitle>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products & Markets */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              {hedgingData.products.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {hedgingData.products.description}
            </p>
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
                <CardHeader className="text-center p-8">
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TrendingUp className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl">{hedgingData.products.exchanges.title}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {hedgingData.products.exchanges.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>

          <div>
            <motion.h3
              className="text-2xl font-semibold text-primary mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {hedgingData.products.markets.title}
            </motion.h3>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">{hedgingData.products.markets.commodities.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 flex-row-reverse justify-end text-right">
                        <span className="text-muted-foreground flex-1">{hedgingData.products.markets.commodities.energy}</span>
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      </div>
                      <div className="flex items-start gap-3 flex-row-reverse justify-end text-right">
                        <span className="text-muted-foreground flex-1">{hedgingData.products.markets.commodities.metals}</span>
                         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      </div>
                      <div className="flex items-start gap-3 flex-row-reverse justify-end text-right">
                        <span className="text-muted-foreground flex-1">{hedgingData.products.markets.commodities.agriculture}</span>
                         <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
                  <CardHeader className="text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DollarSign className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">{hedgingData.products.markets.forex.title}</CardTitle>
                    <CardDescription className="mt-2">{hedgingData.products.markets.forex.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      onClick={() => setCurrencyListOpen(!isCurrencyListOpen)}
                      className="flex justify-between items-center p-3 border-t border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                    >
                      <span className="font-semibold text-primary">{hedgingData.products.markets.forex.linkText}</span>
                      <motion.div
                        animate={{ rotate: isCurrencyListOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {isCurrencyListOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-4 bg-gray-50">
                            {currencyList.map((currency, index) => (
                              <div key={index} className="text-sm text-muted-foreground text-right">
                                {language === 'fa' ? currency.fa : currency.en}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section ref={processRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              {hedgingData.process.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {hedgingData.process.steps.map((step: any, index: number) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits - FINAL CORRECTED VERSION */}
      <section ref={benefitsRef} className="py-16 bg-white" dir={language === 'fa' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === 'fa' ? 50 : -50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: language === 'fa' ? 50 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className={`text-3xl font-bold text-primary mb-6 ${language === 'fa' ? 'text-center' : 'text-left'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {hedgingData.benefits.title}
              </motion.h2>
              <motion.p
                className={`text-xl text-muted-foreground mb-8 leading-relaxed ${language === 'fa' ? 'text-right' : 'text-left'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {hedgingData.benefits.description}
              </motion.p>
              <div className="space-y-4">
                {hedgingData.benefits.list.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: language === 'fa' ? 20 : -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: language === 'fa' ? 20 : -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: language === 'fa' ? -5 : 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    </motion.div>
                    <span
                      className={`flex-1 text-lg text-muted-foreground leading-relaxed ${language === 'fa' ? 'text-right' : 'text-left'}`}
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: language === 'fa' ? -50 : 50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: language === 'fa' ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="aspect-square rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={newBenefitsImage}
                  alt="Key benefits and growth protection"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-16 bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {hedgingData.cta.title}
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hedgingData.cta.description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => onPageChange('contact')}
              >
                {hedgingData.cta.primaryBtn}
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white/20"
                onClick={() => onPageChange('contact')}
              >
                {hedgingData.cta.secondaryBtn}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}