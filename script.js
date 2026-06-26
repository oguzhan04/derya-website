(function () {
  var STORAGE_KEY = "derya-lang";

  var STRINGS = {
    en: {
      meta_description:
        "Derya — AI-native freight forwarding. Ocean, air, and road logistics with customs clearance on both ends, quoted with AI precision and speed.",
      page_title: "Derya | AI-Native Freight Forwarding",
      skip_link: "Skip to content",
      logo_aria: "Derya home",
      logo_forwarding: "Forwarding",
      lang_group_aria: "Language",
      nav_aria: "Primary",
      menu: "Menu",
      nav_services: "Services",
      nav_why: "Why us",
      nav_process: "Process",
      nav_quote: "Get a quote",
      transport_strip_aria: "Freight service modes: ocean, air, road, and customs",
      transport_strip_label: "Modes we cover",
      strip_ocean: "Ocean",
      strip_air: "Air",
      strip_road: "Road",
      strip_customs: "Customs",
      hero_img_alt: "Cargo vessel loaded with shipping containers alongside a container terminal",
      hero_photo_caption: "Ocean remains where most global tonnage moves — we align sailings, space, and handovers.",
      media_band_headline: "We quoted first on 100% of RFQs received.",
      media_band_sub:
        "Our agentic workflow is online 24/7, delivering service faster than traditional forwarders while still using their trusted shipping backend.",
      media_stats_aria: "How we run active shipments",
      media_stat_1: "Named desk & 24/7 escalation",
      media_stat_2: "Documented SOPs & handoffs",
      media_stat_3: "Single owner per file end-to-end",
      card_img_ocean_alt: "Stacked shipping containers at a port",
      card_img_air_alt: "Aircraft used for air freight operations",
      card_img_road_alt: "Commercial truck on a highway for road freight",
      card_img_customs_alt: "Warehouse and distribution handling",
      why_img_alt: "Aerial view of a busy container terminal",
      photo_credit_html:
        'Photos from <a href="https://unsplash.com" rel="noopener noreferrer" target="_blank">Unsplash</a> (Unsplash License).',
      hero_eyebrow: "International freight & customs",
      hero_title_1: "The first AI Native",
      hero_title_2: "freight forwarder.",
      hero_lead: "End-to-end freight forwarding with AI precision and speed.",
      hero_cta_primary: "Request a quote",
      hero_cta_secondary: "Explore services",
      sr_coverage: "Coverage",
      sr_support: "Support",
      sr_focus: "Focus",
      stat_lanes: "trade lanes",
      stat_desk: "operations desk",
      stat_iso_strong: "ISO-minded",
      stat_processes: "processes",
      panel_shipment: "Shipment",
      panel_transit: "In transit",
      panel_route: "SHA → LAX · Ocean FCL",
      panel_meta: "ETA Apr 18 · Import customs pre-filed",
      panel_next: "Next milestone",
      panel_milestone: "Port discharge & devanning",
      sec_services_eyebrow: "What we offer",
      sec_services_title: "Three ways we move freight forward",
      sec_services_desc:
        "Three ways Derya moves freight forward — for shippers, for forwarders, and for the deals that need capital behind them.",
      svc_freight_title: "Freight",
      svc_freight_text:
        "End-to-end freight forwarding by ocean, air, and road — quoted with AI precision and run on the trusted carrier backend you already rely on. From booking to customs to final delivery, you get one accountable owner per file.",
      svc_forwarders_title: "For forwarders",
      svc_forwarders_text:
        "Logistics that scales with your supply chain — without the overhead. Other freight forwarders use Derya as an agentic back office to extend their coverage and quote more lanes, faster and more cheaply than building the desk in-house. Your brand stays on the front; our AI and carrier network do the heavy lifting behind it.",
      svc_financing_title: "Freight financing",
      svc_financing_text:
        "Big deal, tight cash flow? If you're a freight forwarder that needs financing to win or fulfill a large shipment, we can contribute capital to get it moving — and share in the upside. Tell us about the deal and we'll structure something that works.",
      svc_financing_btn: "Speak to us →",
      ff_eyebrow: "The basics",
      ff_title: "What is freight forwarding?",
      ff_desc:
        "In plain terms: your cargo travels in three legs — and clears customs on both ends.",
      ff_n1_t: "Origin",
      ff_n1_s: "Your warehouse or factory",
      ff_n2_t: "Origin port",
      ff_n2_s: "Booked, loaded & sailed",
      ff_n3_t: "Destination port",
      ff_n3_s: "Arrived & unloaded",
      ff_n4_t: "Destination",
      ff_n4_s: "Final delivery address",
      ff_export: "Export customs",
      ff_import: "Import customs",
      ff_leg1: "First mile · road pickup",
      ff_leg2: "Main carriage · ocean / air",
      ff_leg3: "Last mile · road delivery",
      card_ocean_title: "Ocean freight",
      card_ocean_text:
        "FCL and LCL programs with predictable sailing schedules and space commitments on key lanes.",
      card_air_title: "Air freight",
      card_air_text:
        "Express and economy uplift options for high-value and time-sensitive cargo, with full visibility.",
      card_road_title: "Road & distribution",
      card_road_text:
        "Regional trucking, cross-border moves, and last-mile coordination across North America and beyond.",
      card_customs_title: "Customs & compliance",
      card_customs_text:
        "Classification support, filings, and audit-ready records aligned with your internal controls.",
      why_eyebrow: "Why Derya",
      why_title: "Built for operators who need answers, not excuses",
      why_desc:
        "We combine structured processes with direct access to specialists — so when something shifts at origin or destination, you hear it first and get options fast.",
      why_li1: "Named contacts for your account, not anonymous queues",
      why_li2: "Exception playbooks for delays, rollovers, and inspections",
      why_li3: "Reporting that fits finance and operations, not generic templates",
      quote_body:
        "“We switched to a forwarding partner that treats visibility as a default — not an add-on. That single change reduced our internal follow-up time dramatically.”",
      quote_footer: "— Operations Director, <cite>Industrial goods</cite>",
      proc_eyebrow: "How it works",
      proc_title: "From booking to proof of delivery",
      proc_desc:
        "A disciplined path from commercial booking through in-transit control to customs release — so accountability stays visible at every milestone.",
      step1_title: "Scope & routing",
      step1_text: "We align on cargo, incoterms, timelines, and compliance needs.",
      step2_title: "Booking & docs",
      step2_text: "Carrier allocation, paperwork, and milestones locked in your dashboard.",
      step3_title: "In transit",
      step3_text: "Proactive monitoring, rerouting when needed, and clear escalation paths.",
      step4_title: "Arrival & release",
      step4_text: "Customs, handover, and POD — with data you can plug into your ERP.",
      cta_eyebrow: "Get started",
      cta_title: "Tell us about your next shipment",
      cta_desc:
        "Share lanes, volumes, and timelines — we'll respond with a clear proposal and timeline. No generic rate sheets.",
      label_email_word: "Email",
      label_phone_word: "Phone",
      form_company: "Company",
      form_work_email: "Work email",
      form_mode: "Mode",
      mode_select: "Select",
      mode_ocean: "Ocean",
      mode_air: "Air",
      mode_road: "Road",
      mode_multimodal: "Multimodal",
      form_lane: "Origin → Destination",
      lane_placeholder: "e.g. Los Angeles → Rotterdam",
      form_details: "Cargo & timeline",
      details_placeholder: "Weight, volume, commodity, readiness date…",
      form_submit: "Submit inquiry",
      form_note:
        "This demo form does not send data yet — hook it to your backend or form service when ready.",
      form_note_live:
        "We typically reply within one business day. Your details go straight to our team.",
      form_company_opt: "Company (optional)",
      q_select: "Select",
      q_unsure: "Not sure — advise me",
      q_origin: "Origin",
      q_origin_ph: "e.g. Shanghai, CN",
      q_destination: "Destination",
      q_destination_ph: "e.g. Los Angeles, US",
      q_incoterms: "Incoterms",
      q_load: "Shipment type",
      q_load_fcl: "FCL — Full container",
      q_load_lcl: "LCL — Less than container",
      q_customs: "Who handles customs clearance?",
      q_customs_both: "Derya — both ends",
      q_customs_origin: "Derya — origin (export) only",
      q_customs_dest: "Derya — destination (import) only",
      q_customs_own: "We use our own broker",
      q_weight: "Total weight",
      q_weight_ph: "e.g. 12,000 kg",
      q_dimensions: "Dimensions",
      q_dimensions_ph: "One line per piece — L×W×H and number of packages",
      q_dimensions_note: "List each piece — there can be more than one.",
      q_dangerous: "Dangerous goods?",
      q_msds: "Attach MSDS / safety data sheet (optional)",
      q_msds_note: "Required for dangerous goods. PDF, DOC, or image.",
      q_msds_later: "Declare MSDS later*",
      q_msds_later_note: "*Declaring MSDS later may delay your quote.",
      q_notes: "Anything else? (optional)",
      q_notes_ph: "Commodity, readiness date, special requirements…",
      nav_faq: "FAQ",
      hero_chip_1: "Quote within 1 business day*",
      hero_chip_2: "Export & import customs included",
      hero_chip_3: "DG cargo with MSDS review",
      guarantee_label: "We guarantee",
      guarantee_note: "*For RFQs received before 12:00 PM (PST) on a business day.",
      quote_card_eyebrow: "AI quoting",
      quote_card_title: "Request a quote from AI — free",
      quote_card_desc:
        "Share your lane and cargo. Our AI drafts a freight proposal in minutes — reviewed by a real forwarder before it reaches you.",
      quote_card_point1: "No login, no rate sheets",
      quote_card_point2: "Air, ocean & road in one place",
      quote_card_point3: "Customs handled end to end",
      quote_card_btn: "Start your free quote →",
      ms_booked: "Booked",
      ms_loaded: "Loaded",
      ms_transit: "In transit",
      ms_customs: "Customs",
      fs_contact: "Contact",
      fs_route: "Route",
      fs_cargo: "Cargo",
      q_container: "Container type",
      q_container_qty: "Containers",
      q_container_special: "Special (reefer / open top / flat rack)",
      trust_1: "Goes straight to the quoting desk",
      trust_2: "MSDS handled confidentially",
      trust_3: "Reply within 1 business day",
      tag_reefer: "Reefer",
      tag_express: "Express",
      tag_consol: "Consolidated",
      tag_dg: "DG cargo",
      tag_xborder: "Cross-border",
      tag_export: "Export",
      tag_import: "Import",
      tag_advisory: "Advisory",
      faq_eyebrow: "FAQ",
      faq_title: "Answers before you ask",
      faq_desc: "The questions every shipper asks before sending the first booking.",
      faq_q1: "Can I talk to a person if I need to?",
      faq_a1:
        "Yes. Derya is AI-native, but not AI-only. Any shipment detail that materially affects price, compliance, customs, dangerous goods classification, or carrier acceptance is reviewed or approved by a team member before it moves forward.",
      faq_q2: "Is Derya a freight forwarder or just software?",
      faq_a2:
        "Derya is an AI-native freight forwarder. Our software handles the repetitive parts of quoting, documentation, follow-up, and shipment visibility, while our team and partner network handle the parts that require operational judgment, carrier coordination, and local execution.",
      faq_q3: "Who handles customs clearance?",
      faq_a3:
        "Customs clearance can be handled on either side, or both, depending on the shipment and Incoterm. Derya can coordinate clearance through local agents or work alongside your existing customs broker. Duties, taxes, and final customs decisions remain subject to the relevant customs authority and the importer/exporter's documentation.",
      faq_q4: "Are duties, taxes, and customs fees included in the quote?",
      faq_a4:
        "Only if they are clearly stated in the quote. Freight quotes usually cover transport and agreed handling charges; duties, taxes, inspections, storage, demurrage, and customs-related charges may be separate depending on the shipment and destination.",
      faq_q5: "What happens after I accept a quote?",
      faq_a5:
        "We confirm the booking, collect any missing documents, validate key shipment details, and keep the shipment timeline updated through pickup, departure, arrival, customs, and delivery.",
      faq_q6: "Can I use my own customs broker, trucker, or warehouse?",
      faq_a6:
        "Yes. You can use your own broker or local provider where needed. Derya can either coordinate the whole shipment or work around the partners you already trust.",
      faq_q7: "Is cargo insurance included?",
      faq_a7:
        "Cargo insurance is not automatically included unless stated in the quote. If you want insurance, tell us the cargo value and we'll help arrange the appropriate coverage before shipment.",
      final_title: "Ready to move your next shipment?",
      final_sub: "Two minutes on the form gets you a real quote — not a callback loop.",
      final_btn: "Start your quote",
      form_thanks: "Thanks — we'll be in touch",
      form_panel_title: "Shipment inquiry",
      form_panel_sub: "Typical response within one business day for active trade lanes.",
      footer_tagline: "International freight forwarding with a modern operations mindset.",
      footer_company_h: "Company",
      footer_services: "Services",
      footer_about: "About",
      footer_contact: "Contact",
      footer_compliance_h: "Compliance",
      footer_terms: "Terms",
      footer_privacy: "Privacy",
      footer_cookies: "Cookie policy",
      footer_rights: "All rights reserved.",
      footer_reach_h: "Reach us",
      footer_office: "Los Angeles · Transpacific & Americas lanes",
      footer_hours: "Desk: Mon–Fri 09:00–18:00 PST",
    },
    tr: {
      meta_description:
        "Derya — Yapay zekâ-natif freight forwarding. Her iki uçta gümrükleme ile deniz, hava ve kara lojistiği; AI hassasiyeti ve hızıyla fiyatlandırılır.",
      page_title: "Derya | Yapay Zekâ-Natif Freight Forwarding",
      skip_link: "İçeriğe geç",
      logo_aria: "Derya ana sayfa",
      logo_forwarding: "Forwarding",
      lang_group_aria: "Dil",
      nav_aria: "Ana menü",
      menu: "Menü",
      nav_services: "Hizmetler",
      nav_why: "Neden biz",
      nav_process: "Süreç",
      nav_quote: "Teklif alın",
      transport_strip_aria: "Yük hizmet modları: deniz, hava, kara ve gümrük",
      transport_strip_label: "Kapsadığımız modlar",
      strip_ocean: "Deniz",
      strip_air: "Hava",
      strip_road: "Kara",
      strip_customs: "Gümrük",
      hero_img_alt: "Konteyner terminali yanında yüklü bir kargo gemisi",
      hero_photo_caption:
        "Küresel tonajın çoğunun hâlâ denizden geçtiği gerçeğiyle uyumlu — seferleri, kontenjanjı ve devirleri birlikte planlarız.",
      media_band_headline: "Aldığımız RFQ'ların %100'üne ilk teklifi biz verdik.",
      media_band_sub:
        "Agentic iş akışımız 7/24 çevrimiçi; geleneksel forwarder'lardan daha hızlı hizmet sunarken yine de onların güvenilir taşımacılık altyapısını kullanıyor.",
      media_stats_aria: "Aktif sevkiyatları nasıl yürütüyoruz",
      media_stat_1: "İsimli hat ve 7/24 eskalasyon",
      media_stat_2: "Dokümante SOP ve devirler",
      media_stat_3: "Dosya başına tek sorumlu uçtan uca",
      card_img_ocean_alt: "Limanda istiflenmiş konteynerler",
      card_img_air_alt: "Hava kargo operasyonları için uçak",
      card_img_road_alt: "Kara yükü için otoyolda ticari kamyon",
      card_img_customs_alt: "Depo ve dağıtım operasyonu",
      why_img_alt: "Yoğun bir konteyner terminalinin havadan görünümü",
      photo_credit_html:
        'Fotoğraflar <a href="https://unsplash.com" rel="noopener noreferrer" target="_blank">Unsplash</a> üzерinden (Unsplash Lisansı).',
      hero_eyebrow: "Uluslararası taşımacılık ve gümrük",
      hero_title_1: "İlk yapay zekâ yerlisi",
      hero_title_2: "freight forwarder.",
      hero_lead: "Yapay zekâ hassasiyeti ve hızıyla uçtan uca freight forwarding.",
      hero_cta_primary: "Teklif isteyin",
      hero_cta_secondary: "Hizmetleri inceleyin",
      sr_coverage: "Kapsam",
      sr_support: "Destek",
      sr_focus: "Odak",
      stat_lanes: "ticari hat",
      stat_desk: "operasyon hattı",
      stat_iso_strong: "ISO odaklı",
      stat_processes: "süreçler",
      panel_shipment: "Sevkiyat",
      panel_transit: "Yolda",
      panel_route: "SHA → LAX · Deniz FCL",
      panel_meta: "Tahmini varış 18 Nis · İthalat gümrüğü ön beyanlı",
      panel_next: "Sonraki aşama",
      panel_milestone: "Limanda boşaltma ve konteyner boşaltma",
      sec_services_eyebrow: "Ne sunuyoruz",
      sec_services_title: "Yükü ileri taşımanın üç yolu",
      sec_services_desc:
        "Derya'nın yükü ileri taşımasının üç yolu — yük sahipleri için, forwarder'lar için ve arkasında sermaye gereken işler için.",
      svc_freight_title: "Taşımacılık",
      svc_freight_text:
        "Deniz, hava ve kara yoluyla uçtan uca freight forwarding — AI hassasiyetiyle fiyatlanır ve zaten güvendiğiniz taşıyıcı altyapısı üzerinde yürütülür. Rezervasyondan gümrüğe, son teslimata kadar her dosyada tek bir sorumlu.",
      svc_forwarders_title: "Forwarder'lar için",
      svc_forwarders_text:
        "Ek yük olmadan tedarik zincirinizle ölçeklenen lojistik. Diğer freight forwarder'lar Derya'yı agentic bir arka ofis olarak kullanarak kapsamlarını genişletir ve kendi ekiplerini kurmaktan daha hızlı ve daha ucuz biçimde daha fazla hat fiyatlandırır. Markanız önde kalır; AI'ımız ve taşıyıcı ağımız arkada işi yürütür.",
      svc_financing_title: "Yük finansmanı",
      svc_financing_text:
        "Büyük iş, dar nakit akışı mı? Büyük bir sevkiyatı kazanmak veya yerine getirmek için finansmana ihtiyaç duyan bir freight forwarder iseniz, işi yola çıkarmak için sermaye katkısı sağlayabilir ve kazançtan pay alabiliriz. İşi bize anlatın, işe yarayacak bir yapı kuralım.",
      svc_financing_btn: "Bizimle konuşun →",
      ff_eyebrow: "Temeller",
      ff_title: "Freight forwarding nedir?",
      ff_desc:
        "Basitçe: yükünüz üç ayakta yolculuk eder — ve her iki uçta gümrükten geçer.",
      ff_n1_t: "Çıkış noktası",
      ff_n1_s: "Deponuz veya fabrikanız",
      ff_n2_t: "Çıkış limanı",
      ff_n2_s: "Rezerve, yüklendi & yola çıktı",
      ff_n3_t: "Varış limanı",
      ff_n3_s: "Vardı & boşaltıldı",
      ff_n4_t: "Varış noktası",
      ff_n4_s: "Nihai teslimat adresi",
      ff_export: "İhracat gümrüğü",
      ff_import: "İthalat gümrüğü",
      ff_leg1: "İlk mil · kara teslim alma",
      ff_leg2: "Ana taşıma · deniz / hava",
      ff_leg3: "Son mil · kara teslimat",
      card_ocean_title: "Deniz taşımacılığı",
      card_ocean_text:
        "Öngörülebilir sefer programları ve önemli hatlarda kontenjan taahhüdüyle FCL ve LCL programları.",
      card_air_title: "Hava taşımacılığı",
      card_air_text:
        "Yüksek değerli ve zamana duyarlı yükler için ekspres ve ekonomi seçenekleri; tam görünürlük.",
      card_road_title: "Kara ve dağıtım",
      card_road_text:
        "Bölgesel kamyonlama, sınır ötesi sevkiyatlar ve Kuzey Amerika ve ötesinde son kilometre koordinasyonu.",
      card_customs_title: "Gümrük ve uyum",
      card_customs_text:
        "Sınıflandırma desteği, beyannameler ve iç kontrollerinize uyumlu denetime hazır kayıtlar.",
      why_eyebrow: "Neden Derya",
      why_title: "Mazeret değil, cevap arayan operasyonlar için",
      why_desc:
        "Yapılandırılmış süreçleri uzmanlara doğrudan erişimle birleştiriyoruz — menşede veya varışta bir şey değiştiğinde önce siz duyarsınız ve hızlıca seçenek alırsınız.",
      why_li1: "Hesabınız için isimli kontaklar; anonim kuyruklar değil",
      why_li2: "Gecikme, aktarma ve muayeneler için hazır istisna senaryoları",
      why_li3: "Finans ve operasyona uygun raporlama; jenerik şablonlar değil",
      quote_body:
        "“Görünürlüğü ek özellik değil, varsayılan olarak gören bir forwarding ortağına geçtik. Bu tek değişiklik iç takip süremizi önemli ölçüde düşürdü.”",
      quote_footer: "— Operasyonlar Direktörü, <cite>Endüstriyel ürünler</cite>",
      proc_eyebrow: "Nasıl çalışır",
      proc_title: "Rezervasyondan teslimat kanıtına",
      proc_desc:
        "Ticari rezervasyondan yoldaki kontrole ve gümrük salıvermesine kadar disiplinli bir yol — hesap verebilirlik her kilometre taşında görünür kalır.",
      step1_title: "Kapsam ve routing",
      step1_text: "Yük, Incoterms, zaman çizelgeleri ve uyum ihtiyaçlarını netleştiriyoruz.",
      step2_title: "Rezervasyon ve evrak",
      step2_text: "Taşıyıcı tahsisi, evrak ve kilometre taşları panonuzda kilitlenir.",
      step3_title: "Yolda",
      step3_text: "Proaktif izleme, gerektiğinde yeniden yönlendirme ve net eskalasyon yolları.",
      step4_title: "Varış ve salıverme",
      step4_text: "Gümrük, devir ve POD — ERP’nize aktarabileceğiniz verilerle.",
      cta_eyebrow: "Başlayın",
      cta_title: "Bir sonraki sevkiyatınızı anlatın",
      cta_desc:
        "Hatları, hacimleri ve zaman çizelgelerini paylaşın — net bir teklif ve takvimle dönüş yapalım. Jenerik tarife tabloları yok.",
      label_email_word: "E-posta",
      label_phone_word: "Telefon",
      form_company: "şirket",
      form_work_email: "İş e-postası",
      form_mode: "Mod",
      mode_select: "Seçin",
      mode_ocean: "Deniz",
      mode_air: "Hava",
      mode_road: "Kara",
      mode_multimodal: "Multimodal",
      form_lane: "Menşe → Varış",
      lane_placeholder: "örn. Los Angeles → Rotterdam",
      form_details: "Yük ve zaman çizelgesi",
      details_placeholder: "Ağırlık, hacim, emtia, hazır olma tarihi…",
      form_submit: "Talebi gönder",
      form_note:
        "Bu demo form henüz veri göndermez — hazır olduğunuzda backend veya form servisinize bağlayın.",
      form_note_live:
        "Genellikle bir iş günü içinde yanıt veriyoruz. Bilgileriniz doğrudan ekibimize ulaşır.",
      form_company_opt: "Şirket (isteğe bağlı)",
      q_select: "Seçin",
      q_unsure: "Emin değilim — yönlendirin",
      q_origin: "Menşe",
      q_origin_ph: "örn. Shanghai, CN",
      q_destination: "Varış",
      q_destination_ph: "örn. Los Angeles, US",
      q_incoterms: "Teslim şekli (Incoterms)",
      q_load: "Yük tipi",
      q_load_fcl: "FCL — Tam konteyner",
      q_load_lcl: "LCL — Parsiyel (konteynerden az)",
      q_customs: "Gümrük işlemlerini kim yürütüyor?",
      q_customs_both: "Derya — her iki uçta",
      q_customs_origin: "Derya — yalnızca menşe (ihracat)",
      q_customs_dest: "Derya — yalnızca varış (ithalat)",
      q_customs_own: "Kendi gümrük müşavirimizi kullanıyoruz",
      q_weight: "Toplam ağırlık",
      q_weight_ph: "örn. 12.000 kg",
      q_dimensions: "Ölçüler",
      q_dimensions_ph: "Her parça için bir satır — U×G×Y ve paket sayısı",
      q_dimensions_note: "Her parçayı yazın — birden fazla olabilir.",
      q_dangerous: "Tehlikeli madde var mı?",
      q_msds: "MSDS / güvenlik bilgi formu ekleyin (isteğe bağlı)",
      q_msds_note: "Tehlikeli maddeler için gereklidir. PDF, DOC veya görsel.",
      q_msds_later: "MSDS'yi sonra bildireceğim*",
      q_msds_later_note: "*MSDS'yi sonra bildirmek teklifinizi geciktirebilir.",
      q_notes: "Eklemek istediğiniz bir şey? (isteğe bağlı)",
      q_notes_ph: "Emtia, hazır olma tarihi, özel gereksinimler…",
      nav_faq: "SSS",
      hero_chip_1: "1 iş günü içinde teklif*",
      hero_chip_2: "İhracat & ithalat gümrüğü dahil",
      hero_chip_3: "MSDS incelemeli tehlikeli yük",
      guarantee_label: "Garanti ediyoruz",
      guarantee_note: "*İş günlerinde saat 12:00'den (PST) önce alınan RFQ'lar için.",
      quote_card_eyebrow: "Yapay zekâ ile teklif",
      quote_card_title: "Yapay zekâdan ücretsiz teklif alın",
      quote_card_desc:
        "Hattınızı ve yükünüzü paylaşın. Yapay zekâmız dakikalar içinde bir navlun teklifi hazırlar — size ulaşmadan önce gerçek bir uzman tarafından incelenir.",
      quote_card_point1: "Giriş yok, tarife tablosu yok",
      quote_card_point2: "Hava, deniz ve kara tek yerde",
      quote_card_point3: "Gümrük uçtan uca yönetilir",
      quote_card_btn: "Ücretsiz teklifinizi başlatın →",
      ms_booked: "Rezerve",
      ms_loaded: "Yüklendi",
      ms_transit: "Yolda",
      ms_customs: "Gümrük",
      fs_contact: "İletişim",
      fs_route: "Rota",
      fs_cargo: "Yük",
      q_container: "Konteyner tipi",
      q_container_qty: "Konteyner adedi",
      q_container_special: "Özel (frigo / open top / flat rack)",
      trust_1: "Doğrudan fiyatlandırma masasına gider",
      trust_2: "MSDS gizli tutulur",
      trust_3: "1 iş günü içinde yanıt",
      tag_reefer: "Frigo",
      tag_express: "Ekspres",
      tag_consol: "Konsolide",
      tag_dg: "Tehlikeli yük",
      tag_xborder: "Sınır ötesi",
      tag_export: "İhracat",
      tag_import: "İthalat",
      tag_advisory: "Danışmanlık",
      faq_eyebrow: "SSS",
      faq_title: "Sormadan önce yanıtlar",
      faq_desc: "Her yük sahibinin ilk rezervasyondan önce sorduğu sorular.",
      faq_q1: "Gerektiğinde bir kişiyle görüşebilir miyim?",
      faq_a1:
        "Evet. Derya yapay zekâ-natiftir, ancak yalnızca yapay zekâ değildir. Fiyatı, uyumu, gümrüğü, tehlikeli madde sınıflandırmasını veya taşıyıcı kabulünü önemli ölçüde etkileyen her sevkiyat detayı, ilerlemeden önce bir ekip üyesi tarafından incelenir veya onaylanır.",
      faq_q2: "Derya bir freight forwarder mı yoksa sadece yazılım mı?",
      faq_a2:
        "Derya, yapay zekâ-natif bir freight forwarder'dır. Yazılımımız fiyatlandırma, evrak, takip ve sevkiyat görünürlüğünün tekrarlayan kısımlarını üstlenirken; ekibimiz ve iş ortağı ağımız operasyonel muhakeme, taşıyıcı koordinasyonu ve yerel uygulama gerektiren kısımları yürütür.",
      faq_q3: "Gümrük işlemlerini kim yürütür?",
      faq_a3:
        "Gümrük işlemleri, sevkiyata ve Incoterm'e bağlı olarak tek tarafta veya her iki tarafta yürütülebilir. Derya, gümrüklemeyi yerel acenteler aracılığıyla koordine edebilir veya mevcut gümrük müşavirinizle birlikte çalışabilir. Vergiler, harçlar ve nihai gümrük kararları ilgili gümrük idaresine ve ithalatçı/ihracatçının belgelerine tabidir.",
      faq_q4: "Vergiler, harçlar ve gümrük ücretleri teklife dahil mi?",
      faq_a4:
        "Yalnızca teklifte açıkça belirtilmişse. Navlun teklifleri genellikle taşımayı ve mutabık kalınan elleçleme ücretlerini kapsar; vergiler, harçlar, muayeneler, depolama, demuraj ve gümrükle ilgili ücretler sevkiyata ve varış noktasına göre ayrı olabilir.",
      faq_q5: "Bir teklifi kabul ettikten sonra ne olur?",
      faq_a5:
        "Rezervasyonu onaylar, eksik belgeleri toplar, önemli sevkiyat detaylarını doğrular ve sevkiyat takvimini teslim alma, çıkış, varış, gümrük ve teslimat boyunca güncel tutarız.",
      faq_q6: "Kendi gümrük müşavirimi, nakliyecimi veya depomu kullanabilir miyim?",
      faq_a6:
        "Evet. Gerektiğinde kendi müşavirinizi veya yerel sağlayıcınızı kullanabilirsiniz. Derya tüm sevkiyatı koordine edebilir veya zaten güvendiğiniz iş ortaklarıyla uyumlu çalışabilir.",
      faq_q7: "Kargo sigortası dahil mi?",
      faq_a7:
        "Teklifte belirtilmedikçe kargo sigortası otomatik olarak dahil değildir. Sigorta isterseniz, kargo değerini bize bildirin; sevkiyattan önce uygun teminatı düzenlemenize yardımcı olalım.",
      final_title: "Bir sonraki sevkiyatınızı taşımaya hazır mısınız?",
      final_sub: "Formda iki dakika — geri arama döngüsü değil, gerçek bir teklif.",
      final_btn: "Teklifinizi başlatın",
      form_thanks: "Teşekkürler — en kısa sürede dönüş yapacağız",
      form_panel_title: "Sevkiyat talebi",
      form_panel_sub: "Aktif ticari hatlar için tipik yanıt süresi bir iş günü içindedir.",
      footer_tagline: "Modern operasyon anlayışıyla uluslararası freight forwarding.",
      footer_company_h: "şirket",
      footer_services: "Hizmetler",
      footer_about: "Hakkımızda",
      footer_contact: "İletişim",
      footer_compliance_h: "Uyum",
      footer_terms: "Koşullar",
      footer_privacy: "Gizlilik",
      footer_cookies: "Çerez politikası",
      footer_rights: "Tüm hakları saklıdır.",
      footer_reach_h: "Bize ulaşın",
      footer_office: "Los Angeles merkez · Transpacifik ve Amerika hatları",
      footer_hours: "Hat: Pt–Cum 09:00–18:00 PST",
    },
  };

  var currentLang = "en";

  function getStrings(lang) {
    return STRINGS[lang] || STRINGS.en;
  }

  function applyLang(lang) {
    if (lang !== "en" && lang !== "tr") {
      lang = "en";
    }
    currentLang = lang;
    var L = getStrings(lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && L[key] !== undefined) {
        el.textContent = L[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && L[key] !== undefined) {
        el.innerHTML = L[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key && L[key] !== undefined) {
        el.setAttribute("aria-label", L[key]);
      }
    });

    var meta = document.querySelector('meta[data-i18n-meta="description"]');
    if (meta && L.meta_description) {
      meta.setAttribute("content", L.meta_description);
    }

    var titleEl = document.querySelector("title[data-i18n-title]");
    if (titleEl && L.page_title) {
      titleEl.textContent = L.page_title;
    }

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && L[key] !== undefined) {
        el.setAttribute("placeholder", L[key]);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key && L[key] !== undefined) {
        el.setAttribute("alt", L[key]);
      }
    });

    var selectEl = document.getElementById("lang-select");
    if (selectEl) {
      selectEl.value = lang;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function detectInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "tr") {
        return saved;
      }
    } catch (e) {
      /* ignore */
    }
    var nav = typeof navigator !== "undefined" ? navigator.language || navigator.userLanguage : "";
    if (nav && String(nav).toLowerCase().indexOf("tr") === 0) {
      return "tr";
    }
    return "en";
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    var syncHeaderScroll = function () {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 16);
    };
    syncHeaderScroll();
    window.addEventListener("scroll", syncHeaderScroll, { passive: true });
  }

  applyLang(detectInitialLang());

  var langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", function () {
      applyLang(langSelect.value);
    });
  }

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // The same form can appear more than once (e.g. hero card + contact
  // section). Wire each instance independently; all DOM lookups are scoped to
  // the form so duplicate ids across forms don't collide.
  document.querySelectorAll(".quote-form").forEach(function (form) {
    var dimsRow = form.querySelector("#dims-row");
    var fclRow = form.querySelector("#fcl-row");
    var msdsRow = form.querySelector("#msds-row");
    var dgCheckbox = form.querySelector("#dg");

    // Show/hide a conditional row. Hidden fields are also disabled so they
    // are excluded from the submission and don't block validation. Fields
    // marked data-req="1" become required while visible.
    function toggleRow(row, show) {
      if (!row) return;
      row.hidden = !show;
      row.querySelectorAll("input, select, textarea").forEach(function (field) {
        field.disabled = !show;
        if (field.getAttribute("data-req") === "1") {
          if (show) {
            field.setAttribute("required", "");
          } else {
            field.removeAttribute("required");
          }
        }
      });
    }

    function syncLoadType() {
      var checked = form.querySelector('input[name="Load type"]:checked');
      toggleRow(fclRow, !!checked && checked.value === "FCL");
      toggleRow(dimsRow, !!checked && checked.value === "LCL");
    }

    function syncDangerous() {
      toggleRow(msdsRow, !!(dgCheckbox && dgCheckbox.checked));
    }

    form.querySelectorAll('input[name="Load type"]').forEach(function (radio) {
      radio.addEventListener("change", syncLoadType);
    });
    if (dgCheckbox) {
      dgCheckbox.addEventListener("change", syncDangerous);
    }

    syncLoadType();
    syncDangerous();

    // Step unlock logic
    var fsRoute = form.querySelector('#fs-route');
    var fsCargo = form.querySelector('#fs-cargo');
    var emailInput = form.querySelector('#email');

    function lockStep(fieldset) {
      if (fieldset) fieldset.classList.add('is-locked');
    }

    function unlockStep(fieldset) {
      if (fieldset) fieldset.classList.remove('is-locked');
    }

    function isSection2Complete() {
      var origin = form.querySelector('#origin');
      var destination = form.querySelector('#destination');
      var customs = form.querySelector('#customs');
      return origin && origin.value.trim() &&
             destination && destination.value.trim() &&
             customs && customs.value;
    }

    function syncSteps() {
      var hasAt = emailInput && emailInput.value.indexOf('@') !== -1;
      if (hasAt) {
        unlockStep(fsRoute);
      } else {
        lockStep(fsRoute);
        lockStep(fsCargo);
        return;
      }
      if (isSection2Complete()) {
        unlockStep(fsCargo);
      } else {
        lockStep(fsCargo);
      }
    }

    if (emailInput) {
      emailInput.addEventListener('input', syncSteps);
    }

    if (fsRoute) {
      fsRoute.addEventListener('input', syncSteps);
      fsRoute.addEventListener('change', syncSteps);
    }

    // Inline validation: mark fields once the user has interacted with them
    // (or tried to submit) so :invalid styling only shows after engagement.
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("blur", function () {
        if (field.value !== "" || field.hasAttribute("required")) {
          field.classList.add("was-touched");
        }
      });
    });
    form.addEventListener(
      "invalid",
      function (e) {
        if (e.target && e.target.classList) {
          e.target.classList.add("was-touched");
        }
      },
      true
    );

    // Real submit (posts to FormSubmit). Reflect progress on the button;
    // the page then redirects to the thank-you page.
    form.addEventListener("submit", function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        var L = getStrings(currentLang);
        btn.textContent = L.form_thanks || STRINGS.en.form_thanks;
        btn.disabled = true;
      }
    });
  });

  var reduceMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal — class is only added when JS + IO are available, so the
  // page renders fully without either.
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealTargets = document.querySelectorAll(
      ".card, .step, .section-head, .why-copy-surface, .why-panel, .faq-item, " +
        ".media-band-copy, .media-band-stats, .final-cta-inner"
    );
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealTargets.forEach(function (el) {
      el.classList.add("js-reveal");
      revealObserver.observe(el);
    });
  }

  // Floating quote pill — appears once the inquiry form has scrolled out of
  // view so a path back to the form is always one tap away.
  var fab = document.getElementById("quote-fab");
  var contactSection = document.getElementById("contact");
  if (fab && contactSection && "IntersectionObserver" in window) {
    var contactVisible = true;

    var syncFab = function () {
      var show = !contactVisible && window.scrollY > 480;
      fab.classList.toggle("is-shown", show);
      fab.setAttribute("aria-hidden", show ? "false" : "true");
      fab.tabIndex = show ? 0 : -1;
    };

    var fabObserver = new IntersectionObserver(
      function (entries) {
        contactVisible = entries[0].isIntersecting;
        syncFab();
      },
      { threshold: 0.05 }
    );
    fabObserver.observe(contactSection);
    // Intersection only fires on change; recompute on scroll so anchor
    // jumps that skip straight past the form still show the pill.
    window.addEventListener("scroll", syncFab, { passive: true });
  }
})();
