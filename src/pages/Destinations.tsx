import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Destinations = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      name: t('maasaiMara'),
      description: t('maasaiMaraDesc'),
      detailedDescription: 'موطن الهجرة الكبرى والحيوانات الخمسة الكبار، تجربة سفاري لا تُنسى',
      image: 'https://images.pexels.com/photos/39353/lion-lioness-cat-big-cat-39353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/maasai-mara',
      duration: '3-5 أيام',
      bestTime: 'يوليو - أكتوبر',
      highlights: ['الهجرة الكبرى', 'الأسود والنمور', 'ثقافة الماساي']
    },
    {
      name: t('amboseli'),
      description: t('amboseliDesc'),
      detailedDescription: 'مناظر خلابة لجبل كيليمنجارو مع قkawوان الأفيال في بيئتها الطبيعية',
      image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/amboseli',
      duration: '2-3 أيام',
      bestTime: 'يونيو - أكتوبر',
      highlights: ['جبل كيليمنجارو', 'قطعان الأفيال', 'المناظر الطبيعية']
    },
    {
      name: t('tsavo'),
      description: 'أكبر حديقة وطنية في كينيا مع تنوع بيولوجي مذهل',
      detailedDescription: 'منطقة شاسعة من البرية الأفريقية مع حياة برية متنوعة ومناظر طبيعية رائعة',
      image: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/tsavo',
      duration: '3-4 أيام',
      bestTime: 'يونيو - سبتمبر',
      highlights: ['الأفيال الحمراء', 'التنوع البيولوجي', 'المناظر البرية']
    },
    {
      name: t('dianiBeach'),
      description: t('dianiBeachDesc'),
      detailedDescription: 'شواطئ استوائية بمياه فيروزية ورمال بيضاء ناعمة على المحيط الهندي',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/diani-beach',
      duration: '4-7 أيام',
      bestTime: 'أكتوبر - مارس',
      highlights: ['الشواطئ البيضاء', 'الرياضات المائية', 'الاسترخاء']
    },
    {
      name: 'بحيرة ناكورو',
      description: 'بحيرة قلوية مشهورة بطيور النحام الوردية الجميلة',
      detailedDescription: 'محمية طبيعية مذهلة تضم آلاف الطيور المهاجرة وحيوانات برية متنوعة',
      image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/lake-nakuru',
      duration: '1-2 يوم',
      bestTime: 'يناير - مارس',
      highlights: ['طيور النحام', 'وحيد القرن', 'المناظر البحيرية']
    },
    {
      name: 'جبل كينيا',
      description: 'أعلى جبل في كينيا وثاني أعلى قمة في أفريقيا',
      detailedDescription: 'تجربة تسلق مثيرة مع مناظر طبيعية خلابة ونباتات فريدة',
      image: 'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/destinations/mount-kenya',
      duration: '5-7 أيام',
      bestTime: 'يناير - فبراير',
      highlights: ['التسلق والمشي', 'النباتات الألبية', 'المناظر الجبلية']
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            {t('destinations')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استكشف أجمل الوجهات في كينيا من السفاري الأفريقي إلى الشواطئ الاستوائية
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              to={destination.link}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-yellow-300 text-lg">
                    {destination.description}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {destination.detailedDescription}
                </p>
                
                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 ml-2 text-yellow-500" />
                    <span className="mr-2">المدة:</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 ml-2 text-yellow-500" />
                    <span className="mr-2">أفضل وقت:</span>
                    <span className="font-medium">{destination.bestTime}</span>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">أبرز المعالم:</h4>
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full ml-3 mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-yellow-600 font-semibold group-hover:text-green-600 transition-colors">
                    اكتشف المزيد ←
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            جاهز لمغامرتك القادمة؟
          </h2>
          <p className="text-xl mb-8 text-green-100">
            دعنا نساعدك في التخطيط لرحلة أحلامك إلى كينيا
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {t('requestQuote')}
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              عرض الجولات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};