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
  id: "satuan" | "express" | "noda";
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
  map: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
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
    segmentsTitle: string;
    segments: string[];
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
    whatsappCta: WhatsAppCta;
    pickupCta: WhatsAppCta;
    mapCaption: string;
    areaTitle: string;
  };
};

const satuanMessage = "Halo, saya mau pesan laundry satuan";
const expressMessage = "Halo, saya mau pesan laundry express";
const nodaMessage = "Halo, saya mau tanya layanan penghilangan noda";

export const site = {
  business: {
    name: "SWACA",
    legalName: "SWACA Clean & Care",
    tagline: "CLEAN & CARE",
    description: "Laundry linen, handuk, dan perlengkapan operasional untuk hospitality dan bisnis.",
    url: "https://swacacleancare.com/",
    locale: "id-ID",
    logoAlt: "Logo SWACA Clean & Care",
  },
  contact: {
    whatsappNumber: "6285284118281",
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
    areaLabel: "Sentul City, Bogor",
  },
  map: {
    latitude: -6.5784814,
    longitude: 106.8914168,
    zoom: 16,
  },
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
    blurb: "Laundry linen, handuk, dan perlengkapan operasional untuk hospitality dan bisnis.",
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
        title: "SWACA Clean & Care | Laundry Hospitality Sentul City",
        description:
          "Solusi laundry untuk kebutuhan hospitality dan bisnis di Sentul City, Bogor. Linen, handuk, dan perlengkapan operasional.",
      },
      {
        id: "layanan",
        path: "/layanan",
        title: "Layanan & Harga | SWACA Clean & Care",
        description:
          "Daftar harga laundry linen, handuk, selimut, sofa, dan bed cover. Express tersedia dengan biaya tambahan 100%.",
      },
      {
        id: "tentang",
        path: "/tentang",
        title: "Tentang Kami | SWACA Clean & Care",
        description:
          "SWACA Clean & Care adalah laundry di Sentul City, Bogor, untuk villa, hotel, gym, spa, restoran, serta event dan wedding organizer.",
      },
      {
        id: "kontak",
        path: "/kontak",
        title: "Kontak & Area Layanan | SWACA Clean & Care",
        description:
          "Hubungi SWACA di Sentul City, Kabupaten Bogor. Lihat jam buka, alamat, dan area antar jemput.",
      },
    ],
  },
  home: {
    eyebrow: "Sentul City · Kabupaten Bogor",
    title: "SWACA Laundry — Clean & Care",
    subtitle:
      "Solusi laundry untuk kebutuhan hospitality dan bisnis Anda. Membantu menjaga linen, handuk, dan perlengkapan operasional tetap bersih serta siap digunakan.",
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
      title: "Layanan untuk linen dan perlengkapan operasional",
      items: [
        {
          id: "linen",
          icon: "bag",
          title: "Linen & perlengkapan tidur",
          description: "Seprei, sarung bantal, sarung guling, dan duvet untuk villa, hotel, dan penginapan.",
          cta: {
            kind: "whatsapp",
            id: "service-linen",
            label: "Pesan linen",
            message: "Halo, saya mau pesan laundry linen",
          },
        },
        {
          id: "satuan",
          icon: "shirt",
          title: "Handuk, selimut, dan bed cover",
          description: "Handuk, selimut, sofa cover, dan bed cover sesuai ukuran. Dihitung per potong.",
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
          description: "Layanan tambahan dengan biaya 100% dari harga layanan reguler.",
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
          description: "Kami jemput dan antar linen serta perlengkapan di area layanan kami.",
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
      title: "Tiga langkah, linen siap digunakan",
      items: [
        {
          index: "1",
          title: "Chat WhatsApp",
          description: "Pilih layanan dan kirim kebutuhan linen atau perlengkapan lewat WhatsApp.",
        },
        {
          index: "2",
          title: "Kami jemput",
          description: "Kurir kami datang sesuai jadwal, perlengkapan dicatat per potong.",
        },
        {
          index: "3",
          title: "Siap digunakan",
          description: "Linen, handuk, dan perlengkapan kembali bersih serta siap dipakai.",
        },
      ],
    },
    whyUs: {
      eyebrow: "KENAPA MEMILIH KAMI",
      title: "Siap mendukung operasional Anda",
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
          title: "Siap digunakan",
          description: "Linen, handuk, dan perlengkapan kembali bersih serta siap dipakai.",
        },
      ],
    },
    pricePreview: {
      eyebrow: "HARGA MULAI DARI",
      title: "Harga terjangkau, hasil maksimal",
      lines: [
        { id: "preview-seprei", name: "Seprei / linen", priceLabel: "Rp8.000/pcs" },
        { id: "preview-selimut", name: "Selimut tebal", priceLabel: "Rp10.000/pcs" },
        { id: "preview-bed-cover", name: "Bed cover kecil", priceLabel: "Rp25.000/pcs" },
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
      title: "Butuh partner laundry untuk bisnis Anda?",
      subtitle: "Ceritakan kebutuhan linen atau perlengkapan operasional Anda lewat WhatsApp.",
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
    title: "Harga jelas untuk linen dan perlengkapan operasional",
    intro: "Pilih layanan, lalu tekan tombol Pesan. WhatsApp akan terbuka dengan pesan yang sudah terisi.",
    groups: [
      {
        id: "satuan",
        icon: "shirt",
        title: "Satuan",
        description: "Linen, handuk, selimut, sofa, dan bed cover untuk kebutuhan operasional. Dihitung per potong.",
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
        id: "noda",
        icon: "check",
        title: "Penghilangan noda",
        description: "Tersedia sebagai layanan tambahan. Harga perlu dikonfirmasi.",
        lines: [{ id: "noda-stain", name: "Penghilangan noda", priceLabel: "Perlu dikonfirmasi" }],
        cta: {
          kind: "whatsapp",
          id: "layanan-noda",
          label: "Tanya penghilangan noda",
          message: nodaMessage,
        },
      },
      {
        id: "express",
        icon: "bolt",
        title: "Express",
        description: "Tersedia sebagai layanan tambahan, sesuai keterangan pada nota.",
        lines: [{ id: "express-surcharge", name: "Biaya tambahan", priceLabel: "+100% harga reguler" }],
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
        title: "Perhitungan",
        body: "Pesanan dicatat per potong, total dikirim lewat WhatsApp.",
      },
      {
        title: "Pembayaran",
        body: "Tunai, transfer, dan QRIS",
      },
    ],
    closing: {
      title: "Belum yakin pilih yang mana?",
      subtitle: "Ceritakan kebutuhan linen Anda, kami bantu pilihkan layanan yang paling pas.",
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
    title: "Partner laundry untuk hospitality dan bisnis di Sentul City",
    story:
      "SWACA Clean & Care merupakan layanan laundry yang berlokasi di kawasan Sentul City, Kabupaten Bogor. SWACA melayani kebutuhan pencucian dan perawatan berbagai perlengkapan berbahan tekstil, termasuk linen, sprei, duvet, selimut, handuk, serta perlengkapan lainnya.",
    belief:
      "SWACA adalah partner laundry bagi segmen hospitality dan bisnis komersial. Sasaran layanan meliputi villa, hotel, gym dan fitness center, spa dan massage, restaurant, serta event organizer dan wedding organizer.",
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
        description: "Setiap perlengkapan dicek sebelum dicuci.",
      },
      {
        index: "02",
        title: "Jujur",
        description: "Jumlah dan harga dikirim terbuka sebelum Anda membayar.",
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
    segmentsTitle: "Segmen pelanggan yang dilayani",
    segments: [
      "Villa & Homestay",
      "Hotel",
      "Gym & Fitness Center",
      "Spa & Massage",
      "Restaurant",
      "Event Organizer (EO) & Wedding Organizer (WO)",
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
    title: "Kami jemput linen dan perlengkapan di area berikut",
    intro: "Hubungi kami lewat WhatsApp atau datang langsung ke tempat kami.",
    addressLabel: "Alamat",
    addressIcon: "pin",
    hoursLabel: "Jam buka",
    hoursIcon: "clock",
    whatsappLabel: "WhatsApp",
    whatsappIcon: "chat",
    whatsappCta: {
      kind: "whatsapp",
      id: "kontak-whatsapp",
      label: "WhatsApp",
      message: "Halo, saya mau tanya layanan laundry SWACA",
    },
    pickupCta: {
      kind: "whatsapp",
      id: "kontak-pickup",
      label: "Minta dijemput",
      message: "Halo, saya mau minta linen dijemput",
    },
    mapCaption: "Peta lokasi SWACA Clean & Care",
    areaTitle: "Area antar jemput",
  },
} satisfies SiteContent;
