import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/sonner"; // <-- Import Toaster

// ... (font configuration remains the same)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const foundation = localFont({
  src: '../fonts/SoRandom.ttf',
  display: 'swap',
  variable: '--font-foundation',
});


export const metadata: Metadata = {
  title: 'Vishesh Kumar - Software Developer Portfolio',
  description: 'A modern portfolio showcasing the skills and projects of Vishesh Kumar, a computer science graduate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} ${foundation.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <Toaster /> {/* <-- Add Toaster here */}
        </ThemeProvider>
      </body>
    </html>
  );
}