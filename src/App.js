import logo from './assets/logo.svg';
import './spaStyle.scss';
import './shopfiy1.scss';
import './shopify2.scss';
import React, { useState, useRef } from 'react';
import About from './components/About';
import ShopifyTest from './components/ShopSection';

const navMenuOptions = [
    'Home',
    'Shop',
    'Contact',
    'FAQs'
]

function App() {
    const [currentView, setCurrentView] = useState('Home');
    const shopref = useRef(null);

    return (
        <div className="App">
            <div id='topBanner'>TEST BANNER</div>
            <div id='topNav'>
                {navMenuOptions.map(opt => {
                    return (
                        <div
                            className='navMenuOption'
                            key={`${opt}_navOption`}
                            onClick={() => {
                                if (opt === 'Shop') {
                                    setCurrentView('Shop');
                                    // let shopElem = document.getElementById('shop');
                                    // shopElem.scrollIntoView({ behavior: "smooth" }, true);
                                    window.scrollTo(0, 1000);

                                } else if (opt === 'Home') {
                                    setCurrentView('Home');
                                } else {
                                    setCurrentView(opt);
                                }
                            }}
                        >
                            {opt}
                        </div>
                    );
                })}
            </div>
            {(currentView === 'Home' || currentView === 'Shop') &&
                <React.Fragment>
                    <div id={'splash'} className={'largeSection'}>
                        <img src={logo} alt={'KSS Logo'} />
                    </div>
                    <ShopifyTest
                        ref={shopref}
                    />
                </React.Fragment>
            }
        </div>
    );
}

export default App;




