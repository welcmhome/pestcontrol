'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-gray-900 border-t border-gray-700">
      <div className="max-w-2xl sm:max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left w-full sm:w-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to get pests out?
          </h2>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Same-day service. Free quote. Call now.
          </p>
        </motion.div>
        <motion.a
          href="tel:9542134572"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-none text-lg hover:bg-gray-100 shadow-lg transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (954) 213-4572
        </motion.a>
      </div>
    </section>
  )
}
