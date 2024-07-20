import React from 'react';
import Capitals from './Components/Capitals/Capitals';
import './App.css';



const countryAndCapitalsList = [
  {
    id: '1',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: '2',
    capitalDisplayText: 'Washington, D.C.',
    country: 'United States',
  },
  {
    id: '3',
    capitalDisplayText: 'Tokyo',
    country: 'Japan',
  },
  {
    id: '4',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: '5',
    capitalDisplayText: 'Mosocow',
    country: 'Russia',
  },
  {
    id: '6',
    capitalDisplayText: 'London',
    country: 'United Kingdom ',
  },
  {
    id: '7',
    capitalDisplayText: 'Berlin',
    country: 'Germany',
  },
  {
    id: '8',
    capitalDisplayText: 'Brussels',
    country: 'Belgium',
  },
  
];

const App = () => {
  return (
    <div className="app">
      <Capitals countryAndCapitalsList={countryAndCapitalsList} />
    </div>
  );
};

export default App;
