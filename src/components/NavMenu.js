import React from 'react';

const menuOptions = ['Home', 'About', 'Launch Details', 'Contact', 'X'];

export default function NavMenu({dismissNavMenu, currentView, updateCurrentView}) {
    return (
        <div id={'transBG'} onClick={dismissNavMenu}>
            <div id={'navMenu'}>
                {menuOptions.map(option => {
                    const closeBtn = option === 'X';
                    let classes = 'menuOption' + (currentView === option ? ' currentView' : '');
                    classes += closeBtn ? ' closeButton' : '';
                    return (
                        <div
                            id={'menuOption_' + option}
                            className={classes}
                            onClick={()=>{
                                if(closeBtn){
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