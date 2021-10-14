
import { ShopifyBuy, loadScript, createElement } from './consts'
import { createCollection } from './collectionConsts'



export function ComponentTemplate({ id, section, className }) {
    if (ShopifyBuy && ShopifyBuy.UI) {
        createElement(id, section);
    } else {
        loadScript(createElement(id, section));
    }

    return (
        <div className={'productContainer ' + className}>
            <div id={`product-component-${id}-${section}`}></div>
        </div>
    );
}



export default function fetchAndCreateCollectionElement(id, section) {
    if (ShopifyBuy && ShopifyBuy.UI) {
        createCollection(id, section);
    } else {
        loadScript(createCollection(id, section));
    }
}


