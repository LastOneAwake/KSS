import logo from './assets/Asset 1.svg';
import './spaStyle.scss';

function App() {
    return (
        <div className="App">
            <div id={'floatingContactButton'}>
                <span/>
                <span/>
                <span/>
            </div>
            <div id={'splash'} className={'largeSection'}>
            <img src={logo}/>
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
