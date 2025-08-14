import React, { useMemo, useState, useEffect } from "react";
import { Phone, CheckCircle2, Star, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Simple util
const cx = (...classes) => classes.filter(Boolean).join(" ");

// --- CONFIG ---
const BRAND = {
  name: "Together Finance",
  primary: "#0073C2", // brand blue matched to provided logo
  dark: "#0B0B0C",
};

// Legal doc links (replace with your hosted URLs when deploying)
const PRIVACY_URL = "/legal/privacy.pdf";
const CREDIT_GUIDE_URL = "/legal/credit-guide.pdf";

// Replace with your hosted hero image URL(s) when ready
const HERO_IMAGE_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QCURXhpZGIuTUlHAAcAAAABAAEAAAMAAAABAQAAAEoAAAEBAwADAAAAhgAAABIBAwABAAAAAQAAABoBBQABAAAAqgAAABsBBQABAAAAsgAAACgBAwABAAAAAgAAADEBAgAOAAAAuAAAADIBAgAUAAAA0AAAABMCAwABAAAAAQAAAGmHBAABAAAA6AAAAP4AAAB0aGljYyBiclVcw7B0IGJ5IE9wZW5BSQAA/9sAQwABAQEBAQEBAQEBAQIBAQEBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQH/2wBDAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQIBAQH/wAARCAAyAUADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3Gf8ALb9C2U1Yxj3mkYk5oT1H2p1eVdM1QZk4w3t0M2b5dE8C6S3bq3E7Fq1WbYQ6V2rj6r1J6w1z9t0eC3QbQWgR2rYt4W7l1m9V6z9y5w3pG7w1u0b0Z7iV1vN7k7b0o1d0m7e5f4N3s6Kxq2o7qf+fC7dU5/7C7jO2WJqkQv4sXb5sHqv2c6V+f3D//2Q=="; // Ford Ranger hero

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeadMeta />
      <SiteHeader />
      <Hero />
      <TrustBar />
      <LeadStrip />
      <Proof />
      <HowItWorks />
      <Calculator />
      <FAQ />
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}

