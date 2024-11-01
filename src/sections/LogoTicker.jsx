import acme from '../assets/logo-acme.png'
import apex from '../assets/logo-apex.png'
import celestial from '../assets/logo-celestial.png'
import echo from '../assets/logo-echo.png'
import pulse from '../assets/logo-pulse.png'
import quantum from '../assets/logo-quantum.png'
import Image from 'next/image'
// import outside from '../assets/'


export const LogoTicker = () => {
  return <section>
    <div className='py-10 md:px-6 '>
      <div className="container">

        <p className="flex justify-center text-white/70 text-sm">Trusted by the worlds most innovative teams</p>
        <div className='flex gap-4 flex-wrap pt-10'>
          {[echo, pulse,acme, apex, celestial, echo, pulse, quantum].map((logo) => (
            <div key={logo.src} className='border-white/15 border rounded-lg content-center justify-center lg:px-8 lg:w-[235px] lg:h-[98px] '>
              <Image
                src={logo}
                className='px-[5px] py-[16px] '
                alt=''
                width={155}
                height={34}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>;
};
