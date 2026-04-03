'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink, Globe, Layout, Sparkles } from 'lucide-react'
import { useContact } from '@/context/ContactContext'

const placeholderProjects = [
    { title: 'Nexus E-Commerce', category: 'Web App', image: '/hero-webdev.png', tech: ['Next.js', 'Stripe'] },
    { title: 'Growth Engine', category: 'SEO Strategy', image: '/hero-seo.png', tech: ['Analytics', 'Ahrefs'] },
    { title: 'Mobile Nexus', category: 'App Design', image: '/hero-mobile.png', tech: ['React Native', 'Expo'] },
    { title: 'Speed Optimizer', category: 'Optimization', image: '/hero-speed.png', tech: ['Vercel', 'Edge'] },
    { title: 'Crypto Dashboard', category: 'Web3', image: '/hero-webdev.png', tech: ['Solidity', 'Wagmi'] },
    { title: 'AI Marketing', category: 'Growth', image: '/hero-growth.png', tech: ['OpenAI', 'Python'] },
    { title: 'Modern SaaS', category: 'Platform', image: '/hero-webservices.png', tech: ['Tailwind', 'TRPC'] },
    { title: 'Tech Portfolio', category: 'Personal', image: '/hero-webdev.png', tech: ['Gsap', 'Framer'] }
]

export default function Projects() {
    const { openContact } = useContact()

    return (
        <section className="py-0 bg-[#0d0e0c]  pb-18  relative pt-15 overflow-hidden" id="projects">
            {/* Background Transition to White Footer */}
            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

            <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 mb-16">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-2 text-[#bbff1b] font-mono text-xs font-black uppercase tracking-[0.3em]"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="leading-none">Recent Works</span>
                    </motion.div>

                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-7xl font-black text-white leading-[0.95] uppercase tracking-tighter"
                    >
                        Featured <span className="text-[#bbff1b]">Projects</span>
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 100, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-[2px] bg-[#bbff1b]/50 rounded-full"
                    />
                </div>
            </div>

            {/* Horizontal Scroll Area with Edge Fading */}
            <div className="relative w-full group overflow-hidden z-10">
                {/* Edge Fades - Dark Theme */}
                {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0e0c] to-transparent z-20 pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0e0c] to-transparent z-20 pointer-events-none hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                <div className="relative w-full overflow-x-auto flex gap-8 py-10 px-6 md:px-[calc((100vw-100rem)/4)] pb-16 snap-x snap-mandatory scroll-smooth no-scrollbar">
                    {/* Project Card Variant Definition */}
                    {placeholderProjects.map((project, idx) => {
                        const cardVariants = {
                            initial: { y: 0, scale: 1 },
                            hover: { y: -12, scale: 1.02 },
                            tap: { y: -8, scale: 0.98 }
                        };

                        const imageVariants = {
                            initial: { scale: 1, opacity: 0.5, filter: 'grayscale(0%)' },
                            hover: { scale: 1.1, opacity: 0.8, filter: 'grayscale(0%)' }
                        };

                        const iconVariants = {
                            initial: { rotate: 0, backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' },
                            hover: { rotate: 12, backgroundColor: '#bbff1b', color: '#0d0e0c' }
                        };

                        return (
                            <motion.div
                                key={idx}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                variants={cardVariants}
                                onClick={openContact}
                                className="relative min-w-[300px] sm:min-w-[320px] h-[450px] bg-[#11120f] border border-white/5 rounded-[2rem] overflow-hidden cursor-pointer snap-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-[#bbff1b]/30"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <motion.div variants={imageVariants} transition={{ duration: 0.7 }} className="relative w-full h-full">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e0c] via-[#0d0e0c]/60 to-transparent" /> */}
                                </div>

                                {/* Content */}
                                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <span className="text-[10px] text-[#bbff1b] font-black uppercase tracking-widest block opacity-70">{project.category}</span>
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">{project.title}</h3>
                                        </div>
                                        <motion.div
                                            variants={iconVariants}
                                            transition={{ duration: 0.4 }}
                                            className="p-3 backdrop-blur-xl rounded-2xl border border-white/10"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.div>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase text-neutral-500">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                                            <motion.div
                                                initial={{ x: '-100%' }}
                                                whileInView={{ x: '0%' }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full w-full bg-[#bbff1b]/40"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Final CTA Card */}
                    <motion.div
                        whileHover={{ y: -12, scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openContact}
                        className="relative min-w-[300px] sm:min-w-[320px] h-[450px] bg-[#bbff1b] rounded-[2rem] flex flex-col items-center justify-center p-10 text-center group cursor-pointer snap-center shadow-[0_30px_100px_-15px_rgba(187,255,27,0.3)] transition-all duration-700"
                    >
                        <motion.div
                            initial={{ rotate: 3 }}
                            whileHover={{ rotate: 12, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 h-20 bg-[#0d0e0c] rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500"
                        >
                            <ArrowUpRight className="w-10 h-10 text-[#bbff1b]" />
                        </motion.div>
                        <h3 className="text-3xl font-black text-[#0d0e0c] uppercase leading-none mb-6">
                            Start Your <br /> Journey
                        </h3>
                        <div className="px-6 py-2 border-2 border-[#0d0e0c] rounded-full text-[#0d0e0c] text-[10px] font-black uppercase tracking-widest group-hover:bg-[#0d0e0c] group-hover:text-[#bbff1b] transition-all">
                            Connect with us
                        </div>
                    </motion.div>
                </div>
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