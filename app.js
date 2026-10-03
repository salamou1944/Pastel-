const KB={name:"PASTEL PASTRY&COFFEE",address:"Résidence El Chourouk, Akid Lotfi, Oran 31000, Algeria",plusCode:"PCF8+P4V",phone:"+213 541 33 28 77",email:"sarl.pastel.pastry@gmail.com",services:["Breakfast","Lunch","Dinner","Brunch","Drinks"],menu:["pâtisseries","viennoiseries","millefeuille","almond croissant","pistachio trompe-l’œil","blondie","smoothies","coffee","homemade tea","signature drinks","macarons","tartes","individual desserts","cakes / signature cakes"]};
const messages=document.querySelector("#messages"),form=document.querySelector("#chatForm"),input=document.querySelector("#questionInput"),voiceStatus=document.querySelector("#voiceStatus");
function addMessage(text,who="bot"){const el=document.createElement("div");el.className="msg "+who;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight}
function answerArabic(q){const x=q.toLowerCase();if(x.includes("تقدم")||x.includes("خدمات")||x.includes("service"))return "الخدمات المعتمدة في PASTEL: Breakfast, Lunch, Dinner, Brunch وDrinks.";if(x.includes("حلويات")||x.includes("menu")||x.includes("قائمة")||x.includes("كرواسون")||x.includes("مكرون")||x.includes("تارت"))return "من الأصناف المعتمدة: pâtisseries، viennoiseries، millefeuille، almond croissant، pistachio trompe-l’œil، blondie، macarons، tartes، individual desserts وcakes.";if(x.includes("مشروب")||x.includes("drink")||x.includes("قهوة")||x.includes("coffee")||x.includes("tea"))return "المتوفر ضمن المعرفة المعتمدة: smoothies، coffee، homemade tea وsignature drinks.";if(x.includes("فطور")||x.includes("برنش")||x.includes("breakfast")||x.includes("brunch"))return "PASTEL لديها ضمن الخدمات المعتمدة Breakfast وBrunch.";if(x.includes("غداء")||x.includes("عشاء")||x.includes("lunch")||x.includes("dinner"))return "PASTEL لديها ضمن الخدمات المعتمدة Lunch وDinner.";if(x.includes("أين")||x.includes("موقع")||x.includes("عنوان")||x.includes("where"))return "العنوان: Résidence El Chourouk, Akid Lotfi, Oran 31000, Algeria. Plus Code: PCF8+P4V.";if(x.includes("تواصل")||x.includes("هاتف")||x.includes("واتساب")||x.includes("phone"))return "الهاتف وWhatsApp: +213 541 33 28 77. البريد: sarl.pastel.pastry@gmail.com.";if(x.includes("سعر")||x.includes("price")||x.includes("prix"))return "لا أملك قائمة أسعار حالية موثقة، لذلك لن أخترع سعراً. يمكنك التواصل مع PASTEL مباشرة عبر WhatsApp أو الهاتف.";return "هذه المعلومة ليست ضمن قاعدة المعرفة الموثقة لدي حالياً، لذلك لن أخمّن. أستطيع مساعدتك في الخدمات، الأصناف المعروفة، الموقع وطرق التواصل مع PASTEL."}
function answer(q){
  if(pastelLanguage!=="fr") return answerArabic(q);
  const x=q.toLowerCase();
  if(x.includes("service")||x.includes("proposez")||x.includes("offrez")) return "Chez PASTEL, vous trouverez le petit-déjeuner, le déjeuner, le dîner, le brunch et les boissons.";
  if(x.includes("pâtisserie")||x.includes("croissant")||x.includes("macaron")||x.includes("tarte")||x.includes("dessert")||x.includes("menu")) return "Nous proposons notamment des pâtisseries, des viennoiseries, du millefeuille, des croissants aux amandes, des créations à la pistache, des blondies, des macarons, des tartes, des desserts individuels et des gâteaux signature.";
  if(x.includes("boisson")||x.includes("café")||x.includes("thé")||x.includes("drink")||x.includes("coffee")||x.includes("tea")) return "Pour les boissons, nous avons notamment des smoothies, du café, du thé maison et des boissons signature.";
  if(x.includes("petit-déjeuner")||x.includes("brunch")||x.includes("breakfast")) return "Oui. PASTEL propose le petit-déjeuner et le brunch.";
  if(x.includes("déjeuner")||x.includes("dîner")||x.includes("lunch")||x.includes("dinner")) return "Oui. PASTEL propose le déjeuner et le dîner.";
  if(x.includes("où")||x.includes("adresse")||x.includes("location")||x.includes("where")) return "Adresse : Résidence El Chourouk, Akid Lotfi, Oran 31000, Algérie. Plus Code : PCF8+P4V.";
  if(x.includes("contact")||x.includes("téléphone")||x.includes("whatsapp")||x.includes("phone")) return "Téléphone et WhatsApp : +213 541 33 28 77. E-mail : sarl.pastel.pastry@gmail.com.";
  if(x.includes("prix")||x.includes("price")) return "Je n’ai pas de liste de prix actuelle vérifiée, donc je ne vais pas inventer de prix. Vous pouvez contacter PASTEL directement par WhatsApp ou téléphone.";
  return "Cette information ne fait pas actuellement partie de ma base de connaissances vérifiée. Je préfère ne pas deviner. Je peux vous renseigner sur les services, les produits connus, l’adresse et les moyens de contact de PASTEL.";
}
function ask(q){if(!q)return;addMessage(q,"user");input.value="";setTimeout(()=>{const a=answer(q);addMessage(a);if(window.speakPastel)speakPastel(a);},160)}
form.addEventListener("submit",e=>{e.preventDefault();ask(input.value.trim())});
document.querySelectorAll(".quick-pills [data-q]").forEach(b=>b.addEventListener("click",()=>ask(b.dataset.q)));

