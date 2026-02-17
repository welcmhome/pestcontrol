'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    name: 'Maria R.',
    location: 'Boca Raton',
    rating: 5,
    date: '2 weeks ago',
    text: 'Had ants everywhere in the kitchen. They came out same day, sprayed, and we haven’t seen one since. Very professional and explained everything in Spanish for my mom. Highly recommend.',
  },
  {
    name: 'James T.',
    location: 'Fort Lauderdale',
    rating: 5,
    date: '1 month ago',
    text: 'We had a roach problem in our condo. In & Out showed up on time, did a thorough treatment, and followed up. Building is clean now. Fair price and no pressure.',
  },
  {
    name: 'Sandra L.',
    location: 'Coral Springs',
    rating: 5,
    date: '3 weeks ago',
    text: 'Needed someone for recurring pest control. They set up a schedule and our yard and house have been pest-free. The guy who comes is friendly and always on schedule.',
  },
  {
    name: 'David M.',
    location: 'Pembroke Pines',
    rating: 5,
    date: '1 month ago',
    text: 'Termite inspection and treatment. They were honest about what we needed, didn’t try to upsell. Work was done fast and we got a clear report. Great experience.',
  },
  {
    name: 'Carmen G.',
    location: 'Hollywood',
    rating: 5,
    date: '2 months ago',
    text: 'Called several places and these guys were the only ones who could come the next day. Took care of our rodent issue. Very respectful and left everything clean.',
  },
  {
    name: 'Robert K.',
    location: 'Parkland',
    rating: 5,
    date: '3 weeks ago',
    text: 'Had a spider issue in the garage and around the house. They did an interior and exterior treatment. No more spiders and the quote was very reasonable. Will use again.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-5 h-5 text-amber-400"
          fill={star <= rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="reviews" ref={ref} className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-2">
            What our customers say
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Google Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-gray-700 font-medium">5.0</span>
            <span className="text-gray-500 text-sm">from local customers</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name + index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-none p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-blue/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-none bg-primary-blue/15 flex items-center justify-center text-primary-blue font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location} · {review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-3 text-gray-700 leading-relaxed text-sm">
                {review.text}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-gray-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span className="text-xs">Google</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/search?q=In+%26+Out+Florida+Pest+Control+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-blue font-medium text-sm transition-colors"
          >
            See all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
