import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers';
import DrawerButton from '@/components/DrawerButton';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header/Header';

import { SpeedInsights } from '@vercel/speed-insights/next'; // vercel speed insights
import { Analytics } from '@vercel/analytics/react'; // vercel analytics
import Footer from '@/components/header/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "$avvy's World",
  description: 'Modern ECommerce Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='drawer'>
            <DrawerButton />
            <div className='drawer-content'>
              {/* Page  */}
              <div className='min-h-screen flex flex-col'>
                <Header />
                {children}
                <Analytics />
                <SpeedInsights />
                <Footer />
              </div>

              {/* Side menu */}
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
