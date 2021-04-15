import React, {useState} from 'react';

const menuOptions = ['Home', 'About', 'Launch Details', 'Contact'];

export default function NavMenu({updateMenuIsOpen}) {
    return (
        <div id={'transBG'}>
            <div id={'navMenu'}>
                {menuOptions.map(option => {
                    return (
                        <div id={'menuOption_' + option} className={'menuOption'}>
                            {option}
                        </div>)
                })}
                <div id={'animatedMenuBG'}/>

            </div>
        </div>
    )
}