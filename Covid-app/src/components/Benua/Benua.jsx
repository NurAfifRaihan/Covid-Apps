import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faSmile, faSkull } from '@fortawesome/free-solid-svg-icons';
import StyledBenua from './Benua.module';
import BenuaCard from '../benua-card/benua';

function Benua () {
  const [regions, setRegions] = useState([]);
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://covid-fe-2023.vercel.app/api/global.json');
        const data = await response.json();
        setGlobalData(data.global);
        setRegions(data.regions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledBenua>
      <div className="container">
        <h1>Global</h1>
        <p>Data Covid Global</p>
        <div className="cardContainerp">
          {globalData.map((cases, index) => (
            <BenuaCard key={index} status={cases.status} total={cases.total.toLocaleString()} />
          ))}
        </div>
      </div>
      <div className="container">
        <h1 className="title">Situation by Regions</h1>
        <p className="subtitle">Bacaan Pilihan Covid</p>
        <div className="cardContainer">
          {regions.map((region, index) => (
            <div key={index} className="card">
              <h2>{region.name}</h2>
              <div className="stat confirmed">
                <span className="label">Confirmed</span>
                <div className="number">
                  {region.numbers.confirmed.toLocaleString()}
                  <FontAwesomeIcon className="icon" icon={faVirus} />
                </div>
              </div>
              <div className="stat recovered">
                <span className="label">Recovered</span>
                <div className="number">
                  {region.numbers.recovered.toLocaleString()}
                  <FontAwesomeIcon className="icon" icon={faSmile} />
                </div>
              </div>
              <div className="stat death">
                <span className="label">Death</span>
                <div className="number">
                  {region.numbers.death.toLocaleString()}
                  <FontAwesomeIcon className="icon" icon={faSkull} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledBenua>
  );
}

export default Benua;
