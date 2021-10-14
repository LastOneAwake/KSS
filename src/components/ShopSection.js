import React, { useEffect, useRef, useContext, useState } from 'react';
import CollectionContainer from './CollectionContainer';
import Cart from './Cart';

import './shopSection_Collection.scss';
import './heartLoader.scss'

import { ShopContext } from './shopContext';
import svgcart from '../assets/smIcons/cartSVG2.svg'

export default function ShopSection({ currentView, setSelectedProductObj }) {

  const { collections, isCartOpen, openCart, collectionNames, collectionsByName } = useContext(ShopContext);
  let initSec = collections.length ? (collectionsByName?.featured ? collectionsByName.featured : collectionsByName['Tops']) : null;
  const shopRef = useRef(null);

  useEffect(() => {


  }, [currentView]);


  let sectionClasses = 'largeSection';
  if (currentView !== 'Shop') {
    sectionClasses += ' inactive';
  }

  const [currSec, setCurrSec] = useState(initSec);


  if (!currSec) {
    return (
      <div
        id='shop'
        className={sectionClasses}
      >
        <div id='shopHeader'>
          <div id='stsSpacer'>
            <div id='stsHolder'>
              <div id='stsL'>
                Shop
              </div>
              <div id='stsR'>
                <div className='stsSingle'>The</div>
                <div className='stsSingle'>Shed</div>
              </div>
            </div>
          </div>

          <div id='loadingSection'>
            Fetching the Goods!
            <div
              className="lds-heart">
              <div />
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      id='shop'
      className={sectionClasses}
    >
      {isCartOpen &&
        <Cart />
      }
      <div
        id='cartButton'
        className='floatingButton'
        onClick={() => {
          openCart();
        }}
      >
        <img
          src={svgcart}
          height='1080'
          width='1080'
          alt='testimg'
        />
      </div>
      <div
        id='menuButton'
        className='floatingButton'

        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}
      >
        <span
          id='upBoy'
        >
          {'<'}
        </span>
      </div>
      <div id='shopHeader'>
        <div id='stsSpacer'>
          <div id='stsHolder'>
            <div id='stsL'>
              Shop
            </div>
            <div id='stsR'>
              <div className='stsSingle'>The</div>
              <div className='stsSingle'>Shed</div>
            </div>
          </div>
        </div>



        <div id='shopMenuHolder'>
          <div id='shopMenu'>
            <div id='shopByCategory'>
              Shop By Category
            </div>
            <div id='navItems'>
              {collectionNames.map((name, i) => {
                let currClass = name === currSec.title ? ' current' : '';
                return (
                  <div
                    className={'shopSectionNavItem fourBy' + currClass}
                    key={name + 'shopmenunavitem' + i}
                    tabIndex='0'
                    onClick={() => {
                      setCurrSec(collectionsByName[name]);
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrSec(collectionsByName[name]);
                      }
                    }}
                  >{name}</div>
                )
              })}
            </div>
          </div>
        </div>

      </div>


      <div
        id='shopHolder'
        ref={shopRef}
      >
        <CollectionContainer
          key={currSec.id}
          id={currSec.id}
          sectionName={currSec.handle}
          products={currSec.products}
          setSelectedProductObj={setSelectedProductObj}
          openCart={openCart}
        />

      </div>
    </div>
  );
}

