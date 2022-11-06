import React, { FC, useState, useEffect } from 'react';
import NextImage from 'next/image';

export type Props = {
    image: any;
    height: number | null;
    width: number | null;
};

declare var imageType: typeof Image;

export const ImageComponent: FC<Props> = (props) => {
    type aspectRatioState = {
        heightRatio: number;
        widthRatio: number;
    };
    const [aspectRatio, setAspectRatio] = useState<aspectRatioState>({
        heightRatio: 0,
        widthRatio: 0,
    });
    type originalDimensionsState = {
        Height: number;
        Width: number;
    };
    const [orginalDimensions, setOriginalDimensions] =
        useState<originalDimensionsState>({
            Height: 0,
            Width: 0,
        });
    useEffect(() => {
        //create a html image with image prop
        interface Window {
            Image: typeof imageType;
        }

        const img: HTMLImageElement = new window.Image();
        img.src = props.image;

        //get the images original dimensions
        const Height: number = img.height;
        const Width: number = props.image.width;

        //use these dimensions to calculate aspect rations
        const aspectRatioHeight: number = Height / Width;
        const aspectRatioWidth: number = Width / Height;

        setOriginalDimensions({
            Height: Height,
            Width: Width,
        });

        setAspectRatio({
            heightRatio: aspectRatioHeight,
            widthRatio: aspectRatioWidth,
        });
    }, []);

    // return an image resized according to ratios if only one dimension is give, otherwise resized not according to ratios if both dimensions are givem, othewrise orignal dimentions are maintained.
    return (
        <NextImage
            src={props.image}
            width={
                props.width
                    ? props.width
                    : props.height
                    ? aspectRatio.widthRatio * props.height
                    : orginalDimensions.Width
            }
            height={
                props.height
                    ? props.height
                    : props.width
                    ? aspectRatio.heightRatio * props.width
                    : orginalDimensions.Height
            }
            alt={''}
        />
    );
};
