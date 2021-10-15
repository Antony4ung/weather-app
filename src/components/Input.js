
import React,{ useState } from 'react';
import WeatherContent from './WeatherContent';
import Welcome from './Welcome';
const Contents = () => {
    const ApiKey = '5b51d0b7fa4bf8dad71ffdfd1648907b';
    const [city, setcity] = useState('');
    const [weatherData,setWeatherData] = useState([{}])
    const [showWelcome, setshowWelcome] = useState(true);
    
    
    const handleSubmit = (e) =>{

        e.preventDefault();
        if(city === ''){
            alert('Enter City or Country !!')
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${ApiKey}`)
        .then(res=>res.json())
        .then(data=>{setWeatherData(data);console.log(weatherData);setcity('')})
        .catch(err=>console.log(err))  
        setshowWelcome(false) 
    }

    

    return ( 
    <div className="d-flex justify-content-center mt-5 ">
        <div>
        <form onSubmit={handleSubmit} className="d-flex">
            <input className="form-control" value={city} onChange={(e)=>setcity(e.target.value)} placeholder="Enter A City or Country . . ."/>
            <button className="mx-1 btn btn-warning">Search</button>
        </form>
        <div className="mt-5">
        
        {showWelcome && <Welcome/>}

        {typeof weatherData.main === 'undefined' ? <></> : <WeatherContent weatherData={weatherData}/>}

        {weatherData.cod === "404" ? <p className="text-danger">You must enter a valid City or Country Name </p> : <> </>}
        

        
        </div>
        </div>
    </div>
     );
}
 
export default Contents;