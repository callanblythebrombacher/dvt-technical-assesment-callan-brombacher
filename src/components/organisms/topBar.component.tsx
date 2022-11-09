import React, { FC } from 'react';
import Link from 'next/link';
import { TextComponent } from '../atoms/text.component';
import {
    AiFillFacebook,
    SiInstagram,
    FiTwitter,
    TbBrandTiktok,
    IoLocationOutline,
    FiClock,
} from 'react-icons/all';

const TopBar: FC = function () {
    return (
        <div className={'top-bar-wrapper'}>
            <div className={'social-icons-wrappers'}>
                <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                    <AiFillFacebook size={25} />
                </Link>
                <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                    <SiInstagram size={25} />
                </Link>
                <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                    <FiTwitter size={25} />
                </Link>
                <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                    <TbBrandTiktok size={25} />
                </Link>
            </div>
            <div className={'location-wrappers'}>
                <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                    <IoLocationOutline size={25} />
                    <TextComponent
                        text={'London Borough of Harrow'}
                        fontType={'p'}
                    />
                </Link>
            </div>
            <div className={'opening-hours'}>
                <FiClock size={25} />
                <TextComponent text={'Open 24/7'} fontType={'p'} />
            </div>
        </div>
    );
};

export default TopBar;
