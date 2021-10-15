import React from 'react';
const WeatherContent = ({weatherData}) => {
    return ( 
        <div>
            <div className="card shadow">
                <div className="card-body text-center">
                    <h5 className="my-2">{weatherData.name}</h5>
                    <h1 className="my-5">{weatherData.main.temp}°F</h1>
                    <p className="my-2">{weatherData.weather[0].main}</p>

                </div>
            </div>
        </div>
      );
}
 
export default WeatherContent;