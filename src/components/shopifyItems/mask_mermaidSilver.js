import React, { useState } from 'react';
import { ShopifyBuy, loadScript, createElement } from './shopifyItems/consts'


let loaded = false;
const id = 6712209801414;


export default function ShopifyTest() {

  if (ShopifyBuy && ShopifyBuy.UI) {
    if (!loaded) {
      loaded = true;
      createElement(id);
    }
  } else {
    if (!loaded) {
      loaded = true;
      loadScript(createElement(id));
    }
  }

  return (
    <div id='shopTest'>
      <div id={'product-component-6630188417222'} className='reactGeneratedOne'></div>
    </div>
  );
}