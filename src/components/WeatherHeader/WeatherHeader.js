import "./WeatherHeader.module.css";
import { useEffect, useState } from "react";
import myAxios from "../../helpers/axiosHelper/AxiosHelper";
import { geoApi, weatherApi } from "../../API/api";

const WeatherHeader = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const fetchLoc = async () => {
      try {
        const res = await myAxios(geoApi);
        return res.data.city;
      } catch (err) {
        console.error(err.name + ": " + err.message);
      }
    };

    const fetchData = async () => {
      let city = await fetchLoc();
      setWeather((prevState) => {
        return {
          ...prevState,
          city,
        };
      });
      try {
        const url = `${weatherApi}?q=${city}&appid=${apiKey}`;
        const res = await myAxios(url);
        setWeather((prevState) => {
          return {
            ...prevState,
            descp: res.data.weather[0].description,
            temp: res.data.main.temp - 273.15,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
          };
        });
      } catch (err) {
        console.error(err.name + ": " + err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="winfo">
        Weather information for {weather.city ? weather.city : "Loading..."}
      </div>
      <div className="Weath">
        <div className="welement">
          Weather: {weather.descp ? weather.descp : "Loading..."}
        </div>
        <div className="welement">
          Temperature :{" "}
          {weather.temp ? ` ${weather.temp.toFixed(2)}\u00B0C` : "Loading..."}
        </div>
        <div className="welement">
          Humidity:{weather.humidity ? ` ${weather.humidity} %` : "Loading..."}
        </div>
        <div className="welement">
          Pressure: {weather.press ? ` ${weather.press} mb` : "Loading..."}
        </div>
      </div>
    </div>
  );
};
export default WeatherHeader;
