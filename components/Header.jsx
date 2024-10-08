import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className=" py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className=" text-4xl font-semibold text-accent">
            Ashish<span className=" hover:text-accent">.</span>
          </h1>
        </Link>

        {/* Now Navigation Links Desktop*/}

        <div className="hidden lg:flex items-center gap-8">
          <Nav />

          <Button className=" text-primary">Hire Me</Button>
        </div>

        {/* Mobile Navigation */}

        <div className=" lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
