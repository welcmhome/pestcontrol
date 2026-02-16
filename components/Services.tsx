'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    name: 'Ant Control',
    description: 'Targeted elimination of ant trails and nests. Safe treatments that keep them from coming back.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Roach Treatment',
    description: 'Full treatment for roaches in kitchens, bathrooms, and hidden areas. Follow-up included.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Rodent Control',
    description: 'Exclusion, trapping, and cleanup. We seal entry points and prevent reinfestation.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Termite Protection',
    description: 'Inspection and treatment to protect your property from termite damage.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Spider Control',
    description: 'Indoor and perimeter treatment to reduce spiders and their prey.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Bed Bug Treatment',
    description: 'Thorough bed bug elimination with heat and chemical options. We don’t leave until they’re gone.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="border-l-4 border-gray-900 pl-6 mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gray-900 font-semibold text-sm uppercase tracking-wider"
          >
            What we treat
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1"
          >
            Pest elimination & prevention
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col sm:flex-row overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-primary-blue/50 hover:shadow-lg transition-all"
            >
              <div className="sm:w-2/5 relative h-44 sm:h-auto sm:min-h-[180px] flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
