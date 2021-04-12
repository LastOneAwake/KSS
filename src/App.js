import logo from './logo.svg';
import './App.css';
// {
//   method: "POST",
//       url: "https://accounts.spotify.com/api/token",
//     data: {
//   "grant_type":    "authorization_code",
//       "code":          code,
//       "redirect_uri":  myurl,
//       "client_secret": mysecret,
//       "client_id":     myid,
// },
//   success: function(result) {
//     // handle result...
//   },


async function auth() {
console.log('running auth');
    let RD_URI = window.location;
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: JSON.stringify({title: 'React POST Request Example'}),
        data: {
            "grant_type": "authorization_code",
            "redirect_uri": RD_URI,
            "client_secret": 'cdc741e1cc504f78975ce90aaae2fce8', //process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
            "client_id": 'b07a1c5cc88c475a82e85b9af646efc6', //process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        }
    };
    await fetch('https://accounts.spotify.com/api/token', requestOptions)
        .then(response => console.log(response.json()));
}

function App() {


    auth();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>env1: {process.env.REACT_APP_TEST_ENV_VAL}</div>
                <div>env2: {process.env.REACT_APP_TEST_VAR}</div>
                <div>env3: {process.env.REACT_APP_NETLIFY_VAL}</div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
