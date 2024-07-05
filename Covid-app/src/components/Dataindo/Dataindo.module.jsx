import styled from "styled-components";

const Indo = styled.div`
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
    h3 {
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

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 50px;
  padding: 40px;
  flex: auto;
  margin: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    max-width: 400px;
    margin: 4rem auto;
  }

  p {
    font-size: 20px;
    margin: auto;
  }

  h2 {
    margin: 0;
    color: black; /* Warna default untuk <h2> */
    font-size: 36px;
    margin-top: 10px;
  }

  &.confirmed h2 {
    color: #06d6a0; /* Warna untuk kasus Positif */
  }

  &.recovered h2 {
    color: #118ab2; /* Warna untuk kasus Sembuh */
  }

  &.death h2 {
    color: #ef476f; /* Warna untuk kasus Meninggal */
  }
`;

export default Indo;
export { Card };
