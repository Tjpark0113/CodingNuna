import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { WeatherBox } from './component/WeatherBox';
import { WeatherButton } from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
//3. 5개의 버튼(1개는 현재 위치, 4개는 다른도시)
//4. 도시버튼을 클릭할때마다 도시별로 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState('');
  const [loading,setLoading] = useState(false);
  const [apiError,setAPIError] = useState("");
  const cities = ['paris','new york', 'tokyo', 'seoul'];
  

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon= position.coords.longitude;
      // console.log("현재위치",lat,lon)
      getWeatherByCurrentLocation(lat,lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    try{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=96972a56efec4d3494f7641a576ed6af&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data",data);
    setWeather(data);
    setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }

  const getWeatherByCity= async ()=>{
    try { 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96972a56efec4d3494f7641a576ed6af&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log("Data",data);
    setWeather(data);
    setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }

  }

  useEffect(()=>{
    if(city==""){
      getCurrentLocation();
    }else {
      getWeatherByCity();
    }
  },[city]);


  // useEffect(()=>{
  //   // console.log("city?",city)
  //   getWeatherByCity()
  // },[city])

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  }

  return (
    <div>
      {loading
      ?(
        <div className='container'>
      <ClipLoader color="#f88c6b" loading={loading} size={150} />
      </div>)
      : !apiError ? (
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange}/>
      </div>
      ) : (
        apiError
      )}
      
    </div>
  );
}

export default App;
