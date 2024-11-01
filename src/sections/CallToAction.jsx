import CTASection from '../assets/CTASection.png'
import Image from 'next/image';
export const CallToAction = () => {
  return <section className="mt-8 relative md:mx-2 lg:4">
    <div className="border pb-[120px] z-10 rounded-xl border-white/15  mb-[69px]">
    <div className="container">
      <h1 className="md:w-[400px] md:mx-auto md:tracking-wider text-5xl lg:leading-snug lg:font-bold text-center leading-[45px] mb-5 mt-[49px] lg:pt-[100px]">
        AI-driven SEO for everyone
      </h1>
      <div className="md:flex md:w-[403px] lg:mt-5 relative flex-row items-baseline mx-auto">
      <div className="w-[272px] md:w-full h-[49px] mx-auto">
        <input type="email" placeholder="Your email" className="bg-transparent border w-full h-full rounded-lg px-2 border-white/15 mx-auto outline-none" />
        </div>
      <div className="w-[272px] md:absolute md:text-base inset-0 left-[266px] md:font-medium -top-[11px] md:w-1/3 h-[46px] border border-white/15 mt-3 bg-white text-black text-center font-medium text-xl content-center rounded-lg mx-auto">
      <button>join waitlist</button>
      </div>
      </div>

      <div  className="mt-[33px] lg:pb-[50px] text-white/70 mx-auto w-[316px]">No creditcard required. 7 days free trial</div>
    </div>
</div>
<Image src={CTASection} alt='' className='absolute -z-10 inset-0 w-full  h-full rounded-xl'></Image>

  </section>;
};
