export type Lang = "en" | "hi";

/* ── Tour Steps ────────────────────────────────────────────── */
export const TOUR_STEPS: Record<Lang, { path: string; icon: string; title: string; message: string }[]> = {
  en: [
    { path: "/",                icon:"🏠", title:"Home",         message:"Welcome to The Milestone Sr. Sec. School – a CBSE-affiliated school in Kaithal, Haryana! The Home page shows our key highlights: 15+ years of excellence, 100% board pass rate, smart classrooms, experienced faculty, and vibrant campus life. Scroll down to explore admissions, stats, and milestones!" },
    { path: "/about/story",     icon:"📖", title:"Our Story",    message:"Every great school starts with a vision! Founded with a deep commitment to quality education and character building, Milestone has grown into one of the most trusted CBSE schools in Kaithal district. Our story is one of dedication – to our students, their families, and the community." },
    { path: "/about/directors", icon:"🎓", title:"Directors",    message:"Meet the visionary leaders behind The Milestone School! Our directors bring decades of experience in education. Under their leadership the school has achieved outstanding CBSE results, expanded infrastructure, and introduced smart classrooms and modern teaching methods." },
    { path: "/about/divisions", icon:"🏫", title:"Divisions",    message:"The Milestone School has well-defined academic divisions: Pre-Primary & Primary wings nurture curiosity through play-based learning; Middle School bridges childhood and adolescence; Senior Secondary (XI–XII) offers Science, Commerce, and Arts streams." },
    { path: "/about/tieups",    icon:"🤝", title:"Tie-Ups",      message:"Education thrives through collaboration! Our Tie-Ups page showcases partnerships with leading organizations, coaching institutes, tech providers, and community bodies. Career counseling, sports academy partnerships, and CBSE resource center connections keep students and teachers updated." },
    { path: "/academics",       icon:"📚", title:"Academics",    message:"The Academics section is the core of what we do! CBSE curriculum from Nursery to Class XII, NCERT textbooks supplemented with digital resources and practical experiments. Board exam preparation is our special strength!" },
    { path: "/facilities",      icon:"🏗️", title:"Facilities",  message:"Best-equipped school in Kaithal! Physics, Chemistry & Biology labs; Computer lab with latest tech; Smart classrooms with interactive whiteboards; Well-stocked library; Sports ground, basketball & volleyball courts; Art room, music room, and safe school bus transport." },
    { path: "/faculty",         icon:"👩‍🏫", title:"Faculty",  message:"Our incredible educators are selected for subject expertise and passion! Specialist teachers for every subject, great faculty-to-student ratio, and personalized attention ensure no child falls behind. Our teachers are mentors, role models, and friends!" },
    { path: "/achievements",    icon:"🏆", title:"Achievements", message:"Students have won academic, sports, cultural, and community service awards! CBSE board results consistently see students scoring above 90% with district and state toppers. Sports teams win inter-school competitions across Haryana." },
    { path: "/gallery",         icon:"🖼️", title:"Gallery",      message:"A visual celebration of life at Milestone! See vibrant classrooms, science experiments, cultural programs, Sports Day, Annual Day, and everyday school magic. Thank you for completing the tour – we hope to welcome you to the Milestone family!" },
  ],
  hi: [
    { path: "/",                icon:"🏠", title:"होम",          message:"द माइलस्टोन सी.सेक. स्कूल में आपका स्वागत है – कैथल, हरियाणा का CBSE मान्यता प्राप्त स्कूल! होम पेज पर हमारी मुख्य विशेषताएं देखें: 15+ वर्षों की उत्कृष्टता, 100% बोर्ड परिणाम, स्मार्ट क्लासरूम, अनुभवी शिक्षक और जीवंत कैंपस जीवन। प्रवेश, आंकड़े और उपलब्धियां देखने के लिए नीचे स्क्रॉल करें!" },
    { path: "/about/story",     icon:"📖", title:"हमारी कहानी", message:"हर महान स्कूल की शुरुआत एक सपने से होती है! गुणवत्तापूर्ण शिक्षा और चरित्र निर्माण की प्रतिबद्धता के साथ स्थापित, माइलस्टोन कैथल जिले के सबसे विश्वसनीय CBSE स्कूलों में से एक बन गया है। हमारी कहानी समर्पण की है – हमारे छात्रों, उनके परिवारों और समुदाय के प्रति।" },
    { path: "/about/directors", icon:"🎓", title:"निदेशक",       message:"माइलस्टोन स्कूल के दूरदर्शी नेताओं से मिलें! हमारे निदेशकों के पास शिक्षा में दशकों का अनुभव है। उनके नेतृत्व में स्कूल ने उत्कृष्ट CBSE परिणाम प्राप्त किए, बुनियादी ढांचे का विस्तार किया, और स्मार्ट क्लासरूम व आधुनिक शिक्षण पद्धतियां शुरू कीं।" },
    { path: "/about/divisions", icon:"🏫", title:"विभाग",        message:"माइलस्टोन स्कूल में सुव्यवस्थित शैक्षणिक विभाग हैं: प्री-प्राइमरी और प्राइमरी विंग खेल-आधारित शिक्षा से जिज्ञासा जगाते हैं; मिडिल स्कूल बचपन और किशोरावस्था को जोड़ता है; सीनियर सेकेंडरी (XI–XII) में विज्ञान, वाणिज्य और कला स्ट्रीम हैं।" },
    { path: "/about/tieups",    icon:"🤝", title:"टाई-अप्स",     message:"शिक्षा सहयोग से फलती-फूलती है! हमारा टाई-अप्स पेज प्रमुख संगठनों, कोचिंग संस्थानों और टेक प्रदाताओं के साथ साझेदारी दिखाता है। करियर काउंसलिंग, स्पोर्ट्स एकेडमी पार्टनरशिप और CBSE संसाधन केंद्र के संबंध छात्रों और शिक्षकों को अपडेट रखते हैं।" },
    { path: "/academics",       icon:"📚", title:"शैक्षणिक",     message:"शैक्षणिक अनुभाग हमारे काम का मूल है! नर्सरी से कक्षा XII तक CBSE पाठ्यक्रम, NCERT पाठ्यपुस्तकें, डिजिटल संसाधन और व्यावहारिक प्रयोग। बोर्ड परीक्षा तैयारी हमारी विशेष ताकत है!" },
    { path: "/facilities",      icon:"🏗️", title:"सुविधाएं",    message:"कैथल का सर्वश्रेष्ठ सुसज्जित स्कूल! भौतिकी, रसायन और जीव विज्ञान लैब; नवीनतम तकनीक के साथ कंप्यूटर लैब; इंटरैक्टिव व्हाइटबोर्ड के साथ स्मार्ट क्लासरूम; अच्छी तरह से भंडारित पुस्तकालय; खेल का मैदान, बास्केटबॉल और वॉलीबॉल कोर्ट; कला कक्ष, संगीत कक्ष और सुरक्षित स्कूल बस।" },
    { path: "/faculty",         icon:"👩‍🏫", title:"शिक्षक",   message:"हमारे अद्भुत शिक्षक विषय विशेषज्ञता और जुनून के लिए चुने जाते हैं! हर विषय के लिए विशेषज्ञ शिक्षक, अच्छा शिक्षक-छात्र अनुपात और व्यक्तिगत ध्यान सुनिश्चित करते हैं कि कोई बच्चा पीछे न रहे। हमारे शिक्षक मेंटर, आदर्श और मित्र हैं!" },
    { path: "/achievements",    icon:"🏆", title:"उपलब्धियां",  message:"छात्रों ने शैक्षणिक, खेल, सांस्कृतिक और सामुदायिक पुरस्कार जीते हैं! CBSE बोर्ड परिणामों में लगातार 90% से अधिक अंक, जिला और राज्य टॉपर। हरियाणा भर में इंटर-स्कूल प्रतियोगिताओं में जीत। माइलस्टोन छात्र हर जगह चमकते हैं!" },
    { path: "/gallery",         icon:"🖼️", title:"गैलरी",       message:"माइलस्टोन में जीवन का एक दृश्य उत्सव! जीवंत क्लासरूम, विज्ञान प्रयोग, सांस्कृतिक कार्यक्रम, खेल दिवस, वार्षिक दिवस देखें। छात्रों के चेहरों पर खुशी, लैब में युवा वैज्ञानिकों की एकाग्रता। टूर पूरी करने के लिए धन्यवाद – हम आपका माइलस्टोन परिवार में स्वागत करने की आशा करते हैं!" },
  ],
};

