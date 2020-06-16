import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import CovidList from './components/CovidList.js';
import './App.css';

function App() {
  const [covidData, setCovidData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentCountries = covidData.slice(indexOfFirstProject, indexOfLastProject);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(covidData.length / projectsPerPage); i++) {
      pageNumbers.push(i);
  }

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://api.covid19api.com/countries')
        .then(res => {
          console.log(res.data);
          setCovidData(res.data);
        })
        .catch(err => {
          console.log(err, 'err- data not retrieved');
        });
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="numRow">
        {pageNumbers.map(number => {
          return (
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          )
        })}
      </div>
      <CovidList covidData={currentCountries} />
      <div className="numRow">
        {pageNumbers.map(number => {
          return (
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
