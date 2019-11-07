import React from 'react';
import TravelCards from '../components/travel-cards.component'

const HomePage = () => (
    <div>
      <div className="jumbotron container" style={{textAlign: 'center'}}>
        <h1 className="display-4">Informasi Travel Malang</h1>
      </div>
      <TravelCards/>
    </div>
);

export default HomePage;