/* ── Chat Responses ────────────────────────────────────────── */
export const CHAT_RESPONSES: Record<Lang, { keywords: string[]; response: string }[]> = {
  en: [
    { keywords: ["admission","enroll","apply","join","enquiry","प्रवेश","दाखिला"],
      response: "📋 Admissions open for Session 2026–27 — Nursery to Class XII!\n\n📞 Call/WhatsApp: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Opp. Pawan Vatika, Khurana Road, Kaithal\n\nOr click \"Admissions Open\" in the top menu!" },
    { keywords: ["fee","fees","cost","charges","tuition","शुल्क","फीस"],
      response: "💰 For the complete fee structure and payment schedule, contact us directly:\n📞 +91 98125-74766\n✉️ themilestoneKtl@gmail.com\n\nOur admissions team will share a transparent breakdown." },
    { keywords: ["timing","time","schedule","hours","open","समय","कब"],
      response: "⏰ School Timings:\nMonday – Saturday: 7:30 AM – 2:30 PM\n\nClosed on Sundays and national holidays.\n\nOffice timings: 8:00 AM – 3:00 PM." },
    { keywords: ["cbse","board","affiliation","affiliated","curriculum"],
      response: "✅ Fully affiliated with CBSE, New Delhi!\n\nNCERT curriculum for Nursery to Class XII.\nBoard exams: Class X & XII (CBSE pattern)." },
    { keywords: ["class","stream","science","commerce","arts","subject","pcm","pcb","कक्षा"],
      response: "📚 Classes: Nursery to Class XII\n\nSenior Secondary (XI–XII) streams:\n• Science (PCM / PCB)\n• Commerce\n• Arts / Humanities\n\nAll with carefully chosen subject combinations!" },
    { keywords: ["faculty","teacher","staff","sir","ma'am","शिक्षक"],
      response: "👩‍🏫 Our faculty are highly qualified, experienced, and passionate!\n\nSubject specialists | Regular professional development | Great student ratio | Personalized attention.\n\nVisit our Faculty page to meet the team!" },
    { keywords: ["facility","facilities","lab","library","sports","computer","smart","bus","transport","सुविधा"],
      response: "🏗️ World-class facilities at Milestone:\n🔬 Science Labs (Physics, Chemistry, Biology)\n💻 Computer Lab\n🖥️ Smart Classrooms\n📚 Library\n⚽ Sports Ground\n🎨 Art & Music Rooms\n🚌 Safe School Bus Transport" },
    { keywords: ["location","address","where","kaithal","haryana","कहाँ","पता"],
      response: "📍 Address:\nOpp. Pawan Vatika, Khurana Road\nChiranjeev Colony, Kaithal, Haryana – 136027\n\nNear the Khurana Bypass — easy to find!" },
    { keywords: ["contact","phone","email","call","whatsapp","number","संपर्क"],
      response: "📞 Phone/WhatsApp: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n📍 Khurana Road, Kaithal, Haryana\n\n🕐 Mon–Sat: 8:00 AM – 3:00 PM" },
    { keywords: ["result","results","percentage","score","rank","topper","परिणाम"],
      response: "🏆 Outstanding CBSE Results every year!\n\n✅ 100% pass rate consistently\n⭐ Many students score above 90%\n🥇 District & State level toppers\n\nAcademic excellence is our hallmark!" },
    { keywords: ["tour","guide","explore","show","dikhao"],
      response: "🚀 Click the glowing 'Start Tour' button! I'll guide you through every page — Home, Academics, Facilities, Faculty, Achievements, Gallery, and more!" },
    { keywords: ["hello","hi","hey","namaste","hii","helo","नमस्ते"],
      response: "👋 Namaste! I'm Millie, your AI Guide for The Milestone Sr. Sec. School!\n\nI can help with admissions, fees, timings, facilities, academics, and more.\n\nOr click 'Start Tour' for a guided website tour! 🚀" },
    { keywords: ["achievement","award","prize","trophy","win","gold","medal"],
      response: "🏅 Our students win:\n📖 CBSE Board Exams — District & State toppers\n⚽ Inter-School Sports across Haryana\n🎭 Cultural Competitions\n🔬 Science Fairs & Quiz Bowls\n🏅 Gold at Chandigarh Open Skating Championship\n\nVisit our Achievements page for the full list!" },
    { keywords: ["transport","bus","van","pick","drop","vehicle","गाड़ी"],
      response: "🚌 Safe, reliable school bus transport covering all major areas of Kaithal!\n\nCall +91 98125-74766 for route details and timings." },
    { keywords: ["year","found","start","establish","history","कब","स्थापना"],
      response: "📅 The Milestone Sr. Sec. School was established with a vision to provide quality CBSE education in Kaithal.\n\n15+ years of excellence, trusted by hundreds of families!" },
  ],
  hi: [
    { keywords: ["admission","enroll","apply","join","enquiry","प्रवेश","दाखिला"],
      response: "📋 सत्र 2026–27 के लिए प्रवेश खुले हैं — नर्सरी से कक्षा XII तक!\n\n📞 कॉल/WhatsApp: +91 98125-74766\n✉️ ईमेल: themilestoneKtl@gmail.com\n📍 पवन वाटिका के सामने, खुराना रोड, कैथल\n\nया ऊपर मेनू में \"प्रवेश खुले हैं\" पर क्लिक करें!" },
    { keywords: ["fee","fees","cost","charges","tuition","शुल्क","फीस"],
      response: "💰 पूर्ण शुल्क संरचना और भुगतान कार्यक्रम के लिए सीधे संपर्क करें:\n📞 +91 98125-74766\n✉️ themilestoneKtl@gmail.com\n\nहमारी प्रवेश टीम पारदर्शी जानकारी साझा करेगी।" },
    { keywords: ["timing","time","schedule","hours","open","समय","कब"],
      response: "⏰ स्कूल का समय:\nसोमवार – शनिवार: सुबह 7:30 – दोपहर 2:30\n\nरविवार और राष्ट्रीय अवकाश पर बंद।\n\nऑफिस समय: सुबह 8:00 – दोपहर 3:00" },
    { keywords: ["cbse","board","affiliation","affiliated","curriculum","सीबीएसई","बोर्ड"],
      response: "✅ CBSE, नई दिल्ली से पूर्ण मान्यता प्राप्त!\n\nनर्सरी से कक्षा XII तक NCERT पाठ्यक्रम।\nबोर्ड परीक्षाएं: कक्षा X और XII (CBSE पैटर्न)।" },
    { keywords: ["class","stream","science","commerce","arts","subject","pcm","pcb","कक्षा","विषय"],
      response: "📚 कक्षाएं: नर्सरी से कक्षा XII तक\n\nसीनियर सेकेंडरी (XI–XII) स्ट्रीम:\n• विज्ञान (PCM / PCB)\n• वाणिज्य\n• कला / मानविकी\n\nसभी के साथ सावधानी से चुने गए विषय संयोजन!" },
    { keywords: ["faculty","teacher","staff","sir","शिक्षक","अध्यापक"],
      response: "👩‍🏫 हमारे शिक्षक अत्यधिक योग्य, अनुभवी और उत्साही हैं!\n\nविषय विशेषज्ञ | नियमित व्यावसायिक विकास | अच्छा छात्र अनुपात | व्यक्तिगत ध्यान।\n\nटीम से मिलने के लिए हमारे शिक्षक पेज पर जाएं!" },
    { keywords: ["facility","facilities","lab","library","sports","computer","smart","bus","transport","सुविधा","लैब","पुस्तकालय"],
      response: "🏗️ माइलस्टोन में विश्व स्तरीय सुविधाएं:\n🔬 विज्ञान लैब (भौतिकी, रसायन, जीव विज्ञान)\n💻 कंप्यूटर लैब\n🖥️ स्मार्ट क्लासरूम\n📚 पुस्तकालय\n⚽ खेल का मैदान\n🎨 कला और संगीत कक्ष\n🚌 सुरक्षित स्कूल बस" },
    { keywords: ["location","address","where","kaithal","haryana","कहाँ","पता"],
      response: "📍 पता:\nपवन वाटिका के सामने, खुराना रोड\nचिरंजीव कॉलोनी, कैथल, हरियाणा – 136027\n\nखुराना बाईपास के पास — ढूंढना आसान है!" },
    { keywords: ["contact","phone","email","call","whatsapp","number","संपर्क","फोन"],
      response: "📞 फोन/WhatsApp: +91 98125-74766\n✉️ ईमेल: themilestoneKtl@gmail.com\n📍 खुराना रोड, कैथल, हरियाणा\n\n🕐 सोम–शनि: सुबह 8:00 – दोपहर 3:00" },
    { keywords: ["result","results","percentage","score","rank","topper","परिणाम","रिजल्ट"],
      response: "🏆 हर साल उत्कृष्ट CBSE परिणाम!\n\n✅ लगातार 100% पास रेट\n⭐ कई छात्र 90% से अधिक अंक\n🥇 जिला और राज्य स्तर के टॉपर\n\nशैक्षणिक उत्कृष्टता हमारी पहचान है!" },
    { keywords: ["tour","guide","explore","show","dikhao","टूर","दिखाओ"],
      response: "🚀 चमकते 'टूर शुरू करें' बटन पर क्लिक करें! मैं आपको हर पेज दिखाऊंगी — होम, शैक्षणिक, सुविधाएं, शिक्षक, उपलब्धियां, गैलरी और बहुत कुछ!" },
    { keywords: ["hello","hi","hey","namaste","hii","helo","नमस्ते","हाय"],
      response: "👋 नमस्ते! मैं मिली हूं, द माइलस्टोन सी.सेक. स्कूल की AI गाइड!\n\nमैं प्रवेश, फीस, समय, सुविधाओं, शैक्षणिक जानकारी में मदद कर सकती हूं।\n\nगाइडेड वेबसाइट टूर के लिए 'टूर शुरू करें' पर क्लिक करें! 🚀" },
    { keywords: ["achievement","award","prize","trophy","win","gold","medal","उपलब्धि","पुरस्कार"],
      response: "🏅 हमारे छात्र जीतते हैं:\n📖 CBSE बोर्ड परीक्षाएं — जिला और राज्य टॉपर\n⚽ हरियाणा में इंटर-स्कूल खेल\n🎭 सांस्कृतिक प्रतियोगिताएं\n🔬 विज्ञान मेले और प्रश्नोत्तरी\n🏅 चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप में स्वर्ण\n\nपूरी सूची के लिए उपलब्धियां पेज देखें!" },
    { keywords: ["transport","bus","van","pick","drop","vehicle","गाड़ी","बस"],
      response: "🚌 कैथल के सभी प्रमुख क्षेत्रों को कवर करने वाला सुरक्षित, विश्वसनीय स्कूल बस!\n\nरूट विवरण और समय के लिए +91 98125-74766 पर कॉल करें।" },
    { keywords: ["year","found","start","establish","history","कब","स्थापना"],
      response: "📅 द माइलस्टोन सी.सेक. स्कूल की स्थापना कैथल में गुणवत्तापूर्ण CBSE शिक्षा प्रदान करने की दृष्टि से की गई थी।\n\n15+ वर्षों की उत्कृष्टता, सैकड़ों परिवारों का भरोसा!" },
  ],
};

