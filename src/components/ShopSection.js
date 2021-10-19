import React, { useEffect, useRef, useContext, useState } from 'react';
import CollectionContainer from './CollectionContainer';
import Cart from './Cart';

import './shopSection_Collection.scss';
import './heartLoader.scss'

import { ShopContext } from './shopContext';
import svgcart from '../assets/smIcons/cartSVG2.svg'

export default function ShopSection({ breakpoints, setSelectedProductObj }) {
  const { collections, isCartOpen, collectionsAvailable, openCart, collectionNames, collectionsByName } = useContext(ShopContext);

  let sectionClasses = 'largeSection';
  window.history.pushState({}, '', `?section=shop`);

  //used to scroll to shop element
  const shopRef = useRef(null);
  const [currSec, setCurrSec] = useState(collections[0]);
  const [displayBttButton, setDisplayBttButton] = useState(false);

  useEffect(() => {
    setCurrSec(collections[0]);
  }, [collections])

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY < 50) {
        setDisplayBttButton(false);
      } else {
        setDisplayBttButton(true)
      }
    })
    return (
      window.removeEventListener('scroll', (e) => {
        if (window.scrollY < 50) {
          setDisplayBttButton(false);
        } else {
          setDisplayBttButton(true)
        }
      })
    )
  }, [])

  if (collectionsAvailable) {
    let secToDisplay = currSec;
    if (!currSec) {
      secToDisplay = collections[0];
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
          className={'floatingButton' + (displayBttButton ? '' : ' atTop')}
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
                  let currClass = name === secToDisplay.title ? ' current' : '';
                  return (
                    <div
                      className={'shopSectionNavItem fourBy' + currClass}
                      key={name + 'shopmenunavitem' + i}
                      tabIndex='0'
                      onClick={() => {
                        setCurrSec(collectionsByName[name]);
                        if (breakpoints.isS) {
                          shopRef.current.scrollIntoView({ behavior: 'smooth' });
                        }
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
            key={secToDisplay.id}
            id={secToDisplay.id}
            sectionName={secToDisplay.handle}
            products={secToDisplay.products}
            openCart={openCart}
            setSelectedProductObj={setSelectedProductObj}
          />

        </div>
      </div>
    );
  }
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

