import React, { useEffect, useState } from "react";
import "./weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Nagpur"); //add the user enterd city into the api get  data based on enterd city

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=42c29e5fac81fbb4eed1dc73bd452a95`;
      const response = await fetch(url);
      console.log("raw response", response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <h4>Check your city temperature here!</h4>
      <div className="box">
        <div className="inputField">
          <input
            type="search"
            onChange={(event) => {
              setSearch(event.target.value); //update setSearch with every single character of user enterd
            }}
          />
          {!city ? (
            <p className="error">No data found</p>
          ) : (
            <div>
              <div className="info">
                <h1 className="location">{search}</h1>
                <h2 className="temperature">{city.temp}Cel</h2>
                <h3 className="temp_min_max">
                  Max:{city.temp_max}Cel | Min:{city.temp_min}Cel
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
