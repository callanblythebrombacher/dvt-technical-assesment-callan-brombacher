import React, { FC, MouseEvent } from 'react';
import { ImageComponent } from '../atoms/image.component';
import { TextComponent } from '../atoms/text.component';
import { ButtonComponent } from '../atoms/button.component';
import { GrAddCircle } from 'react-icons/all';
import { useRouter } from 'next/router';
import { Rating } from '../atoms/rating.component';
type Props = {
    image: any;
    price: string;
    title: string;
    shortDescription: string;
    addToCart: (e: MouseEvent<HTMLElement>) => void;
    link: string;
    rating: number;
    stock: number;
};

export const ProductCard: FC<Props> = (props) => {
    const router = useRouter();

    return (
        <div className={'product-card'}>
            <ImageComponent image={props.image} height={350} width={null} />
            <TextComponent fontType={'p'} text={props.stock} />
            <TextComponent fontType={'h3'} text={props.title} />
            <TextComponent fontType={'h5'} text={props.price} />
            <TextComponent fontType={'p'} text={props.shortDescription} />
            <Rating rating={props.rating} />
            <ButtonComponent
                handleClick={props.addToCart}
                variation={'add-to-cart'}
                text={'Add to Cart'}
                icon={<GrAddCircle />}
            />
            <ButtonComponent
                handleClick={() => router.push(props.link)}
                variation={'primary-button'}
                text={'Primary Button'}
                icon={null}
            />
        </div>
    );
};