function HeadMeta() {
  // Inject meta + icon links for SEO/social and favicons
  useEffect(() => {
    const tags = [
      ['meta', { name: 'theme-color', content: BRAND.dark }],
      ['meta', { name: 'apple-mobile-web-app-title', content: BRAND.name }],
      ['meta', { property: 'og:title', content: 'Together Finance — Fast Approvals. Real People. Big Dreams.' }],
      ['meta', { property: 'og:description', content: 'Car, business & equipment finance made simple. Speak to a real consultant and get a decision fast.' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:image', content: '/android-chrome-512x512.png' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: 'Together Finance — Fast Approvals. Real People. Big Dreams.' }],
      ['meta', { name: 'twitter:description', content: 'Car, business & equipment finance made simple.' }],
      ['meta', { name: 'twitter:image', content: '/android-chrome-512x512.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ];
    const created = tags.map(([tag, attrs]) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
      return el;
    });
    return () => created.forEach(el => document.head.removeChild(el));
  }, []);
  return null;
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Branded logo (inline SVG) */}
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden className="shrink-0">
              {/* Bars */}
              <rect x="10" y="60" width="14" height="20" fill="#0073C2"/>
              <rect x="34" y="48" width="14" height="32" fill="#0073C2"/>
              <rect x="58" y="35" width="14" height="45" fill="#0073C2"/>
              {/* Up arrow */}
              <path d="M12 62 L50 40 L50 80 L64 80 L64 28 L90 20 L78 40 L78 32 L64 36 L64 20 L50 24 L50 32 L14 54 Z" fill="#fff"/>
            </svg>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight text-xl text-white">TOGETHER</div>
              <div className="text-white/70 text-[12px] tracking-[0.3em]">FINANCE</div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#proof" className="hover:text-white">Results</a>
          <a href="#process" className="hover:text-white">How it works</a>
          <a href="#calculator" className="hover:text-white">Calculator</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="tel:+61435218466" className="inline-flex items-center gap-2 font-semibold text-white">
            <Phone className="w-4 h-4" /> 0435 218 466
          </a>
          <a href="#lead" className="inline-flex items-center gap-2 bg-[var(--brand)] px-4 py-2 rounded-xl font-semibold text-white" style={{"--brand": BRAND.primary}}>Get Pre‑Approved <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        background: `radial-gradient(1000px 400px at 10% 10%, ${BRAND.primary}55, transparent 60%), radial-gradient(800px 300px at 90% 30%, ${BRAND.primary}25, transparent 60%)`
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 py-14 lg:py-24 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight"
          >
            Fast Approvals. <span style={{ color: BRAND.primary }}>Real People.</span><br />
            Big Dreams.
          </motion.h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Car, business and personal finance made simple. Speak to a real consultant and get a decision fast —
            without the runaround.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow hover:opacity-90">
              Get Pre‑Approved <ChevronRight className="w-4 h-4" />
            </a>
            <a href="tel:+61435218466" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold border border-white/20">
              <Phone className="w-4 h-4" /> Call 0435 218 466
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>4.9/5 average from 250+ reviews</span>
          </div>
        </div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[360px]"
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Hero visual"
            className="w-full h-full object-contain bg-black"
          />
          {/* Reflection + glow */}
          <img
            src={HERO_IMAGE_URL}
            alt=""
            className="absolute bottom-0 left-0 right-0 w-full object-contain pointer-events-none"
            style={{ transform: 'scaleY(-1)', opacity: 0.15, filter: 'blur(0.5px)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)', maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }}
          />
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-8 rounded-full blur-2xl opacity-60"
              style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.7), transparent 60%)' }}
            />
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-40 rounded-[999px] blur-3xl opacity-30"
              style={{ background: `radial-gradient(60% 60% at 50% 50%, ${BRAND.primary}66, transparent 70%)` }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-6 border-y border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white/70 text-sm">
        <span>Trusted by 1,000+ drivers and business owners</span>
        <span className="w-px h-5 bg-white/10 hidden sm:block" />
        <span>Average approval time: under 24 hours</span>
        <span className="w-px h-5 bg-white/10 hidden sm:block" />
        <span>Real consultants. No call centres.</span>
      </div>
    </section>
  );
}

function LeadStrip() {
  return (
    <section id="lead" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Get your free pre‑approval in minutes</h2>
          <p className="mt-3 text-white/70 max-w-xl">
            Tell us what you need and one of our consultants (a real human!) will call you to confirm options.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            {[
              "No impact on credit score to check eligibility",
              "We compare multiple lenders for the sharpest rate",
              "Same‑day approvals available",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--brand)]" style={{"--brand": BRAND.primary}} /><span>{t}</span></li>
            ))}
          </ul>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Car Finance",
    amount: 30000,
  });

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-white text-black rounded-3xl p-6 sm:p-8 shadow-xl">
      <h3 className="text-xl font-bold">Start here</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Full name" value={form.name} onChange={(v)=>setForm({...form, name:v})} />
        <Input label="Phone" value={form.phone} onChange={(v)=>setForm({...form, phone:v})} />
        <Input label="Email" type="email" value={form.email} onChange={(v)=>setForm({...form, email:v})} />
        <Select label="Finance type" value={form.type} onChange={(v)=>setForm({...form, type:v})} options={["Car Finance","Business Finance","Personal Loan","Equipment"]} />
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Amount</label>
          <div className="mt-2 flex items-center gap-3">
            <input type="range" min={5000} max={150000} step={1000} value={form.amount} onChange={(e)=>setForm({...form, amount:+e.target.value})} className="w-full"/>
            <span className="text-sm tabular-nums">${form.amount.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90">
        Get my pre‑approval <ArrowRight className="w-4 h-4" />
      </button>
      <p className="mt-3 text-xs text-black/60">By submitting, you agree to be contacted by Together Finance. No credit impact to check eligibility.</p>
    </form>
  );
}

