import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Users, Clock, Star, Binary as Binoculars, TreePine, Camera, Mountain } from 'lucide-react';

export const Tsavo = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            {language === 'en' ? 'Tsavo National Park' : 'حديقة تسافو الوطنية'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Kenya\'s largest national park with incredible biodiversity and a rich history of wilderness adventures'
              : 'أكبر حديقة وطنية في كينيا مع تنوع بيولوجي مذهل وتاريخ غني بالمغامرات البرية'}
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <img
            src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Elephants in Tsavo National Park"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-4">{language === 'en' ? 'The Real African Wilderness' : 'البرية الأفريقية الحقيقية'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '22,000+ sq km' : '22,000+ كم²'}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '60+ Mammal Species' : '60+ نوع من الثدييات'}</span>
              </div>
              <div className="flex items-center">
                <TreePine className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '400+ Bird Species' : '400+ نوع من الطيور'}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{language === 'en' ? '3-5 Ideal Days' : '3-5 أيام مثالية'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tsavo East & West */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Discover Tsavo East & West' : 'اكتشف تسافو الشرقية والغربية'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="A cheetah in Tsavo East"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">{language === 'en' ? 'Tsavo East' : 'تسافو الشرقية'}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>{language === 'en' ? '13,747 sq km - Kenya\'s largest park' : '13,747 كم² - أكبر حديقة في كينيا'}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>{language === 'en' ? 'Famous Red Elephants' : 'الأفيال الحمراء الشهيرة'}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en'
                      ? 'Known for its red elephants that cover themselves in the distinctive red earth of the region. Vast landscapes with remarkable geological diversity and rich wildlife.'
                      : 'تشتهر بالأفيال الحمراء التي تغطي نفسها بالتراب الأحمر المميز للمنطقة. مناظر طبيعية شاسعة مع تنوع جيولوجي رائع وحياة برية غنية.'}
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Highlights:' : 'أبرز المعالم:'}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>{language === 'en' ? '• Yatta Plateau' : '• هضبة يتا الصخرية'}</li>
                      <li>{language === 'en' ? '• Galana River and its rapids' : '• نهر غالانا ومنحدراته'}</li>
                      <li>{language === 'en' ? '• Lugard\'s Falls' : '• أرض لوجاردز الملونة'}</li>
                      <li>{language === 'en' ? '• Aruba Dam' : '• بحيرة الجيب الاصطناعية'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Elephants in Tsavo West"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">{language === 'en' ? 'Tsavo West' : 'تسافو الغربية'}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>{language === 'en' ? '9,065 sq km - More mountainous and greener' : '9,065 كم² - أكثر جبلية وخضرة'}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mountain className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{language === 'en' ? 'Mzima Springs' : 'ينابيع مزيما الكريستالية'}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en'
                      ? 'More geographically diverse with volcanic hills and natural springs. Denser vegetation and varied wildlife in a stunning natural environment.'
                      : 'أكثر تنوعاً جغرافياً مع التلال البركانية والينابيع الطبيعية. نباتات أكثف وحياة برية متنوعة في بيئة طبيعية خلابة.'}
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-green-800 mb-2">{language === 'en' ? 'Highlights:' : 'أبرز المعالم:'}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>{language === 'en' ? '• Mzima Springs' : '• ينابيع مزيما الكريستالية'}</li>
                      <li>{language === 'en' ? '• Chaimu Lava Flow' : '• كهوف شتاني الطبيعية'}</li>
                      <li>{language === 'en' ? '• Ngulia Rhino Sanctuary' : '• تلال شوما الخضراء'}</li>
                      <li>{language === 'en' ? '• Shetani Lava Flows and Caves' : '• حفر روار الصخرية'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife & Unique Features */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-12 mb-20 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{language === 'en' ? 'Unique Biodiversity' : 'التنوع البيولوجي الفريد'}</h2>
            <p className="text-green-200 text-xl max-w-2xl mx-auto">
              {language === 'en'
                ? 'Tsavo is home to an amazing diversity of animal and plant life in multiple ecosystems'
                : 'تسافو موطن لتنوع حيواني ونباتي مذهل في نظم بيئية متعددة'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Binoculars className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Large Mammals' : 'الثدييات الكبيرة'}</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>{language === 'en' ? '• Famous Red Elephants' : '• الأفيال الحمراء الشهيرة'}</li>
                <li>{language === 'en' ? '• Lions and Leopards' : '• الأسود والنمور'}</li>
                <li>{language === 'en' ? '• Black Rhinos' : '• وحيد القرن الأسود'}</li>
                <li>{language === 'en' ? '• African Buffalo' : '• الجاموس الأفريقي'}</li>
                <li>{language === 'en' ? '• Reticulated Giraffe' : '• الزراف الشبكي'}</li>
                <li>{language === 'en' ? '• Hippos and Crocodiles' : '• فرس النهر والتماسيح'}</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TreePine className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Birds' : 'الطيور'}</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>{language === 'en' ? '• Over 400 species' : '• أكثر من 400 نوع'}</li>
                <li>{language === 'en' ? '• African Ostrich' : '• النعام الأفريقي'}</li>
                <li>{language === 'en' ? '• Crowned Cranes' : '• طيور الغرنوق التاجية'}</li>
                <li>{language === 'en' ? '• Falcons and Eagles' : '• الصقور والنسور'}</li>
                <li>{language === 'en' ? '• Bee-eaters and Shrikes' : '• طيور النحل والوشوك'}</li>
                <li>{language === 'en' ? '• Migratory Waterfowl' : '• الطيور المائية المهاجرة'}</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mountain className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Ecosystems' : 'النظم البيئية'}</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>{language === 'en' ? '• Dry Savanna' : '• السافانا الجافة'}</li>
                <li>{language === 'en' ? '• Mountain Forests' : '• الغابات الجبلية'}</li>
                <li>{language === 'en' ? '• Wetlands' : '• الأراضي الرطبة'}</li>
                <li>{language === 'en' ? '• Rock Formations' : '• التكوينات الصخرية'}</li>
                <li>{language === 'en' ? '• Seasonal Grasslands' : '• المراعي الموسمية'}</li>
                <li>{language === 'en' ? '• River Valleys' : '• الأودية النهرية'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Adventure Activities */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Activities & Adventures' : 'الأنشطة والمغامرات'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'Wildlife Photography' : 'تصوير الحياة البرية'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en'
                  ? 'Exceptional photography opportunities for red elephants and diverse landscapes with perfect African lighting.'
                  : 'فرص تصوير استثنائية للأفيال الحمراء والمناظر الطبيعية المتنوعة مع إضاءة أفريقية مثالية.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Mountain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'Cave Exploration' : 'استكشاف الكهوف'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en'
                  ? 'Visit the natural Shetani Caves and Mzima Springs for a unique underground experience.'
                  : 'زيارة كهوف شتاني الطبيعية وينابيع مزيما الكريستالية لتجربة فريدة تحت الأرض.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Binoculars className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'Safari Trips' : 'رحلات السفاري'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en'
                  ? 'Day and night trips to see rare animals in vast, uncrowded areas.'
                  : 'رحلات نهارية وليلية لمشاهدة الحيوانات النادرة في مساحات شاسعة بعيداً عن الزحام.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'Bird Watching' : 'مراقبة الطيور'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en'
                  ? 'Over 400 bird species make Tsavo a paradise for bird watchers and photographers.'
                  : 'أكثر من 400 نوع من الطيور تجعل تسافو جنة لمحبي مراقبة الطيور والتصوير.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'Geological Tours' : 'الجولات الجيولوجية'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en'
                  ? 'Explore the unique rock formations and geological history of this ancient region.'
                  : 'استكشاف التكوينات الصخرية الفريدة والتاريخ الجيولوجي لهذه المنطقة القديمة.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">{language === 'en' ? 'Local Culture' : 'الثقافة المحلية'}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {language === 'en'
                  ? 'Visit local communities and learn about the traditions of the Kamba people and interact with their ancient culture.'
                  : 'زيارة المجتمعات المحلية وتعلم تقاليد شعب كامبا والتفاعل مع ثقافتهم العريقة.'}
              </p>
            </div>
          </div>
        </div>

        {/* Historical Significance */}
        <div className="bg-yellow-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              {language === 'en' ? 'History & Legends of Tsavo' : 'تاريخ وأساطير تسافو'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en' ? 'A park rich in history and legendary tales' : 'حديقة غنية بالتاريخ والحكايات الأسطورية'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">{language === 'en' ? 'The Legendary Man-Eaters of Tsavo' : 'أسود تسافو الأسطورية'}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {language === 'en'
                  ? 'In 1898, the Tsavo lions became world-renowned when they attacked railway construction workers in Uganda. This true story inspired many films and books, making Tsavo a legendary place in African history.'
                  : 'في عام 1898، أصبحت أسود تسافو مشهورة عالمياً عندما هاجمت عمال بناء سكة حديد أوغندا. هذه القصة الحقيقية ألهمت العديد من الأفلام والكتب، مما جعل تسافو مكاناً أسطورياً في تاريخ أفريقيا.'}
              </p>
              
              <h4 className="text-xl font-semibold text-green-700 mb-3">{language === 'en' ? 'Historical Facts:' : 'حقائق تاريخية:'}</h4>
              <ul className="text-gray-600 space-y-2">
                <li>{language === 'en' ? '• Park established in 1948' : '• تأسست الحديقة عام 1948'}</li>
                <li>{language === 'en' ? '• Oldest national park in Kenya' : '• أقدم حديقة وطنية في كينيا'}</li>
                <li>{language === 'en' ? '• Part of the historical migration route' : '• جزء من طريق الهجرة التاريخي'}</li>
                <li>{language === 'en' ? '• Home to Kamba and Maasai tribes' : '• موطن لقبائل الكامبا والماساي'}</li>
              </ul>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Lions in Tsavo National Park"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Best Time & Practical Info */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            {language === 'en' ? 'Practical Information for Visiting' : 'معلومات عملية للزيارة'}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{language === 'en' ? 'Best Time to Visit' : 'أفضل أوقات الزيارة'}</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">{language === 'en' ? 'June - September' : 'يونيو - سبتمبر'}</h4>
                  <p className="text-sm text-gray-600">{language === 'en' ? 'Ideal dry season, animals gather around water' : 'موسم جاف مثالي، حيوانات تتجمع حول الماء'}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">{language === 'en' ? 'October - December' : 'أكتوبر - ديسمبر'}</h4>
                  <p className="text-sm text-gray-600">{language === 'en' ? 'Little rain, beautiful green landscapes' : 'مطر قليل، مناظر خضراء جميلة'}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{language === 'en' ? 'What to Bring' : 'ما تحتاج إحضاره'}</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>{language === 'en' ? '• Light clothing and a hat' : '• ملابس خفيفة وقبعة'}</li>
                <li>{language === 'en' ? '• Sunscreen' : '• كريم واقي من الشمس'}</li>
                <li>{language === 'en' ? '• Binoculars for animals' : '• منظار للحيوانات'}</li>
                <li>{language === 'en' ? '• Camera and extra batteries' : '• كاميرا وبطاريات إضافية'}</li>
                <li>{language === 'en' ? '• Comfortable walking shoes' : '• أحذية مريحة للمشي'}</li>
                <li>{language === 'en' ? '• Water bottle and light snacks' : '• زجاجة ماء وطعام خفيف'}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{language === 'en' ? 'Entrance Fees' : 'رسوم الدخول'}</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">{language === 'en' ? 'Adult Foreigners' : 'الأجانب البالغون'}</h4>
                  <p className="text-green-600 font-bold">{language === 'en' ? '$65 / day' : '$65 / يوم'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">{language === 'en' ? 'Children (3-18 years)' : 'الأطفال (3-18 سنة)'}</h4>
                  <p className="text-green-600 font-bold">{language === 'en' ? '$35 / day' : '$35 / يوم'}</p>
                </div>
                <p className="text-xs text-gray-500">{language === 'en' ? '* Prices are subject to change' : '* الأسعار قابلة للتغيير'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <TreePine className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Explore the Wonders of Tsavo' : 'استكشف عجائب تسافو'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Embark on an unforgettable adventure in Kenya\'s largest and oldest national parks and discover red elephants and amazing biodiversity'
              : 'انطلق في مغامرة لا تُنسى في أكبر وأقدم حدائق كينيا الوطنية واكتشف الأفيال الحمراء والتنوع البيولوجي المذهل'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {language === 'en' ? 'Book Your Tsavo Adventure' : 'احجز مغامرة تسافو'}
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              {language === 'en' ? 'View All Tours' : 'شاهد جميع الجولات'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};