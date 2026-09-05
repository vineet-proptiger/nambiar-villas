'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #F8F9FA;
        overflow: hidden;
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-7/12 pr-0 lg:pr-8">
          <div className="inner-section" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>Nambiar Luxury Villas</h2>
            {/* Decorative Line */}
            <div className="flex items-center justify-start mt-1 mb-3" data-aos="fade-up" data-aos-duration="1000">
              <div className="w-16 h-[1px] bg-[#0E4429]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0E4429] mx-3"></div>
              <div className="w-16 h-[1px] bg-[#0E4429]"></div>
            </div>
            <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '24px' }}>Premium Villas in Bannerghatta Road, Bangalore</h3>
            
            <div className="relative pl-5 sm:pl-7 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
              {/* Left vertical gradient line */}
              <div 
                className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full" 
                style={{ 
                  background: 'linear-gradient(180deg, #0E4429 0%, #0E4429 60%, rgba(14, 68, 41, 0.05) 100%)' 
                }} 
              />
              
              <div style={isExpanded ? {} : { display: '-webkit-box', WebkitLineClamp: '7', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                <p style={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: '#333', textAlign: 'justify', lineHeight: '1.85', margin: 0 }}>
                  <span 
                    style={{ 
                      float: 'left', 
                      fontSize: '3.6rem', 
                      lineHeight: '0.8', 
                      fontWeight: '800', 
                      color: '#0E4429', 
                      marginRight: '10px', 
                      marginTop: '4px',
                      fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                    }}
                  >
                    N
                  </span>
                  <span style={{ fontWeight: '700', color: '#1A2024' }}>ambiar Bannerghatta Villas</span> is a premium villa development by Nambiar Group located at Bannerghatta Road in South Bangalore. The project is presented as a spacious villa township with Phase 1 covering 32+ acres and a total of 198 exclusive villas. The development offers premium villas with spacious layouts, contemporary architecture and dedicated plot areas. The project highlights approximately 80% open space and a 70,000 sq. ft. clubhouse, creating a low-density residential environment with extensive landscaped surroundings.
                  
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#C59A3F] font-bold inline-flex items-center gap-1 hover:text-[#A57C2B] transition-colors cursor-pointer ml-2"
                    style={{ fontSize: '15px' }}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </p>
              </div>
            </div>
            
            {/* Info Boxes (Outside of the read more collapse) */}
            <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              
              {/* Box 1 */}
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                <div className="flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0E4429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[20px] font-bold text-[#0E4429] leading-tight">70 Acres</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[12px] sm:text-[14px] color-[#666] leading-snug text-gray-500">Land Parcel</span>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                <div className="flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0E4429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[20px] font-bold text-[#0E4429] leading-tight">296</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[12px] sm:text-[14px] color-[#666] leading-snug text-gray-500">Total Villas</span>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                <div className="flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0E4429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[20px] font-bold text-[#0E4429] leading-tight">80%</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[12px] sm:text-[14px] color-[#666] leading-snug text-gray-500">Open Space</span>
                </div>
              </div>

              {/* Box 4 */}
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                <div className="flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#0E4429]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M15 9a3 3 0 11-6 0 3 3 0 016 0z M9 21h6"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[20px] font-bold text-[#0E4429] leading-tight">70,000 Sq.Ft.</span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[12px] sm:text-[14px] color-[#666] leading-snug text-gray-500">Clubhouse</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-5/12 mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-xl shadow-lg border border-[#C59A3F]/20 bg-white">
            <Image
              src={overviewImage}
              alt="Nambiar Luxury Villas - Tower Elevation"
              width={1500}
              height={1364}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview
