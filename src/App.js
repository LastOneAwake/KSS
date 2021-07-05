import logo from './assets/logo.svg';
import './spaStyle.scss';
import './components/navMenu.scss';
import './shopify2.scss';
import React, { useState, useRef } from 'react';
import ShopSection from './components/ShopSection';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

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
                    let selected = false;
                    if (currentView === opt) {
                        selected = true;
                    }
                    return (
                        <div
                            className={'navMenuOption' + (selected ? ' selected' : '')}
                            key={`${opt}_navOption`}
                            onClick={() => {
                                setCurrentView(opt);
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            {opt}
                        </div>
                    );
                })}
            </div>


            {currentView === 'Home' &&
                <div
                    id={'splash'}
                    className={'largeSection' + (currentView !== 'Home' ? ' inactive' : '')}
                >
                    <img src={logo} alt={'KSS Logo'} />
                </div>
            }


            <ShopSection
                shopRef={shopref}
                currentView={currentView}
            />

            {currentView === 'Contact' &&

                <Contact
                    currentView={currentView}
                />
            }
            {currentView === 'FAQs' &&
                <FAQ
                    currentView={currentView}
                />
            }




        </div>
    );
}

export default App;




