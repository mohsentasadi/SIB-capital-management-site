import React, { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { HedgingPage } from './components/HedgingPage';
import { BrokeragePage } from './components/BrokeragePage';
import { PortfolioPage } from './components/PortfolioPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { EducationPage } from './components/EducationPage';
import { InsightsPage } from './components/InsightsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'hedging':
        return <HedgingPage onPageChange={setCurrentPage} />;
      case 'brokerage':
        return <BrokeragePage onPageChange={setCurrentPage} />;
      case 'portfolio':
        return <PortfolioPage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      case 'education':
        return <EducationPage onPageChange={setCurrentPage} />;
      case 'insights':
        return <InsightsPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}