import React, { useContext, useEffect } from 'react';
import { ShopContext } from './shopContext';
import QuantityButton from './QuantityButton';
import './cart.scss';
import './heartLoader.scss'

function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value∏

    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}



export default function Cart() {
    const shopCon = useContext(ShopContext);
    const { updateLineItems, removeLineItems, closeCart } = shopCon;
    const { lineItems, subtotalPrice, webUrl } = shopCon.checkout;

    useEffect(() => {
        disableScroll();
        return () => {
            enableScroll();
        }
    });

    if (lineItems.length === 0) {
        return (
            <div
                id='cartBG'
                onClick={() => {
                    closeCart();
                }}
            >
                <div
                    id='Cart'
                    className='empty'
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >

                    <svg viewBox="0 0 500 500">
                        <path id="curve" fill='transparent' d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                        <text width="500">
                            <textPath alignment-baseline="top" xlinkHref="#curve">
                                Fill me up, Buttercup!
                            </textPath>
                        </text>
                    </svg>

                    <div id='emptyHeartHolder'>
                        <div
                            className="lds-heart">
                            <div />
                        </div>
                    </div>


                    <div
                        id='cartFooter'
                        className='empty'
                    >
                        <div id='cartButtonHolder'>
                            <button
                                id="cartBackButton"
                                onClick={() => {
                                    closeCart();
                                }}
                            >
                                RETURN
                            </button>
                        </div>




                    </div>
                </div>
            </div >
        )
    }



    return (
        <div
            id='cartBG'
            onClick={() => {
                closeCart();
            }}
        >
            <div
                id='Cart'
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <div id='topGuideRow' className='guideRow'>
                    <span id='productColName' className='colName'>Product</span>
                    <span id='quantityColName' className='colName'>Quantity</span>
                    <span id='itemPriceColName' className='colName'>Item Price</span>
                    <span id='totalPriceColName' className='colName'>Total Price</span>
                </div>
                <div id='lineItemHolder'>
                    {lineItems && lineItems.reverse().map(itemObj => {

                        const { title, quantity, variant } = itemObj;

                        if (!variant) {
                            return (
                                <div
                                    // key={`${variantID}_Cart`}
                                    className='cartLineItem'
                                >
                                    title
                                </div>
                            );
                        }
                        const itemID = itemObj.id;
                        const { image, price, selectedOptions } = variant;
                        const variantID = variant.id;
                        const optionName = selectedOptions[0].name;

                        return (
                            <div
                                key={`${variantID}_Cart`}
                                className='cartLineItem'
                            >
                                <div className='lineItemImgContainer'>
                                    <img
                                        src={image.src}
                                        alt={image?.altText || `Photo of ${itemObj.title}`}
                                        className='cartProductImg'
                                    />
                                </div>
                                <div className='cartLineItemDetails'>
                                    <div className='lineItemName'>
                                        {title}
                                    </div>
                                    {/* <div className='itemID_availability'>
                                        <span className='idToDisplay'>
                                            #{idToDisplay}
                                        </span>
                                        |
                                        <span className={'availability ' + (available ? 'inStock' : 'OOS')}>
                                            {available ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </div> */}
                                    {variant.title !== 'Default Title' &&
                                        <div className='lineItemVariant'>
                                            {`${optionName}: ${variant.title}`}
                                        </div>
                                    }
                                    <div
                                        className='lineItemRemove'
                                        onClick={() => {
                                            removeLineItems(itemID);
                                        }}
                                    >
                                        REMOVE FROM CART
                                    </div>
                                </div>
                                <div id='bottomGuideRow' className='guideRow'>
                                    <span id='quantityColName' className='colName'>Quantity</span>
                                    <span id='itemPriceColName' className='colName'>Item Price</span>
                                    <span id='totalPriceColName' className='colName'>Total Price</span>
                                </div>
                                <div className='cartShiftableColumn'>

                                    <div className='lineItemQuantity'>
                                        <QuantityButton
                                            quantity={quantity}
                                            updateQuantity={(quantity) => {
                                                updateLineItems(itemID, quantity);
                                            }}
                                            section={'cart'}
                                            variantID={variantID}
                                        />
                                    </div>
                                    <div className='lineItemPrice'>
                                        ${price}
                                    </div>

                                    <div className='lineItemSubTotal'>
                                        ${(price * quantity).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
                <div
                    id='cartFooter'
                >

                    <div id='subtotals'>

                        <div id='subTotalValue'>
                            Subtotal <span>{subtotalPrice}</span>
                        </div>
                        <div id='calculatedAtCheckout'>
                            Applicable shipping and tax calculated at checkout.
                        </div>
                    </div>
                    <div id='cartButtonHolder'>
                        <button
                            id="cartBackButton"
                            onClick={() => {
                                closeCart();
                            }}
                        >
                            RETURN
                        </button>
                        <button
                            id="proceedToCheckout"
                            onClick={() => {
                                window.open(webUrl, '_self');
                            }}
                        >
                            CHECKOUT
                        </button>
                    </div>




                </div>
            </div>

        </div>
    );
}

