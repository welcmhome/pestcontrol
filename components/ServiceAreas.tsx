'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const cities = [
  'Boca Raton',
  'Palm Beach',
  'Broward Estates',
  'Hollywood',
  'Fort Lauderdale',
  'Parkland',
  'Pembroke Pines',
  'Coral Springs',
  'Plantation',
]

export default function ServiceAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="service-areas" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-primary-green font-semibold text-sm uppercase tracking-wider mb-2">
            Coverage
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Serving South Florida
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Pest control and prevention throughout the greater South Florida area.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {cities.map((city, index) => (
            <motion.li
              key={city}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.05 * index }}
              className="flex items-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-green/30 hover:bg-primary-green/5 transition-colors"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-green/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-gray-900 font-semibold text-sm sm:text-base truncate">
                {city}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-gray-500 text-xs sm:text-sm"
        >
          + more surrounding areas · Call to confirm we serve your location
        </motion.p>
      </div>
    </section>
  )
}
