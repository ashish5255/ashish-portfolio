import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className=" h-full">
      <div className="container mx-auto h-full">
        <div className=" flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text about me the highlight yo */}

          <div className=" text-center lg:text-left order-2 lg:order-none">
            <span>Front End Developer</span>
            <h1 className="h1 mb-6">
              Namaste! <br />{" "}
              <span className=" text-accent">I&#39;m Ashish</span>
            </h1>

            <p className=" max-w-[500px] mb-9 text-white/80">
              With the power bestowed upon me by tech, I love to turn designs
              into reality.
            </p>
            {/* Socials now */}

            <div className=" flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2"
              >
                <span>CV </span>
                <FiDownload className=" text-xl" />
              </Button>

              <div className=" mb-8 lg:mb-0">
                <Social
                  containerStyles=" flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                  
                   text-base hover:bg-accent hover:text-primary hover:transition-all duration-500
                    "
                />
              </div>
            </div>
          </div>

          {/* this photo is gonna look good yo */}
          <div>
            <Photo className=" order-1 lg:order-none mb-8 lg:mb-0  " />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
