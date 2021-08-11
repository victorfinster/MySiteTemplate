import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { DivSlider, ImageSlider } from "./styles";

import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <DivSlider className="keen-slider__slide">
        <ImageSlider src={img1} alt="Imagem" />
      </DivSlider>
      <DivSlider className="keen-slider__slide">
        <ImageSlider src={img2} alt="Imagem" />
      </DivSlider>
      <DivSlider className="keen-slider__slide">
        <ImageSlider src={img3} alt="Imagem" />
      </DivSlider>
      <DivSlider className="keen-slider__slide">
        <ImageSlider src={img4} alt="Imagem" />
      </DivSlider>
    </div>
  );
};
export default Slider;
