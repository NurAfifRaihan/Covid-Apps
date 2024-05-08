// HomePage.js
import { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Global from "../../components/global-section/Global";
import Form from "../../components/Form/Form";
import Provinsi from "../../components/Provinsi/Provinsi";
import data from '../../utils/constants/provinces'; // Assuming data is imported correctly

function HomePage() {
  const [provinsiData, setProvinsiData] = useState(data.provinces); // Initial state with data
  return (
    <div>
      <Navbar />
      <Main />
      <Global />
      <Provinsi prov={provinsiData} />
      <Form prov={data} setProvinsiData={setProvinsiData}/>
      <Footer />
    </div>
  );
}

export default HomePage;
