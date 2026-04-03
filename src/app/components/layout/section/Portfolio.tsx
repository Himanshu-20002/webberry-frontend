'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Play } from 'lucide-react'
import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"
import { useContact } from '@/context/ContactContext'

const portfolioItems = [
    {
        title: 'Modern E-Commerce',
        category: 'Web Development',
        image: '/hero-webdev.png',
        stats: '150% Sales Increase'
    },
    {
        title: 'Ranking Domination',
        category: 'SEO Strategy',
        image: '/hero-seo.png',
        stats: 'Page 1 #1 Results'
    },
    {
        title: 'High-Impact Media',
        category: 'Growth Ads',
        image: '/hero-growth.png',
        stats: '3.5x ROI Achieved'
    },
    {
        title: 'Performance Optimization',
        category: 'Site Speed',
        image: '/hero-speed.png',
        stats: '99/100 Lighthouse'
    },
    {
        title: 'Mobile Excellence',
        category: 'App Design',
        image: '/hero-mobile.png',
        stats: '70% Mobile Uplift'
    }
]

export function Portfolio() {
    const { openContact } = useContact()
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="portfolio" className="py-12 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#bbff1b08_1px,transparent_1px),linear-gradient(to_bottom,#bbff1b08_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[#bbff1b]/5 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <Badge className="mb-3 bg-[#bbff1b] text-[#11120f] border-none hover:bg-[#bbff1b]/90 uppercase font-black tracking-widest px-3 py-0.5 text-[10px] sm:text-xs">
                            Our Portfolio
                        </Badge>
                        <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                            Proven <span className="text-[#bbff1b]">Results</span> For High <span className="italic font-serif text-neutral-400 text-2xl sm:text-5xl">Stakes.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-4 self-end"
                    >
                        <p className="text-neutral-500 text-sm sm:text-lg max-w-sm font-medium">
                            Explore our latest work across digital development and growth marketing.
                        </p>
                        <Button 
                            onClick={openContact}
                            variant="outline" 
                            className="w-fit border-[#bbff1b]/30 text-[#bbff1b] hover:bg-[#bbff1b] hover:text-[#11120f] transition-all duration-300 rounded-full px-6 py-4 sm:px-8 sm:py-6 h-auto group"
                        >
                            <span className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs sm:text-sm">
                                View Full Archive <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </motion.div>
                </div>

                {/* Interactive Portfolio Showcase */}
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* List Navigation */}
                    <div className="lg:col-span-5 space-y-4">
                        {portfolioItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => setActiveIndex(idx)}
                                className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                                    activeIndex === idx 
                                    ? 'bg-[#bbff1b]/10 border-[#bbff1b]/30 shadow-[0_0_20px_rgba(187,255,27,0.1)]' 
                                    : 'bg-transparent border-white/5 hover:border-white/20'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 transition-colors ${
                                            activeIndex === idx ? 'text-[#bbff1b]' : 'text-neutral-500'
                                        }`}>
                                            {item.category}
                                        </p>
                                        <h3 className={`text-lg sm:text-xl font-black uppercase tracking-tight transition-colors ${
                                            activeIndex === idx ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                                        }`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className={`transition-all duration-500 transform ${
                                        activeIndex === idx ? 'scale-110 opacity-100' : 'scale-90 opacity-0'
                                    }`}>
                                        <div className="p-2 rounded-full bg-[#bbff1b] text-[#11120f]">
                                            <Play className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Preview Display */}
                    <div className="lg:col-span-7 relative h-[300px] sm:h-[500px] w-full group rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <Image 
                                    src={portfolioItems[activeIndex].image} 
                                    alt={portfolioItems[activeIndex].title}
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e0c] via-transparent to-transparent opacity-80"></div>
                                
                                {/* Info Box */}
                                <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <Badge className="bg-[#bbff1b] text-[#11120f] border-none mb-2 text-[10px] font-black uppercase tracking-widest">
                                            Success Metric
                                        </Badge>
                                        <p className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter">
                                            {portfolioItems[activeIndex].stats}
                                        </p>
                                    </div>
                                    <Button 
                                        onClick={openContact}
                                        size="icon" 
                                        className="w-14 h-14 rounded-full bg-white/10 hover:bg-[#bbff1b] hover:text-[#11120f] backdrop-blur-xl border border-white/10 transition-all group/btn"
                                    >
                                        <ExternalLink className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
