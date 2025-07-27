import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    tours: 'الجولات',
    safariTours: 'جولات السفاري',
    luxurySafaris: 'السفاري الفاخرة',
    budgetSafaris: 'السفاري الاقتصادية',
    customPackages: 'باقات مخصصة',
    destinations: 'الوجهات',
    maasaiMara: 'ماساي مارا',
    amboseli: 'أمبوسيلي',
    tsavo: 'تسافو',
    dianiBeach: 'شاطئ ديان',
    aboutUs: 'من نحن',
    contact: 'اتصل بنا',
    requestQuote: 'طلب عرض سعر',
    
    // Home page
    welcomeToInjaaz: 'مرحباً بكم في إنجاز',
    premiumToursSubtitle: 'وكالة الجولات السياحية الفاخرة في كينيا',
    heroDescription: 'اكتشف جمال كينيا الساحر مع إنجاز. نقدم لك تجارب سياحية لا تُنسى تجمع بين الفخامة والأصالة، من سفاري ماساي مارا إلى شواطئ ديان الذهبية.',
    exploreTours: 'استكشف الجولات',
    getQuote: 'احصل على عرض سعر',
    customPackage: 'باقة مخصصة',
    
    // Features
    whyChooseInjaaz: 'لماذا تختار إنجاز؟',
    expertGuides: 'مرشدون خبراء',
    expertGuidesDesc: 'فريق من المرشدين المحليين ذوي الخبرة الواسعة',
    luxuryAccommodation: 'إقامة فاخرة',
    luxuryAccommodationDesc: 'أفضل الفنادق والمنتجعات في كينيا',
    customizedTours: 'جولات مخصصة',
    customizedToursDesc: 'برامج سياحية مصممة حسب احتياجاتك',
    safetyFirst: 'الأمان أولاً',
    safetyFirstDesc: 'التزام كامل بأعلى معايير السلامة والأمان',
    
    // Destinations
    popularDestinations: 'الوجهات الشائعة',
    maasaiMaraDesc: 'الهجرة الكبرى والحيوانات الخمسة الكبار',
    amboseliDesc: 'جبل كيليمنجارو وجنة الأفيال',
    dianiBeachDesc: 'الشواطئ الرملية البيضاء ومغامرات المحيط',
    
    // About
    aboutInjaaz: 'عن إنجاز',
    aboutDescription: 'إنجاز هي وكالة سياحية رائدة في كينيا، متخصصة في تقديم تجارب سياحية فاخرة ومخصصة للمسافرين العرب. نحن نؤمن بأن السياحة يجب أن تكون تجربة تحويلية تجمع بين الجمال الطبيعي والثقافة المحلية والضيافة الأصيلة.',
    
    // Contact
    contactUs: 'اتصل بنا',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    nairobiKenya: 'نيروبي، كينيا',
    
    // Forms
    name: 'الاسم',
    emailAddress: 'البريد الإلكتروني',
    message: 'الرسالة',
    submit: 'إرسال',
    groupSize: 'حجم المجموعة',
    budget: 'الميزانية',
    travelDates: 'تواريخ السفر',
    interests: 'الاهتمامات',
    
    // Payment
    paymentMethods: 'طرق الدفع',
    securePayment: 'دفع آمن ومضمون',
    
    // Footer
    followUs: 'تابعنا',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    home: 'Home',
    tours: 'Tours',
    safariTours: 'Safari Tours',
    luxurySafaris: 'Luxury Safaris',
    budgetSafaris: 'Budget Safaris',
    customPackages: 'Custom Packages',
    destinations: 'Destinations',
    maasaiMara: 'Maasai Mara',
    amboseli: 'Amboseli',
    tsavo: 'Tsavo',
    dianiBeach: 'Diani Beach',
    aboutUs: 'About Us',
    contact: 'Contact',
    requestQuote: 'Request Quote',
    
    // Home page
    welcomeToInjaaz: 'Welcome to Injaaz',
    premiumToursSubtitle: 'Premium Tour Agency in Kenya',
    heroDescription: 'Discover the enchanting beauty of Kenya with Injaaz. We offer unforgettable travel experiences that combine luxury with authenticity, from Maasai Mara safaris to the golden beaches of Diani.',
    exploreTours: 'Explore Tours',
    getQuote: 'Get Quote',
    customPackage: 'Custom Package',
    
    // Features
    whyChooseInjaaz: 'Why Choose Injaaz?',
    expertGuides: 'Expert Guides',
    expertGuidesDesc: 'Team of experienced local guides with extensive knowledge',
    luxuryAccommodation: 'Luxury Accommodation',
    luxuryAccommodationDesc: 'The finest hotels and resorts in Kenya',
    customizedTours: 'Customized Tours',
    customizedToursDesc: 'Travel programs designed according to your needs',
    safetyFirst: 'Safety First',
    safetyFirstDesc: 'Full commitment to the highest safety and security standards',
    
    // Destinations
    popularDestinations: 'Popular Destinations',
    maasaiMaraDesc: 'The Great Migration & Big Five Safari',
    amboseliDesc: 'Mt. Kilimanjaro & Elephant Paradise',
    dianiBeachDesc: 'White Sandy Beaches & Ocean Adventures',
    
    // About
    aboutInjaaz: 'About Injaaz',
    aboutDescription: 'Injaaz is a leading tour agency in Kenya, specializing in luxury and customized travel experiences for Arab travelers. We believe that tourism should be a transformative experience that combines natural beauty, local culture, and authentic hospitality.',
    
    // Contact
    contactUs: 'Contact Us',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    nairobiKenya: 'Nairobi, Kenya',
    
    // Forms
    name: 'Name',
    emailAddress: 'Email Address',
    message: 'Message',
    submit: 'Submit',
    groupSize: 'Group Size',
    budget: 'Budget',
    travelDates: 'Travel Dates',
    interests: 'Interests',
    
    // Payment
    paymentMethods: 'Payment Methods',
    securePayment: 'Secure & Guaranteed Payment',
    
    // Footer
    followUs: 'Follow Us',
    allRightsReserved: 'All Rights Reserved',
  }
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations['ar']] || key;
  };
  
  return { t };
};