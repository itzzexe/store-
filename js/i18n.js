/* ========================================
   ASIA STORE - Internationalization (i18n)
   Supports: Arabic (ar), English (en)
   ======================================== */

const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About Us",
    nav_contact: "Contact",
    nav_account: "Account",
    nav_cart: "Cart",
    header_shipping: "🚚 Free shipping on orders over 100,000 IQD",
    search_placeholder: "Search for products...",

    // Authentication
    auth_login_tab: "Login",
    auth_register_tab: "Sign Up",
    auth_email: "Email",
    auth_username: "Username",
    auth_password: "Password",
    auth_login_btn: "Login",
    auth_register_btn: "Create Account",
    auth_logged_in_as: "Logged in as: ",
    auth_logout: "Logout",

    // Cart
    cart_title: "Shopping Cart",
    cart_empty: "Your cart is empty",
    cart_total: "Total:",
    cart_checkout: "Checkout via WhatsApp",

    // Hero
    hero_label: "15+ Years of Tech Excellence",
    hero_title_1: "Where Technology",
    hero_title_2: "Begins with Trust",
    hero_subtitle: "Asia Store is your premium destination for the latest smart devices and cutting-edge technology solutions in Iraq. Experience the future, today.",
    hero_btn_shop: "Explore Products",
    hero_btn_about: "Our Story",
    stat_years: "Years Experience",
    stat_products: "Products",
    stat_customers: "Happy Customers",
    stat_brands: "Global Brands",

    categories_label: "Categories",
    categories_title: "Shop by Category",
    categories_subtitle: "Discover our premium selection of technology products across all categories",

    // iPhone 17 Pro Max Showcase
    iphone17_title: "iPhone 17 Pro Max",
    iphone17_slogan: "Your first destination for the latest technology with genuine warranty and complete security in the heart of Baghdad",
    iphone17_desc: "The iPhone 17 Pro Max is the ultimate flagship in the Apple lineup, combining an advanced titanium design with top-tier processing and photography. It offers extreme performance for complex tasks, high-end gaming, and generative AI, featuring the largest, brightest screen in iPhone history.",
    iphone17_f1_title: "Design & Build",
    iphone17_f1_desc: "Grade-5 titanium frame reinforced with the latest Ceramic Shield front.",
    iphone17_f2_title: "Display",
    iphone17_f2_desc: "6.9-inch Super Retina XDR display with Always-On and ProMotion technology offering 120Hz adaptive refresh rate.",
    iphone17_f3_title: "Processor",
    iphone17_f3_desc: "A19 Pro chip (3nm) with a 6-core CPU and redesigned GPU for enhanced ray-tracing performance.",
    iphone17_f4_title: "Camera System",
    iphone17_f4_desc: "48MP Main and Ultra Wide, combined with an advanced periscope Telephoto offering unprecedented optical zoom at 48MP.",
    iphone17_f5_title: "Memory & Storage",
    iphone17_f5_desc: "Capacities ranging from 256GB to 1TB, with increased RAM to support Apple Intelligence tasks.",
    iphone17_f6_title: "Battery & Connectivity",
    iphone17_f6_desc: "High-capacity battery with fast USB-C (USB 3.0) and improved MagSafe. Full 5G, Wi-Fi 7, and Emergency SOS via satellite.",
    iphone17_warranty: "Warranty covers any manufacturing defect, including sudden shutdown.",

    cat_smartphones: "Smartphones",
    cat_smartphones_count: "50+ Products",
    cat_laptops: "Laptops",
    cat_laptops_count: "30+ Products",
    cat_wearables: "Wearables",
    cat_wearables_count: "25+ Products",
    cat_accessories: "Accessories",
    cat_accessories_count: "100+ Products",
    cat_smarthome: "Smart Home",
    cat_smarthome_count: "40+ Products",
    cat_audio: "Audio",
    cat_audio_count: "35+ Products",
    cat_electronics: "Electronics",
    cat_electronics_count: "20+ Products",

    // Products
    products_label: "Featured Products",
    products_title: "Our Best Sellers",
    products_subtitle: "Handpicked selection of the most popular and highest quality tech products",
    view_all: "View All Products",
    add_to_cart: "Add to Cart",
    product_new: "New",
    product_hot: "Hot",
    product_sale: "Sale",

    // Product Items
    p1_category: "Smartphones",
    p1_title: "iPhone 16 Pro Max",
    p1_desc: "The ultimate iPhone with A18 Pro chip, 48MP camera system, and titanium design.",
    p1_price: "$1,199",

    p2_category: "Smartphones",
    p2_title: "Samsung Galaxy S24 Ultra",
    p2_desc: "Galaxy AI powered flagship with S Pen, 200MP camera, and titanium frame.",
    p2_price: "$1,299",

    p3_category: "Audio",
    p3_title: "AirPods Pro 2",
    p3_desc: "Active Noise Cancellation, Adaptive Audio, and USB-C charging case.",
    p3_price: "$249",

    p4_category: "Wearables",
    p4_title: "Apple Watch Ultra 2",
    p4_desc: "The most capable Apple Watch with precision GPS and 72-hour battery life.",
    p4_price: "$799",

    p5_category: "Laptops",
    p5_title: "MacBook Pro M3",
    p5_desc: "Supercharged by M3 Pro and M3 Max chips for unprecedented performance.",
    p5_price: "$1,999",

    p6_category: "Tablets",
    p6_title: "iPad Pro M4",
    p6_desc: "The thinnest Apple product ever with M4 chip and Ultra Retina XDR display.",
    p6_price: "$1,099",

    p7_category: "Smart Home",
    p7_title: "Smart Robot Vacuum",
    p7_desc: "Intelligent vacuum cleaner with automatic mapping and self-cleaning station.",
    p7_price: "450,000 د.ع",

    p8_category: "Smart Home",
    p8_title: "Smart Air Purifier",
    p8_desc: "Advanced HEPA filtration for cleaner and healthier air in your home.",
    p8_price: "250,000 د.ع",

    p9_category: "Electronics",
    p9_title: "Smart Coffee Maker",
    p9_desc: "Wi-Fi enabled espresso machine, customize your morning coffee.",
    p9_price: "350,000 د.ع",

    p10_category: "Electronics",
    p10_title: "Smart Lighting System",
    p10_desc: "Adjustable RGB lighting for any mood, controlled via app.",
    p10_price: "120,000 د.ع",

    p11_category: "Smart Home",
    p11_title: "Smart Security Camera",
    p11_desc: "4K resolution with AI motion detection and night vision.",
    p11_price: "185,000 د.ع",

    p12_category: "Electronics",
    p12_title: "Smart Thermostat",
    p12_desc: "Optimize energy usage and control home temperature remotely.",
    p12_price: "199,000 د.ع",

    // Features / Why Choose Us
    features_label: "Why Asia Store",
    features_title: "Why Choose Us?",
    features_subtitle: "Choosing Asia Store means choosing peace of mind",

    f1_title: "Genuine Warranty",
    f1_desc: "Real warranties covering manufacturing defects and stable performance — not just ink on paper.",

    f2_title: "Full Agency Support",
    f2_desc: "We handle all official agency follow-ups and maintenance, so your device returns in perfect condition.",

    f3_title: "After-Sales Service",
    f3_desc: "Our specialized team provides professional tech consulting and continuous support for all your devices.",

    f4_title: "100% Original Products",
    f4_desc: "We deal directly with authorized agents to ensure you receive original products with complete accessories.",

    // CTA
    cta_title: "Stay Updated with Latest Tech",
    cta_subtitle: "Subscribe to receive exclusive offers and be the first to know about new arrivals.",
    cta_placeholder: "Enter your email",
    cta_btn: "Subscribe",

    // About Page
    about_hero_label: "Our Story",
    about_hero_title: "A Story That Started with Vision",
    about_hero_subtitle: "Since 2011, Asia Store has grown from a passion for technology into a comprehensive tech center offering smart solutions.",

    about_story_title: "Our Journey",
    about_story_p1: "Asia Store was not born out of chance. It is the result of strategic planning that began in 2011. We started from a deep passion for modern technologies, from simple smartphone stores, we steadily carved our path, realizing that true strength lies in 'smart choices' and 'safe dealings'.",
    about_story_p2: "In 2024, this vision crystallized as Asia Store was born as a comprehensive tech center, combining the latest smart home solutions with the world's most powerful smart devices.",

    about_experience_title: "15 Years of Technical Expertise",
    about_experience_desc: "We don't talk about numbers, but about a legacy of field experience spanning over 15 years. During this time, we witnessed every leap in technology; from the first generations of smartphones to the revolution of robots and artificial intelligence.",

    timeline_2011_title: "The Beginning",
    timeline_2011_desc: "Started with a clear vision and passion for technology in the Iraqi market.",
    timeline_2015_title: "Growth Phase",
    timeline_2015_desc: "Expanded our product range and built strong relationships with global brands.",
    timeline_2020_title: "Digital Transformation",
    timeline_2020_desc: "Embraced e-commerce and smart home solutions to serve more customers.",
    timeline_2024_title: "Asia Store Today",
    timeline_2024_desc: "A comprehensive tech center combining the latest devices with premium service.",

    // Contact Page
    contact_hero_label: "Get in Touch",
    contact_hero_title: "Contact Us",
    contact_hero_subtitle: "We'd love to hear from you. Reach out through any of our channels.",

    contact_location_title: "Our Location",
    contact_location_text: "Baghdad – Al-Saba'a Abkar – Main Street – Next to Al-Intisar High School",

    contact_phone_title: "Phone & WhatsApp",
    contact_phone_text: "07746400400 – 07747400400",

    contact_hours_title: "Working Hours",
    contact_hours_daily: "Daily: 10:00 AM – 10:00 PM",
    contact_hours_friday: "Friday: 4:00 PM – 10:00 PM",

    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_phone: "Your Phone",
    contact_form_message: "Your Message",
    contact_form_submit: "Send Message",

    contact_follow: "Follow Us",

    // Footer
    footer_desc: "Your premium destination for the latest smart devices and innovative technology solutions since 2011.",
    footer_quick: "Quick Links",
    footer_support: "Support",
    footer_warranty: "Warranty Policy",
    footer_returns: "Returns",
    footer_faq: "FAQ",
    footer_privacy: "Privacy Policy",
    footer_contact: "Contact Info",
    footer_rights: "© 2024 Asia Store. All rights reserved.",
    footer_tagline: "Where technology begins with trust.",

    // Warranty Page
    warranty_hero_label: "Warranty Policy",
    warranty_hero_title: "Your Guarantee of Quality",
    warranty_hero_subtitle: "We believe in the quality of every product we sell. Our warranty policy ensures your complete peace of mind.",
    warranty_intro: "At Asia Store, we are committed to providing genuine warranty coverage for all products purchased from our store. Our warranty is backed by official agents and manufacturers.",
    warranty_coverage_title: "What's Covered",
    warranty_c1_title: "Manufacturing Defects",
    warranty_c1_desc: "All manufacturing defects and hardware malfunctions that occur under normal use conditions are fully covered.",
    warranty_c2_title: "Software Issues",
    warranty_c2_desc: "Original software problems and system errors that appear during the warranty period are covered.",
    warranty_c3_title: "Battery Performance",
    warranty_c3_desc: "Battery degradation below manufacturer-specified thresholds during the warranty period is covered.",
    warranty_c4_title: "Component Failure",
    warranty_c4_desc: "Internal component failures including screen, speakers, cameras, and connectivity modules are covered.",
    warranty_not_covered_title: "What's Not Covered",
    warranty_nc1: "Physical damage from drops, impacts, or liquid exposure",
    warranty_nc2: "Damage from unauthorized modifications or repairs",
    warranty_nc3: "Normal wear and tear including scratches and cosmetic damage",
    warranty_nc4: "Damage from misuse, negligence, or using incompatible accessories",
    warranty_nc5: "Consumable parts (cables, adapters) after 30 days",
    warranty_process_title: "Warranty Claim Process",
    warranty_step1_title: "Contact Us",
    warranty_step1_desc: "Reach out via phone, WhatsApp, or visit our store to report the issue.",
    warranty_step2_title: "Device Assessment",
    warranty_step2_desc: "Our technical team will assess your device and determine warranty eligibility.",
    warranty_step3_title: "Official Repair",
    warranty_step3_desc: "We coordinate with the official agency for professional repair or replacement.",
    warranty_step4_title: "Return to You",
    warranty_step4_desc: "Your device is returned in perfect working condition — hassle-free.",
    warranty_periods_title: "Warranty Periods",
    warranty_device: "Device Type",
    warranty_period: "Warranty Period",
    warranty_smartphones: "Smartphones",
    warranty_smartphones_period: "12 Months",
    warranty_laptops: "Laptops",
    warranty_laptops_period: "12 Months",
    warranty_watches: "Smart Watches",
    warranty_watches_period: "12 Months",
    warranty_audio: "Audio Devices",
    warranty_audio_period: "6 Months",
    warranty_accessories: "Accessories",
    warranty_accessories_period: "3 Months",
    warranty_smarthome: "Smart Home Devices",
    warranty_smarthome_period: "12 Months",
    warranty_note: "Note: Warranty periods may vary based on manufacturer specifications. Always retain your purchase receipt as proof of warranty.",

    // Returns Page
    returns_hero_label: "Return Policy",
    returns_hero_title: "Easy Returns & Exchanges",
    returns_hero_subtitle: "Your satisfaction is our priority. We've made our return process simple and transparent.",
    returns_intro: "We want you to be completely satisfied with your purchase. If for any reason you need to return or exchange a product, we're here to help.",
    returns_eligibility_title: "Return Eligibility",
    returns_e1_title: "7-Day Return Window",
    returns_e1_desc: "Products can be returned within 7 days of purchase, provided they are in their original condition with all packaging and accessories.",
    returns_e2_title: "Original Condition Required",
    returns_e2_desc: "Items must be unused, in original packaging with all seals intact, and include all accessories, manuals, and documentation.",
    returns_e3_title: "Proof of Purchase",
    returns_e3_desc: "A valid receipt or proof of purchase from Asia Store is required for all returns and exchanges.",
    returns_non_returnable_title: "Non-Returnable Items",
    returns_nr1: "Opened software, digital products, or activated devices",
    returns_nr2: "Products with removed or damaged security seals",
    returns_nr3: "Personalized or custom-configured items",
    returns_nr4: "Products showing signs of use or damage",
    returns_nr5: "Consumable items (screen protectors, cases after use)",
    returns_process_title: "Return Process",
    returns_step1_title: "Initiate Return",
    returns_step1_desc: "Contact us within 7 days of purchase to start the return process.",
    returns_step2_title: "Bring to Store",
    returns_step2_desc: "Bring the product with all original packaging and your receipt to our store.",
    returns_step3_title: "Inspection",
    returns_step3_desc: "Our team will inspect the product to verify it meets return conditions.",
    returns_step4_title: "Refund or Exchange",
    returns_step4_desc: "Choose between a full refund or exchange for another product.",
    returns_exchange_title: "Exchange Policy",
    returns_exchange_desc: "We offer exchanges for the same product (different color/capacity) or a different product with price adjustment. Exchanges are subject to product availability.",
    returns_defective_title: "Defective Products",
    returns_defective_desc: "If you receive a defective product, we offer immediate replacement or full refund regardless of opening status. Defective product claims must be made within 48 hours of purchase.",

    // FAQ Page
    faq_hero_label: "FAQ",
    faq_hero_title: "Frequently Asked Questions",
    faq_hero_subtitle: "Find answers to the most common questions about our products and services.",
    faq_general: "General",
    faq_products: "Products",
    faq_warranty_support: "Warranty & Support",
    faq_payment: "Payment & Delivery",
    faq_q1: "What is Asia Store?",
    faq_a1: "Asia Store is a premium technology center established in 2011, offering the latest smart devices, smart home solutions, and technology accessories. With over 15 years of field experience in the Iraqi market, we provide genuine products backed by official warranties.",
    faq_q2: "Where is Asia Store located?",
    faq_a2: "We are located in Baghdad – Al-Saba'a Abkar – Main Street – Next to Al-Intisar High School. You can find us on Google Maps for easy directions.",
    faq_q3: "What are your working hours?",
    faq_a3: "We are open daily from 10:00 AM to 10:00 PM, except Fridays when we open from 4:00 PM to 10:00 PM.",
    faq_q4: "Are all products original?",
    faq_a4: "Yes, 100% of our products are original and sourced directly from authorized agents and official distributors. We guarantee the authenticity of every product with complete accessories and documentation.",
    faq_q5: "What brands do you carry?",
    faq_a5: "We carry all major global brands including Apple, Samsung, Huawei, Xiaomi, and many more. Our selection includes smartphones, laptops, tablets, wearables, audio devices, and smart home products.",
    faq_q6: "Can I test a product before buying?",
    faq_a6: "Absolutely! We encourage customers to test and experience products in our store before making a purchase. Our team is available to demonstrate features and help you make the best choice.",
    faq_q7: "What does the warranty cover?",
    faq_a7: "Our warranty covers manufacturing defects, hardware malfunctions, and software issues under normal use. Physical damage, water damage, and unauthorized modifications are not covered. See our Warranty Policy page for full details.",
    faq_q8: "How do I claim warranty?",
    faq_a8: "Simply bring your device and purchase receipt to our store, or contact us via phone/WhatsApp. We handle all communication with official agencies and follow up on repairs until your device is returned in perfect condition.",
    faq_q9: "Do you offer after-sales support?",
    faq_a9: "Yes! Our dedicated support team provides technical consultations, setup assistance, and ongoing support. We believe the relationship with our customers begins after the sale.",
    faq_q10: "What payment methods do you accept?",
    faq_a10: "We accept cash payments and bank transfers. For large purchases, we may offer installment plans through partner banks.",
    faq_q11: "Do you offer delivery?",
    faq_a11: "Currently, purchases are made in-store. We are working on expanding our delivery services across Baghdad and other Iraqi cities.",
    faq_q12: "Can I order products not in stock?",
    faq_a12: "Yes, we can special-order products upon request. Contact us with the specific product details, and we'll provide availability and pricing information within 24-48 hours.",
    faq_still_have: "Still have questions?",
    faq_contact_us: "Contact our team and we'll be happy to help.",

    // Privacy Page
    privacy_hero_label: "Privacy Policy",
    privacy_hero_title: "Your Privacy Matters",
    privacy_hero_subtitle: "We are committed to protecting your personal information and being transparent about how we use it.",
    privacy_updated: "Last Updated: March 2024",
    privacy_intro_title: "Introduction",
    privacy_intro_desc: "Asia Store ('we', 'us', 'our') is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our store and services.",
    privacy_collect_title: "Information We Collect",
    privacy_collect_1_title: "Personal Information",
    privacy_collect_1_desc: "Name, phone number, email address, and delivery address when you make a purchase or create an account.",
    privacy_collect_2_title: "Transaction Data",
    privacy_collect_2_desc: "Purchase history, payment methods, warranty claims, and return requests.",
    privacy_collect_3_title: "Communication Data",
    privacy_collect_3_desc: "Messages and inquiries sent through our contact form, WhatsApp, or social media channels.",
    privacy_collect_4_title: "Device Information",
    privacy_collect_4_desc: "Device serial numbers and IMEI for warranty registration and tracking purposes.",
    privacy_use_title: "How We Use Your Information",
    privacy_use_1: "Processing and fulfilling your purchases",
    privacy_use_2: "Managing warranty claims and after-sales support",
    privacy_use_3: "Sending transaction confirmations and updates",
    privacy_use_4: "Improving our products and customer experience",
    privacy_use_5: "Responding to your inquiries and providing support",
    privacy_use_6: "Sending promotional offers (with your consent only)",
    privacy_protect_title: "How We Protect Your Data",
    privacy_protect_desc: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. Your data is stored securely and accessed only by authorized personnel.",
    privacy_share_title: "Data Sharing",
    privacy_share_desc: "We do not sell, trade, or rent your personal information to third parties. We may share limited information with official brand agencies solely for warranty processing and product registration purposes.",
    privacy_rights_title: "Your Rights",
    privacy_right_1: "Access your personal information we hold",
    privacy_right_2: "Request correction of inaccurate data",
    privacy_right_3: "Request deletion of your personal data",
    privacy_right_4: "Opt out of promotional communications",
    privacy_right_5: "Request a copy of your data",
    privacy_cookies_title: "Cookies & Website Data",
    privacy_cookies_desc: "Our website uses minimal cookies for language preferences and basic functionality. We do not use tracking cookies or share browsing data with third parties.",
    privacy_changes_title: "Changes to This Policy",
    privacy_changes_desc: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    privacy_contact_title: "Contact Us About Privacy",
    privacy_contact_desc: "If you have any questions about this Privacy Policy or how we handle your data, please contact us.",

    // Games Page
    games_hero_label: "Arcade Zone",
    games_hero_title: "Play & Have Fun",
    games_hero_subtitle: "Take a break and enjoy these classic games while browsing our store.",
    games_tetris: "Tetris",
    games_tetris_desc: "The classic block-stacking puzzle game. Clear lines and set high scores!",
    games_pacman: "Pac-Man",
    games_pacman_desc: "Navigate the maze, eat all the dots, and avoid the ghosts!",
    games_mario: "Super Mario",
    games_mario_desc: "Jump, run, and collect coins in this classic platformer adventure!",
    games_play: "Play Now",
    games_score: "Score",
    games_high_score: "High Score",
    games_level: "Level",
    games_lines: "Lines",
    games_game_over: "Game Over!",
    games_restart: "Play Again",
    games_back: "Back to Games",
    games_controls: "Controls",
    games_controls_arrows: "Arrow Keys to Move",
    games_controls_space: "Space to Jump / Rotate",
    games_pause: "P to Pause"
  },

  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_products: "المنتجات",
    nav_about: "من نحن",
    nav_contact: "تواصل معنا",
    nav_account: "الحساب",
    nav_cart: "السلة",
    header_shipping: "🚚 توصيل مجاني للطلبات أكثر من 100,000 د.ع",
    search_placeholder: "ابحث عن المنتجات...",

    // Authentication
    auth_login_tab: "تسجيل الدخول",
    auth_register_tab: "إنشاء حساب",
    auth_email: "البريد الإلكتروني",
    auth_username: "اسم المستخدم",
    auth_password: "كلمة المرور",
    auth_login_btn: "دخول",
    auth_register_btn: "إنشاء حساب",
    auth_logged_in_as: "أنت مسجل الدخول باسم: ",
    auth_logout: "تسجيل الخروج",

    // Cart
    cart_title: "سلة المشتريات",
    cart_empty: "السلة فارغة",
    cart_total: "الإجمالي:",
    cart_checkout: "الطلب عبر واتساب",

    // Hero
    hero_label: "+15 عاماً من التميز التقني",
    hero_title_1: "حيث تبدأ التقنية",
    hero_title_2: "بثقة",
    hero_subtitle: "آسيا ستور وجهتك المميزة لأحدث الأجهزة الذكية وحلول التكنولوجيا المتطورة في العراق. عِش المستقبل، اليوم.",
    hero_btn_shop: "استكشف المنتجات",
    hero_btn_about: "قصتنا",
    stat_years: "سنة خبرة",
    stat_products: "منتج",
    stat_customers: "عميل سعيد",
    stat_brands: "علامة تجارية",

    categories_label: "الأقسام",
    categories_title: "تسوّق حسب الفئة",
    categories_subtitle: "اكتشف مجموعتنا المميزة من منتجات التكنولوجيا في جميع الفئات",

    // iPhone 17 Pro Max Showcase
    iphone17_title: "آيفون 17 برو ماكس (iPhone 17 Pro Max)",
    iphone17_slogan: "وجهتك الأولى لأحدث التقنيات بضمان حقيقي وأمان تام في قلب بغداد",
    iphone17_desc: "يعد هاتف iPhone 17 Pro Max الإصدار الرائد والأقوى في سلسلة هواتف آبل، حيث يجمع بين التصميم المتطور من التيتانيوم وأعلى تقنيات المعالجة والتصوير. تم تحسين الجهاز لتقديم أداء فائق في المهام المعقدة، الألعاب عالية الرسوميات، والذكاء الاصطناعي التوليدي، مع شاشة هي الأكبر والأكثر سطوعاً في تاريخ هواتف آيفون.",
    iphone17_f1_title: "التصميم والهيكل",
    iphone17_f1_desc: "إطار مصنوع من التيتانيوم من الدرجة الخامسة مع واجهة درع السيراميك الأحدث.",
    iphone17_f2_title: "الشاشة",
    iphone17_f2_desc: "شاشة Super Retina XDR مقاس 6.9 بوصة، تدعم تقنية Always-On وتقنية ProMotion بمعدل تحديث تكيفي يصل إلى 120Hz.",
    iphone17_f3_title: "المعالج",
    iphone17_f3_desc: "رقاقة A19 Pro بتكنولوجيا تصنيع (3 نانومتر)، بوحدة معالجة مركزية سداسية النوى ورسوميات تتبع الأشعة.",
    iphone17_f4_title: "نظام الكاميرات",
    iphone17_f4_desc: "رئيسية وواسعة 48MP وتليفتو بيريسكوب بتقريب بصري لمستويات غير مسبوقة.",
    iphone17_f5_title: "الذاكرة والتخزين",
    iphone17_f5_desc: "سعات 256GB حتى 1TB، مع زيادة بذاكرة الوصول العشوائي (RAM) لدعم مهام Apple Intelligence.",
    iphone17_f6_title: "البطارية والاتصال",
    iphone17_f6_desc: "شحن سريع USB-C و MagSafe، مع دعم كامل 5G وتقنية Wi-Fi 7 والاتصال بالأقمار الصناعية.",
    iphone17_warranty: "الضمان تشمل اي خلل مصنعي ويشمل اذا الجهاز طفى فجأة",
    cat_smartphones: "الهواتف الذكية",
    cat_smartphones_count: "+50 منتج",
    cat_laptops: "الحواسيب المحمولة",
    cat_laptops_count: "+30 منتج",
    cat_wearables: "الأجهزة القابلة للارتداء",
    cat_wearables_count: "+25 منتج",
    cat_accessories: "الإكسسوارات",
    cat_accessories_count: "+100 منتج",
    cat_smarthome: "المنزل الذكي",
    cat_smarthome_count: "+40 منتج",
    cat_audio: "الصوتيات",
    cat_audio_count: "+35 منتج",
    cat_electronics: "الإلكترونيات",
    cat_electronics_count: "+20 منتج",

    // Products
    products_label: "منتجات مميزة",
    products_title: "الأكثر مبيعاً",
    products_subtitle: "تشكيلة مختارة من أفضل المنتجات التقنية وأعلاها جودة",
    view_all: "عرض جميع المنتجات",
    add_to_cart: "أضف للسلة",
    product_new: "جديد",
    product_hot: "رائج",
    product_sale: "تخفيض",

    // Product Items
    p1_category: "الهواتف الذكية",
    p1_title: "iPhone 16 Pro Max",
    p1_desc: "الآيفون الأقوى مع شريحة A18 Pro ونظام كاميرا 48 ميجابكسل وتصميم من التيتانيوم.",
    p1_price: "1,399,000 د.ع",

    p2_category: "الهواتف الذكية",
    p2_title: "Samsung Galaxy S24 Ultra",
    p2_desc: "الهاتف الرائد بتقنية Galaxy AI مع قلم S Pen وكاميرا 200 ميجابكسل وإطار تيتانيوم.",
    p2_price: "1,499,000 د.ع",

    p3_category: "الصوتيات",
    p3_title: "AirPods Pro 2",
    p3_desc: "إلغاء ضوضاء نشط، صوت تكيّفي، وعلبة شحن USB-C.",
    p3_price: "299,000 د.ع",

    p4_category: "الأجهزة القابلة للارتداء",
    p4_title: "Apple Watch Ultra 2",
    p4_desc: "ساعة Apple الأقوى مع GPS دقيق وبطارية تدوم 72 ساعة.",
    p4_price: "949,000 د.ع",

    p5_category: "الحواسيب المحمولة",
    p5_title: "MacBook Pro M3",
    p5_desc: "مدعوم بشرائح M3 Pro و M3 Max لأداء غير مسبوق.",
    p5_price: "2,399,000 د.ع",

    p6_category: "الأجهزة اللوحية",
    p6_title: "iPad Pro M4",
    p6_desc: "أنحف منتج من Apple على الإطلاق مع شريحة M4 وشاشة Ultra Retina XDR.",
    p6_price: "1,299,000 د.ع",

    p7_category: "المنزل الذكي",
    p7_title: "مكنسة روبوت ذكية",
    p7_desc: "مكنسة ذكية برسم خرائط تلقائي ومحطة تنظيف ذاتية.",
    p7_price: "450,000 د.ع",

    p8_category: "المنزل الذكي",
    p8_title: "منقي هواء ذكي",
    p8_desc: "فلترة HEPA متقدمة لهواء أنظف وأكثر صحة في منزلك.",
    p8_price: "250,000 د.ع",

    p9_category: "الإلكترونيات",
    p9_title: "صانعة قهوة ذكية",
    p9_desc: "ماكينة اسبريسو تدعم Wi-Fi، خصص قهوتك الصباحية.",
    p9_price: "350,000 د.ع",

    p10_category: "الإلكترونيات",
    p10_title: "نظام إضاءة ذكي",
    p10_desc: "إضاءة RGB قابلة للتعديل لأي مزاج، يتم التحكم بها عبر التطبيق.",
    p10_price: "120,000 د.ع",

    p11_category: "المنزل الذكي",
    p11_title: "كاميرا مراقبة ذكية",
    p11_desc: "دقة 4K مع اكتشاف الحركة بالذكاء الاصطناعي ورؤية ليلية.",
    p11_price: "185,000 د.ع",

    p12_category: "الإلكترونيات",
    p12_title: "ثرموستات ذكي",
    p12_desc: "تحسين استخدام الطاقة والتحكم بدرجة حرارة المنزل عن بُعد.",
    p12_price: "199,000 د.ع",

    // Features
    features_label: "لماذا آسيا ستور",
    features_title: "لماذا تختارنا؟",
    features_subtitle: "اختيارك لآسيا ستور يعني أنك اخترت راحة البال",

    f1_title: "ضمان حقيقي",
    f1_desc: "ضمانات حقيقية تشمل العيوب المصنعية والأداء المستقر — ليس مجرد حبر على ورق.",

    f2_title: "متابعة كاملة مع الوكالات",
    f2_desc: "نحن نتولى مراجعة الوكالات الرسمية ومتابعة الصيانة حتى يعود جهازك بأفضل حالة فنية.",

    f3_title: "خدمات ما بعد البيع",
    f3_desc: "فريق متخصص يقدم استشارات تقنية ودعم فني مستمر لجميع أجهزتك.",

    f4_title: "منتجات أصلية 100%",
    f4_desc: "نتعامل مباشرة مع الوكلاء الرسميين لضمان وصول المنتج الأصلي بكل ملحقاته.",

    // CTA
    cta_title: "ابقَ على اطلاع بأحدث التقنيات",
    cta_subtitle: "اشترك لتصلك العروض الحصرية وأخبار المنتجات الجديدة.",
    cta_placeholder: "أدخل بريدك الإلكتروني",
    cta_btn: "اشترك",

    // About Page
    about_hero_label: "قصتنا",
    about_hero_title: "قصة بدأت بالرؤية واكتملت بالتطور",
    about_hero_subtitle: "منذ عام 2011، نمت آسيا ستور من شغف بالتكنولوجيا إلى مركز تقني متكامل يقدم حلول ذكية.",

    about_story_title: "رحلتنا",
    about_story_p1: "لم يكن آسيا ستور مجرد وليد صدفة، بل هو نتاج تخطيط استراتيجي بدأ منذ عام 2011. انطلقنا من شغف عميق بالتقنيات الحديثة، ومن متاجر بسيطة للهواتف الذكية شققنا طريقنا بثبات، مدركين أن القوة الحقيقية تكمن في 'ذكاء الاختيار' و'أمان التعامل'.",
    about_story_p2: "في عام 2024، تبلورت هذه الرؤية ليولد آسيا ستور كمركز تقني متكامل، يجمع بين أحدث الحلول الذكية للمنازل وأقوى الأجهزة الذكية العالمية.",

    about_experience_title: "15 عاماً من الخبرة التقنية",
    about_experience_desc: "نحن لا نتحدث عن أرقام، بل عن إرث من الخبرة الميدانية يمتد لأكثر من 15 عاماً. عاصرنا خلالها كل قفزات التكنولوجيا؛ من أولى أجيال الهواتف الذكية وصولاً إلى ثورة الروبوتات والذكاء الاصطناعي.",

    timeline_2011_title: "البداية",
    timeline_2011_desc: "انطلقنا برؤية واضحة وشغف بالتكنولوجيا في السوق العراقي.",
    timeline_2015_title: "مرحلة النمو",
    timeline_2015_desc: "وسّعنا مجموعة منتجاتنا وبنينا علاقات قوية مع العلامات التجارية العالمية.",
    timeline_2020_title: "التحول الرقمي",
    timeline_2020_desc: "تبنينا التجارة الإلكترونية وحلول المنزل الذكي لخدمة المزيد من العملاء.",
    timeline_2024_title: "آسيا ستور اليوم",
    timeline_2024_desc: "مركز تقني متكامل يجمع بين أحدث الأجهزة والخدمة المتميزة.",

    // Contact Page
    contact_hero_label: "تواصل معنا",
    contact_hero_title: "اتصل بنا",
    contact_hero_subtitle: "يسعدنا سماعك. تواصل معنا عبر أي من قنواتنا.",

    contact_location_title: "موقعنا",
    contact_location_text: "بغداد – السبع أبكار – الشارع العام – مجاور ثانوية الانتصار",

    contact_phone_title: "الهاتف والواتساب",
    contact_phone_text: "07746400400 – 07747400400",

    contact_hours_title: "أوقات الدوام",
    contact_hours_daily: "يومياً: 10:00 صباحاً – 10:00 مساءً",
    contact_hours_friday: "الجمعة: 4:00 عصراً – 10:00 مساءً",

    contact_form_name: "الاسم الكامل",
    contact_form_email: "البريد الإلكتروني",
    contact_form_phone: "رقم الهاتف",
    contact_form_message: "رسالتك",
    contact_form_submit: "إرسال الرسالة",

    contact_follow: "تابعنا",

    // Footer
    footer_desc: "وجهتك المميزة لأحدث الأجهزة الذكية وحلول التكنولوجيا المبتكرة منذ 2011.",
    footer_quick: "روابط سريعة",
    footer_support: "الدعم",
    footer_warranty: "سياسة الضمان",
    footer_returns: "الاسترجاع",
    footer_faq: "الأسئلة الشائعة",
    footer_privacy: "سياسة الخصوصية",
    footer_contact: "معلومات التواصل",
    footer_rights: "© 2024 آسيا ستور. جميع الحقوق محفوظة.",
    footer_tagline: "حيث تبدأ التقنية بثقة.",

    // Warranty Page
    warranty_hero_label: "سياسة الضمان",
    warranty_hero_title: "ضمانك للجودة",
    warranty_hero_subtitle: "نؤمن بجودة كل منتج نبيعه. سياسة الضمان لدينا تضمن راحة بالك الكاملة.",
    warranty_intro: "في آسيا ستور، نحن ملتزمون بتوفير تغطية ضمان حقيقية لجميع المنتجات المشتراة من متجرنا. ضماننا مدعوم من الوكلاء والمصنعين الرسميين.",
    warranty_coverage_title: "ما يشمله الضمان",
    warranty_c1_title: "العيوب المصنعية",
    warranty_c1_desc: "جميع العيوب المصنعية والأعطال التقنية التي تحدث في ظروف الاستخدام الطبيعية مغطاة بالكامل.",
    warranty_c2_title: "مشاكل البرمجيات",
    warranty_c2_desc: "مشاكل البرمجيات الأصلية وأخطاء النظام التي تظهر خلال فترة الضمان مغطاة.",
    warranty_c3_title: "أداء البطارية",
    warranty_c3_desc: "تدهور البطارية دون الحدود المحددة من الشركة المصنعة خلال فترة الضمان مغطى.",
    warranty_c4_title: "تعطل المكونات",
    warranty_c4_desc: "أعطال المكونات الداخلية بما في ذلك الشاشة والسماعات والكاميرات ووحدات الاتصال مغطاة.",
    warranty_not_covered_title: "ما لا يشمله الضمان",
    warranty_nc1: "الأضرار المادية من السقوط أو الصدمات أو التعرض للسوائل",
    warranty_nc2: "الأضرار الناتجة عن التعديلات أو الإصلاحات غير المعتمدة",
    warranty_nc3: "التآكل والبلى الطبيعي بما في ذلك الخدوش والأضرار التجميلية",
    warranty_nc4: "الأضرار الناتجة عن سوء الاستخدام أو الإهمال أو استخدام ملحقات غير متوافقة",
    warranty_nc5: "القطع الاستهلاكية (الكابلات، المحولات) بعد 30 يوماً",
    warranty_process_title: "خطوات المطالبة بالضمان",
    warranty_step1_title: "تواصل معنا",
    warranty_step1_desc: "تواصل عبر الهاتف أو الواتساب أو قم بزيارة متجرنا للإبلاغ عن المشكلة.",
    warranty_step2_title: "فحص الجهاز",
    warranty_step2_desc: "فريقنا التقني سيقوم بفحص جهازك وتحديد أهلية الضمان.",
    warranty_step3_title: "الإصلاح الرسمي",
    warranty_step3_desc: "نتنسق مع الوكالة الرسمية للإصلاح المهني أو الاستبدال.",
    warranty_step4_title: "العودة إليك",
    warranty_step4_desc: "يعود جهازك بحالة عمل مثالية — بدون أي عناء.",
    warranty_periods_title: "فترات الضمان",
    warranty_device: "نوع الجهاز",
    warranty_period: "فترة الضمان",
    warranty_smartphones: "الهواتف الذكية",
    warranty_smartphones_period: "12 شهر",
    warranty_laptops: "الحواسيب المحمولة",
    warranty_laptops_period: "12 شهر",
    warranty_watches: "الساعات الذكية",
    warranty_watches_period: "12 شهر",
    warranty_audio: "أجهزة الصوت",
    warranty_audio_period: "6 أشهر",
    warranty_accessories: "الإكسسوارات",
    warranty_accessories_period: "3 أشهر",
    warranty_smarthome: "أجهزة المنزل الذكي",
    warranty_smarthome_period: "12 شهر",
    warranty_note: "ملاحظة: قد تختلف فترات الضمان بناءً على مواصفات الشركة المصنعة. احتفظ دائماً بإيصال الشراء كإثبات للضمان.",

    // Returns Page
    returns_hero_label: "سياسة الاسترجاع",
    returns_hero_title: "استرجاع واستبدال سهل",
    returns_hero_subtitle: "رضاك هو أولويتنا. جعلنا عملية الاسترجاع بسيطة وشفافة.",
    returns_intro: "نريد أن تكون راضياً تماماً عن مشترياتك. إذا احتجت لاسترجاع أو استبدال منتج لأي سبب، نحن هنا لمساعدتك.",
    returns_eligibility_title: "شروط الاسترجاع",
    returns_e1_title: "7 أيام للاسترجاع",
    returns_e1_desc: "يمكن إرجاع المنتجات خلال 7 أيام من الشراء، شريطة أن تكون بحالتها الأصلية مع جميع التغليف والملحقات.",
    returns_e2_title: "الحالة الأصلية مطلوبة",
    returns_e2_desc: "يجب أن تكون المنتجات غير مستخدمة، في تغليفها الأصلي مع جميع الأختام سليمة، وتشمل جميع الملحقات والكتيبات.",
    returns_e3_title: "إثبات الشراء",
    returns_e3_desc: "إيصال شراء صالح من آسيا ستور مطلوب لجميع عمليات الاسترجاع والاستبدال.",
    returns_non_returnable_title: "المنتجات غير القابلة للإرجاع",
    returns_nr1: "البرمجيات المفتوحة أو المنتجات الرقمية أو الأجهزة المفعّلة",
    returns_nr2: "المنتجات ذات الأختام الأمنية المزالة أو التالفة",
    returns_nr3: "المنتجات المخصصة أو المُعدّة حسب الطلب",
    returns_nr4: "المنتجات التي تظهر عليها علامات الاستخدام أو التلف",
    returns_nr5: "المواد الاستهلاكية (واقيات الشاشة، الأغطية بعد الاستخدام)",
    returns_process_title: "خطوات الاسترجاع",
    returns_step1_title: "بدء الاسترجاع",
    returns_step1_desc: "تواصل معنا خلال 7 أيام من الشراء لبدء عملية الاسترجاع.",
    returns_step2_title: "إحضار للمتجر",
    returns_step2_desc: "أحضر المنتج مع جميع التغليف الأصلي وإيصال الشراء إلى متجرنا.",
    returns_step3_title: "الفحص",
    returns_step3_desc: "فريقنا سيفحص المنتج للتحقق من استيفائه لشروط الاسترجاع.",
    returns_step4_title: "استرداد أو استبدال",
    returns_step4_desc: "اختر بين استرداد كامل المبلغ أو استبدال بمنتج آخر.",
    returns_exchange_title: "سياسة الاستبدال",
    returns_exchange_desc: "نوفر خيار الاستبدال بنفس المنتج (لون/سعة مختلفة) أو منتج مختلف مع تعديل السعر. الاستبدال يخضع لتوفر المنتج.",
    returns_defective_title: "المنتجات المعيبة",
    returns_defective_desc: "إذا استلمت منتجاً معيباً، نقدم استبدالاً فورياً أو استرداداً كاملاً بغض النظر عن حالة الفتح. يجب تقديم مطالبات المنتجات المعيبة خلال 48 ساعة من الشراء.",

    // FAQ Page
    faq_hero_label: "الأسئلة الشائعة",
    faq_hero_title: "الأسئلة المتكررة",
    faq_hero_subtitle: "اعثر على إجابات لأكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا.",
    faq_general: "عام",
    faq_products: "المنتجات",
    faq_warranty_support: "الضمان والدعم",
    faq_payment: "الدفع والتوصيل",
    faq_q1: "ما هو آسيا ستور؟",
    faq_a1: "آسيا ستور هو مركز تقني متميز تأسس عام 2011، يقدم أحدث الأجهزة الذكية وحلول المنزل الذكي والإكسسوارات التقنية. مع خبرة ميدانية تمتد لأكثر من 15 عاماً في السوق العراقي، نوفر منتجات أصلية مدعومة بضمانات رسمية.",
    faq_q2: "أين يقع آسيا ستور؟",
    faq_a2: "نحن في بغداد – السبع أبكار – الشارع العام – مجاور ثانوية الانتصار. يمكنك إيجادنا على خرائط Google للوصول بسهولة.",
    faq_q3: "ما هي أوقات الدوام؟",
    faq_a3: "نحن مفتوحون يومياً من الساعة 10:00 صباحاً إلى 10:00 مساءً، عدا يوم الجمعة من 4:00 عصراً إلى 10:00 مساءً.",
    faq_q4: "هل جميع المنتجات أصلية؟",
    faq_a4: "نعم، 100% من منتجاتنا أصلية ومُوردة مباشرة من الوكلاء المعتمدين والموزعين الرسميين. نحن نضمن أصالة كل منتج مع جميع الملحقات والوثائق.",
    faq_q5: "ما هي العلامات التجارية المتوفرة؟",
    faq_a5: "نوفر جميع العلامات التجارية العالمية الرائدة بما في ذلك Apple و Samsung و Huawei و Xiaomi والمزيد. تشمل مجموعتنا الهواتف الذكية والحواسيب المحمولة والأجهزة اللوحية والساعات الذكية وأجهزة الصوت ومنتجات المنزل الذكي.",
    faq_q6: "هل يمكنني تجربة المنتج قبل الشراء؟",
    faq_a6: "بالتأكيد! نشجع العملاء على تجربة المنتجات في متجرنا قبل الشراء. فريقنا متاح لعرض المميزات ومساعدتك في اتخاذ القرار الأفضل.",
    faq_q7: "ما الذي يغطيه الضمان؟",
    faq_a7: "يغطي ضماننا العيوب المصنعية والأعطال التقنية ومشاكل البرمجيات في ظروف الاستخدام الطبيعية. الأضرار المادية وأضرار المياه والتعديلات غير المعتمدة غير مشمولة. راجع صفحة سياسة الضمان للتفاصيل الكاملة.",
    faq_q8: "كيف أطالب بالضمان؟",
    faq_a8: "ببساطة أحضر جهازك وإيصال الشراء إلى متجرنا، أو تواصل معنا عبر الهاتف/الواتساب. نحن نتولى جميع التواصل مع الوكالات الرسمية ونتابع الإصلاحات حتى يعود جهازك بحالة مثالية.",
    faq_q9: "هل تقدمون دعم ما بعد البيع؟",
    faq_a9: "نعم! فريق الدعم المتخصص لدينا يقدم استشارات تقنية ومساعدة في الإعداد ودعم مستمر. نؤمن أن العلاقة مع العميل تبدأ بعد البيع.",
    faq_q10: "ما هي طرق الدفع المقبولة؟",
    faq_a10: "نقبل الدفع النقدي والتحويل البنكي. للمشتريات الكبيرة، قد نوفر خطط تقسيط عبر البنوك الشريكة.",
    faq_q11: "هل تقدمون خدمة التوصيل؟",
    faq_a11: "حالياً، عمليات الشراء تتم في المتجر. نعمل على توسيع خدمات التوصيل في بغداد والمدن العراقية الأخرى.",
    faq_q12: "هل يمكنني طلب منتج غير متوفر؟",
    faq_a12: "نعم، يمكننا طلب منتجات خاصة حسب الطلب. تواصل معنا بتفاصيل المنتج وسنوفر معلومات التوفر والسعر خلال 24-48 ساعة.",
    faq_still_have: "لا تزال لديك أسئلة؟",
    faq_contact_us: "تواصل مع فريقنا وسنكون سعداء بمساعدتك.",

    // Privacy Page
    privacy_hero_label: "سياسة الخصوصية",
    privacy_hero_title: "خصوصيتك تهمنا",
    privacy_hero_subtitle: "نحن ملتزمون بحماية معلوماتك الشخصية والشفافية في كيفية استخدامها.",
    privacy_updated: "آخر تحديث: مارس 2024",
    privacy_intro_title: "مقدمة",
    privacy_intro_desc: "آسيا ستور ('نحن'، 'لنا') ملتزمة بحماية خصوصية وأمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية بياناتك عند تعاملك مع متجرنا وخدماتنا.",
    privacy_collect_title: "المعلومات التي نجمعها",
    privacy_collect_1_title: "المعلومات الشخصية",
    privacy_collect_1_desc: "الاسم ورقم الهاتف والبريد الإلكتروني وعنوان التوصيل عند إجراء عملية شراء أو إنشاء حساب.",
    privacy_collect_2_title: "بيانات المعاملات",
    privacy_collect_2_desc: "سجل المشتريات وطرق الدفع ومطالبات الضمان وطلبات الاسترجاع.",
    privacy_collect_3_title: "بيانات التواصل",
    privacy_collect_3_desc: "الرسائل والاستفسارات المرسلة عبر نموذج التواصل أو الواتساب أو منصات التواصل الاجتماعي.",
    privacy_collect_4_title: "معلومات الجهاز",
    privacy_collect_4_desc: "الأرقام التسلسلية للأجهزة وأرقام IMEI لأغراض تسجيل الضمان والتتبع.",
    privacy_use_title: "كيف نستخدم معلوماتك",
    privacy_use_1: "معالجة وتنفيذ مشترياتك",
    privacy_use_2: "إدارة مطالبات الضمان ودعم ما بعد البيع",
    privacy_use_3: "إرسال تأكيدات المعاملات والتحديثات",
    privacy_use_4: "تحسين منتجاتنا وتجربة العملاء",
    privacy_use_5: "الرد على استفساراتك وتقديم الدعم",
    privacy_use_6: "إرسال عروض ترويجية (بموافقتك فقط)",
    privacy_protect_title: "كيف نحمي بياناتك",
    privacy_protect_desc: "نطبق إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف. بياناتك مخزنة بأمان ويصل إليها فقط الموظفون المصرح لهم.",
    privacy_share_title: "مشاركة البيانات",
    privacy_share_desc: "نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلومات محدودة مع وكالات العلامات التجارية الرسمية فقط لأغراض معالجة الضمان وتسجيل المنتجات.",
    privacy_rights_title: "حقوقك",
    privacy_right_1: "الوصول إلى معلوماتك الشخصية التي نحتفظ بها",
    privacy_right_2: "طلب تصحيح البيانات غير الدقيقة",
    privacy_right_3: "طلب حذف بياناتك الشخصية",
    privacy_right_4: "إلغاء الاشتراك في الاتصالات الترويجية",
    privacy_right_5: "طلب نسخة من بياناتك",
    privacy_cookies_title: "ملفات تعريف الارتباط وبيانات الموقع",
    privacy_cookies_desc: "يستخدم موقعنا ملفات تعريف ارتباط بسيطة لتفضيلات اللغة والوظائف الأساسية. نحن لا نستخدم ملفات تعريف التتبع ولا نشارك بيانات التصفح مع أطراف ثالثة.",
    privacy_changes_title: "التغييرات على هذه السياسة",
    privacy_changes_desc: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ مراجعة محدث.",
    privacy_contact_title: "تواصل معنا بخصوص الخصوصية",
    privacy_contact_desc: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتك، يرجى التواصل معنا.",

    // Games Page
    games_hero_label: "منطقة الألعاب",
    games_hero_title: "العب واستمتع",
    games_hero_subtitle: "خذ استراحة واستمتع بهذه الألعاب الكلاسيكية أثناء تصفح متجرنا.",
    games_tetris: "تتريس",
    games_tetris_desc: "لعبة الألغاز الكلاسيكية لتكديس المكعبات. أكمل الصفوف وحقق أعلى النقاط!",
    games_pacman: "باك مان",
    games_pacman_desc: "تنقل في المتاهة، كل جميع النقاط، وتجنب الأشباح!",
    games_mario: "سوبر ماريو",
    games_mario_desc: "اقفز، اركض، واجمع العملات في هذه المغامرة الكلاسيكية!",
    games_play: "العب الآن",
    games_score: "النقاط",
    games_high_score: "أعلى نتيجة",
    games_level: "المستوى",
    games_lines: "الصفوف",
    games_game_over: "انتهت اللعبة!",
    games_restart: "العب مجدداً",
    games_back: "العودة للألعاب",
    games_controls: "التحكم",
    games_controls_arrows: "أسهم لوحة المفاتيح للتحرك",
    games_controls_space: "مسافة للقفز / الدوران",
    games_pause: "P للإيقاف المؤقت"
  }
};

// Translation Engine
function t(key) {
  const lang = document.documentElement.getAttribute('lang') || 'ar';
  return translations[lang]?.[key] || translations['en']?.[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (el.hasAttribute('data-i18n-placeholder')) {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update font family
  document.body.style.fontFamily = lang === 'ar'
    ? "'Tajawal', 'Inter', sans-serif"
    : "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save preference
  localStorage.setItem('asia-store-lang', lang);

  // Apply translations
  applyTranslations();
}

function initLanguage() {
  const savedLang = localStorage.getItem('asia-store-lang') || 'ar';
  setLanguage(savedLang);
}
