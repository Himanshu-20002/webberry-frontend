"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { apiFetch } from "@/app/lib/api";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import Hero from "../components/layout/section/hero";
import Services from "../components/layout/section/services";
import Projects from "../components/layout/section/projects";
import { Portfolio } from "../components/layout/section/Portfolio";
import Testimonial from "../components/layout/section/testimonial";

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await apiFetch("/testimonials");
        setTestimonials(res.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="flex flex-col gap-20 ">
      <Hero />
      <Services />




      {/* CTA */}
      <Testimonial />



      {/* <Portfolio /> */}
      <Projects />
    </div>
  );
}
