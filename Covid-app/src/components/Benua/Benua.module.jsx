import styled from 'styled-components';

const StyledBenua = styled.div`
  .container {
    padding: 20px;
    text-align: center;
  }

  .container h1 {
    color: #118AB2;
  }

  .container p {
    font-size: 1.8rem;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
  }

  .cardContainerp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px;
    width: 391px;
    height: 384px;
    text-align: left;
  }

  .card h2 {
    font-size: 1,5rem;
    margin-bottom: 20px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }

  .number {
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .icon {
    font-size: 2rem;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .confirmed .icon,
  .confirmed .number {
    color: #06D6A0;
  }

  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  .recovered .icon,
  .recovered .number {
    color: #118AB2;
  }

  .death .icon,
  .death .number {
    color: #EF476F;
  }

  .label {
    font-size: 1rem;
    color: #000;
    margin-bottom: 5px;
  }

  @media (min-width: 768px) {
    .card {
      width: calc(33.33% - 20px); /* Adjusts to fit three cards in a row with margin */
    }
  }

  @media (min-width: 992px) {
    .card {
      width: calc(33.33% - 20px); /* Adjusts to fit three cards in a row with margin */
    }
  }
`;

export default StyledBenua;
