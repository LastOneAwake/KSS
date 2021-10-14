
const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
const options = {
    "product": {
        // iframe: false,
        "styles": {
            "product": {
                "@media (min-width: 601px)": {
                    "max-width": "calc(33.33333% - 30px)",
                    "margin-left": "30px",
                    "margin-bottom": "50px",
                    "width": "calc(33.33333% - 30px)"
                }
            },
            "title": {
                "font-size": "17px"
            },
            "button": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                "background-color": "#46af6d",
                ":focus": {
                    "background-color": "#3f9e62"
                },
                "border-radius": "7px",
                "padding-left": "83px",
                "padding-right": "83px"
            },
            "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
            },
            "price": {
                "font-size": "26px",
                "color": "#ffffff"
            },
            "compareAt": {
                "font-size": "22.099999999999998px",
                "color": "#ffffff"
            },
            "unitPrice": {
                "font-size": "22.099999999999998px",
                "color": "#ffffff"
            }
        },
        "buttonDestination": "modal",
        "contents": {
            "options": false
        },
        "text": {
            "button": "View Product"
        }
    },
    "productSet": {
        iframe: false,
        "styles": {
            "products": {
                "@media (min-width: 601px)": {
                    "margin-left": "-30px"
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
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                "background-color": "#46af6d",
                ":focus": {
                    "background-color": "#3f9e62"
                },
                "border-radius": "7px",
                "padding-left": "83px",
                "padding-right": "83px"
            },
            "quantityInput": {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px"
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
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                    "background-color": "#3f9e62"
                },
                "background-color": "#46af6d",
                ":focus": {
                    "background-color": "#3f9e62"
                },
                "border-radius": "7px"
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
        }
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
                "font-size": "18px"
            }
        }
    }
};


const sectionIDs = {
    276676444358: {
        name: 'Tops',
        loaded: false
    },
    276677066950: {
        name: 'Jewelery',
        loaded: false
    },
    276975485126: {
        name: 'Sunglasses',
        loaded: false
    },
    276677099718: {
        name: 'Accessories',
        loaded: false
    },
    276677230790: {
        name: 'Decor',
        loaded: false
    },
    276677132486: {
        name: 'Handbags',
        loaded: false
    },
    276676968646: {
        name: 'Dresses',
        loaded: false
    },
    276676935878: {
        name: 'Bottoms',
        loaded: false
    },
}


export const ShopifyBuy = window.ShopifyBuy;

export function loadScript(cb) {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = cb;
}


//this guy will render into whatever we give it in the node, we're creating that element up in the collection template, so the IDs have to match
export function createCollection(id, elementSelector) {

    var client = ShopifyBuy.buildClient({
        domain: 'kikis-she-shed.myshopify.com',
        storefrontAccessToken: '508717b1b227262a31a434d890d4875a',
    });

    const section = sectionIDs[id];
    if (section.loaded) { return }
    sectionIDs[id].loaded = true;

    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
            id: id,
            node: document.getElementById((`collectionComponent-component-${id}-${elementSelector}`)),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: options
        });
    });
}



