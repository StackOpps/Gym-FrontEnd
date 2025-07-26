import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';
import WhatsappButton from './components/WhatsappButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-bg text-fg transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-grow pt-5">
            {children}
          </main>
          <Footer />
          <WhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
