import React, { useEffect, useState } from 'react';
import QuantityButton from './QuantityButton';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './quickViewModal.scss';

function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value∏

    window.onscroll = function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}


export default function QuickViewModal({ productObj, dismissDetailWindow }) {
    const { title, variants, id, options, images, descriptionHtml } = productObj;

    window.history.pushState({}, '', `?mid=${productObj.id}`);



    // const titleBasedObj = {}
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
    //img state
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    // const [variantsByTitle, setVariantsByTitle] = useState(titleBasedObj);
    //selected variant and quantity
    const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
    const [currentVariant, setCurrentVariant] = useState(variants[0]);
    const [quantity, setQuantity] = useState(1);
    const defaultOption = dropdownOpts[selectedVariantIndex];


    useEffect(() => {
        disableScroll();
        return () => {
            enableScroll();
        }
    });

    console.log(selectedImage);

    return (
        <div
            id='detailsBG'
            onClick={() => {
                dismissDetailWindow();
            }}
        >
            <div
                id='quickViewModal'
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div
                    id='closeButton'
                    onClick={() => {
                        dismissDetailWindow();
                    }}
                >
                    <span className='xLine' id='xLine1' />
                    <span className='xLine' id='xLine2' />
                </div>
                <div id='quickView_body'>
                    <div id='quickView_imgSection'>
                        <img
                            src={selectedImage.src}
                            alt='tester alt'
                            id={'mainImg'}
                            height={1080}
                            width={1080}
                        />
                        <div id='quickView_imgCarousel'>
                            {images.map((imgObj, i) => {
                                const selected = i === selectedImageIndex;
                                const classes = 'imgCarousel_img' + (selected ? ' selected' : '');
                                return (
                                    <img
                                        key={`${imgObj.id}imgCarousel${i}`}
                                        className={classes}
                                        src={imgObj.src}
                                        alt={imgObj?.altText || `A Picture of a ${title}`}
                                        onClick={() => {
                                            setSelectedImage(imgObj);
                                            setSelectedImageIndex(i);
                                            console.log(imgObj);
                                        }}

                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div id='quickView_infoSection'>

                        <div id='upperHolder'>
                            <div id='quickView_productName'>
                                {title}
                            </div>
                            <div id='productPrice'>
                                ${currentVariant.price}
                            </div>
                            <div id='quickViewActionableItems'>
                                {variants.length > 1 && options.map(optionObj => {
                                    return (
                                        <div className='optionHolder'>
                                            <span className='dropDownLabel'>{optionObj.name}</span>
                                            <Dropdown
                                                key={`${id}options`}
                                                options={dropdownOpts}
                                                value={defaultOption}
                                                placeholder="Select an option"
                                                onChange={({ value }) => {
                                                    const { obj } = dropdownOpts[value];
                                                    setCurrentVariant(obj);
                                                    setSelectedVariantIndex(value);
                                                    console.log(obj);
                                                }}
                                            />
                                        </div>
                                    );
                                })}

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
                                <button
                                    id="mobileReturnButton"
                                    onClick={() => {
                                        dismissDetailWindow();

                                    }}
                                >
                                    Return
                                </button>
                            </div>
                        </div>
                        <div
                            id='quickView_productDesc'
                            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                        >
                            { }
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}