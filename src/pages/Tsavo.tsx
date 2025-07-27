import { Link } from 'react-router-dom';
import { MapPin, Users, Clock, Star, Binary as Binoculars, TreePine, Camera, Mountain } from 'lucide-react';

export const Tsavo = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            حديقة تسافو الوطنية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أكبر حديقة وطنية في كينيا مع تنوع بيولوجي مذهل وتاريخ غني بالمغامرات البرية
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
            <h2 className="text-3xl font-bold mb-4">البرية الأفريقية الحقيقية</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>22,000+ كم²</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>60+ نوع من الثدييات</span>
              </div>
              <div className="flex items-center">
                <TreePine className="h-4 w-4 mr-2" />
                <span>400+ نوع من الطيور</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>3-5 أيام مثالية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tsavo East & West */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            اكتشف تسافو الشرقية والغربية
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="A cheetah in Tsavo East"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">تسافو الشرقية</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>13,747 كم² - أكبر حديقة في كينيا</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>الأفيال الحمراء الشهيرة</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    تشتهر بالأفيال الحمراء التي تغطي نفسها بالتراب الأحمر المميز للمنطقة. 
                    مناظر طبيعية شاسعة مع تنوع جيولوجي رائع وحياة برية غنية.
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-green-800 mb-2">أبرز المعالم:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• هضبة يتا الصخرية</li>
                      <li>• نهر غالانا ومنحدراته</li>
                      <li>• أرض لوجاردز الملونة</li>
                      <li>• بحيرة الجيب الاصطناعية</li>
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
                <h3 className="text-2xl font-bold text-green-800 mb-4">تسافو الغربية</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    <span>9,065 كم² - أكثر جبلية وخضرة</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mountain className="h-4 w-4 mr-2 text-blue-500" />
                    <span>ينابيع مزيما الكريستالية</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    أكثر تنوعاً جغرافياً مع التلال البركانية والينابيع الطبيعية. 
                    نباتات أكثف وحياة برية متنوعة في بيئة طبيعية خلابة.
                  </p>
                  <div className="pt-2">
                    <h4 className="font-semibold text-green-800 mb-2">أبرز المعالم:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ينابيع مزيما الكريستالية</li>
                      <li>• كهوف شتاني الطبيعية</li>
                      <li>• تلال شوما الخضراء</li>
                      <li>• حفر روار الصخرية</li>
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
            <h2 className="text-4xl font-bold mb-4">التنوع البيولوجي الفريد</h2>
            <p className="text-green-200 text-xl max-w-2xl mx-auto">
              تسافو موطن لتنوع حيواني ونباتي مذهل في نظم بيئية متعددة
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Binoculars className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">الثدييات الكبيرة</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>• الأفيال الحمراء الشهيرة</li>
                <li>• الأسود والنمور</li>
                <li>• وحيد القرن الأسود</li>
                <li>• الجاموس الأفريقي</li>
                <li>• الزراف الشبكي</li>
                <li>• فرس النهر والتماسيح</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TreePine className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">الطيور</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>• أكثر من 400 نوع</li>
                <li>• النعام الأفريقي</li>
                <li>• طيور الغرنوق التاجية</li>
                <li>• الصقور والنسور</li>
                <li>• طيور النحل والوشوك</li>
                <li>• الطيور المائية المهاجرة</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mountain className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">النظم البيئية</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>• السافانا الجافة</li>
                <li>• الغابات الجبلية</li>
                <li>• الأراضي الرطبة</li>
                <li>• التكوينات الصخرية</li>
                <li>• المراعي الموسمية</li>
                <li>• الأودية النهرية</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Adventure Activities */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            الأنشطة والمغامرات
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Camera className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">تصوير الحياة البرية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                فرص تصوير استثنائية للأفيال الحمراء والمناظر الطبيعية المتنوعة 
                مع إضاءة أفريقية مثالية.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Mountain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">استكشاف الكهوف</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                زيارة كهوف شتاني الطبيعية وينابيع مزيما الكريستالية 
                لتجربة فريدة تحت الأرض.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Binoculars className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">رحلات السفاري</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                رحلات نهارية وليلية لمشاهدة الحيوانات النادرة 
                في مساحات شاسعة بعيداً عن الزحام.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">مراقبة الطيور</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                أكثر من 400 نوع من الطيور تجعل تسافو 
                جنة لمحبي مراقبة الطيور والتصوير.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">الجولات الجيولوجية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                استكشاف التكوينات الصخرية الفريدة والتاريخ الجيولوجي 
                لهذه المنطقة القديمة.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-green-800 mb-3">الثقافة المحلية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                زيارة المجتمعات المحلية وتعلم تقاليد شعب كامبا 
                والتفاعل مع ثقافتهم العريقة.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Significance */}
        <div className="bg-yellow-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              تاريخ وأساطير تسافو
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              حديقة غنية بالتاريخ والحكايات الأسطورية
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">أسود تسافو الأسطورية</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                في عام 1898، أصبحت أسود تسافو مشهورة عالمياً عندما هاجمت عمال بناء سكة حديد 
                أوغندا. هذه القصة الحقيقية ألهمت العديد من الأفلام والكتب، مما جعل تسافو 
                مكاناً أسطورياً في تاريخ أفريقيا.
              </p>
              
              <h4 className="text-xl font-semibold text-green-700 mb-3">حقائق تاريخية:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• تأسست الحديقة عام 1948</li>
                <li>• أقدم حديقة وطنية في كينيا</li>
                <li>• جزء من طريق الهجرة التاريخي</li>
                <li>• موطن لقبائل الكامبا والماساي</li>
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
            معلومات عملية للزيارة
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">أفضل أوقات الزيارة</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">يونيو - سبتمبر</h4>
                  <p className="text-sm text-gray-600">موسم جاف مثالي، حيوانات تتجمع حول الماء</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">أكتوبر - ديسمبر</h4>
                  <p className="text-sm text-gray-600">مطر قليل، مناظر خضراء جميلة</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">ما تحتاج إحضاره</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• ملابس خفيفة وقبعة</li>
                <li>• كريم واقي من الشمس</li>
                <li>• منظار للحيوانات</li>
                <li>• كاميرا وبطاريات إضافية</li>
                <li>• أحذية مريحة للمشي</li>
                <li>• زجاجة ماء وطعام خفيف</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-4">رسوم الدخول</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">الأجانب البالغون</h4>
                  <p className="text-green-600 font-bold">$65 / يوم</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold">الأطفال (3-18 سنة)</h4>
                  <p className="text-green-600 font-bold">$35 / يوم</p>
                </div>
                <p className="text-xs text-gray-500">* الأسعار قابلة للتغيير</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <TreePine className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            استكشف عجائب تسافو
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            انطلق في مغامرة لا تُنسى في أكبر وأقدم حدائق كينيا الوطنية واكتشف الأفيال الحمراء والتنوع البيولوجي المذهل
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              احجز مغامرة تسافو
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              شاهد جميع الجولات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};