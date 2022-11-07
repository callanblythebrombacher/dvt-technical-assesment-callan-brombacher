import React, { FC, MouseEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ProductCard } from '../molecules/productCard.component';
import { ButtonComponent } from '../atoms/button.component';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export type Props = {
    ProductData: {
        id:number;
        title:string;
        price:string;
        category:string;
        description:string;
        image:string;
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

    const addToCart = (e:MouseEvent<HTMLElement>)=>{

    }

    return (
        <div>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {props.ProductData.map((value: any, index: number) => {
                    return (
                        <ProductCard
                            key={index}
                            image={value.image}
                            price={value.price}
                            title={value.title}
                            shortDescription={value.description}
                            addToCart={addToCart}
                            link={'/product/' + value.title.replace(/\s/g , "-")}
                            stock={100}
                            rating={4}
                        />
                    );
                })}
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
