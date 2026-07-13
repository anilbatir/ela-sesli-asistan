export type Language = "tr" | "en";

export interface SectorDefinition {
  id: string;
  audioUrl: string;
}

export const SECTORS: SectorDefinition[] = [
  { id: "hotel", audioUrl: "/demo-audio/hotel.mp3" },
  { id: "restaurant", audioUrl: "/demo-audio/restaurant.mp3" },
  { id: "clinic", audioUrl: "/demo-audio/clinic.mp3" },
  { id: "salon", audioUrl: "/demo-audio/salon.mp3" },
  { id: "law", audioUrl: "/demo-audio/law.mp3" },
  { id: "realestate", audioUrl: "/demo-audio/realestate.mp3" },
];

export interface LocalizedContent {
  brand: string;
  nav: { label: string; href: string }[];
  demoCta: string;
  languageToggleLabel: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  sectorSection: {
    title: string;
    subtitle: string;
  };
  sectors: Record<string, string>;
  sectorPlayer: {
    playLabel: string;
    playingLabel: string;
    comingSoon: string;
  };
  benefits: {
    title: string;
    description: string;
  }[];
  form: {
    title: string;
    subtitle: string;
    businessName: string;
    businessNamePlaceholder: string;
    sectorLabel: string;
    sectorPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    submit: string;
    success: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
  chatDemo: {
    businessName: string;
    messages: { sender: "assistant" | "customer"; text: string }[];
  };
}

export const SITE_CONTENT: Record<Language, LocalizedContent> = {
  tr: {
    brand: "ela",
    nav: [
      { label: "Nasıl çalışır", href: "#nasil-calisir" },
      { label: "Sektörler", href: "#sektorler" },
      { label: "İletişim", href: "#iletisim" },
    ],
    demoCta: "Demo dinle",
    languageToggleLabel: "EN",
    hero: {
      title: "Ela hiç telefonu kaçırmaz.",
      subtitle:
        "İnsan gibi konuşur. Ekibinizin zamanını size geri verir. Otel, restoran, klinik gibi işletmeler için 7/24 çalışan sesli rezervasyon asistanı.",
      cta: "Demo dinle",
    },
    sectorSection: {
      title: "Sektörünüzü seçin, Ela'yı dinleyin",
      subtitle:
        "Her sektör için gerçek bir çağrı örneği — Ela'nın nasıl konuştuğunu duyun.",
    },
    sectors: {
      hotel: "Butik oteller",
      restaurant: "Restoranlar",
      clinic: "Klinikler",
      salon: "Kuaför & Güzellik",
      law: "Avukatlık Büroları",
      realestate: "Emlak Ofisleri",
    },
    sectorPlayer: {
      playLabel: "Dinle",
      playingLabel: "Çalıyor…",
      comingSoon: "Bu sektör için demo kaydı yakında eklenecek.",
    },
    benefits: [
      {
        title: "Hiçbir aramayı kaçırmaz",
        description: "7/24 her aramaya anında cevap verir, hiçbir rezervasyon fırsatı kaybolmaz.",
      },
      {
        title: "İnsan gibi doğal konuşur",
        description: "Müşteri karşısındakinin yapay zeka olduğunu fark etmez, sıcak ve akıcı bir sohbet yaşar.",
      },
      {
        title: "Ekibinizin zamanını geri verir",
        description: "Personeliniz telefonla değil, misafirle ilgilenir. İş yükü azalır, verimlilik artar.",
      },
    ],
    form: {
      title: "Ela'yı işletmenizde deneyin",
      subtitle: "Bilgilerinizi bırakın, ekibimiz sizinle iletişime geçsin.",
      businessName: "İşletme adı",
      businessNamePlaceholder: "Örn. Deniz Manzara Otel",
      sectorLabel: "Sektör",
      sectorPlaceholder: "Sektör seçin",
      phone: "Telefon",
      phonePlaceholder: "05xx xxx xx xx",
      email: "E-posta",
      emailPlaceholder: "ornek@isletme.com",
      submit: "Gönder",
      success: "Teşekkürler! Ekibimiz en kısa sürede sizinle iletişime geçecek.",
    },
    footer: {
      tagline: "Ela — sesli rezervasyon asistanınız.",
      rights: "Tüm hakları saklıdır.",
    },
    chatDemo: {
      businessName: "Ela Otel",
      messages: [
        { sender: "assistant", text: "Merhaba, Ela Otel'e hoş geldiniz. Nasıl yardımcı olabilirim?" },
        { sender: "customer", text: "Rezervasyon yaptırmak istiyorum." },
        { sender: "assistant", text: "Hemen yardımcı oluyorum…" },
      ],
    },
  },
  en: {
    brand: "ela",
    nav: [
      { label: "How it works", href: "#nasil-calisir" },
      { label: "Industries", href: "#sektorler" },
      { label: "Contact", href: "#iletisim" },
    ],
    demoCta: "Listen to demo",
    languageToggleLabel: "TR",
    hero: {
      title: "Ela never misses a call.",
      subtitle:
        "Speaks like a human. Gives your team's time back. A voice reservation assistant that works 24/7 for hotels, restaurants, clinics and more.",
      cta: "Listen to demo",
    },
    sectorSection: {
      title: "Pick your industry, hear Ela",
      subtitle: "A real call sample for every industry — hear how Ela speaks.",
    },
    sectors: {
      hotel: "Boutique hotels",
      restaurant: "Restaurants",
      clinic: "Clinics",
      salon: "Hair & Beauty",
      law: "Law firms",
      realestate: "Real estate",
    },
    sectorPlayer: {
      playLabel: "Listen",
      playingLabel: "Playing…",
      comingSoon: "Demo recording for this industry is coming soon.",
    },
    benefits: [
      {
        title: "Never misses a call",
        description: "Answers every call instantly, 24/7 — no reservation opportunity is ever lost.",
      },
      {
        title: "Speaks naturally, like a human",
        description: "Customers won't notice they're talking to AI — warm, fluent conversation every time.",
      },
      {
        title: "Gives your team's time back",
        description: "Your staff focuses on guests, not the phone. Less workload, more productivity.",
      },
    ],
    form: {
      title: "Try Ela at your business",
      subtitle: "Leave your details and our team will reach out.",
      businessName: "Business name",
      businessNamePlaceholder: "e.g. Seaside View Hotel",
      sectorLabel: "Industry",
      sectorPlaceholder: "Select an industry",
      phone: "Phone",
      phonePlaceholder: "+1 555 xxx xxxx",
      email: "Email",
      emailPlaceholder: "you@business.com",
      submit: "Submit",
      success: "Thanks! Our team will get in touch with you shortly.",
    },
    footer: {
      tagline: "Ela — your voice reservation assistant.",
      rights: "All rights reserved.",
    },
    chatDemo: {
      businessName: "Ela Hotel",
      messages: [
        { sender: "assistant", text: "Hello, welcome to Ela Hotel. How can I help you?" },
        { sender: "customer", text: "I'd like to make a reservation." },
        { sender: "assistant", text: "I'm on it right away…" },
      ],
    },
  },
};
