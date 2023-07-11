import Campaigns from "../../components/Campaigns";
import Carousel from "/components/Carousel";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/About";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
    </div>
  );
};

export default Index;