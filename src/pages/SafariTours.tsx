import { Link } from 'react-router-dom';
import { Camera, Users, Clock, MapPin, Star } from 'lucide-react';

export const SafariTours = () => {
  const safariPackages = [
    {
      title: 'سفاري ماساي مارا الكلاسيكية',
      duration: '3 أيام / 2 ليلة',
      price: '$450',
      image: '/Maasai mara.jpg',
      highlights: ['مشاهدة الهجرة الكبرى', 'قرية الماساي التراثية', 'وجبات تقليدية'],
      includes: ['النقل', 'الإقامة', 'الوجبات', 'رسوم الحديقة']
    },
    {
      title: 'مغامرة أمبوسيلي والأفيال',
      duration: '2 أيام / 1 ليلة',
      price: '$320',
      image: '/Maasai mara (2).jpg',
      highlights: ['قطعان الأفيال الكبيرة', 'منظر جبل كيليمنجارو', 'التصوير الفوتوغرافي'],
      includes: ['النقل', 'الإقامة', 'الوجبات', 'مرشد متخصص']
    },
    {
      title: 'رحلة تسافو الشاملة',
      duration: '4 أيام / 3 ليالي',
      price: '$680',
      image: '/Maasai mara (3).jpg',
      highlights: ['الأفيال الحمراء الشهيرة', 'تنوع الحياة البرية', 'المناظر الطبيعية'],
      includes: ['النقل 4x4', 'إقامة فندقية', 'جميع الوجبات', 'أنشطة إضافية']
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            جولات السفاري
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استكشف البرية الأفريقية مع جولات السفاري التقليدية. تجربة أصيلة مع أفضل الخدمات
          </p>
        </div>

        {/* Safari Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {safariPackages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pkg.price}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                  <p className="text-yellow-300 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">أبرز المعالم:</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full ml-2 mr-1"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-green-800 mb-2">يشمل الباقة:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((include, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="h-3 w-3 text-green-500 ml-2 mr-1" />
                        {include}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-green-600">
                    {pkg.price}
                    <span className="text-sm font-normal text-gray-500">/شخص</span>
                  </div>
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            مميزات جولات السفاري مع إنجاز
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">مرشدون خبراء</h3>
              <p className="text-gray-600 text-sm">مرشدون محليون ذوو خبرة واسعة في الحياة البرية</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">مجموعات صغيرة</h3>
              <p className="text-gray-600 text-sm">مجموعات محدودة العدد لتجربة شخصية أفضل</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">مواقع متميزة</h3>
              <p className="text-gray-600 text-sm">أفضل المواقع لمشاهدة الحيوانات البرية</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">خدمة شاملة</h3>
              <p className="text-gray-600 text-sm">كل ما تحتاجه من نقل وإقامة ووجبات</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            استعد لمغامرة لا تُنسى
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المسافرين الذين اختاروا إنجاز لرحلات السفاري في كينيا
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              اطلب عرض مخصص
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};