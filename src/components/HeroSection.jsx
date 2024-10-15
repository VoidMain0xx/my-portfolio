"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";





function HeroSection() {
 
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 , scale: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 texQt-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Hello, I am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Subodh",
                1500,
                "MERN Stack Developer",
                1500,
                "Freelancer",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#6f7a82] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            suscipit dolores ab quia, quod expedita distinctio nesciunt eaque,
            eum natus rem adipisci, maiores laborum. Est quam incidunt dolorum
            voluptatum cumque!
          </p>
          <div>
            <button className="px-6 py-2 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-300 hover:bg-slate-200 text-white">
              Hire me
            </button>
         
            <a href="/Resume/Resume.pdf" download="SubodhResume.pdf">
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-300 hover:bg-slate-800 text-white mt-3" >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-1 py-1">
                Download Resume
              </span>
            </button>
            </a>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
          initial={{ opacity: 0 , scale: 0.3}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }} className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/download.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
