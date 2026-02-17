'use client'

import { motion } from 'framer-motion'

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:9542134572"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-[100]"
      aria-label="Call now"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-gray-900 rounded-full shadow-xl flex items-center justify-center ring-4 ring-white border-2 border-gray-700"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </motion.div>
    </motion.a>
  )
}
