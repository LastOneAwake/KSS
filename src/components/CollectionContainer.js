import React from 'react';
import ProductContainer from './ProductContainer';
import './collectionContainer.scss';


const categoryPositions = {
    tops: 1,
    bottoms: 2,
    dresses: 3,
    jewelry: 4,
    accessories: 5,
    handbags: 6,
    decor: 7
}

export default function CollectionContainer({ id, sectionName, products, setSelectedProductObj, openCart }) {
    //being that this is the main ID we'll use the default dropdown size
    /**
     * TODO: ADD DEFAULT
     */

    if (products.length === 0) {
        return ('');
    }
    products = products.sort((a, b) => {
        if (categoryPositions[a] < categoryPositions[b]) {
            return -1
        }
        return 1;
    })
    return (
        <div
            id={`${sectionName}_section`}
            className={'collectionContainer ' + sectionName}
        >
            <div className='collectionHeader'>{sectionName}</div>
            {/* this ID has to match the id in the createCollection method as that method renders into this element*/}
            <div
                id={`${sectionName}ProductHolder`}
                className={'productsHolder'}
            >
                {products.map(product => {
                    return (
                        <ProductContainer
                            key={product.id}
                            product={product}
                            sectionName={sectionName}
                            setSelectedProductObj={setSelectedProductObj}
                            openCart={openCart}
                        />
                    )
                })}
            </div>
        </div>
    );
}