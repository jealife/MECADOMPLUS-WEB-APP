'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './nav.css'
export function Navigation({ navLinks }:any) {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link:any) => {
                const isActive = pathname === link.href

                return (

                    <Link
                        className={isActive ? 'active' : ''}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}

                    </Link>
                )
            })}
        </>
    )
}