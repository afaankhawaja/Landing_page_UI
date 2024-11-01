import LogoSvg from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import Button from '../components/Button'
export const Header = () => {
  return (
    <header className="border-b md:border-none border-white/15">
      <div className="container lg:px-48">
        <div className="flex items-center py-[3px] justify-between">
        <div className="w-10 h-10 justify-center items-center inline-flex border rounded-lg border-white/15">
          <div className="w-8 h-8">
            <LogoSvg />
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm border border-white/15 rounded-2xl py-2 px-10 max-w-2xl max-auto">
            <a className="text-white/70 hover:text-white transition" href="">Features</a>
            <a className="text-white/70 hover:text-white transition" href="">Developers</a>
            <a className="text-white/70 hover:text-white transition" href="">Company</a>
            <a className="text-white/70 hover:text-white transition" href="">Pricing</a>
            <a className="text-white/70 hover:text-white transition" href="">Change Log</a>
          </nav>
        <div className="flex gap-4 items-center py-[13px]">
          <Button className=''>
            join waitlist
          </Button>

          <span className="md:hidden">
            <MenuIcon />
          </span>
        </div>
      </div>
      </div>
    </header>
  );
};
