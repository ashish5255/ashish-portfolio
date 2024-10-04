"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const expertise = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I make interactive and engaging pages using primarily React. I turn the design into functionality.",
    href: "",
  },
  {
    num: "02",
    title: "SEO",
    description:
      "SEO is really important these days. I have a knack for optimizing SEO. Thanks NextJs",
    href: "",
  },

  {
    num: "03",
    title: "Scripting",
    description:
      "Scripts make it easier to automate boring stuffs. We don't want to do repetitive works daily, do we?",
    href: "",
  },
];

import { motion, MotionConfig } from "framer-motion";

const Expertise = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 lg:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
          className=" grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {expertise.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="text-5xl font-extrabold text-transparent text-outline  group-hover:text-outline-hover transition-all duration-500">
                  {item.num}
                </div>
                <Link
                  href={item.href}
                  className=" w-[70px] h-[70px]  rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45 "
                >
                  <BsArrowDownRight className=" text-primary text-3xl" />
                </Link>
                {/* Title */}
                <h2 className=" text-[42px]  font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {item.title}
                </h2>

                {/* Description */}

                <p className=" text-white/60 ">{item.description}</p>

                {/* Border*/}
                <div className="border-b border-white/30 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
