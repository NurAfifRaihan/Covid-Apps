import styled from "styled-components";

const Tabel = styled.div`
.tableContainer {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    color: #333;
  
    h1 {
      text-align: center;
      color: #118AB2;
    }
    h3{
        text-align: center;
      color: #06D6A0;

    }
  }
  
  .provinsi {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    text-align: center;
  
    th, td {
      border: 1px solid #00f577;
      padding: 8px;
    }
  
    th {
      background-color: #70d2f2;
    }
  
    tbody tr:nth-child(odd) {
      background-color: #69f0cc;
    }
  }
`;

export default Tabel;
