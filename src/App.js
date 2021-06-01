import logo from './assets/logo.svg';
import './spaStyle.scss';
import './shopfiy1.scss';
import './shopify2.scss';
import { useState } from 'react';
import NavMenu from './components/NavMenu';
import JoinMailingListForm from './components/JoinMailingListForm';
import About from './components/About';
import ShopifyTest from './components/shopifyTest';


function App() {
    const [currentView, updateCurrentView] = useState('Home');
    const [menuOpen, updateMenuOpen] = useState(false);
    return (
        <div className="App">
            <div id={'splash'} className={'largeSection'}>
                <img src={logo} alt={'KSS Logo'} />
            </div>
            <ShopifyTest />
        </div>
    );
}

export default App;




