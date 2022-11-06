import React, { FC } from 'react';
type Props = {
    fontType: string;
    text: string | number;
};
export const TextComponent: FC<Props> = (props) => {
    return (
        <>
            {props.fontType === 'p' ? (
                <p>{props.text}</p>
            ) : props.fontType === 'h1' ? (
                <h1>{props.text}</h1>
            ) : props.fontType === 'h2' ? (
                <h2>{props.text}</h2>
            ) : props.fontType === 'h3' ? (
                <h3>{props.text}</h3>
            ) : props.fontType === 'h4' ? (
                <h4>{props.text}</h4>
            ) : props.fontType === 'h5' ? (
                <h5>{props.text}</h5>
            ) : (
                <h6>{props.text}</h6>
            )}
        </>
    );
};
