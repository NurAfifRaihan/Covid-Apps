import styled from "styled-components";

/* Small Screen */
const StyledFooter = styled.div`
.container {
    background-color: #118AB2;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

.footer{
    display: flex;
}
  
  .footer__title {
    margin-bottom: 1rem;
    font-size: 3.5rem;
  }
  
  .footer__author {
    margin-bottom: 1rem;
  }
  .footer__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  .footer__item {
    margin-bottom: 1rem;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    .footer{

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .footer__list {
        flex-direction: row;
      }
    
      .footer__item {
        margin: 0 1rem;
      }
    /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /*
     * Nothing TODO here.
     * We dont change styling footer. 
     */
  }
`;
export default StyledFooter;
  