import { Link } from 'react-router-dom';
import { Mountain, Camera, Binary as Binoculars, TreePine, Clock, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Amboseli = () => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            {language === 'en' ? 'Amboseli National Park' : 'حديقة أمبوسيلي الوطنية'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' ? 'Mount Kilimanjaro towering over vast herds of elephants in an unforgettable, breathtaking landscape.' : 'جبل كيليمنجارو الشامخ وقطعان الأفيال الضخمة في منظر طبيعي خلاب لا يُنسى'}
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <img
            src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Elephants in Amboseli National Park with Mount Kilimanjaro in the background"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{language === 'en' ? 'Land of Giant Elephants' : 'أرض الأفيال العملاقة'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '392 sq km' : '392 كم²'}</span>
              </div>
              <div className="flex items-center">
                <Mountain className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? 'Kilimanjaro 5,895m' : 'كيليمنجارو 5,895م'}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '1000+ Elephants' : '1000+ فيل'}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '1-3 Days' : '1-3 أيام'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Main Amboseli Attractions' : 'معالم أمبوسيلي الرئيسية'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="View of Mount Kilimanjaro from Amboseli"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Mountain className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800">{language === 'en' ? 'Mount Kilimanjaro' : 'جبل كيليمنجارو'}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en' ? 'Africa\'s highest peak located on the border with Tanzania. Stunning views of the snow-capped mountain with herds of elephants in the foreground create unforgettable images, especially at sunrise and sunset.' : 'أعلى قمة في أفريقيا تقع على الحدود مع تنزانيا. مناظر خلابة للجبل المغطى بالثلوج مع قطعان الأفيال في المقدمة تخلق صوراً لا تُنسى، خاصة عند شروق وغروب الشمس.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="A herd of elephants in Amboseli"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Binoculars className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800">{language === 'en' ? 'Elephant Herds' : 'قطعان الأفيال'}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en' ? 'Amboseli is home to over 1000 African elephants, one of the largest concentrations in Kenya. You can watch large families moving across the savanna in search of water and food.' : 'أمبوسيلي موطن لأكثر من 1000 فيل أفريقي، وهي من أكبر التجمعات في كينيا. يمكنك مشاهدة العائلات الكبيرة وهي تتنقل عبر السافانا بحثاً عن الماء والطعام.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife & Activities */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-12 mb-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{language === 'en' ? 'Wildlife & Activities' : 'الحياة البرية والأنشطة'}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">{language === 'en' ? 'Wildlife:' : 'الحيوانات البرية:'}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>{language === 'en' ? '• African Elephants' : '• الأفيال الأفريقية'}</span>
                    <span>{language === 'en' ? '• Lions' : '• الأسود'}</span>
                    <span>{language === 'en' ? '• Cheetahs' : '• النمور الصياد'}</span>
                    <span>{language === 'en' ? '• Spotted Hyenas' : '• الضباع المرقطة'}</span>
                    <span>{language === 'en' ? '• African Buffalo' : '• الجاموس الأفريقي'}</span>
                    <span>{language === 'en' ? '• Maasai Giraffe' : '• الزراف الماساي'}</span>
                    <span>{language === 'en' ? '• Zebras' : '• الحمر الوحشية'}</span>
                    <span>{language === 'en' ? '• Gazelles' : '• الغزلان'}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">{language === 'en' ? 'Available Activities:' : 'الأنشطة المتاحة:'}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 mr-2" />
                      <span>{language === 'en' ? 'Wildlife Photography' : 'تصوير الحياة البرية'}</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2" />
                      <span>{language === 'en' ? 'Visit Maasai Villages' : 'زيارة قرى الماساي'}</span>
                    </div>
                    <div className="flex items-center">
                      <Binoculars className="h-4 w-4 mr-2" />
                      <span>{language === 'en' ? 'Day Game Drives' : 'رحلات السفاري النهارية'}</span>
                    </div>
                    <div className="flex items-center">
                      <Mountain className="h-4 w-4 mr-2" />
                      <span>{language === 'en' ? 'Kilimanjaro Viewing' : 'مشاهدة كيليمنجارو'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Diverse wildlife in Amboseli National Park"
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Best Time to Visit Amboseli' : 'أفضل أوقات زيارة أمبوسيلي'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'June - October' : 'يونيو - أكتوبر'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en' ? 'Ideal dry season for wildlife viewing as animals gather around water sources. Clear views of Mount Kilimanjaro.' : 'الموسم الجاف المثالي لمشاهدة الحيوانات وهي تتجمع حول مصادر المياه. رؤية واضحة لجبل كيليمنجارو.'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'January - March' : 'يناير - مارس'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en' ? 'Beautiful season with lush green landscapes and mild weather. Excellent opportunity to see newborn animals.' : 'موسم جميل مع مناظر خضراء خلابة وطقس معتدل. فرصة ممتازة لمشاهدة صغار الحيوانات.'}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'November - December' : 'نوفمبر - ديسمبر'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en' ? 'Beginning of the dry season with great lighting for photography. Fewer tourists and reasonable prices.' : 'بداية الموسم الجاف مع إضاءة رائعة للتصوير. زحام أقل من السياح وأسعار مناسبة.'}
              </p>
            </div>
          </div>
        </div>

        {/* Accommodation Options */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Accommodation in Amboseli' : 'أماكن الإقامة في أمبوسيلي'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Luxury lodge with a view of Amboseli"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-green-800 text-lg mb-2">Amboseli Serena Safari Lodge</h3>
                <p className="text-yellow-600 font-semibold mb-3">{language === 'en' ? 'Luxury' : 'فاخر'} • $320/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{language === 'en' ? '• Direct view of Kilimanjaro' : '• إطلالة مباشرة على كيليمنجارو'}</li>
                  <li>{language === 'en' ? '• Swimming pool and gourmet restaurant' : '• حمام سباحة ومطعم فاخر'}</li>
                  <li>{language === 'en' ? '• Spa and massage services' : '• خدمة سبا ومساج'}</li>
                  <li>{language === 'en' ? '• Cultural activities' : '• أنشطة ثقافية'}</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Comfortable mid-range camp in Amboseli"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-green-800 text-lg mb-2">Amboseli Sopa Lodge</h3>
                <p className="text-green-600 font-semibold mb-3">{language === 'en' ? 'Mid-range' : 'متوسط'} • $180/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{language === 'en' ? '• Excellent location in the heart of the park' : '• موقع ممتاز في قلب الحديقة'}</li>
                  <li>{language === 'en' ? '• Comfortable rooms with views' : '• غرف مريحة مع إطلالة'}</li>
                  <li>{language === 'en' ? '• Restaurant and entertainment facilities' : '• مطعم ومرافق ترفيهية'}</li>
                  <li>{language === 'en' ? '• Friendly and professional service' : '• خدمة ودودة ومهنية'}</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Affordable budget camp in Amboseli"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-green-800 text-lg mb-2">Amboseli Kimana Camp</h3>
                <p className="text-blue-600 font-semibold mb-3">{language === 'en' ? 'Budget' : 'اقتصادي'} • $80/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{language === 'en' ? '• Comfortable and eco-friendly camp' : '• مخيم مريح وصديق للبيئة'}</li>
                  <li>{language === 'en' ? '• Fully equipped tents' : '• خيام مجهزة بالكامل'}</li>
                  <li>{language === 'en' ? '• Delicious local meals' : '• وجبات محلية لذيذة'}</li>
                  <li>{language === 'en' ? '• Close to park entrances' : '• قرب من مداخل الحديقة'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Tips */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-12 mb-20 text-white">
          <div className="text-center mb-8">
            <Camera className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">{language === 'en' ? 'Photography Tips in Amboseli' : 'نصائح للتصوير في أمبوسيلي'}</h2>
            <p className="text-yellow-100 max-w-2xl mx-auto">
              {language === 'en' ? 'Get the best photos with these tips from photography experts' : 'احصل على أفضل الصور مع هذه النصائح من خبراء التصوير'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">{language === 'en' ? 'Golden Hour' : 'الإضاءة الذهبية'}</h3>
              <p className="text-sm text-yellow-100">{language === 'en' ? 'Best time for photography at sunrise and sunset for warm lighting' : 'أفضل وقت للتصوير عند الشروق والغروب للحصول على إضاءة دافئة'}</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">{language === 'en' ? 'Kilimanjaro' : 'كيليمنجارو'}</h3>
              <p className="text-sm text-yellow-100">{language === 'en' ? 'Early morning is the best time to see the mountain clearly before clouds gather' : 'الصباح الباكر أفضل وقت لرؤية الجبل بوضوح قبل تجمع السحب'}</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">{language === 'en' ? 'Elephants' : 'الأفيال'}</h3>
              <p className="text-sm text-yellow-100">{language === 'en' ? 'Approach cautiously and use telephoto lenses to capture stunning details' : 'اقترب بحذر واستخدم عدسات مقربة لالتقاط تفاصيل مذهلة'}</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">{language === 'en' ? 'Landscapes' : 'المناظر الطبيعية'}</h3>
              <p className="text-sm text-yellow-100">{language === 'en' ? 'Use the leading lines of trees and elephants to guide the eye to the mountain' : 'استخدم الخطوط الأولية للأشجار والأفيال لتوجيه النظر للجبل'}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Discover the Grandeur of Amboseli' : 'اكتشف عظمة أمبوسيلي'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Experience an amazing adventure at the foot of Kilimanjaro and among giant elephant herds in one of Africa\'s most beautiful parks'
              : 'عش تجربة مذهلة بين أقدام كيليمنجارو وقطعان الأفيال العملاقة في واحدة من أجمل حدائق أفريقيا'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Book Your Amboseli Trip' : 'احجز رحلتك لأمبوسيلي'}
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              {language === 'en' ? 'View All Packages' : 'شاهد جميع الباقات'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};