import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  function handleScroll() {
    navigate("/allCrafts");
  }
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full min-h-[90vh]">
            <img
              className="absolute inset-0 w-full h-full rounded-2xl object-cover"
              src="https://i.ibb.co/fSdXXGD/Banner2.jpg"
              alt="Your image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white lg:text-4xl text-xl font-bold mb-8">
              Explore the Beauty of Clay Sculpture
              </h1>
              <p className="text-white lg:text-lg text-sm w-3/5 text-center mb-8">
              Immerse yourself in the world of clay sculpture. Discover unique and captivating handmade clay sculptures crafted by talented artisans. From intricate figurines to stunning pottery, our collection celebrates the beauty of clay artistry.
              </p>
              <button
                className="btn hover:text-dbr hover:bg-skin lg:text-lg text-white lg:font-semibold bg-dbr"
                onClick={handleScroll}
              >
                Lets see the collection
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full min-h-[90vh]">
            <img
              className="absolute inset-0 w-full h-full rounded-2xl object-cover"
              src="https://i.ibb.co/wdB313G/Banner1.jpg"
              alt="Your image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white lg:text-4xl text-xl font-bold mb-8 text-center">
              Unleash Your Creativity with Clay
              </h1>
              <p className="text-white lg:text-lg text-sm w-3/5 text-center mb-8">
              Experience the joy of sculpting with clay. Whether you are a seasoned artist or a beginner, our workshops and tutorials are designed to inspire and guide you in creating your own masterpiece. Let your imagination take shape in the versatile medium of clay.
              </p>
              <button
                className="btn hover:text-dbr hover:bg-skin lg:text-lg text-white lg:font-semibold bg-dbr"
                onClick={handleScroll}
              >
                Lets see the collection
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full min-h-[90vh]">
            <img
              className="absolute inset-0 w-full h-full rounded-2xl object-cover"
              src="https://i.ibb.co/MBD3CMy/Banner3.jpg"
              alt="Your image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white lg:text-4xl text-xl font-bold text-center mb-8">
              Customized Clay Creations
              </h1>
              <p className="text-white lg:text-lg text-sm w-3/5 text-center mb-8">
              Make your moments memorable with personalized clay art. Whether it is a special gift, a unique decor piece, or a custom sculpture, our artisans will work with you to bring your vision to life. Create cherished memories with bespoke clay creations tailored just for you.
              </p>
              <button
                className="btn hover:text-dbr hover:bg-skin lg:text-lg text-white lg:font-semibold bg-dbr"
                onClick={handleScroll}
              >
                Lets see the collection
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;