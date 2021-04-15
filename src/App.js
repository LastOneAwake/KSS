import logo from './assets/whiteSVGLogo.svg';
import './spaStyle.scss';
import {useState} from 'react';
import NavMenu from './components/NavMenu';

function App() {
    const [currentView, updateCurrentView] = useState('home');
    const [menuOpen, updateMenuOpen] = useState(false);
    return (
        <div className="App">
            <div
                id={'floatingContactButton'}
                onClick={e => {
                 updateMenuOpen(!menuOpen);
                }}
            >
                <span/>
                <span/>
                <span/>
            </div>
            {menuOpen && <NavMenu/>}
            <div id={'splash'} className={'largeSection'}>
                <img src={logo} alt={'KSS Logo'}/>
            </div>
            <div id={'about'} className={'largeSection'}>
                about
            </div>
            <div id={'launchDetails'} className={'largeSection'}>
                launch
            </div>
            <div id={'contact'} className={'largeSection'}>
                contact
            </div>

        </div>
    );
}

export default App;
