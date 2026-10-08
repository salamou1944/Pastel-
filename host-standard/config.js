window.HOST_CONFIG = {
  brand: {
    name: "PASTEL PASTRY&COFFEE",
    badge: "PASTEL HOST · REALISTIC 3D",
    eyebrow: "PASTEL PASTRY&COFFEE",
    title: "مرحباً.\nأنا هنا لخدمتك.",
    subtitle: "اسألني عن الأشياء التي نملك معلومات موثقة عنها. إذا لم تكن المعلومة مثبتة، لن أخمّن."
  },

  appearance: {
    accent: "#e8c99f",
    background: "#100c0a",
    panel: "#16100d"
  },

  environment: {
    liveCafe: {
      enabled: false,
      protocol: "hls",
      url: "",
      label: "PASTEL · LIVE CAFE",
      muted: true,
      fit: "cover",
      note: "Set the cafe camera's browser-playable HLS .m3u8 URL here. The stream must be authorized for public playback and send CORS headers. No fake/live-simulated state is reported as LIVE."
    }
  },

  host: {
    modelUrl: "./assets/pastel-host.glb",
    fallbackModelUrls: [],
    dracoEnabled: false,
    body: "M",
    mood: "neutral",
    view: "upper",
    source: "three.ws realistic-male GLB candidate vendored at build time for functional validation; commercial provenance/licence still requires verification before paid customer redistribution"
  },

  language: {
    ui: "ar",
    speech: "ar-DZ",
    rate: 0.88,
    pitch: 1
  },

  contact: {
    phone: "+213541332877",
    whatsapp: "213541332877",
    email: "sarl.pastel.pastry@gmail.com",
    address: "Résidence El Chourouk، Akid Lotfi، Oran 31000، Algeria",
    plusCode: "PCF8+P4V"
  },

  actions: {
    whatsappLabel: "WhatsApp",
    callLabel: "اتصال",
    emailLabel: "البريد",
    directionsLabel: "الاتجاهات"
  },

  questions: [
    {
      id: "services",
      label: "الخدمات",
      keywords: ["خدمات","فطور","غداء","عشاء","برانش"],
      answer: "PASTEL يقدم الفطور والغداء والعشاء والبرانش والمشروبات."
    },
    {
      id: "desserts",
      label: "الحلويات",
      keywords: ["حلويات","حلوى","باتيسري","patisserie","viennoiserie"],
      answer: "لدينا pâtisseries وviennoiseries وmillefeuille وalmond croissant وpistachio trompe-l’œil وblondie وmacarons والتارت والحلويات الفردية والكيك."
    },
    {
      id: "drinks",
      label: "المشروبات",
      keywords: ["مشروبات","قهوة","شاي","سموثي","smoothies"],
      answer: "لدينا القهوة والشاي المنزلي والـsmoothies والمشروبات المميزة."
    },
    {
      id: "location",
      label: "الموقع",
      keywords: ["عنوان","أين","فين","موقع","location"],
      answer: "العنوان: Résidence El Chourouk، Akid Lotfi، Oran 31000، Algeria. والـPlus Code هو PCF8+P4V."
    },
    {
      id: "contact",
      label: "التواصل",
      keywords: ["تواصل","هاتف","واتساب","whatsapp","contact"],
      answer: "يمكنك التواصل مع PASTEL عبر WhatsApp أو الهاتف أو البريد الإلكتروني."
    },
    {
      id: "prices",
      label: "الأسعار",
      keywords: ["سعر","أسعار","ثمن","prix","price"],
      answer: "الأسعار الكاملة غير مثبتة في قاعدة المعرفة الحالية، لذلك لن أخمّنها."
    }
  ],

  order: {
    apiEndpoint: "https://rdcodzowehzmwdxhztxe.supabase.co/functions/v1/pastel-order",
    customerRequired: false
  },

  reservation: {
    apiEndpoint: "",
    enabled: false
  },

  tts: {
    enabled: false,
    endpoint: "https://rdcodzowehzmwdxhztxe.supabase.co/functions/v1/pastel-tts-v2",
    provider: "msedge-tts",
    voice: "ar-DZ-AminaNeural",
    mode: "audio-frequency",
    note: "Real server-side Arabic TTS path. Uses Microsoft Edge Read Aloud through msedge-tts; no API key is required. Provider/service terms must be verified before paid customer rollout."
  }
};
