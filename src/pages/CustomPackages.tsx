import { Link } from 'react-router-dom';
import { Settings, Users, Clock, MapPin, Camera, Star, Heart, Compass } from 'lucide-react';

export const CustomPackages = () => {
  const customOptions = [
    {
      icon: Users,
      title: 'حجم المجموعة',
      options: ['فردي/زوجي', 'عائلية صغيرة (3-5)', 'مجموعة كبيرة (6-12)', 'فعالية خاصة (13+)']
    },
    {
      icon: Clock,
      title: 'مدة الرحلة',
      options: ['يوم واحد', '2-3 أيام', '4-7 أيام', 'أسبوع أو أكثر']
    },
    {
      icon: MapPin,
      title: 'الوجهات',
      options: ['ماساي مارا فقط', 'أمبوسيلي وكيليمنجارو', 'جولة شاملة متعددة', 'وجهات مخصصة']
    },
    {
      icon: Star,
      title: 'مستوى الفخامة',
      options: ['اقتصادي', 'متوسط', 'فاخر', 'فاخر جداً']
    },
    {
      icon: Camera,
      title: 'الأنشطة المفضلة',
      options: ['مشاهدة الحيوانات', 'التصوير', 'الثقافة المحلية', 'المغامرة والإثارة']
    },
    {
      icon: Heart,
      title: 'الاهتمامات الخاصة',
      options: ['شهر العسل', 'السفر العائلي', 'مجموعات الأصدقاء', 'رحلات العمل']
    }
  ];

  const packageExamples = [
    {
      title: 'باقة شهر العسل الرومانسية',
      duration: '5 أيام / 4 ليالي',
      destinations: ['ماساي مارا', 'بحيرة ناكورو'],
      highlights: ['إقامة فاخرة في نزل رومانسي', 'عشاء تحت النجوم', 'رحلة بالونة الهوائية', 'مساج للأزواج'],
      image: '/Maasai mara.jpg',
      price: 'من $1,800'
    },
    {
      title: 'مغامرة العائلة المثالية',
      duration: '6 أيام / 5 ليالي',
      destinations: ['أمبوسيلي', 'تسافو', 'ديان بيتش'],
      highlights: ['أنشطة مناسبة للأطفال', 'إقامة عائلية آمنة', 'تعلم عن الحياة البرية', 'استرخاء على الشاطئ'],
      image: '/Diani Beach.jpg',
      price: 'من $1,200'
    },
    {
      title: 'مجموعة الأصدقاء المغامرة',
      duration: '4 أيام / 3 ليالي',
      destinations: ['ماساي مارا', 'بحيرة ناكورو'],
      highlights: ['مخيم جماعي ممتع', 'أنشطة مثيرة', 'رحلات ليلية', 'تصوير جماعي'],
      image: '/Maasai mara (2).jpg',
      price: 'من $480'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'املأ الاستبيان',
      description: 'أخبرنا عن تفضيلاتك وميزانيتك'
    },
    {
      step: '02',
      title: 'استشارة شخصية',
      description: 'نتواصل معك لفهم احتياجاتك بدقة'
    },
    {
      step: '03',
      title: 'تصميم البرنامج',
      description: 'نصمم برنامجاً مخصصاً يناسبك تماماً'
    },
    {
      step: '04',
      title: 'المراجعة والتعديل',
      description: 'نعدل البرنامج حسب ملاحظاتك'
    },
    {
      step: '05',
      title: 'الحجز والتأكيد',
      description: 'نؤكد الحجز ونبدأ التحضير'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 rounded-full">
              <Settings className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            الباقات المخصصة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            برامج سياحية مصممة خصيصاً حسب احتياجاتك. كل رحلة فريدة مثلك تماماً
          </p>
        </div>

        {/* Customization Options */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            خصص رحلتك المثالية
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            اختر من بين الخيارات التالية وسنصمم لك برنامجاً يناسب تطلعاتك
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-3">
                    <option.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800">{option.title}</h3>
                </div>
                <div className="space-y-2">
                  {option.options.map((opt, idx) => (
                    <label key={idx} className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-50">
                      <input type="radio" name={`option-${index}`} className="ml-2 text-green-600" />
                      <span className="text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Examples */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              أمثلة على باقاتنا المخصصة
            </h2>
            <p className="text-xl text-gray-600">
              إليك بعض الأمثلة على كيفية تخصيص رحلتك
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packageExamples.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    مخصص
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                    <p className="text-yellow-300 text-sm">{pkg.duration}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">الوجهات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">المميزات:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Compass className="h-3 w-3 text-purple-500 ml-2 mr-1" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-purple-600">
                      {pkg.price}
                      <span className="text-sm font-normal text-gray-500">/شخص</span>
                    </div>
                    <Link
                      to="/request-quote"
                      className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-purple-800 transition-all"
                    >
                      خصص الآن
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              كيف نصمم باقتك المخصصة؟
            </h2>
            <p className="text-green-200 text-xl">
              خطوات بسيطة للحصول على رحلة أحلامك
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-yellow-500 text-green-900 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-yellow-400 transform -translate-x-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            مميزات الباقات المخصصة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">تصميم شخصي</h3>
              <p className="text-gray-600 text-sm">برنامج مصمم خصيصاً لك ولاحتياجاتك</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">مرونة كاملة</h3>
              <p className="text-gray-600 text-sm">غير المواعيد والأنشطة حسب رغبتك</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">خدمة مخصصة</h3>
              <p className="text-gray-600 text-sm">فريق مخصص لخدمتك طوال الرحلة</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">تجربة فريدة</h3>
              <p className="text-gray-600 text-sm">أماكن وأنشطة حصرية لا تجدها في الجولات العادية</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white text-center">
          <Settings className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">
            ابدأ تصميم رحلتك المثالية
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            دعنا نصمم لك تجربة سياحية فريدة تلبي جميع توقعاتك وتتجاوزها
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg"
            >
              ابدأ التخصيص الآن
            </Link>
            <a
              href="https://wa.me/254712346678"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all"
            >
              تحدث مع خبير
            </a>
          </div>
          <p className="mt-6 text-purple-200 text-sm">
            استشارة مجانية • لا رسوم على التخصيص • ضمان الرضا 100%
          </p>
        </div>
      </div>
    </div>
  );
};