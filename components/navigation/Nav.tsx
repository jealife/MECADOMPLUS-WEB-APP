'use client'
import React from 'react'
import { Navigation } from './Navigation'
import './nav.css'
import logo from '../../assets/images/Logotype_Mecadom.png'
import Link from 'next/link'
import Image from 'next/image'


const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Cards', href: '/cards' },
    { name: 'Admin', href: '/admin' },
]
interface NavProps {
    // définissez les propriétés de votre composant ici
}

export default class Nav extends React.Component<NavProps> {
    constructor(props: NavProps) {
        super(props);
        this.state = { clicked: false };
        this.menu = this.menu.bind(this);
    }
    menu() { 
        this.setState({ clicked: !this.state.clicked }); 
    }
    render(): React.ReactNode {
        
        return (
            <nav className="flex items-center justify-center p-4 gap-2">
                <Link href="/" className="logo">
                <Image src={logo} 
                        alt="Logo Mecadom" />
                </Link>
    
    
                <div className="menu-button_menu" onClick={()=>menu()}>
                    {/* <IonIcon name="menu-outline"></IonIcon> */}
                </div>
    
                <div className="menu">
                    <div className="links-menu flex gap-4">
                        <Navigation navLinks={navLinks} />
                    </div>
    
                    <div className="nav-btn">
                        <Link href="./pages/register/sgnin.html" className="login">Se connecter</Link>
                        <Link href="./pages/profile/profile.html" className="register hidden">Profile</Link>
                    </div>
                </div>
            </nav>
        )
    }
}