import React, { useState } from 'react';
import { ShopifyBuy, loadScript, createElement } from './consts'



export default function ComponentTemplate({ id }) {
    if (ShopifyBuy && ShopifyBuy.UI) {
        createElement(id);
    } else {
        loadScript(createElement(id));
    }

    return (
        <div className='productContainer'>
            <div id={'product-component-' + id} className='reactGeneratedOne'></div>
        </div>
    );
}