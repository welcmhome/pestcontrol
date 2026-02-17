'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROTATING_PHRASES = ['Peace in.', 'Done right.', 'Problem solved.']

const heroReviewSnippets = [
  { name: 'Maria R.', location: 'Boca Raton', quote: 'Very professional… explained everything in Spanish. Highly recommend.' },
  { name: 'James T.', location: 'Fort Lauderdale', quote: 'Thorough treatment, followed up. Fair price and no pressure.' },
  { name: 'Sandra L.', location: 'Coral Springs', quote: 'Yard and house have been pest-free. Friendly and always on schedule.' },
  { name: 'David M.', location: 'Pembroke Pines', quote: 'Honest about what we needed. Work done fast, clear report.' },
  { name: 'Carmen G.', location: 'Hollywood', quote: 'Only ones who could come the next day. Very respectful.' },
  { name: 'Robert K.', location: 'Parkland', quote: 'No more spiders, quote very reasonable. Will use again.' },
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero: on mobile = white + content + image below; on desktop = full-bleed background */}
      <div className="relative flex flex-col lg:min-h-[80vh] lg:flex-row lg:items-center">
        {/* Background image — desktop only */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img
            src="/assets/hero-technician-truck.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Content — white on mobile (tall so only ~1/3 of image visible), over background on desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 xl:px-12 pt-24 sm:pt-28 lg:pt-44 pb-10 sm:pb-12 lg:pb-32 bg-white lg:bg-transparent min-h-[70vh] lg:min-h-0 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold text-gray-500 lg:text-gray-300 uppercase tracking-[0.2em] mb-4"
          >
            South Florida
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-oswald text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 lg:text-white leading-[1.05] uppercase tracking-tight"
          >
            Pests out.<br />
            <span className="inline-block overflow-hidden h-[1.05em] leading-none align-top min-w-[14ch] sm:min-w-[16ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="block text-primary-green lg:text-primary-green-light"
                >
                  {ROTATING_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="origin-left mt-5 h-1 w-24 bg-primary-green lg:bg-primary-green-light"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="hidden lg:block mt-6 text-base sm:text-lg text-gray-600 lg:text-gray-300 max-w-sm"
          >
            In & Out Florida Pest Control — licensed, same-day, bilingual. Free estimates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:9542134572"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 lg:bg-white lg:text-gray-900 text-white font-bold rounded-none text-base hover:bg-black lg:hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call now
            </a>
            <a
              href="#services"
              className="inline-flex items-center text-gray-700 lg:text-gray-300 font-semibold text-sm border-b-2 border-transparent hover:border-primary-green hover:text-primary-green transition-colors"
            >
              Our services →
            </a>
          </motion.div>
        </div>

        {/* Mobile only: image below content — modest size, with dark overlay */}
        <div className="lg:hidden relative w-full h-[40vh] min-h-[220px] flex-shrink-0 overflow-hidden">
          <img
            src="/assets/hero-technician-truck.png"
            alt="In & Out Florida Pest Control technician with company truck"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      </div>

      {/* Scrolling review bar — back below hero */}
      <div className="relative z-20 border-t border-gray-100 bg-gray-50/80 py-2 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...heroReviewSnippets, ...heroReviewSnippets].map((r, i) => (
            <div key={i} className="flex items-center gap-4 px-8 flex-shrink-0">
              <div className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                {r.quote}
              </span>
              <span className="text-gray-400 text-xs whitespace-nowrap">
                — {r.name}, {r.location}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust bar — green to match logo; single row on mobile like desktop */}
      <div className="relative z-20 bg-primary-green text-white py-3 px-4 lg:py-4 lg:px-6">
        <div className="max-w-5xl mx-auto flex flex-nowrap justify-center gap-4 sm:gap-6 lg:gap-12 text-center text-xs sm:text-sm font-semibold overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Licensed & Insured
          </span>
          <span>Same-day service</span>
          <span>Free estimates</span>
          <span>Bilingual EN / ES</span>
          <span className="font-bold">5.0 Google</span>
        </div>
      </div>
    </section>
  )
}
