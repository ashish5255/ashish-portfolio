import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Reverse index calculation

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* 
The plan here is to render 6 motion divs, representing staircase step
Each div is going to have same animation and defined by the stairsAnimation.
Delay will be calculated dynamically based on reversed index
Overall a staggered effect will be created with decreasing delay

 */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className=" h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
