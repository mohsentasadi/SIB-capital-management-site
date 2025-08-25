import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      hedging: 'Hedging Solutions',
      brokerage: 'Brokerage Services', 
      portfolio: 'Portfolio Management',
      about: 'About Us',
      contact: 'Contact Us',
      education: 'Education',
      insights: 'Insights'
    },
    
    // Hero Section
    hero: {
      title: 'Intelligent Risk Management with Modern Financial Tools',
      subtitle: 'With Sib, stay ahead of market volatility and safeguard your capital against unexpected changes.',
      cta: 'Get Started',
      learnMore: 'Get a Free Consultation'
    },
    
    // Quick Access
    quick: {
      title: 'Our Services',
      hedging: {
        title: 'Hedging Solutions',
        desc: 'Customized risk hedging solutions tailored to your needs—from futures and options contracts to swaps and forwards—aimed at stabilizing financial flows and mitigating the effects of market volatility.'
      },
      brokerage: {
        title: 'Brokerage Services',
        desc: 'Fast, direct access to over 33 international markets in 150 countries, featuring advanced analytical tools, data security, and competitive fees.'
      },
      portfolio: {
        title: 'Portfolio Management',
        desc: 'Scientific management and optimization of your investment portfolio, with continuous market monitoring and strategy adjustments to maintain returns in changing conditions.'
      }
    },
    
    // Trust & Regulatory
    trust: {
      title: 'Why Choose SIB',
      regulatory: 'Licensed Operations',
      security: 'Data Security',
      experience: 'Years Experience',
      highlights: {
        licensed: 'Fully licensed with international credentials for executing risk hedging operations.',
        team: 'A specialized team of Iranian and international experts with extensive experience in financial markets.',
        transparency: 'Complete transparency in fees and costs, with no hidden charges.',
        technology: 'Utilization of advanced technologies for data security and protection.'
      }
    },
    
    // About Preview
    about: {
      title: 'About Us',
      description: 'Sib Capital Management, the fintech division of an investment holding, was established in 2020 to provide innovative risk management services, financial consulting, and the design of financial instruments. Leveraging our expertise and specialized knowledge, we deliver solutions that empower businesses and investors to make confident decisions in today\'s volatile environment.'
    },
    
    // Latest Insights
    insights: {
      title: 'Latest Insights',
      energy: 'Energy Market Developments Report',
      forex: 'Analysis of Last Week\'s Foreign Exchange Rate Fluctuations', 
      hedging: 'Introducing Modern Hedging Instruments in Iran',
      viewAll: 'View All Articles'
    },
    
    // Common
    common: {
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      getStarted: 'Get Started'
    },
    
    // Hedging Page
    hedging: {
      overview: {
        title: 'Overview',
        description: 'In today\'s volatile environment, fluctuations in currency exchange rates, energy prices, metals, and raw materials can directly impact the profitability and financial stability of businesses.',
        solution: 'Sib\'s hedging solutions, utilizing advanced financial instruments and custom-designed strategies, help you minimize the impact of this volatility and stabilize your financial flows.'
      },
      whoWeServe: {
        title: 'Who We Serve',
        description: 'Our services are designed for a wide range of economic players:',
        clients: [
          'Importers and exporters of goods',
          'Manufacturers dependent on energy or raw material prices',
          'Businesses in the metals, petrochemical, and agricultural industries',
          'Companies with foreign currency or international transactions',
          'Institutional investors and investment funds'
        ]
      },
      products: {
        title: 'Products & Markets',
        exchanges: {
          title: 'Exchanges',
          description: 'We provide access to over 33 international markets in 150 countries.',
          linkText: 'Get the Full List of Exchanges & Markets — Excel / Telegram'
        },
        markets: {
          title: 'Markets',
          commodities: {
            title: 'Commodities',
            energy: 'Energy: Crude Oil, Natural Gas, Petroleum Products',
            metals: 'Metals: Gold, Silver, Copper, Aluminum, and other industrial metals',
            agriculture: 'Agriculture: Grains, Coffee, Sugar, Cotton, and other agricultural products'
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
    },
    
    // Footer
    footer: {
      legal: 'Legal',
      contact: 'Contact',
      copyright: '© 2025 SIB Company. All rights reserved.',
      risk: 'Risk Warning'
    }
  },
  
  fa: {
    // Navigation
    nav: {
      home: 'خانه',
      services: 'خدمات',
      hedging: 'راهکارهای پوشش ریسک',
      brokerage: 'خدمات کارگزاری',
      portfolio: 'مدیریت سبد',
      about: 'درباره ما',
      contact: 'تماس با ما',
      education: 'آموزش',
      insights: 'تحلیل‌ها'
    },
    
    // Hero Section
    hero: {
      title: 'مدیریت هوشمند ریسک با ابزارهای نوین مالی',
      subtitle: 'با سیب، از نوسانات بازار پیشی بگیرید و سرمایه خود را در برابر تغییرات غیرمنتظره محافظت کنید.',
      cta: 'شروع همکاری',
      learnMore: 'دریافت مشاوره رایگان'
    },
    
    // Quick Access
    quick: {
      title: 'خدمات ما',
      hedging: {
        title: 'راهکارهای پوشش ریسک',
        desc: 'راهکارهای پوشش ریسک سفارشی‌سازی‌شده بر اساس نیاز شما — از قراردادهای آتی و اختیار معامله تا سوآپ و فوروارد، با هدف تثبیت جریان‌های مالی و کاهش اثرات نوسانات بازار.'
      },
      brokerage: {
        title: 'خدمات کارگزاری',
        desc: 'دسترسی مستقیم و سریع به بیش از ۳۳ بازار بین‌المللی در ۱۵۰ کشور، با ابزارهای تحلیلی پیشرفته، امنیت داده‌ها و کارمزد حداقلی.'
      },
      portfolio: {
        title: 'مدیریت سبد سرمایه‌گذاری',
        desc: 'مدیریت و بهینه‌سازی سبد سرمایه‌گذاری با رویکردی علمی، با رصد مستمر بازار و تعدیل استراتژی‌ها برای حفظ بازدهی در شرایط متغیر.'
      }
    },
    
    // Trust & Regulatory
    trust: {
      title: 'چرا سیب را انتخاب کنیم',
      regulatory: 'دارای مجوز',
      security: 'امنیت داده‌ها', 
      experience: 'سال تجربه',
      highlights: {
        licensed: 'دارای مجوزهای معتبر بین‌المللی برای اجرای عملیات پوشش ریسک',
        team: 'تیم متخصص ایرانی و بین‌المللی با تجربه گسترده در بازارهای مالی',
        transparency: 'شفافیت کامل در کارمزدها و هزینه‌ها، بدون هزینه پنهان',
        technology: 'استفاده از فناوری‌های پیشرفته برای امنیت و حفاظت از داده‌ها'
      }
    },
    
    // About Preview
    about: {
      title: 'درباره ما',
      description: 'شرکت مدیریت سرمایه سیب، بازوی فناوری یک هلدینگ سرمایه‌گذاری است که از سال ۱۳۹۹ با هدف ارائه خدمات نوین مدیریت ریسک، مشاوره مالی و طراحی ابزارهای مالی فعالیت می‌کند. ما با تکیه بر تجربه و دانش تخصصی، راهکارهایی ارائه می‌دهیم که به فعالان اقتصادی کمک می‌کند در فضای پرنوسان امروز، با اطمینان تصمیم‌گیری و سرمایه‌گذاری کنند.'
    },
    
    // Latest Insights
    insights: {
      title: 'مقالات و اخبار',
      energy: 'گزارش تحولات بازار انرژی',
      forex: 'تحلیل تغییرات نرخ ارز در هفته گذشته',
      hedging: 'معرفی ابزارهای نوین هجینگ در ایران',
      viewAll: 'مشاهده همه مقالات'
    },
    
    // Common
    common: {
      learnMore: 'بیشتر بدانید',
      contactUs: 'تماس با ما',
      getStarted: 'شروع کنید'
    },
    
    // Hedging Page
    hedging: {
      overview: {
        title: 'Overview',
        description: 'در فضای پرنوسان امروز، نوسانات نرخ ارز، قیمت انرژی، فلزات و مواد اولیه می‌تواند به‌طور مستقیم بر سودآوری و ثبات مالی کسب‌وکارها تأثیر بگذارد.',
        solution: 'راهکارهای پوشش ریسک سیب، با استفاده از ابزارهای مالی پیشرفته و طراحی استراتژی‌های اختصاصی، به شما کمک می‌کند تا اثر این نوسانات را به حداقل رسانده و جریان‌های مالی خود را تثبیت کنید.'
      },
      whoWeServe: {
        title: 'Who We Serve',
        description: 'خدمات ما برای طیف گسترده‌ای از فعالان اقتصادی طراحی شده است:',
        clients: [
          'شرکت‌های واردکننده و صادرکننده کالا',
          'تولیدکنندگان وابسته به قیمت انرژی یا مواد اولیه',
          'کسب‌وکارهای فعال در صنایع فلزات، پetroشیمی و کشاورزی',
          'شرکت‌های دارای تراکنش‌های ارزی یا بین‌المللی',
          'سرمایه‌گذاران نهادی و صندوق‌های سرمایه‌گذاری'
        ]
      },
      products: {
        title: 'Products & Markets',
        exchanges: {
          title: 'Exchanges',
          description: 'ما به بیش از ۳۳ بازار بین‌المللی در ۱۵۰ کشور دسترسی داریم.',
          linkText: 'دریافت لیست کامل بورس‌ها و بازارها — Excel / Telegram'
        },
        markets: {
          title: 'Markets',
          commodities: {
            title: 'Commodities',
            energy: 'Energy: نفت خام، گاز طبیعی، فرآورده‌های نفتی',
            metals: 'Metals: طلا، نقره، مس، آلومینیوم و سایر فلزات صنعتی',
            agriculture: 'Agriculture: غلات، قهوه، شکر، پنبه و محصولات کشاورزی'
          },
          forex: {
            title: 'Foreign Exchange',
            description: 'معاملات در جفت‌ارزهای اصلی و پرمعامله جهان',
            linkText: 'مشاهده لیست ارزهای اصلی'
          }
        }
      },
      process: {
        title: 'Our Process',
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
        title: 'Key Benefits',
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
    },
    
    // Footer
    footer: {
      legal: 'قانونی',
      contact: 'تماس',
      copyright: '© ۱۴۰۳ شرکت سیب. تمامی حقوق محفوظ است.',
      risk: 'هشدار ریسک'
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let translation: any = translations[language];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    if (typeof translation === 'string') {
      return translation;
    }
    
    console.warn(`Translation key "${key}" does not resolve to a string`);
    return key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={language === 'fa' ? 'persian' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}