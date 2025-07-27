import { Link } from 'react-router-dom';
import { Shield, Award, Heart, Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Data moved outside the component to avoid re-creation on each render.
const values = [
  {
    icon: Heart,
    titleKey: 'about.values.hospitality.title',
    descriptionKey: 'about.values.hospitality.description'
  },
  {
    icon: Shield,
    titleKey: 'about.values.security.title',
    descriptionKey: 'about.values.security.description'
  },
  {
    icon: Award,
    titleKey: 'about.values.excellence.title',
    descriptionKey: 'about.values.excellence.description'
  },
  {
    icon: Globe,
    titleKey: 'about.values.expertise.title',
    descriptionKey: 'about.values.expertise.description'
  }
];

const team = [
  {
    name: 'أحمد محمد',
    positionKey: 'about.team.gm.position',
    experienceKey: 'about.team.gm.experience',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'سارة أحمد',
    positionKey: 'about.team.operations.position',
    experienceKey: 'about.team.operations.experience',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'محمد كامل',
    positionKey: 'about.team.guide.position',
    experienceKey: 'about.team.guide.experience',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const stats = [
  { number: '500+', labelKey: 'about.stats.happyClients' },
  { number: '50+', labelKey: 'about.stats.destinations' },
  { number: '10+', labelKey: 'about.stats.experience' },
  { number: '98%', labelKey: 'about.stats.satisfaction' }
];

export const AboutUs = () => {
  const { t } = useTranslation();

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
              {t('aboutInjaaz')}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                {t('aboutDescription')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">{t('about.hero.commitment')}</p>
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
                  <p className="text-gray-600 font-medium">{t(stat.labelKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-200">{t('about.values.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.titleKey} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">{t(value.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(value.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-6">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-200">{t('about.team.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-2">{t(member.positionKey)}</p>
                  <p className="text-gray-600 text-sm">{t(member.experienceKey)}</p>
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
                <h2 className="text-4xl font-bold mb-8">{t('about.mission.title')}</h2>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{t('about.mission.visionTitle')}</h3>
                  <p className="text-lg text-green-100 leading-relaxed">{t('about.mission.visionText')}</p>
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
              انضم إلى عائلة إنجاز
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              دعنا نصمم لك تجربة سياحية لا تُنسى في قلب أفريقيا الجميلة
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-quote"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105"
              >
                احجز رحلتك الآن
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};