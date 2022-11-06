import React, { FC, useCallback, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/all';

export type Props = {
    rating: number;
};
export const Rating: FC<Props> = (props) => {
    const mockArray = new Array(props.rating);
    let emptyStarsJSX: Array<any> = [];
    useEffect(() => {
        emptyStarsJSX = emptyStars();
    }, []);

    const emptyStars = useCallback((): any => {
        const jsxArray: Array<any> = [];
        for (let i: number = 0; i < 5 - mockArray.length; i++) {
            jsxArray.push(<AiOutlineStar />);
        }
        return jsxArray;
    }, []);

    return (
        <span className={'rating-icon-wrapper'}>
            {mockArray.map((value: null, index: number) => {
                return <AiFillStar key={index} />;
            })}
            {emptyStarsJSX.map((value: any) => {
                return value;
            })}
        </span>
    );
};
