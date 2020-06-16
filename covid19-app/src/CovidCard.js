import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryGraph from './CountryGraph.js';

const CovidCard = (props) => {
  const [singleCountry, setSingleCountry] = useState(props.data);

  return (
    <div className='card'>
      <p>{props.data.Country}</p>
      <CountryGraph singleCountry={props.data}/>
    </div>
  )
}

export default CovidCard;
