import { useEffect, useState } from 'react';

import Footer from '../../components/footer/Footer';
import FooterTop from '../../components/footer_top/FooterTop';
import Header from '../../components/header/Header';
import Faq from '../../components/sections/faq/Faq';
import Hero from '../../components/sections/hero/Hero';
import HeroBottom from '../../components/sections/hero_bottom/HeroBottom';
import NaturalBeauty from '../../components/sections/natural_beauty/NaturalBeauty';
import Partners from '../../components/sections/partners/Partners';
import Testimonials from '../../components/sections/testimonials/Testimonials';
import Trending from '../../components/sections/trending/Trending';
import SplashScreen from '../../components/splash_screen/SplashScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalId = setTimeout(() => setIsLoading(false), 2400);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      {isLoading && (
        <div>
          <SplashScreen />
        </div>
      )}
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <HeroBottom />
          <Trending />
          <NaturalBeauty />
          <Faq />
          <Testimonials />
          <Partners />
          <FooterTop />
          <Footer />
        </>
      )}
    </main>
  );
};

export default Home;
