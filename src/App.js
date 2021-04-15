import logo from './assets/Asset 1.svg';
import './spaStyle.scss';

async function auth() {
    let RD_URI = window.location;
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
            grant_type: "authorization_code", //client_credentials
            redirect_uri: RD_URI,
            client_secret: 'cdc741e1cc504f78975ce90aaae2fce8', //process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
            client_id: 'b07a1c5cc88c475a82e85b9af646efc6', //process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        }
    };
    await fetch('https://accounts.spotify.com/api/token', requestOptions)
        .then(response => console.log(response.json()));
}

function App() {


    auth();
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