/* ── Suggestions ─────────────────────────────────────────────── */
export const SUGGESTIONS_TEXT: Record<Lang, string[]> = {
  en: ["Admission enquiry?", "School timings?", "Board results?", "School location?", "Transport/bus?", "Contact details?", "Gallery & events?", "Fee structure?"],
  hi: ["प्रवेश जानकारी?", "स्कूल का समय?", "बोर्ड परिणाम?", "स्कूल की जगह?", "बस/ट्रांसपोर्ट?", "संपर्क विवरण?", "गैलरी और कार्यक्रम?", "शुल्क संरचना?"],
};

/* ── AI UI Strings ─────────────────────────────────────────────── */
export const UI: Record<Lang, Record<string, string>> = {
  en: {
    startTour:      "Start Tour",
    chatWithAI:     "Chat with AI",
    prev:           "Prev",
    next:           "Next",
    finish:         "Finish",
    pageOf:         "Page",
    of:             "of",
    placeholder:    "Ask me anything…",
    online:         "Online — Ready to help",
    quickQuestions: "Quick questions",
    millieTour:     "Millie — Website Tour",
    millieChat:     "Millie",
    aiSubtitle:     "AI GUIDE · MILESTONE SCHOOL",
    aiSubtitleTour: "AI GUIDE · MILESTONE SCHOOL",
    defaultReply:   "🤔 Great question! For more details:\n📞 Call: +91 98125-74766\n✉️ Email: themilestoneKtl@gmail.com\n\nOr start the guided tour to explore our website!",
    welcomeMsg:     "👋 Namaste! I'm Millie, your AI Guide!\n\nAsk me anything about The Milestone Sr. Sec. School — admissions, timings, facilities, academics, and more.",
  },
  hi: {
    startTour:      "टूर शुरू करें",
    chatWithAI:     "AI से बात करें",
    prev:           "पिछला",
    next:           "अगला",
    finish:         "समाप्त",
    pageOf:         "पेज",
    of:             "में से",
    placeholder:    "कुछ भी पूछें…",
    online:         "ऑनलाइन — मदद के लिए तैयार",
    quickQuestions: "त्वरित प्रश्न",
    millieTour:     "मिली — वेबसाइट टूर",
    millieChat:     "मिली",
    aiSubtitle:     "AI गाइड · माइलस्टोन स्कूल",
    aiSubtitleTour: "AI गाइड · माइलस्टोन स्कूल",
    defaultReply:   "🤔 बढ़िया सवाल! अधिक जानकारी के लिए:\n📞 कॉल: +91 98125-74766\n✉️ ईमेल: themilestoneKtl@gmail.com\n\nया हमारी वेबसाइट देखने के लिए गाइडेड टूर शुरू करें!",
    welcomeMsg:     "👋 नमस्ते! मैं मिली हूं, आपकी AI गाइड!\n\nद माइलस्टोन सी.सेक. स्कूल के बारे में कुछ भी पूछें — प्रवेश, समय, सुविधाएं, शैक्षणिक जानकारी और बहुत कुछ।",
  },
};

