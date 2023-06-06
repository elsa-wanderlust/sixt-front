// import from react and package(s)
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import style
import "./carouselPictures.css";

const CarouselPictures = ({ pictures, type }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      showDots="true"
      infinite={true}
      className="carouselAll"
    >
      {pictures.map((image) => {
        return (
          <img
            src={image}
            key={image}
            className={
              type === "modal" ? "carouselOnePicModal" : "carouselOnePic"
            }
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselPictures;
