import { Link } from 'react-router-dom';
import { Shield, Award, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const values = [
  {
    icon: Heart,
    titleKey: 'Hospitality & Care',
    descriptionKey: 'We treat every client like family, ensuring a warm, welcoming, and supportive experience from start to finish.',
    titleAr: 'الضيافة والعناية',
    descriptionAr: 'نتعامل مع كل عميل كأنه فرد من عائلتنا، مما يضمن تجربة دافئة ومرحبة وداعمة من البداية إلى النهاية.'
  },
  {
    icon: Shield,
    titleKey: 'Safety & Security',
    descriptionKey: 'Your safety is our top priority. We adhere to the highest safety standards and work with trusted partners.',
    titleAr: 'السلامة والأمان',
    descriptionAr: 'سلامتكم هي أولويتنا القصوى. نحن نلتزم بأعلى معايير السلامة ونعمل مع شركاء موثوقين.'
  },
  {
    icon: Award,
    titleKey: 'Excellence & Quality',
    descriptionKey: 'We are committed to delivering the highest quality in all our services, from luxury transport to expert guides.',
    titleAr: 'التميز والجودة',
    descriptionAr: 'نحن ملتزمون بتقديم أعلى مستويات الجودة في جميع خدماتنا، من النقل الفاخر إلى المرشدين الخبراء.'
  },
  {
    icon: Globe,
    titleKey: 'Local Expertise',
    descriptionKey: 'Our deep knowledge of the region allows us to offer unique and authentic experiences that others cannot.',
    titleAr: 'الخبرة المحلية',
    descriptionAr: 'معرفتنا العميقة بالمنطقة تسمح لنا بتقديم تجارب فريدة وأصيلة لا يمكن للآخرين تقديمها.'
  }
];

const team = [
  {
    name: 'Ahmed Mohamed',
    positionKey: 'General Manager',
    experienceKey: '20+ years of experience in the tourism sector.',
    nameAr: 'أحمد محمد',
    positionAr: 'المدير العام',
    experienceAr: 'خبرة تزيد عن 20 عامًا في قطاع السياحة.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Sarah Ahmed',
    positionKey: 'Operations Manager',
    experienceKey: 'Expert in crafting unique and seamless travel itineraries.',
    nameAr: 'سارة أحمد',
    positionAr: 'مديرة العمليات',
    experienceAr: 'خبيرة في صياغة مسارات سفر فريدة وسلسة.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Mohamed Kamel',
    positionKey: 'Lead Tour Guide',
    experienceKey: 'Passionate about sharing the beauty and culture of Kenya.',
    nameAr: 'محمد كامل',
    positionAr: 'مرشد سياحي أول',
    experienceAr: 'شغوف بمشاركة جمال وثقافة كينيا.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const stats = [
  { number: '500+', labelKey: 'Happy Clients', labelAr: 'عملاء سعداء' },
  { number: '50+', labelKey: 'Destinations Explored', labelAr: 'وجهات تم استكشافها' },
  { number: '10+', labelKey: 'Years of Experience', labelAr: 'سنوات من الخبرة' },
  { number: '98%', labelKey: 'Satisfaction Rate', labelAr: 'معدل الرضا' }
];

export const AboutUs = () => {
  const { language } = useLanguage();

  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

      <div className="py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'en' ? 'About Injaaz Tours' : 'عن إنجاز للسياحة'}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                {language === 'en'
                  ? 'Discover the heart of Africa with a team that is passionate about creating unforgettable experiences. We are more than a travel company; we are your partners in adventure.'
                  : 'اكتشف قلب أفريقيا مع فريق شغوف بخلق تجارب لا تُنسى. نحن أكثر من مجرد شركة سفر، نحن شركاؤك في المغامرة.'}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {language === 'en'
                  ? 'Our commitment is to provide you with the highest level of service and authentic encounters with nature and culture.'
                  : 'التزامنا هو أن نقدم لكم أعلى مستوى من الخدمة واللقاءات الأصيلة مع الطبيعة والثقافة.'}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{language === 'en' ? stat.labelKey : stat.labelAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">{language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}</h2>
            <p className="text-xl text-gray-200">{language === 'en' ? 'The principles that guide our every decision.' : 'المبادئ التي توجه كل قرار نتخذه.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.titleKey} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">{language === 'en' ? value.titleKey : value.titleAr}</h3>
                <p className="text-gray-600 leading-relaxed">{language === 'en' ? value.descriptionKey : value.descriptionAr}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">{language === 'en' ? 'Meet Our Expert Team' : 'تعرف على فريق الخبراء لدينا'}</h2>
            <p className="text-xl text-gray-200">{language === 'en' ? 'The passionate professionals behind your unforgettable journeys.' : 'المحترفون الشغوفون وراء رحلاتك التي لا تُنسى.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={language === 'en' ? member.name : member.nameAr}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{language === 'en' ? member.name : member.nameAr}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{language === 'en' ? member.positionKey : member.positionAr}</p>
                  <p className="text-gray-600 text-sm">{language === 'en' ? member.experienceKey : member.experienceAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-8">{language === 'en' ? 'Our Mission & Vision' : 'مهمتنا ورؤيتنا'}</h2>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                  <p className="text-lg text-green-100 leading-relaxed">
                    {language === 'en'
                      ? 'To be the leading tour operator in East Africa, renowned for our exceptional service, local expertise, and commitment to sustainable tourism.'
                      : 'أن نكون الشركة الرائدة في تنظيم الرحلات السياحية في شرق أفريقيا، مشهورين بخدمتنا الاستثنائية وخبرتنا المحلية والتزامنا بالسياحة المستدامة.'}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="A beautiful safari scene in Kenya"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              {language === 'en' ? 'Join the Injaaz Family' : 'انضم إلى عائلة إنجاز'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Let us design an unforgettable travel experience for you in the beautiful heart of Africa.'
                : 'دعنا نصمم لك تجربة سياحية لا تُنسى في قلب أفريقيا الجميلة.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Book Your Trip Now' : 'احجز رحلتك الآن'}
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
              >
                {language === 'en' ? 'Contact Us' : 'تواصل معنا'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
