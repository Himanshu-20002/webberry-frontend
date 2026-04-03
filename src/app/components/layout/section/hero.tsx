'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/app/components/ui/button'
import { Sparkles, Star, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useContact } from '@/context/ContactContext'

export default function Hero() {
    const { openContact } = useContact()
    const benefits = [
        "Conversion-Optimized Website Design",
        "Local SEO & Google Maps Ranking",
        "High-ROI Ads & Lead Generation",
        "Premium Brand Identity & Creative"
    ]

    const heroImages = ["/hero-webdev.png", "/hero-seo.png", "/hero-growth.png", "/hero-speed.png", "/hero-mobile.png", '/hero-webservices.png']
    const heroLabels = [
        "Custom Web Architectures",
        "Search Engine Domination",
        "ROI-Driven Ad Campaigns",
        "Ultra-Fast Load Speeds",
        "Mobile-First Excellence",
        "Strategic Brand Positioning"
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [heroImages.length])

    return (
        <section className="relative pt-15 pb-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden min-h-screen flex flex-col justify-center bg-transparent">
            {/* Background Polish - Black Hole Curve Gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                {/* Curved center gradient (White & Lime to Dark) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] min-w-[800px] h-[120%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08)_0%,rgba(187,255,27,0.15)_30%,transparent_100%)] opacity-100 mix-blend-screen pointer-events-none"></div>

                {/* Core lime glow */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#bbff1b]/20 blur-[130px] rounded-full pointer-events-none"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side Content */}
                    <div className="space-y-3 sm:space-y-9 lg:space-y-12 shrink-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#bbff1b]/30 bg-[#bbff1b]/10 text-[10px] sm:text-sm font-bold tracking-wider text-[#bbff1b] uppercase backdrop-blur-sm"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>WebBerry Digital </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <h1 className="text-[2.6rem] sm:text-5xl lg:text-7xl font-black leading-[1.05] text-white tracking-tighter uppercase">
                                We help local<br className="sm:hidden" /> businesses <br className="hidden sm:block" /> <span className="text-[#bbff1b]">grow online</span>
                            </h1>
                            <p className="mt-3 sm:mt-6 text-sm sm:text-xl text-neutral-400 leading-relaxed max-w-xl font-medium">
                                Websites, SEO, and Ads built with premium design and data-driven performance. We help you dominate your local market.
                            </p>
                        </motion.div>

                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-base pt-1"
                        >
                            <li className="flex items-start gap-3 text-neutral-300 font-bold uppercase tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-[#bbff1b] shrink-0 mt-0.5" />
                                <span>Website + Landing Pages</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300 font-bold uppercase tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-[#bbff1b] shrink-0 mt-0.5" />
                                <span>SEO + Google Ranking</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300 font-bold uppercase tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-[#bbff1b] shrink-0 mt-0.5" />
                                <span>Ads + Lead Generation</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-300 font-bold uppercase tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-[#bbff1b] shrink-0 mt-0.5" />
                                <span>Custom Brand Identity</span>
                            </li>
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-3 pt-2"
                        >
                            <Button
                                onClick={openContact}
                                size="lg"
                                className="w-full sm:w-auto text-sm sm:text-lg px-8 h-14 sm:h-16 bg-[#bbff1b] hover:bg-[#bbff1b]/90 text-[#0d0e0c] font-black uppercase rounded-2xl shadow-xl shadow-[#bbff1b]/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group"
                            >
                                Get Started Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-lg px-8 h-14 sm:h-16 border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition-all">
                                <Link href="/portfolio">Portfolio</Link>
                            </Button>
                        </motion.div>

                        {/* Statistics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex items-center justify-between sm:justify-start gap-4 sm:gap-12 pt-8 lg:pt-10 border-t border-white/5 lg:border-white/5"
                        >
                            <div className="text-center sm:text-left">
                                <p className="text-2xl sm:text-3xl font-black text-[#bbff1b]">20+</p>
                                <p className="text-[8px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">Projects</p>
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-2xl sm:text-3xl font-black text-white">10+</p>
                                <p className="text-[8px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">Partners</p>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-1">
                                    <p className="text-2xl sm:text-3xl font-black text-white">5.0</p>
                                    <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500 mb-1" />
                                </div>
                                <p className="text-[8px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mt-1">Rating</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Floating Visuals */}
                    <div className="relative mt-5 h-[300px] sm:h-[450px] lg:h-[600px] w-full flex items-center justify-center order-first lg:order-last mb-10 lg:mb-0">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-[#bbff1b]/10 rounded-full blur-[100px] opacity-20 animate-pulse"></div>

                        <div className="relative w-full h-full perspective-1000">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 15, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, rotateY: -15, y: -10 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 z-20 flex items-center justify-center p-2 sm:p-4"
                                >
                                    {/* Thick Professional Frame */}
                                    <div className="relative w-full h-[279px] sm:h-[400px] lg:h-[550px] rounded-[2.5rem] sm:rounded-[3.5rem] border-[10px] sm:border-[16px] border-[#11120f] bg-[#11120f] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden group/frame">
                                        <div className="absolute inset-0 bg-[#bbff1b]/5 z-10 pointer-events-none group-hover/frame:bg-transparent transition-colors duration-700"></div>
                                        <Image
                                            src={heroImages[currentImageIndex]}
                                            alt="WebBerry Excellence"
                                            fill
                                            className="object-cover rounded-2xl group-hover/frame:scale-110 transition-transform duration-[10s] ease-linear"
                                            priority
                                        />
                                        {/* Subtle Shine Overlay */}
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative Tech Rings */}
                            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] opacity-[0.03] border border-[#bbff1b] rounded-full animate-[spin_40s_linear_infinite]"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] opacity-[0.02] border border-[#bbff1b] rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                            </div>

                            {/* Floating Badge - Responsive positioning */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[78%] right-4 lg:-top-10 lg:right-10 backdrop-blur-md bg-white/5 border border-white/10 px-4 py-3 lg:px-6 lg:py-4 rounded-2xl lg:rounded-3xl z-30 shadow-2xl"
                            >
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-[#bbff1b] animate-ping"></div>
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, x: 5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -5 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-[9px] lg:text-[10px] font-black text-white tracking-[0.2em] uppercase whitespace-nowrap"
                                        >
                                            {heroLabels[currentImageIndex]}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
