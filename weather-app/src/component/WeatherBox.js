import React from 'react'

export const WeatherBox = ({weather}) => {
    console.log("weather?", weather);
  return (
    <div className='weather-box'>
        <h1>
            현재위치: {weather?.name}
        </h1>
        <h1>
            현재온도: {weather?.main.temp}C
        </h1>
        <h1>
            날씨상태: {weather?.weather[0].description}
        </h1>
    </div>
  )
}
