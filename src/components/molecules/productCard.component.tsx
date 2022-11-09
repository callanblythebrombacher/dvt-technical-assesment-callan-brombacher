import React, { FC, MouseEvent } from 'react';
import { ImageComponent } from '../atoms/image.component';
import { TextComponent } from '../atoms/text.component';
import { ButtonComponent } from '../atoms/button.component';
import { MdAddCircleOutline } from 'react-icons/all';
import { useRouter } from 'next/router';
import { Rating } from '../atoms/rating.component';
import styles from '../../../styles/productCard.module.css';
type Props = {
    image: any;
    price: string;
    title: string;
    shortDescription: string;
    addToCart: (e: MouseEvent<HTMLElement>) => void;
    link: string;
    rating: {
        count: number;
        rate: number;
    };
};

export const ProductCard: FC<Props> = (props) => {
    const router = useRouter();

    return (
        <div className={styles.productCardWrapper}>
            <ImageComponent image={props.image} height={350} width={350} />
            <TextComponent fontType={'h3'} text={props.title} />
            <TextComponent fontType={'h4'} text={'R' + props.price} />
            <TextComponent fontType={'p'} text={props.shortDescription} />
            <Rating rating={props.rating} />
            <div className={styles.buttonWrapper}>
                <ButtonComponent
                    handleClick={props.addToCart}
                    variation={'add-to-cart-button'}
                    text={'Add to Cart'}
                    icon={<MdAddCircleOutline size={20} />}
                    iconWrapperClass={'add-to-cart-icon'}
                />
                <ButtonComponent
                    handleClick={() => router.push(props.link)}
                    variation={'primary-button'}
                    text={'View More'}
                    icon={null}
                    iconWrapperClass={null}
                />
            </div>
        </div>
    );
};
