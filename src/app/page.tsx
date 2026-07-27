"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  AtSign,
  BarChart3,
  Building2,
  Calendar,
  ChevronDown,
  Database,
  Globe,
  Home as HomeIcon,
  MessageCircle,
  Phone,
  Scale,
  Scissors,
  Send,
  Settings2,
  Stethoscope,
  UserCheck,
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
      { label: "Hizmetler", href: "#hizmetler" },
      { label: "Sektörler", href: "#sektorler" },
      { label: "Fiyatlandırma", href: "#fiyatlandirma" },
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
    marquee: ["7/24 kesintisiz", "İnsan gibi doğal", "Anında cevap", "Sıfır kaçan arama", "32 dilde konuşur"],
    storyKicker: "Neden Ela?",
    storyTitle: "Özellikleriyle tanışın.",
    storySub: "Kaydırdıkça Ela'nın öne çıkan yetenekleri kartlardan açılıp yerine yerleşiyor.",
    storyCards: [
      {
        id: "guvenlik",
        title: "Güvenli Altyapı",
        desc: "Tüm görüşme kayıtları şifreli saklanır, yalnızca yetkilendirdiğiniz ekip üyeleri erişebilir.",
      },
      {
        id: "dogal",
        title: "Doğal İletişim",
        desc: "32 dilde yerel aksanla, duraksamadan konuşur; talebe göre yeni diller de eklenebilir. Karşınızdaki bir yazılım değil, işini iyi yapan biri gibi hissettirir.",
      },
      {
        id: "akilli",
        title: "Akıllı ve Öğrenen",
        desc: "Her görüşmeden öğrenir, senaryolarını işletmenizin diline ve akışına göre sürekli geliştirir.",
      },
      {
        id: "yedi24",
        title: "7/24 Ulaşılabilir",
        desc: "Gece yarısı, hafta sonu, yoğun saatler… Ela her aramaya ilk çalışta cevap verir, hiçbir fırsat kaçmaz.",
      },
      {
        id: "kanal",
        title: "Her Kanalda Aktif",
        desc: "Telefon aramalarının yanında WhatsApp ve Instagram'da da yazılı olarak müşterilerinizle buluşur.",
      },
      {
        id: "rezervasyon",
        title: "Rezervasyon Entegrasyonu",
        desc: "Mevcut rezervasyon veya takvim sisteminize bağlanır, uygunluğu gerçek zamanlı kontrol eder.",
      },
    ],
    features: [
      {
        title: "Hiçbir aramayı kaçırmaz",
        desc: "Gece yarısı, hafta sonu, yoğun saatler… Ela her aramaya ilk çalışta cevap verir. Rezervasyon fırsatları artık meşgul sinyaline takılmaz.",
      },
      {
        title: "3 saniyede cevap verir",
        desc: "Arama başladığı anda hatta. Misafirleriniz beklemez, sıraya girmez — Ela ilk zilde karşılar.",
      },
      {
        title: "İnsan gibi konuşur",
        desc: "Doğal, sıcak, akıcı. Misafirleriniz karşılarında bir yapay zeka olduğunu fark etmez — sadece iyi ağırlandıklarını hisseder.",
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
    channelStack: {
      phone: "Telefon Hattı",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      web: "Web Sitesi",
      booking: "Rezervasyon Sistemleri",
      crm: "CRM",
    } as Record<string, string>,
    servicesKicker: "Neler Sunuyoruz",
    servicesTitle: "Tek asistan,",
    servicesTitleAccent: "her kanal.",
    servicesSub: "Ela'yı işletmenizin ihtiyacına göre kurar, mevcut sistemlerinizle entegre ederiz.",
    services: {
      voice: {
        title: "Sesli Arama Yönetimi",
        desc: "Gelen aramaları karşılar, insan gibi doğal bir sesle konuşur, hiç meşgul çalmaz.",
      },
      text: {
        title: "Yazılı Mesaj Desteği",
        desc: "WhatsApp ve Instagram'dan gelen mesajlara anında, doğru tonda yanıt verir.",
      },
      reservation: {
        title: "Rezervasyon Entegrasyonu",
        desc: "Mevcut rezervasyon veya takvim sisteminize bağlanır, uygunluğu gerçek zamanlı kontrol eder.",
      },
      sales: {
        title: "Satış Ön Değerlendirmesi",
        desc: "Potansiyel müşterinin ihtiyacını anlar, iletişim bilgilerini toplar, ekibinize aktarır.",
      },
      reporting: {
        title: "Raporlama & Analiz",
        desc: "Her görüşmenin özetini çıkarır, haftalık performans raporunu ekibinize sunar.",
      },
      custom: {
        title: "Özel Senaryo Kurulumu",
        desc: "İşletmenizin diline ve akışına göre özelleştirilmiş konuşma senaryoları hazırlarız.",
      },
    } as Record<string, { title: string; desc: string }>,
    howItWorksKicker: "Nasıl Başlarsınız",
    howItWorks: [
      { title: "Demo dinleyin", desc: "Sektörünüze uygun örnek bir görüşmeyi hemen dinleyin." },
      { title: "Ekibimiz kurar", desc: "Rezervasyon sisteminizle entegre eder, senaryoları sizinle birlikte kurgular." },
      { title: "Ela devreye girer", desc: "Aramalar ve mesajlar artık hiç kaçmaz, siz işinize odaklanırsınız." },
    ],
    pricingKicker: "Fiyatlandırma",
    pricingTitle: "Basit paketler,",
    pricingTitleAccent: "net fiyatlar.",
    pricingSub: "Aşağıdaki rakamlar örnek amaçlıdır — işletmenize özel teklif için bizimle görüşün.",
    pricingNote: "* Gösterilen fiyatlar örnektir, nihai teklif görüşme sonrası netleşir.",
    pricingPlans: [
      {
        name: "Başlangıç",
        price: "₺20.000",
        period: "/ay",
        desc: "Tek şube, tek kanal ile başlamak isteyen işletmeler için.",
        features: ["1 telefon hattı", "Sesli + yazılı destek", "Aylık performans raporu", "E-posta desteği"],
        cta: "Başlayın",
        highlighted: false,
      },
      {
        name: "Kurumsal",
        price: "Özel Teklif",
        period: "",
        desc: "Çoklu şube, çoklu kanal ve özel entegrasyon ihtiyacı olan işletmeler için.",
        features: [
          "Sınırsız hat / şube",
          "Tüm kanallar (telefon, WhatsApp, Instagram)",
          "Özel senaryo kurulumu",
          "Öncelikli destek",
        ],
        cta: "Teklif alın",
        highlighted: true,
      },
    ],
    faqKicker: "Sıkça Sorulanlar",
    faqTitle: "Aklınıza takılanlar.",
    faqItems: [
      {
        q: "Kurulum ne kadar sürer?",
        a: "Çoğu işletme için 48 saat içinde canlıya alıyoruz. Karmaşık entegrasyonlarda bu süre birkaç güne çıkabilir.",
      },
      {
        q: "Mevcut telefon hattımla çalışır mı?",
        a: "Evet, mevcut numaranızı yönlendirerek ya da yeni bir hat tanımlayarak Ela'yı devreye alabiliriz.",
      },
      {
        q: "Hangi dillerde konuşuyor?",
        a: "32 dili doğal aksanla konuşuyor, talebe göre istediğiniz yeni dili de ekleyebiliyoruz.",
      },
      {
        q: "Verilerimiz güvende mi?",
        a: "Tüm görüşme kayıtları şifreli saklanır, yalnızca yetkilendirdiğiniz ekip üyeleri erişebilir.",
      },
      {
        q: "İstediğim zaman iptal edebilir miyim?",
        a: "Evet, aboneliğinizi istediğiniz an durdurabilir veya iptal edebilirsiniz.",
      },
      {
        q: "Hangi sektörler için uygun?",
        a: "Otel, restoran, klinik, kuaför, avukatlık ve emlak gibi randevu/rezervasyon odaklı her sektörde kullanılabiliyor.",
      },
    ],
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
      { label: "Services", href: "#hizmetler" },
      { label: "Industries", href: "#sektorler" },
      { label: "Pricing", href: "#fiyatlandirma" },
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
    marquee: ["24/7 always on", "Naturally human", "Instant answers", "Zero missed calls", "Speaks 32 languages"],
    storyKicker: "Why Ela?",
    storyTitle: "Meet the features.",
    storySub: "Scroll and watch Ela's key abilities unfold from the stack into place.",
    storyCards: [
      {
        id: "guvenlik",
        title: "Secure Infrastructure",
        desc: "All call records are stored encrypted and only accessible to team members you authorize.",
      },
      {
        id: "dogal",
        title: "Natural Communication",
        desc: "Speaks 32 languages with a local accent, without hesitation, and new languages can be added on request. It feels like talking to someone good at their job, not a piece of software.",
      },
      {
        id: "akilli",
        title: "Smart & Learning",
        desc: "Learns from every conversation and keeps refining its scenarios to match your business's tone and flow.",
      },
      {
        id: "yedi24",
        title: "Available 24/7",
        desc: "Midnight, weekends, rush hours… Ela answers every call on the first ring — no opportunity slips through.",
      },
      {
        id: "kanal",
        title: "Active on Every Channel",
        desc: "Alongside phone calls, it meets your customers in writing on WhatsApp and Instagram too.",
      },
      {
        id: "rezervasyon",
        title: "Reservation Integration",
        desc: "Connects to your existing booking or calendar system and checks availability in real time.",
      },
    ],
    features: [
      {
        title: "Never misses a call",
        desc: "Midnight, weekends, rush hours… Ela answers every call on the first ring. Reservation opportunities never hit a busy signal again.",
      },
      {
        title: "Answers within 3 seconds",
        desc: "On the line the moment a call starts. No hold music, no queue — Ela picks up on the first ring.",
      },
      {
        title: "Speaks like a human",
        desc: "Natural, warm, fluent. Your guests never realize they're talking to an AI — they just feel well taken care of.",
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
    channelStack: {
      phone: "Phone Line",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      web: "Website Chat",
      booking: "Booking Systems",
      crm: "CRM",
    } as Record<string, string>,
    servicesKicker: "What We Offer",
    servicesTitle: "One assistant,",
    servicesTitleAccent: "every channel.",
    servicesSub: "We set Ela up around your business and connect it to the systems you already use.",
    services: {
      voice: {
        title: "Voice Call Handling",
        desc: "Answers every incoming call and speaks with a natural, human-like voice — never busy.",
      },
      text: {
        title: "Written Message Support",
        desc: "Replies instantly and in the right tone to WhatsApp and Instagram messages.",
      },
      reservation: {
        title: "Reservation Integration",
        desc: "Connects to your existing booking or calendar system and checks availability in real time.",
      },
      sales: {
        title: "Sales Pre-Screening",
        desc: "Understands what a potential customer needs, collects contact details, and hands off to your team.",
      },
      reporting: {
        title: "Reporting & Analytics",
        desc: "Summarizes every conversation and delivers a weekly performance report to your team.",
      },
      custom: {
        title: "Custom Scenario Setup",
        desc: "We build conversation flows tailored to your business's tone and process.",
      },
    } as Record<string, { title: string; desc: string }>,
    howItWorksKicker: "How You Start",
    howItWorks: [
      { title: "Listen to a demo", desc: "Hear a real sample call for your industry right away." },
      { title: "We set it up", desc: "Our team integrates your booking system and builds the conversation flows with you." },
      { title: "Ela takes over", desc: "Calls and messages stop slipping through — you focus on your business." },
    ],
    pricingKicker: "Pricing",
    pricingTitle: "Simple plans,",
    pricingTitleAccent: "clear pricing.",
    pricingSub: "The figures below are for illustration — reach out for a quote tailored to your business.",
    pricingNote: "* Prices shown are examples; the final quote is confirmed after a call.",
    pricingPlans: [
      {
        name: "Starter",
        price: "₺20,000",
        period: "/mo",
        desc: "For businesses starting with a single location and channel.",
        features: ["1 phone line", "Voice + text support", "Monthly performance report", "Email support"],
        cta: "Get started",
        highlighted: false,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        period: "",
        desc: "For multi-location businesses with multiple channels and custom integration needs.",
        features: [
          "Unlimited lines / locations",
          "All channels (phone, WhatsApp, Instagram)",
          "Custom scenario setup",
          "Priority support",
        ],
        cta: "Request a quote",
        highlighted: true,
      },
    ],
    faqKicker: "FAQ",
    faqTitle: "Common questions.",
    faqItems: [
      {
        q: "How long does setup take?",
        a: "We go live within 48 hours for most businesses. Complex integrations may take a few days longer.",
      },
      {
        q: "Will it work with my existing phone line?",
        a: "Yes — we can forward your current number or set up a new line to bring Ela online.",
      },
      {
        q: "What languages does it speak?",
        a: "It speaks 32 languages with a natural accent, and we can add any other language you need on request.",
      },
      {
        q: "Is our data secure?",
        a: "All call records are stored encrypted and only accessible to team members you authorize.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes, you can pause or cancel your subscription whenever you'd like.",
      },
      {
        q: "Which industries is it suited for?",
        a: "Hotels, restaurants, clinics, salons, law firms, and real estate — any booking or appointment-driven business.",
      },
    ],
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

/* Hikaye: kart yığını için fotoğrafların görsel yolu */
const STORY_PHOTO_SRC: Record<string, string> = {
  guvenlik: "/ela/guvenli-altyapi.png",
  dogal: "/ela/dogal-iletisim.png",
  akilli: "/ela/akilli-ogrenen.png",
  yedi24: "/ela/7-24-ulasilabilir.png",
  kanal: "/ela/her-kanalda-aktif.png",
  rezervasyon: "/ela/rezervasyon-entegrasyonu.png",
};

/* Bazı kareler merkezden kırpınca Ela'yı tam ortalamıyor; kart bazlı odak noktası */
const STORY_PHOTO_POSITION: Record<string, string> = {
  rezervasyon: "95% center",
};

/* Bazı fotoğraflarda Ela çok küçük kalıyor; kart bazlı yakınlaştırma */
const STORY_PHOTO_SCALE: Record<string, number> = {
  dogal: 1.4,
  rezervasyon: 1.4,
};

const CHANNEL_STACK: { id: string; icon: LucideIcon }[] = [
  { id: "phone", icon: Phone },
  { id: "whatsapp", icon: MessageCircle },
  { id: "instagram", icon: AtSign },
  { id: "web", icon: Globe },
  { id: "booking", icon: Calendar },
  { id: "crm", icon: Database },
];

const SERVICE_LIST: { id: string; icon: LucideIcon }[] = [
  { id: "voice", icon: Phone },
  { id: "text", icon: MessageCircle },
  { id: "reservation", icon: Calendar },
  { id: "sales", icon: UserCheck },
  { id: "reporting", icon: BarChart3 },
  { id: "custom", icon: Settings2 },
];

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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

      /* Yankı halkaları: her katman bir öncekinden daha geç ve daha güçlü tepki verir */
      const RING_STRENGTH = [16, 30, 46, 64];
      const ringSetters = RING_STRENGTH.map((_, i) => ({
        x: gsap.quickTo(`.hero-ring-${i + 1}`, "x", { duration: 0.55 + i * 0.35, ease: "power3.out" }),
        y: gsap.quickTo(`.hero-ring-${i + 1}`, "y", { duration: 0.55 + i * 0.35, ease: "power3.out" }),
      }));

      /* Nokta kümesi: fareyi hafif gecikmeli takip eden soluk uydu grubu */
      const CURSOR_DOTS = [
        { dx: -12, dy: -16, duration: 0.3 },
        { dx: 18, dy: 8, duration: 0.45 },
        { dx: -6, dy: 20, duration: 0.6 },
        { dx: 14, dy: -12, duration: 0.75 },
        { dx: -20, dy: 4, duration: 0.9 },
      ];
      const heroSectionEl = document.querySelector<HTMLElement>(".hero-section");
      const photoEl = document.querySelector<HTMLElement>(".hero-photo");
      /* Üçüncü yankı halkasının (inset -27%) yarıçapı: dairenin çapı üzerinden çıkarım */
      const RING_3_RADIUS_FACTOR = 1.54;
      const cursorDotSetters = CURSOR_DOTS.map((cfg, i) => ({
        x: gsap.quickTo(`.cursor-dot-${i + 1}`, "x", { duration: cfg.duration, ease: "power3.out" }),
        y: gsap.quickTo(`.cursor-dot-${i + 1}`, "y", { duration: cfg.duration, ease: "power3.out" }),
        dx: cfg.dx,
        dy: cfg.dy,
      }));
      if (heroSectionEl && photoEl) {
        const sectionRect = heroSectionEl.getBoundingClientRect();
        const photoRect = photoEl.getBoundingClientRect();
        const centerX = photoRect.left + photoRect.width / 2 - sectionRect.left;
        const centerY = photoRect.top + photoRect.height / 2 - sectionRect.top;
        gsap.set(".cursor-dot", { x: centerX, y: centerY });
      }

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
        ringSetters.forEach(({ x, y }, i) => {
          x(nx * RING_STRENGTH[i]);
          y(ny * RING_STRENGTH[i] * 0.8);
        });
        if (heroSectionEl && photoEl) {
          const sectionRect = heroSectionEl.getBoundingClientRect();
          const photoRect = photoEl.getBoundingClientRect();
          const centerX = photoRect.left + photoRect.width / 2 - sectionRect.left;
          const centerY = photoRect.top + photoRect.height / 2 - sectionRect.top;
          const maxRadius = (photoRect.width / 2) * RING_3_RADIUS_FACTOR;

          const rawX = e.clientX - sectionRect.left - centerX;
          const rawY = e.clientY - sectionRect.top - centerY;
          const dist = Math.hypot(rawX, rawY);
          const clampedDist = Math.min(dist, maxRadius);
          const angle = Math.atan2(rawY, rawX);
          const clusterX = centerX + Math.cos(angle) * clampedDist;
          const clusterY = centerY + Math.sin(angle) * clampedDist;

          cursorDotSetters.forEach(({ x, y, dx, dy }) => {
            x(clusterX + dx);
            y(clusterY + dy);
          });
        }
      };
      window.addEventListener("mousemove", onMove);

      /* Fare ekrandan çıkınca halkalar yay efektiyle merkeze döner */
      const onLeaveWindow = () => {
        gsap.to(".hero-ring", { x: 0, y: 0, duration: 1.3, ease: "elastic.out(1, 0.4)" });
      };
      document.addEventListener("mouseleave", onLeaveWindow);

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

      /* Hikaye: kartlar merkezde karışık bir deste gibi başlar, scroll ile açılıp
         kendi grid konumlarına düzleşerek yerleşir (FLIP tekniği). */
      const storyGrid = document.querySelector<HTMLElement>(".story-grid");
      const storyCircles = gsap.utils.toArray<HTMLElement>(".story-card-circle");
      const STACK_JITTER = [-14, 10, -20, 16, -9, 22]; // derece — deste hâlindeki rastgele açılar

      if (storyGrid && storyCircles.length) {
        const gridBox = storyGrid.getBoundingClientRect();
        const stackCenterX = gridBox.width / 2;
        const stackCenterY = gridBox.height / 2;

        const offsets = storyCircles.map((el) => {
          const box = el.getBoundingClientRect();
          const elCenterX = box.left - gridBox.left + box.width / 2;
          const elCenterY = box.top - gridBox.top + box.height / 2;
          return { dx: stackCenterX - elCenterX, dy: stackCenterY - elCenterY };
        });

        storyCircles.forEach((el, i) => {
          gsap.set(el, {
            x: offsets[i].dx,
            y: offsets[i].dy,
            rotate: STACK_JITTER[i % STACK_JITTER.length],
            scale: 0.82,
            zIndex: storyCircles.length - i,
          });
        });
        gsap.set(".story-caption", { autoAlpha: 0, y: 14 });

        const storyTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".story-pin",
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 0.7,
          },
        });

        storyCircles.forEach((el, i) => {
          const t = i * 0.13;
          storyTl.to(el, { x: 0, y: 0, rotate: 0, scale: 1, duration: 0.6, ease: "power2.out" }, t);
          const caption = el.closest(".story-cell")?.querySelector(".story-caption");
          if (caption) {
            storyTl.to(caption, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, t + 0.18);
          }
        });
      }

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

      /* Genel kart gridleri: kademeli yükseliş (services, trust, pricing, how-it-works, channel stack) */
      gsap.utils.toArray<HTMLElement>(".card-grid").forEach((grid) => {
        gsap.from(grid.querySelectorAll(".stagger-card"), {
          y: 70,
          autoAlpha: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: grid, start: "top 80%" },
        });
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

      return () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseleave", onLeaveWindow);
      };
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
        {/* Fareyi takip eden soluk nokta kümesi */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden sm:block">
          <span className="cursor-dot cursor-dot-1 absolute top-0 left-0 h-4 w-4 rounded-full bg-violet-400/20 blur-[1px]" />
          <span className="cursor-dot cursor-dot-2 absolute top-0 left-0 h-6 w-6 rounded-full bg-fuchsia-300/15 blur-[2px]" />
          <span className="cursor-dot cursor-dot-3 absolute top-0 left-0 h-2.5 w-2.5 rounded-full bg-cyan-300/20" />
          <span className="cursor-dot cursor-dot-4 absolute top-0 left-0 h-7 w-7 rounded-full bg-violet-300/12 blur-[3px]" />
          <span className="cursor-dot cursor-dot-5 absolute top-0 left-0 h-3.5 w-3.5 rounded-full bg-fuchsia-400/18 blur-[1px]" />
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          {/* Sol: dönen özellik başlığı */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <div className="hero-left-item min-h-[2.3em] sm:min-h-[2.6em] lg:min-h-[3.3em]">
              <h1
                key={`${lang}-${featureIndex}`}
                className="hero-rotator animate-fade-in-up bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text pb-1 font-heading text-4xl leading-[1.2] font-medium tracking-tight text-transparent sm:text-5xl lg:text-[3.35rem]"
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
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-medium text-violet-600 shadow-md ring-1 ring-violet-200"
              >
                {t.cta}
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
          <div className="hero-photo relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:mx-0 lg:max-w-[34rem]">
            {/* Fareyi takip eden yankı halkaları */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <span className="hero-ring hero-ring-1 absolute inset-[-7%] rounded-full border border-violet-400/35 bg-gradient-to-br from-violet-300/12 to-fuchsia-300/6 backdrop-blur-[1px]" />
              <span className="hero-ring hero-ring-2 absolute inset-[-16%] rounded-full border border-fuchsia-400/24 bg-fuchsia-300/6 backdrop-blur-[1px]" />
              <span className="hero-ring hero-ring-3 absolute inset-[-27%] rounded-full border border-violet-300/16" />
              <span className="hero-ring hero-ring-4 absolute inset-[-40%] rounded-full border border-fuchsia-300/10" />
            </div>

            <div className="liquid-photo-mask absolute inset-0 overflow-hidden shadow-2xl shadow-violet-900/15 ring-1 ring-white/70">
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

      {/* ---------- Hikaye: kart yığını grid'e açılıyor ---------- */}
      <section id="hikaye" className="story-pin relative z-10 flex min-h-screen scroll-mt-28 items-center overflow-hidden py-28">
        {/* Açık lila zemin */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-violet-50 to-fuchsia-50/70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-violet-300/25 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-96 w-96 rounded-full bg-fuchsia-300/25 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(139,92,246,0.08)_1px,transparent_1px)] [background-size:28px_28px]"
        />

        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium tracking-[0.35em] text-violet-600 uppercase">{t.storyKicker}</span>
            <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight sm:text-6xl">{t.storyTitle}</h2>
            <p className="mt-5 text-lg text-slate-500">{t.storySub}</p>
          </div>

          <div className="story-grid grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 lg:grid-cols-3 lg:gap-x-10">
            {t.storyCards.map((card) => (
              <div key={card.id} className="story-cell flex flex-col items-center text-center">
                <span className="story-card-circle relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full shadow-xl shadow-violet-500/15 ring-1 ring-white/70 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
                  <Image
                    src={STORY_PHOTO_SRC[card.id]}
                    alt={card.title}
                    fill
                    sizes="176px"
                    className="object-cover"
                    style={{
                      objectPosition: STORY_PHOTO_POSITION[card.id] ?? "center",
                      transform: `scale(${STORY_PHOTO_SCALE[card.id] ?? 1})`,
                    }}
                  />
                </span>
                <div className="story-caption mt-6">
                  <h3 className="text-lg font-semibold text-slate-800 sm:text-xl">{card.title}</h3>
                  <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-slate-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Neler Sunuyoruz: hizmetler + kanal şeridi ---------- */}
      <section id="hizmetler" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 py-28">
        <div className="reveal-block mb-14 text-center">
          <span className="text-sm font-medium tracking-[0.35em] text-violet-600 uppercase">
            {t.servicesKicker}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight sm:text-6xl">
            {t.servicesTitle}{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {t.servicesTitleAccent}
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500">{t.servicesSub}</p>
        </div>

        {/* Kanal şeridi */}
        <div className="card-grid mb-16 flex flex-wrap items-center justify-center gap-3">
          {CHANNEL_STACK.map(({ id, icon: Icon }) => (
            <span
              key={id}
              className="stagger-card inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm shadow-violet-500/5 backdrop-blur-md"
            >
              <Icon className="h-4 w-4 text-violet-500" strokeWidth={1.6} />
              {t.channelStack[id]}
            </span>
          ))}
        </div>

        {/* Hizmet kartları */}
        <div className="card-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LIST.map(({ id, icon: Icon }) => (
            <div
              key={id}
              className="stagger-card rounded-3xl border border-slate-200/80 bg-white/60 p-7 shadow-sm shadow-violet-500/5 backdrop-blur-md transition-colors duration-300 hover:border-violet-300/70 hover:bg-white/90"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-br from-violet-50 to-cyan-50">
                <Icon className="h-6 w-6 text-violet-600" strokeWidth={1.5} />
              </span>
              <h3 className="text-lg font-semibold text-slate-800">{t.services[id].title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{t.services[id].desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Dev istatistik ---------- */}
      <section className="stat-scene relative z-10 flex flex-col items-center justify-center py-40">
        <div className="giant-stat bg-gradient-to-b from-slate-900 via-violet-600 to-cyan-500 bg-clip-text text-center font-heading text-[24vw] leading-none font-semibold text-transparent sm:text-[18vw]">
          {t.statValue}
        </div>
        <p className="reveal-block mt-4 text-lg tracking-widest text-slate-500 uppercase">{t.statLabel}</p>
      </section>

      {/* ---------- Sektörler ---------- */}
      <section id="sektorler" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 pb-36">
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

      {/* ---------- Pricing ---------- */}
      <section id="fiyatlandirma" className="relative z-10 mx-auto max-w-6xl scroll-mt-28 px-6 pb-28">
        <div className="reveal-block mb-6 text-center">
          <span className="text-sm font-medium tracking-[0.35em] text-violet-600 uppercase">{t.pricingKicker}</span>
          <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight sm:text-6xl">
            {t.pricingTitle}{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {t.pricingTitleAccent}
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500">{t.pricingSub}</p>
        </div>

        {/* Nasıl başlarsınız: 3 adım */}
        <div className="card-grid mb-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.howItWorks.map((step, i) => (
            <div
              key={step.title}
              className="stagger-card relative rounded-3xl border border-slate-200/80 bg-white/50 p-6 backdrop-blur-md"
            >
              <span className="font-heading text-3xl font-semibold text-violet-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-800">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Fiyat kartları */}
        <div className="card-grid grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`stagger-card relative flex flex-col rounded-[2rem] border p-9 shadow-sm backdrop-blur-md sm:p-10 ${
                plan.highlighted
                  ? "border-violet-300 bg-slate-900 text-white shadow-xl shadow-violet-900/20"
                  : "border-slate-200/80 bg-white/60 text-slate-900 shadow-violet-500/5"
              }`}
            >
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>
                {plan.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-semibold sm:text-5xl">{plan.price}</span>
                {plan.period ? (
                  <span className={plan.highlighted ? "text-slate-400" : "text-slate-500"}>{plan.period}</span>
                ) : null}
              </div>
              <ul className="mt-7 flex flex-col gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${plan.highlighted ? "bg-fuchsia-400" : "bg-violet-500"}`}
                    />
                    <span className={plan.highlighted ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#iletisim"
                onMouseEnter={(e) => magnetEnter(e, 1.04)}
                onMouseMove={(e) => magnetMove(e, 0.35)}
                onMouseLeave={(e) => magnetLeave(e)}
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold ${
                  plan.highlighted
                    ? "bg-white text-slate-900"
                    : "bg-slate-900 text-white shadow-lg shadow-violet-900/10"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="reveal-block mt-8 text-center text-xs text-slate-400">{t.pricingNote}</p>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="sss" className="relative z-10 mx-auto max-w-3xl scroll-mt-28 px-6 pb-28">
        <div className="reveal-block mb-12 text-center">
          <span className="text-sm font-medium tracking-[0.35em] text-violet-600 uppercase">{t.faqKicker}</span>
          <h2 className="mt-4 font-heading text-4xl font-medium tracking-tight sm:text-5xl">{t.faqTitle}</h2>
        </div>

        <div className="reveal-block flex flex-col gap-3">
          {t.faqItems.map((item, i) => {
            const open = openFaq === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-slate-800">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-violet-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- İletişim ---------- */}
      <section id="iletisim" className="relative z-10 mx-auto max-w-2xl scroll-mt-28 px-6 pb-36">
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
