import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const CarbonEmissions = () => {
  const API_url = 'https://api.v2.emissions-api.org/api/v2/';

  const [countries, setCountries] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
    };

    fetchData();
  }, []);

  return (
    <div className='carbonEmissions-container'>
      <div className='carbonEmissions-Header'>
        <h1>We need human change, not climate change.</h1>
        <p>Dive into the critical issues impacting our planet's health. Explore the harsh realities of forest loss, desertification, toxic releases, CO2 surges, and land erosion. It's time to confront the truth and rally for change.</p>
      </div>
    </div>
  );
};

export default CarbonEmissions;