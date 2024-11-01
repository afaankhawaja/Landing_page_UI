
"use client"
import Button from "../components/Button";
import Image from "next/image";
import AppViewL from '../assets/AppViewL.png'

import app from '../assets/App.png'

export const Hero = () => {
  return (
    <section className="md:h-[720px] lg:h-[1100px] md:overflow-hidden">
      <div className="container ">
        <div className="flex flex-col justify-center items-center ">
          <p className="h-[42px] mt-[90px] w-[291px] flex justify-center items-center rounded-2xl border  border-white/15">
            <span className="tracking-tighter rounded-3xl px-[5px] py-[2px] mr-1 text-xs font-bold text-center text-black bg-[#9855ff]">
              NEW
            </span>{" "}
            Latest integration just arrived
          </p>
          
          <h1 className="mt-3 text-5xl md:w-[586px] md:text-6xl md:mx-auto pt-4  font-medium text-center ">
            Boost your rankings with AI.
          </h1>

          <p className="mt-4 text-center md:w-[586px] md:mx-auto ">
            Elevate your site’s visibility effortlessly with AI, where smart
            technology meets user-friendly SEO tools.
          </p>
          <span className="my-6 pb-4">
            <Button className='font-medium'>Start for free</Button>
          </span>
          
          <div className="mt-[30px] md:mt-[25px]">
          <div className="">
            
            <Image
            
            src={app}
            alt="appview"
            className="md:w-[666px] w-[354px] lg:w-[1120px] md:h-[494px] lg:h-[600px] "/>

            {/* <img src={appView} alt="" /> */}
            
          </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};
