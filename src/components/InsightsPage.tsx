import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, TrendingUp, Calendar, User } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface InsightsPageProps {
  onPageChange: (page: string) => void;
}

export function InsightsPage({ onPageChange }: InsightsPageProps) {
  const { language } = useLanguage();

  const translations = {
    en: {
      badge: 'Market Insights',
      hero: {
        title: 'Expert Analysis & Market Intelligence',
        description: 'Stay informed with our latest market insights, research reports, and expert commentary on global financial markets and investment trends.',
      },
      latestInsights: {
        title: 'Latest Insights',
        description: 'In-depth analysis and commentary from our investment professionals',
        readMore: 'Read More',
      },
      insights: [
        {
          title: 'Market Outlook 2024: Navigating Uncertainty',
          excerpt: 'Our analysts share their perspective on market trends and investment opportunities for the year ahead.',
          author: 'Sarah Chen, CIO',
          date: 'January 15, 2024',
          category: 'Market Analysis',
          readTime: '5 min read'
        },
        {
          title: 'The Role of Alternative Investments in Modern Portfolios',
          excerpt: 'Exploring how alternative investments can enhance portfolio diversification and risk-adjusted returns.',
          author: 'Michael Rodriguez, Head of Risk',
          date: 'January 10, 2024',
          category: 'Portfolio Strategy',
          readTime: '7 min read'
        },
        {
          title: 'ESG Investing: Beyond the Hype',
          excerpt: 'A deep dive into sustainable investing strategies and their impact on long-term performance.',
          author: 'Emily Thompson, Client Relations',
          date: 'January 5, 2024',
          category: 'Sustainable Investing',
          readTime: '6 min read'
        }
      ],
      comingSoon: {
        title: 'More Insights Coming Soon',
        description: 'We\'re continuously publishing new research and market analysis. Subscribe to stay updated with our latest insights.',
        button: 'Subscribe to Updates'
      }
    },
    fa: {
      badge: 'تحلیل بازار',
      hero: {
        title: 'تحلیل تخصصی و هوش بازار',
        description: 'با آخرین تحلیل‌های بازار، گزارش‌های تحقیقاتی و تفسیرهای تخصصی ما در مورد بازارهای مالی جهانی و روندهای سرمایه‌گذاری، آگاه بمانید.',
      },
      latestInsights: {
        title: 'آخرین تحلیل‌ها',
        description: 'تحلیل‌های عمیق و تفسیرهای تخصصی از کارشناسان سرمایه‌گذاری ما',
        readMore: 'بیشتر بخوانید',
      },
      insights: [
        {
          title: 'چشم‌انداز بازار در سال ۲۰۲۴: عبور از عدم قطعیت',
          excerpt: 'تحلیلگران ما دیدگاه خود را در مورد روندهای بازار و فرصت‌های سرمایه‌گذاری برای سال پیش رو به اشتراک می‌گذارند.',
          author: 'سارا چن، مدیر ارشد سرمایه‌گذاری',
          date: '۱۵ ژانویه ۲۰۲۴',
          category: 'تحلیل بازار',
          readTime: '۵ دقیقه مطالعه'
        },
        {
          title: 'نقش سرمایه‌گذاری‌های جایگزین در سبدهای مدرن',
          excerpt: 'بررسی اینکه چگونه سرمایه‌گذاری‌های جایگزین می‌توانند تنوع سبد و بازده تعدیل‌شده بر اساس ریسک را افزایش دهند.',
          author: 'مایکل رودریگز، مدیر ریسک',
          date: '۱۰ ژانویه ۲۰۲۴',
          category: 'استراتژی سبد',
          readTime: '۷ دقیقه مطالعه'
        },
        {
          title: 'سرمایه‌گذاری ESG: فراتر از هیاهو',
          excerpt: 'نگاهی عمیق به استراتژی‌های سرمایه‌گذاری پایدار و تأثیر آن‌ها بر عملکرد بلندمدت.',
          author: 'امیلی تامپسون، مدیر ارتباط با مشتریان',
          date: '۵ ژانویه ۲۰۲۴',
          category: 'سرمایه‌گذاری پایدار',
          readTime: '۶ دقیقه مطالعه'
        }
      ],
      comingSoon: {
        title: 'تحلیل‌های بیشتر به زودی',
        description: 'ما به طور مداوم در حال انتشار تحقیقات و تحلیل‌های جدید بازار هستیم. برای اطلاع از آخرین دیدگاه‌های ما مشترک شوید.',
        button: 'برای دریافت اخبار عضو شوید'
      }
    }
  };

  const data = language === 'fa' ? translations.fa : translations.en;

  return (
    <div className={`flex flex-col ${language === 'fa' ? 'persian' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {data.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{data.latestInsights.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.latestInsights.description}
            </p>
          </div>
          
          <div className="space-y-8">
            {data.insights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className={language === 'fa' ? 'text-right' : 'text-left'}>
                  <div className={`flex flex-wrap items-center gap-2 mb-3 ${language === 'fa' ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
                    <Badge variant="secondary">{insight.category}</Badge>
                    <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{insight.title}</CardTitle>
                  <CardDescription className="text-lg">{insight.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{insight.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{insight.date}</span>
                      </div>
                    </div>
                    <Button variant="outline">
                      {data.latestInsights.readMore}
                      <ArrowRight className={language === 'fa' ? 'mr-2 w-4 h-4' : 'ml-2 w-4 h-4'} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-4">{data.comingSoon.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {data.comingSoon.description}
          </p>
          <Button onClick={() => onPageChange('contact')} className="financial-gradient text-white">
            {data.comingSoon.button}
            <ArrowRight className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
          </Button>
        </div>
      </section>

      {/* Footer component removed to prevent duplication */}
    </div>
  );
}