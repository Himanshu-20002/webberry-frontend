'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

import { useContact } from "@/context/ContactContext";

export default function PublicNavbar() {
  const { openContact } = useContact();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0d0e0c]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#bbff1b] flex items-center justify-center shadow-[0_0_15px_rgba(187,255,27,0.4)] group-hover:shadow-[0_0_25px_rgba(187,255,27,0.6)] transition-all">
            <span className="text-[#0d0e0c] font-black text-xl leading-none">W</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-white uppercase">
            Web<span className="text-[#bbff1b]">Berry</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {["Services", "Portfolio", "Pricing", "Blog", "Contact"].map((item) => (
             item === "Contact" ? (
               <button
                 key={item}
                 onClick={openContact}
                 className="text-sm font-bold text-neutral-400 hover:text-white transition-colors relative group"
               >
                 {item}
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#bbff1b] rounded-full transition-all group-hover:w-full"></span>
               </button>
             ) : (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-sm font-bold text-neutral-400 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#bbff1b] rounded-full transition-all group-hover:w-full"></span>
                </Link>
             )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:inline-flex border-white/10 text-white hover:bg-white/5 hover:border-white/20 hover:text-white rounded-xl h-10 px-5 font-bold transition-all">
            <Link href="/admin/login">Client Login</Link>
          </Button>

          <Button 
            onClick={openContact}
            className="bg-[#bbff1b] hover:bg-[#bbff1b]/90 text-[#0d0e0c] rounded-xl h-10 px-6 font-black uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(187,255,27,0.2)] hover:shadow-[0_0_35px_rgba(187,255,27,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            CONSULTATION
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
