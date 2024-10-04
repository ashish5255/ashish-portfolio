"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Web Development",
    Description: "I make interactive and engaging pages using primarily React.",
    href: "",
  },
  {
    num: "02",
    title: "SEO",
    Description:
      "SEO is really important these days. I have a knack for optimizing SEO and where React falls short at that, NextJS is the way.",
    href: "",
  },

  {
    num: "03",
    title: "Scripting",
    Description:
      "Scripts make it easier to automate boring stuffs. We don't want to do repetitive works daily, do we?",
    href: "",
  },
];

import { motion, MotionConfig } from "framer-motion";

const Services = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 lg:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className=" grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div>{item.num}</div>
                <Link href={item.href}>
                  <BsArrowDownRight />
                </Link>
                {/* Title */}
                <h2>{item.title}</h2>

                {/* Description */}

                <p>{item.Description}</p>

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

export default Services;
