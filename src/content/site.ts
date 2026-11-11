/**
 * All public copy lives in this file. Replace every [placeholder] before launch.
 * whatsappNumber is digits only, with the country code and no plus sign.
 */

export type PageId = "beranda" | "layanan" | "tentang" | "kontak";

export type IconName =
  | "bag"
  | "shirt"
  | "bolt"
  | "truck"
  | "pin"
  | "clock"
  | "chat"
  | "check";

export type NavItem = {
  label: string;
  href: string;
};

export type WhatsAppCta = {
  kind: "whatsapp";
  id: string;
  label: string;
  message: string;
};

export type InternalCta = {
  kind: "internal";
  id: string;
  label: string;
  href: string;
};

export type Cta = WhatsAppCta | InternalCta;

export type PageSeo = {
  id: PageId;
  path: "/" | "/layanan" | "/tentang" | "/kontak";
  title: string;
  description: string;
};

export type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: "ID";
  display: string;
  areaLabel: string;
};

export type OpeningHours = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
  label: string;
};

export type PriceLine = {
  id: string;
  name: string;
  priceLabel: string;
};

export type ServiceHighlight = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  cta: Cta;
};

export type ServiceGroup = {
  id: "kiloan" | "satuan" | "express";
  icon: IconName;
  title: string;
  description: string;
  badge?: string;
  lines: PriceLine[];
  cta: WhatsAppCta;
};

export type Step = {
  index: string;
  title: string;
  description: string;
};

export type Highlight = {
  icon: IconName;
  title: string;
  description: string;
};

export type Note = {
  title: string;
  body: string;
};

export type Value = {
  index: string;
  title: string;
  description: string;
};

export type PhotoSlot = {
  id: string;
  caption: string;
  alt: string;
  src?: string;
};

export type SiteContent = {
  business: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    url: string;
    locale: "id-ID";
    logoAlt: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDisplay: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  address: Address;
  mapsEmbedUrl: string;
  hours: {
    summary: string;
    rows: OpeningHours[];
  };
  areas: string[];
  pickupFeeNote: string;
  outsideAreaNote: string;
  nav: NavItem[];
  chrome: {
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  ctas: {
    header: WhatsAppCta;
    floating: WhatsAppCta;
    footerWhatsapp: WhatsAppCta;
  };
  footer: {
    blurb: string;
    copyright: string;
    menuTitle: string;
    addressTitle: string;
    followTitle: string;
    instagramLabel: string;
    menu: NavItem[];
  };
  seo: {
    ogImage: string;
    pages: PageSeo[];
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: WhatsAppCta;
    secondaryCta: InternalCta;
    heroPhoto: PhotoSlot;
    services: {
      eyebrow: string;
      title: string;
      items: ServiceHighlight[];
    };
    steps: {
      eyebrow: string;
      title: string;
      items: Step[];
    };
    whyUs: {
      eyebrow: string;
      title: string;
      items: Highlight[];
    };
    pricePreview: {
      eyebrow: string;
      title: string;
      lines: PriceLine[];
      detailCta: InternalCta;
      areaTitle: string;
      areaMissingNote: string;
      areaMissingCta: WhatsAppCta;
      areaMapCta: InternalCta;
    };
    closing: {
      title: string;
      subtitle: string;
      cta: WhatsAppCta;
    };
  };
  layanan: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: ServiceGroup[];
    notesTitle: string;
    notes: Note[];
    closing: {
      title: string;
      subtitle: string;
      cta: WhatsAppCta;
    };
  };
  tentang: {
    eyebrow: string;
    title: string;
    story: string;
    belief: string;
    portrait: PhotoSlot;
    valuesTitle: string;
    values: Value[];
    galleryTitle: string;
    gallery: PhotoSlot[];
  };
  kontak: {
    eyebrow: string;
    title: string;
    intro: string;
    addressLabel: string;
    addressIcon: IconName;
    hoursLabel: string;
    hoursIcon: IconName;
    whatsappLabel: string;
    whatsappIcon: IconName;
    pickupCta: WhatsAppCta;
    mapCaption: string;
    areaTitle: string;
    areaIntro: string;
  };
};

