import { useState } from "react";
import Form from "../../components/Form/Form";
import Main from "../../components/Main/Main";
import Provinsi from "../../components/Provinsi/Provinsi";
import data from "../../utils/constants/provinces";

function Prov() {
  const [provinsiData, setProvinsiData] = useState(data.provinces); 
    return(
    <>
        <Main />
      <Provinsi prov={provinsiData} />
      <Form prov={data} setProvinsiData={setProvinsiData}/>
    </>
    )
}

export default Prov;