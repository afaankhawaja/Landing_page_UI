import Image from "next/image";
import logokit1 from '../assets/logokit1.png'
import x from '../assets/X.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
export const Footer = () => {
  const footerData1=['Product','Features','Integration','Updates','FAQ','Pricing']
  const footerData2=['Company','About','Blog','Careers','Manifesto','Press','contract']
  const footerData3=['Resources','Examples','Community','Guides','Docs','Press']
  const footerData4=['Legal','Privacy','Terms','Security']

  return  <footer className="bg-black text-gray-400 py-10 pl-11 lg:pr-[100px] md:pr-[28px]">
  <div className="max-w-7xl mx-auto md:gap-x-[180px] flex flex-col md:flex-row justify-between">
    {/* Logo and Social Icons */}
    <div className="flex md:flex-col justify-between content-start space-y-4 pr-4 mb-8 md:mb-0">
      {/* Logo */}
      <div className="items-center content-end">
        <Image src={logokit1} alt="" />
      </div>
      
      {/* Social Icons */}
      <div className="flex justify-center md:space-x-6 space-x-4">
        <Image src={x} className="w-5 h-7"/>
        <Image src={instagram} className="w-8 h-8"/>
        <Image src={youtube} className="w-8 h-8"/>

          </div>
    </div>

    {/* Links Section */}
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-y-[60px] -gap-x-[40px]">
      {/* Product */}
      <div>
        <h6 className="text-white font-semibold mb-4">Product</h6>
        <ul className="space-y-2 ">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Integration</li>
          <li className="hover:text-white cursor-pointer">Updates</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h6 className="text-white font-semibold mb-4">Company</h6>
        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Manifesto</li>
          <li className="hover:text-white cursor-pointer">Press</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h6 className="text-white font-semibold mb-4">Resources</h6>
        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">Examples</li>
          <li className="hover:text-white cursor-pointer">Community</li>
          <li className="hover:text-white cursor-pointer">Guides</li>
          <li className="hover:text-white cursor-pointer">Docs</li>
          <li className="hover:text-white cursor-pointer">Press</li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h6 className="text-white font-semibold mb-4">Legal</h6>
        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Terms</li>
          <li className="hover:text-white cursor-pointer">Security</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
}
//    <footer>
//     <div className="container md:pb-[65px] md:pt-[11px] ">
//       <div className=" my-[41px] px-[25px] lg:px-0 md:flex lg:gap-x-[483px]">
//         <div className="flex justify-between items-center md:flex-col">
//         <div>
//           <Image src={logokit1} alt="" className="lg:scale-110"></Image>
//         </div>
//         <div className="flex items-center gap-5 lg:scale-110">
//           <Image src={x} alt="" className="w-5 h-5 brightness-50"/>
//           <Image src={instagram} alt="" className="w-6 h-6 "/>
//           <Image src={youtube} alt="" className="w-6 h-6"/>
//         </div>
//         </div>
//         <div className="md:flex md:w-[430px] md:h-[302px]">
//         <div className="mt-8 md:mt-2 gap-x-[60px] gap-y-5 flex md:flex-col flex-wrap text-base font-semibold tracking-wider  text-white/70">
//         <div>
//         {
//           footerData1.map((title)=>(
//             <div className={`w-24 inline-block md:w-[67px] md:gap-x-[60px] ${title==='Product'?'text-white font-bold':''}`} key={title}>{title}</div>
//           ))
//         }
//         </div>
//         <div>
//         {
//           footerData2.map((title)=>(
//             <div className={`w-24 inline-block md:w-[67px] md:gap-x-[60px] ${title==='Company'?'text-white font-bold':''}`} key={title}>{title}</div>
//           ))
//         }
//         </div>
//         <div>
//         {
//           footerData3.map((title)=>(
//             <div className={`w-24 inline-block md:w-[67px] md:gap-x-[60px] ${title==='Resources'?'text-white font-bold':''}`} key={title}>{title}</div>
//           ))
//         }
//         </div>
//         <div>
//         {
//           footerData4.map((title)=>(
//             <div className={`w-24 inline-block md:w-[67px] md:gap-x-[60px] ${title==='Legal'?'text-white font-bold':''}`} key={title}>{title}</div>
//           ))
//         }
//         </div>
//         </div>
//         {/* <div className="mt-[60px] md:mt-2 mb-[41px] w-[302px] flex  flex-wrap text-base font-semibold text-white/70">
//         {
//           footerData2.map((title)=>(
//             <div className={`w-24 inline-block md:gap-x-[60px]  ${title==='Resources' || title==='Legal'?'text-white font-bold':''}`} key={title}>{title}</div>
//           ))
//         }
//         </div> */}
//         </div>
//       </div>
//     </div>
//   </footer>;
// };
