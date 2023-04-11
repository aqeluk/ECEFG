import Banner from '@/components/Banner'
import ContactBanner from '@/components/ContactBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <Navbar />
      <div className="flex-1">
        <div className="main-content">
          <Component {...pageProps} />
        </div>
      </div>
      <ContactBanner />
      <Footer />
    </div>
  );
}

