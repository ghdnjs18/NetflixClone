import './App.css';
import requests from './requests';
import {Contents} from './components';

function App() {
  return (
    <div className="App">
      <Contents title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Contents title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Contents title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Contents title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Contents title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Contents title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Contents title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Contents title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
