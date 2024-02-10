import React from "react";
// import Image from "../assets/avatar.svg";
import Image from '../assets/site.jpg'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-[105vh] lg:min-h-[110vh] flex justify-center items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* TEXT */}
          <div className="flex-1 text-center font-secondary lg:text-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center items-center text-[100px] font-bold leading-[0] lg:text-[180px] text-white"
            >
              M<span className="font-bold text-purple-800">AGM.</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-gray-500 opacity-50 mr-4">An experienced</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Tech addicted",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-purple-900 opacity-50"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w mx-auto lg:mx-0 text-white"
            >
              Apa kabar kamu? Apa kabar saya? Apa kabar semuanya?
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="text-purple-500 seticon">Contact me</button>
              <a href="#" className="text-purple-500 seticon">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center items-center text-[20px] text-white gap-x-6 mx-auto lg:mx-0"
            >
              <a href="#" className="seticon">
                <FaGithub />
              </a>
              <a href="#" className="seticon">
                <FaInstagram />
              </a>
              <a href="#" className="seticon">
                <FaLinkedin  />
              </a>
            </motion.div>
          </div>
          {/* IMAGE */}
          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;