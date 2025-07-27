import React, { useState } from 'react';
import { Send, Users, Calendar, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const RequestQuote = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    budget: '',
    startDate: '',
    endDate: '',
    destinations: [],
    interests: [],
    accommodation: '',
    specialRequests: '',
    nationality: '',
    experience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        setFormData({
          ...formData,
          [name]: [...(formData[name as keyof typeof formData] as string[]), value]
        });
      } else {
        setFormData({
          ...formData,
          [name]: (formData[name as keyof typeof formData] as string[]).filter(item => item !== value)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('تم إرسال طلب العرض بنجاح! سنتواصل معك خلال 24 ساعة.');
  };

  const destinations = [
    { id: 'maasai-mara', name: 'ماساي مارا' },
    { id: 'amboseli', name: 'أمبوسيلي' },
    { id: 'tsavo', name: 'تسافو' },
    { id: 'diani-beach', name: 'شاطئ ديان' },
    { id: 'lake-nakuru', name: 'بحيرة ناكورو' },
    { id: 'mount-kenya', name: 'جبل كينيا' }
  ];

  const interests = [
    { id: 'wildlife', name: 'مشاهدة الحياة البرية' },
    { id: 'photography', name: 'التصوير الفوتوغرافي' },
    { id: 'culture', name: 'التراث والثقافة' },
    { id: 'adventure', name: 'الأنشطة المغامرة' },
    { id: 'beach', name: 'الشواطئ والاسترخاء' },
    { id: 'hiking', name: 'المشي والتسلق' }
  ];

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('requestQuote')}
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            املأ النموذج أدناه وسنقوم بتصميم برنامج سياحي مخصص يناسب احتياجاتك وميزانيتك
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Personal Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Users className="h-6 w-6 ml-3 text-yellow-600" />
              المعلومات الشخصية
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailAddress')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="+966 50 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الجنسية
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="السعودية، الإمارات، إلخ..."
                />
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Calendar className="h-6 w-6 ml-3 text-yellow-600" />
              تفاصيل الرحلة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('groupSize')} *
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">اختر حجم المجموعة</option>
                  <option value="1">شخص واحد</option>
                  <option value="2">شخصان</option>
                  <option value="3-4">3-4 أشخاص</option>
                  <option value="5-8">5-8 أشخاص</option>
                  <option value="9-15">9-15 شخص</option>
                  <option value="16+">أكثر من 16 شخص</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('budget')} (بالدولار الأمريكي)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="">اختر نطاق الميزانية</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-20000">$10,000 - $20,000</option>
                  <option value="20000+">أكثر من $20,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ البداية *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ النهاية *
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نوع الإقامة المفضل
              </label>
              <select
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                <option value="">اختر نوع الإقامة</option>
                <option value="luxury">فنادق ومنتجعات فاخرة (5 نجوم)</option>
                <option value="mid-range">فنادق متوسطة (3-4 نجوم)</option>
                <option value="budget">إقامة اقتصادية</option>
                <option value="camping">التخييم والمغامرة</option>
                <option value="mixed">مزيج من الخيارات</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                خبرتك السابقة في السفاري
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              >
                <option value="">اختر مستوى الخبرة</option>
                <option value="first-time">أول مرة</option>
                <option value="beginner">مبتدئ (1-2 رحلة)</option>
                <option value="experienced">خبير (3-5 رحلات)</option>
                <option value="expert">محترف (أكثر من 5 رحلات)</option>
              </select>
            </div>
          </div>

          {/* Destinations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <MapPin className="h-6 w-6 ml-3 text-yellow-600" />
              الوجهات المرغوبة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destinations.map((destination) => (
                <label key={destination.id} className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="destinations"
                    value={destination.id}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700">{destination.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Clock className="h-6 w-6 ml-3 text-yellow-600" />
              {t('interests')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <label key={interest.id} className="flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest.id}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700">{interest.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">طلبات خاصة</h2>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
              placeholder="أخبرنا عن أي طلبات خاصة، قيود غذائية، احتياجات طبية، أو تفضيلات أخرى..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            <Send className="h-5 w-5 mr-2" />
            إرسال طلب العرض
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            * سنقوم بالرد على طلبك خلال 24 ساعة مع عرض مفصل ومخصص لرحلتك
          </p>
        </form>

        {/* Additional Info */}
        <div className="mt-12 bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            خدمة عملاء متميزة
          </h3>
          <p className="text-lg mb-6">
            فريق خبرائنا جاهز لمساعدتك في كل خطوة من خطوات التخطيط لرحلتك
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/254712346678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-yellow-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              WhatsApp: +254 712 346 678
            </a>
            <a
              href="tel:+254712346678"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};