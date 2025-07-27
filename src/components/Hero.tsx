import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // This ensures the video plays even if the browser blocks autoplay.
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Suppress the error when media is removed from document during navigation
        if (!error.message.includes('interrupted because the media was removed from the document')) {
          console.error("Video autoplay was prevented:", error);
        }
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/Maasai mara.jpg"
        className="absolute z-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/8063630/8063630-hd_1280_720_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('welcomeToInjaaz')}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 mb-4 font-medium">
              {t('premiumToursSubtitle')}
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tours"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 text-center"
              >
                {t('exploreTours')}
              </Link>
              <Link
                to="/request-quote"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all text-center"
              >
                {t('getQuote')}
              </Link>
              <Link
                to="/tours/custom"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 hover:text-white transition-all text-center"
              >
                {t('customPackage')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};