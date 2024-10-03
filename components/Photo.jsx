"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import profilePhoto from "../public/assets/photo.webp";
const Photo = () => {
  return (
    <div className=" w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeInOut" },
          }}
          className=" w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten"
        >
          <Image
            src={profilePhoto}
            priority
            quality={100}
            fill
            alt="profilephoto"
            className=" object-contain rounded-full"
          ></Image>
        </motion.div>

        {/* Animation Circle */}
      </motion.div>
    </div>
  );
};

export default Photo;