const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;const vb=document.querySelector("#voiceButton");if(!SpeechRecognition){vb.disabled=true;voiceStatus.textContent="التحدث الصوتي غير متاح في هذا المتصفح."}else{vb.addEventListener("click",()=>{const r=new SpeechRecognition();r.lang=pastelLanguage==="fr"?"fr-FR":"ar-DZ";r.interimResults=false;r.onstart=()=>voiceStatus.textContent="أستمع إليك...";r.onerror=()=>voiceStatus.textContent="تعذر استخدام الميكروفون.";r.onend=()=>voiceStatus.textContent="يمكنك التحدث معي مرة أخرى.";r.onresult=e=>ask(e.results[0][0].transcript);r.start()})}


/* PASTEL 3D HOST — browser-native GLB viewer */
let pastelHead = null;
let pastelVoices = [];
let pastelLanguage = "ar";
function initPastel3DHost(){
  const model=document.querySelector("#pastelModel");
  const loading=document.querySelector("#avatarLoading");
  if(!model) return;
  const ready=()=>loading?.classList.add("ready");
  model.addEventListener("load",ready,{once:true});
  model.addEventListener("error",()=>{
    if(loading) loading.innerHTML="<b>تعذر تحميل المضيف ثلاثي الأبعاد</b><small>يمكنك استخدام الحوار مباشرة</small>";
  });
  if(model.loaded) ready();
}

function loadPastelVoices(){
  if(!("speechSynthesis" in window)) return;
  pastelVoices=speechSynthesis.getVoices();
}
if("speechSynthesis" in window){
  loadPastelVoices();
  speechSynthesis.addEventListener("voiceschanged",loadPastelVoices);
}
function animateArabicMouth(active){ return; }
function speakPastel(text){
  if(!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  window.__pastelSpeaking=false;
  animateArabicMouth(false);
  const u=new SpeechSynthesisUtterance(text);
  const pool=pastelVoices.filter(v=>pastelLanguage==="fr"?/^fr/i.test(v.lang):/^ar/i.test(v.lang));
  const preferred=pastelLanguage==="fr"
    ? (pool.find(v=>/fr-FR/i.test(v.lang)&&/Google|Microsoft|Thomas|Amelie|Audrey|Julie|Denise/i.test(v.name))
      ||pool.find(v=>/fr-FR/i.test(v.lang))
      ||pool.find(v=>/^fr/i.test(v.lang))
      ||pool[0])
    : (pool.find(v=>/ar-DZ/i.test(v.lang))
      ||pool.find(v=>/ar-SA/i.test(v.lang))
      ||pool.find(v=>/^ar/i.test(v.lang))
      ||pool[0]);
  u.voice=preferred||null;
  u.lang=(u.voice&&u.voice.lang)||(pastelLanguage==="fr"?"fr-FR":"ar-SA");
  u.rate=0.88;
  u.pitch=1.0;
  u.volume=1;
  u.onstart=()=>{
    window.__pastelSpeaking=true;
    animateArabicMouth(true);
    try{pastelHead?.setMood("happy");pastelHead?.playGesture("handup",1.4,false,500)}catch{}
  };
  u.onend=u.onerror=()=>{
    window.__pastelSpeaking=false;
    animateArabicMouth(false);
    try{pastelHead?.setMood("neutral")}catch{}
  };
  speechSynthesis.speak(u);
}
window.speakPastel=speakPastel;
if(window.speechSynthesis){
  const originalAsk=window.ask;
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{pastelLanguage=b.dataset.lang;document.querySelectorAll("[data-lang]").forEach(x=>x.classList.toggle("active",x.dataset.lang===pastelLanguage));if(input)input.placeholder=pastelLanguage==="fr"?"Écrivez votre question à l’employé PASTEL…":"اكتب سؤالك إلى موظف PASTEL…";if(vb&&SpeechRecognition)vb.textContent=pastelLanguage==="fr"?"Parlez-moi":"تحدث معي";}));
document.querySelector("#speakWelcome")?.addEventListener("click",()=>speakPastel(pastelLanguage==="fr"?"Bonjour et bienvenue chez PASTEL. Je suis votre hôte. Comment puis-je vous aider aujourd’hui ?":"مرحباً بك في باستيل. أنا مضيفك في باستيل. كيف يمكنني مساعدتك اليوم؟"));
initPastel3DHost();
