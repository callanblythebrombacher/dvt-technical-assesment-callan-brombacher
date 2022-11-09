import React, { useContext, MouseEvent, useState, ChangeEvent } from 'react';
import { UserCtx } from '../../context/UserContext.component';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { helper } from '../../helpers/navigationHelper';
import { useRouter } from 'next/router';
import { GiHamburgerMenu, AiOutlineClose } from 'react-icons/all';
import { isMobile } from 'react-device-detect';
import { PrimaryInput } from '../atoms/input.component';
import { BiSearchAlt } from 'react-icons/all';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ImageComponent } from '../atoms/image.component';
import logo from '../../assets/images/logo.png';

const TopBar = dynamic(() => import('../organisms/topBar.component'), {
    ssr: false,
});

type Anchor = 'left';

export const Drawer = () => {
    const [search, setSearch] = useState<string>('');

    const handleSearch: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        const target = e.target;
        const value = target.value;
        setSearch(value);
    };

    const navigate = useRouter();
    const context = useContext(UserCtx);
    const navConfig: Object[] = context?.isLoggedIn
        ? helper.homeNavUser
        : helper.homeNavGuest;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navConfig.map((value: any, index: number) => (
                    <>
                        <ListItem key={value.text} disablePadding>
                            <ListItemButton
                                onClick={(e: MouseEvent<HTMLElement>) => {
                                    navigate.push(value.link);
                                }}
                            >
                                {value.hasIcon ? (
                                    <ListItemIcon>{value.icon}</ListItemIcon>
                                ) : (
                                    <ListItemIcon></ListItemIcon>
                                )}
                                <ListItemText primary={value.text} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <GiHamburgerMenu size={40} />
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        <div className={'drawer-close-icon-wrapper'}>
                            <Button onClick={toggleDrawer(anchor, false)}>
                                <AiOutlineClose size={30} />
                            </Button>
                        </div>
                        {isMobile && (
                            <>
                                <TopBar />
                                <Link href={'/'}>
                                    <ImageComponent
                                        image={logo}
                                        width={null}
                                        height={23}
                                    />
                                </Link>
                                <div className={'search-bar-drawer'}>
                                    <PrimaryInput
                                        value={search}
                                        name={'search-bar'}
                                        type={'text'}
                                        errorText={null}
                                        hasError={false}
                                        hasIcon={true}
                                        icon={<BiSearchAlt size={25} />}
                                        hasLabel={false}
                                        labelText={null}
                                        handleChange={handleSearch}
                                        placeHolder={'Seach. . .'}
                                    />
                                </div>
                            </>
                        )}
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
};
