import { Link } from 'react-router-dom';
import { DollarSign, Users, Clock, Tent, Camera, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const BudgetSafaris = () => {
  const { language } = useLanguage();
  const budgetPackages = [
    {
      title: language === 'en' ? 'Masai Mara Budget Adventure' : 'مغامرة ماساي مارا الاقتصادية',
      duration: language === 'en' ? '3 Days / 2 Nights' : '3 أيام / 2 ليلة',
      price: '$180',
      originalPrice: '$250',
      image: '/Maasai mara.jpg',
      highlights: language === 'en' ? ['Wildlife viewing', 'Comfortable basic camp', 'Local meals', 'Group transport'] : ['مشاهدة الحيوانات البرية', 'مخيم أساسي مريح', 'وجبات محلية', 'نقل جماعي'],
      includes: language === 'en' ? ['Shared transport', 'Camp accommodation', 'Basic meals', 'Park fees'] : ['النقل المشترك', 'إقامة في مخيم', 'الوجبات الأساسية', 'رسوم الحديقة'],
      groupSize: language === 'en' ? '8-12 people' : '8-12 شخص'
    },
    {
      title: language === 'en' ? 'Amboseli Affordable Trip' : 'رحلة أمبوسيلي الميسرة',
      duration: language === 'en' ? '2 Days / 1 Night' : '2 أيام / 1 ليلة',
      price: '$120',
      originalPrice: '$180',
      image: '/Maasai mara (2).jpg',
      highlights: language === 'en' ? ['Kilimanjaro views', 'Elephant herds', 'Eco-friendly camp', 'Authentic experience'] : ['مناظر كيليمنجارو', 'قطعان الأفيال', 'مخيم صديق للبيئة', 'تجربة أصيلة'],
      includes: language === 'en' ? ['Shared transport', 'Camp accommodation', 'Basic meals', 'Shared guide'] : ['النقل المشترك', 'إقامة في مخيم', 'وجبات بسيطة', 'مرشد مشترك'],
      groupSize: language === 'en' ? '6-10 people' : '6-10 أشخاص'
    },
    {
      title: language === 'en' ? 'Tsavo Economic Tour' : 'جولة تسافو الاقتصادية',
      duration: language === 'en' ? '2 Days / 1 Night' : '2 أيام / 1 ليلة',
      price: '$140',
      originalPrice: '$200',
      image: '/Maasai mara (3).jpg',
      highlights: language === 'en' ? ['Red elephants', 'Diverse nature', 'Simple camp', 'Group activities'] : ['الأفيال الحمراء', 'طبيعة متنوعة', 'مخيم بسيط', 'أنشطة جماعية'],
      includes: language === 'en' ? ['Basic transport', 'Group camp', 'Local meals', 'Shared activities'] : ['النقل الأساسي', 'مخيم جماعي', 'وجبات محلية', 'أنشطة مشتركة'],
      groupSize: language === 'en' ? '10-15 people' : '10-15 شخص'
    }
  ];
  const budgetFeatures = [
    {
      icon: DollarSign,
      title: language === 'en' ? 'Affordable Prices' : 'أسعار مناسبة',
      description: language === 'en' ? 'Best prices while maintaining quality experience' : 'أفضل الأسعار مع الحفاظ على جودة التجربة'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Friendly Groups' : 'مجموعات ودودة',
      description: language === 'en' ? 'Opportunity to meet new people and make friends' : 'فرصة للقاء أشخاص جدد وتكوين صداقات'
    },
    {
      icon: Tent,
      title: language === 'en' ? 'Comfortable Accommodation' : 'إقامة مريحة',
      description: language === 'en' ? 'Clean and comfortable camps in the heart of nature' : 'مخيمات نظيفة ومريحة في قلب الطبيعة'
    },
    {
      icon: Camera,
      title: language === 'en' ? 'Same Experience' : 'نفس التجربة',
      description: language === 'en' ? 'Same amazing locations and wildlife' : 'نفس المواقع والحيوانات البرية المذهلة'
    }
  ];
  const tips = [
    {
      title: language === 'en' ? 'Book in Advance' : 'احجز مسبقاً',
      description: language === 'en' ? 'Get the best prices by booking early' : 'احصل على أفضل الأسعار بالحجز المبكر'
    },
    {
      title: language === 'en' ? 'Choose the Right Season' : 'اختر الموسم المناسب',
      description: language === 'en' ? 'Lower prices during off-peak seasons' : 'أسعار أقل خلال المواسم الهادئة'
    },
    {
      title: language === 'en' ? 'Join a Group' : 'انضم لمجموعة',
      description: language === 'en' ? 'Greater savings with larger groups' : 'توفير أكبر مع المجموعات الكبيرة'
    },
    {
      title: language === 'en' ? 'Custom Packages' : 'باقات مخصصة',
      description: language === 'en' ? 'Request a package that perfectly fits your budget' : 'اطلب باقة تناسب ميزانيتك تماماً'
    }
  ];
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-4 rounded-full">
              <DollarSign className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            {language === 'en' ? 'Budget Safaris' : 'السفاري الاقتصادية'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' ? 'Great adventures at affordable prices for everyone. Enjoy the beauty of Africa without breaking your budget.' : 'مغامرات رائعة بأسعار مناسبة للجميع. استمتع بجمال أفريقيا دون إرهاق ميزانيتك'}
          </p>
        </div>
        {/* Budget Alert */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-16 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">{language === 'en' ? '🎉 Limited Time Special Offers!' : '🎉 عروض خاصة محدودة الوقت!'}</h2>
          <p className="text-lg mb-6">{language === 'en' ? 'Save up to 30% on budget safari packages' : 'وفر حتى 30% على باقات السفاري الاقتصادية'}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Get the Offer' : 'احصل على العرض'}
            </Link>
            <span className="text-green-200">{language === 'en' ? 'Offer valid until the end of the month' : 'العرض ساري حتى نهاية الشهر'}</span>
          </div>
        </div>
        {/* Budget Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {budgetPackages.map((pkg) => (
            <div key={pkg.title} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 border border-green-200">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    {language === 'en' ? `Save ${parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}` : `وفر ${parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}`}
                  </div>
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.price}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                  <div className="flex items-center text-yellow-300 text-sm mb-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center text-yellow-300 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {pkg.groupSize}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Highlights:' : 'أبرز المعالم:'}</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mr-1"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Includes:' : 'يشمل الباقة:'}</h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((include) => (
                      <li key={include} className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 text-green-500 ml-2 mr-1" />
                        {include}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {pkg.price}
                      <span className="text-sm font-normal text-gray-500">{language === 'en' ? '/person' : '/شخص'}</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      {pkg.originalPrice}
                    </div>
                  </div>
                  <Link
                    to="/request-quote"
                    className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-800 transition-all"
                  >
                    {language === 'en' ? 'Book Now' : 'احجز الآن'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Budget Features */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            {language === 'en' ? 'Why Choose Budget Safaris?' : 'لماذا تختار السفاري الاقتصادية؟'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'en' ? 'We believe everyone deserves a great safari experience. Here\'s what makes our budget packages special' : 'نؤمن أن الجميع يستحق تجربة السفاري الرائعة. إليك ما يميز باقاتنا الاقتصادية'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {budgetFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Money Saving Tips */}
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            {language === 'en' ? 'Tips for More Savings' : 'نصائح للتوفير أكثر'}
          </h2>
          <p className="text-yellow-100 text-center mb-12 max-w-2xl mx-auto">
            {language === 'en' ? 'Follow these tips to get the best value for your money' : 'اتبع هذه النصائح للحصول على أفضل قيمة لأموالك'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <h3 className="font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-yellow-100 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Package Comparison' : 'مقارنة الباقات'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-green-50">
                <tr>
                  <th className="p-4 font-semibold text-green-800">{language === 'en' ? 'Feature' : 'الميزة'}</th>
                  <th className="p-4 font-semibold text-green-600 text-center">{language === 'en' ? 'Budget' : 'اقتصادية'}</th>
                  <th className="p-4 font-semibold text-yellow-600 text-center">{language === 'en' ? 'Standard' : 'تقليدية'}</th>
                  <th className="p-4 font-semibold text-purple-600 text-center">{language === 'en' ? 'Luxury' : 'فاخرة'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">{language === 'en' ? 'Accommodation' : 'الإقامة'}</td>
                  <td className="p-4 text-center">{language === 'en' ? 'Shared camp' : 'مخيم مشترك'}</td>
                  <td className="p-4 text-center">{language === 'en' ? '3-star lodge' : 'نزل 3 نجوم'}</td>
                  <td className="p-4 text-center">{language === 'en' ? '5-star resort' : 'منتجع 5 نجوم'}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">{language === 'en' ? 'Group Size' : 'حجم المجموعة'}</td>
                  <td className="p-4 text-center">{language === 'en' ? '8-15 people' : '8-15 شخص'}</td>
                  <td className="p-4 text-center">{language === 'en' ? '4-8 people' : '4-8 أشخاص'}</td>
                  <td className="p-4 text-center">{language === 'en' ? '2-4 people' : '2-4 أشخاص'}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">{language === 'en' ? 'Transportation' : 'النقل'}</td>
                  <td className="p-4 text-center">{language === 'en' ? 'Shared bus' : 'حافلة مشتركة'}</td>
                  <td className="p-4 text-center">{language === 'en' ? '4x4 vehicle' : 'سيارة 4x4'}</td>
                  <td className="p-4 text-center">{language === 'en' ? 'Luxury Land Cruiser' : 'لاند كروزر فاخر'}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">{language === 'en' ? 'Meals' : 'الوجبات'}</td>
                  <td className="p-4 text-center">{language === 'en' ? 'Simple meals' : 'وجبات بسيطة'}</td>
                  <td className="p-4 text-center">{language === 'en' ? 'Varied meals' : 'وجبات متنوعة'}</td>
                  <td className="p-4 text-center">{language === 'en' ? 'Private chef' : 'شيف خاص'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Start Your Adventure at the Lowest Cost' : 'ابدأ مغامرتك بأقل التكاليف'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Don\'t let budget stop you from experiencing an amazing safari. Book now and enjoy Africa'
              : 'لا تدع الميزانية تمنعك من عيش تجربة السفاري الرائعة. احجز الآن واستمتع بأفريقيا'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Book Your Budget Package' : 'احجز باقتك الاقتصادية'}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              {language === 'en' ? 'Inquire About Prices' : 'استفسر عن الأسعار'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};