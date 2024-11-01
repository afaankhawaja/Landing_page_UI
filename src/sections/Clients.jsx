import React from 'react'
import Image from 'next/image'
import avatar5 from '../assets/avatar5.png'
import Ellipse7 from '../assets/Ellipse7.png'
import line3 from '../assets/Line3.png'
import line1 from '../assets/Line1.png'


export const Clients = () => {
  return (
    <section>
      <div className='container'>
        <div className='mt-[50px] mb-[14px] flex flex-col justify-center items-center'>
          <h1 className='text-[26px] md:text-4xl font-medium mb-[10px] text-center leading-[65px]'>Our Clients</h1>
          <p className='text-[18px] md:text-lg leading-[31px] text-center md:w-[430px]'>Hear firsthand how our solutions have
            boosted online success for users like you.</p>
        </div>
        <div className="md:flex flex-row md:justify-center md:items-center md:relative ">
        <div className='flex relative md:static md:right-4 justify-center items-center pb-[43px] pt-[20px]'>
        <div className=''>
        <Image
        className='brightness-110'
        src={avatar5}
        alt=''
        height={172}
        width={171}  
        />
        </div>
        <div className='absolute z-10 top-12'>
          <Image
          src={Ellipse7}
          alt=''
          />
        </div>
        <div className=''>
          <Image src={line3}
          alt=''
          className=''
          />
        </div>
        <div className='absolute left-[79px] md:left-[93px] lg:left-[170px]'>
          <Image src={line3}
          alt=''
          className=''
          />
        </div>
        <div className='absolute md:abssolute top-[77px] md:scale-x-150 md:left-80'>
          <Image src={line1}
          alt=''
          className=''
          />
        </div>
        <div className='invisible md:visible absolute top-[77px] w-[252px] md:left-[18px]'>
          <Image src={line1}
          alt=''
          className=''
          />
        </div>
        <div className='absolute bottom-[102px] md:scale-x-150 md:left-80'>
          <Image src={line1}
          alt=''
          className=''
          />
        </div>
        <div className='invisible md:visible absolute bottom-[102px] w-[252px] md:left-[18px]'>
          <Image src={line1}
          alt=''
          className=''
          />
        </div>
        </div>
        <div className='md:w-1/2 md:pl-4'>
        <div className='text-center md:pt-12 lg:w-2/3 md:text-left text-[20px] md:w-full leading-[26px] font-medium'>
        ”This product has completely transformed how I manage my projects and deadlines”
        </div>
        <div className='text-center md:text-left font-medium mt-[20px]'>
        Talia Taylor
        </div>
        <p className='text-sm mt-[5px] text-center md:text-left text-white/70 mb-[69px]'>Digital Marketing Director @ Quantum</p>
        </div>
        </div>
      </div>
    </section>
  )
}

