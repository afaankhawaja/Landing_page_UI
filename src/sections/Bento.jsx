
import Image from 'next/image'
import Visual from '../assets/Visual.png'
import app1 from '../assets/app1.png'
import app3 from '../assets/app3.png'
import Visual4 from '../assets/Visual4.png'
import Rectangle9 from '../assets/Rectangle9.png'


import Rectangle1 from '../assets/Rectangle1.png'


export const Bento = () => {
    return (
        <section>
            <div className='py-20'>
                <div className='container lg:px-[30px] md:px-[12px]'>
                    <div>
                        <p className='text-center text-[26px] leading-[38px] font-medium md:w-[553px] md:mx-auto'>
                            Harness the power of AI,
                            making search engine optimization intuitive and effective for all skill levels.
                        </p>
                        <div className='md:flex md:gap-1 md:overflow-hidden'>
                        <div className='h-[400px] border-white/15 border md:w-1/3 rounded-lg mt-8 '>
                            <Image
                                src={Visual}
                                alt=''
                                className='content-center mx-auto pt-[29px]'
                                width={275}
                                height={206}
                            />
                            <div className='flex flex-col pl-7 pt-[36px] pb-[46px]'>
                                <h1 className='pb-[14px]'>
                                    SEO goal setting
                                </h1>
                                <p>Helps you set and achieve SEO goals with guided assistance.</p>
                            </div>
                        </div>
                        <div className='relative h-[400px] md:top-4 rounded-lg mt-8 md:w-2/3'>
                            <div className=''>
                            <Image
                                src={app1}
                                alt=''
                                className='content-center brightness-80 mx-auto object-cover pt-[73px] lg:pt-[46px] lg:w-auto lg:px-[55px] pb-[20px] md:pt-[20px] pl-[27px] rounded-lg md:scale-x-150'
                                width={333}
                                height={454}

                            />
                            <Image
                                src={Rectangle9}
                                alt=''
                                className='content-center  w-full h-full rounded-lg z-10  mx-auto absolute inset-0'
                                width={333}
                                height={454}
                            />
    
                            <div className='z-20 absolute bottom-9 left-4'>
                                <h5 className='text-lg font-normal tracking-tighter dark:text-white'>
                                user-friendly dashboard
                                </h5>
                                <p className='py-3 text-white/70'>
                                Perform complex SEO audits and optimizations with a single click.
                                </p>
                            </div>
                            </div>
                        </div>

                        </div>
                        <div className='md:flex md:gap-1 md:h-[400px] md:overflow-hidden'>
                        <div className='relative h-[400px] md:top-4 rounded-lg mt-8 md:w-2/3'>
                            <div className=''>
                            <Image
                                src={app3}
                                alt=''
                                className='content-center brightness-80 mx-auto object-cover pt-[73px] lg:pt-[46px] lg:w-auto lg:px-[55px] pb-[20px] md:pt-[20px] pl-[27px] rounded-lg md:scale-x-150'
                                width={333}
                                height={454}

                            />
                            <Image
                                src={Rectangle1}
                                alt=''
                                className='content-center  w-full h-full rounded-lg z-10  mx-auto absolute inset-0'
                                width={333}
                                height={454}
                            />
    
                            <div className='z-20 absolute bottom-12 left-4 md:bottom-20 md:left-[76px]'>
                                <h5 className='text-lg font-normal tracking-tighter dark:text-white'>
                                    Visual Reports
                                </h5>
                                <p className='py-3 text-white/70'>
                                Visuals insights into your sites perfromance
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className='h-[400px] relative md:top-4 border-white/15 border rounded-lg mt-2 md:w-1/3'>
                            <Image
                                src={Visual4}
                                alt=''
                                className='content-center mx-auto pt-[29px]'
                                width={234}
                                height={243}
                            />
                            <div className='flex flex-col pl-7 md:pr-4 pt-[20px] md:pt-[15px] pb-[46px]'>
                                <h1 className='pb-[14px]'>
                                    SEO goal setting
                                </h1>
                                <p className='text-white/70'>Automatic suggestions and the best keywords to target. </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

