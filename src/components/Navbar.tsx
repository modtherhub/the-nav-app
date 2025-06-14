import logo from '../assets/logo.jpeg'
import DesktopMenu from './DesktopMenu'
import MobMenu from './MobMenu'

const Navbar = () => {
  return (
    <header className="h-14 top-0 bg-[#FFFDF6]">
        <nav className="px-6 flex justify-between items-center h-full mx-auto">
            
            {/* Logo section */}
            <div className=" flex  items-center gap-x-3">
                <img src={logo} alt="Elite-Care Logo" className="w-8 h-8"/>
                <h3 className="text-lg font-semibold">Elite-Care</h3>
            </div>

          {/* Desktop Menu */}
          <DesktopMenu/>
           

          {/* Actions and Mobile Menu */}
          <MobMenu/>

          


        </nav>
    </header>
  )
}

export default Navbar
