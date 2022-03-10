import axios from "axios";

// API 요청할 때 공통 URL을 정의해서 사용 할 수 있다.
const instance = axios.create ({
    baseURL: "https://api.themoviedb.org/3",
});

// 예)
// https://api.themoviedb.org/3/abcd / 의 url에 존재하는 자원을 요청하기 위해서
// instance.get('/abcd'); / get메소드를 통해서 뒤에 이어질 url을 넣어주면 위의 url에서 자원을 요청 할 수 있다.

export default instance;