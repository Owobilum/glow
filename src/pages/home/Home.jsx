import Header from '../../components/header/Header';
import Faq from '../../components/sections/faq/Faq';
import Hero from '../../components/sections/hero/Hero';
import HeroBottom from '../../components/sections/hero_bottom/HeroBottom';
import NaturalBeauty from '../../components/sections/natural_beauty/NaturalBeauty';
import Testimonials from '../../components/sections/testimonials/Testimonials';
import Trending from '../../components/sections/trending/Trending';

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <HeroBottom />
      <Trending />
      <NaturalBeauty />
      <Faq />
      <Testimonials />
    </main>
  );
};

export default Home;
