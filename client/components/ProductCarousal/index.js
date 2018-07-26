import React from "react";
import Slider from "react-slick";

class ProductCarousal extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

    if(this.props.images) {
      console.log(this.props.images)
        return <div className="product-carousal__container" >
            <Slider {...settings}>
              {this.props.images.map(item => (
                <img  key = {'carousal'+item} className="product-carousal__images" src={item} />
              ))}
            </Slider>
          </div>;
    } else {
        return null;
    }
  }
}

export default ProductCarousal;


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}
