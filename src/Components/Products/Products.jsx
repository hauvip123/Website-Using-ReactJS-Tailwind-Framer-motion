import React from "react";
import P1 from "../../assets/fanta1.png";
import P2 from "../../assets/fanta2.png";
import P3 from "../../assets/fanta3.png";
import { motion } from "framer-motion";
export const fadeup = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    icon: P1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Fanta",
    icon: P2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Cola Zero",
    icon: P3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    delay: 1.1,
  },
];
const Products = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeup(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold pb-10 text-center"
        >
          Our Products
        </motion.h1>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeup(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView="show"
              className="flex flex-col items-center justify-center mx-auto bg-white max-w-[300px] p-5 rounded-xl shadow-lg"
            >
              <img
                src={item.icon}
                alt=""
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-center text-2xl font-bold font-handwriting">
                  {item.title}
                </h1>
                <p className="text-sm text-center text-gray-600">{item.desc}</p>
                <button className="mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-300">
                  By now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