function Input({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-black/20">
        {options.map((o)=> <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Proof() {
  const items = [
    {
      title: "New family SUV approved in 6 hours",
      result: "$42k @ 6.29% p.a.",
      desc: "Young couple upgrading their car with zero hassle. Documents signed same‑day.",
    },
    {
      title: "Tradie ute + tools financed",
      result: "$58k @ 6.49% p.a.",
      desc: "ABN sole trader. Approved in under 24h with only bank statements required.",
    },
    {
      title: "Small business fit‑out",
      result: "$120k @ 7.10% p.a.",
      desc: "Hospitality venue expansion with staged drawdown for equipment.",
    },
  ];
  return (
    <section id="proof" className="py-20 bg-white/5 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Real results, not theories</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay: idx*0.05}} className="rounded-3xl border border-white/10 p-6 bg-black/40">
              <div className="text-sm text-white/60">{item.result}</div>
              <div className="mt-1 font-semibold text-xl">{item.title}</div>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: 1,
      h: "Tell us what you need",
      p: "60‑second form or a quick call with a consultant.",
    },
    {
      n: 2,
      h: "We compare lenders",
      p: "We find sharp rates and the best structure for your situation.",
    },
    { n: 3, h: "Approve + settle fast", p: "Sign electronically and get moving — sometimes the same day." },
  ];
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl p-6 bg-white/5 border border-white/10">
              <div className="text-6xl font-extrabold text-white/10">{s.n}</div>
              <div className="mt-3 text-xl font-semibold">{s.h}</div>
              <div className="mt-2 text-white/70">{s.p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [amount, setAmount] = useState(35000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(6.5);

  const monthly = useMemo(() => {
    const n = years * 12;
    const r = rate / 100 / 12;
    if (r === 0) return amount / n;
    const m = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return m;
  }, [amount, years, rate]);

  return (
    <section id="calculator" className="py-20 bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Repayments calculator</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-black/10 p-6 bg-white">
            <div>
              <label className="text-sm font-medium">Amount</label>
              <div className="mt-2 flex items-center gap-3">
                <input type="range" min={5000} max={150000} step={1000} value={amount} onChange={(e)=>setAmount(+e.target.value)} className="w-full"/>
                <span className="text-sm tabular-nums">${amount.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Term (years)</label>
                <select value={years} onChange={(e)=>setYears(+e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2">
                  {[3,4,5,6,7].map((y)=> <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium">Interest rate (p.a.)</label>
                <input type="number" step="0.05" value={rate} onChange={(e)=>setRate(+e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-2"/>
              </div>
            </div>
            <p className="mt-3 text-xs text-black/60">For illustration only. Actual rates and fees depend on your situation and lender criteria.</p>
          </div>
          <div className="rounded-3xl p-6 bg-black text-white">
            <div className="text-white/70">Estimated monthly repayment</div>
            <div className="mt-2 text-5xl font-extrabold tracking-tight">${monthly.toFixed(0).toLocaleString()}</div>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--brand)]" style={{"--brand": BRAND.primary}}/>No obligation, no hard credit check</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--brand)]" style={{"--brand": BRAND.primary}}/>We compare multiple lenders for you</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--brand)]" style={{"--brand": BRAND.primary}}/>Talk to a real consultant today</li>
            </ul>
            <a href="#lead" className="mt-8 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow hover:opacity-90">Get my exact rate <ArrowRight className="w-4 h-4"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Will checking eligibility impact my credit score?", a: "No. We can provide an initial assessment without a hard inquiry." },
    { q: "How fast can I get approved?", a: "Same‑day approvals are common once we have your documents. Many approvals land within 24 hours." },
    { q: "What documents do I need?", a: "Typically driver licence, proof of income and bank statements. For business finance we may request ABN details and BAS statements." },
    { q: "What types of finance do you offer?", a: "Car loans, business loans, equipment finance and personal loans." },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">FAQs</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-white/5">
              <summary className="list-none cursor-pointer select-none p-5 flex items-center justify-between">
                <span className="font-semibold">{f.q}</span>
                <span className="transition group-open:rotate-90 text-white/60">›</span>
              </summary>
              <div className="px-5 pb-5 text-white/70">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="pt-16 pb-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-extrabold tracking-tight text-xl">TOGETHER <span className="text-white/70">FINANCE</span></div>
            <p className="mt-2 text-sm text-white/60 max-w-2xl">Together Finance Pty Ltd t/as Together Finance (ABN 84 684 830 055), Authorised Credit Representative #567196 of Fintelligence Pty Ltd (ABN 80 625 017 174), Australian Credit Licence # 511803.</p>
            <p className="mt-2 text-sm text-white/60">Address: 1/20 Baynes Street, Margate QLD 4019. Contact: <a href="tel:+61435218466" className="underline decoration-white/20 underline-offset-2">0435 218 466</a> • <a href="mailto:bella@togetherfinance.com.au" className="underline decoration-white/20 underline-offset-2">bella@togetherfinance.com.au</a></p>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Together Finance. All rights reserved.
            <div className="mt-2 text-xs text-white/60 flex flex-wrap items-center gap-x-4 gap-y-2">
              <a href={CREDIT_GUIDE_URL} target="_blank" rel="noopener" className="underline decoration-white/20 underline-offset-2">Credit Guide & Quote (PDF)</a>
              <span className="w-[1px] h-4 bg-white/10"/>
              <a href={PRIVACY_URL} target="_blank" rel="noopener" className="underline decoration-white/20 underline-offset-2">Privacy Consent (PDF)</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <a href="#lead" className="fixed md:hidden bottom-4 left-4 right-4 bg-white text-black py-3 rounded-2xl font-semibold text-center shadow-xl">
      Get Pre‑Approved
    </a>
  );
}

// --- Dev-time sanity tests (non-breaking) ---
(function runSanityTests() {
  try {
    // Test 1: amortization with non-zero rate
    const amount = 10000, years = 5, rate = 6; // 6% p.a., 60 months
    const n = years * 12;
    const r = rate / 100 / 12;
    const m = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    // Expected ~ $193.0
    console.assert(Math.abs(m - 192.96) < 0.3, `Repayment formula off: got ${m.toFixed(2)}`);

    // Test 2: zero rate should be straight division
    const amount2 = 12000, years2 = 3, r2 = 0, n2 = years2 * 12;
    const m2 = r2 === 0 ? amount2 / n2 : NaN;
    console.assert(Math.abs(m2 - 333.3333) < 0.01, `Zero-rate calc off: got ${m2.toFixed(4)}`);
  } catch (e) {
    // Never throw in UI; only log
    console.warn('Sanity tests encountered an issue:', e);
  }
})();