/* ── Site-wide Page Content ──────────────────────────────────── */
export const SITE: Record<Lang, SiteT> = {
  en: {
    navbar: {
      ticker: [
        "🎉 Admissions Open for Session 2026–27 — Limited Seats",
        "🏆 Our students won Gold at Chandigarh Open Skating Championship",
        "📢 CBSE Affiliated School · Nursery to Class XII · Kaithal, Haryana",
        "✨ 100% Pass Percentage · 15+ Years of Excellence",
      ],
      home: "Home",
      aboutUs: "About Us",
      aboutHeader: "About The Milestone",
      admissionsOpen: "Admissions Open",
      mobileAdmissions: "Admissions Open 2026–27",
      trusted: "Kaithal's most trusted CBSE school since 2008",
      address: "Khurana Rd, Chiranjeev Colony, Kaithal",
      navLinks: ["Academics", "Facilities", "Achievements", "Gallery"],
      aboutItems: [
        { name: "Our Story",     desc: "History, vision & values" },
        { name: "Our Directors", desc: "Leadership & management" },
        { name: "Our Faculty",   desc: "Meet our dedicated teachers" },
        { name: "Divisions",     desc: "Academic sections & wings" },
        { name: "Tie-ups",       desc: "Partnerships & collaborations" },
      ],
    },
    hero: {
      badge:    "Admissions Open — Session 2026–27",
      title1:   "The Milestone",
      title2:   "Sr. Sec. School",
      tagline:  "Where Every Child's Potential Becomes Their Greatest Achievement",
      cbse:     "CBSE Affiliated School",
      location: "Kaithal, Haryana",
      classes:  "Nursery – Class XII",
      apply:    "Apply Now",
      discover: "Discover More",
    },
    about: {
      label:   "About The Milestone",
      heading: "Shaping bright futures through",
      accent:  "quality education",
      body:    "Located in the heart of Kaithal, The Milestone Sr. Sec. School (CBSE) is a vibrant community where students explore, question, and grow — blending academic excellence with strong values and character building.",
      points:  [
        "Experienced & dedicated faculty",
        "Smart classrooms & modern infrastructure",
        "Strong moral values & discipline",
        "Rich extracurricular programs",
      ],
      badge1: "Years of",
      badge2: "Excellence",
    },
    stats: {
      label:   "Our Numbers",
      heading: "Trusted by families across Kaithal",
      items:   ["Years of Excellence", "Happy Students", "Qualified Teachers", "Pass Percentage"],
    },
    academics: {
      label:   "Academic Excellence",
      heading: "Nurturing intellect and",
      accent:  "curiosity",
      body:    "Our academic programs are designed to challenge students, foster critical thinking, and build a strong foundation for higher education.",
      items: [
        { title: "CBSE Curriculum",  desc: "Rigorous curriculum from Nursery to Class 12 following CBSE guidelines." },
        { title: "Smart Classrooms", desc: "Interactive digital boards and multimedia content to make learning engaging." },
        { title: "Diverse Streams",  desc: "PCM, PCB, Commerce, and Arts streams for 11th and 12th standard students." },
        { title: "English Medium",   desc: "Dedicated focus on English communication to prepare students for global opportunities." },
      ],
    },
    facilities: {
      label:   "Infrastructure",
      heading: "World-class facilities for holistic development",
      items: [
        { title: "Science Laboratories", desc: "Fully equipped Biology, Chemistry, and Physics labs for hands-on practical learning." },
        { title: "Digital Library",      desc: "Extensive collection of 4,000+ books with comfortable reading zones and digital resources." },
        { title: "Sports Complex",       desc: "Spacious outdoor playgrounds and indoor sports facilities for physical development." },
        { title: "Creative Arts",        desc: "Dedicated activity rooms for Dance, Music, Art, and various creative clubs." },
        { title: "Computer Labs",        desc: "Modern computer labs with high-speed internet to build essential digital skills." },
        { title: "Transport Network",    desc: "Safe and extensive school bus network covering Kaithal and surrounding areas." },
      ],
    },
    whyUs: {
      heading: "Why parents trust",
      accent:  "The Milestone",
      body:    "Choosing the right school is one of the most important decisions for your child. We provide an environment where children feel secure, valued, and inspired to reach their full potential.",
      reasons: [
        "Experienced and caring faculty",
        "State-of-the-art infrastructure",
        "Focus on values and character building",
        "Excellent academic track record",
        "Safe, structured, student-first campus",
        "Rich extracurricular programs",
      ],
      cta:     "Start Admission Process",
      badge1:  "100%",
      badge2:  "Focus on Growth",
    },
    faculty: {
      label:   "Our Mentors",
      heading: "Guiding lights of",
      accent:  "The Milestone",
      body:    "Our experienced educators are more than just teachers — they are mentors, facilitators, and role models deeply committed to every student's success.",
      team: [
        { name: "Mr. Atul Sharma",     role: "Principal",          bio: "A dedicated leader with years of experience in shaping young minds. Committed to nurturing a culture of academic excellence, values, and holistic development at The Milestone." },
        { name: "Mrs. Sulochana Sharma", role: "Managing Director",   bio: "The visionary founder and guiding force of The Milestone family, whose dedication to quality education has shaped the school's culture of excellence for over 15 years." },
        { name: "Ms. Hina Pahwa",      role: "Vice Principal",      bio: "A passionate educator and leader committed to fostering academic excellence, discipline, and a nurturing environment where every student grows with confidence." },
      ],
    },
    testimonials: {
      label:   "Testimonials",
      heading: "What Our Community Says",
      items: [
        { quote: "The transformation in my daughter since joining The Milestone is truly remarkable. Teachers build confidence alongside academics — every child feels valued here.", author: "Mrs. Anita Verma",       role: "Parent · Grade 8" },
        { quote: "We wanted a school with strong values and modern infrastructure. The Milestone exceeded every expectation. Smart classrooms have ignited my son's love for Science.", author: "Mr. Rakesh Aggarwal", role: "Parent · Grade 11" },
        { quote: "The personalized attention my children receive gives me immense peace of mind. The environment feels safe, nurturing, and deeply disciplined — exactly what we needed.", author: "Priya Sharma",         role: "Parent · Grade 5 & 9" },
        { quote: "Switching to The Milestone was the best decision before my board exams. The faculty's dedication helped me score brilliantly in 12th CBSE — I'm forever grateful.", author: "Aarav Gupta",           role: "Alumnus · Batch 2023" },
      ],
    },
    admissions: {
      label:           "Admissions 2026–2027",
      heading:         "Begin your child's",
      accent:          "journey with us",
      body:            "Admissions are now open for the upcoming academic session. We invite you to experience our campus, meet our faculty, and discover how we can help your child achieve their milestones.",
      processTitle:    "Admission Process",
      steps: [
        { title: "Submit Inquiry",                       desc: "Fill the form to express interest." },
        { title: "Campus Visit & Interaction",           desc: "Meet the counselor and take a campus tour." },
        { title: "Registration & Document Submission",   desc: "Complete the formal application." },
        { title: "Confirmation",                         desc: "Welcome to The Milestone family!" },
      ],
      formTitle:        "Admission Inquiry",
      parentName:       "Parent/Guardian Name *",
      studentName:      "Student Name *",
      classLabel:       "Class Applying For *",
      classPlaceholder: "Select a class",
      phone:            "Phone Number *",
      phonePlaceholder: "10-digit mobile number",
      email:            "Email Address (Optional)",
      emailPlaceholder: "Enter email",
      message:          "Any questions or messages?",
      msgPlaceholder:   "How can we help you?",
      submit:           "Submit Inquiry",
      submitting:       "Submitting...",
      disclaimer:       "By submitting this form, you agree to let our admissions team contact you.",
      toastTitle:       "Inquiry Submitted Successfully!",
      toastDesc:        "Thank you for your interest in The Milestone Sr. Sec. School. Our admissions team will contact you shortly.",
      parentPlaceholder:  "Enter parent name",
      studentPlaceholder: "Enter student name",
    },
    contact: {
      label:    "Get In Touch",
      heading:  "Visit us or",
      accent:   "reach out",
      body:     "We welcome you to visit our campus, meet our staff, and discover the Milestone difference firsthand.",
      mapsLink: "Open in Google Maps",
      cards: [
        { title: "Campus Location", lines: ["Opp. Pawan Vatika, Khurana Road,", "Kaithal, Haryana 136027, India"] },
        { title: "Phone Numbers",   lines: ["+91 98125-74766", "+91 93065-27660"] },
        { title: "Email",           lines: ["themilestoneKtl@gmail.com"] },
        { title: "Working Hours",   lines: ["Monday to Saturday", "7:30 AM – 2:30 PM"] },
      ],
    },
    footer: {
      tagline:          "Achieving milestones together. A trusted CBSE school in Kaithal dedicated to shaping bright futures through quality education and holistic development.",
      quickLinksTitle:  "Quick Links",
      academicsTitle:   "Academics",
      contactTitle:     "Contact Us",
      hours:            "Mon – Sat:",
      hoursVal:         "7:30 AM – 2:30 PM",
      copyright:        "The Milestone Sr. Sec. School, Kaithal. All rights reserved.",
      designedWith:     "Designed with ❤ for excellence in education",
      quickLinks: [
        { label: "About Us",               href: "/about" },
        { label: "Academics & Curriculum", href: "/academics" },
        { label: "Facilities & Campus",    href: "/facilities" },
        { label: "Faculty",                href: "/faculty" },
        { label: "Achievements",           href: "/achievements" },
      ],
      academics: [
        "CBSE Curriculum — Nursery to Class 12",
        "English Medium Instruction",
        "Streams: PCM, PCB, Commerce, Arts",
        "Smart Classrooms & Digital Labs",
        "Life Skills & Activity Programs",
      ],
    },
    highlights: {
      badge: "School Highlights",
      heading: "Celebrations, Achievements &",
      accent: "Campus Life",
      body: "From glittering farewell ceremonies to championship gold medals — life at The Milestone is full of memorable milestones.",
      videoLabels: ["School Event", "Campus Moments", "Student Activities"],
      schoolLabel: "The Milestone Sr. Sec. School",
    },
    newsEvents: {
      badge: "Happenings",
      heading: "News & Announcements",
      viewAll: "View All Updates",
      events: [
        { month: "Mar", day: "15", date: "Mar 15, 2024", title: "Admissions Open for 2026-2027", desc: "Registration for Nursery to Class 11 has begun. Visit the school office between 9 AM - 2 PM." },
        { month: "Apr", day: "10", date: "Apr 10, 2024", title: "Annual Science & Tech Exhibition", desc: "Students from classes 6 to 12 will showcase their innovative working models in the main auditorium." },
        { month: "Apr", day: "22", date: "Apr 22, 2024", title: "Parent-Teacher Meeting", desc: "First PTM of the academic session to discuss the curriculum roadmap and student goals." },
        { month: "May", day: "05", date: "May 05, 2024", title: "Inter-School Sports Meet", desc: "The Milestone will be hosting the district level basketball and athletics tournament." },
      ],
    },
    faq: {
      badge: "Common Questions",
      heading: "Frequently Asked Questions",
      body: "Find answers to common queries about admissions, curriculum, and campus life.",
      items: [
        { q: "What is the admission process at The Milestone?", a: "The admission process begins with filling out the inquiry form online or at the school office. This is followed by a campus visit, a brief interaction with the Principal/Counselor, and submission of previous academic records. Admissions are granted based on seat availability." },
        { q: "Which curriculum does the school follow?", a: "We are proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We strictly adhere to the CBSE curriculum from Nursery to Class 12, ensuring national-level standardized education." },
        { q: "What are the school timings?", a: "The school operates from Monday to Saturday. Timings are 7:30 AM to 2:30 PM. Saturdays might have modified timings or specific extracurricular focus depending on the grade." },
        { q: "Do you provide transport facilities?", a: "Yes, we have a fleet of safe, well-maintained yellow school buses covering Kaithal city and neighboring villages. All buses are equipped with safety features and are accompanied by an attendant." },
        { q: "What subjects are offered in Classes 11 and 12?", a: "We offer four main streams for Senior Secondary students: Medical (PCB), Non-Medical (PCM), Commerce, and Humanities (Arts), along with various elective subjects like Physical Education, Computer Science, and Fine Arts." },
        { q: "What extracurricular activities are available?", a: "We believe in holistic development. Students can participate in various indoor and outdoor sports, dance, music, art and craft, debating, and specialized club activities that run throughout the academic year." },
      ],
    },
  },

  /* ══════════════════════════════════════════════════════════ HINDI ══ */
  hi: {
    navbar: {
      ticker: [
        "🎉 सत्र 2026–27 के लिए प्रवेश खुले हैं — सीमित सीटें",
        "🏆 हमारे छात्रों ने चंडीगढ़ ओपन स्केटिंग चैम्पियनशिप में स्वर्ण पदक जीता",
        "📢 CBSE मान्यता प्राप्त स्कूल · नर्सरी से कक्षा XII · कैथल, हरियाणा",
        "✨ 100% पास प्रतिशत · 15+ वर्षों की उत्कृष्टता",
      ],
      home: "होम",
      aboutUs: "हमारे बारे में",
      aboutHeader: "माइलस्टोन के बारे में",
      admissionsOpen: "प्रवेश खुले हैं",
      mobileAdmissions: "प्रवेश खुले हैं 2026–27",
      trusted: "2008 से कैथल का सबसे भरोसेमंद CBSE स्कूल",
      address: "खुराना रोड, चिरंजीव कॉलोनी, कैथल",
      navLinks: ["शैक्षणिक", "सुविधाएं", "उपलब्धियां", "गैलरी"],
      aboutItems: [
        { name: "हमारी कहानी",  desc: "इतिहास, दृष्टि और मूल्य" },
        { name: "हमारे निदेशक", desc: "नेतृत्व और प्रबंधन" },
        { name: "हमारे शिक्षक", desc: "हमारे समर्पित शिक्षकों से मिलें" },
        { name: "विभाग",         desc: "शैक्षणिक खंड और शाखाएं" },
        { name: "टाई-अप्स",      desc: "साझेदारी और सहयोग" },
      ],
    },
    hero: {
      badge:    "प्रवेश खुले हैं — सत्र 2026–27",
      title1:   "द माइलस्टोन",
      title2:   "सी.सेक. स्कूल",
      tagline:  "जहाँ हर बच्चे की क्षमता उनकी सबसे बड़ी उपलब्धि बनती है",
      cbse:     "CBSE मान्यता प्राप्त स्कूल",
      location: "कैथल, हरियाणा",
      classes:  "नर्सरी – कक्षा XII",
      apply:    "अभी आवेदन करें",
      discover: "और जानें",
    },
    about: {
      label:   "माइलस्टोन के बारे में",
      heading: "गुणवत्तापूर्ण शिक्षा के माध्यम से",
      accent:  "उज्ज्वल भविष्य का निर्माण",
      body:    "कैथल के हृदय में स्थित, द माइलस्टोन सी.सेक. स्कूल (CBSE) एक जीवंत समुदाय है जहाँ छात्र खोज करते हैं, प्रश्न पूछते हैं और बढ़ते हैं — शैक्षणिक उत्कृष्टता को मजबूत मूल्यों और चरित्र निर्माण के साथ मिलाते हुए।",
      points:  [
        "अनुभवी और समर्पित शिक्षक",
        "स्मार्ट क्लासरूम और आधुनिक बुनियादी ढांचा",
        "मजबूत नैतिक मूल्य और अनुशासन",
        "समृद्ध पाठ्यक्रम सहगामी कार्यक्रम",
      ],
      badge1: "वर्षों की",
      badge2: "उत्कृष्टता",
    },
    stats: {
      label:   "हमारे आंकड़े",
      heading: "कैथल भर के परिवारों का भरोसा",
      items:   ["वर्षों की उत्कृष्टता", "खुश छात्र", "योग्य शिक्षक", "पास प्रतिशत"],
    },
    academics: {
      label:   "शैक्षणिक उत्कृष्टता",
      heading: "बुद्धि और",
      accent:  "जिज्ञासा का पोषण",
      body:    "हमारे शैक्षणिक कार्यक्रम छात्रों को चुनौती देने, आलोचनात्मक सोच को बढ़ावा देने और उच्च शिक्षा के लिए मजबूत आधार बनाने के लिए डिज़ाइन किए गए हैं।",
      items: [
        { title: "CBSE पाठ्यक्रम",   desc: "CBSE दिशानिर्देशों के अनुसार नर्सरी से कक्षा 12 तक कठोर पाठ्यक्रम।" },
        { title: "स्मार्ट क्लासरूम", desc: "सीखने को आकर्षक बनाने के लिए इंटरैक्टिव डिजिटल बोर्ड और मल्टीमीडिया सामग्री।" },
        { title: "विविध स्ट्रीम",    desc: "11वीं और 12वीं के छात्रों के लिए PCM, PCB, वाणिज्य और कला स्ट्रीम।" },
        { title: "अंग्रेजी माध्यम",  desc: "वैश्विक अवसरों के लिए छात्रों को तैयार करने हेतु अंग्रेजी संवाद पर विशेष ध्यान।" },
      ],
    },
    facilities: {
      label:   "बुनियादी ढांचा",
      heading: "समग्र विकास के लिए विश्वस्तरीय सुविधाएं",
      items: [
        { title: "विज्ञान प्रयोगशालाएं", desc: "जीव विज्ञान, रसायन और भौतिकी की पूरी तरह सुसज्जित लैब।" },
        { title: "डिजिटल पुस्तकालय",     desc: "आरामदायक पठन क्षेत्रों और डिजिटल संसाधनों के साथ 4,000+ पुस्तकों का विशाल संग्रह।" },
        { title: "खेल परिसर",            desc: "शारीरिक विकास के लिए विशाल आउटडोर और इनडोर खेल सुविधाएं।" },
        { title: "रचनात्मक कला",          desc: "नृत्य, संगीत, कला और विभिन्न रचनात्मक क्लबों के लिए समर्पित कमरे।" },
        { title: "कंप्यूटर लैब",          desc: "आवश्यक डिजिटल कौशल बनाने के लिए हाई-स्पीड इंटरनेट के साथ आधुनिक कंप्यूटर लैब।" },
        { title: "परिवहन नेटवर्क",        desc: "कैथल और आसपास के क्षेत्रों को कवर करने वाला सुरक्षित और व्यापक स्कूल बस नेटवर्क।" },
      ],
    },
    whyUs: {
      heading: "माता-पिता क्यों करते हैं",
      accent:  "माइलस्टोन पर भरोसा",
      body:    "सही स्कूल चुनना आपके बच्चे के लिए सबसे महत्वपूर्ण निर्णयों में से एक है। हम एक ऐसा वातावरण प्रदान करते हैं जहाँ बच्चे सुरक्षित, मूल्यवान और अपनी पूरी क्षमता तक पहुँचने के लिए प्रेरित महसूस करते हैं।",
      reasons: [
        "अनुभवी और देखभाल करने वाले शिक्षक",
        "अत्याधुनिक बुनियादी ढांचा",
        "मूल्यों और चरित्र निर्माण पर ध्यान",
        "उत्कृष्ट शैक्षणिक ट्रैक रिकॉर्ड",
        "सुरक्षित, व्यवस्थित, छात्र-प्रथम कैंपस",
        "समृद्ध पाठ्यक्रम सहगामी कार्यक्रम",
      ],
      cta:     "प्रवेश प्रक्रिया शुरू करें",
      badge1:  "100%",
      badge2:  "विकास पर ध्यान",
    },
    faculty: {
      label:   "हमारे मार्गदर्शक",
      heading: "का प्रकाश",
      accent:  "माइलस्टोन",
      body:    "हमारे अनुभवी शिक्षक केवल अध्यापक नहीं हैं — वे मेंटर, सूत्रधार और आदर्श हैं जो हर छात्र की सफलता के लिए गहराई से प्रतिबद्ध हैं।",
      team: [
        { name: "श्री अतुल शर्मा",   role: "प्राचार्य",               bio: "युवा मन को आकार देने के वर्षों के अनुभव के साथ एक समर्पित नेता। माइलस्टोन में शैक्षणिक उत्कृष्टता, मूल्यों और समग्र विकास की संस्कृति को बढ़ावा देने के लिए प्रतिबद्ध।" },
        { name: "श्रीमती सुलोचना शर्मा", role: "मैनेजिंग डायरेक्टर",   bio: "माइलस्टोन परिवार की दूरदर्शी संस्थापक और मार्गदर्शक शक्ति, जिनकी गुणवत्तापूर्ण शिक्षा के प्रति समर्पण ने 15 वर्षों से अधिक समय से स्कूल की उत्कृष्टता की संस्कृति को आकार दिया है।" },
        { name: "सुश्री हिना पाहवा",  role: "उप-प्राचार्य",              bio: "एक उत्साही शिक्षक और नेता जो अकादमिक उत्कृष्टता, अनुशासन और एक पोषणकारी वातावरण को बढ़ावा देने के लिए प्रतिबद्ध हैं जहाँ हर छात्र आत्मविश्वास के साथ आगे बढ़े।" },
      ],
    },
    testimonials: {
      label:   "अभिभावकों के विचार",
      heading: "हमारा समुदाय क्या कहता है",
      items: [
        { quote: "माइलस्टोन में शामिल होने के बाद मेरी बेटी में जो बदलाव आया है वह वाकई놀라वना है। शिक्षक शैक्षणिक के साथ-साथ आत्मविश्वास भी बढ़ाते हैं — यहाँ हर बच्चा मूल्यवान महसूस करता है।", author: "श्रीमती अनीता वर्मा",       role: "अभिभावक · कक्षा 8" },
        { quote: "हम एक ऐसे स्कूल की तलाश में थे जिसमें मजबूत मूल्य और आधुनिक बुनियादी ढांचा हो। माइलस्टोन ने हर उम्मीद से बढ़कर प्रदर्शन किया। स्मार्ट क्लासरूम ने मेरे बेटे के विज्ञान के प्रति प्रेम को जगाया।", author: "श्री राकेश अग्रवाल",        role: "अभिभावक · कक्षा 11" },
        { quote: "मेरे बच्चों को जो व्यक्तिगत ध्यान मिलता है वह मुझे अत्यंत मानसिक शांति देता है। वातावरण सुरक्षित, पोषणकारी और गहरे अनुशासित लगता है — ठीक वही जो हमें चाहिए था।", author: "प्रिया शर्मा",                 role: "अभिभावक · कक्षा 5 और 9" },
        { quote: "बोर्ड परीक्षाओं से पहले माइलस्टोन में आना सबसे अच्छा निर्णय था। शिक्षकों के समर्पण ने मुझे 12वीं CBSE में शानदार अंक दिलाए — मैं हमेशा आभारी रहूँगा।", author: "आरव गुप्ता",                  role: "पूर्व छात्र · बैच 2023" },
      ],
    },
    admissions: {
      label:           "प्रवेश 2026–2027",
      heading:         "अपने बच्चे की",
      accent:          "यात्रा हमारे साथ शुरू करें",
      body:            "आगामी शैक्षणिक सत्र के लिए प्रवेश अब खुले हैं। हम आपको हमारे कैंपस का अनुभव करने, हमारे शिक्षकों से मिलने और यह जानने के लिए आमंत्रित करते हैं कि हम आपके बच्चे को उनके माइलस्टोन हासिल करने में कैसे मदद कर सकते हैं।",
      processTitle:    "प्रवेश प्रक्रिया",
      steps: [
        { title: "जांच जमा करें",               desc: "रुचि व्यक्त करने के लिए फॉर्म भरें।" },
        { title: "कैंपस भ्रमण और बातचीत",        desc: "काउंसलर से मिलें और कैंपस टूर लें।" },
        { title: "पंजीकरण और दस्तावेज़ जमा",     desc: "औपचारिक आवेदन पूरा करें।" },
        { title: "पुष्टि",                        desc: "माइलस्टोन परिवार में आपका स्वागत है!" },
      ],
      formTitle:        "प्रवेश जांच",
      parentName:       "अभिभावक/संरक्षक का नाम *",
      studentName:      "छात्र का नाम *",
      classLabel:       "जिस कक्षा के लिए आवेदन *",
      classPlaceholder: "कक्षा चुनें",
      phone:            "फोन नंबर *",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर",
      email:            "ईमेल पता (वैकल्पिक)",
      emailPlaceholder: "ईमेल दर्ज करें",
      message:          "कोई प्रश्न या संदेश?",
      msgPlaceholder:   "हम आपकी कैसे मदद कर सकते हैं?",
      submit:           "जांच जमा करें",
      submitting:       "जमा हो रहा है...",
      disclaimer:       "यह फॉर्म जमा करके, आप हमारी प्रवेश टीम को आपसे संपर्क करने की अनुमति देते हैं।",
      toastTitle:       "जांच सफलतापूर्वक जमा हो गई!",
      toastDesc:        "द माइलस्टोन सी.सेक. स्कूल में आपकी रुचि के लिए धन्यवाद। हमारी प्रवेश टीम शीघ्र ही आपसे संपर्क करेगी।",
      parentPlaceholder:  "अभिभावक का नाम दर्ज करें",
      studentPlaceholder: "छात्र का नाम दर्ज करें",
    },
    contact: {
      label:    "संपर्क करें",
      heading:  "हमसे मिलें या",
      accent:   "संपर्क करें",
      body:     "हम आपको हमारे कैंपस आने, हमारे स्टाफ से मिलने और माइलस्टोन का अंतर खुद अनुभव करने के लिए स्वागत करते हैं।",
      mapsLink: "Google Maps में खोलें",
      cards: [
        { title: "कैंपस स्थान",   lines: ["पवन वाटिका के सामने, खुराना रोड,", "कैथल, हरियाणा 136027, भारत"] },
        { title: "फोन नंबर",      lines: ["+91 98125-74766", "+91 93065-27660"] },
        { title: "ईमेल",          lines: ["themilestoneKtl@gmail.com"] },
        { title: "काम के घंटे",   lines: ["सोमवार से शनिवार", "सुबह 7:30 – दोपहर 2:30"] },
      ],
    },
    footer: {
      tagline:          "साथ मिलकर माइलस्टोन हासिल करना। कैथल में एक भरोसेमंद CBSE स्कूल जो गुणवत्तापूर्ण शिक्षा और समग्र विकास के माध्यम से उज्ज्वल भविष्य बनाने के लिए समर्पित है।",
      quickLinksTitle:  "त्वरित लिंक",
      academicsTitle:   "शैक्षणिक",
      contactTitle:     "संपर्क करें",
      hours:            "सोम – शनि:",
      hoursVal:         "सुबह 7:30 – दोपहर 2:30",
      copyright:        "द माइलस्टोन सी.सेक. स्कूल, कैथल। सर्वाधिकार सुरक्षित।",
      designedWith:     "शिक्षा में उत्कृष्टता के लिए ❤ के साथ डिज़ाइन किया गया",
      quickLinks: [
        { label: "हमारे बारे में",     href: "/about" },
        { label: "शैक्षणिक और पाठ्यक्रम", href: "/academics" },
        { label: "सुविधाएं और कैंपस",  href: "/facilities" },
        { label: "शिक्षक",             href: "/faculty" },
        { label: "उपलब्धियां",         href: "/achievements" },
      ],
      academics: [
        "CBSE पाठ्यक्रम — नर्सरी से कक्षा 12",
        "अंग्रेजी माध्यम शिक्षण",
        "स्ट्रीम: PCM, PCB, वाणिज्य, कला",
        "स्मार्ट क्लासरूम और डिजिटल लैब",
        "जीवन कौशल और गतिविधि कार्यक्रम",
      ],
    },
    highlights: {
      badge: "स्कूल हाइलाइट्स",
      heading: "उत्सव, उपलब्धियां और",
      accent: "कैंपस जीवन",
      body: "चमकदार विदाई समारोहों से लेकर चैम्पियनशिप स्वर्ण पदकों तक — माइलस्टोन में जीवन यादगार पलों से भरा है।",
      videoLabels: ["स्कूल कार्यक्रम", "कैंपस के पल", "छात्र गतिविधियां"],
      schoolLabel: "द माइलस्टोन सी.सेक. स्कूल",
    },
    newsEvents: {
      badge: "गतिविधियां",
      heading: "समाचार और घोषणाएं",
      viewAll: "सभी अपडेट देखें",
      events: [
        { month: "मार्च", day: "15", date: "15 मार्च 2024", title: "2026-2027 के लिए प्रवेश खुले", desc: "नर्सरी से कक्षा 11 तक पंजीकरण शुरू हो गया है। स्कूल कार्यालय में सुबह 9 बजे से दोपहर 2 बजे के बीच आएं।" },
        { month: "अप्रैल", day: "10", date: "10 अप्रैल 2024", title: "वार्षिक विज्ञान और तकनीक प्रदर्शनी", desc: "कक्षा 6 से 12 के छात्र मुख्य सभागार में अपने नवाचारी कार्यशील मॉडल प्रस्तुत करेंगे।" },
        { month: "अप्रैल", day: "22", date: "22 अप्रैल 2024", title: "अभिभावक-शिक्षक बैठक", desc: "शैक्षणिक सत्र की पहली PTM, जिसमें पाठ्यक्रम रोडमैप और छात्र लक्ष्यों पर चर्चा होगी।" },
        { month: "मई", day: "05", date: "05 मई 2024", title: "अंतर-विद्यालय खेल प्रतियोगिता", desc: "द माइलस्टोन जिला स्तरीय बास्केटबॉल और एथलेटिक्स टूर्नामेंट की मेजबानी करेगा।" },
      ],
    },
    faq: {
      badge: "सामान्य प्रश्न",
      heading: "अक्सर पूछे जाने वाले प्रश्न",
      body: "प्रवेश, पाठ्यक्रम और कैंपस जीवन से संबंधित सामान्य प्रश्नों के उत्तर यहां पाएं।",
      items: [
        { q: "द माइलस्टोन में प्रवेश प्रक्रिया क्या है?", a: "प्रवेश प्रक्रिया ऑनलाइन या स्कूल कार्यालय में जांच फॉर्म भरने से शुरू होती है। इसके बाद कैंपस विजिट, प्रिंसिपल/काउंसलर के साथ संक्षिप्त बातचीत और पिछले शैक्षणिक रिकॉर्ड जमा करना होता है। प्रवेश सीट उपलब्धता के आधार पर दिया जाता है।" },
        { q: "स्कूल कौन सा पाठ्यक्रम अपनाता है?", a: "हम केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE), नई दिल्ली से गर्व के साथ संबद्ध हैं। हम नर्सरी से कक्षा 12 तक CBSE पाठ्यक्रम का सख्ती से पालन करते हैं, जिससे राष्ट्रीय स्तर की मानकीकृत शिक्षा सुनिश्चित होती है।" },
        { q: "स्कूल का समय क्या है?", a: "स्कूल सोमवार से शनिवार तक चलता है। समय सुबह 7:30 बजे से दोपहर 2:30 बजे तक है। शनिवार को ग्रेड के आधार पर संशोधित समय या विशेष पाठ्येतर गतिविधियां हो सकती हैं।" },
        { q: "क्या आप परिवहन सुविधाएं प्रदान करते हैं?", a: "हां, हमारे पास कैथल शहर और आसपास के गांवों को कवर करने वाली सुरक्षित, अच्छी तरह से रखी गई पीली स्कूल बसों का एक बेड़ा है। सभी बसें सुरक्षा सुविधाओं से लैस हैं और उनके साथ एक परिचर होता है।" },
        { q: "कक्षा 11 और 12 में कौन से विषय उपलब्ध हैं?", a: "हम वरिष्ठ माध्यमिक छात्रों के लिए चार मुख्य स्ट्रीम प्रदान करते हैं: मेडिकल (PCB), नॉन-मेडिकल (PCM), वाणिज्य और मानविकी (कला), साथ ही शारीरिक शिक्षा, कंप्यूटर विज्ञान और ललित कला जैसे वैकल्पिक विषय।" },
        { q: "कौन सी पाठ्येतर गतिविधियां उपलब्ध हैं?", a: "हम समग्र विकास में विश्वास करते हैं। छात्र विभिन्न इनडोर और आउटडोर खेल, नृत्य, संगीत, कला और शिल्प, वाद-विवाद और पूरे शैक्षणिक वर्ष चलने वाली विशेष क्लब गतिविधियों में भाग ले सकते हैं।" },
      ],
    },
  },
};

