import HeroSection from "../componments/home/HeroSection";
import ListGetStartResturent from "../componments/home/ListGetStartResturent";
import Navigation from "../componments/home/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <ListGetStartResturent />
    </div>
  );
};
export default Home;
