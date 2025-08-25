import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, BookOpen, Video, FileText, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface EducationPageProps {
  onPageChange: (page: string) => void;
}

export function EducationPage({ onPageChange }: EducationPageProps) {
  const { language } = useLanguage();

  const translations = {
    en: {
      badge: 'Education Center',
      hero: {
        title: 'Enhance Your Investment Knowledge',
        description: 'Access our comprehensive library of educational resources designed to help you make informed investment decisions and understand market dynamics.',
      },
      resources: {
        title: 'Educational Resources',
        description: 'Learn from our experts through various formats and topics',
        items: [
          {
            title: 'Investment Fundamentals',
            description: 'Essential concepts every investor should know',
            type: 'Course',
            duration: '4 weeks',
          },
          {
            title: 'Risk Management Strategies',
            description: 'Learn to protect your investments',
            type: 'Webinar',
            duration: '1 hour',
          },
          {
            title: 'Market Analysis Guide',
            description: 'Understanding market trends and indicators',
            type: 'Guide',
            duration: '30 min read',
          }
        ],
        access: 'Access',
      },
      comingSoon: {
        title: 'More Resources Coming Soon',
        description: 'We\'re developing additional educational content including advanced courses, interactive tools, and personalized learning paths.',
        button: 'Get Notified'
      }
    },
    fa: {
      badge: 'مرکز آموزش',
      hero: {
        title: 'دانش سرمایه‌گذاری خود را افزایش دهید',
        description: 'به کتابخانه جامع منابع آموزشی ما دسترسی پیدا کنید که برای کمک به شما در تصمیم‌گیری‌های آگاهانه سرمایه‌گذاری و درک پویایی بازار طراحی شده است.',
      },
      resources: {
        title: 'منابع آموزشی',
        description: 'از طریق قالب‌ها و موضوعات متنوع، از متخصصان ما بیاموزید',
        items: [
          {
            title: 'اصول سرمایه‌گذاری',
            description: 'مفاهیم ضروری که هر سرمایه‌گذار باید بداند',
            type: 'دوره آموزشی',
            duration: '۴ هفته',
          },
          {
            title: 'استراتژی‌های مدیریت ریسک',
            description: 'بیاموزید چگونه از سرمایه‌گذاری‌های خود محافظت کنید',
            type: 'وبینار',
            duration: '۱ ساعت',
          },
          {
            title: 'راهنمای تحلیل بازار',
            description: 'درک روندهای بازار و شاخص‌های کلیدی',
            type: 'راهنما',
            duration: '۳۰ دقیقه مطالعه',
          }
        ],
        access: 'دسترسی',
      },
      comingSoon: {
        title: 'منابع بیشتر به زودی ارائه می‌شود',
        description: 'ما در حال توسعه محتوای آموزشی تکمیلی شامل دوره‌های پیشرفته، ابزارهای تعاملی و مسیرهای یادگیری شخصی‌سازی‌شده هستیم.',
        button: 'به من اطلاع بده'
      }
    }
  };
  
  const data = language === 'fa' ? translations.fa : translations.en;
  const resourceIcons = [BookOpen, Video, FileText];

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

      {/* Educational Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">{data.resources.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.resources.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {data.resources.items.map((resource, index) => {
              const IconComponent = resourceIcons[index];
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className={language === 'fa' ? 'text-right' : 'text-left'}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2">{resource.type}</Badge>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{resource.duration}</span>
                      <Button variant="outline" size="sm">
                        {data.resources.access}
                        <ArrowRight className={language === 'fa' ? 'mr-2 w-4 h-4' : 'ml-2 w-4 h-4'} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto text-primary mb-6" />
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

      {/* The Footer component is intentionally removed from this page to prevent duplication,
          as it is likely rendered in a main layout or App component. */}
    </div>
  );
}