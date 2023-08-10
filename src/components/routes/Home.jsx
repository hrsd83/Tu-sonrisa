import CarouselEspecialistas from "../CarouselEspecialistas";
import BannerEquipo from "../BannerEquipo";
import Carousel from "../Carousel";
import Hero from "../Hero";
import NavBar from "../NavBar";
import Article from "../Article";
import Footer from "../Footer";

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <Hero></Hero>
      <BannerEquipo></BannerEquipo>
      <CarouselEspecialistas></CarouselEspecialistas>
      <Article></Article>
      <Footer></Footer>
    </>
  );
};
