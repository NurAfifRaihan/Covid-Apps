import { useState, useEffect } from 'react';
import GlobalCard from '../global/global';
import StyledCard from './Global.module';

function Global() {
    const [kasus, setKasus] = useState([]);

    useEffect(() => {
        fetch('https://covid-fe-2023.vercel.app/api/indonesia.json')
            .then(response => response.json())
            .then(data => setKasus(data.indonesia))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <StyledCard>
            <div className="container">
                <h1>Indonesia</h1>
                <p>Data Covid Berdasarkan Indonesia</p>
                <div className="cardContainer">
                    {kasus.map((cases) => (
                        <GlobalCard key={cases.status} status={cases.status} total={cases.total} />
                    ))}
                </div>
            </div>
        </StyledCard>
    );
}

export default Global;
