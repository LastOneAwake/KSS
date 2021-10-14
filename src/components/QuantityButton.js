import React, { useState, useContext } from 'react';
import { ShopContext } from './shopContext';

import './quantityButton.scss';


export default function QuantityButton({ quantity, updateQuantity, buttonVal, section, variantID, hideQuantityUpdater }) {
    const { addItemToCheckout } = useContext(ShopContext);

    const [quant, setQuant] = useState(quantity);
    const containerClasses = 'quantityUpdater ' + (section === 'product' ? ' product' : 'cart') + (hideQuantityUpdater ? ' noQuant' : '');
    return (
        <div className={containerClasses}>
            {!hideQuantityUpdater &&
                <div className='quantityButtonHolder'>
                    <div
                        className='quantButton quantButtonMinus'
                        onClick={() => {
                            let val = quant - 1;
                            if (val >= 0) {
                                setQuant(val);
                            }


                        }}
                    >
                        -
                    </div>

                    <input
                        type='text'
                        value={quant}
                        onKeyDown={e => {
                            let val = quant;
                            if (e.key === 'ArrowUp') {
                                val++;
                            }
                            if (e.key === 'ArrowDown') {
                                val--;
                            }
                            if (val >= 0) {
                                setQuant(val);
                            }
                        }}
                        onChange={(e) => {
                            let val = e.target.value;
                            if (isNaN(val)) { return }
                            val = parseInt(val);
                            if (val >= 0) {
                                setQuant(val);
                            }
                        }}
                    />
                    <div
                        className='quantButton quantButtonPlus'
                        onClick={() => {
                            setQuant(quant + 1);
                        }}
                    >
                        +
                    </div>
                </div>
            }
            <div
                className='quantityUpdateButton'
                onClick={() => {
                    updateQuantity(quant);
                    console.log(`adding ${quant} of  ${variantID}`);
                    addItemToCheckout(variantID, quant);
                }}
            >
                {buttonVal ? buttonVal : 'Update'}
            </div>
        </div>
    )
}