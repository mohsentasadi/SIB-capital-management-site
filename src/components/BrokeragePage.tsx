import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, TrendingUp, Zap, Shield, Clock, Phone, Monitor, BarChart3, ArrowLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BrokeragePageProps {
  onPageChange: (page: string) => void;
}

export function BrokeragePage({ onPageChange }: BrokeragePageProps) {
  const { language, t } = useLanguage();

  const translations = {
    en: {
      brokerage: {
        hero: {
          title: 'Professional Trading & Execution Services',
          description: 'Execute trades efficiently across global markets with our advanced trading platform, competitive pricing, and dedicated support from experienced professionals.',
          button: 'Start Trading'
        },
        overview: {
          title: 'World-Class Brokerage Services',
          description: 'Our brokerage services provide institutional and high-net-worth clients with access to global markets, advanced trading technology, and expert execution. We combine cutting-edge technology with personalized service to deliver optimal trading outcomes.',
          stats: [
            { value: '50+', label: 'Global Markets' },
            { value: '0.01s', label: 'Execution Speed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support' }
          ]
        },
        services: {
          title: 'Trading Services',
          description: 'Comprehensive trading solutions across all major asset classes',
          list: [
            {
              title: 'Equity Trading',
              description: 'Access to global equity markets with competitive execution',
              icon: TrendingUp,
              features: ['Real-time execution', 'Global markets', 'Competitive rates']
            },
            {
              title: 'Derivatives Trading',
              description: 'Comprehensive derivatives trading across multiple asset classes',
              icon: BarChart3,
              features: ['Options & Futures', 'Risk management', 'Expert guidance']
            },
            {
              title: 'Fixed Income',
              description: 'Bond and fixed income securities trading and execution',
              icon: Shield,
              features: ['Government bonds', 'Corporate bonds', 'Yield optimization']
            },
            {
              title: 'Commodities',
              description: 'Physical and financial commodity trading services',
              icon: Zap,
              features: ['Energy markets', 'Precious metals', 'Agricultural products']
            }
          ]
        },
        exchanges: {
            title: 'Global Exchange Access',
            description: 'Trade on major exchanges worldwide with seamless connectivity and competitive rates',
            list: [
              { 
                name: 'NYSE', 
                region: 'Americas', 
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/nyse.svg' 
              },
              { 
                name: 'NASDAQ', 
                region: 'Americas', 
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Nasdaq_logo.svg' 
              },
              { 
                name: 'LSE', 
                region: 'Europe', 
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/london-stock-exchange.svg' 
              },
              { 
                name: 'Euronext', 
                region: 'Europe', 
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/euronext.svg' 
              },
              { 
                name: 'TSE', 
                region: 'Asia', 
                logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Japan_Exchange_Group_logo.svg' 
              },
              { 
                name: 'HKEX', 
                region: 'Asia', 
                logoUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/Hkex_logo.svg' 
              },
              { 
                name: 'ASX', 
                region: 'Asia-Pacific', 
                logoUrl: 'https://cdn.worldvectorlogo.com/logos/asx.svg' 
              },
              { 
                name: 'JSE', 
                region: 'Africa', 
                logoUrl: 'https://upload.wikimedia.org/wikipedia/en/d/de/JSE_Limited_logo.svg' 
              }
            ]
        },
        platform: {
          title: 'Advanced Trading Platform',
          description: 'State-of-the-art technology delivering speed, reliability, and comprehensive functionality',
          features: [
            {
              title: 'Advanced Trading Platform',
              description: 'Professional-grade trading interface with real-time data',
              icon: Monitor,
              features: ['Real-time quotes', 'Advanced charting', 'Risk management tools', 'Mobile access']
            },
            {
              title: 'API Integration',
              description: 'Connect your systems with our robust API infrastructure',
              icon: Zap,
              features: ['RESTful API', 'WebSocket feeds', 'Custom integrations', 'High performance']
            },
            {
              title: 'Risk Management',
              description: 'Comprehensive risk controls and monitoring systems',
              icon: Shield,
              features: ['Position limits', 'Real-time monitoring', 'Automated alerts', 'Compliance tools']
            }
          ]
        },
        support: {
          title: 'Dedicated Client Support',
          description: 'Comprehensive support services to ensure your trading success',
          services: [
            { title: '24/7 Trading Desk', description: 'Round-the-clock support from our experienced trading professionals', icon: Clock },
            { title: 'Dedicated Relationship Manager', description: 'Personal support from a dedicated team member who understands your needs', icon: Phone },
            { title: 'Market Research', description: 'Access to comprehensive market analysis and trading insights', icon: BarChart3 },
            { title: 'Training & Education', description: 'Ongoing education and training programs for your trading team', icon: Monitor }
          ]
        },
        cta: {
          title: 'Ready to Start Trading?',
          description: 'Join thousands of professionals who trust our brokerage services for their trading needs. Contact us today to get started.',
          primaryBtn: 'Open Trading Account',
          secondaryBtn: 'Schedule Demo'
        }
      }
    },
    fa: {
      brokerage: {
        hero: {
          title: 'خدمات حرفه‌ای معاملات و اجرا',
          description: 'معاملات خود را با استفاده از پلتفرم معاملاتی پیشرفته، قیمت‌گذاری رقابتی و پشتیبانی تخصصی ما در بازارهای جهانی با کارایی بالا اجرا کنید.',
          button: 'شروع معامله'
        },
        overview: {
          title: 'خدمات کارگزاری در کلاس جهانی',
          description: 'خدمات کارگزاری ما برای مشتریان نهادی و حقیقی با ارزش بالا، دسترسی به بازارهای جهانی، تکنولوژی معاملاتی پیشرفته و اجرای تخصصی را فراهم می‌کند. ما تکنولوژی روز را با خدمات شخصی‌سازی‌شده ترکیب می‌کنیم تا نتایج بهینه معاملاتی را ارائه دهیم.',
          stats: [
            { value: '+۵۰', label: 'بازار جهانی' },
            { value: '۰.۰۱ ثانیه', label: 'سرعت اجرا' },
            { value: '۹۹.۹٪', label: 'آپ‌تایم تضمین‌شده' },
            { value: '۲۴/۷', label: 'پشتیبانی' }
          ]
        },
        services: {
          title: 'خدمات معاملاتی',
          description: 'راهکارهای جامع معاملاتی در تمام کلاس‌های دارایی اصلی',
          list: [
            {
              title: 'معاملات سهام',
              description: 'دسترسی به بازارهای سهام جهانی با اجرای رقابتی',
              icon: TrendingUp,
              features: ['اجرای آنی', 'بازارهای جهانی', 'نرخ‌های رقابتی']
            },
            {
              title: 'معاملات مشتقه',
              description: 'معاملات جامع مشتقه در کلاس‌های دارایی متعدد',
              icon: BarChart3,
              features: ['قراردادهای اختیار و آتی', 'مدیریت ریسک', 'راهنمایی تخصصی']
            },
            {
              title: 'درآمد ثابت',
              description: 'معامله و اجرای اوراق قرضه و بهادار با درآمد ثابت',
              icon: Shield,
              features: ['اوراق قرضه دولتی', 'اوراق قرضه شرکتی', 'بهینه‌سازی بازده']
            },
            {
              title: 'کالاها',
              description: 'خدمات معاملات کالاهای فیزیکی و مالی',
              icon: Zap,
              features: ['بازارهای انرژی', 'فلزات گران‌بها', 'محصولات کشاورزی']
            }
          ]
        },
        exchanges: {
            title: 'دسترسی به بورس‌های جهانی',
            description: 'در بورس‌های بزرگ سراسر جهان با اتصال یکپارچه و نرخ‌های رقابتی معامله کنید.',
            list: [
              { 
                name: 'NYSE', 
                region: 'آمریکا', 
                logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/New-York-Stock-Exchange-NYSE-Logo.png' 
              },
              { 
                name: 'NASDAQ', 
                region: 'آمریکا', 
                logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Nasdaq-Logo.png' 
              },
              { 
                name: 'LSE', 
                region: 'اروپا', 
                logoUrl: 'https://companieslogo.com/img/orig/LSEG.L_BIG.D-8b0f070b.png' 
              },
              { 
                name: 'Euronext', 
                region: 'اروپا', 
                logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Euronext-Logo.png' 
              },
              { 
                name: 'TSE', 
                region: 'آسیا', 
                logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Japan-Exchange-Group-Logo.png' 
              },
              { 
                name: 'HKEX', 
                region: 'آسیا', 
                logoUrl: 'https://companieslogo.com/img/orig/0388.HK_BIG.D-5c5a4e1e.png' 
              },
              { 
                name: 'ASX', 
                region: 'آسیا-اقیانوسیه', 
                logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/ASX-Logo.png' 
              },
              { 
                name: 'JSE', 
                region: 'آفریقا', 
                logoUrl: 'https://companieslogo.com/img/orig/JSE.JO-f8ec85aa.png' 
              }
            ]
        },
        platform: {
          title: 'پلتفرم معاملاتی پیشرفته',
          description: 'تکنولوژی مدرن که سرعت، قابلیت اطمینان و عملکردی جامع را ارائه می‌دهد.',
          features: [
            {
              title: 'پلتفرم معاملاتی پیشرفته',
              description: 'رابط کاربری حرفه‌ای با داده‌های لحظه‌ای',
              icon: Monitor,
              features: ['نرخ‌های لحظه‌ای', 'نمودارهای پیشرفته', 'ابزارهای مدیریت ریسک', 'دسترسی موبایل']
            },
            {
              title: 'یکپارچه‌سازی با API',
              description: 'سیستم‌های خود را با زیرساخت API قدرتمند ما متصل کنید',
              icon: Zap,
              features: ['RESTful API', 'فیدهای WebSocket', 'ادغام سفارشی', 'عملکرد بالا']
            },
            {
              title: 'مدیریت ریسک',
              description: 'سیستم‌های جامع کنترل و نظارت بر ریسک',
              icon: Shield,
              features: ['حدود موقعیت معاملاتی', 'نظارت لحظه‌ای', 'هشدارهای خودکار', 'ابزارهای انطباق']
            }
          ]
        },
        support: {
          title: 'پشتیبانی اختصاصی مشتریان',
          description: 'خدمات پشتیبانی جامع برای تضمین موفقیت معاملاتی شما',
          services: [
            { title: 'میز معاملات ۲۴/۷', description: 'پشتیبانی شبانه‌روزی توسط کارشناسان مجرب معاملاتی ما', icon: Clock },
            { title: 'مدیر ارتباط با مشتری اختصاصی', description: 'پشتیبانی شخصی توسط عضو تیمی که نیازهای شما را درک می‌کند', icon: Phone },
            { title: 'تحقیقات بازار', description: 'دسترسی به تحلیل‌های جامع بازار و بینش‌های معاملاتی', icon: BarChart3 },
            { title: 'آموزش و توانمندسازی', description: 'برنامه‌های آموزشی مستمر برای تیم معاملاتی شما', icon: Monitor }
          ]
        },
        cta: {
          title: 'آماده شروع معاملات هستید؟',
          description: 'به هزاران متخصص بپیوندید که به خدمات کارگزاری ما برای نیازهای معاملاتی خود اعتماد دارند. برای شروع، همین امروز با ما تماس بگیرید.',
          primaryBtn: 'افتتاح حساب معاملاتی',
          secondaryBtn: 'درخواست نسخه آزمایشی (دمو)'
        }
      }
    }
  }

  const brokerageData = translations[language].brokerage;
  const DirAwareArrow = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {brokerageData.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {brokerageData.hero.description}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onPageChange('contact')}
            >
              {brokerageData.hero.button}
              <DirAwareArrow className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={language === 'fa' ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {brokerageData.overview.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {brokerageData.overview.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {brokerageData.overview.stats.map((stat, index) => (
                    <div key={index}>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                  alt="Advanced trading platform interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{brokerageData.services.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
              {brokerageData.services.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {brokerageData.services.list.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className={`space-y-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center gap-2 ${language === 'fa' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                          {language === 'fa' ? (
                            <>
                              <span className="text-sm">{feature}</span>
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                            </>
                          ) : (
                            <>
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{feature}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exchanges & Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{brokerageData.exchanges.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {brokerageData.exchanges.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brokerageData.exchanges.list.map((exchange, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="h-20 w-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={exchange.logoUrl} 
                      alt={`${exchange.name} logo`}
                      className="max-h-16 max-w-full object-contain filter drop-shadow-sm"
                      onError={(e) => {
                        // Fallback اگر لوگو لود نشد
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                          fallback.textContent = exchange.name;
                        }
                      }}
                    />
                    <div 
                      className="h-16 w-24 bg-gradient-to-br from-primary to-secondary rounded-lg items-center justify-center text-white font-bold text-sm hidden"
                      style={{ display: 'none' }}
                    >
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">{exchange.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="text-xs">
                    {exchange.region}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Platform */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{brokerageData.platform.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {brokerageData.platform.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {brokerageData.platform.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className={`space-y-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className={`flex items-center gap-2 ${language === 'fa' ? 'flex-row-reverse justify-end' : ''}`}>
                          <DirAwareArrow className="w-4 h-4 text-secondary" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{brokerageData.support.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
              {brokerageData.support.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {brokerageData.support.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {language === 'fa' ? (
                        <>
                          <div className="flex-1 text-right">
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </div>
                        </>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{brokerageData.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {brokerageData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onPageChange('contact')}
            >
              {brokerageData.cta.primaryBtn}
              <DirAwareArrow className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              {brokerageData.cta.secondaryBtn}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}