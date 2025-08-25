import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, BarChart3, Shield, TrendingUp, PieChart, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Footer } from './Footer';

interface PortfolioPageProps {
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

export function PortfolioPage({ onPageChange }: PortfolioPageProps) {
  const { language, t } = useLanguage();

  // Translations Object
  const translations = {
    en: {
      badge: 'Portfolio Management',
      hero: {
        title: 'Tailored Investment Management Solutions',
        description: 'Our portfolio management services combine institutional-grade investment strategies with personalized attention to help you achieve your unique financial objectives.',
        button: 'Start Your Portfolio'
      },
      overview: {
        title: 'Professional Portfolio Management',
        description: 'Our portfolio management approach is built on rigorous research, disciplined investment processes, and continuous risk management. We work closely with each client to understand their unique circumstances and develop customized investment strategies.',
        stats: {
          aum: 'Assets Under Management',
          clients: 'Portfolio Clients'
        },
        philosophy: {
          title: 'Our Investment Philosophy',
          description: 'We believe in a disciplined, research-driven approach to investing that focuses on long-term value creation while managing downside risk.'
        },
        approach: {
          title: 'Personalized Approach',
          description: 'Every portfolio is tailored to the client\'s specific objectives, risk tolerance, time horizon, and liquidity needs.'
        }
      },
      strategies: {
        title: 'Investment Strategies',
        description: 'Choose from our range of investment strategies designed to meet different risk profiles and objectives',
        items: [
          { title: 'Conservative Growth', description: 'Capital preservation with modest growth potential', riskLevel: 'Low', targetReturn: '4-6%' },
          { title: 'Balanced Growth', description: 'Balanced approach between growth and income', riskLevel: 'Medium', targetReturn: '7-10%' },
          { title: 'Aggressive Growth', description: 'Maximum growth potential with higher risk tolerance', riskLevel: 'High', targetReturn: '11-15%' }
        ],
        riskLevel: 'Risk Level',
        targetReturn: 'Target Return',
        learnMore: 'Learn More'
      },
      services: {
        title: 'Comprehensive Portfolio Services',
        description: 'End-to-end portfolio management services designed to optimize your investment outcomes',
        items: [
          { title: 'Investment Analysis', description: 'Comprehensive research and due diligence on investment opportunities', features: ['Market research', 'Risk assessment', 'Performance analysis', 'Compliance review'] },
          { title: 'Asset Allocation', description: 'Strategic and tactical asset allocation based on your objectives', features: ['Strategic planning', 'Tactical adjustments', 'Rebalancing', 'Risk management'] },
          { title: 'Performance Monitoring', description: 'Continuous monitoring and reporting of portfolio performance', features: ['Real-time tracking', 'Performance attribution', 'Risk metrics', 'Benchmarking'] },
          { title: 'Client Reporting', description: 'Transparent and comprehensive reporting on all aspects of your portfolio', features: ['Monthly reports', 'Quarterly reviews', 'Custom analytics', 'Client portal access'] }
        ]
      },
      process: {
        title: 'Our Process',
        description: 'A systematic approach to portfolio management',
        steps: [
          { step: '01', title: 'Discovery', description: 'Understanding your objectives, constraints, and preferences' },
          { step: '02', title: 'Design', description: 'Creating a customized investment strategy and asset allocation' },
          { step: '03', title: 'Implementation', description: 'Executing the strategy with precision and care' },
          { step: '04', title: 'Monitoring', description: 'Continuous oversight and optimization of your portfolio' }
        ]
      },
      cta: {
        title: 'Ready to Optimize Your Portfolio?',
        description: 'Let our experienced portfolio managers help you achieve your investment objectives with a customized strategy designed specifically for your needs.',
        primaryBtn: 'Start Your Portfolio',
        secondaryBtn: 'Schedule Consultation'
      }
    },
    fa: {
      badge: 'مدیریت سبد دارایی',
      hero: {
        title: 'راهکارهای اختصاصی مدیریت سرمایه‌گذاری',
        description: 'خدمات مدیریت سبد دارایی ما، استراتژی‌های سرمایه‌گذاری حرفه‌ای را با رویکردی شخصی‌سازی‌شده ترکیب می‌کند تا شما را در دستیابی به اهداف مالی منحصربه‌فردتان یاری دهد.',
        button: 'سبد خود را بسازید'
      },
      overview: {
        title: 'مدیریت حرفه‌ای سبد دارایی',
        description: 'رویکرد ما در مدیریت سبد بر پایه تحقیقات دقیق، فرآیندهای سرمایه‌گذاری منظم و مدیریت مستمر ریسک بنا شده است. ما با هر مشتری از نزدیک همکاری می‌کنیم تا شرایط ویژه او را درک کرده و استراتژی‌های سرمایه‌گذاری سفارشی را توسعه دهیم.',
        stats: {
          aum: 'دارایی تحت مدیریت',
          clients: 'مشتریان مدیریت سبد'
        },
        philosophy: {
          title: 'فلسفه سرمایه‌گذاری ما',
          description: 'ما به یک رویکرد سرمایه‌گذاری منظم و مبتنی بر تحقیق باور داریم که بر خلق ارزش بلندمدت و همزمان مدیریت ریسک‌های نزولی متمرکز است.'
        },
        approach: {
          title: 'رویکرد شخصی‌سازی‌شده',
          description: 'هر سبد دارایی متناسب با اهداف مشخص، آستانه تحمل ریسک، افق زمانی و نیازهای نقدینگی مشتری طراحی می‌شود.'
        }
      },
      strategies: {
        title: 'استراتژی‌های سرمایه‌گذاری',
        description: 'از میان طیف وسیعی از استراتژی‌های سرمایه‌گذاری ما که برای پروفایل‌های ریسک و اهداف مختلف طراحی شده‌اند، انتخاب کنید.',
        items: [
          { title: 'رشد محافظه‌کارانه', description: 'حفظ اصل سرمایه با پتانسیل رشد محدود', riskLevel: 'پایین', targetReturn: '۴-۶٪' },
          { title: 'رشد متوازن', description: 'رویکردی متوازن میان رشد و درآمد', riskLevel: 'متوسط', targetReturn: '۷-۱۰٪' },
          { title: 'رشد تهاجمی', description: 'حداکثر پتانسیل رشد با تحمل ریسک بالاتر', riskLevel: 'بالا', targetReturn: '۱۱-۱۵٪' }
        ],
        riskLevel: 'سطح ریسک',
        targetReturn: 'بازده هدف',
        learnMore: 'بیشتر بدانید'
      },
      services: {
        title: 'خدمات جامع مدیریت سبد',
        description: 'خدمات یکپارچه مدیریت سبد که برای بهینه‌سازی نتایج سرمایه‌گذاری شما طراحی شده است.',
        items: [
          { title: 'تحلیل سرمایه‌گذاری', description: 'تحقیقات جامع و ارزیابی دقیق فرصت‌های سرمایه‌گذاری', features: ['تحقیقات بازار', 'ارزیابی ریسک', 'تحلیل عملکرد', 'بررسی انطباق با مقررات'] },
          { title: 'تخصیص دارایی', description: 'تخصیص استراتژیک و تاکتیکی دارایی‌ها بر اساس اهداف شما', features: ['برنامه‌ریزی استراتژیک', 'تعدیل‌های تاکتیکی', 'توازن مجدد سبد', 'مدیریت ریسک'] },
          { title: 'پایش عملکرد', description: 'نظارت و گزارش‌دهی مستمر از عملکرد سبد دارایی', features: ['رهگیری لحظه‌ای', 'عامل‌سنجی عملکرد', 'معیارهای ریسک', 'مقایسه با شاخص'] },
          { title: 'گزارش‌دهی به مشتریان', description: 'گزارش‌دهی شفاف و جامع از تمام جنبه‌های سبد شما', features: ['گزارش‌های ماهانه', 'بررسی‌های فصلی', 'تحلیل‌های سفارشی', 'دسترسی به پورتال مشتریان'] }
        ]
      },
      process: {
        title: 'فرآیند ما',
        description: 'یک رویکرد سیستماتیک برای مدیریت سبد دارایی',
        steps: [
          { step: '۰۱', title: 'شناخت', description: 'درک اهداف، محدودیت‌ها و اولویت‌های شما' },
          { step: '۰۲', title: 'طراحی', description: 'خلق یک استراتژی سرمایه‌گذاری و تخصیص دارایی سفارشی' },
          { step: '۰۳', title: 'پیاده‌سازی', description: 'اجرای استراتژی با دقت و توجه کامل' },
          { step: '۰۴', title: 'نظارت', description: 'بررسی و بهینه‌سازی مستمر سبد دارایی شما' }
        ]
      },
      cta: {
        title: 'برای بهینه‌سازی سبد خود آماده‌اید؟',
        description: 'اجازه دهید مدیران سبد باتجربه ما به شما کمک کنند تا با یک استراتژی سفارشی که منحصراً برای نیازهای شما طراحی شده، به اهداف سرمایه‌گذاری خود دست یابید.',
        primaryBtn: 'سبد خود را بسازید',
        secondaryBtn: 'درخواست مشاوره'
      }
    }
  };

  const data = language === 'fa' ? translations.fa : translations.en;
  
  const strategyIcons = [Shield, BarChart3, TrendingUp];

  return (
    <div className={`flex flex-col ${language === 'fa' ? 'persian' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {data.badge}
            </Badge>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
              {data.hero.title}
            </h1>
            <p className={`text-xl text-white/90 mb-8 leading-relaxed ${language === 'fa' ? 'text-justify' : 'text-left'}`}>
              {data.hero.description}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onPageChange('contact')}
            >
              {data.hero.button}
              <ArrowRight className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold text-primary mb-6 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                {data.overview.title}
              </h2>
              <p className={`text-lg text-muted-foreground mb-6 ${language === 'fa' ? 'text-justify' : 'text-left'}`}>
                {data.overview.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <PieChart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-primary">{language === 'fa' ? toPersianDigits('۲.۵') + '+ میلیارد دلار' : '$2.5B+'}</div>
                  <div className="text-sm text-muted-foreground">{data.overview.stats.aum}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-primary">{language === 'fa' ? toPersianDigits('۳۰۰') + '+' : '300+'}</div>
                  <div className="text-sm text-muted-foreground">{data.overview.stats.clients}</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
                <h3 className={`font-semibold text-primary mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.overview.philosophy.title}</h3>
                <p className={`text-muted-foreground text-sm ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                  {data.overview.philosophy.description}
                </p>
              </div>
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6">
                <h3 className={`font-semibold text-primary mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.overview.approach.title}</h3>
                <p className={`text-muted-foreground text-sm ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                  {data.overview.approach.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{data.strategies.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.strategies.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {data.strategies.items.map((strategy, index) => {
              const IconComponent = strategyIcons[index];
              const riskVariant = strategy.riskLevel === 'پایین' || strategy.riskLevel === 'Low' ? 'secondary' 
                                : strategy.riskLevel === 'متوسط' || strategy.riskLevel === 'Medium' ? 'default' 
                                : 'destructive';
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${['from-green-500 to-green-600', 'from-blue-500 to-blue-600', 'from-purple-500 to-purple-600'][index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center">{strategy.title}</CardTitle>
                    <CardDescription className="text-center">{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">{data.strategies.riskLevel}</div>
                        <Badge variant={riskVariant}>
                          {strategy.riskLevel}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{data.strategies.targetReturn}</div>
                        <div className="font-semibold text-primary">{language === 'fa' ? toPersianDigits(strategy.targetReturn) : strategy.targetReturn}</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      {data.strategies.learnMore}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{data.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.services.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className={language === 'fa' ? 'text-right' : 'text-left'}>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{data.process.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.process.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {data.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{data.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {data.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onPageChange('contact')}
            >
              {data.cta.primaryBtn}
              <ArrowRight className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white/20"
            >
              {data.cta.secondaryBtn}
            </Button>
          </div>
        </div>
      </section>

      {/* [FIX] The duplicate Footer was removed from here to solve the bug. */}
      {/* The main footer from the parent layout will now be the only one displayed. */}
      
    </div>
  );
}