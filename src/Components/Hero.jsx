import React, { Component } from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
const HeroData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Colo Zero",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        {/* // navbar Component */}
        <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1 z-40">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "White",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "White",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.p
                    key={activeData.id}
                    variants={SlideRight(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-sm leading-loose text-white/80"
                  >
                    {activeData.subtitle}
                  </motion.p>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "White",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
              {/* List seprator */}
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
                  className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
                >
                  <div className="w-20 h-[1px] bg-white"></div>
                  <p>TOP RECOMMENDATION</p>
                  <div className="w-20 h-[1px] bg-white"></div>
                </motion.div>
              </AnimatePresence>
              {/* image switcher */}
              <div className=" grid grid-cols-3 gap-10">
                {HeroData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: activeData.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "view Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        className="space-y-3 cursor-pointer hover:scale-105 transition-all duration-200"
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                      >
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className={`w-[80px] img-shadow ${
                              activeData.image === item.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                            }`}
                          />
                        </div>
                        <div className="text-center !mt-6 space-y-1">
                          <p className="text-base line-through opacity-50">
                            {item.price}
                          </p>
                          <p className="text-xl font-bold">{item.price}</p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <img
              src={activeData.image}
              alt=""
              className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
            />
            <div className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 -translate-x-1/2 -translate-y-1/3 left-1/2 z-0">
              {activeData.modal}
            </div>
          </div>
          {/* Whatsap icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Hero;
