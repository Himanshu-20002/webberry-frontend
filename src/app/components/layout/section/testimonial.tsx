'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Founder, Cloud Nine',
        content: 'WebBerry transformed our local presence. We went from being invisible to dominating the first page of Google within 3 months.',
        rating: 5,
        initials: 'SJ'
    },
    {
        name: 'David Miller',
        role: 'CEO, Miller Tech',
        content: 'The website performance is absolutely industry-leading. Our conversion rates tripled after only two weeks of the new launch.',
        rating: 5,
        initials: 'DM'
    },
    {
        name: 'Eila Ross',
        role: 'Marketing Lead, GreenTree',
        content: 'Their growth strategies are data-driven and effective. The ROI we saw from their ad campaigns was beyond our expectations.',
        rating: 5,
        initials: 'ER'
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}

export default function Testimonial() {
    return (
        <section id="testimonials" className="py-12 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-30 left-30 w-[27rem] h-[20rem] bg-[#bbff1b]/9 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8 mb-16 sm:mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <Badge className="mb-4 bg-[#bbff1b] text-[#11120f] border-none uppercase font-black tracking-widest px-3 py-1 text-[10px] sm:text-xs">
                            Feedback
                        </Badge>
                        <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
                            What our <span className="text-[#bbff1b]">Partners</span> <br className="sm:hidden" /> say about <span className="italic font-serif text-neutral-400">Impact.</span>
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
                            Don't just take our word for it—listen to our network of high-growth businesses.
                        </p>
                        <Button asChild variant="outline" className="max-lg:hidden w-full sm:w-fit border-[#bbff1b]/30 text-[#bbff1b] hover:bg-[#bbff1b] hover:text-[#11120f] transition-all duration-300 rounded-full px-8 py-6 h-auto group">
                            <Link href="/testimonials" className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs sm:text-sm">
                                View Success <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
                <motion.div
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible pb-10 sm:pb-0 snap-x snap-mandatory no-scrollbar"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testi, idx) => {
                        const cardVariants = {
                            initial: { y: 0, scale: 1 },
                            hover: { y: -8, scale: 1.02 },
                            tap: { scale: 0.98 }
                        };

                        const accentVariants = {
                            initial: { backgroundColor: 'rgba(187, 255, 27, 0.05)', scale: 1 },
                            hover: { backgroundColor: 'rgba(187, 255, 27, 0.1)', scale: 1.2 }
                        };

                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                className="group relative h-auto md:h-full min-w-[85vw] md:min-w-0 snap-center first:ml-2 last:mr-2"
                            >
                                <motion.div 
                                    variants={cardVariants}
                                    className="h-full p-7 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#11120f] border border-white/5 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden shadow-2xl hover:border-[#bbff1b]/30"
                                >
                                    {/* Header: Compact on mobile */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#bbff1b] text-base">
                                                {testi.initials}
                                            </div>
                                            <div>
                                                <h3 className="font-black text-white text-base sm:text-lg uppercase tracking-tight leading-none">{testi.name}</h3>
                                                <p className="text-[10px] sm:text-xs text-neutral-500 font-bold mt-1.5 uppercase tracking-wider">{testi.role}</p>
                                            </div>
                                        </div>
                                        <Quote className="w-8 h-8 text-[#bbff1b]/10 group-hover:text-[#bbff1b]/20 transition-colors" />
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1">
                                        {[...Array(testi.rating)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 text-[#bbff1b] fill-[#bbff1b]" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-neutral-400 text-[13px] sm:text-sm leading-relaxed font-medium italic opacity-90 group-hover:opacity-100 transition-opacity">
                                        "{testi.content}"
                                    </p>

                                    {/* Decorative Background Accent */}
                                    <motion.div 
                                        variants={accentVariants}
                                        className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl pointer-events-none"
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

        </section>
    )
}
