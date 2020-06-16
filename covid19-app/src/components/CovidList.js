import React from 'react';
import CovidCard from './CovidCard.js';

const CovidList = (props) => {
  console.log(props, 'props');
  return (
    <div>
      {props.covidData.map((item,index) => {
        return <CovidCard key={index} data={item}/>
      })}
    </div>
  )
}

export default CovidList;