/* ── TypeScript shape ─────────────────────────────────────── */
interface SiteT {
  navbar: {
    ticker: string[];
    home: string;
    aboutUs: string;
    aboutHeader: string;
    admissionsOpen: string;
    mobileAdmissions: string;
    trusted: string;
    address: string;
    navLinks: string[];
    aboutItems: { name: string; desc: string }[];
  };
  hero: { badge: string; title1: string; title2: string; tagline: string; cbse: string; location: string; classes: string; apply: string; discover: string };
  about: { label: string; heading: string; accent: string; body: string; points: string[]; badge1: string; badge2: string };
  stats: { label: string; heading: string; items: string[] };
  academics: { label: string; heading: string; accent: string; body: string; items: { title: string; desc: string }[] };
  facilities: { label: string; heading: string; items: { title: string; desc: string }[] };
  whyUs: { heading: string; accent: string; body: string; reasons: string[]; cta: string; badge1: string; badge2: string };
  faculty: { label: string; heading: string; accent: string; body: string; team: { name: string; role: string; bio: string }[] };
  testimonials: { label: string; heading: string; items: { quote: string; author: string; role: string }[] };
  admissions: {
    label: string; heading: string; accent: string; body: string; processTitle: string;
    steps: { title: string; desc: string }[];
    formTitle: string; parentName: string; studentName: string; classLabel: string; classPlaceholder: string;
    phone: string; phonePlaceholder: string; email: string; emailPlaceholder: string;
    message: string; msgPlaceholder: string; submit: string; submitting: string; disclaimer: string;
    toastTitle: string; toastDesc: string; parentPlaceholder: string; studentPlaceholder: string;
  };
  contact: { label: string; heading: string; accent: string; body: string; mapsLink: string; cards: { title: string; lines: string[] }[] };
  footer: {
    tagline: string; quickLinksTitle: string; academicsTitle: string; contactTitle: string;
    hours: string; hoursVal: string; copyright: string; designedWith: string;
    quickLinks: { label: string; href: string }[];
    academics: string[];
  };
  highlights: { badge: string; heading: string; accent: string; body: string; videoLabels: string[]; schoolLabel: string };
  newsEvents: { badge: string; heading: string; viewAll: string; events: { month: string; day: string; date: string; title: string; desc: string }[] };
  faq: { badge: string; heading: string; body: string; items: { q: string; a: string }[] };
}
