import './App.css';
import requests from './requests';
import {Contents} from './components';

function App() {
  return (
    <div className="App">
      <Contents title="넷플릭스 오리지널" fetchUrl={requests.fetchNetflixOriginals}/>
      <Contents title="주간 인기 콘텐츠" fetchUrl={requests.fetchTrending}/>
      <Contents title="넷플릭스 인기 콘텐츠" fetchUrl={requests.fetchTopRated}/>
      <Contents title="액션 영화" fetchUrl={requests.fetchActionMovies}/>
      <Contents title="코미디 영화" fetchUrl={requests.fetchComedyMovies}/>
      <Contents title="공포 영화" fetchUrl={requests.fetchHorrorMovies}/>
      <Contents title="로맨스 영화" fetchUrl={requests.fetchRomanceMovies}/>
      <Contents title="다큐멘터리" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
