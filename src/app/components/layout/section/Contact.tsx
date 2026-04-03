"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, X } from 'lucide-react'
import { useContact } from '@/context/ContactContext'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export function Contact() {
  const { isContactOpen, closeContact } = useContact()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setTimeout(() => {
        setSubmitStatus('idle')
        closeContact()
      }, 2000)
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 (0) 9876543210',
      href: 'tel:+919876543210',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@webberry.agency',
      href: 'mailto:hello@webberry.agency',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Digital Headquarters, India',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Fri: 9 AM - 6 PM',
      href: '#',
    },
  ]

  return (
    <>
      {/* Modal Overlay */}
      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeContact}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
        />
      )}

      {/* Contact Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={isContactOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed inset-2 sm:inset-4 md:inset-8 lg:inset-20 z-[101] max-w-6xl w-full mx-auto max-h-[90vh] overflow-y-auto rounded-3xl ${
          isContactOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="bg-[#0d0e0c] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative shadow-[0_0_100px_rgba(0,0,0,1)]">
          <button
            onClick={closeContact}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 hover:bg-white/5 rounded-2xl transition-all z-10 border border-white/5"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isContactOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-5 space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter">
                  Let's scale your <span className="text-[#bbff1b]">impact.</span>
                </h2>
                <p className="text-sm sm:text-base text-neutral-400 max-w-md font-medium leading-relaxed">
                  Have a project in mind? Let's discuss how WebBerry can dominate your local market through prime digital solutions.
                </p>
              </div>

              <div className="space-y-8">
                {contactDetails.map((detail, idx) => {
                  const Icon = detail.icon
                  return (
                    <motion.a
                      key={idx}
                      href={detail.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 group cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#bbff1b] group-hover:border-[#bbff1b] transition-all duration-500">
                        <Icon className="w-6 h-6 text-neutral-400 group-hover:text-[#0d0e0c] transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#bbff1b] uppercase tracking-[0.2em] font-black mb-1">{detail.label}</p>
                        <p className="text-lg sm:text-xl font-bold text-white group-hover:text-[#bbff1b] transition-colors">
                          {detail.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isContactOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 bg-[#0d0e0c] border border-white/10 rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-6 py-4 bg-[#0d0e0c] border border-white/10 rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full px-6 py-4 bg-[#0d0e0c] border border-white/10 rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b] transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-6 py-4 bg-[#0d0e0c] border border-white/10 rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b] transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-black block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals..."
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-[#0d0e0c] border border-white/10 rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b] transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-[#bbff1b]/10 border border-[#bbff1b]/30 rounded-2xl text-[#bbff1b] text-sm font-bold text-center">
                    ✓ Strategy session booked! We'll contact you shortly.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-500 text-sm font-bold text-center">
                    ✗ Something went wrong. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#bbff1b] text-[#0d0e0c] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm shadow-[0_20px_40px_rgba(187,255,27,0.2)]"
                >
                  {isSubmitting ? 'ANALYZING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
