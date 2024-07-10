import { ImagesSlider } from "../ui/ImageSlider";
import { motion } from "framer-motion";

const LoginCarousel = () => {
  const images = [
    "https://media.istockphoto.com/id/525670203/photo/snow-biking-couple.jpg?s=2048x2048&w=is&k=20&c=Z0fPlE5RZQxnbcIVQKVWnp4GIHDdTwUlNiIlQpDC5PE=",
    "https://media.istockphoto.com/id/481925376/photo/police-chasing-on-the-city.jpg?s=2048x2048&w=is&k=20&c=LyWgQ1y37D1EIHj8vgcNG3WMVthn_dQbnZkHvGBq7cE=",
    "https://media.istockphoto.com/id/1370540577/photo/close-up-of-tourist-using-gps-map-navigation-on-smartphone-application-screen-for-direction.jpg?s=2048x2048&w=is&k=20&c=TrAIncw1_gDBImKosPveU3Y5RXtAZ26AhzQdxoT8v_E=",
  ];
  return (
    <div className="h-1/2 lg:h-full">
      <ImagesSlider className="h-1/2 lg:h-full" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold font-secondary text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Quests, in real life
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export default LoginCarousel;
