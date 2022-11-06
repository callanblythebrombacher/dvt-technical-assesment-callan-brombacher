import React, {FC} from 'react';
import dynamic from 'next/dynamic'
import {isDesktop, isTablet} from 'react-device-detect'

const NavBar = dynamic(
    () => import('../organisms/navBar.component'),
    { ssr: false }
)

const TopBar = dynamic(
    () => import('../organisms/topBar.component'),
    { ssr: false }
)

const Header:FC = function (){
   return (
        <header>
            {(isDesktop || isTablet) && <TopBar />  }
            <NavBar/>
        </header>
    )
}

export default Header
