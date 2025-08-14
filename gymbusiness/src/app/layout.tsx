"use client";

import { ThemeProvider } from './context/ThemeContext';
import './globals.css';
import WhatsappButton from './components/WhatsappButton';
import { usePathname } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noHeaderFooterRoutes = ['/login'];
  const isAdminRoute = pathname.startsWith('/admin');

  const showHeaderFooter =
    !noHeaderFooterRoutes.some(route => pathname.startsWith(route)) && !isAdminRoute;

  return (
    <html lang="es">
      <body className="antialiased bg-bg text-fg transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          {/* Header solo en rutas públicas */}
          {showHeaderFooter && <Header />}

          {/* Contenido */}
          <main className={`flex-grow ${showHeaderFooter ? 'pt-16 lg:pt-20' : 'pt-0'}`}>
            {children}
          </main>

          {/* Footer solo en rutas públicas */}
          {showHeaderFooter && <Footer />}

          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
