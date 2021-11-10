import React, { useState } from 'react';
import QuantityButton from './QuantityButton';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function ProductContainer({ product, sectionName, setSelectedProductObj, openCart }) {
    //selected variant and quantity
    const { variants, id, options } = product;
    const dropdownOpts = variants.map((variant, i) => {
        const classes = variant.available ? 'inStock' : 'outOfStock';
        const dropDownObj = {
            //I would've liked to return the entire obj but this pkg seemingly only wants a data primitive as val
            value: i,
            label: variant.title,
            className: `${classes}`,
            id: variant.id,
            index: i,
            key: `${variant.id}dropDownOpt`,
            obj: variant
        }
        // titleBasedObj[variant.title] = { index: i, variantObj: variant }
        return dropDownObj;
    })
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [currentVariant, setCurrentVariant] = useState(variants[0]);
    const [quantity, setQuantity] = useState(1);
    const defaultOption = dropdownOpts[selectedVariantIndex];

    let imgObj = product?.images[0];
    // const variantId = product.variants[0].id;



    // const titleBasedObj = {}

    const hasVariants = variants.length > 1;
    return (
        <div
            key={`${product.id}mainShopImg`}
            id={`${sectionName}_${product.handle}_${product.id}`}
            className={`${sectionName}Product product` + (hasVariants ? '' : ' noVariants')}
        >
            {imgObj &&
                <img
                    className={`productImg ${sectionName}_productImg`}
                    src={imgObj.src}
                    alt={imgObj.altText}
                    onClick={() => {
                        setSelectedProductObj(product)
                    }}
                />
            }
            {product?.title &&
                <div
                    className='productTitle'
                >
                    {product.title}
                </div>
            }
            <div
                className='productPrice'
            >
                ${product.variants[0].price}
            </div>
            <div className='buttonsHolder'>
                {hasVariants && options.map((optionObj, i) => {
                    return (
                        <div
                            className='optionHolder'
                            key={`${id}optionsHolder${i}`}
                        >
                            <Dropdown
                                options={dropdownOpts}
                                value={defaultOption}
                                placeholder="Select an option"
                                onChange={({ value }) => {
                                    const { obj } = dropdownOpts[value];
                                    setCurrentVariant(obj);
                                    setSelectedVariantIndex(value);
                                }}
                            />
                        </div>
                    );
                })}
                <div className='addToCartHolder'>
                    <div
                        className='quant'
                    ></div>
                    <QuantityButton
                        variantID={currentVariant.id}
                        quantity={quantity}
                        updateQuantity={(quant) => {
                            setQuantity(quant);
                        }}
                        buttonVal={'ADD TO CART'}
                        section={'product'}
                        hideQuantityUpdater={true}
                    />
                </div>
                <button
                    className='viewProduct'
                    onClick={() => {
                        setSelectedProductObj(product)
                    }}
                >
                    VIEW DETAILS
                </button>

            </div>
        </div>
    );
};