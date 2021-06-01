
const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
const options = {
    "product": {
        iframe: false,
        "styles": {
            "product": {
                "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                },
                "text-align": "left"
            },
            "title": {
                "font-size": "26px"
            },
            "button": {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                "background-color": "#46af6d",
                ":focus": {
                    "background-color": "#3f9e62"
                }
            },
            "quantityInput": {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px"
            },
            "price": {
                "font-size": "18px"
            },
            "compareAt": {
                "font-size": "15.299999999999999px"
            },
            "unitPrice": {
                "font-size": "15.299999999999999px"
            }
        },
        "layout": "horizontal",
        "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true,
            "description": true
        },
        "width": "100%",
        "text": {
            "button": "Add to cart"
        }
    },
    "productSet": {
        "styles": {
            "products": {
                "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                }
            }
        }
    },
    "modalProduct": {
        "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
        },
        "styles": {
            "product": {
                "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                }
            },
            "button": {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                "background-color": "#46af6d",
                ":focus": {
                    "background-color": "#3f9e62"
                }
            },
            "quantityInput": {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px"
            },
            "title": {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                "color": "#4c4c4c"
            },
            "price": {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                "color": "#4c4c4c"
            },
            "compareAt": {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                "color": "#4c4c4c"
            },
            "unitPrice": {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                "color": "#4c4c4c"
            }
        },
        "text": {
            "button": "Add to cart"
        }
    },
    "option": {},
    "cart": {
        "styles": {
            "button": {
                "font-size": "17px",
                "padding-top": "16.5px",
                "padding-bottom": "16.5px",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                "background-color": "#46af6d",
                ":focus": {
                    "background-color": "#3f9e62"
                }
            }
        },
        "text": {
            "title": "Shopping Bag",
            "total": "Subtotal",
            "empty": "Nothing here...Fill me up, buttercup!",
            "button": "Checkout",
            "noteDescription": "Anything you want us to know?"
        },
        "contents": {
            "note": true
        },
        "popup": false
    },
    "toggle": {
        "styles": {
            "toggle": {
                "background-color": "#46af6d",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                ":focus": {
                    "background-color": "#3f9e62"
                }
            },
            "count": {
                "font-size": "17px"
            }
        }
    }
}


const productIDs = [
    6630188417222, //black soul
    6630208012486, //chic
    6712209801414, //mermaid
    6630365659334, //resting beach
    6712209572038, //ruby red
    6630231998662, //seale with kiss
    6712209080518, //solid gold
    6630413041862, //talk to sand
    6697421865158, //thick thighs
    6697409118406, //woke up like this
    6630162366662, //mandala beach
    6697434579142, //boho teal kimono
    6697444442310, //medallion kimono
    6630362120390, //frida earrings
    6697456042182, //yellow maxi dress
]

const prodsObj = {
    6630188417222: { name: 'black soul', loaded: false },
    6630208012486: { name: 'chic', loaded: false },
    6712209801414: { name: 'mermaid', loaded: false },
    6630365659334: { name: 'resting beach', loaded: false },
    6712209572038: { name: 'ruby red', loaded: false },
    6630231998662: { name: 'seale with kiss', loaded: false },
    6712209080518: { name: 'solid gold', loaded: false },
    6630413041862: { name: 'talk to sand', loaded: false },
    6697421865158: { name: 'thick thighs', loaded: false },
    6697409118406: { name: 'woke up like this', loaded: false },
    6630162366662: { name: 'mandala beach', loaded: false },
    6697434579142: { name: 'boho teal kimono', loaded: false },
    6697444442310: { name: 'medallion kimono', loaded: false },
    6630362120390: { name: 'frida earrings', loaded: false },
    6697456042182: { name: 'yellow maxi dress', loaded: false },
}


export const ShopifyBuy = window.ShopifyBuy;

export function loadScript(cb) {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = cb;
}



export function createElement(id) {
    var client = ShopifyBuy.buildClient({
        domain: 'kikis-she-shed.myshopify.com',
        storefrontAccessToken: '508717b1b227262a31a434d890d4875a',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
        if (prodsObj[id].loaded) { return }
        prodsObj[id].loaded = true;
        ui.createComponent('product', {
            id: id,
            node: document.getElementById(('product-component-' + id)),
            options: options
        });
    });
}