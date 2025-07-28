import { Link } from 'react-router-dom';
import { Settings, Users, Clock, MapPin, Camera, Star, Heart, Compass } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export const CustomPackages = () => {
  const { language } = useLanguage();
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelection = (title: string, option: string) => {
    setSelections(prev => ({ ...prev, [title]: option }));
  };

  const customOptions = [
    {
      icon: Users,
      title: language === 'en' ? 'Group Size' : 'حجم المجموعة',
      options: [
        language === 'en' ? 'Solo/Couple' : 'فردي/زوجي',
        language === 'en' ? 'Small Family (3-5)' : 'عائلية صغيرة (3-5)',
        language === 'en' ? 'Large Group (6-12)' : 'مجموعة كبيرة (6-12)',
        language === 'en' ? 'Special Event (13+)' : 'فعالية خاصة (13+)'
      ]
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Trip Duration' : 'مدة الرحلة',
      options: [
        language === 'en' ? '1 Day' : 'يوم واحد',
        language === 'en' ? '2-3 Days' : '2-3 أيام',
        language === 'en' ? '4-7 Days' : '4-7 أيام',
        language === 'en' ? '1 Week or More' : 'أسبوع أو أكثر'
      ]
    },
    {
      icon: MapPin,
      title: language === 'en' ? 'Destinations' : 'الوجهات',
      options: [
        language === 'en' ? 'Maasai Mara Only' : 'ماساي مارا فقط',
        language === 'en' ? 'Amboseli & Kilimanjaro' : 'أمبوسيلي وكيليمنجارو',
        language === 'en' ? 'Comprehensive Multi-location Tour' : 'جولة شاملة متعددة',
        language === 'en' ? 'Custom Destinations' : 'وجهات مخصصة'
      ]
    },
    {
      icon: Star,
      title: language === 'en' ? 'Luxury Level' : 'مستوى الفخامة',
      options: [
        language === 'en' ? 'Budget' : 'اقتصادي',
        language === 'en' ? 'Mid-range' : 'متوسط',
        language === 'en' ? 'Luxury' : 'فاخر',
        language === 'en' ? 'Ultra Luxury' : 'فاخر جداً'
      ]
    },
    {
      icon: Camera,
      title: language === 'en' ? 'Preferred Activities' : 'الأنشطة المفضلة',
      options: [
        language === 'en' ? 'Wildlife Viewing' : 'مشاهدة الحيوانات',
        language === 'en' ? 'Photography' : 'التصوير',
        language === 'en' ? 'Local Culture' : 'الثقافة المحلية',
        language === 'en' ? 'Adventure & Thrills' : 'المغامرة والإثارة'
      ]
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Special Interests' : 'الاهتمامات الخاصة',
      options: [
        language === 'en' ? 'Honeymoon' : 'شهر العسل',
        language === 'en' ? 'Family Travel' : 'السفر العائلي',
        language === 'en' ? 'Friends Groups' : 'مجموعات الأصدقاء',
        language === 'en' ? 'Business Trips' : 'رحلات العمل'
      ]
    }
  ];

  const packageExamples = [
    {
      title: language === 'en' ? 'Romantic Honeymoon Package' : 'باقة شهر العسل الرومانسية',
      duration: language === 'en' ? '5 Days / 4 Nights' : '5 أيام / 4 ليالي',
      destinations: [
        language === 'en' ? 'Maasai Mara' : 'ماساي مارا',
        language === 'en' ? 'Lake Nakuru' : 'بحيرة ناكورو'
      ],
      highlights: [
        language === 'en' ? 'Luxury accommodation in a romantic lodge' : 'إقامة فاخرة في نزل رومانسي',
        language === 'en' ? 'Dinner under the stars' : 'عشاء تحت النجوم',
        language === 'en' ? 'Hot air balloon ride' : 'رحلة بالونة الهوائية',
        language === 'en' ? 'Couples massage' : 'مساج للأزواج'
      ],
      image: '/Maasai mara.jpg',
      price: language === 'en' ? 'From $1,800' : 'من $1,800'
    },
    {
      title: language === 'en' ? 'Perfect Family Adventure' : 'مغامرة العائلة المثالية',
      duration: language === 'en' ? '6 Days / 5 Nights' : '6 أيام / 5 ليالي',
      destinations: [
        language === 'en' ? 'Amboseli' : 'أمبوسيلي',
        language === 'en' ? 'Tsavo' : 'تسافو',
        language === 'en' ? 'Diani Beach' : 'ديان بيتش'
      ],
      highlights: [
        language === 'en' ? 'Kid-friendly activities' : 'أنشطة مناسبة للأطفال',
        language === 'en' ? 'Safe family accommodation' : 'إقامة عائلية آمنة',
        language === 'en' ? 'Learn about wildlife' : 'تعلم عن الحياة البرية',
        language === 'en' ? 'Beach relaxation' : 'استرخاء على الشاطئ'
      ],
      image: '/Diani Beach.jpg',
      price: language === 'en' ? 'From $1,200' : 'من $1,200'
    },
    {
      title: language === 'en' ? 'Adventurous Friends Group' : 'مجموعة الأصدقاء المغامرة',
      duration: language === 'en' ? '4 Days / 3 Nights' : '4 أيام / 3 ليالي',
      destinations: [
        language === 'en' ? 'Maasai Mara' : 'ماساي مارا',
        language === 'en' ? 'Lake Nakuru' : 'بحيرة ناكورو'
      ],
      highlights: [
        language === 'en' ? 'Fun group camping' : 'مخيم جماعي ممتع',
        language === 'en' ? 'Exciting activities' : 'أنشطة مثيرة',
        language === 'en' ? 'Night safaris' : 'رحلات ليلية',
        language === 'en' ? 'Group photography' : 'تصوير جماعي'
      ],
      image: '/Maasai mara (2).jpg',
      price: language === 'en' ? 'From $480' : 'من $480'
    }
  ];

  const process = [
    {
      step: '01',
      title: language === 'en' ? 'Fill out the Questionnaire' : 'املأ الاستبيان',
      description: language === 'en' ? 'Tell us about your preferences and budget' : 'أخبرنا عن تفضيلاتك وميزانيتك'
    },
    {
      step: '02',
      title: language === 'en' ? 'Personal Consultation' : 'استشارة شخصية',
      description: language === 'en' ? 'We contact you to understand your needs precisely' : 'نتواصل معك لفهم احتياجاتك بدقة'
    },
    {
      step: '03',
      title: language === 'en' ? 'Program Design' : 'تصميم البرنامج',
      description: language === 'en' ? 'We design a customized program that perfectly suits you' : 'نصمم برنامجاً مخصصاً يناسبك تماماً'
    },
    {
      step: '04',
      title: language === 'en' ? 'Review and Amend' : 'المراجعة والتعديل',
      description: language === 'en' ? 'We amend the program based on your feedback' : 'نعدل البرنامج حسب ملاحظاتك'
    },
    {
      step: '05',
      title: language === 'en' ? 'Booking and Confirmation' : 'الحجز والتأكيد',
      description: language === 'en' ? 'We confirm the booking and start preparations' : 'نؤكد الحجز ونبدأ التحضير'
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
            {language === 'en' ? 'Custom Packages' : 'الباقات المخصصة'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Tour programs specially designed to your needs. Every trip is as unique as you are'
              : 'برامج سياحية مصممة خصيصاً حسب احتياجاتك. كل رحلة فريدة مثلك تماماً'}
          </p>
        </div>

        {/* Customization Options */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            {language === 'en' ? 'Customize Your Perfect Trip' : 'خصص رحلتك المثالية'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Choose from the following options and we will design a program that suits your aspirations'
              : 'اختر من بين الخيارات التالية وسنصمم لك برنامجاً يناسب تطلعاتك'}
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
                      <input
                        type="radio"
                        name={`option-${index}`}
                        className="ml-2 text-green-600"
                        checked={selections[option.title] === opt}
                        onChange={() => handleSelection(option.title, opt)}
                      />
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
              {language === 'en' ? 'Examples of Our Custom Packages' : 'أمثلة على باقاتنا المخصصة'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'Here are some examples of how you can customize your trip' : 'إليك بعض الأمثلة على كيفية تخصيص رحلتك'}
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
                    {language === 'en' ? 'Custom' : 'مخصص'}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                    <p className="text-yellow-300 text-sm">{pkg.duration}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Destinations:' : 'الوجهات:'}</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.destinations.map((dest, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Highlights:' : 'المميزات:'}</h4>
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
                      <span className="text-sm font-normal text-gray-500">{language === 'en' ? '/person' : '/شخص'}</span>
                    </div>
                    <Link
                      to="/request-quote"
                      className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-purple-800 transition-all"
                    >
                      {language === 'en' ? 'Customize Now' : 'خصص الآن'}
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
              {language === 'en' ? 'How We Design Your Custom Package?' : 'كيف نصمم باقتك المخصصة؟'}
            </h2>
            <p className="text-green-200 text-xl">
              {language === 'en' ? 'Simple steps to get your dream trip' : 'خطوات بسيطة للحصول على رحلة أحلامك'}
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
            {language === 'en' ? 'Benefits of Custom Packages' : 'مميزات الباقات المخصصة'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'en' ? 'Personalized Design' : 'تصميم شخصي'}</h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'A program designed specifically for you and your needs' : 'برنامج مصمم خصيصاً لك ولاحتياجاتك'}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'en' ? 'Full Flexibility' : 'مرونة كاملة'}</h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Change dates and activities as you wish' : 'غير المواعيد والأنشطة حسب رغبتك'}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'en' ? 'Dedicated Service' : 'خدمة مخصصة'}</h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'A dedicated team to serve you throughout the trip' : 'فريق مخصص لخدمتك طوال الرحلة'}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{language === 'en' ? 'Unique Experience' : 'تجربة فريدة'}</h3>
              <p className="text-gray-600 text-sm">{language === 'en' ? 'Exclusive places and activities not found in regular tours' : 'أماكن وأنشطة حصرية لا تجدها في الجولات العادية'}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white text-center">
          <Settings className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'Start Designing Your Perfect Trip' : 'ابدأ تصميم رحلتك المثالية'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Let us design a unique travel experience that meets and exceeds all your expectations'
              : 'دعنا نصمم لك تجربة سياحية فريدة تلبي جميع توقعاتك وتتجاوزها'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg"
            >
              {language === 'en' ? 'Start Customizing Now' : 'ابدأ التخصيص الآن'}
            </Link>
            <a
              href="https://wa.me/254712346678"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-700 transition-all"
            >
              {language === 'en' ? 'Talk to an Expert' : 'تحدث مع خبير'}
            </a>
          </div>
          <p className="mt-6 text-purple-200 text-sm">
            {language === 'en' ? 'Free Consultation • No Customization Fees • 100% Satisfaction Guarantee' : 'استشارة مجانية • لا رسوم على التخصيص • ضمان الرضا 100%'}
          </p>
        </div>
      </div>
    </div>
  );
};