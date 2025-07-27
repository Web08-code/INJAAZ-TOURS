import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Apple as WhatsApp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/IMG-20250721-WA0001.jpg" alt="Injaaz Logo" className="h-16 w-auto" />
            </div>
            <p className="text-green-100 text-sm">
              {t('aboutDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('tours')}</h4>
            <ul className="space-y-2 text-sm">
              <li key="/tours/safari"><Link to="/tours/safari" className="text-green-100 hover:text-yellow-400 transition-colors">{t('safariTours')}</Link></li>
              <li key="/tours/luxury"><Link to="/tours/luxury" className="text-green-100 hover:text-yellow-400 transition-colors">{t('luxurySafaris')}</Link></li>
              <li key="/tours/budget"><Link to="/tours/budget" className="text-green-100 hover:text-yellow-400 transition-colors">{t('budgetSafaris')}</Link></li>
              <li key="/tours/custom"><Link to="/tours/custom" className="text-green-100 hover:text-yellow-400 transition-colors">{t('customPackages')}</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('destinations')}</h4>
            <ul className="space-y-2 text-sm">
              <li key="/destinations/maasai-mara"><Link to="/destinations/maasai-mara" className="text-green-100 hover:text-yellow-400 transition-colors">{t('maasaiMara')}</Link></li>
              <li key="/destinations/amboseli"><Link to="/destinations/amboseli" className="text-green-100 hover:text-yellow-400 transition-colors">{t('amboseli')}</Link></li>
              <li key="/destinations/tsavo"><Link to="/destinations/tsavo" className="text-green-100 hover:text-yellow-400 transition-colors">{t('tsavo')}</Link></li>
              <li key="/destinations/diani-beach"><Link to="/destinations/diani-beach" className="text-green-100 hover:text-yellow-400 transition-colors">{t('dianiBeach')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactUs')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+254 712 346 678</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>info@injaazagency.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span>{t('nairobiKenya')}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">{t('followUs')}</h5>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="https://wa.me/254712346678" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <WhatsApp className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-100 hover:text-yellow-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <h4 className="text-lg font-semibold mb-4 text-center">{t('paymentMethods')}</h4>
          <div className="flex justify-center items-center space-x-8 rtl:space-x-reverse mb-6">
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <span className="text-blue-600 font-bold text-sm">VISA</span>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <span className="text-red-600 font-bold text-sm">MasterCard</span>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <span className="text-blue-500 font-bold text-sm">PayPal</span>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <span className="text-gray-700 font-bold text-sm">Apple Pay</span>
            </div>
            <div className="bg-green-600 rounded-lg p-3 shadow-lg">
              <span className="text-white font-bold text-sm">M-PESA</span>
            </div>
          </div>
          <p className="text-center text-green-200 text-sm">{t('securePayment')}</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-green-700 text-center">
          <p className="text-green-100 text-sm">
            © 2025 Injaaz Tours. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};