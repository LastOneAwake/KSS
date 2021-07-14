import React, { useState, useRef } from 'react';
import ComponentTemplate from './shopifyItems/ComponentTemplate';
import './shopSection.scss';

const objBySections = {
  shirts: {
    name: "Say It With Your Chest",
    prods: [
      { id: 6630208012486, name: '"Chic Like Coco" T-shirt', loaded: false },
      { id: 6697421865158, name: '"Thick Thighs x Thin Patience" T-shirt', loaded: false },
    ]
  },
  kimonos: {
    name: "Kimonos? More like KimoYES!",
    prods: [
      { id: 6697434579142, name: 'Boho Teal Kimono', loaded: false },
      { id: 6697444442310, name: 'Crochet Medallion Tassel Kimono', loaded: false },
    ]
  },
  dresses: {
    name: 'Dressed To The Max',
    prods: [
      { id: 6697456042182, name: 'Sleeveless Scoop Neck Maxi Dress', loaded: false },
    ]
  },
  glasses: {
    name: "No Shade, Just Shades",
    prods: [
      { id: 6722522251462, name: '"Not Ya Mama\'s Aviators" - Black', loaded: false },
      { id: 6722522546374, name: '"Not Ya Mama\'s Aviators" - Brown & Tortoise', loaded: false },
      { id: 6722522808518, name: '"Not Ya Mama\'s Aviators" - Hunter Green', loaded: false },
      { id: 6722522153158, name: '"Not Ya Mama\'s Aviators" - Ivory', loaded: false },
      { id: 6712238932166, name: '"Not Ya Mama\'s Aviators" - Soft Pink', loaded: false },
      { id: 6712250826950, name: '"Certified Hater Blockers" - Black & Gold', loaded: false },
      { id: 6722519957702, name: '"Certified Hater Blockers" - Black & Silver', loaded: false },
      { id: 6722520678598, name: '"Certified Hater Blockers" - Coffee & Cream', loaded: false },
      { id: 6722520514758, name: '"Certified Hater Blockers" - Merlot', loaded: false },
      { id: 6722520907974, name: '"Certified Hater Blockers" - Pink', loaded: false },
      { id: 6722520776902, name: '"Certified Hater Blockers" - Tortoise', loaded: false },
    ]
  },
  masks: {
    name: "Masks, Not Just For Superheroes",
    prods: [
      { id: 6712209801414, name: '"Mermaid Silver" Reusable Sequin Mask', loaded: false },
      { id: 6712209572038, name: '"Ruby Red Slippers" Reusable Sequin Mask', loaded: false },
      { id: 6712209080518, name: '"Livin\' My Life Like It\'s Golden" Reusable Sequin Mask', loaded: false },
      { id: 6630188417222, name: '"Black As My Soul" Reusable Sequin Mask', loaded: false },
    ]
  },
  jewelery: {
    name: 'Run the Jewels',
    prods: [
      { id: 6630362120390, name: 'Frida Kahlo Beaded Earrings', loaded: false },
      { id: 6730915184838, name: 'Threader Drop Bar Earrings', loaded: false },
      { id: 6730921738438, name: 'Crystal Bar Studs', loaded: false },
      { id: 6730923212998, name: 'X Ear Cuffs', loaded: false },
    ]
  },
  bags: {
    name: "Secure The Bag Sis",
    prods: [
      { id: 6630365659334, name: 'resting beach face', loaded: false },
      { id: 6630231998662, name: '"Sealed with A Kiss" Beaded Clutch', loaded: false },
      { id: 6781325607110, name: '"None of This Was On My List" - Tote', loaded: false },
    ]
  },
  beach: {
    name: 'Beach, Please...',
    prods: [
      { id: 6630413041862, name: '"Talk to the Sand" Beach Hat', loaded: false },
      { id: 6630162366662, name: 'All Throws', loaded: false },
      { id: 6630365659334, name: 'resting beach face', loaded: false },
      { id: 6722522251462, name: '"Not Ya Mama\'s Aviators" - Black', loaded: false },
      { id: 6722522546374, name: '"Not Ya Mama\'s Aviators" - Brown & Tortoise', loaded: false },
      { id: 6722522808518, name: '"Not Ya Mama\'s Aviators" - Hunter Green', loaded: false },
      { id: 6722522153158, name: '"Not Ya Mama\'s Aviators" - Ivory', loaded: false },
      { id: 6712238932166, name: '"Not Ya Mama\'s Aviators" - Soft Pink', loaded: false },
      { id: 6712250826950, name: '"Certified Hater Blockers" - Black & Gold', loaded: false },
      { id: 6722519957702, name: '"Certified Hater Blockers" - Black & Silver', loaded: false },
      { id: 6722520678598, name: '"Certified Hater Blockers" - Coffee & Cream', loaded: false },
      { id: 6722520514758, name: '"Certified Hater Blockers" - Merlot', loaded: false },
      { id: 6722520907974, name: '"Certified Hater Blockers" - Pink', loaded: false },
      { id: 6722520776902, name: '"Certified Hater Blockers" - Tortoise', loaded: false },
      { id: 6697456042182, name: 'Sleeveless Scoop Neck Maxi Dress', loaded: false },
      { id: 6697434579142, name: 'Boho Teal Kimono', loaded: false },
      { id: 6697444442310, name: 'Crochet Medallion Tassel Kimono', loaded: false },]
  }
}

