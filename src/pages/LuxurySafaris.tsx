import { Link } from 'react-router-dom';
import { Star, Crown, Plane, Utensils, Camera, Shield } from 'lucide-react';

export const LuxurySafaris = () => {
  const luxuryPackages = [
    {
      title: 'السفاري الملكية - ماساي مارا',
      duration: '5 أيام / 4 ليالي',
      price: '$2,800',
      category: 'فاخر جداً',
      image: '/Maasai mara.jpg',
      highlights: ['منتجع 5 نجوم حصرياً', 'رحلات طيران خاصة', 'مرشد شخصي', 'وجبات فاخرة'],
      luxury_features: ['جناح رئاسي', 'خدمة بتلر', 'سبا ومنتجع صحي', 'تصوير احترافي']
    },
    {
      title: 'تجربة أمبوسيلي الفاخرة',
      duration: '4 أيام / 3 ليالي',
      price: '$2,200',
      category: 'فاخر',
      image: '/Maasai mara (2).jpg',
      highlights: ['إطلالة كيليمنجارو', 'نزل فاخر حصري', 'رحلات بالونة', 'عشاء رومانسي'],
      luxury_features: ['خيمة فاخرة مكيفة', 'حمام سباحة خاص', 'مساج أفريقي', 'بار خاص']
    },
    {
      title: 'رحلة السفاري الملكية الشاملة',
      duration: '7 أيام / 6 ليالي',
      price: '$4,500',
      category: 'الأفخم',
      image: '/Maasai mara (3).jpg',
      highlights: ['جولة شاملة متعددة المواقع', 'طيران داخلي خاص', 'إقامة في أفخم المنتجعات', 'تجربة ثقافية حصرية'],
      luxury_features: ['سيارة لاند كروزر خاصة', 'شيف شخصي', 'كونسيرج 24/7', 'جولات ليلية حصرية']
    }
  ];

  const luxuryFeatures = [
    {
      icon: Crown,
      title: 'إقامة ملكية',
      description: 'أفخم المنتجعات والنزل الحصرية مع خدمة 5 نجوم',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Plane,
      title: 'نقل فاخر',
      description: 'رحلات طيران خاصة وسيارات لاند كروزر المكيفة',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Utensils,
      title: 'تجربة طعام استثنائية',
      description: 'شيف خاص ووجبات فاخرة في أجواء طبيعية رائعة',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Camera,
      title: 'تصوير احترافي',
      description: 'مصور محترف يوثق رحلتك بأجمل اللحظات',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Shield,
      title: 'أمان وراحة',
      description: 'أعلى معايير الأمان مع خدمة شخصية متميزة',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Star,
      title: 'تجارب حصرية',
      description: 'أنشطة ومواقع حصرية غير متاحة للجولات العادية',
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
            السفاري الفاخرة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تجربة فاخرة لا تُنسى مع أفضل الخدمات والمرافق الحصرية. عيش السفاري كما يفعل الملوك
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
                  فاخر
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
                    المميزات الرئيسية:
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
                    الخدمات الفاخرة:
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
                    <span className="text-sm font-normal text-gray-500">/شخص</span>
                  </div>
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Features */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            مميزات السفاري الفاخرة
          </h2>
          <p className="text-green-200 text-center text-lg mb-12 max-w-3xl mx-auto">
            نقدم لك تجربة فريدة تجمع بين جمال الطبيعة الأفريقية والفخامة العالمية
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
                "كانت رحلة السفاري الفاخرة مع إنجاز أروع تجربة في حياتي. كل التفاصيل كانت مثالية، من الإقامة الملكية إلى الخدمة الاستثنائية. شعرنا وكأننا ملوك أفريقيا!"
              </blockquote>
              <cite className="block mt-6 text-lg text-green-800 font-semibold">
                - أحمد الصالح، الرياض
              </cite>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 text-white text-center">
          <Crown className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">
            استعد للتجربة الملكية
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            دعنا نصمم لك تجربة سفاري فاخرة لا تُنسى مع أفضل الخدمات والمرافق الحصرية
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-white text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              اطلب عرض مخصص
            </Link>
            <a
              href="https://wa.me/254712346678"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all"
            >
              واتساب: +254 712 346 678
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};