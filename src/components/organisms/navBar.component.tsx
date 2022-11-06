import React, {ChangeEvent, FC, useCallback, useContext, useState} from 'react';
import {ImageComponent} from '../atoms/image.component';
import {PrimaryInput} from '../atoms/input.component';
import {BiSearchAlt} from 'react-icons/all';
import {MainNavGuest, MainNavUser} from '../atoms/navigation.component';
import {UserCtx} from '../../context/UserContext.component';
import logo from '../../assets/images/logo.png';
import Link from 'next/link';
import {isDesktop, isTablet} from 'react-device-detect';
import {Drawer} from '../molecules/drawer.component'

const NavBar:FC= function(){

    const [state, setState] = useState<string>('');

    const handleSearch: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        const target = e.target;
        const value = target.value;
        setState(value);
    };

    const context = useContext(UserCtx);

    const appBarCallBack =useCallback( ()=>{

        return (isDesktop ?
                <>
                    <Link href={'/'}>
                        <ImageComponent image={logo} width={null} height={80}/>
                    </Link>
                    <div className={'search-bar'}>
                        <PrimaryInput
                            value={state}
                            name={'search-bar'}
                            type={'text'}
                            errorText={null}
                            hasError={false}
                            hasIcon={true}
                            icon={<BiSearchAlt size={25}/>}
                            hasLabel={false}
                            labelText={null}
                            handleChange={handleSearch}
                            placeHolder={'Search. . .'}
                        />
                    </div>
                    <>{!context?.isLoggedIn ? <MainNavGuest/> : <MainNavUser/>}</>
                </>
                : isTablet ?
                    <>
                        <Link href={'/'}>
                            <ImageComponent image={logo} width={null} height={50}/>
                        </Link>
                        <div className={'search-bar'}>
                            <PrimaryInput
                                value={state}
                                name={'search-bar'}
                                type={'text'}
                                errorText={null}
                                hasError={false}
                                hasIcon={true}
                                icon={<BiSearchAlt size={25}/>}
                                hasLabel={false}
                                labelText={null}
                                handleChange={handleSearch}
                                placeHolder={'Search. . .'}
                            />
                        </div>
                        <Drawer/>
                    </> :
                    <>
                        <Link href={'/'}>
                            <ImageComponent image={logo} width={250} height={null}/>
                        </Link>
                        <Drawer/>
                    </>
        )
    },[isDesktop, isTablet])

    return  <div className={'app-bar-wrapper'}>{appBarCallBack()}</div>;
};

export default NavBar
