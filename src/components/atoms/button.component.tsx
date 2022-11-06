import React, {FC} from 'react';

export type Props = {
    handleClick: (e: any) => void;
    variation: string;
    text: string;
    icon: any | null;
};

export const ButtonComponent:FC<Props> = (props) => {
    return (
        <>
            {props.icon !== null ? (
                <button className={props.variation} onClick={props.handleClick}>
                    {props.icon}
                    {props.text}
                </button>
            ) : (
                <button className={props.variation} onClick={props.handleClick}>
                    {props.text}
                </button>
            )}
        </>
    );
};


