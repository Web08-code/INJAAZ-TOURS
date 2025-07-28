import { Link } from 'react-router-dom';
import { Star, Crown, Plane, Utensils, Camera, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const LuxurySafaris = () => {
  const { language } = useLanguage();

  const luxuryPackages = [
    {
      title: language === 'en' ? 'Royal Safari - Maasai Mara' : 'السفاري الملكية - ماساي مارا',
      duration: language === 'en' ? '5 Days / 4 Nights' : '5 أيام / 4 ليالي',
      price: '$2,800',
      category: language === 'en' ? 'Ultra Luxury' : 'فاخر جداً',
      image: '/Maasai mara.jpg',
      highlights: [
        language === 'en' ? 'Exclusive 5-star resort' : 'منتجع 5 نجوم حصرياً',
        language === 'en' ? 'Private flights' : 'رحلات طيران خاصة',
        language === 'en' ? 'Personal guide' : 'مرشد شخصي',
        language === 'en' ? 'Gourmet meals' : 'وجبات فاخرة'
      ],
      luxury_features: [
        language === 'en' ? 'Presidential suite' : 'جناح رئاسي',
        language === 'en' ? 'Butler service' : 'خدمة بتلر',
        language === 'en' ? 'Spa & wellness center' : 'سبا ومنتجع صحي',
        language === 'en' ? 'Professional photography' : 'تصوير احترافي'
      ]
    },
    {
      title: language === 'en' ? 'Amboseli Luxury Experience' : 'تجربة أمبوسيلي الفاخرة',
      duration: language === 'en' ? '4 Days / 3 Nights' : '4 أيام / 3 ليالي',
      price: '$2,200',
      category: language === 'en' ? 'Luxury' : 'فاخر',
      image: '/Maasai mara (2).jpg',
      highlights: [
        language === 'en' ? 'Kilimanjaro views' : 'إطلالة كيليمنجارو',
        language === 'en' ? 'Exclusive luxury lodge' : 'نزل فاخر حصري',
        language === 'en' ? 'Balloon safaris' : 'رحلات بالونة',
        language === 'en' ? 'Romantic dinner' : 'عشاء رومانسي'
      ],
      luxury_features: [
        language === 'en' ? 'Luxury air-conditioned tent' : 'خيمة فاخرة مكيفة',
        language === 'en' ? 'Private swimming pool' : 'حمام سباحة خاص',
        language === 'en' ? 'African massage' : 'مساج أفريقي',
        language === 'en' ? 'Private bar' : 'بار خاص'
      ]
    },
    {
      title: language === 'en' ? 'Comprehensive Royal Safari' : 'رحلة السفاري الملكية الشاملة',
      duration: language === 'en' ? '7 Days / 6 Nights' : '7 أيام / 6 ليالي',
      price: '$4,500',
      category: language === 'en' ? 'Ultimate Luxury' : 'الأفخم',
      image: '/Maasai mara (3).jpg',
      highlights: [
        language === 'en' ? 'Multi-location comprehensive tour' : 'جولة شاملة متعددة المواقع',
        language === 'en' ? 'Private internal flights' : 'طيران داخلي خاص',
        language === 'en' ? 'Accommodation in the most luxurious resorts' : 'إقامة في أفخم المنتجعات',
        language === 'en' ? 'Exclusive cultural experience' : 'تجربة ثقافية حصرية'
      ],
      luxury_features: [
        language === 'en' ? 'Private Land Cruiser' : 'سيارة لاند كروزر خاصة',
        language === 'en' ? 'Personal chef' : 'شيف شخصي',
        language === 'en' ? '24/7 concierge' : 'كونسيرج 24/7',
        language === 'en' ? 'Exclusive night tours' : 'جولات ليلية حصرية'
      ]
    }
  ];

  const luxuryFeatures = [
    {
      icon: Crown,
      title: language === 'en' ? 'Royal Accommodation' : 'إقامة ملكية',
      description: language === 'en' ? 'The most luxurious and exclusive resorts and lodges with 5-star service' : 'أفخم المنتجعات والنزل الحصرية مع خدمة 5 نجوم',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Plane,
      title: language === 'en' ? 'Luxury Transportation' : 'نقل فاخر',
      description: language === 'en' ? 'Private flights and air-conditioned Land Cruisers' : 'رحلات طيران خاصة وسيارات لاند كروزر المكيفة',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Utensils,
      title: language === 'en' ? 'Exceptional Dining Experience' : 'تجربة طعام استثنائية',
      description: language === 'en' ? 'Private chef and gourmet meals in stunning natural settings' : 'شيف خاص ووجبات فاخرة في أجواء طبيعية رائعة',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Camera,
      title: language === 'en' ? 'Professional Photography' : 'تصوير احترافي',
      description: language === 'en' ? 'Professional photographer to capture your journey\'s most beautiful moments' : 'مصور محترف يوثق رحلتك بأجمل اللحظات',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Safety and Comfort' : 'أمان وراحة',
      description: language === 'en' ? 'Highest safety standards with distinguished personal service' : 'أعلى معايير الأمان مع خدمة شخصية متميزة',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Star,
      title: language === 'en' ? 'Exclusive Experiences' : 'تجارب حصرية',
      description: language === 'en' ? 'Exclusive activities and locations not available on regular tours' : 'أنشطة ومواقع حصرية غير متاحة للجولات العادية',
      color: 'from-pink-500 to-pink-700'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full">
              <Crown className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            {language === 'en' ? 'Luxury Safaris' : 'السفاري الفاخرة'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'An unforgettable luxury experience with the best services and exclusive facilities. Live the safari like royalty'
              : 'تجربة فاخرة لا تُنسى مع أفضل الخدمات والمرافق الحصرية. عيش السفاري كما يفعل الملوك'}
          </p>
        </div>

        {/* Luxury Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {luxuryPackages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all transform hover:scale-105 border border-yellow-200">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {pkg.category}
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  <Crown className="h-3 w-3 inline mr-1" />
                  {language === 'en' ? 'Luxury' : 'فاخر'}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-yellow-300">{pkg.duration}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    {language === 'en' ? 'Key Features:' : 'المميزات الرئيسية:'}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 mr-1"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                    <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                    {language === 'en' ? 'Luxury Services:' : 'الخدمات الفاخرة:'}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.luxury_features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <Star className="h-3 w-3 text-yellow-500 ml-3 mr-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t-2 border-yellow-200">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                    {pkg.price}
                    <span className="text-sm font-normal text-gray-500">{language === 'en' ? '/person' : '/شخص'}</span>
                  </div>
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    {language === 'en' ? 'Book Now' : 'احجز الآن'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Features */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            {language === 'en' ? 'Luxury Safari Features' : 'مميزات السفاري الفاخرة'}
          </h2>
          <p className="text-green-200 text-center text-lg mb-12 max-w-3xl mx-auto">
            {language === 'en'
              ? 'We offer you a unique experience that combines the beauty of African nature and global luxury'
              : 'نقدم لك تجربة فريدة تجمع بين جمال الطبيعة الأفريقية والفخامة العالمية'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-center mb-3">{feature.title}</h3>
                <p className="text-green-200 text-sm text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed">
                {language === 'en'
                  ? '"The luxury safari with Injaaz was the most amazing experience of my life. Every detail was perfect, from the royal accommodation to the exceptional service. We felt like African kings!"'
                  : '"كانت رحلة السفاري الفاخرة مع إنجاز أروع تجربة في حياتي. كل التفاصيل كانت مثالية، من الإقامة الملكية إلى الخدمة الاستثنائية. شعرنا وكأننا ملوك أفريقيا!"'}
              </blockquote>
              <cite className="block mt-6 text-lg text-green-800 font-semibold">
                {language === 'en' ? '- Ahmed Al-Saleh, Riyadh' : '- أحمد الصالح، الرياض'}
              </cite>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 text-white text-center">
          <Crown className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'Get Ready for the Royal Experience' : 'استعد للتجربة الملكية'}
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Let us design an unforgettable luxury safari experience for you with the best services and exclusive facilities'
              : 'دعنا نصمم لك تجربة سفاري فاخرة لا تُنسى مع أفضل الخدمات والمرافق الحصرية'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {language === 'en' ? 'Request a Custom Quote' : 'اطلب عرض مخصص'}
            </Link>
            <a
              href="https://wa.me/254712346678"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all"
            >
              {language === 'en' ? 'WhatsApp: +254 712 346 678' : 'واتساب: +254 712 346 678'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};