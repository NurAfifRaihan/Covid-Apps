import styled from "styled-components";

const StyledMain = styled.div`
.container {
    margin: 1rem;
  }
  
  .main {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .main__left {
    margin-bottom: 1rem;
  }
  
  .main__title {
    color: #118AB2;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  
  .main__genre {
    color: #07b48c;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  
  .main__description {
    color: #3d506b;
    margin-bottom: 1rem;
    font-size: 19px;
  }
  
  .main__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 20px;
    background-color: #118AB2;
    color: #fff;
  }
  
  .main__image {
    max-width: 50%;
    margin-left: 10rem;
    height: 300px;
    border-radius: 25px;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style main. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }
  
    .main {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    .main__left {
      flex-basis: 40%;
    }
  
    .main__right {
      flex-basis: 60%;
    }
  }
  
`;

export default StyledMain;
