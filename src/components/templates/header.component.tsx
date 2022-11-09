import React, { FC, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { isDesktop, isTablet } from 'react-device-detect';
import { useAppDispatch } from '../../redux/store/store';
import { productCategoryThunk } from '../../redux/thunk/productThunk';

const NavBar = dynamic(() => import('../organisms/navBar.component'), {
    ssr: false,
});

const TopBar = dynamic(() => import('../organisms/topBar.component'), {
    ssr: false,
});

const Header: FC = function () {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(productCategoryThunk());
    }, []);

    return (
        <header>
            {(isDesktop || isTablet) && <TopBar />}
            <NavBar />
        </header>
    );
};

export default Header;
