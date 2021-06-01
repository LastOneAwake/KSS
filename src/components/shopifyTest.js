import React, { useState } from 'react';
import ComponentTemplate from './shopifyItems/ComponentTemplate';

const products = [
  { id: 6630188417222, name: 'black soul', },
  { id: 6630208012486, name: 'chic', },
  { id: 6712209801414, name: 'mermaid', },
  { id: 6630365659334, name: 'resting beach', },
  { id: 6712209572038, name: 'ruby red', },
  { id: 6630231998662, name: 'seale with kiss', },
  { id: 6712209080518, name: 'solid gold', },
  { id: 6630413041862, name: 'talk to sand', },
  { id: 6697421865158, name: 'thick thighs', },
  { id: 6697409118406, name: 'woke up like this', },
  { id: 6630162366662, name: 'mandala beach', },
  { id: 6697434579142, name: 'boho teal kimono', },
  { id: 6697444442310, name: 'medallion kimono', },
  { id: 6630362120390, name: 'frida earrings', },
  { id: 6697456042182, name: 'yellow maxi dress', },

]

export default function ShopifyTest() {
  return (
    <div id='shopTest'>
      {products.map(obj => {
        let id = obj.id;
        return (<ComponentTemplate
          id={id}
          loaded={obj.loaded}
          key={id} />)
      })}
    </div>
  );
}