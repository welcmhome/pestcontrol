'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#services', label: 'Services', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { href: '#why-choose-us', label: 'Why Us', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '#service-areas', label: 'Areas', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { href: '#about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { href: '#reviews', label: 'Reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
  { href: '#contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

/** Top bar above main nav — change for other companies (pest control, service area, etc.) */
const topBarConfig = {
  serviceLabel: 'South Florida',       // e.g. "South Florida", "Boca Raton & Fort Lauderdale", or "33197 Orlando, FL"
  phoneNumber: '9542134572',
  phoneDisplay: '(954) 213-4572',
  showPhone: true,
}

const SCROLL_THRESHOLD = 20
const MOBILE_HIDE_THRESHOLD = 60

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const updateScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > SCROLL_THRESHOLD)

      if (window.innerWidth < 1024) {
        if (y <= MOBILE_HIDE_THRESHOLD) {
          setMobileHeaderVisible(true)
        } else if (y > lastScrollYRef.current) {
          setMobileHeaderVisible(false)
        } else {
          setMobileHeaderVisible(true)
        }
        lastScrollYRef.current = y
      } else {
        setMobileHeaderVisible(true)
      }
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-full bg-white z-[102] lg:hidden flex flex-col"
            >
              {/* Green accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-green to-emerald-400" />

              {/* Header row: close + title — full width */}
              <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 -mr-2 rounded-none bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all"
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

              {/* Nav links with stagger — centered on full-screen menu */}
              <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col items-center justify-center max-w-md mx-auto w-full">
                <ul className="space-y-1 w-full">
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
                        className="flex items-center gap-4 py-4 px-4 -mx-4 rounded-none text-gray-800 font-semibold hover:bg-primary-green/10 hover:text-primary-green active:scale-[0.99] transition-all group"
                      >
                        <span className="flex-shrink-0 w-10 h-10 rounded-none bg-gray-100 group-hover:bg-primary-green/20 flex items-center justify-center transition-colors">
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
                  className="flex items-center justify-center w-full py-4 px-5 bg-gray-900 text-white font-bold rounded-none hover:bg-black active:scale-[0.98] transition-all shadow-lg shadow-gray-900/25"
                >
                  Call (954) 213-4572
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:translate-y-0 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-transparent shadow-none border-transparent'
        } ${mobileHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Top utility bar — gray; mobile: "South Florida" centered, desktop: "Service for South Florida" + phone */}
        <div className="bg-gray-300 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-2.5 lg:py-2 flex items-center justify-center sm:justify-between gap-4 text-sm">
            {topBarConfig.showPhone && (
              <a
                href={`tel:${topBarConfig.phoneNumber}`}
                className="hidden sm:inline-flex items-center gap-1.5 flex-shrink-0 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {topBarConfig.phoneDisplay}
              </a>
            )}
            <div className="flex items-center gap-2 min-w-0 flex-1 justify-center sm:justify-end">
              <svg className="w-4 h-4 flex-shrink-0 text-gray-600 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate text-center sm:text-right">
                <span className="sm:hidden font-semibold">{topBarConfig.serviceLabel}</span>
                <span className="hidden sm:inline">
                  Service for <strong>{topBarConfig.serviceLabel}</strong>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Main nav: mobile = white bar; desktop = transparent then white on scroll */}
        <nav
          className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-5 transition-colors duration-300 ${
            isScrolled ? 'bg-white' : 'bg-white lg:bg-transparent'
          }`}
        >
          <div className="relative flex items-center justify-between h-20 sm:h-24">
            {/* Desktop: logo left */}
            <Link href="/" className="hidden lg:flex items-center shrink-0" aria-label="In & Out Florida Pest Control">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                <img
                  src="/assets/LOGO%20PEST%20CONTROL.png"
                  alt="In & Out Florida Pest Control"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop: menu links centered (Orkin-style) */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.querySelector(link.href)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={`font-bold text-sm whitespace-nowrap transition-colors ${isScrolled ? 'text-gray-900 hover:text-primary-green' : 'text-white/95 hover:text-white'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop: CTA right */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.querySelector('#contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-5 py-2.5 font-bold rounded-none text-sm bg-primary-green text-white hover:bg-primary-green-dark transition-colors"
              >
                Get a quote
              </a>
            </div>

            {/* Mobile: invisible spacer so logo stays centered */}
            <div className="flex-1 lg:hidden" aria-hidden />

            {/* Mobile: centered logo */}
            <Link
              href="/"
              className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex-shrink-0"
              aria-label="In & Out Florida Pest Control"
            >
              <img
                src="/assets/LOGO%20PEST%20CONTROL.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Mobile: phone icon + hamburger right (Orkin-style) */}
            <div className="flex lg:hidden items-center gap-1 flex-1 justify-end">
              <a
                href="tel:9542134572"
                className="p-3 text-gray-900 hover:bg-gray-100 active:opacity-80 transition-all"
                aria-label="Call"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 text-gray-900 hover:bg-gray-100 active:opacity-80 transition-all"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    className="block h-0.5 w-full bg-gray-900 rounded-none origin-center"
                    animate={isMobileMenuOpen ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                  />
                  <motion.span
                    className="block h-0.5 w-full bg-gray-900 rounded-none"
                    animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                  <motion.span
                    className="block h-0.5 w-full bg-gray-900 rounded-none origin-center"
                    animate={isMobileMenuOpen ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
