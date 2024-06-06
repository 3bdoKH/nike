import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'
import { useState } from 'react'
import './Nav.css'
function Nav() {
    const [menu, setMenu] = useState(false)
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="logo" width={130} height={29} className='m-0 w-[129px] h-[29px]' />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>
                <div className='max-lg:block hidden cursor-pointer' onClick={() => {
                    setMenu(true)
                }}>
                    <img src={hamburger} alt="" width={25} height={25} onClick={() => {
                        setMenu(true)
                    }} />
                </div>

                {menu &&
                    <div className="fixed z-20">
                        <ul className="model">
                            <div className="close" onClick={() => {
                                setMenu(false)
                            }}>X</div>
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} onClick={() => {
                                        setMenu(false)
                                    }} >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>}
            </nav>
        </header>
    )
}
export default Nav