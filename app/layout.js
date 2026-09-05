import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://nambiarvillasbannerghattaroad.com'),
  title: 'Nambiar Luxury Villas | Luxury 4, 5 BHK Homes in Bannerghatta Road, Bangalore',
  description: "Nambiar Luxury Villas — A thoughtfully planned 70-acre landmark development in Bannerghatta Road, Bangalore by Nambiar. Luxury 4 BHK and 5 BHK villas.",
  alternates: {
    canonical: 'https://nambiarvillasbannerghattaroad.com/',
  },
  openGraph: {
    title: 'Nambiar Luxury Villas | Luxury Integrated Development in Bannerghatta Road',
    description: "Discover luxury 4, 5 BHK villas at Nambiar Luxury Villas, an integrated 70-acre landmark development in Bannerghatta Road, Bangalore.",
    url: 'https://nambiarvillasbannerghattaroad.com/',
    siteName: 'Nambiar Luxury Villas',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Nambiar Luxury Villas Bannerghatta Road Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nambiar Luxury Villas | Luxury 4, 5 BHK Homes in Bannerghatta Road',
    description: "A thoughtfully planned 70-acre landmark development in Bannerghatta Road, Bangalore by Nambiar.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Nambiar Luxury Villas Bannerghatta Road",
              "url": "https://nambiarvillasbannerghattaroad.com/",
              "logo": "https://nambiarvillasbannerghattaroad.com/images/logo/Logo.webp",
              "image": "https://nambiarvillasbannerghattaroad.com/images/hero/banner.webp",
              "description": "Nambiar Luxury Villas, Bangalore's premier luxury integrated development in Bannerghatta Road offering 4, 5 BHK luxury villas.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bannerghatta Road",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "postalCode": "560109",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 3 Crore Onwards",
              "sameAs": [
                "https://nambiarvillasbannerghattaroad.com/"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
