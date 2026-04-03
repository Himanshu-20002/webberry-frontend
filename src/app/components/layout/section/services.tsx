'use client'

import React from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Globe, Search, Zap, Palette, Share2, TrendingUp, ArrowRight } from 'lucide-react'
import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"

const servicesList = [
    {
        icon: Globe,
        title: 'Website Development',
        description: 'Modern, high-performance websites built for speed, trust and maximum conversions.',
    },
    {
        icon: Search,
        title: 'Search Engine Optimization',
        description: 'Rank your business locally on Google and dominate search results in your industry.',
    },
    {
        icon: Zap,
        title: 'Ads & Lead Generation',
        description: 'High-impact paid campaigns that bring qualified leads to your business consistently.',
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Intuitive and beautiful user interfaces designed to provide a world-class user experience.',
    },
    {
        icon: Share2,
        title: 'Social Media Management',
        description: 'Grow your brand presence and engagement across all major social media platforms.',
    },
    {
        icon: TrendingUp,
        title: 'Growth Strategy',
        description: 'Data-driven business consulting to scale your operations and maximize your ROI.',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

import { useContact } from '@/context/ContactContext'

const Services = () => {
    const { openContact } = useContact()

    return (
        <section id="services" className="py-12 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-40 right-0 w-[40rem] h-[40rem] bg-[#bbff1b]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#bbff1b 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8 mb-16 sm:mb-24 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <Badge className="mb-4 bg-[#bbff1b] text-[#11120f] border-none uppercase font-black tracking-widest px-3 py-1 text-[10px] sm:text-xs">
                            Expertise
                        </Badge>
                        <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
                            Digital <span className="text-[#bbff1b]">Solutions</span> <br className="sm:hidden" /> Crafted for <span className="italic font-serif text-neutral-400">Growth.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center md:items-end gap-6 md:self-end"
                    >
                        <p className="text-neutral-500 text-sm sm:text-lg max-w-sm font-medium">
                            We provide a tactical ecosystem for brand dominance in the digital landscape.
                        </p>
                        <Button
                            onClick={openContact}
                            variant="outline"
                            className="w-full max-lg:hidden sm:w-fit border-[#bbff1b]/30 text-[#bbff1b] hover:bg-[#bbff1b] hover:text-[#11120f] transition-all duration-300 rounded-full px-8 py-6 h-auto group"
                        >
                            <span className=" flex items-center gap-2 font-bold uppercase tracking-wider text-xs sm:text-sm">
                                Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {servicesList.map((service, idx) => {
                        const Icon = service.icon;

                        const cardVariants = {
                            initial: { y: 0, scale: 1, borderColor: 'rgba(255, 255, 255, 0.05)' },
                            hover: { y: -8, scale: 1.02, borderColor: 'rgba(187, 255, 27, 0.5)' },
                            tap: { y: -4, scale: 0.98, borderColor: 'rgba(187, 255, 27, 0.4)' }
                        };

                        const iconVariants = {
                            initial: { rotate: 0, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#737373' },
                            hover: { rotate: 12, backgroundColor: '#bbff1b', color: '#11120f' },
                            tap: { rotate: 6, backgroundColor: '#bbff1b', color: '#11120f' }
                        };

                        const titleVariants = {
                            initial: { color: '#ffffff' },
                            hover: { color: '#bbff1b' },
                            tap: { color: '#bbff1b' }
                        };

                        const lineVariants = {
                            initial: { scaleX: 0, opacity: 0 },
                            hover: { scaleX: 1, opacity: 1 },
                            tap: { scaleX: 0.9, opacity: 1 }
                        };

                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                className="group relative"
                            >
                                <motion.div
                                    variants={cardVariants}
                                    className="h-full p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#11120f] border transition-all duration-500 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-6 relative overflow-hidden shadow-2xl"
                                >
                                    {/* Icon Wrap - Compact on mobile */}
                                    <motion.div
                                        variants={iconVariants}
                                        transition={{ duration: 0.5 }}
                                        className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-center"
                                    >
                                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </motion.div>
 
                                    {/* Content - Compact vertical stack or side-by-side on very small screens */}
                                    <div className="space-y-1 sm:space-y-3 flex-1">
                                        <div className="flex items-center gap-3">
                                            <span className="hidden sm:block text-[#bbff1b] font-mono text-sm opacity-50 font-bold tracking-widest uppercase">/ 0{idx + 1}</span>
                                        </div>
                                        <motion.h3
                                            variants={titleVariants}
                                            className="text-lg sm:text-2xl font-black tracking-tight uppercase line-clamp-1 sm:line-clamp-none"
                                        >
                                            {service.title}
                                        </motion.h3>
                                        <p className="text-neutral-500 leading-tight sm:leading-relaxed font-medium transition-colors duration-300 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none group-hover:text-neutral-300">
                                            {service.description}
                                        </p>
                                    </div>
 
                                    {/* Accent Gradient */}
                                    <motion.div 
                                        variants={{
                                            initial: { opacity: 0, scale: 0.5 },
                                            hover: { opacity: 1, scale: 1 },
                                            tap: { opacity: 0.8, scale: 0.9 }
                                        }}
                                        className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#bbff1b]/10 to-transparent rounded-full pointer-events-none blur-2xl"
                                    ></motion.div>
                                </motion.div>
 
                                {/* Hover Line - Thinner on mobile */}
                                <motion.div 
                                    variants={lineVariants}
                                    className="absolute bottom-3 left-6 right-6 h-[1.5px] sm:h-[2px] bg-[#bbff1b] origin-center rounded-full shadow-[0_0_10px_#bbff1b]"
                                ></motion.div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services