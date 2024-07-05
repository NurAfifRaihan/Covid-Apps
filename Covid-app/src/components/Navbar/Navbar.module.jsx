import styled from "styled-components";

const StyledNavbar = styled.div`
  .container {
    background-color: #118AB2;
    padding: 1rem;
    color: #ffffff;
  }
  
  .navbar {
    display: flex;
    flex-direction: column;
  }
  
  .navbar__brand {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  .navbar__item {
    margin-bottom: 1rem;
  }

  .navbar__item a {
    text-decoration: none;
    color: white; /* Warna teks untuk link */
  }

  .navbar__item a:hover {
    color: white; /* Warna teks saat di-hover */
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    .navbar__brand {
      margin-bottom: 0;
    }
  
    .navbar__list {
      flex-direction: row;
    }
  
    .navbar__item {
      margin: 0 1rem;
    }
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /* 
     * Nothing TODO HERE.
     * We haven't styling Navbar.
     */
  }
`;

export default StyledNavbar;
