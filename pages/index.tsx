import React, {FC, useState, useEffect} from 'react'
import { ImageComponent } from '../src/components/atoms/image.component'
import cover from '../src/assets/images/cover.png'
import styles from '../styles/Home.module.css'
import {Divider} from '../src/components/atoms/divider.component'
import { ProductCarousel } from '../src/components/organisms/productCarousel.component'
import {getAllProductsThunk} from '../src/redux/thunk/productThunk'
import { useAppSelector, useAppDispatch } from '../src/redux/store/hooks'

const Home:FC = function () {

    const productsSelector= useAppSelector((state) => state.productSlice.products);
    const dispatch  = useAppDispatch()

    type SliderState = {
        id:number;
        title:string;
        price:string;
        category:string;
        description:string;
        image:string;
    }[]|null

    const [sliderProducts, setSliderProducts] = useState<SliderState>(null)

    useEffect(()=>{
        if(productsSelector.data === null) {
            dispatch(getAllProductsThunk())
        }else if(productsSelector.data !== null){
            console.log(productsSelector)
            setSliderProducts(productsSelector.data)
        }
    },[productsSelector])

  return (
       <div className={styles.contentWrapper}>
            <ImageComponent image={cover} width={1100} height={null} />
            <Divider Text={'Featured Products'} />
            {sliderProducts !== null && <ProductCarousel ProductData={sliderProducts}/> }
        </div>
  )
}

export default Home
