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
      // Fetching list of countries
      try {
        const responseCountries = await axios.get(API_url + 'countries.json');
        setCountries(responseCountries.data);
        console.log(responseCountries.data)
      } catch (error) {
        console.error('Error fetching countries:', error.message);
      }

      // Fetching products
      try {
        const responseProducts = await axios.get(API_url + 'products.json');
        setProducts(responseProducts.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='carbonEmissions-container'>
      <div className='carbonEmissions-Header'>
        <h1>Carbon Emissions by Country</h1>

        <div className='select-options'>
          {countries.length === 0 ? (
            <p>Loading countries...</p>
          ) : (
            <select>
              <option disabled selected value="">
                Select a country
              </option>
              {[...new Set(Object.values(countries))].map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          )}

          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            <select>
              <option disabled selected value="">
                Select a product
              </option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <Line
          data={{
            labels: ["Country", "Product Emissions"],
            datasets: [{
              label: "Country",
              data: [200,300,400]
            }],
          }}
        />
    </div>
  );
};

export default CarbonEmissions;