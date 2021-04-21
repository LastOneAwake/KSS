import logo from './assets/logo.svg';
import './spaStyle.scss';
import {useState} from 'react';
import NavMenu from './components/NavMenu';
import JoinMailingListForm from './components/JoinMailingListForm';
import About from './components/About';
function App() {
    const [currentView, updateCurrentView] = useState('Home');
    const [menuOpen, updateMenuOpen] = useState(false);
    return (
        <div className="App">
            {/*<div*/}
            {/*    id={'floatingContactButton'}*/}
            {/*    onClick={e => {*/}
            {/*        updateMenuOpen(!menuOpen);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <span/>*/}
            {/*    <span/>*/}
            {/*    <span/>*/}
            {/*</div>*/}
            {menuOpen &&
            <NavMenu
                dismissNavMenu={() => {
                    updateMenuOpen(false)
                }}
                currentView={currentView}
                updateCurrentView={updateCurrentView}
            />
            }
            {(currentView === 'Home') &&
            <div id={'splash'} className={'largeSection'}>
                <div id={'bgHolder'}/>
                <img src={logo} alt={'KSS Logo'}/>

                <JoinMailingListForm/>
            </div>
            }

            {(currentView === 'About') && <About/>}
            {(currentView === 'Launch Details') &&
            <div id={'launchDetails'} className={'largeSection'}>
                launch
            </div>
            }
            {(currentView === 'Contact') &&
            <div id={'contact'} className={'largeSection'}>
                contact
            </div>
            }

        </div>
    );
}

export default App;
