import {navItems} from '../contant/index'

const DesktopMenu = () => {
  return (
  <div className="lg:flex hidden items-center justify-between">
  <ul className="flex gap-4 items-center">
    {navItems.map((item, index) => (
      <li key={index} className="py-2 px-3">
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
  </ul>

  <div className="flex items-center space-x-6">
    <a href="#" className="py-2 px-3 border rounded-md">
      Log In
    </a>
    <a href="#" className="py-2 px-3 rounded-md">
      Sign Up
    </a>
  </div>
</div>
   
    
  )
}

export default DesktopMenu
