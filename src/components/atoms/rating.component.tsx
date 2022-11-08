import React, { FC, useCallback, useEffect } from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/all';

export type Props = {
    rating: {
        count:number,
        rate:number
    };
};
export const Rating: FC<Props> = (props) => {

    let StarsJSX: Array<any> = [];

    for (let i =0 ; i < Math.floor(props.rating.rate); i++){
        StarsJSX.push(<AiFillStar />)
    }
    for (let i =0 ; i < 5 - Math.floor(props.rating.rate); i++){
        StarsJSX.push(<AiOutlineStar />);
    }

    return (
        <span className={'rating-icon-wrapper'}>
            {
                StarsJSX.map((value:any)=>{
                    return value
                })
            }
            {' ' + props.rating.rate + ' rating count ( ' + props.rating.count + ' )'}
        </span>
    );
};
