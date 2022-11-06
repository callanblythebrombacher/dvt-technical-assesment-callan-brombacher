import React, { FC } from 'react';
import Link from 'next/link';
import { helper } from '../../helpers/navigationHelper';

export const MainNavGuest: FC = () => {
    return (
        <nav>
            {helper.homeNavGuest.map((value: any, index: number) => {
                return value.hasIcon ? (
                    <Link key={index} href={value.link}>
                        <div className={'nav-link-wrapper'}>
                            <span className={'nav-icon-wrapper'}>
                                {value.icon}
                            </span>
                            <p>{value.text}</p>
                        </div>
                    </Link>
                ) : (
                    <Link key={index} href={value.link}>
                        <div className={'nav-link-wrapper'}>
                            <p>{value.text}</p>
                        </div>
                    </Link>
                );
            })}
        </nav>
    );
};

export const MainNavUser: FC = () => {
    return (
        <nav>
            {helper.homeNavUser.map((value: any, index: number) => {
                return value.hasIcon ? (
                    <Link key={index} href={value.link}>
                        <div className={'nav-link-wrapper'}>
                            <span className={'nav-icon-wrapper'}>
                                {value.icon}
                            </span>
                            <p>{value.text}</p>
                        </div>
                    </Link>
                ) : (
                    <Link key={index} href={value.link}>
                        <div className={'nav-link-wrapper'}>
                            <p>{value.text}</p>
                        </div>
                    </Link>
                );
            })}
        </nav>
    );
};
