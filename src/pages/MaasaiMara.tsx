import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, Calendar, Star, Camera, Binary as Binoculars, TreePine } from 'lucide-react';

export const MaasaiMara = () => {
  const highlights = [
    {
      icon: Binoculars,
      title: 'الهجرة الكبرى',
      description: 'شاهد أكثر من مليوني حيوان في رحلة الهجرة السنوية المذهلة'
    },
    {
      icon: Camera,
      title: 'الحيوانات الخمسة الكبار',
      description: 'الأسد، النمر، الفيل، وحيد القرن، والجاموس في بيئتهم الطبيعية'
    },
    {
      icon: TreePine,
      title: 'ثقافة الماساي',
      description: 'زر قرى الماساي التراثية واتعلم عن تقاليدهم العريقة'
    },
    {
      icon: Star,
      title: 'مناظر خلابة',
      description: 'سافانا أفريقية لا متناهية مع غروب شمس ساحر'
    }
  ];

  const bestTimes = [
    {
      period: 'يوليو - أكتوبر',
      title: 'موسم الهجرة الكبرى',
      description: 'أفضل وقت لمشاهدة الهجرة وعبور الأنهار',
      weather: 'جاف ومعتدل'
    },
    {
      period: 'يناير - مارس',
      title: 'موسم الولادة',
      description: 'مشاهدة صغار الحيوانات والطبيعة الخضراء',
      weather: 'دافئ مع أمطار خفيفة'
    }
  ];

  const activities = [
    'رحلات السفاري الصباحية والمسائية',
    'رحلة بالونة الهوائية مع الإفطار',
    'زيارة قرية الماساي التراثية',
    'تصوير الحياة البرية',
    'رحلات السفاري الليلية',
    'نزهات على ضفاف الأنهار'
  ];

  const accommodations = [
    {
      name: 'Fairmont Mara Safari Club',
      category: 'فاخر جداً',
      price: '$800/ليلة',
      features: ['على ضفة النهر', 'سبا فاخر', 'مطعم عالمي']
    },
    {
      name: 'Mara Serena Safari Lodge',
      category: 'فاخر',
      price: '$400/ليلة',
      features: ['إطلالة رائعة', 'حمام سباحة', 'خدمة ممتازة']
    },
    {
      name: 'Mara River Camp',
      category: 'متوسط',
      price: '$180/ليلة',
      features: ['مخيم مريح', 'مطعم محلي', 'أنشطة متنوعة']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            محمية ماساي مارا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أشهر محميات كينيا وموطن الهجرة الكبرى. تجربة سفاري لا تُنسى مع أجمل مخلوقات أفريقيا
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
          <img
            src="/Maasai mara (3).jpg"
            alt="A lioness in the Maasai Mara"
            className="w-full h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-4">عالم من الجمال والإثارة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>580 كم²</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>95 نوع من الثدييات</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>مفتوح طوال العام</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>2-5 أيام مثالية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            لماذا ماساي مارا؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Times */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            أفضل أوقات الزيارة
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestTimes.map((time, index) => (
              <div key={index} className="border border-green-200 rounded-xl p-8 hover:border-green-400 transition-colors">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  {time.period}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">{time.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{time.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>الطقس: {time.weather}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              الأنشطة والتجارب
            </h2>
            <p className="text-xl text-gray-600">
              تجارب متنوعة تناسب جميع الأذواق
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">ما يمكنك فعله:</h3>
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Tourists on a safari in the Maasai Mara"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodations */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            أماكن الإقامة المميزة
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((acc, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-green-800 text-lg">{acc.name}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    {acc.category}
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-green-600 mb-4">
                  {acc.price}
                </div>
                
                <div className="space-y-2">
                  {acc.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="h-3 w-3 text-yellow-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wildlife Gallery */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            الحياة البرية في ماساي مارا
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="A pride of lions in the Maasai Mara"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">الأسود</span>
              </div>
            </div>
            
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Elephants in the Maasai Mara"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">الأفيال</span>
              </div>
            </div>
            
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="A cheetah in the Maasai Mara"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">النمور</span>
              </div>
            </div>
            
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Wildebeest migration in the Maasai Mara"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">النو</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            استعد لمغامرة ماساي مارا
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            اكتشف عالم الهجرة الكبرى والحيوانات الخمسة الكبار في أشهر محميات أفريقيا
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-quote"
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              احجز رحلتك لماساي مارا
            </Link>
            <Link
              to="/tours/safari"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              شاهد باقات السفاري
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};