import { useState } from 'react';
import styles from './Global.module.css';
import data from "../../utils/constants/indonesia";
import GlobalCard from '../global/global'; 

function Global() {

    const [kasus] = useState(data.indonesia);

  return (
    <div className={styles.container}>
      <h1>Indonesia</h1>
      <p>Data Covid Berdasarkan Indonesia</p>
      <div className={styles.cardContainer}>
        {kasus.map((cases) => {
            return <GlobalCard key={cases.status} status={cases.status} total={cases.total} />;
        })}
      </div>
    </div>
  );
}

export default Global;
