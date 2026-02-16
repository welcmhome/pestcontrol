'use client'

import { motion } from 'framer-motion'

const pestTypes = ['Ants', 'Roaches', 'Rodents', 'Termites', 'Spiders', 'Bed Bugs']

const heroReviewSnippets = [
  { name: 'Maria R.', location: 'Boca Raton', quote: 'Very professional… explained everything in Spanish. Highly recommend.' },
  { name: 'James T.', location: 'Fort Lauderdale', quote: 'Thorough treatment, followed up. Fair price and no pressure.' },
  { name: 'Sandra L.', location: 'Coral Springs', quote: 'Yard and house have been pest-free. Friendly and always on schedule.' },
  { name: 'David M.', location: 'Pembroke Pines', quote: 'Honest about what we needed. Work done fast, clear report.' },
  { name: 'Carmen G.', location: 'Hollywood', quote: 'Only ones who could come the next day. Very respectful.' },
  { name: 'Robert K.', location: 'Parkland', quote: 'No more spiders, quote very reasonable. Will use again.' },
]

export default function Hero() {
  return (
    <section className="relative min-h-0 pt-20 lg:pt-24 overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] lg:min-h-[90vh] items-center">
        {/* Left: Text content — PlumbPro-style layout */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-16 lg:py-24 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary-blue uppercase tracking-widest mb-4"
          >
            Licensed & Insured · South Florida
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
          >
            Florida Pest Control
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-2xl sm:text-3xl font-semibold text-primary-blue"
          >
            Pests out — Peace in
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg text-gray-600 max-w-md leading-relaxed"
          >
            Trust the In & Out team to provide the best pest elimination and prevention for residential and commercial properties. Same-day service. English & Spanish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:9542134572"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-blue text-white font-bold rounded-xl text-lg hover:bg-primary-blue-dark shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary-blue text-primary-blue font-semibold rounded-xl text-lg hover:bg-primary-blue/5 transition-all"
            >
              Our Services
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm text-gray-500"
          >
            No long-term contracts · Free estimates
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 pt-8 border-t border-gray-200"
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">We eliminate</p>
            <div className="flex flex-wrap gap-2">
              {pestTypes.map((pest) => (
                <span
                  key={pest}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                >
                  {pest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-full">
          <div className="relative w-full h-full min-h-[50vh] lg:min-h-[90vh]">
            <img
              src="/assets/hero-pest-control.png"
              alt="Pest control technician treating a palm tree at a residential property"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent lg:from-white lg:via-white/50 lg:to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent lg:hidden" />
          </div>
        </div>
      </div>

      {/* Thin moving review bar */}
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

      {/* Trust bar — same blue as inspiration */}
      <div className="relative z-20 bg-primary-blue text-white py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-12 text-center text-sm font-semibold">
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
