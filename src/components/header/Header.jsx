import React, { useContext } from 'react'
import logo from '../../images/compar.png'
import './header.scss'
import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher'
import ThemeContext from '../../context/ThemeContext'
const Header = () => {
     const {theme} = useContext(ThemeContext)
     return (
          <>
               <header className="header">

                    <div className="container w-full px-5 md:w-4/5 md:m-auto ">
                         <div className="boxes w-full flex justify-between  items-center">
                              <div className="logo">
                                   <img className='w-full' src={logo} alt="" />
                              </div>
                              <div className="nav-bar hidden lg:block">
                                   <ul className='flex font-bold text-sm lg:text-lg items-center'>
                                        <li><NavLink to={"/"}>Home</NavLink>  </li>
                                        <li><NavLink to={"/about"}>About</NavLink>  </li>
                                        <li><NavLink to={"/contact"}>Contact</NavLink>  </li>
                                        <li><ThemeSwitcher/></li>

                                   </ul>
                              </div>
                              <div className="icon text-2xl block lg:hidden"><i class="fa-solid fa-bars"></i></div>
                         </div>
                    </div>
               </header>
          </>
     )
}

export default React.memo (Header)
