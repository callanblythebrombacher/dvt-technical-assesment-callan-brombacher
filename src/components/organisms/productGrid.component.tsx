import React, { FC, MouseEvent } from 'react';
import { ProductCard } from '../molecules/productCard.component';

type Props = {
    ProductData: {
        title: string;
        stock: number;
        price: string;
        description: string;
        image: any;
        rating: number;
        link: string;
    }[];
    addToCart: (e: MouseEvent<HTMLElement>) => void;
};

export const ProductGridView: FC<Props> = (props) => {
    return (
        <>
            {
                <div className={'product-grid'}>
                    {props.ProductData.map((value: any, index: number) => {
                        return (
                            <ProductCard
                                key={index}
                                rating={value.rating}
                                image={value.image}
                                price={value.price}
                                title={value.title}
                                shortDescription={value.description}
                                addToCart={props.addToCart}
                                link={value.link}
                            />
                        );
                    })}
                    )
                </div>
            }
        </>
    );
};
