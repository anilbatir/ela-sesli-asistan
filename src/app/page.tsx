"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Clock,
  Home as HomeIcon,
  Mic,
  PhoneCall,
  Scale,
  Scissors,
  Send,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ------------------------------------------------------------------ */
/*  İçerik                                                             */
/* ------------------------------------------------------------------ */

type Lang = "tr" | "en";

const COPY = {
  tr: {
    nav: [
      { label: "Hikaye", href: "#hikaye" },
      { label: "Sektörler", href: "#sektorler" },
      { label: "İletişim", href: "#iletisim" },
    ],
    heroSub: "Ela cevaplar. İnsan gibi konuşur, hiç yorulmaz, hiçbir fırsatı kaçırmaz.",
    heroQuestions: [
      "Bu hafta sonu müsait odanız var mı?",
      "Görüşme için randevu oluşturabilir miyiz?",
      "İnşaat sektörü için 2+1 daire fiyatlarınızı öğrenebilir miyim?",
      "Akşam 8 için 4 kişilik masa ayırabilir misiniz?",
      "Saç kesimi için yarın uygun bir saatiniz var mı?",
    ],
    heroLinkPrimary: "Örnek dinle",
    heroLinkSecondary: "İletişime geç",
    cta: "Hemen Dene",
    scroll: "Kaydır",
    marquee: ["7/24 kesintisiz", "İnsan gibi doğal", "Anında cevap", "Sıfır kaçan arama", "Türkçe & İngilizce"],
    storyKicker: "Neden Ela?",
    features: [
      {
        title: "Hiçbir aramayı kaçırmaz",
        desc: "Gece yarısı, hafta sonu, yoğun saatler… Ela her aramaya ilk çalışta cevap verir. Rezervasyon fırsatları artık meşgul sinyaline takılmaz.",
      },
      {
        title: "İnsan gibi konuşur",
        desc: "Doğal, sıcak, akıcı. Misafirleriniz karşılarında bir yapay zeka olduğunu fark etmez — sadece iyi ağırlandıklarını hisseder.",
      },
      {
        title: "Zamanınızı geri verir",
        desc: "Telefon trafiği Ela'ya, misafir deneyimi ekibinize. İş yükü azalır, odak büyür, verimlilik artar.",
      },
    ],
    statValue: "7/24",
    statLabel: "her aramada aynı enerji",
    sectorsTitle: "Sektörünüzü seçin,",
    sectorsTitleAccent: "Ela'yı dinleyin.",
    sectorsSub: "Her sektör için gerçek bir çağrı örneği.",
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
    comingSoon: "Demo yakında",
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
      { label: "Story", href: "#hikaye" },
      { label: "Industries", href: "#sektorler" },
      { label: "Contact", href: "#iletisim" },
    ],
    heroSub: "Ela answers. Speaks like a human, never tires, never misses an opportunity.",
    heroQuestions: [
      "Do you have any rooms available this weekend?",
      "Can we schedule an appointment for a consultation?",
      "Can I learn your 2+1 apartment prices for construction?",
      "Can you book a table for 4 at 8pm tonight?",
      "Do you have an available slot for a haircut tomorrow?",
    ],
    heroLinkPrimary: "Hear an example",
    heroLinkSecondary: "Get in touch",
    cta: "Try now",
    scroll: "Scroll",
    marquee: ["24/7 always on", "Naturally human", "Instant answers", "Zero missed calls", "Turkish & English"],
    storyKicker: "Why Ela?",
    features: [
      {
        title: "Never misses a call",
        desc: "Midnight, weekends, rush hours… Ela answers every call on the first ring. Reservation opportunities never hit a busy signal again.",
      },
      {
        title: "Speaks like a human",
        desc: "Natural, warm, fluent. Your guests never realize they're talking to an AI — they just feel well taken care of.",
      },
      {
        title: "Gives your time back",
        desc: "Phone traffic goes to Ela, guest experience goes to your team. Less workload, more focus, more productivity.",
      },
    ],
    statValue: "24/7",
    statLabel: "same energy on every call",
    sectorsTitle: "Pick your industry,",
    sectorsTitleAccent: "hear Ela.",
    sectorsSub: "A real call sample for every industry.",
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
    comingSoon: "Demo soon",
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

const FEATURE_ICONS: LucideIcon[] = [PhoneCall, Mic, Clock];

/* ------------------------------------------------------------------ */
/*  Sayfa                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");
  const t = COPY[lang];

  const root = useRef<HTMLDivElement>(null);

  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  /* ---------------- Hero: dönen başlık & soru çubuğu ---------------- */
  const [featureIndex, setFeatureIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [typedQuestion, setTypedQuestion] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((i) => (i + 1) % COPY[lang].features.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [lang]);

  /* Soru çubuğu: harf harf daktilo efekti */
  useEffect(() => {
    const questions = COPY[lang].heroQuestions;
    const current = questions[questionIndex % questions.length];
    const typeSpeed = 42;
    const pauseAfterTyped = 1700;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      charIndex += 1;
      setTypedQuestion(current.slice(0, charIndex));
      if (charIndex < current.length) {
        timeoutId = setTimeout(typeNextChar, typeSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setQuestionIndex((i) => (i + 1) % questions.length);
        }, pauseAfterTyped);
      }
    };

    timeoutId = setTimeout(() => {
      setTypedQuestion("");
      typeNextChar();
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [lang, questionIndex]);

  /* ---------------- GSAP orkestrasyonu ---------------- */
  useGSAP(
    () => {
      /* Okuma ilerleme çubuğu */
      gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.4 },
      });

      /* Hero: giriş reveal */
      gsap.set(".hero-left-item", { autoAlpha: 0, y: 30 });
      gsap.set(".hero-photo", { autoAlpha: 0, scale: 0.92 });
      gsap.set(".hero-scroll", { autoAlpha: 0, y: 30 });
      gsap.set(".site-header", { y: -80, autoAlpha: 0 });

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .to(".hero-left-item", { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 }, 0.2)
        .to(".hero-photo", { autoAlpha: 1, scale: 1, duration: 1.1, ease: "power3.out" }, "-=0.7")
        .to(".site-header", { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out" }, "-=0.8")
        .to(".hero-scroll", { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4");

      /* Hero: fare paralaksı — 3D derinlik */
      const orbA = gsap.quickTo(".orb-a", "x", { duration: 1.4, ease: "power3.out" });
      const orbAy = gsap.quickTo(".orb-a", "y", { duration: 1.4, ease: "power3.out" });
      const orbB = gsap.quickTo(".orb-b", "x", { duration: 1.8, ease: "power3.out" });
      const orbBy = gsap.quickTo(".orb-b", "y", { duration: 1.8, ease: "power3.out" });
      const heroRotator = gsap.quickTo(".hero-rotator", "x", { duration: 1.2, ease: "power3.out" });
      const heroPhoto = gsap.quickTo(".hero-photo", "x", { duration: 1.3, ease: "power3.out" });
      const heroPhotoY = gsap.quickTo(".hero-photo", "y", { duration: 1.3, ease: "power3.out" });
      const heroOrb1 = gsap.quickTo(".hero-orb-1", "x", { duration: 1.6, ease: "power3.out" });
      const heroOrb1y = gsap.quickTo(".hero-orb-1", "y", { duration: 1.6, ease: "power3.out" });
      const heroOrb2 = gsap.quickTo(".hero-orb-2", "x", { duration: 2, ease: "power3.out" });
      const heroOrb2y = gsap.quickTo(".hero-orb-2", "y", { duration: 2, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        orbA(nx * 80);
        orbAy(ny * 60);
        orbB(nx * -110);
        orbBy(ny * -80);
        heroRotator(nx * 14);
        heroPhoto(nx * -22);
        heroPhotoY(ny * -16);
        heroOrb1(nx * 45);
        heroOrb1y(ny * 35);
        heroOrb2(nx * -55);
        heroOrb2y(ny * -40);
      };
      window.addEventListener("mousemove", onMove);

      /* Aura: sürekli yaşayan hareket */
      gsap.to(".orb-a", { rotation: 360, duration: 80, repeat: -1, ease: "none" });
      gsap.to(".orb-b", { rotation: -360, duration: 95, repeat: -1, ease: "none" });
      gsap.to(".orb-a", { scale: 1.2, duration: 18, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".orb-b", { scale: 0.85, duration: 22, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* Aura: scroll paralaksı */
      gsap.to(".orb-layer", {
        yPercent: 28,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1.2 },
      });

      /* Marquee: sonsuz akış */
      gsap.to(".marquee-track", { xPercent: -50, duration: 24, repeat: -1, ease: "none" });

      /* Hikaye: pinlenmiş bölüm, scrub ile panel geçişleri */
      const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
      gsap.set(panels.slice(1), { autoAlpha: 0, y: 90 });

      const story = gsap.timeline({
        scrollTrigger: {
          trigger: ".story-pin",
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 0.8,
        },
      });
      panels.forEach((panel, i) => {
        if (i === 0) return;
        story
          .to(panels[i - 1], { autoAlpha: 0, y: -90, duration: 1, ease: "power2.in" })
          .to(panel, { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }, "<0.35");
      });

      /* Dev istatistik: scroll ile ölçeklenen sahne */
      gsap.fromTo(
        ".giant-stat",
        { scale: 0.55, autoAlpha: 0.15 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: { trigger: ".stat-scene", start: "top 85%", end: "center center", scrub: 0.8 },
        }
      );

      /* Sektör kartları: kademeli yükseliş */
      gsap.from(".sector-card", {
        y: 90,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: { trigger: ".sector-grid", start: "top 78%" },
      });

      /* Bölüm başlıkları */
      gsap.utils.toArray<HTMLElement>(".reveal-block").forEach((el) => {
        gsap.from(el, {
          y: 60,
          autoAlpha: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  /* ---------------- Magnetic butonlar & linkler ---------------- */
  const magnetEnter = (e: React.MouseEvent<HTMLElement>, scale = 1.06) => {
    gsap.to(e.currentTarget, { scale, duration: 0.4, ease: "power3.out" });
  };
  const magnetMove = (e: React.MouseEvent<HTMLElement>, strength = 0.4) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.6, ease: "power3.out" });
  };
  const magnetLeave = (e: React.MouseEvent<HTMLElement>, scale = 1) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, scale, duration: 0.7, ease: "elastic.out(1, 0.35)" });
  };

  /* ---------------- 3D tilt + spotlight (sektör kartları) ---------------- */
  const tilt = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    card.style.setProperty("--mx", `${relX}px`);
    card.style.setProperty("--my", `${relY}px`);
    const px = relX / rect.width - 0.5;
    const py = relY / rect.height - 0.5;
    gsap.to(card, {
      rotateY: px * 14,
      rotateX: py * -14,
      transformPerspective: 700,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  const enterCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    gsap.to(card, { scale: 1.03, duration: 0.45, ease: "power3.out" });
    const icon = card.querySelector(".sector-icon");
    if (icon) {
      gsap.fromTo(
        icon,
        { scale: 1, y: 0, rotate: 0 },
        { scale: 1.18, y: -6, rotate: -8, duration: 0.45, ease: "back.out(2.8)" }
      );
    }
  };
  const untilt = (e: React.MouseEvent<HTMLButtonElement>) => {
    const card = e.currentTarget;
    gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.9, ease: "elastic.out(1, 0.45)" });
    const icon = card.querySelector(".sector-icon");
    if (icon) {
      gsap.to(icon, { scale: 1, y: 0, rotate: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" });
    }
  };

  /* ---------------- Ses ---------------- */
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

  /* ================================================================ */

  return (
    <div ref={root} className="relative min-h-screen overflow-x-clip bg-[#FBFBFE] text-slate-900 selection:bg-violet-200">
      {/* Okuma ilerlemesi */}
      <div className="progress-bar fixed top-0 left-0 z-50 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" />

      {/* Yaşayan aura + doku */}
      <div aria-hidden className="orb-layer pointer-events-none fixed inset-0 z-0">
        <div className="orb-a absolute -top-[15%] -left-[10%] h-[48rem] w-[48rem] rounded-[45%] bg-violet-300/40 blur-[130px]" />
        <div className="orb-b absolute top-[45%] -right-[15%] h-[44rem] w-[44rem] rounded-[45%] bg-cyan-300/35 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* ---------- Header ---------- */}
      <header className="site-header fixed top-4 left-1/2 z-40 flex w-[min(70rem,calc(100%-2rem))] -translate-x-1/2 items-center justify-between rounded-full border border-slate-200/70 bg-white/60 px-6 py-3 shadow-lg shadow-violet-500/5 backdrop-blur-xl">
        <a href="#" className="text-2xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">ela</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm text-slate-500 md:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onMouseMove={(e) => magnetMove(e, 0.5)}
              onMouseLeave={(e) => magnetLeave(e)}
              className="inline-block transition-colors duration-200 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            onMouseMove={(e) => magnetMove(e, 0.5)}
            onMouseLeave={(e) => magnetLeave(e)}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
          >
            {t.langToggle}
          </button>
          <a
            href="#iletisim"
            onMouseEnter={(e) => magnetEnter(e)}
            onMouseMove={(e) => magnetMove(e)}
            onMouseLeave={(e) => magnetLeave(e)}
            className="group inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="hero-section relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24 lg:pt-24">
        {/* Lila gradyan zemin */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-violet-200"
        />
        <div
          aria-hidden
          className="hero-orb-1 pointer-events-none absolute -top-32 -right-16 h-[26rem] w-[26rem] rounded-full bg-violet-400/25 blur-[100px]"
        />
        <div
          aria-hidden
          className="hero-orb-2 pointer-events-none absolute -bottom-24 -left-16 h-[22rem] w-[22rem] rounded-full bg-fuchsia-300/25 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.08)_1px,transparent_1px)] [background-size:28px_28px]"
        />
        {/* Dağılmış dekoratif küreler */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden sm:block">
          <span className="absolute top-[8%] right-[6%] h-16 w-16 rounded-full bg-violet-500/50 blur-[2px]" />
          <span className="absolute top-[22%] right-[2%] h-10 w-10 rounded-full bg-fuchsia-400/40" />
          <span className="absolute bottom-[16%] right-[10%] h-24 w-24 rounded-full bg-fuchsia-400/30 blur-[6px]" />
          <span className="absolute right-[3%] bottom-[6%] h-14 w-14 rounded-full bg-violet-500/35 blur-[2px]" />
          <span className="absolute bottom-[10%] left-[4%] h-20 w-20 rounded-full bg-violet-300/40 blur-[4px]" />
          <span className="absolute top-[14%] left-[3%] h-9 w-9 rounded-full bg-cyan-300/40" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Sol: dönen özellik başlığı */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <div className="hero-left-item min-h-[2.3em] sm:min-h-[2.6em] lg:min-h-[3.3em]">
              <h1
                key={`${lang}-${featureIndex}`}
                className="hero-rotator animate-fade-in-up font-heading text-4xl leading-[1.08] font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]"
              >
                {t.features[featureIndex].title}
              </h1>
            </div>

            <p className="hero-left-item mt-6 max-w-md text-balance text-lg leading-relaxed text-slate-600">
              {t.heroSub}
            </p>

            <div className="hero-left-item mt-9 flex items-center gap-3">
              <a
                href="#iletisim"
                onMouseEnter={(e) => magnetEnter(e, 1.05)}
                onMouseMove={(e) => magnetMove(e, 0.35)}
                onMouseLeave={(e) => magnetLeave(e)}
                className="inline-flex items-center rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-xl shadow-violet-900/10"
              >
                {t.cta}
              </a>
              <a
                href="#iletisim"
                onMouseEnter={(e) => magnetEnter(e, 1.1)}
                onMouseMove={(e) => magnetMove(e, 0.4)}
                onMouseLeave={(e) => magnetLeave(e)}
                aria-label={t.cta}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
              >
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="hero-left-item mt-8 flex flex-col gap-2.5 text-sm font-medium text-slate-500">
              <a href="#sektorler" className="group inline-flex w-fit items-center gap-1.5 hover:text-slate-900">
                {t.heroLinkPrimary}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#iletisim" className="group inline-flex w-fit items-center gap-1.5 hover:text-slate-900">
                {t.heroLinkSecondary}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Sağ: Ela'nın dairesel görseli + soru çubuğu */}
          <div className="hero-photo relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem]">
            <div className="absolute inset-0 overflow-hidden rounded-full shadow-2xl shadow-violet-900/15 ring-1 ring-white/70">
              <Image
                src="/ela.jpg"
                alt="Ela"
                fill
                priority
                sizes="(min-width: 1024px) 30rem, (min-width: 640px) 26rem, 22rem"
                className="object-cover"
              />
            </div>

            {/* Dönen müşteri sorusu çubuğu — dairenin içinde, merkezin biraz altında */}
            <div className="hero-chatbar absolute top-[58%] left-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/90 px-4 py-3.5 shadow-xl shadow-violet-900/15 backdrop-blur-xl sm:px-5 sm:py-4">
              <div className="flex items-center gap-3">
                <div className="min-h-[2.4em] flex-1">
                  <p className="line-clamp-2 text-[13px] leading-snug font-medium text-slate-700 sm:text-sm">
                    {typedQuestion}
                    <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse bg-violet-500 align-middle" />
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 sm:h-9 sm:w-9">
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
              </div>
            </div>

            {/* Yüzen istatistik rozeti */}
            <div className="hero-left-item absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl border border-white/70 bg-white/85 px-5 py-3 shadow-lg shadow-violet-900/10 backdrop-blur-xl sm:left-4 sm:translate-x-0">
              <span className="font-heading text-xl font-semibold text-violet-600 sm:text-2xl">{t.statValue}</span>
              <span className="text-[10px] font-medium tracking-wide text-slate-500 uppercase sm:text-xs">
                {t.statLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.3em] text-slate-400 uppercase">
          {t.scroll}
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div className="relative z-10 overflow-hidden border-y border-slate-200/70 bg-white/50 py-5 backdrop-blur-sm">
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-12">
              {t.marquee.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center gap-12 text-lg font-medium text-slate-500">
                  {item}
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Hikaye: pinlenmiş akış ---------- */}
      <section id="hikaye" className="story-pin relative z-10 h-screen">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-sm font-medium tracking-[0.35em] text-violet-600 uppercase">
          {t.storyKicker}
        </div>
        {t.features.map((feature, i) => {
          const Icon = FEATURE_ICONS[i];
          return (
            <div
              key={`${lang}-${feature.title}`}
              className="story-panel absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            >
              <span className="mb-9 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200/80 bg-white/70 shadow-lg shadow-violet-500/10 backdrop-blur-md">
                <Icon className="h-9 w-9 text-violet-600" strokeWidth={1.4} />
              </span>
              <h2 className="max-w-4xl text-balance font-heading text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
                {feature.title}
              </h2>
              <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-slate-500">{feature.desc}</p>
              <div className="mt-10 flex gap-2.5">
                {t.features.map((_, dot) => (
                  <span
                    key={dot}
                    className={`h-1.5 rounded-full transition-all ${dot === i ? "w-8 bg-violet-500" : "w-1.5 bg-slate-300"}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ---------- Dev istatistik ---------- */}
      <section className="stat-scene relative z-10 flex flex-col items-center justify-center py-40">
        <div className="giant-stat bg-gradient-to-b from-slate-900 via-violet-600 to-cyan-500 bg-clip-text text-center font-heading text-[24vw] leading-none font-semibold text-transparent sm:text-[18vw]">
          {t.statValue}
        </div>
        <p className="reveal-block mt-4 text-lg tracking-widest text-slate-500 uppercase">{t.statLabel}</p>
      </section>

      {/* ---------- Sektörler ---------- */}
      <section id="sektorler" className="relative z-10 mx-auto max-w-6xl px-6 pb-36">
        <div className="reveal-block mb-16 text-center">
          <h2 className="font-heading text-4xl font-medium tracking-tight sm:text-6xl">
            {t.sectorsTitle}{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {t.sectorsTitleAccent}
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500">{t.sectorsSub}</p>
        </div>

        <div className="sector-grid grid grid-cols-2 gap-5 sm:grid-cols-3 [perspective:1200px]">
          {SECTOR_LIST.map((sector) => {
            const Icon = sector.icon;
            const active = activeSector === sector.id;
            const playing = active && isPlaying;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => playSector(sector.id, sector.audio)}
                onMouseEnter={enterCard}
                onMouseMove={tilt}
                onMouseLeave={untilt}
                className={`sector-card group relative flex cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-3xl border px-5 py-10 text-center shadow-sm shadow-violet-500/5 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-300 will-change-transform hover:shadow-xl hover:shadow-violet-500/15 ${
                  active
                    ? "border-violet-300 bg-violet-50/80"
                    : "border-slate-200/80 bg-white/60 hover:border-violet-300/70 hover:bg-white/90"
                }`}
              >
                {/* İmleci takip eden spotlight */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(139, 92, 246, 0.14), transparent 65%)",
                  }}
                />
                {/* Parlama süpürmesi */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/3 -translate-x-[250%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
                />

                <span className="sector-icon relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-violet-50 to-cyan-50 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/25">
                  <Icon
                    className={`h-7 w-7 transition-colors duration-300 ${active ? "text-violet-600" : "text-slate-500 group-hover:text-violet-600"}`}
                    strokeWidth={1.5}
                  />
                </span>
                <span className="relative text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:tracking-wide group-hover:text-slate-900">
                  {t.sectors[sector.id]}
                </span>
                {playing ? (
                  <span className="relative flex h-5 items-center gap-1">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className="animate-wave w-0.5 rounded-full bg-gradient-to-t from-violet-500 to-cyan-400"
                        style={{ animationDelay: `${bar * 0.12}s` }}
                      />
                    ))}
                  </span>
                ) : (
                  <span className="relative flex h-5 items-center gap-1.5 text-xs text-slate-400 transition-colors duration-300 group-hover:text-violet-600">
                    {unavailable === sector.id ? t.comingSoon : t.play}
                    <span className="flex items-center gap-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {[0, 1, 2].map((bar) => (
                        <span
                          key={bar}
                          className="animate-wave w-0.5 rounded-full bg-gradient-to-t from-violet-500 to-cyan-400"
                          style={{ animationDelay: `${bar * 0.15}s` }}
                        />
                      ))}
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ---------- İletişim ---------- */}
      <section id="iletisim" className="relative z-10 mx-auto max-w-2xl px-6 pb-36">
        <div className="reveal-block rounded-[2.5rem] border border-slate-200/80 bg-white/60 p-10 shadow-xl shadow-violet-500/5 backdrop-blur-xl sm:p-14">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-5xl">{t.formTitle}</h2>
            <p className="mt-4 text-slate-500">{t.formSub}</p>
          </div>

          {submitted ? (
            <p className="rounded-2xl border border-violet-200 bg-violet-50 px-5 py-5 text-center text-slate-700">
              {t.fSuccess}
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5"
            >
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                {t.fBusiness}
                <input
                  required
                  type="text"
                  placeholder={t.fBusinessPh}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3.5 text-base font-normal text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  {t.fPhone}
                  <input
                    required
                    type="tel"
                    placeholder={t.fPhonePh}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3.5 text-base font-normal text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-slate-600">
                  {t.fEmail}
                  <input
                    required
                    type="email"
                    placeholder={t.fEmailPh}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-3.5 text-base font-normal text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  />
                </label>
              </div>
              <button
                type="submit"
                onMouseEnter={(e) => magnetEnter(e, 1.05)}
                onMouseMove={(e) => magnetMove(e, 0.35)}
                onMouseLeave={(e) => magnetLeave(e)}
                className="group relative isolate mx-auto mt-4 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-4 text-base font-medium text-white shadow-2xl shadow-violet-600/30"
              >
                <span className="absolute -inset-1.5 -z-10 rounded-full bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                {t.fSubmit}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="relative z-10 border-t border-slate-200/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-sm text-slate-500 sm:flex-row">
          <span className="text-lg font-semibold">
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">ela</span>
          </span>
          <span>{t.footer}</span>
          <span>© {new Date().getFullYear()} Ela</span>
        </div>
      </footer>
    </div>
  );
}
