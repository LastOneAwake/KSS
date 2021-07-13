
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


// const productIDs = [
//     6630188417222, //black soul
//     6630208012486, //chic
//     6712209801414, //mermaid
//     6630365659334, //resting beach
//     6712209572038, //ruby red
//     6630231998662, //seale with kiss
//     6712209080518, //solid gold
//     6630413041862, //talk to sand
//     6697421865158, //thick thighs
//     6697409118406, //woke up like this
//     6630162366662, //mandala beach
//     6697434579142, //boho teal kimono
//     6697444442310, //medallion kimono
//     6630362120390, //frida earrings
//     6697456042182, //yellow maxi dress
//     6712238932166, //AVIATORs
// ]

// const prodsObj = {
//     //beach throws
//     6630162366662: { name: 'all throws', loaded: false },
//     //bags
//     6630365659334: { name: 'resting beach face', loaded: false },
//     6630231998662: { name: '"Sealed with A Kiss" Beaded Clutch', loaded: false },
//     6697409118406: { name: '"Woke Up Like This" Faux Suede Cosmetic Bags', loaded: false },
//     //earrings
//     6630362120390: { name: 'Frida Kahlo Beaded Earrings', loaded: false },
//     6730915184838: { name: 'Threader Drop Bar Earrings', loaded: false },
//     6730921738438: { name: 'Crystal Bar Studs', loaded: false },
//     6730923212998: { name: 'X Ear Cuffs', loaded: false },
//     //shirts
//     6630208012486: { name: '"Chic Like Coco" T-shirt', loaded: false },
//     6697421865158: { name: '"Thick Thighs x Thin Patience" T-shirt', loaded: false },
//     //kimonos
//     6697434579142: { name: 'Boho Teal Kimono', loaded: false },
//     6697444442310: { name: 'Crochet Medallion Tassel Kimono', loaded: false },
//     //dresses
//     6697456042182: { id: 6697456042182, name: 'Sleeveless Scoop Neck Maxi Dress', loaded: false },
//     //hats
//     6630413041862: { id: 6630413041862, name: '"Talk to the Sand" Beach Hat', loaded: false },
//     //blockers
//     6712250826950: { id: 6712250826950, name: '"Certified Hater Blockers" - Black & Gold', loaded: false },
//     6722519957702: { id: 6722519957702, name: '"Certified Hater Blockers" - Black & Silver', loaded: false },
//     6722520678598: { id: 6722520678598, name: '"Certified Hater Blockers" - Coffee & Cream', loaded: false },
//     6722520514758: { id: 6722520514758, name: '"Certified Hater Blockers" - Merlot', loaded: false },
//     6722520907974: { id: 6722520907974, name: '"Certified Hater Blockers" - Pink', loaded: false },
//     6722520776902: { id: 6722520776902, name: '"Certified Hater Blockers" - Tortoise', loaded: false },
//     //aviators
//     6722522251462: { id: 6722522251462, name: '"Not Ya Mama\'s Aviators" - Black', loaded: false },
//     6722522546374: { id: 6722522546374, name: '"Not Ya Mama\'s Aviators" - Brown & Tortoise', loaded: false },
//     6722522808518: { id: 6722522808518, name: '"Not Ya Mama\'s Aviators" - Hunter Green', loaded: false },
//     6722522153158: { id: 6722522153158, name: '"Not Ya Mama\'s Aviators" - Ivory', loaded: false },
//     6712238932166: { id: 6712238932166, name: '"Not Ya Mama\'s Aviators" - Soft Pink', loaded: false },
//     //masks
//     6712209801414: { id: 6712209801414, name: '"Mermaid Silver" Reusable Sequin Mask', loaded: false },
//     6712209572038: { id: 6712209572038, name: '"Ruby Red Slippers" Reusable Sequin Mask', loaded: false },
//     6712209080518: { id: 6712209080518, name: '"Livin\' My Life Like It\'s Golden" Reusable Sequin Mask', loaded: false },
//     6630188417222: { id: 6630188417222, name: '"Black As My Soul" Reusable Sequin Mask', loaded: false },
// }


