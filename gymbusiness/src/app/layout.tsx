"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';
import WhatsappButton from './components/WhatsappButton';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noHeaderFooterRoutes = ['/login', '/admin'];

  const showHeaderFooter = !noHeaderFooterRoutes.some(route => pathname.startsWith(route));

  const paddingTopClass = showHeaderFooter ? 'pt-16 lg:pt-20' : 'pt-0';

  return (
    <html lang="es">
      <body className="antialiased bg-bg text-fg transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          {showHeaderFooter && <Header />}
          <main className={`flex-grow ${paddingTopClass}`}>
            {children}
          </main>
          {showHeaderFooter && <Footer />}
          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
