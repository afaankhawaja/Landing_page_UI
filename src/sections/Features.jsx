"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    description: "Automatic suggestions and the best keywords to target.",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    description: "Automatic suggestions and the best keywords to target.",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="">
      <div className="bg-gradient-to-r from-[#190D2E] to-[#020103] pb-[36px]">
        <div className="pt-[76px]">
          <h1 className="ml-[50px] text-[26px] md:text-5xl md:w-[305px] md:tracking-normal md:leading-snug font-medium -tracking-[1.5px] leading-[65px]">
            Elevate your SEO efforts.
          </h1>
        </div>
        
        <div className="ml-[50px] mr-[20px] md:flex flex-wrap md:gap-x-[60px] md:gap-y-[40px] md:mr-0">
        {tabs.map((tab) => (
          
          <div className="my-[40px] md:w-[305px] lg:w-[322px]" key={tab.title}>
            <div className="flex flex-row gap-1 lg:gap-2 items-center py-[10px]">
              <DotLottiePlayer className="w-5 h-5" src={tab.icon} autoplay />
              <span className="font-medium leading-loose">{tab.title}</span>
            </div>
            <p className="text-sm text-white/70">{tab.description}</p>
          </div>
    
        ))}
        </div>
        </div>
    
    </section>
  );
};
