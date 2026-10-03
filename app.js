const KB={name:"PASTEL PASTRY&COFFEE",address:"Résidence El Chourouk, Akid Lotfi, Oran 31000, Algeria",plusCode:"PCF8+P4V",phone:"+213 541 33 28 77",email:"sarl.pastel.pastry@gmail.com",services:["Breakfast","Lunch","Dinner","Brunch","Drinks"],menu:["pâtisseries","viennoiseries","millefeuille","almond croissant","pistachio trompe-l’œil","blondie","smoothies","coffee","homemade tea","signature drinks","macarons","tartes","individual desserts","cakes / signature cakes"]};
const messages=document.querySelector("#messages"),form=document.querySelector("#chatForm"),input=document.querySelector("#questionInput"),voiceStatus=document.querySelector("#voiceStatus");
function addMessage(text,who="bot"){const el=document.createElement("div");el.className="msg "+who;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight}
function answer(q){const x=q.toLowerCase();if(x.includes("تقدم")||x.includes("خدمات")||x.includes("service"))return "الخدمات المعتمدة في PASTEL: Breakfast, Lunch, Dinner, Brunch وDrinks.";if(x.includes("حلويات")||x.includes("menu")||x.includes("قائمة")||x.includes("كرواسون")||x.includes("مكرون")||x.includes("تارت"))return "من الأصناف المعتمدة: pâtisseries، viennoiseries، millefeuille، almond croissant، pistachio trompe-l’œil، blondie، macarons، tartes، individual desserts وcakes.";if(x.includes("مشروب")||x.includes("drink")||x.includes("قهوة")||x.includes("coffee")||x.includes("tea"))return "المتوفر ضمن المعرفة المعتمدة: smoothies، coffee، homemade tea وsignature drinks.";if(x.includes("فطور")||x.includes("برنش")||x.includes("breakfast")||x.includes("brunch"))return "PASTEL لديها ضمن الخدمات المعتمدة Breakfast وBrunch.";if(x.includes("غداء")||x.includes("عشاء")||x.includes("lunch")||x.includes("dinner"))return "PASTEL لديها ضمن الخدمات المعتمدة Lunch وDinner.";if(x.includes("أين")||x.includes("موقع")||x.includes("عنوان")||x.includes("where"))return "العنوان: Résidence El Chourouk, Akid Lotfi, Oran 31000, Algeria. Plus Code: PCF8+P4V.";if(x.includes("تواصل")||x.includes("هاتف")||x.includes("واتساب")||x.includes("phone"))return "الهاتف وWhatsApp: +213 541 33 28 77. البريد: sarl.pastel.pastry@gmail.com.";if(x.includes("سعر")||x.includes("price")||x.includes("prix"))return "لا أملك قائمة أسعار حالية موثقة، لذلك لن أخترع سعراً. يمكنك التواصل مع PASTEL مباشرة عبر WhatsApp أو الهاتف.";return "هذه المعلومة ليست ضمن قاعدة المعرفة الموثقة لدي حالياً، لذلك لن أخمّن. أستطيع مساعدتك في الخدمات، الأصناف المعروفة، الموقع وطرق التواصل مع PASTEL."}
function ask(q){if(!q)return;addMessage(q,"user");input.value="";setTimeout(()=>{const a=answer(q);addMessage(a);if("speechSynthesis"in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(a);u.lang="ar-DZ";speechSynthesis.speak(u)}},160)}
form.addEventListener("submit",e=>{e.preventDefault();ask(input.value.trim())});
document.querySelectorAll(".quick-pills [data-q]").forEach(b=>b.addEventListener("click",()=>ask(b.dataset.q)));
document.querySelector("#speakWelcome").addEventListener("click",()=>{if("speechSynthesis"in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance("مرحباً بك في باستيل. أنا مضيفك في باستيل. كيف يمكنني مساعدتك اليوم؟");u.lang="ar-DZ";speechSynthesis.speak(u)}});
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;const vb=document.querySelector("#voiceButton");if(!SpeechRecognition){vb.disabled=true;voiceStatus.textContent="التحدث الصوتي غير متاح في هذا المتصفح."}else{vb.addEventListener("click",()=>{const r=new SpeechRecognition();r.lang="ar-DZ";r.interimResults=false;r.onstart=()=>voiceStatus.textContent="أستمع إليك...";r.onerror=()=>voiceStatus.textContent="تعذر استخدام الميكروفون.";r.onend=()=>voiceStatus.textContent="يمكنك التحدث معي مرة أخرى.";r.onresult=e=>ask(e.results[0][0].transcript);r.start()})}


/* PASTEL 3D HOST — TalkingHead */
let pastelHead = null;
let pastelVoices = [];
const AVATAR_URL = "https://readyplayerme.github.io/visage/male.glb?morphTargets=ARKit,Oculus+Visemes,mouthOpen,mouthSmile,eyesClosed,eyesLookUp,eyesLookDown&textureSizeLimit=1024&textureFormat=png";

async function initPastel3DHost(){
  const node = document.querySelector("#avatar3d");
  const loading = document.querySelector("#avatarLoading");
  if(!node) return;
  try{
    const { TalkingHead } = await import("https://cdn.jsdelivr.net/gh/met4citizen/TalkingHead@1.7/modules/talkinghead.mjs");
    pastelHead = new TalkingHead(node,{
      cameraView:"upper",
      avatarSpeakingHeadMove:0.35,
      avatarListeningEyeContact:0.65,
      lipsyncModules:["en","fi","lt"]
    });
    await pastelHead.showAvatar({
      url: AVATAR_URL,
      body:"M",
      avatarMood:"neutral"
    });
    pastelHead.setView("upper",{cameraDistance:0.72,cameraY:0.02});
    pastelHead.start();
    loading?.classList.add("ready");
  }catch(error){
    console.error("PASTEL 3D Host failed:",error);
    if(loading) loading.innerHTML="<b>تعذر تحميل المضيف ثلاثي الأبعاد</b><small>سيبقى الحوار متاحاً</small>";
  }
}

function loadPastelVoices(){
  if(!("speechSynthesis" in window)) return;
  pastelVoices=speechSynthesis.getVoices();
}
if("speechSynthesis" in window){
  loadPastelVoices();
  speechSynthesis.addEventListener("voiceschanged",loadPastelVoices);
}
function speakPastel(text){
  if(!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  const ar=pastelVoices.filter(v=>/^ar/i.test(v.lang));
  const dz=ar.find(v=>/DZ/i.test(v.lang));
  const maleHint=ar.find(v=>/male|man|mohamed|ahmed|omar|youssef/i.test(v.name));
  u.voice=dz||maleHint||ar[0]||pastelVoices.find(v=>/^fr/i.test(v.lang))||null;
  u.lang=(u.voice&&u.voice.lang)||"ar-DZ";
  u.rate=0.92;
  u.pitch=0.88;
  u.volume=1;
  u.onstart=()=>{try{pastelHead?.playGesture("handup",1.4,false,500)}catch{}};
  speechSynthesis.speak(u);
}
window.speakPastel=speakPastel;
if(window.speechSynthesis){
  const originalAsk=window.ask;
}
document.querySelector("#speakWelcome")?.addEventListener("click",()=>speakPastel("مرحباً بك في باستيل. أنا مضيفك في باستيل. كيف يمكنني مساعدتك اليوم؟"));
initPastel3DHost();
