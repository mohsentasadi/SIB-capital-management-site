import React from 'react';
import { useLanguage } from './LanguageContext';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const { language } = useLanguage();

  const persianText = [
    "شرکت مدیریت سرمایه سیب، تأسیس‌شده در سال ۱۳۹۹، به صورت تخصصی در زمینه مدیریت ریسک مالی، مهندسی مالی و اجرای استراتژی‌های پوشش ریسک (هجینگ) فعالیت می‌کند.",
    "متخصصان شرکت سیب با استفاده از ابزارهای متنوع مالی مانند قراردادهای آتی، سوآپ، اختیار معامله و سایر مشتقات در بیش از ۳۳ بازار بین‌المللی در ۱۵۰ کشور به کسب‌وکارها کمک می‌کنند تا در برابر نوسانات بازارهای کالا، ارز و نرخ بهره، ریسک سرمایه‌گذاری خود را به طور مؤثر کاهش دهند و ثبات مالی را حفظ کنند.",
    "با توجه به محدودیت‌های ناشی از تحریم‌های اقتصادی و کمبود ابزارهای پیشرفته در بازار ایران، شرکت مدیریت سرمایه سیب با بهره‌گیری از دانش تخصصی تیم اجرایی و مجوزهای بین‌المللی، خدمات مدیریت ریسک سفارشی، طراحی ابزارهای مالی و مشاوره سرمایه‌گذاری را به شرکت‌ها و صنایع مختلف ارائه می‌دهد. این خدمات شامل تحلیل دقیق بازار، طراحی استراتژی‌های هجینگ سفارشی، پیاده‌سازی فنی معاملات و پایش مستمر جهت حفظ اثربخشی پوشش ریسک است.",
    "همچنین امکان معاملات مستقیم در بازارهای جهانی کالا و ارز از طریق پلتفرم کارگزاری با پشتیبانی ۲۴ ساعته، فراهم شده است تا کسب‌وکارها بتوانند به صورت مستقل و مطمئن، ریسک‌های مالی خود را مدیریت کنند."
  ];

  const englishText = [
    "Sib Capital Management, established in 2020 (1399 SH), specializes in financial risk management, financial engineering, and the implementation of hedging strategies.",
    "Sib's specialists use a diverse range of financial instruments—such as futures contracts, swaps, options, and other derivatives—across more than 33 international markets in 150 countries to help businesses effectively reduce their investment risks and maintain financial stability against fluctuations in commodity, currency, and interest rate markets.",
    "In response to limitations from economic sanctions and a lack of advanced financial tools in the Iranian market, Sib Capital Management leverages the specialized expertise of its executive team and international licenses to provide custom risk management services, financial instrument design, and investment consulting to various companies and industries. These services include detailed market analysis, bespoke hedging strategy design, technical trade implementation, and continuous monitoring to maintain the effectiveness of the risk hedging.",
    "Furthermore, direct trading in global commodity and currency markets is enabled through a brokerage platform with 24-hour support, allowing businesses to manage their financial risks independently and securely."
  ];

  const content = language === 'fa' ? persianText : englishText;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              {language === 'fa' ? 'درباره ما | شرکت مدیریت سرمایه سیب' : 'About Us | Sib Capital Management'}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`space-y-6 text-lg text-muted-foreground leading-relaxed ${language === 'fa' ? 'text-right' : 'text-left'}`}>
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}