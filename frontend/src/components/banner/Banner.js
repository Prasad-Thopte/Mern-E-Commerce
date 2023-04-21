import FlashSale from "./images/super-sale.jpg"

import Banner1 from "./images/banner-1.jpg"
import Banner2 from "./images/banner-2.jpg"
import Banner3 from "./images/banner-3.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Slider Settings
const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
  };
//fuction to create slider
export default function Banner() {
    return (
        <div className="container">
        <div className="banner__container">
            <div className="slide__show">
                <Slider {...settings}>
                    <div className="slide__item">
                        <img src={Banner1} alt=""/>
                    </div>
                    <div className="slide__item">
                        <img src={Banner2} alt=""/>
                    </div>
                    <div className="slide__item">
                        <img src={Banner3} alt=""/>
                    </div>
                </Slider>
            </div>
            {/* carete div for side baner */ }
            <div className="banner__content">
                <img src={FlashSale} alt="" className="banner__image"/>
            </div>
        </div>
    </div>
    )
}
