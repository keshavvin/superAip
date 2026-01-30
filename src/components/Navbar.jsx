import {useState} from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";


function Navbar() {
    const [showMenu , setshowMenu] = useState(false); 
    const navClass = ({ isActive }) => isActive ? "!text-red-500 font-bold -bottom-1" : "text-white/80 ";
  return (
    <> 
          <nav className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-8 shadow-lg">
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <a href="#">
                  <img src="https://superaip.com/img/super_aip_logo.png" alt={'footer logo image'} style={{width:'20%'}} /> 
                </a> 
                </div> 
                <div className='hidden md:flex space-x-10'> 
                     <NavLink to="/" className={navClass}>
                         <span className='text-white'>Home</span>
                         <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-50 transition-all duration-300 group-hover:w-full"></span></NavLink>
                    <NavLink to="/about" className={navClass } > 
                          <span className={navClass } > About Us</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-50 transition-all duration-300 group-hover:w-full'></span>
                     </NavLink>
                    
                    <NavLink to="/EnterprisesSolutions" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-500" } > 
                        <span className='text-white'>Enterprises Solutions</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-50 transition-all duration-300 group-hover:w-full'></span>
                    </NavLink> 
                    <NavLink to="/about22" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-500" } > 
                        <span className='text-white'>Education solutions</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-50 transition-all duration-300 group-hover:w-full'></span>
                    </NavLink> 
                    <a href='#Industries' className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Industries</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-50 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#Partners' className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Partners</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-50 transition-all duration-300 group-hover:w-full'></span>
                    </a> 

                     <a href='#' className='head_btn  hover:bg-purple-600 transition'> 
                        <button className="text-white-900 group-hover:text-white">Contact</button> 
                    </a>
                  
                </div>
                {/* mobile button */} 
                 
               
                {/* mobile button */}
                    <div className="md:hidden text-white">
                    {showMenu ? (<FaXmark  onClick={() => setshowMenu(!showMenu)} className="text-2xl cursor-pointer"  /> ) : (
                        <FaBars onClick={() => setshowMenu(true)}className="text-2xl cursor-pointer"/>
                    )}
                    </div>
 
            </div>
            {/*mobile menues */}
            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                        <a href='#home' onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-50 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='#About-Us' onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition decoration-no duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>About Us</span>
                           </a>
                    <a href='#Enterprises-Solutions' onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Enterprises Solutions</span>
                         </a>
                    <a href='#Education-solutions'  onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Education solutions</span>
                          </a>
                    <a href='#Industries'  onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Industries</span>
                         </a>
                    <a href='#Partners'  onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition duration-300 hover:text-pink-800 group'>
                        <span className='text-white'>Partners</span>
                        </a> 

                     <a href='#'  onClick={() => setshowMenu(!showMenu) } className='relative text-white/80 transition duration-300 hover:text-pink-800 group'> 
                        <button className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">Contact</button> 
                    </a>
                    </div>
                )
            }
        </nav>
    </>
  )
}

export default Navbar