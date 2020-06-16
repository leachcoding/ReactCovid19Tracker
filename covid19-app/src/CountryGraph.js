import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const CountryGraph = (props) => {
  console.log(props.singleCountry)
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = () =>{
      axios
        .get(`https://api.covid19api.com/live/country/${props.singleCountry.Slug}/status/confirmed`)
        .then(res => {
          console.log(res);
          setCountryData(res.data);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }

    fetchData();
  }, [props.singleCountry.Slug])

  console.log(countryData);
  if(countryData.length > 0) {
    return (
      <div>
        <LineChart
          width={1250}
          height={550}
          data={countryData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis dataKey="Confirmed"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Active" stroke="orange" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Recovered" stroke="green" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Deaths" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    );
  } else {
    return <p>No data here</p>
  }
}

export default CountryGraph;
