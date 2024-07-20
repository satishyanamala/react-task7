import React, { useState } from 'react';

const Capitals = ({ countryAndCapitalsList }) => {
  const [selectedCapital, setSelectedCapital] = useState(countryAndCapitalsList[0].id);

  const handleChange = (event) => {
    setSelectedCapital(event.target.value);
  };

  const selectedCountry = countryAndCapitalsList.find(
    (item) => item.id === selectedCapital
  );

  return (
    <div className="capitals-app">
      <h1>Capitals App</h1>
      <div className="capital-select">
        <label htmlFor="capitals">Choose a capital: </label>
        <select id="capitals" value={selectedCapital} onChange={handleChange}>
          {countryAndCapitalsList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.capitalDisplayText}
            </option>
          ))}
        </select>
      </div>
      <div className="country-display">
        <h2>Country: {selectedCountry.country}</h2>
      </div>
    </div>
  );
};

export default Capitals;
