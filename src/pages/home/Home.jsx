import Header from '../../components/header/Header';
import Hero from '../../components/sections/hero/Hero';
import HeroBottom from '../../components/sections/hero_bottom/HeroBottom';
import Trending from '../../components/sections/trending/Trending';

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <HeroBottom />
      <Trending />
    </main>
  );
};

export default Home;
