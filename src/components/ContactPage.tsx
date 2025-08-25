import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Phone, Mail, ArrowRight, Send, Briefcase, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'fa' ? 'از پیام شما متشکریم. به زودی با شما تماس خواهیم گرفت!' : 'Thank you for your inquiry. We will contact you soon!');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const translations = {
      en: {
          hero: {
              title: "Connect with SIB's Asset Management Specialists",
              description: "Our team of investment professionals is ready to help you achieve your financial objectives. Get in touch to explore how SIB Company can serve you."
          },
          form: {
              title: "Send Us a Message",
              description: "Fill out the form below and one of our investment specialists will contact you within 24 hours.",
              name: "Full Name *",
              namePlaceholder: "Your full name",
              email: "Email Address *",
              emailPlaceholder: "your.email@company.com",
              company: "Company",
              companyPlaceholder: "Your company name",
              phone: "Phone Number",
              phonePlaceholder: "+1 (555) 123-4567",
              service: "Service Interest",
              servicePlaceholder: "Select a service",
              services: [
                  { value: "hedging", label: "Hedging Solutions" },
                  { value: "brokerage", label: "Brokerage Services" },
                  { value: "portfolio", label: "Portfolio Management" },
                  { value: "general", label: "General Inquiry" },
              ],
              message: "Message *",
              messagePlaceholder: "Tell us about your investment needs and objectives...",
              submit: "Send Message"
          },
          getInTouch: {
              title: "Our Communication Channels",
              methods: [
                  { icon: Briefcase, title: "Corporate & Institutional Clients", phone: "+98 21 8765 4321", email: "corporate@sib-m.ir" },
                  { icon: Users, title: "Private Investors", phone: "+98 21 8765 4321", email: "investors@sib-m.ir" },
                  { icon: Mail, title: "General Inquiries & Secretariat", email: "info@sib-m.ir" }
              ]
          },
          office: {
              title: "Our Office",
              officeInfoTitle: "Head Office Information",
              addressLabel: "Address",
              phoneLabel: "Phone",
              emailLabel: "Email",
              hoursLabel: "Business Hours",
              address: "5th Floor, No. 10, Gharbi St., Allameh Tabatabaei Jonoubi St., Sa'adat Abad, Tehran",
              phone: "+98 21 8868 9785",
              email: "info@sibcm.ir",
              hours: "Sat-Wed: 9:00 AM - 5:00 PM"
          },
          cta: {
              title: "Start a New Chapter in Your Wealth Management",
              description: "Take the first step towards achieving your investment objectives. Our team is ready to discuss how we can help you succeed.",
              primaryBtn: "Our Services",
          }
      },
      fa: {
          hero: {
              title: "ارتباط با متخصصین مدیریت دارایی سیب",
              description: "تیم متخصصان سرمایه‌گذاری ما آماده است تا شما را در دستیابی به اهداف مالی‌تان یاری دهد. برای کشف اینکه شرکت سیب چگونه می‌تواند به شما خدمت کند، با ما در تماس باشید."
          },
          form: {
              title: "برای ما پیام ارسال کنید",
              description: "فرم زیر را تکمیل کنید تا یکی از متخصصان سرمایه‌گذاری ما ظرف ۲۴ ساعت با شما تماس بگیرد.",
              name: "نام و نام خانوادگی *",
              namePlaceholder: "نام کامل شما",
              email: "آدرس ایمیل *",
              emailPlaceholder: "your.email@company.com",
              company: "شرکت",
              companyPlaceholder: "نام شرکت شما",
              phone: "شماره تلفن",
              phonePlaceholder: "۰۹۱۲۱۲۳۴۵۶۷",
              service: "خدمت مورد نظر",
              servicePlaceholder: "یک خدمت را انتخاب کنید",
              services: [
                  { value: "hedging", label: "راهکارهای پوشش ریسک" },
                  { value: "brokerage", label: "خدمات کارگزاری" },
                  { value: "portfolio", label: "مدیریت سبد دارایی" },
                  { value: "general", label: "درخواست عمومی" },
              ],
              message: "پیام شما *",
              messagePlaceholder: "در مورد نیازها و اهداف سرمایه‌گذاری خود برای ما بنویسید...",
              submit: "ارسال پیام"
          },
          getInTouch: {
              title: "مسیرهای ارتباطی ما",
              methods: [
                  { icon: Briefcase, title: "امور مشتریان حقوقی و شرکتی", phone: "۰۲۱-۸۷۶۵۴۳۲۱", email: "corporate@sib-m.ir" },
                  { icon: Users, title: "امور سرمایه‌گذاران حقیقی", phone: "۰۲۱-۸۷۶۵۴۳۲۱", email: "investors@sib-m.ir" },
                  { icon: Mail, title: "دبیرخانه و ارتباطات عمومی", email: "info@sib-m.ir" }
              ]
          },
          office: {
              title: "دفتر ما",
              officeInfoTitle: "اطلاعات دفتر مرکزی",
              addressLabel: "آدرس",
              phoneLabel: "تلفن",
              emailLabel: "ایمیل",
              hoursLabel: "ساعات کاری",
              address: "تهران، سعادت‌آباد، خیابان علامه طباطبایی جنوبی، خیابان غربی، پلاک ۱۰، طبقه پنجم",
              phone: "۰۲۱-۸۸۶۸۹۷۸۵",
              email: "info@sibcm.ir",
              hours: "شنبه تا چهارشنبه: ۹:۰۰ صبح تا ۵:۰۰ عصر"
          },
          cta: {
              title: "فصل جدیدی در مدیریت دارایی خود آغاز کنید",
              description: "اولین قدم را برای دستیابی به اهداف سرمایه‌گذاری خود بردارید. تیم ما آماده است تا در مورد اینکه چگونه می‌توانیم به موفقیت شما کمک کنیم، گفتگو کند.",
              primaryBtn: "خدمات ما",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={language === 'fa' ? 'lg:order-2' : ''}>
              <h2 className={`text-3xl font-bold text-primary mb-6 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.title}</h2>
              <p className={`text-muted-foreground mb-8 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                {data.form.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.name}</label>
                    <Input required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder={data.form.namePlaceholder} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.email}</label>
                    <Input type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder={data.form.emailPlaceholder} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.company}</label>
                    <Input value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} placeholder={data.form.companyPlaceholder} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.phone}</label>
                    <Input type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder={data.form.phonePlaceholder} />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.service}</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger><SelectValue placeholder={data.form.servicePlaceholder} /></SelectTrigger>
                    <SelectContent>
                      {data.form.services.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.form.message}</label>
                  <Textarea required value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder={data.form.messagePlaceholder} rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full financial-gradient text-white">
                  {data.form.submit}
                  <Send className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
                </Button>
              </form>
            </div>

            {/* Contact Methods & Office Info */}
            <div className={language === 'fa' ? 'lg:order-1' : ''}>
              <div className="p-6 rounded-lg border bg-gray-50/50">
                <h2 className={`text-2xl font-bold text-primary mb-6 ${language === 'fa' ? 'text-right' : 'text-left'}`}>{data.getInTouch.title}</h2>
                <div className="space-y-5">
                  {data.getInTouch.methods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={index} className={`flex items-start gap-4 ${language === 'fa' ? 'flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0">
                           <IconComponent className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className={`flex-1 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                           <h3 className="font-semibold">{method.title}</h3>
                           <div className="text-sm text-muted-foreground space-y-1 mt-1">
                              {method.phone && <p><span>تلفن: </span><a href={`tel:${method.phone}`} className="ltr inline-block text-primary/80 hover:text-primary">{method.phone}</a></p>}
                              {method.email && <p><span>ایمیل: </span><a href={`mailto:${method.email}`} className="ltr inline-block text-primary/80 hover:text-primary">{method.email}</a></p>}
                           </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <hr className="my-6" />
                
                <div className={`space-y-4 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-lg font-semibold">{data.office.officeInfoTitle}</h3>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{data.office.addressLabel}</p>
                        <p className="text-sm">{data.office.address}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">{data.office.hoursLabel}</p>
                        <p className="text-sm">{data.office.hours}</p>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`mb-8 ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                  <h2 className="text-3xl font-bold text-primary">{data.office.title}</h2>
              </div>
              <div className="w-full mx-auto">
                  <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.711889814138!2d51.37269181526155!3d35.78280598017087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07c2b3d8f3a1%3A0x2b8d8f3a1c8b4c2!2sAllameh%20Tabatabaei%20St%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1678886543210!5m2!1sen!2s"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                  </div>
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
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => onPageChange('hedging')}>
              {data.cta.primaryBtn}
              <ArrowRight className={language === 'fa' ? 'mr-2 w-5 h-5' : 'ml-2 w-5 h-5'} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer removed to prevent duplication */}
    </div>
  );
}