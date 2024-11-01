import {Header}  from "@/sections/Header";
import {Hero} from '@/sections/Hero'
import { LogoTicker } from "@/sections/LogoTicker";
import {Bento} from '../sections/Bento'
import { Features } from "@/sections/Features";
import {Clients} from '../sections/Clients'
import {Pricing} from '../sections/Pricing'
import {CallToAction} from '../sections/CallToAction'
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <LogoTicker></LogoTicker>
    <Bento></Bento>
    <Features/>
    <Clients/>
    <Pricing/>
    <CallToAction></CallToAction>
    <Footer></Footer>
    </>
  );
}
