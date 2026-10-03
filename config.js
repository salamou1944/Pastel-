window.HOST_CONFIG = {
  brand: {
    name: "PASTEL PASTRY&COFFEE",
    badge: "PASTEL HOST · STANDARD 3D",
    eyebrow: "PASTEL PASTRY&COFFEE",
    title: "مرحباً.\nأنا هنا لخدمتك.",
    subtitle: "اسألني عن الأشياء التي نملك معلومات موثقة عنها. إذا لم تكن المعلومة مثبتة، لن أخمّن."
  },

  appearance: {
    accent: "#e8c99f",
    background: "#100c0a",
    panel: "#16100d"
  },

  host: {
    modelUrl: "https://raw.githubusercontent.com/met4citizen/TalkingHead/main/avatars/mpfb.glb",
    body: "M",
    mood: "neutral",
    view: "upper",
    source: "TalkingHead MPFB reference avatar (CC0); replace with customer-approved commercial GLB"
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
      answer: "PASTEL يقدم الفطور والغداء والعشاء والبرانش والمشروبات."
    },
    {
      id: "desserts",
      label: "الحلويات",
      answer: "لدينا pâtisseries وviennoiseries وmillefeuille وalmond croissant وpistachio trompe-l’œil وblondie وmacarons والتارت والحلويات الفردية والكيك."
    },
    {
      id: "drinks",
      label: "المشروبات",
      answer: "لدينا القهوة والشاي المنزلي والـsmoothies والمشروبات المميزة."
    },
    {
      id: "location",
      label: "الموقع",
      answer: "العنوان: Résidence El Chourouk، Akid Lotfi، Oran 31000، Algeria. والـPlus Code هو PCF8+P4V."
    },
    {
      id: "contact",
      label: "التواصل",
      answer: "يمكنك التواصل مع PASTEL عبر WhatsApp أو الهاتف أو البريد الإلكتروني."
    },
    {
      id: "prices",
      label: "الأسعار",
      answer: "الأسعار الكاملة غير مثبتة في قاعدة المعرفة الحالية، لذلك لن أخمّنها."
    }
  ],

  // Optional future server TTS. Leave disabled for a $0 static deployment.
  // When a customer has an approved TTS endpoint, configure it here and
  // connect it to the TalkingHead speakAudio/speakText adapter.
  tts: {
    enabled: false,
    endpoint: ""
  }
};
