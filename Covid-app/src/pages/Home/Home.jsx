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

  const handleAddCase = ({ kota, status, jumlah }) => {
    const existingProvinsi = provinsiData.find(item => item.kota === kota);
  
    if (existingProvinsi) {
      const updatedProvinsiData = provinsiData.map(item => {
        if (item.kota === kota) {
          switch (status) {
            case 'Positif':
              return { ...item, kasus: item.kasus + jumlah };
            case 'Sembuh':
              return {
                ...item,
                kasus: item.kasus - jumlah,
                sembuh: item.sembuh + jumlah
              };
            case 'Meninggal':
              return {
                ...item,
                kasus: item.kasus - jumlah,
                meninggal: item.meninggal + jumlah
              };
            case 'Dirawat':
              return {
                ...item,
                kasus: item.kasus + jumlah,
                dirawat: item.dirawat + jumlah
              };
            default:
              return item;
          }
        }
        return item;
      });
      setProvinsiData(updatedProvinsiData); // Update state with modified data
    } else {
      // Add new data if city doesn't exist
      const newProvinsi = {
        kota: kota,
        kasus: jumlah,
        dirawat: status === 'Dirawat' ? jumlah : 0,
        sembuh: status === 'Sembuh' ? jumlah : 0,
        meninggal: status === 'Meninggal' ? jumlah : 0,
      };
      setProvinsiData([...provinsiData, newProvinsi]); // Update state with new data
    }
  };

  return (
    <div>
      <Navbar />
      <Main />
      <Global />
      <Provinsi data={provinsiData} />
      <Form handleAddCase={handleAddCase} />
      <Footer />
    </div>
  );
}

export default HomePage;
