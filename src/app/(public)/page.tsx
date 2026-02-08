"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { apiFetch } from "@/app/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <div className="flex flex-col gap-20">
      {/* HERO */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Badge className="w-fit">WebBerry Agency</Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            We help local businesses{" "}
            <span className="text-primary">grow online</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Websites, SEO, ads, and branding — built with premium design and real
            performance results.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-consultation">Book Free Consultation</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
            <div>
              <p className="text-xl font-bold text-foreground">20+</p>
              <p>Projects Delivered</p>
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">10+</p>
              <p>Local Businesses</p>
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">5⭐</p>
              <p>Client Rating</p>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <Card className="rounded-2xl border bg-linear-to-br from-background to-muted shadow-sm">
          <CardContent className="flex flex-col gap-6 p-8">
            <h3 className="text-xl font-semibold">
              Get a complete online growth plan
            </h3>

            <div className="grid gap-4">
              <div className="rounded-xl border bg-background p-4">
                <p className="font-medium">🚀 Website + Landing Page</p>
                <p className="text-sm text-muted-foreground">
                  Fast, modern, conversion focused.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-4">
                <p className="font-medium">📈 SEO + Google Ranking</p>
                <p className="text-sm text-muted-foreground">
                  Show up when customers search.
                </p>
              </div>

              <div className="rounded-xl border bg-background p-4">
                <p className="font-medium">🎯 Ads + Lead Generation</p>
                <p className="text-sm text-muted-foreground">
                  Facebook/Google Ads with tracking.
                </p>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* SERVICES */}
      <section className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-2 text-muted-foreground">
            Everything you need to build trust and get consistent leads.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl">
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold">Website Development</h3>
              <p className="text-sm text-muted-foreground">
                Modern websites built for speed, trust and conversions.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold">SEO Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Rank your business locally on Google search results.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold">Ads & Lead Generation</h3>
              <p className="text-sm text-muted-foreground">
                Paid campaigns that bring leads consistently.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Button asChild variant="outline">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-muted-foreground">
            Real feedback from local businesses we helped.
          </p>
        </div>

        {loadingTestimonials ? (
          <p className="text-muted-foreground">Loading testimonials...</p>
        ) : testimonials.length === 0 ? (
          <p className="text-muted-foreground">No testimonials yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <Card key={t._id} className="rounded-2xl">
                <CardContent className="flex flex-col gap-3 p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.rating}⭐
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">{t.role}</p>

                  <p className="text-sm leading-relaxed">{t.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="rounded-3xl border bg-muted p-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready to grow your business?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Book a free consultation call. We’ll review your business and suggest
          the best plan.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/book-consultation">Book Free Call</Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Send Message</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
