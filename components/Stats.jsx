"use client";

import CountUp from "react-countup";

const stats = [
  { num: 1, text: "Years of Experience" },
  { num: 5, text: "Projects Completed" },
  { num: 5, text: "Technologies Mastered" },
  { num: 100, text: "Git Commits" },
];

const Stats = () => {
  return (
    <section
      className=" pt-4 pb-12 lg:pt-0 lg:pb-0
    "
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className=" flex-1 flex gap-4 items-center justify-center lg:justify-start "
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className=" text-4xl font-extrabold"
                />
                <p
                  className={` ${
                    item.text.length < 15 ? " max-w-[100px]" : " max-w-[150px]"
                  } leading-snug text-white/80 `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
