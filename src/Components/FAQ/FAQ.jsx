import React from "react";
import { useState } from "react";
const fqa = [
  {
    question: "What is Fanta?",
    answer:
      "Fanta is a brand of fruit-flavored carbonated soft drinks created by Coca-Cola Deutschland under the leadership of German businessman",
  },
  {
    question: "What favors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors like orange, grape, pineapple, strawberry, and many more.",
  },
  {
    question: "Is Fanta glutenp-free?",
    answer: "Yes, Fanta is gluten-free.",
  },
  {
    question: "How many calories are in a can of Fanta?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
];
const FAQ = () => {
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Question
      </h1>
      {fqa.map((item, index) => (
        <div
          key={index}
          className="mb-4 py-4 border-b border-gray-300"
          onClick={() => handleClick(index)}
        >
          <div className="flex justify-between items-center cursor-pointer py-4">
            <h3>{item.question}</h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