const objBySections = {
    shirts: {
        name: "Say It With Your Chest",
        prods: {
            6630208012486: { id: 6630208012486, name: '"Chic Like Coco" T-shirt', loaded: false },
            6697421865158: { id: 6697421865158, name: '"Thick Thighs x Thin Patience" T-shirt', loaded: false },

        },
    },
    kimonos: {
        name: "Kimonos",
        prods: {
            6697434579142: { id: 6697434579142, name: 'Boho Teal Kimono', loaded: false },
            6697444442310: { id: 6697444442310, name: 'Crochet Medallion Tassel Kimono', loaded: false },
        },
    },
    dresses: {
        name: 'Dressed To The Max',
        prods: {
            6697456042182: { id: 6697456042182, name: 'Sleeveless Scoop Neck Maxi Dress', loaded: false },

        }
    },
    glasses: {
        name: "No Shade, Just Shades",
        prods: {
            6722522251462: { id: 6722522251462, name: '"Not Ya Mama\'s Aviators" - Black', loaded: false },
            6722522546374: { id: 6722522546374, name: '"Not Ya Mama\'s Aviators" - Brown & Tortoise', loaded: false },
            6722522808518: { id: 6722522808518, name: '"Not Ya Mama\'s Aviators" - Hunter Green', loaded: false },
            6722522153158: { id: 6722522153158, name: '"Not Ya Mama\'s Aviators" - Ivory', loaded: false },
            6712238932166: { id: 6712238932166, name: '"Not Ya Mama\'s Aviators" - Soft Pink', loaded: false },
            6712250826950: { id: 6712250826950, name: '"Certified Hater Blockers" - Black & Gold', loaded: false },
            6722519957702: { id: 6722519957702, name: '"Certified Hater Blockers" - Black & Silver', loaded: false },
            6722520678598: { id: 6722520678598, name: '"Certified Hater Blockers" - Coffee & Cream', loaded: false },
            6722520514758: { id: 6722520514758, name: '"Certified Hater Blockers" - Merlot', loaded: false },
            6722520907974: { id: 6722520907974, name: '"Certified Hater Blockers" - Pink', loaded: false },
            6722520776902: { id: 6722520776902, name: '"Certified Hater Blockers" - Tortoise', loaded: false },
        }
    },
    masks: {
        name: "Masks, Not Just For Superheroes",
        prods: {
            6712209801414: { id: 6712209801414, name: '"Mermaid Silver" Reusable Sequin Mask', loaded: false },
            6712209572038: { id: 6712209572038, name: '"Ruby Red Slippers" Reusable Sequin Mask', loaded: false },
            6712209080518: { id: 6712209080518, name: '"Livin\' My Life Like It\'s Golden" Reusable Sequin Mask', loaded: false },
            6630188417222: { id: 6630188417222, name: '"Black As My Soul" Reusable Sequin Mask', loaded: false },
        }
    },
    jewelery: {
        name: 'Run the Jewels',
        prods: {
            6630362120390: { id: 6630362120390, name: 'Frida Kahlo Beaded Earrings', loaded: false },
            6730915184838: { id: 6730915184838, name: 'Threader Drop Bar Earrings', loaded: false },
            6730921738438: { id: 6730921738438, name: 'Crystal Bar Studs', loaded: false },
            6730923212998: { id: 6730923212998, name: 'X Ear Cuffs', loaded: false },
        }
    },
    bags: {
        name: "Secure The Bag Sis",
        prods: {
            6630365659334: { id: 6630365659334, name: 'resting beach face', loaded: false },
            6630231998662: { id: 6630231998662, name: '"Sealed with A Kiss" Beaded Clutch', loaded: false },
            6781325607110: { id: 6781325607110, name: '"None of This Was On My List" - Tote', loaded: false },

        }
    },
    beach: {
        name: 'Beach, Please...',
        prods: {
            6630413041862: { id: 6630413041862, name: '"Talk to the Sand" Beach Hat', loaded: false },
            6630162366662: { id: 6630162366662, name: 'All Throws', loaded: false },
            6630365659334: { id: 6630365659334, name: 'resting beach face', loaded: false },
            6722522251462: { id: 6722522251462, name: '"Not Ya Mama\'s Aviators" - Black', loaded: false },
            6722522546374: { id: 6722522546374, name: '"Not Ya Mama\'s Aviators" - Brown & Tortoise', loaded: false },
            6722522808518: { id: 6722522808518, name: '"Not Ya Mama\'s Aviators" - Hunter Green', loaded: false },
            6722522153158: { id: 6722522153158, name: '"Not Ya Mama\'s Aviators" - Ivory', loaded: false },
            6712238932166: { id: 6712238932166, name: '"Not Ya Mama\'s Aviators" - Soft Pink', loaded: false },
            6712250826950: { id: 6712250826950, name: '"Certified Hater Blockers" - Black & Gold', loaded: false },
            6722519957702: { id: 6722519957702, name: '"Certified Hater Blockers" - Black & Silver', loaded: false },
            6722520678598: { id: 6722520678598, name: '"Certified Hater Blockers" - Coffee & Cream', loaded: false },
            6722520514758: { id: 6722520514758, name: '"Certified Hater Blockers" - Merlot', loaded: false },
            6722520907974: { id: 6722520907974, name: '"Certified Hater Blockers" - Pink', loaded: false },
            6722520776902: { id: 6722520776902, name: '"Certified Hater Blockers" - Tortoise', loaded: false },
            6697456042182: { id: 6697456042182, name: 'Sleeveless Scoop Neck Maxi Dress', loaded: false },
            6697434579142: { id: 6697434579142, name: 'Boho Teal Kimono', loaded: false },
            6697444442310: { id: 6697444442310, name: 'Crochet Medallion Tassel Kimono', loaded: false },
        }
    }
}



export const ShopifyBuy = window.ShopifyBuy;

export function loadScript(cb) {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = cb;
}



export function createElement(id, section) {
    var client = ShopifyBuy.buildClient({
        domain: 'kikis-she-shed.myshopify.com',
        storefrontAccessToken: process.env.REACT_APP_TAFS_KEY,
    });

    const prod = objBySections[section].prods[id];
    if (prod.loaded) { return }
    objBySections[section].prods[id].loaded = true;

    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
            id: id,
            node: document.getElementById((`product-component-${id}-${section}`)),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: options
        });
    });
}