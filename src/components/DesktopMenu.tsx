import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from 'motion/react';


const DesktopMenu = ({ menu }) => {
    const hasSubMenu = menu?.subMenu?.length;
    const [isHover, setIsHover] = useState(false);

    const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };
    return (

     <li>
      <motion.div
        className="group/link overflow-hidden"
        onHoverStart={toggleHoverMenu}
        onHoverEnd={toggleHoverMenu}
      >
        {/*
        
          */}
          
          <span className="flex-center gap-1 hover:bg-[#EAE0D5] cursor-pointer px-3 py-1 rounded-xl">
            {hasSubMenu ? (
              <>
                {menu.name}
                <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
              </>
            ) : (
              <a href={menu.href} target="_blank" className="text-inherit no-underline">
                {menu.name}
              </a>
            )}
          </span>

        {hasSubMenu && (
          <motion.div
            className="sub-menu"
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            
            <div
              className={`grid gap-7 ${
                menu.gridCols === 3
                  ? "grid-cols-3"
                  : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              
              
                {menu.subMenu.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-gray-900">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <a href={submenu.href} target="_blank">
                  <div className="flex-center gap-x-4 group/menubox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-black group-hover/menubox:text-gray-100 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="text-sm font-bold">{submenu.name}</h6>
                      <p className="text-xs text-gray-900">{submenu.desc}</p>
                    </div>
                  </div>
                  </a>
                </div>
              ))}
              
            </div>
            
          </motion.div>
        )}
      </motion.div>
    </li>
    
  )
}

export default DesktopMenu