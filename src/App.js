import logo from './assets/logo.svg';
import './spaStyle.scss';
import './components/navMenu.scss';
import './shopify2.scss';
import React, { useState, useRef, useEffect } from 'react';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

const navMenuOptions = [
    'Home',
    'Shop',
    'Contact',
    'FAQs'
]
function getBreakpoints() {
    const vw = window.innerWidth;
    return {
        isS: vw < 700,
        isM: vw < 1100 && vw > 700,
        isL: vw > 2000,
        width: vw
    }
}
function App() {
    const [currentView, setCurrentView] = useState('Home');
    const shopref = useRef(null);
    const [breakpoints, setBreakpoints] = useState(getBreakpoints());

    useEffect(() => {
        window.addEventListener('resize', () => {
            setBreakpoints(getBreakpoints());
        })
        return () => {
            window.removeEventListener('resize', () => {
                setBreakpoints(getBreakpoints());
            })
        }
    }, []);


    function renderNav() {
        return (
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
                            tabIndex='0'
                            onClick={() => {
                                setCurrentView(opt);
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'auto'
                                  });
                            }}
                        >
                            {opt}
                        </div>
                    );
                })}
            </div>);
    }

    return (
        <div className="App">
            <div id='topBanner'>Free Shipping On All Orders Over $50!</div>
            {!breakpoints.isS && renderNav()}

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
                    setCurrentView={setCurrentView}
                />
            }
            {breakpoints.isS && renderNav()}
            <Footer
                currentView={currentView}
            />


        </div>
    );
}

export default App;




