import React, { FC } from 'react';

export type Props = {
    handleClick: (e: any) => void;
    variation: string;
    text: string;
    icon: any | null;
    iconWrapperClass: string | any;
};

export const ButtonComponent: FC<Props> = (props) => {
    return (
        <>
            {props.icon !== null ? (
                <button className={props.variation} onClick={props.handleClick}>
                    <span className={'button-content'}>
                        <span className={props.iconWrapperClass}>
                            {props.icon}
                        </span>
                        <span className={'button-text'}>{props.text}</span>
                    </span>
                </button>
            ) : (
                <button className={props.variation} onClick={props.handleClick}>
                    {props.text}
                </button>
            )}
        </>
    );
};