const sections = ["shirts", "kimonos", "dresses", "glasses", "masks", "jewelery", "bags", "beach"];
const navItems = [
  { navName: "Tees", secName: 'shirts' },
  { navName: "Kimonos", secName: 'kimonos' },
  { navName: "Dresses", secName: 'dresses' },
  { navName: "Shades", secName: 'glasses' },
  { navName: "Masks", secName: 'masks' },
  { navName: "Jewelery", secName: 'jewelery' },
  { navName: "Bags", secName: 'bags' },
  { navName: "Beach", secName: 'beach' },
];



export default function ShopSection({ shopRef, currentView }) {
  const shirtsRef = useRef(null);
  const kimonosRef = useRef(null);
  const dressesRef = useRef(null);
  const glassesRef = useRef(null);
  const masksRef = useRef(null);
  const jewleryRef = useRef(null);
  const bagsRef = useRef(null);
  const beachRef = useRef(null);



  /**
   load when onscroll scroll distance from top is within 100ish? px of the top of the section.
   load entire section 
   */



  let sectionClasses = 'largeSection';
  if (currentView !== 'Shop') {
    sectionClasses += ' inactive';
  }
  return (
    <div
      id='shop'
      className={sectionClasses}
    >
      <div
        id='bttBtn'
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }}
      >
        {'<'}
      </div>
      <div id='shopHeader'>
        <div id='stsHolder'>
          <div id='stsL'>
            Shop
          </div>
          <div id='stsR'>
            <div className='stsSingle'>The</div>
            <div className='stsSingle'>Shed</div>
          </div>
        </div>
        <div id='blurb'>
          Kiki's She Shed is a California-based, online boutique that believes you shouldn’t have to sacrifice comfort for style.
          Our boutique showcases affordable, size-inclusive wardrobe essentials.
          Each curated collection is designed to inspire and boost your confidence.
        </div>
      </div>
      <div id='shopMenu'>
        {navItems.map((navItem, i) => {
          const name = navItem.navName
          return (
            <div
              className='shopSectionNavItem'
              key={navItem + 'ContactMenu' + i}
              onClick={() => {
                let ref;
                switch (navItem.secName) {
                  case 'kimonos':
                    ref = kimonosRef;
                    break;
                  case 'dresses':
                    ref = dressesRef;
                    break;
                  case 'glasses':
                    ref = glassesRef;
                    break;
                  case 'masks':
                    ref = masksRef;
                    break;
                  case 'jewelery':
                    ref = jewleryRef;
                    break;
                  case 'bags':
                    ref = bagsRef;
                    break;
                  case 'beach':
                    ref = beachRef;
                    break;
                  case 'shirts':
                  default:
                    ref = shirtsRef;
                }


                ref.current.scrollIntoView({ behavior: "smooth" });


              }}
            >{name}</div>
          )
        })}
      </div>
      {sections.map(sectionTypeName => {
        const section = objBySections[sectionTypeName];
        const sectionProds = section.prods;
        const itemsLength = sectionProds.length;
        let subDivision = '';
        if (itemsLength === 1) {
          subDivision = 'single'
        } else if (itemsLength === 2 || (itemsLength % 2 === 0 && itemsLength < 8)) {
          subDivision = 'twoBy';
        }


        let ref;
        switch (sectionTypeName) {
          case 'kimonos':
            ref = kimonosRef;
            break;
          case 'dresses':
            ref = dressesRef;
            break;
          case 'glasses':
            ref = glassesRef;
            break;
          case 'masks':
            ref = masksRef;
            break;
          case 'jewelery':
            ref = jewleryRef;
            break;
          case 'bags':
            ref = bagsRef;
            break;
          case 'beach':
            ref = beachRef;
            break;
          case 'shirts':
          default:
            ref = shirtsRef;
        }
        return (
          <div
            className='ShopSection'
            key={section.name}
            ref={ref}
          >
            <div className='ShopSectionHeader'>{section.name}</div>
            <div
              className={'sectionBody ' + subDivision}
            >

              {section.prods.map((obj) => {
                let id = obj.id;
                return (<ComponentTemplate
                  id={id}
                  section={sectionTypeName}
                  key={`${id}_${section.name}`}
                  className={subDivision}
                />)
              })}
            </div>

          </div>
        );
      })}
    </div>
  );
}