const kiloanMessage = "Halo, saya mau pesan laundry kiloan";
const satuanMessage = "Halo, saya mau pesan laundry satuan";
const expressMessage = "Halo, saya mau pesan laundry express";

export const site = {
  business: {
    name: "SWACA",
    legalName: "SWACA Clean & Care",
    tagline: "CLEAN & CARE",
    description: "Laundry kiloan, satuan, dan express dengan layanan antar jemput.",
    url: "https://swacacleancare.com/",
    locale: "id-ID",
    logoAlt: "Logo SWACA Clean & Care",
  },
  contact: {
    whatsappNumber: "6280000000000",
    whatsappDisplay: "+62 852-8411-8281",
    instagramHandle: "Swaca Clean Care",
    instagramUrl: "https://instagram.com/",
  },
  address: {
    streetAddress: "Jl. Jungle Land No.90",
    addressLocality: "Bogor",
    addressRegion: "Jawa Barat",
    postalCode: "16810",
    addressCountry: "ID",
    display: "Jl. Jungle Land No.90, Karang Tengah, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810",
    areaLabel: "Bogor",
  },
  mapsEmbedUrl: "https://maps.app.goo.gl/Ewpa2vfdQxd8qqxz8",
  hours: {
    summary: "Buka 08:00 - 17:00 WIB",
    rows: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "",
        closes: "",
        label: "Senin sampai Sabtu: [jam]",
      },
      {
        dayOfWeek: ["Sunday"],
        opens: "",
        closes: "",
        label: "Minggu: [jam / tutup]",
      },
    ],
  },
  areas: ["Bogor"],
  pickupFeeNote: "Area layanan hingga radius ±10 km dari outlet SWACA",
  outsideAreaNote: "Di luar area layanan? Tanyakan dulu lewat WhatsApp.",
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Layanan & Harga", href: "/layanan" },
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
  ],
  chrome: {
    openMenuLabel: "Buka menu",
    closeMenuLabel: "Tutup menu",
  },
  ctas: {
    header: {
      kind: "whatsapp",
      id: "header",
      label: "Pesan via WhatsApp",
      message: "Halo, saya mau pesan laundry",
    },
    floating: {
      kind: "whatsapp",
      id: "floating",
      label: "Pesan via WhatsApp",
      message: "Halo, saya mau tanya layanan laundry SWACA",
    },
    footerWhatsapp: {
      kind: "whatsapp",
      id: "footer-whatsapp",
      label: "WhatsApp",
      message: "Halo, saya mau tanya layanan laundry SWACA",
    },
  },
  footer: {
    blurb: "Laundry kiloan, satuan, dan express dengan layanan antar jemput.",
    copyright: "© 2026 SWACA Clean & Care. Semua hak dilindungi.",
    menuTitle: "Menu",
    addressTitle: "Alamat",
    followTitle: "Ikuti kami",
    instagramLabel: "Instagram",
    menu: [
      { label: "Beranda", href: "/" },
      { label: "Layanan & Harga", href: "/layanan" },
      { label: "Tentang Kami", href: "/tentang" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
  seo: {
    ogImage: "/og.jpg",
    pages: [
      {
        id: "beranda",
        path: "/",
        title: "SWACA Clean & Care | Laundry Antar Jemput",
        description:
          "Cucian bersih dan wangi, dijemput dan diantar ke rumah Anda. Laundry kiloan, satuan, dan express.",
      },
      {
        id: "layanan",
        path: "/layanan",
        title: "Layanan & Harga | SWACA Clean & Care",
        description:
          "Harga jelas untuk laundry kiloan, satuan, dan express. Pilih layanan dan pesan lewat WhatsApp.",
      },
      {
        id: "tentang",
        path: "/tentang",
        title: "Tentang Kami | SWACA Clean & Care",
        description:
          "Laundry rumahan dengan standar perawatan yang teliti. Dicuci terpisah, harga terbuka, dan tepat waktu.",
      },
      {
        id: "kontak",
        path: "/kontak",
        title: "Kontak & Area Layanan | SWACA Clean & Care",
        description:
          "Hubungi SWACA lewat WhatsApp atau datang langsung. Lihat jam buka, alamat, dan area antar jemput.",
      },
    ],
  },
  home: {
    eyebrow: "Laundry kiloan & satuan · Antar jemput",
    title: "Cucian bersih dan wangi, dijemput dan diantar ke rumah Anda.",
    subtitle:
      "Cukup chat lewat WhatsApp, kami jemput cucian Anda, lalu kami antar kembali dalam keadaan rapi dan siap pakai.",
    primaryCta: {
      kind: "whatsapp",
      id: "hero",
      label: "Pesan via WhatsApp",
      message: "Halo, saya mau pesan laundry",
    },
    secondaryCta: {
      kind: "internal",
      id: "hero-prices",
      label: "Lihat daftar harga",
      href: "/layanan",
    },
    heroPhoto: {
      id: "hero-laundry",
      caption: "Foto outlet SWACA Clean & Care",
      alt: "Foto outlet SWACA Clean & Care",
    },
    services: {
      eyebrow: "LAYANAN KAMI",
      title: "Pilih layanan sesuai kebutuhan Anda",
      items: [
        {
          id: "kiloan",
          icon: "bag",
          title: "Cuci Kiloan",
          description: "Pakaian harian dihitung per kilogram. Dicuci, dikeringkan, dan dilipat.",
          cta: {
            kind: "whatsapp",
            id: "service-kiloan",
            label: "Pesan kiloan",
            message: kiloanMessage,
          },
        },
        {
          id: "satuan",
          icon: "shirt",
          title: "Cuci Satuan",
          description: "Seprei, handuk, selimut, sofa, dan bed cover dihitung per potong.",
          cta: {
            kind: "whatsapp",
            id: "service-satuan",
            label: "Pesan satuan",
            message: satuanMessage,
          },
        },
        {
          id: "express",
          icon: "bolt",
          title: "Express",
          description: "Butuh cepat? Cucian selesai dalam [durasi express].",
          cta: {
            kind: "whatsapp",
            id: "service-express",
            label: "Pesan express",
            message: expressMessage,
          },
        },
        {
          id: "antar-jemput",
          icon: "truck",
          title: "Antar Jemput",
          description: "Kami jemput dan antar cucian di area layanan kami.",
          cta: {
            kind: "internal",
            id: "service-antar-jemput",
            label: "Cek area layanan",
            href: "/kontak",
          },
        },
      ],
    },
    steps: {
      eyebrow: "CARA PESAN",
      title: "Tiga langkah, tanpa keluar rumah",
      items: [
        {
          index: "1",
          title: "Chat WhatsApp",
          description: "Pilih layanan dan kirim alamat penjemputan lewat WhatsApp.",
        },
        {
          index: "2",
          title: "Kami jemput",
          description: "Kurir kami datang sesuai jadwal, cucian ditimbang dan dicatat.",
        },
        {
          index: "3",
          title: "Diantar bersih",
          description: "Cucian kembali dalam keadaan bersih, wangi, dan terlipat rapi.",
        },
      ],
    },
    whyUs: {
      eyebrow: "KENAPA MEMILIH KAMI",
      title: "Dirawat seperti pakaian sendiri",
      items: [
        {
          icon: "check",
          title: "Dicuci terpisah",
          description: "Cucian setiap pelanggan tidak dicampur.",
        },
        {
          icon: "check",
          title: "Harga jelas",
          description: "Daftar harga terbuka, tanpa biaya tersembunyi.",
        },
        {
          icon: "check",
          title: "Tepat waktu",
          description: "Jadwal jemput dan antar dikonfirmasi lewat WhatsApp.",
        },
        {
          icon: "check",
          title: "Wangi tahan lama",
          description: "Pilihan pewangi sesuai selera Anda.",
        },
      ],
    },
    pricePreview: {
      eyebrow: "HARGA MULAI DARI",
      title: "Harga terjangkau, hasil maksimal",
      lines: [
        { id: "preview-kiloan", name: "Cuci + setrika kiloan", priceLabel: "TBD" },
        { id: "preview-bed-cover", name: "Bed cover kecil", priceLabel: "Rp25.000/pcs" },
        { id: "preview-express", name: "Express [durasi]", priceLabel: "TBD" },
      ],
      detailCta: {
        kind: "internal",
        id: "home-price-list",
        label: "Lihat daftar harga lengkap",
        href: "/layanan",
      },
      areaTitle: "Area antar jemput",
      areaMissingNote: "Alamat Anda tidak ada di daftar?",
      areaMissingCta: {
        kind: "whatsapp",
        id: "home-area-ask",
        label: "Tanyakan saja lewat WhatsApp",
        message: "Halo, alamat saya belum ada di daftar area antar jemput. Apakah bisa dijemput?",
      },
      areaMapCta: {
        kind: "internal",
        id: "home-area-map",
        label: "Lihat peta area layanan",
        href: "/kontak",
      },
    },
    closing: {
      title: "Siap mencuci tanpa repot?",
      subtitle: "Chat kami sekarang, cucian Anda kami jemput hari ini.",
      cta: {
        kind: "whatsapp",
        id: "home-closing",
        label: "Pesan via WhatsApp",
        message: "Halo, saya mau pesan laundry",
      },
    },
  },
  layanan: {
    eyebrow: "LAYANAN & HARGA",
    title: "Harga jelas untuk setiap jenis cucian",
    intro: "Pilih layanan, lalu tekan tombol Pesan. WhatsApp akan terbuka dengan pesan yang sudah terisi.",
    groups: [
      {
        id: "kiloan",
        icon: "bag",
        title: "Kiloan",
        description: "Pakaian harian. Selesai dalam [durasi]. Minimal [berat] kg.",
        lines: [
          { id: "kiloan-lipat", name: "Cuci kering lipat", priceLabel: "TBD" },
          { id: "kiloan-setrika", name: "Cuci + setrika", priceLabel: "TBD" },
          { id: "kiloan-setrika-saja", name: "Setrika saja", priceLabel: "TBD" },
        ],
        cta: {
          kind: "whatsapp",
          id: "layanan-kiloan",
          label: "Pesan kiloan",
          message: kiloanMessage,
        },
      },
      {
        id: "satuan",
        icon: "shirt",
        title: "Satuan",
        description: "Seprei, handuk, selimut, sofa, dan bed cover dihitung per potong.",
        lines: [
          { id: "satuan-seprei", name: "Seprei / linen", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-sarung-bantal", name: "Sarung bantal", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-sarung-guling", name: "Sarung guling", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-duvet", name: "Duvet", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-selimut-tebal", name: "Selimut tebal", priceLabel: "Rp10.000/pcs" },
          { id: "satuan-selimut-tipis", name: "Selimut tipis", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-handuk-mandi", name: "Handuk mandi", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-handuk-kolam", name: "Handuk kolam", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-handuk-muka", name: "Handuk muka", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-sofa-cover", name: "Sofa cover", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-sarung-bantal-sofa", name: "Sarung bantal sofa", priceLabel: "Rp8.000/pcs" },
          { id: "satuan-bed-cover-kecil", name: "Bed cover kecil", priceLabel: "Rp25.000/pcs" },
          { id: "satuan-bed-cover-sedang", name: "Bed cover sedang", priceLabel: "Rp35.000/pcs" },
          { id: "satuan-bed-cover-besar", name: "Bed cover besar", priceLabel: "Rp45.000/pcs" },
        ],
        cta: {
          kind: "whatsapp",
          id: "layanan-satuan",
          label: "Pesan satuan",
          message: satuanMessage,
        },
      },
      {
        id: "express",
        icon: "bolt",
        title: "Express",
        description: "Cucian selesai di hari yang sama, sesuai jam masuk.",
        badge: "Paling cepat",
        lines: [
          { id: "express-1", name: "Express [durasi 1]", priceLabel: "TBD" },
          { id: "express-2", name: "Express [durasi 2]", priceLabel: "TBD" },
        ],
        cta: {
          kind: "whatsapp",
          id: "layanan-express",
          label: "Pesan express",
          message: expressMessage,
        },
      },
    ],
    notesTitle: "Yang perlu Anda tahu",
    notes: [
      {
        title: "Biaya antar jemput",
        body: "TBD",
      },
      {
        title: "Penimbangan",
        body: "Cucian ditimbang saat dijemput, total dikirim lewat WhatsApp.",
      },
      {
        title: "Pembayaran",
        body: "Tunai, transfer, dan QRIS",
      },
    ],
    closing: {
      title: "Belum yakin pilih yang mana?",
      subtitle: "Ceritakan cucian Anda, kami bantu pilihkan layanan yang paling pas.",
      cta: {
        kind: "whatsapp",
        id: "layanan-closing",
        label: "Tanya via WhatsApp",
        message: "Halo, saya belum yakin pilih layanan laundry yang mana. Bisa dibantu?",
      },
    },
  },
  tentang: {
    eyebrow: "TENTANG KAMI",
    title: "Laundry rumahan dengan standar perawatan yang teliti",
    story:
      "[Cerita singkat usaha: kapan mulai, kenapa didirikan, dan siapa yang dilayani. 2 sampai 3 kalimat dari pemilik.]",
    belief: "Kami percaya cucian yang rapi memberi Anda waktu lebih banyak untuk hal yang penting.",
    portrait: {
      id: "owner",
      caption: "Foto pemilik atau tim",
      alt: "Foto pemilik atau tim SWACA",
    },
    valuesTitle: "Nilai yang kami pegang",
    values: [
      {
        index: "01",
        title: "Teliti",
        description: "Setiap cucian dicek noda dan kantongnya sebelum dicuci.",
      },
      {
        index: "02",
        title: "Jujur",
        description: "Berat dan harga dikirim terbuka sebelum Anda membayar.",
      },
      {
        index: "03",
        title: "Tepat waktu",
        description: "Jadwal jemput dan antar kami tepati, atau kami kabari lebih dulu.",
      },
      {
        index: "04",
        title: "Ramah",
        description: "Pertanyaan apa pun dijawab cepat lewat WhatsApp.",
      },
    ],
    galleryTitle: "Tempat kami",
    gallery: [
      { id: "mesin-cuci", caption: "Foto mesin cuci", alt: "Foto mesin cuci SWACA" },
      { id: "area-setrika", caption: "Foto area setrika", alt: "Foto area setrika SWACA" },
      { id: "siap-antar", caption: "Foto cucian siap antar", alt: "Foto cucian SWACA yang siap diantar" },
    ],
  },
  kontak: {
    eyebrow: "KONTAK & AREA LAYANAN",
    title: "Kami jemput cucian Anda di area berikut",
    intro: "Hubungi kami lewat WhatsApp atau datang langsung ke tempat kami.",
    addressLabel: "Alamat",
    addressIcon: "pin",
    hoursLabel: "Jam buka",
    hoursIcon: "clock",
    whatsappLabel: "WhatsApp",
    whatsappIcon: "chat",
    pickupCta: {
      kind: "whatsapp",
      id: "kontak-pickup",
      label: "Minta dijemput",
      message: "Halo, saya mau minta cucian dijemput",
    },
    mapCaption: "Peta Google Maps (embed lokasi laundry)",
    areaTitle: "Area antar jemput",
    areaIntro: "Biaya antar jemput: [gratis / Rp ...]. Di luar area ini? Tanyakan dulu lewat WhatsApp.",
  },
} satisfies SiteContent;
