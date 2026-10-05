"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { MotionReveal } from "@/components/MotionReveal";
import { NicheTool } from "@/components/NicheTool";

const STEPS = [
  { t: "Submitted", d: "Your filing entered the intake queue." },
  { t: "Review", d: "A clerk checks eligibility and attachments." },
  { t: "Payment", d: "Fees and credits settle before issue." },
  { t: "Issued", d: "Permit or receipt is ready to download (demo)." },
];

export default function FilingsPage() {
  const brand = data.brand;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-sky-800">Citizen portal · filings</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">Filing desk</h1>
      <p className="mt-3 max-w-2xl text-sm" style={{ color: "var(--muted)" }}>Track permits, licenses, and fee payments in plain language.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <MotionReveal className="gov-card">
          <h2 className="font-display text-2xl">Sample timeline</h2>
          <div className="mt-4 space-y-3">
            {STEPS.map((s, i) => (
              <div key={s.t} className="gov-step">
                <span className="gov-num" style={{ background: i < 2 ? "var(--accent)" : "var(--border)", color: i < 2 ? "#fff" : "var(--fg)" }}>{i + 1}</span>
                <div>
                  <p className="font-semibold">{s.t}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop" className="gov-cta">Browse services</Link>
            <Link href="/checkout" className="gov-cta secondary">Pay a fee</Link>
          </div>
        </MotionReveal>
        <aside className="gov-card h-fit">
          <h2 className="font-display text-xl">Eligibility helper</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Plain-language path · early-bird credit {brand.offer.code}</p>
          <div className="mt-4"><NicheTool /></div>
        </aside>
      </div>
    </div>
  );
}
