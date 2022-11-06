import React from 'react';
import {
    IoBagCheckOutline,
    IoLogInOutline,
    HiOutlineUserPlus,
    BsCart2,
    IoLogOutOutline,
    VscAccount,
} from 'react-icons/all';

export const helper: {
    homeNavGuest: Array<{
        link: string;
        text: string;
        hasIcon: boolean;
        icon: any;
    }>;
    homeNavUser: Array<{
        link: string;
        text: string;
        hasIcon: boolean;
        icon: any;
    }>;
    footerNav: Array<{
        link: string;
        text: string;
    }>
} = {
    homeNavGuest: [
        {
            link: '/shop',
            text: 'Shop',
            hasIcon: false,
            icon: null,
        },
        {
            link: '/checkout',
            text: 'Checkout',
            hasIcon: true,
            icon: <IoBagCheckOutline size={25} />,
        },
        {
            link: '/sing-in',
            text: 'Sing In',
            hasIcon: true,
            icon: <IoLogInOutline size={25} />,
        },
        {
            link: '/register',
            text: 'Register',
            hasIcon: true,
            icon: <HiOutlineUserPlus size={25} />,
        },
        {
            link: '/cart',
            text: 'cart',
            hasIcon: true,
            icon: <BsCart2 size={25} />,
        },
    ],
    homeNavUser: [
        {
            link: '/shop',
            text: 'Shop',
            hasIcon: false,
            icon: null,
        },
        {
            link: '/checkout',
            text: 'Checkout',
            hasIcon: true,
            icon: <IoBagCheckOutline size={25} />,
        },
        {
            link: '/logout',
            text: 'Logout',
            hasIcon: true,
            icon: <IoLogOutOutline size={25} />,
        },
        {
            link: '/account',
            text: 'My Account',
            hasIcon: true,
            icon: <VscAccount size={25} />,
        },
        {
            link: '/cart',
            text: 'cart',
            hasIcon: true,
            icon: <BsCart2 size={25} />,
        },
    ],
    footerNav:[
        {
            link:'/contact',
            text:'Contact Us',
        },
        {
            link:'/terms-and-conditions',
            text:'Terms and Conditions'
        },
        {
            link:'/return-refund-policy',
            text:'Return and Refund Policy'
        },
        {
            link:'/privacy-policy',
            text:'Privacy Policy'
        }
    ]
};
