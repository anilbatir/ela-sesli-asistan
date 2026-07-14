"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock,
  Home as HomeIcon,
  Mic,
  PhoneCall,
  Scale,
  Scissors,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  İçerik (TR / EN)                                                   */
/* ------------------------------------------------------------------ */

type Lang = "tr" | "en";

const COPY = {
  tr: {
    nav: [
      { label: "Nasıl çalışır", href: "#ozellikler" },
      { label: "Sektörler", href: "#sektorler" },
      { label: "İletişim", href: "#iletisim" },
    ],
    badge: "Yapay zeka destekli sesli asistan",
    titleA: "Ela",
    titleB: "her aramada.",
    subtitle:
      "İnsan gibi konuşur, hiç telefonu kaçırmaz, ekibinizin zamanını size geri verir. Otel, restoran ve klinikler için 7/24 çalışan sesli rezervasyon asistanı.",
    ctaPrimary: "Hemen Dene",
    ctaSecondary: "Demo dinle",
    features: [
      {
        title: "Hiçbir aramayı kaçırmaz",
        desc: "7/24 her aramaya anında cevap verir, hiçbir rezervasyon fırsatı kaybolmaz.",
      },
      {
        title: "İnsan gibi doğal konuşur",
        desc: "Müşteri karşısındakinin yapay zeka olduğunu fark etmez; sıcak, akıcı bir sohbet yaşar.",
      },
      {
        title: "Zamanınızı geri verir",
        desc: "Personeliniz telefonla değil, misafirle ilgilenir. İş yükü azalır, verimlilik artar.",
      },
    ],
    stat: { value: "7/24", label: "Kesintisiz, yorulmadan, her aramada aynı enerjiyle." },
    sectorsTitle: "Sektörünüzü seçin, Ela'yı dinleyin",
    sectorsSub: "Her sektör için gerçek bir çağrı örneği — Ela'nın nasıl konuştuğunu duyun.",
    sectors: {
      hotel: "Butik oteller",
      restaurant: "Restoranlar",
      clinic: "Klinikler",
      salon: "Kuaför & Güzellik",
      law: "Avukatlık Büroları",
      realestate: "Emlak Ofisleri",
    } as Record<string, string>,
    play: "Dinle",
    playing: "Çalıyor…",
    comingSoon: "Demo kaydı yakında.",
    formTitle: "Ela'yı işletmenizde deneyin",
    formSub: "Bilgilerinizi bırakın, ekibimiz sizinle iletişime geçsin.",
    fBusiness: "İşletme adı",
    fBusinessPh: "Örn. Deniz Manzara Otel",
    fPhone: "Telefon",
    fPhonePh: "05xx xxx xx xx",
    fEmail: "E-posta",
    fEmailPh: "ornek@isletme.com",
    fSubmit: "Gönder",
    fSuccess: "Teşekkürler! Ekibimiz en kısa sürede sizinle iletişime geçecek.",
    footer: "Ela — sesli rezervasyon asistanınız.",
    langToggle: "EN",
  },
  en: {
    nav: [
      { label: "How it works", href: "#ozellikler" },
      { label: "Industries", href: "#sektorler" },
      { label: "Contact", href: "#iletisim" },
    ],
    badge: "AI-powered voice assistant",
    titleA: "Ela",
    titleB: "on every call.",
    subtitle:
      "Speaks like a human, never misses a call, gives your team's time back. A 24/7 voice reservation assistant for hotels, restaurants and clinics.",
    ctaPrimary: "Try now",
    ctaSecondary: "Listen to demo",
    features: [
      {
        title: "Never misses a call",
        desc: "Answers every call instantly, 24/7 — no reservation opportunity is ever lost.",
      },
      {
        title: "Speaks naturally, like a human",
        desc: "Customers won't notice they're talking to AI — warm, fluent conversation every time.",
      },
      {
        title: "Gives your time back",
        desc: "Your staff focuses on guests, not the phone. Less workload, more productivity.",
      },
    ],
    stat: { value: "24/7", label: "Always on — same energy on every single call." },
    sectorsTitle: "Pick your industry, hear Ela",
    sectorsSub: "A real call sample for every industry — hear how Ela speaks.",
    sectors: {
      hotel: "Boutique hotels",
      restaurant: "Restaurants",
      clinic: "Clinics",
      salon: "Hair & Beauty",
      law: "Law firms",
      realestate: "Real estate",
    } as Record<string, string>,
    play: "Listen",
    playing: "Playing…",
    comingSoon: "Demo coming soon.",
    formTitle: "Try Ela at your business",
    formSub: "Leave your details and our team will reach out.",
    fBusiness: "Business name",
    fBusinessPh: "e.g. Seaside View Hotel",
    fPhone: "Phone",
    fPhonePh: "+1 555 xxx xxxx",
    fEmail: "Email",
    fEmailPh: "you@business.com",
    fSubmit: "Submit",
    fSuccess: "Thanks! Our team will get in touch with you shortly.",
    footer: "Ela — your voice reservation assistant.",
    langToggle: "TR",
  },
} as const;

