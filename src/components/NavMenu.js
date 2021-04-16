import React from 'react';

const menuOptions = ['Home', 'About', 'Launch Details', 'Contact', 'X'];

export default function NavMenu({dismissNavMenu, currentView, updateCurrentView}) {
    return (
        <div id={'transBG'} onClick={dismissNavMenu}>
            <div id={'navMenu'}>
                {menuOptions.map(option => {
                    const classes = 'menuOption' + (currentView === option ? ' currentView' : '');
                    return (
                        <div
                            id={'menuOption_' + option}
                            className={classes}
                            onClick={()=>{
                                if(option === 'X'){
                                    dismissNavMenu();
                                }else{
                                    updateCurrentView(option);
                                }
                            }}
                        >
                            {option}
                        </div>)
                })}
                <div id={'animatedMenuBG'}/>

            </div>
        </div>
    )
}