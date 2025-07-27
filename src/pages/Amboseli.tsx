import { Link } from 'react-router-dom';
import { Mountain, Camera, Binary as Binoculars, TreePine, Clock, MapPin, Users } from 'lucide-react';

export const Amboseli = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            حديقة أمبوسيلي الوطنية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            جبل كيليمنجارو الشامخ وقطعان الأفيال الضخمة في منظر طبيعي خلاب لا يُنسى
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
            <h2 className="text-3xl font-bold mb-4">أرض الأفيال العملاقة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>392 كم²</span>
              </div>
              <div className="flex items-center">
                <Mountain className="h-4 w-4 mr-2" />
                <span>كيليمنجارو 5,895م</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>1000+ فيل</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>1-3 أيام</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Attractions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            معالم أمبوسيلي الرئيسية
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
                  <h3 className="text-2xl font-bold text-green-800">جبل كيليمنجارو</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  أعلى قمة في أفريقيا تقع على الحدود مع تنزانيا. مناظر خلابة للجبل المغطى بالثلوج 
                  مع قطعان الأفيال في المقدمة تخلق صوراً لا تُنسى، خاصة عند شروق وغروب الشمس.
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
                  <h3 className="text-2xl font-bold text-green-800">قطعان الأفيال</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  أمبوسيلي موطن لأكثر من 1000 فيل أفريقي، وهي من أكبر التجمعات في كينيا. 
                  يمكنك مشاهدة العائلات الكبيرة وهي تتنقل عبر السافانا بحثاً عن الماء والطعام.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wildlife & Activities */}
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-12 mb-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">الحياة البرية والأنشطة</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">الحيوانات البرية:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span>• الأفيال الأفريقية</span>
                    <span>• الأسود</span>
                    <span>• النمور الصياد</span>
                    <span>• الضباع المرقطة</span>
                    <span>• الجاموس الأفريقي</span>
                    <span>• الزراف الماساي</span>
                    <span>• الحمر الوحشية</span>
                    <span>• الغزلان</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">الأنشطة المتاحة:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Camera className="h-4 w-4 mr-2" />
                      <span>تصوير الحياة البرية</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2" />
                      <span>زيارة قرى الماساي</span>
                    </div>
                    <div className="flex items-center">
                      <Binoculars className="h-4 w-4 mr-2" />
                      <span>رحلات السفاري النهارية</span>
                    </div>
                    <div className="flex items-center">
                      <Mountain className="h-4 w-4 mr-2" />
                      <span>مشاهدة كيليمنجارو</span>
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
            أفضل أوقات زيارة أمبوسيلي
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TreePine className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-3">يونيو - أكتوبر</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                الموسم الجاف المثالي لمشاهدة الحيوانات وهي تتجمع حول مصادر المياه. 
                رؤية واضحة لجبل كيليمنجارو.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-3">يناير - مارس</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                موسم جميل مع مناظر خضراء خلابة وطقس معتدل. 
                فرصة ممتازة لمشاهدة صغار الحيوانات.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-3">نوفمبر - ديسمبر</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                بداية الموسم الجاف مع إضاءة رائعة للتصوير. 
                زحام أقل من السياح وأسعار مناسبة.
              </p>
            </div>
          </div>
        </div>

        {/* Accommodation Options */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            أماكن الإقامة في أمبوسيلي
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
                <p className="text-yellow-600 font-semibold mb-3">فاخر • $320/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• إطلالة مباشرة على كيليمنجارو</li>
                  <li>• حمام سباحة ومطعم فاخر</li>
                  <li>• خدمة سبا ومساج</li>
                  <li>• أنشطة ثقافية</li>
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
                <p className="text-green-600 font-semibold mb-3">متوسط • $180/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• موقع ممتاز في قلب الحديقة</li>
                  <li>• غرف مريحة مع إطلالة</li>
                  <li>• مطعم ومرافق ترفيهية</li>
                  <li>• خدمة ودودة ومهنية</li>
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
                <p className="text-blue-600 font-semibold mb-3">اقتصادي • $80/ليلة</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• مخيم مريح وصديق للبيئة</li>
                  <li>• خيام مجهزة بالكامل</li>
                  <li>• وجبات محلية لذيذة</li>
                  <li>• قرب من مداخل الحديقة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Tips */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-12 mb-20 text-white">
          <div className="text-center mb-8">
            <Camera className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">نصائح للتصوير في أمبوسيلي</h2>
            <p className="text-yellow-100 max-w-2xl mx-auto">
              احصل على أفضل الصور مع هذه النصائح من خبراء التصوير
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">الإضاءة الذهبية</h3>
              <p className="text-sm text-yellow-100">أفضل وقت للتصوير عند الشروق والغروب للحصول على إضاءة دافئة</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">كيليمنجارو</h3>
              <p className="text-sm text-yellow-100">الصباح الباكر أفضل وقت لرؤية الجبل بوضوح قبل تجمع السحب</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">الأفيال</h3>
              <p className="text-sm text-yellow-100">اقترب بحذر واستخدم عدسات مقربة لالتقاط تفاصيل مذهلة</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <h3 className="font-bold mb-2">المناظر الطبيعية</h3>
              <p className="text-sm text-yellow-100">استخدم الخطوط الأولية للأشجار والأفيال لتوجيه النظر للجبل</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            اكتشف عظمة أمبوسيلي
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            عش تجربة مذهلة بين أقدام كيليمنجارو وقطعان الأفيال العملاقة في واحدة من أجمل حدائق أفريقيا
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              احجز رحلتك لأمبوسيلي
            </Link>
            <Link
              to="/tours"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              شاهد جميع الباقات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};