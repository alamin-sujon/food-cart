import { Link, NavLink, useLocation } from "react-router-dom";
import {  delay, motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const navItems = [
    {
        id: 1, 
        path: '/',
        title: 'Home',
        delay: 0.3
    },
    {
        id: 2, 
        path: '/menu',
        title: 'Menu',
        delay: 0.5
    },
    {
        id: 3, 
        path: '/order',
        title: 'Order',
        delay: 0.7
    },
    {
        id: 4, 
        path: '/contact',
        title: 'Contact Us',
        delay: 0.9
    },
]


const Navbar = () => {
    const location = useLocation();
    
    return (
        <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               {
            navItems.map(item => (
                <motion.li
                // variants={slideUp(item.delay)}
                initial={{opacity: 0, y: '-100%'}}
                animate={{opacity: 1, y: 0}}
                className={`${location.pathname === item.path && 'underline decoration-slate-500 underline-offset-4'}`}
                
                transition={{duration: 0.4, delay: item.delay}}
                key={item.id}><NavLink to={item.path}>{item.title}</NavLink></motion.li>
            ))
         }
            </ul>
          </div>
         <motion.div
          initial={{opacity: 0, y: '-100%'}}
          animate={{opacity: 1 , y: 0}}
          transition={{ duration: 0.4, delay: 0.6}}
        >
         <Link
          href="/"
         
          className="btn btn-ghost font-semibold text-3xl ">Food Card</Link>
         </motion.div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5">
         {
            navItems.map(item => (
                <motion.li
                // variants={slideUp(item.delay)}
                initial={{opacity: 0, y: '-100%'}}
                animate={{opacity: 1, y: 0}}
                className={`${location.pathname === item.path && 'underline decoration-orange-500 underline-offset-8 decoration-4 text-orange-500 text-lg'}`}
                transition={{duration: 0.4, delay: item.delay}}
                key={item.id}><NavLink to={item.path}>{item.title}</NavLink></motion.li>
            ))
         }
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <motion.span className="btn btn-ghost btn-circle" initial={{opacity: 0, y: '-100%'}} animate={{opacity: 1, y: 0}}  transition={{duration: 0.6, delay: 1.1}}>
            <FiSearch className="text-2xl" />
            </motion.span>
          <motion.span className="relative btn btn-ghost btn-circle" initial={{opacity: 0, y: '-100%'}} animate={{opacity: 1, y: 0}}  transition={{duration: 0.6, delay: 1}}>
            <FaShoppingCart className="text-2xl" />
            <span className="h-3 rounded-full w-3 bg-orange-500 absolute top-0 -right-1"></span>
            </motion.span>
        
          < motion.button
          className="btn bg-orange-600 text-white hover:bg-orange-800"
          initial={{opacity: 0, y: '-100%'}} animate={{opacity: 1, y: 0}}  transition={{duration: 0.6, delay: 1.2}}
          >Log In</motion.button>
        </div>
      </div>
    );
};

export default Navbar;