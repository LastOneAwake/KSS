import React, { useState } from 'react';
import ComponentTemplate from './shopifyItems/ComponentTemplate';

const objBySections = {
  shirts: {
    name: "Say It With Your Chest",
    prods: [
      { id: 6630208012486, name: '"Chic Like Coco" T-shirt', loaded: false },
      { id: 6697421865158, name: '"Thick Thighs x Thin Patience" T-shirt', loaded: false },
    ]
  },
  kimonos: {
    name: "Kimonos",
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
      { id: 6697409118406, name: '"Woke Up Like This" Faux Suede Cosmetic Bags', loaded: false },
    ]
  },
  beach: {
    name: 'Beach, Please...',
    prods: [{ id: 6630413041862, name: '"Talk to the Sand" Beach Hat', loaded: false },
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

export default function ShopifyTest() {
  return (
    <div id='shopTest'>

      {sections.map(sectionTypeName => {
        const section = objBySections[sectionTypeName];
     
        return (
          <div className='shopSection'>
            <div className='shopSectionHeader'>{section.name}</div>
            <div className='sectionBody'>

              {section.prods.map((obj) => {
                let id = obj.id;
                console.log(id);
                return (<ComponentTemplate
                  id={id}
                  loaded={obj.loaded}
                  key={id}
                />)
              })}
            </div>

          </div>
        );
      })}
      {/* {objBySections['beach'].prods.map(obj => {
        let id = obj.id;
        console.log(id);
        return (<ComponentTemplate
          id={id}
          loaded={obj.loaded}
          key={id} />)
      })} */}
    </div>
  );
}


