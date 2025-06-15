import logo from '../assets/logo.jpeg'
import { Menus } from '../contant'
import DesktopMenu from './DesktopMenu'
import MobMenu from './MobMenu'

const Navbar = () => {
  return (
    <header className="h-16 top-0 ">
        <nav className="px-6 flex justify-between items-center h-full mx-auto">
            
            {/* Logo section */}
            <div className="px-4 flex  items-center gap-x-6">
                <img src={logo} alt="Elite-Care Logo" className="w-12 h-12"/>
                <h3 className="text-lg font-semibold">Elite-Care</h3>
            </div>

          {/* Desktop Menu */}
          <ul className="gap-x-1 lg:flex hidden items-center text-sm">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
          ))}
          </ul>

          {/* Actions and Mobile Menu */}
          <div className="flex items-center gap-x-5">
         
            <div className="space-x-6 ">
                    <a href="#" className="bg-white px-3 py-1 text-sm  shadow-xl rounded-md hover:shadow-2xl hover:scale-110 transition duration-300">
                      Log In
                    </a>
                    <a href="#" className="bg-white px-3 py-1 text-sm shadow-xl rounded-md hover:shadow-2xl hover:scale-110 transition duration-300">
                        Sing Up
                    </a>
                </div>
         
          <div className="lg:hidden">
            <MobMenu/>
          </div>
        </div>

          


        </nav>
    </header>
  )
}

export default Navbar
