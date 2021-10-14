import React, { useContext } from 'react';
import { ShopContext } from './shopContext';
import './addToCartButton.scss';

export default function AddToCartButton({ variantId, quantity, setQuantity }) {

    const { addItemToCheckout } = useContext(ShopContext);
    return (
        <div
            className='buttonHolder'
        >
            <input
                className='quantityCounter'
                type='text'
                value={quantity}
                onChange={e => {
                    const val = e.target.value;
                    if (isNaN(val)) { return };
                    console.log(val, quantity);
                    setQuantity(val);
                }}
            />
            <button
                className='addToCartButton'
                onClick={() => {
                    console.log(`adding ${quantity} of  ${variantId}`);
                    addItemToCheckout(variantId, quantity);
                }}
            >
                Add To Cart
            </button>
        </div>
    )
}