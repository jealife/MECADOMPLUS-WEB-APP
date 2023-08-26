'use client'
import React from 'react'
import { Navigation } from './Navigation'
import './nav.css'
import logo from '../../assets/images/Logotype_Mecadom.png'
import Link from 'next/link'
import { IonIcon } from '@ionic/react';
import Image from 'next/image'


const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Cards', href: '/cards' },
    { name: 'Admin', href: '/admin' },
]

export default function Nav() {
    const state = { clicked: false };
    const menu = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    return (
        <nav className="flex items-center justify-center p-4 gap-2">
            <Link href="#" className="logo">
            <Image src={logo} 
                    alt="Logo Mecadom" />
            </Link>


            <div className="menu-button_menu" onClick={() => menu()}>
                <IonIcon name="menu-outline"></IonIcon>
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