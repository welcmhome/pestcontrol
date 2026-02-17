'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#services', label: 'Services', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { href: '#why-choose-us', label: 'Why Us', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '#service-areas', label: 'Areas', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { href: '#about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '#reviews', label: 'Reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { href: '#contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)
    updateScrolled() // sync on mount so transparent state is correct
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Full-screen overlay + slide-in drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[101] lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-[102] lg:hidden flex flex-col"
            >
              {/* Green accent strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-green" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green to-emerald-400" />

              {/* Header row: close + title */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 -mr-2 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all"
                  aria-label="Close menu"
                >
                  <motion.svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={false}
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                </button>
              </div>

              {/* Nav links with stagger */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{ delay: 0.05 + i * 0.04, type: 'spring', damping: 25 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsMobileMenuOpen(false)
                          const el = document.querySelector(link.href)
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        className="flex items-center gap-4 py-4 px-4 -mx-4 rounded-xl text-gray-800 font-semibold hover:bg-primary-green/10 hover:text-primary-green active:scale-[0.99] transition-all group"
                      >
                        <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-primary-green/20 flex items-center justify-center transition-colors">
                          <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                          </svg>
                        </span>
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Call CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.3 }}
                className="p-6 pt-4 border-t border-gray-100"
              >
                <a
                  href="tel:9542134572"
                  className="flex items-center justify-center gap-3 w-full py-4 px-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black active:scale-[0.98] transition-all shadow-lg shadow-gray-900/25"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  Call (954) 213-4572
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent shadow-none border-transparent ${
          isScrolled
            ? 'lg:bg-white lg:shadow-md'
            : 'lg:bg-white/95 lg:backdrop-blur-sm lg:border-b lg:border-gray-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24">
            <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-0">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                <img
                  src="/assets/LOGO%20PEST%20CONTROL.png"
                  alt="In & Out Florida Pest Control"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-base sm:text-lg text-gray-900">In & Out</div>
                <div className="text-xs sm:text-sm text-primary-green font-semibold">Florida Pest Control</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.querySelector(link.href)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-gray-700 hover:text-primary-green font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9542134572"
                className="px-5 py-2.5 bg-gray-900 text-white font-bold rounded-xl text-sm hover:bg-black transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Animated hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden shrink-0 relative w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-gray-800 rounded-full origin-center"
                  animate={isMobileMenuOpen ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-gray-800 rounded-full"
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-gray-800 rounded-full origin-center"
                  animate={isMobileMenuOpen ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
