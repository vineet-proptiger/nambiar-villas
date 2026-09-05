'use client'
import { MapPin } from 'lucide-react'
import { locationImage } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationLandmarks = [
  { name: 'NICE Road', dist: '5-10 mins' },
  { name: 'Ryan International School', dist: '10 mins' },
  { name: 'Kalena Agrahara Metro', dist: '15-20 mins' },
  { name: 'Royal Meenakshi Mall', dist: '15-20 mins' },
  { name: 'Apollo Hospitals', dist: '20-25 mins' },
  { name: 'Electronic City', dist: '20-30 mins' },
  { name: 'IIM Bangalore', dist: '25-30 mins' },
  { name: 'Infosys, Electronic City', dist: '25-30 mins' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      backgroundImage: "url('/images/highlights/highlight.webp')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }} data-aos="fade-down" data-aos-duration="1000">
           <h2
             className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#C59A3F]"
             style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '12px' }}
           >
             LOCATION ADVANTAGES
           </h2>
           {/* Decorative Line */}
           <div className="flex items-center justify-center mt-3 mb-2">
             <div className="w-16 h-[1px] bg-[#0E4429]"></div>
             <div className="w-2 h-2 rounded-full bg-[#0E4429] mx-3"></div>
             <div className="w-16 h-[1px] bg-[#0E4429]"></div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* RIGHT — Clean Landmarks List (Replaced Accordion) */}
          <div className="w-full lg:w-[46%] lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div style={{
              padding: '16px 26px',
              borderRadius: '16px',
              background: '#F8F9FA',
              border: '1px solid #C59A3F',
              boxShadow: '0 12px 32px rgba(0, 2, 66, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <h3 style={{
                fontFamily: F_JOST,
                fontSize: '19px',
                fontWeight: '600',
                color: '#1A2024',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                paddingBottom: '10px',
                borderBottom: '2px solid #C59A3F',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <MapPin size={22} className="text-[#0E4429]" />
                <span>SEAMLESS CONNECTIVITY</span>
              </h3>

              <div className="flex flex-col">
                {locationLandmarks.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 4px',
                      borderBottom: index === locationLandmarks.length - 1 ? 'none' : '1px solid rgba(213, 189, 126, 0.45)',
                      fontFamily: F_SANS,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '2px',
                        background: '#0E4429',
                        display: 'inline-block',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '15px',
                        color: '#1A2024',
                        fontWeight: '500',
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '15px',
                      color: '#1A2024',
                      fontWeight: '700',
                      fontFamily: F_JOST,
                      whiteSpace: 'nowrap',
                      marginLeft: '16px',
                    }}>
                      {item.dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LEFT — Location Aerial Map Image */}
          <div className="w-full lg:flex-1 lg:order-1 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="1000">
            <div style={{
              overflow: 'hidden',
              border: '1px solid #DFB76C',
              borderRadius: '16px',
              width: '100%',
              height: '100%',
              position: 'relative',
              background: '#0E4429',
              boxShadow: '0 12px 32px rgba(14, 68, 41, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5500831.017276438!2d97.02359890075051!3d18.23731377976752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b005b92b749%3A0xda11b305708aff3b!2sNambiar%20Bannerghatta%20Road!5e0!3m2!1sen!2sin!4v1788591076803!5m2!1sen!2sin" 
                className="location-responsive-map" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <style jsx>{`
                .location-responsive-map {
                  width: 100%;
                  height: 100%;
                  min-height: 400px;
                  border: 0;
                  display: block;
                }
                @media (max-width: 1023px) {
                  .location-responsive-map {
                    height: 400px !important;
                  }
                }
              `}</style>
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold, #C59A3F)', opacity: 0.95, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
                pointerEvents: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '12px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Bannerghatta Road, Bangalore
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
