import React from "react";
import BannerImg from "../../assets/Banner/juice.png";
import Splash from "../../assets/Banner/splash.png";
import { motion } from "framer-motion";
import { fadeup } from "../Products/Products";
const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
        {/* banner Image section */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:w-[400px] mx-auto mb-20 z-10 relative"
          />
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={Splash}
            alt=""
            className="bottom-0 absolute z-0 mx-12"
          />
        </div>
        {/* banner Text info section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              variants={fadeup(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold"
            >
              Referensh Your World with Fanta
            </motion.h1>
            <motion.p
              variants={fadeup(0.9)}
              initial="hidden"
              whileInView="show"
              className="text-gray-500"
            >
              Fanta brings a burst of vibrant flavors and effervescent fun to
              your day! Whether you're looking to quench your thirst with a
              zesty orange, tangy lemon, or one of our many other fruit-inspired
              flavors, Fanta is your go-to drink for a refreshing and exciting
              experience. Dive into the world of Fanta and let every sip spark
              your senses with its bold, bubbly, and refreshing taste!
            </motion.p>
            <motion.button
              variants={fadeup(1.1)}
              initial="hidden"
              whileInView="show"
              className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-300"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
