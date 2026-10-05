"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="gov-banner">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <h1 className="max-w-3xl font-display text-4xl md:text-6xl">{brand.name}</h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">{brand.tagline}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Gov Swiss clarity · citizen portal</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="gov-cta">Find a service</Link>
            <Link href="/filings" className="gov-cta secondary">Track a filing</Link>
            <Link href="/checkout" className="gov-cta secondary">Pay a fee</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="gov-grid">
          <div className="gov-card">
            <h2 className="font-display text-2xl">How filing works</h2>
            <div className="mt-4">
              {[
                ["Find a service", "Search permits, licenses, and civic payments by life event."],
                ["Check eligibility", "Answer a short guided path in plain language."],
                ["Pay fees", "See totals and credits before you pay (demo checkout)."],
                ["Track status", "Submitted → review → payment → issued."],
              ].map(([t, d], i) => (
                <div key={t} className="gov-step">
                  <span className="gov-num">{i + 1}</span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="gov-card h-fit">
            <p className="text-sm" style={{ color: "var(--muted)" }}>Eligibility and fee credit tools — not a storefront metaphor.</p>
            <div className="mt-2"><NicheTool /></div>
          </aside>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl">Services directory</h2>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{products.length} permits, licenses, and civic payments.</p>
            </div>
            <Link href="/shop" className="text-sm font-semibold" style={{ color: "var(--accent)" }}>Browse all →</Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 9).map((p) => (
              <div key={p.id} className="gov-card !p-3"><ProductCard product={p} /></div>
            ))}
          </div>
        </div>

        <div id="status" className="gov-card mt-10">
          <h2 className="font-display text-2xl">Filing timeline</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {["Submitted", "Review", "Payment", "Issued"].map((s, i) => (
              <div key={s} className="gov-step !border-0 !py-2">
                <span className="gov-num" style={{ background: i < 2 ? "var(--accent)" : "var(--border)", color: i < 2 ? "#fff" : "var(--fg)" }}>{i + 1}</span>
                <div>
                  <p className="font-semibold">{s}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{i < 2 ? "Complete" : i === 2 ? "Action needed" : "Pending"}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/filings" className="gov-cta mt-6 inline-flex">Open filing desk</Link>
        </div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
