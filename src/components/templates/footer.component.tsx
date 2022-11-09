import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { ImageComponent } from '../atoms/image.component';
import logo from '../../assets/images/logo.png';
import { PrimaryInput } from '../atoms/input.component';
import {
    AiFillFacebook,
    BiSearchAlt,
    FiTwitter,
    SiInstagram,
    TbBrandTiktok,
} from 'react-icons/all';
import { helper } from '../../helpers/navigationHelper';
import { useAppSelector } from '../../redux/store/hooks';
import { TextComponent } from '../atoms/text.component';

const Footer: FC = function () {
    const categorySelector = useAppSelector(
        (state) => state.productSlice.categories
    );
    type ProductState = {
        categories: any[] | null;
    };
    const [productState, setProductState] = useState<ProductState>();

    useEffect((): void => {
        setProductState({
            categories:
                categorySelector !== null ? categorySelector.data : null,
        });
    }, [categorySelector]);
    const [state, setState] = useState<string>('');

    const handleSearch: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        const target = e.target;
        const value = target.value;
        setState(value);
    };

    return (
        <footer>
            <section className={'footer-links'}>
                <div className={'product-categories'}>
                    <TextComponent fontType={'h3'} text={'Categories'} />
                    {productState?.categories !== null
                        ? productState?.categories.map(
                              (value: string, index: number) => {
                                  return (
                                      <Link
                                          key={index}
                                          href={
                                              '/shop/' +
                                              value.replace(/\s/g, '-')
                                          }
                                      >
                                          <p>{value}</p>
                                      </Link>
                                  );
                              }
                          )
                        : null}
                </div>
                <div className={'other-pages-list-wrapper'}>
                    <TextComponent fontType={'h3'} text={'Links'} />
                    {helper.footerNav.map(
                        (
                            value: { link: string; text: string },
                            index: number
                        ) => {
                            return (
                                <Link
                                    className={'other-pages-list-item'}
                                    href={value.link}
                                    key={index}
                                >
                                    <p>{value.text}</p>
                                </Link>
                            );
                        }
                    )}
                </div>
            </section>
            <div className={'search-bar-footer'}>
                <Link href={'/'}>
                    <ImageComponent image={logo} width={null} height={50} />
                </Link>
                <div className={'search-bar'}>
                    <PrimaryInput
                        value={state}
                        name={'search-bar'}
                        type={'text'}
                        errorText={null}
                        hasError={false}
                        hasIcon={true}
                        icon={<BiSearchAlt size={25} />}
                        hasLabel={false}
                        labelText={null}
                        handleChange={handleSearch}
                        placeHolder={'Search. . .'}
                    />
                </div>
                <div className={'social-icons-wrappers'}>
                    <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                        <AiFillFacebook size={25} />
                    </Link>
                    <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                        <SiInstagram size={25} />
                    </Link>
                    <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                        <FiTwitter size={25} />
                    </Link>
                    <Link href={'https://www.youtube.com/watch?v=vAOUTecDGPM'}>
                        <TbBrandTiktok size={25} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
