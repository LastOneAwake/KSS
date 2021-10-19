import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: 'kikis-she-shed.myshopify.com',
    storefrontAccessToken: '508717b1b227262a31a434d890d4875a',
});

class ShopProvider extends Component {
    state = {
        products: [],
        product: {},
        checkout: {},
        collections: [],
        collectionNames: [],
        collectionsByName: {},
        collectionsAvailable: false,
        isCartOpen: false,
    };

    componentDidMount() {
        // this.createCheckout();

        //Check if localStorage has a checkout_id saved
        if (localStorage.checkout) {
            this.fetchCheckout(localStorage.checkout);
        } else {
            this.createCheckout();
        }
        //if there is no checkout_id in localStorage then we will create a new checkout

        //else fetch the checkout from shopify
        this.fetchAllCollections();
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout", checkout.id);
        await this.setState({ checkout: checkout });
    };

    fetchCheckout = async (checkoutId) => {
        client.checkout
            .fetch(checkoutId)
            .then((checkout) => {
                this.setState({ checkout: checkout });
            })
            .catch((err) => console.log(err));
    };

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
            {
                variantId,
                quantity: parseInt(quantity, 10),
            },
        ];

        const checkout = await client.checkout.addLineItems(
            this.state.checkout.id,
            lineItemsToAdd
        );
        this.setState({ checkout: checkout });
        this.openCart();
    };
    updateLineItems = async (variantId, quantity) => {
        const lineItemsToUpdate = [
            {
                id: variantId,
                quantity: parseInt(quantity, 10),
            }
        ];
        client.checkout.updateLineItems(this.state.checkout.id, lineItemsToUpdate)
            .then((checkout) => {
                // Do something with the updated checkout
                this.setState({ checkout: checkout });
                // Quantity of line item 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=' updated to 2
            });
    };

    //lineItemIdsToRemove is an arrya of IDs
    removeLineItems = async (lineItemIdsToRemove) => {
        client.checkout.removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
            .then((checkout) => {
                // Do something with the updated checkout
                this.setState({ checkout: checkout });
            });
    };

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({ products: products });
    };

    fetchAllCollections = async () => {
        const collections = await client.collection.fetchAllWithProducts();
        const collectionNames = collections.map(collection => collection.title);
        const collectionsByName = collections.reduce(
            (obj, item) => Object.assign(obj, { [item.title]: item }), {});

        this.setState({
            collections: collections,
            collectionNames: collectionNames,
            collectionsByName: collectionsByName,
            collectionsAvailable: true
        });
    }

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id);
        this.setState({ product: product });
        return product;
    };

    closeCart = () => {
        this.setState({ isCartOpen: false });
    };
    openCart = () => {
        this.setState({ isCartOpen: true });
    };

    render() {
        return (
            <ShopContext.Provider
                value={{
                    ...this.state,
                    fetchAllProducts: this.fetchAllProducts,
                    fetchProductWithId: this.fetchProductWithId,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    addItemToCheckout: this.addItemToCheckout,
                    updateLineItems: this.updateLineItems,
                    removeLineItems: this.removeLineItems
                }}
            >
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;