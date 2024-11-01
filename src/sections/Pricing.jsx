import React from 'react'
import Image from 'next/image'
import icon from '../assets/Icons.png'
import Button from '@/components/Button'
import card1Top from '../assets/card1top.png'
import card2Top from '../assets/card2top.png'
import card2Top2 from '../assets/card2top2.png'


export const Pricing = () => {
    return (
        <section className='container'>
            <div className='inline-block mt-4 md:block md:w-[430px] md:mx-auto'>
                <div className='text-[26px] text-center font-medium mx-2 mb-[10px] md:text-4xl md:leading-snug'>
                    Pricing
                </div>
                <p className='text-center text-lg md:px-2'>Choose the right plan to meet your SEO needs and start optimizing today.</p>

            </div>
            <div className='mt-[14px] mb-[66px] text-white/70 text-center'>Billed yearly</div>

<div className='md:flex flex-row gap-1 lg:gap-2 md:items-baseline md:h-[500px] lg:'>
            {/* card 1 */}

            <div className='w-[253px] h-[500px] md:w-1/3 relative mx-auto border border-white/15 rounded-xl'>
                <div className='pl-5 pt-5 '>
                    <h1 className='text-[24px] font-medium leading-[31px]'>Pricing</h1>
                    <p className='text-white/70 mt-2'>$29/mo</p>
                </div>
                <div className='border mx-auto mt-2 w-[230px] border-white/15'></div>
                <div className='flex flex-col ml-5 mb-36 mt-4 text-sm'>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Keyword optimisation</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Automated meta tags</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />SEO monitoring</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Monthly reports</div>

                </div>
                <div className='border mx-auto w-[230px] border-white text-center rounded-xl py-2 mb-5 bg-[#3D3D3D] shadow-[0px_1px_6px_2px_#ffffff_inset]'>join waitlist
                </div>
           
                <Image src={card1Top} alt='' className='absolute inset-0 h-full w-full'/>
            
            </div>

            {/* card 2 */}
            <div className='w-[253px] h-[500px] md:w-1/3  mt-[10px] relative mx-auto border border-white/15 rounded-xl md:shadow-[5px_0px_48px_#4a208a]'>
                <div className='pl-5 pt-5 '>
                    <h1 className='text-[24px] font-medium leading-[31px]'>Pro</h1>
                    <p className='text-white/70 mt-2'>$79/mo</p>
                </div>
                <div className='border mx-auto mt-2 w-[230px] border-white/15'></div>
                <div className='flex flex-col ml-5 mb-14 mt-4 text-sm'>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Keyword optimisation</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Automated meta tags</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />SEO monitoring</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Monthly reports</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Keyword optimisation</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Automated meta tags</div>

                </div>
                <div className='border mx-auto w-[230px] border-white text-center rounded-xl py-2 mb-4 bg-[#3D3D3D] shadow-[0px_0px_8px_#ffffff_inset]'>join waitlist
                </div>
                <Image src={card2Top} alt='' className='absolute -z-10 inset-0 w-full h-full'></Image>
                <Image src={card2Top2} alt='' className='absolute -z-20 inset-0 w-full h-full bg-[#8C45FF] rounded-xl'></Image>

            </div>

            {/* card 3 */}
            <div className='w-[253px] h-[500px] md:w-1/3  my-[10px] mx-auto border border-white/15 rounded-xl'>
                <div className='pl-5 pt-5 '>
                    <h1 className='text-[24px] font-medium leading-[31px]'>Business</h1>
                    <p className='text-white/70 mt-2'>$149/mo</p>
                </div>
                <div className='border mx-auto mt-2 w-[230px] border-white/15'></div>
                <div className='flex flex-col ml-5 mb-14 mt-4 text-sm'>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Keyword optimisation</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Automated meta tags</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />SEO monitoring</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Monthly reports</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Keyword optimisation</div>
                    <div className='flex gap-1 py-3'><Image src={icon} alt='' />Automated meta tags</div>

                </div>
                <div className='border mx-auto w-[230px] border-white text-center rounded-xl py-2 mb-5 bg-[#3D3D3D] shadow-[0px_1px_6px_2px_#ffffff_inset]'>join waitlist
                </div>
            </div>
            </div>
        </section>
    )
}

//bg-[#3D3D3D] shadow-[0px_1px_6px_2px_#ffffff_inset]
{/* <div className='border mx-auto w-[230px] border-white text-center rounded-xl py-2 mb-5 '>join waitlist
            </div> */}