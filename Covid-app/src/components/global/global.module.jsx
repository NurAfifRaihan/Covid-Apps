import styled from 'styled-components';

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

export default Card;