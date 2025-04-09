import React from 'react'
import Logo from '../icons/Logo'
import Link from 'next/link'
import { AlignJustify } from 'lucide-react'

const Header = () => {
    return (
        <header className="w-[90vw] relative z-50 mx-auto px-4 py-6 flex justify-center md:justify-between items-start">
            <div className="relative flex justify-between">
                <Logo />
            </div>
            <nav className="hidden md:flex space-x-8">
                <Link href="#" className="text-[#ababab] hover:text-white transition">
                    About us
                </Link>
                <Link href="#" className="text-[#ababab] hover:text-white transition">
                    Contact
                </Link>
            </nav>
            <div className='absolute top-6 right-4 md:hidden'>
                <AlignJustify />
            </div>
        </header>
    )
}

export default Header