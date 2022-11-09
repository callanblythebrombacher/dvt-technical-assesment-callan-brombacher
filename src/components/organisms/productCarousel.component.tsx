import React, { FC, MouseEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ProductCard } from '../molecules/productCard.component';
import styles from '../../../styles/productCarousel.module.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export type Props = {
    ProductData: {
        id: number;
        title: string;
        price: string;
        category: string;
        description: string;
        image: string;
    }[];
};

export const ProductCarousel: FC<Props> = (props) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = props.ProductData.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const addToCart = (e: MouseEvent<HTMLElement>) => {};

    return (
        <div>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {props.ProductData.map(
                    (value: any, index: number, elements: Array<any>) => {
                        return (
                            <div
                                className={styles.carouselContainer}
                                key={index}
                            >
                                <ProductCard
                                    image={value?.image}
                                    price={value?.price}
                                    title={value?.title}
                                    shortDescription={value?.description}
                                    addToCart={addToCart}
                                    link={
                                        '/product/' +
                                        value?.title.replace(/\s/g, '-')
                                    }
                                    rating={value?.rating}
                                />
                                {elements.length - 1 > index ? (
                                    <ProductCard
                                        image={elements[index + 1]?.image}
                                        price={elements[index + 1]?.price}
                                        title={elements[index + 1]?.title}
                                        shortDescription={
                                            elements[index + 1]?.description
                                        }
                                        addToCart={addToCart}
                                        link={
                                            '/product/' +
                                            elements[index + 1]?.title.replace(
                                                /\s/g,
                                                '-'
                                            )
                                        }
                                        rating={elements[index + 1]?.rating}
                                    />
                                ) : null}
                                {elements.length - 2 > index ? (
                                    <ProductCard
                                        image={elements[index + 2]?.image}
                                        price={elements[index + 2]?.price}
                                        title={elements[index + 2]?.title}
                                        shortDescription={
                                            elements[index + 2]?.description
                                        }
                                        addToCart={addToCart}
                                        link={
                                            '/product/' +
                                            elements[index + 2]?.title.replace(
                                                /\s/g,
                                                '-'
                                            )
                                        }
                                        rating={elements[index + 2]?.rating}
                                    />
                                ) : null}
                            </div>
                        );
                    }
                )}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </div>
    );
};
