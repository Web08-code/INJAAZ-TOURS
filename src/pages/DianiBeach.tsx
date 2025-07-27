import { Link } from 'react-router-dom';
import { Waves, Sun, Palmtree, Fish, Camera, Users, Clock, MapPin } from 'lucide-react';

export const DianiBeach = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-6">
            شاطئ ديان
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            جنة استوائية بمياه فيروزية ورمال بيضاء ناعمة على ساحل المحيط الهندي الساحر
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <img
            src="/Diani Beach.jpg"
            alt="Luxury beach resort at Diani Beach"
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-4">الشاطئ الأجمل في أفريقيا</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>25 كم من الرمال البيضاء</span>
              </div>
              <div className="flex items-center">
                <Sun className="h-4 w-4 mr-2" />
                <span>300+ يوم مشمس</span>
              </div>
              <div className="flex items-center">
                <Waves className="h-4 w-4 mr-2" />
                <span>مياه دافئة طوال العام</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>4-7 أيام مثالية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beach Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            لماذا ديان؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-800 mb-3">مياه كريستالية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                مياه المحيط الهندي الصافية بدرجات اللون الفيروزي الساحرة
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-800 mb-3">رمال بيضاء ناعمة</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                رمال مرجانية بيضاء ناعمة كالحرير تمتد لمسافات طويلة
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Palmtree className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-800 mb-3">أجواء استوائية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                أشجار جوز الهند والنخيل تضفي لمسة استوائية مثالية
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Fish className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-blue-800 mb-3">حياة بحرية غنية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                شعاب مرجانية مذهلة وحياة بحرية متنوعة للغوص والسنوركل
              </p>
            </div>
          </div>
        </div>

        {/* Water Activities */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 mb-20 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">الأنشطة المائية والترفيهية</h2>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              متعة لا نهاية لها في المياه الدافئة والشواطئ الرملية
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Fish className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="font-bold mb-3">الغوص والسنوركل</h3>
                  <p className="text-blue-200 text-sm">
                    استكشف الشعاب المرجانية الملونة والأسماك الاستوائية النادرة
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Waves className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="font-bold mb-3">رياضات مائية</h3>
                  <p className="text-blue-200 text-sm">
                    التزلج على الماء، الطائرة الشراعية، والكايت سيرفنج
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Sun className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="font-bold mb-3">رحلات بحرية</h3>
                  <p className="text-blue-200 text-sm">
                    جولات بالقارب الشراعي ورحلات صيد في أعالي البحار
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Camera className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="font-bold mb-3">التصوير البحري</h3>
                  <p className="text-blue-200 text-sm">
                    جلسات تصوير مع الدلافين والسلاحف البحرية
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/Evening Diani Beach Image.jpg"
                alt="Tourists enjoying water activities at Diani Beach"
                className="rounded-xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Accommodation Options */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            أماكن الإقامة على الشاطئ
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <img
                src="/Diani Beach (2).jpg"
                alt="Luxury beach resort at Diani Beach"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="font-bold text-blue-800 text-xl mb-2">
                  AfroChic Diani Beach Resort
                </h3>
                <p className="text-cyan-600 font-semibold mb-4">فاخر جداً • $450/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• فيلات فاخرة على الشاطئ مباشرة</li>
                  <li>• مسابح خاصة ومطاعم عالمية</li>
                  <li>• سبا ومركز صحي متكامل</li>
                  <li>• أنشطة مائية حصرية</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <img
                src="/Diani Beach (3).jpg"
                alt="Beachfront hotel at Diani Beach"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="font-bold text-blue-800 text-xl mb-2">
                  Diani Reef Beach Resort
                </h3>
                <p className="text-blue-600 font-semibold mb-4">فاخر • $220/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• موقع رائع على الشاطئ الرئيسي</li>
                  <li>• حمامات سباحة ومطاعم متنوعة</li>
                  <li>• مركز غوص ورياضات مائية</li>
                  <li>• ترفيه ليلي وأنشطة عائلية</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <img
                src="/Diani Beach (4).jpg"
                alt="Cozy beach lodge at Diani Beach"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="font-bold text-blue-800 text-xl mb-2">
                  Diani Beach Cottages
                </h3>
                <p className="text-green-600 font-semibold mb-4">متوسط • $120/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• كوخات مريحة بأسلوب أفريقي</li>
                  <li>• حدائق استوائية وحمام سباحة</li>
                  <li>• قرب من المطاعم والأسواق</li>
                  <li>• أجواء ودودة وعائلية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Local Experiences */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            تجارب محلية فريدة
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                اكتشف الثقافة الساحلية
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">قرى الصيادين</h4>
                    <p className="text-gray-600 text-sm">
                      زيارة قرى الصيادين المحلية وتعلم تقاليد الصيد التقليدية
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Palmtree className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">مزارع جوز الهند</h4>
                    <p className="text-gray-600 text-sm">
                      جولة في مزارع جوز الهند وتذوق المنتجات الطازجة
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Sun className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">الأسواق المحلية</h4>
                    <p className="text-gray-600 text-sm">
                      تسوق الحرف اليدوية والتوابل في أسواق ديان الملونة
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Fish className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">المأكولات البحرية</h4>
                    <p className="text-gray-600 text-sm">
                      تذوق أطباق السمك الطازج والمأكولات السواحيلية الأصيلة
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/Diani Beach (2).jpg"
                alt="Local culture and crafts at Diani Beach"
                className="rounded-xl shadow-lg w-full object-cover h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-12 mb-20 text-white">
          <div className="text-center mb-8">
            <Sun className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">أفضل أوقات زيارة ديان</h2>
            <p className="text-cyan-100 max-w-2xl mx-auto">
              طقس استوائي رائع طوال العام مع مواسم مثالية للأنشطة المختلفة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="font-bold text-xl mb-3">أكتوبر - مارس</h3>
              <p className="text-cyan-100 text-sm mb-4">
                الموسم الجاف المثالي مع طقس مشمس ومياه هادئة
              </p>
              <div className="text-xs text-cyan-200">
                مثالي للسباحة والغوص
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="font-bold text-xl mb-3">أبريل - يونيو</h3>
              <p className="text-cyan-100 text-sm mb-4">
                موسم الأمطار القصيرة مع أسعار أقل وزحام أقل
              </p>
              <div className="text-xs text-cyan-200">
                مثالي للاسترخاء والتوفير
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="font-bold text-xl mb-3">يوليو - سبتمبر</h3>
              <p className="text-cyan-100 text-sm mb-4">
                موسم الذروة مع طقس مثالي ونشاط سياحي عالي
              </p>
              <div className="text-xs text-cyan-200">
                احجز مبكراً لضمان الإقامة
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
          <Waves className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            استمتع بجنة ديان الاستوائية
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            اهرب إلى الشاطئ الأجمل في أفريقيا واستمتع بالمياه الكريستالية والرمال البيضاء الناعمة
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              احجز عطلتك في ديان
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              شاهد باقات الشاطئ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};