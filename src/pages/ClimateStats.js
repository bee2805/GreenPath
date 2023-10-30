import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Counter from '../components/Counter';

const CarbonEmissions = () => {
  const [environmentData, setEnvironmentData] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://live-world-data.p.rapidapi.com/category/Environment',
    headers: {
      'X-RapidAPI-Key': '588892d41emsha64adc852b6853bp1a24d1jsn14df02e4a17d',
      'X-RapidAPI-Host': 'live-world-data.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setEnvironmentData(response.data);
        console.log(response.data);

        // Trigger the animation when the data is loaded
        handleAnimation();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [options]); // Include 'options' as a dependency to avoid the eslint error

  const handleAnimation = () => {
    const sections = document.querySelectorAll('.deforestation, .desertification, .chemicals, .co2, .erosion');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        section.classList.add('visible');
      }
    });

    // Add event listener for scrolling to check visibility
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('.deforestation, .desertification, .chemicals, .co2, .erosion');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible && !section.classList.contains('visible')) {
        section.classList.add('visible');
      }
    });
  };

  return (
    <div className='carbonEmissions-container'>
      <div className='carbonEmissions-Header'>
        <h1>We need <strong>human change</strong>, <br/>NOT climate change.</h1>
      </div>

      <div className='deforestation'>
        <Counter counter={environmentData?.[0]?.counter} counterDescription={environmentData?.[0]?.item}/>
      </div>

      <div className='desertification'>
        <Counter counter={environmentData?.[1]?.counter} counterDescription={environmentData?.[1]?.item}/>
      </div>

      <div className='chemicals'>
        <Counter counter={environmentData?.[2]?.counter} counterDescription={environmentData?.[2]?.item}/>
      </div>

      <div className='co2'>
        <Counter counter={environmentData?.[3]?.counter} counterDescription={environmentData?.[3]?.item}/>
      </div>

      <div className='erosion'>
        <Counter counter={environmentData?.[4]?.counter} counterDescription={environmentData?.[4]?.item}/>
      </div>

      <div className='carbonEmissions-Header'>
        <h1>Lets be the change we need to ensure <br/>a brighter future for us all.</h1>
      </div>
    </div>
  );
};

export default CarbonEmissions;
