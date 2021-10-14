import logo from './assets/logo.svg';
import './spaStyle.scss';
import './components/navMenu.scss';
import React, { useState, useRef, useEffect } from 'react';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import ShopProvider from './components/shopContext';
import QuickViewModal from './components/QuickViewModal';

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
    const [selectedProductObj, setSelectedProductObj] = useState(null);


    useEffect(() => {
        window.addEventListener('resize', () => {
            setBreakpoints(getBreakpoints());
        })
        window.addEventListener('onbeforeunload', () => {
            setSelectedProductObj(null);
        })
        return () => {
            window.removeEventListener('resize', () => {
                setBreakpoints(getBreakpoints());
            })
            window.removeEventListener('onbeforeunload', () => {
                setSelectedProductObj(null);

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
    console.log('selectedProductObj', selectedProductObj);

    return (
        <ShopProvider>
            <div className="App">
                {selectedProductObj?.id &&
                    <QuickViewModal
                        productObj={selectedProductObj}
                        productTitle={selectedProductObj}
                        variantsArray={selectedProductObj.variants}
                        dismissDetailWindow={() => {
                            setSelectedProductObj(null);
                        }}
                    />
                }
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

                {currentView === 'Shop' &&
                    <ShopSection
                        shopRef={shopref}
                        currentView={currentView}
                        selectedProductObj={selectedProductObj}
                        setSelectedProductObj={setSelectedProductObj}
                    />
                }
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
        </ShopProvider>
    );
}

export default App;




