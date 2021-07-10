
import { ShopifyBuy, loadScript, createElement } from './consts'



export default function ComponentTemplate({ id, section, className }) {
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