const SECTOR_LIST: { id: string; icon: LucideIcon; audio: string }[] = [
  { id: "hotel", icon: Building2, audio: "/demo-audio/hotel.mp3" },
  { id: "restaurant", icon: UtensilsCrossed, audio: "/demo-audio/restaurant.mp3" },
  { id: "clinic", icon: Stethoscope, audio: "/demo-audio/clinic.mp3" },
  { id: "salon", icon: Scissors, audio: "/demo-audio/salon.mp3" },
  { id: "law", icon: Scale, audio: "/demo-audio/law.mp3" },
  { id: "realestate", icon: HomeIcon, audio: "/demo-audio/realestate.mp3" },
];

/* ------------------------------------------------------------------ */
/*  Animasyon varyantları                                              */
/* ------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const floatUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const SPRING = { type: "spring", stiffness: 300, damping: 20 } as const;

/* ------------------------------------------------------------------ */
/*  Yaşayan arka plan — The Moving Aura                                */
/* ------------------------------------------------------------------ */

function MovingAura() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FDFDFF]">
      <motion.div
        className="absolute -top-[20%] -left-[15%] h-[55rem] w-[55rem] rounded-[45%] bg-[#E0F2FE] blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.25, 0.9, 1],
          x: [0, 120, -60, 0],
          y: [0, 80, 140, 0],
        }}
        transition={{
          rotate: { duration: 90, repeat: Infinity, ease: "linear" },
          scale: { duration: 34, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 40, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 46, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute top-[30%] -right-[20%] h-[50rem] w-[50rem] rounded-[45%] bg-[#FAF5FF] blur-3xl"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.85, 1.2, 1],
          x: [0, -140, 60, 0],
          y: [0, -90, 60, 0],
        }}
        transition={{
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          scale: { duration: 38, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 44, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 36, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[40rem] w-[40rem] rounded-[45%] bg-violet-100/70 blur-3xl"
        animate={{ scale: [1, 1.15, 1], x: [0, 90, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Akıcı ses dalgası — Liquid Waveform                                */
/* ------------------------------------------------------------------ */

const WAVE_BARS = [
  { duration: 1.1, delay: 0.0, peak: 2.5 },
  { duration: 1.5, delay: 0.2, peak: 1.8 },
  { duration: 0.9, delay: 0.35, peak: 2.2 },
  { duration: 1.3, delay: 0.1, peak: 2.5 },
  { duration: 1.7, delay: 0.45, peak: 1.6 },
  { duration: 1.0, delay: 0.25, peak: 2.4 },
  { duration: 1.4, delay: 0.05, peak: 2.0 },
];

function LiquidWave({ height = 30 }: { height?: number }) {
  return (
    <div aria-hidden className="flex items-center justify-center gap-2" style={{ height: height * 2.6 }}>
      {WAVE_BARS.map((bar, i) => (
        <motion.span
          key={i}
          className="w-1.5 origin-center rounded-full bg-gradient-to-t from-indigo-500 via-violet-500 to-sky-400"
          style={{ height }}
          animate={{ scaleY: [1, bar.peak, 1] }}
          transition={{
            duration: bar.duration,
            delay: bar.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cam efektli Bento kart                                             */
/* ------------------------------------------------------------------ */

function GlassCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 32px 64px -16px rgba(139, 92, 246, 0.25)",
      }}
      style={{ boxShadow: "0 8px 30px -12px rgba(139, 92, 246, 0.08)" }}
      className={`rounded-[2rem] border border-white/40 bg-white/40 p-8 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Ana buton — mor glow halkalı                                       */
/* ------------------------------------------------------------------ */

function GlowButton({
  children,
  href,
  onClick,
  type,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "submit";
}) {
  const inner = (
    <>
      <motion.span
        className="absolute -inset-1.5 -z-10 rounded-full bg-gradient-to-r from-violet-500/60 via-purple-400/60 to-indigo-500/60 blur-xl"
        initial={{ opacity: 0, scale: 0.85 }}
        variants={{ hover: { opacity: 1, scale: 1.05 } }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {children}
      <motion.span variants={{ hover: { x: 5 } }} transition={SPRING}>
        <ArrowRight className="h-5 w-5" />
      </motion.span>
    </>
  );

  const cls =
    "group relative isolate inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-9 py-4 text-base font-medium text-white shadow-lg shadow-violet-500/30";

  if (href) {
    return (
      <motion.a href={href} whileHover="hover" whileTap={{ scale: 0.97 }} variants={{ hover: { scale: 1.05 } }} transition={SPRING} className={cls}>
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button type={type ?? "button"} onClick={onClick} whileHover="hover" whileTap={{ scale: 0.97 }} variants={{ hover: { scale: 1.05 } }} transition={SPRING} className={cls}>
      {inner}
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  Sayfa                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const t = COPY[lang];

  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [submitted, setSubmitted] = useState(false);

  const playSector = (id: string, url: string) => {
    setUnavailable(null);
    if (activeSector === id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    setActiveSector(id);
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.onerror = () => {
        setIsPlaying(false);
        setUnavailable(id);
      };
    }
    audioRef.current.src = url;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
        setUnavailable(id);
      });
  };

  return (
    <div className="min-h-screen text-slate-800">
      <MovingAura />

      {/* ---------- Header ---------- */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="sticky top-4 z-30 mx-auto mt-4 flex w-[min(72rem,calc(100%-2rem))] items-center justify-between rounded-full border border-white/40 bg-white/40 px-6 py-3 shadow-lg shadow-violet-500/5 backdrop-blur-xl"
      >
        <a href="#" className="text-2xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">ela</span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-slate-500 md:flex">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-indigo-600">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:bg-white/60 hover:text-indigo-600"
          >
            {t.langToggle}
          </button>
          <motion.a
            href="#sektorler"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING}
            className="hidden items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white sm:inline-flex"
          >
            {t.ctaSecondary}
          </motion.a>
        </div>
      </motion.header>

      {/* ---------- Hero — giriş şöleni ---------- */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-28 text-center sm:pt-32"
      >
        <motion.div
          variants={floatUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-4 py-1.5 text-sm text-slate-500 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-violet-500" />
          {t.badge}
        </motion.div>

        <motion.h1
          variants={floatUp}
          className="text-balance text-6xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-7xl md:text-[6.5rem]"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
            {t.titleA}
          </span>{" "}
          {t.titleB}
        </motion.h1>

        <motion.div variants={floatUp} className="mt-10">
          <LiquidWave />
        </motion.div>

        <motion.p
          variants={floatUp}
          className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-slate-500 sm:text-xl"
        >
          {t.subtitle}
        </motion.p>

        <motion.div variants={floatUp} className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <GlowButton href="#iletisim">{t.ctaPrimary}</GlowButton>
          <motion.a
            href="#sektorler"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-8 py-4 text-base font-medium text-slate-700 backdrop-blur-md transition-colors duration-300 hover:border-violet-200"
          >
            {t.ctaSecondary}
          </motion.a>
        </motion.div>
      </motion.section>

      {/* ---------- Bento özellikler ---------- */}
      <section id="ozellikler" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-6">
          <GlassCard className="md:col-span-4" delay={0}>
            <div className="flex h-full flex-col justify-between gap-8">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 p-3">
                <PhoneCall className="h-7 w-7 text-indigo-600" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{t.features[0].title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-slate-500">{t.features[0].desc}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2" delay={0.12}>
            <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                {t.stat.value}
              </span>
              <LiquidWave height={14} />
              <p className="text-sm leading-relaxed text-slate-500">{t.stat.label}</p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2" delay={0.24}>
            <div className="flex h-full flex-col gap-5">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 p-3">
                <Mic className="h-7 w-7 text-sky-600" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{t.features[1].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{t.features[1].desc}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-4" delay={0.36}>
            <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 p-3">
                <Clock className="h-7 w-7 text-violet-600" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{t.features[2].title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-500">{t.features[2].desc}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ---------- Sektörler ---------- */}
      <section id="sektorler" className="mx-auto max-w-6xl px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{t.sectorsTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">{t.sectorsSub}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {SECTOR_LIST.map((sector, i) => {
            const Icon = sector.icon;
            const active = activeSector === sector.id;
            const playing = active && isPlaying;
            return (
              <motion.button
                key={sector.id}
                type="button"
                onClick={() => playSector(sector.id, sector.audio)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, boxShadow: "0 32px 64px -16px rgba(139, 92, 246, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                style={{ boxShadow: "0 8px 30px -12px rgba(139, 92, 246, 0.08)" }}
                className={`flex cursor-pointer flex-col items-center gap-4 rounded-[2rem] border bg-white/40 px-5 py-9 text-center backdrop-blur-xl ${
                  active ? "border-violet-300/70" : "border-white/40"
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100/80 to-violet-100/80">
                  <Icon className={`h-7 w-7 ${active ? "text-violet-600" : "text-slate-500"}`} strokeWidth={1.6} />
                </span>
                <span className="text-sm font-semibold text-slate-800">{t.sectors[sector.id]}</span>
                {playing ? (
                  <LiquidWave height={8} />
                ) : (
                  <span className="text-xs text-slate-400">
                    {unavailable === sector.id ? t.comingSoon : t.play}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* ---------- İletişim ---------- */}
      <section id="iletisim" className="mx-auto max-w-2xl px-6 pb-28">
        <GlassCard className="p-10 sm:p-12">
          <div className="mb-9 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.formTitle}</h2>
            <p className="mt-3 text-slate-500">{t.formSub}</p>
          </div>

          {submitted ? (
            <p className="rounded-2xl bg-violet-50/80 px-5 py-5 text-center text-slate-600">{t.fSuccess}</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                {t.fBusiness}
                <input
                  required
                  type="text"
                  placeholder={t.fBusinessPh}
                  className="rounded-2xl border border-white/60 bg-white/60 px-5 py-3.5 text-base font-normal text-slate-800 outline-none backdrop-blur-md transition-all duration-300 placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  {t.fPhone}
                  <input
                    required
                    type="tel"
                    placeholder={t.fPhonePh}
                    className="rounded-2xl border border-white/60 bg-white/60 px-5 py-3.5 text-base font-normal text-slate-800 outline-none backdrop-blur-md transition-all duration-300 placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                  {t.fEmail}
                  <input
                    required
                    type="email"
                    placeholder={t.fEmailPh}
                    className="rounded-2xl border border-white/60 bg-white/60 px-5 py-3.5 text-base font-normal text-slate-800 outline-none backdrop-blur-md transition-all duration-300 placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10"
                  />
                </label>
              </div>
              <div className="mt-3 flex justify-center">
                <GlowButton type="submit">{t.fSubmit}</GlowButton>
              </div>
            </form>
          )}
        </GlassCard>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/50 px-6 py-10 text-sm text-slate-400 sm:flex-row">
        <span className="text-lg font-semibold">
          <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">ela</span>
        </span>
        <span>{t.footer}</span>
        <span>© {new Date().getFullYear()} Ela</span>
      </footer>
    </div>
  );
}
