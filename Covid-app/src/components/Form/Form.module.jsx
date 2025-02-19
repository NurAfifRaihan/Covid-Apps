import styled from "styled-components";
const StyledForm = styled.div`
.formContainer {
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.formGroup {
  margin-bottom: 10px;
  margin-left: 1rem;
}
.formGroup select{
  border: 2px solid #118AB2;
}

.formGroup input{
  border: 2px solid #118AB2;
}

label {
  margin-bottom: 5px;
}
.form__image {
  max-width: 50%;
  margin-left: 1rem;
  height: 300px;
  border-radius: 25px;
}

.formGroup p {
  color: #EF476F;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #118AB2;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 3px;
}

button {
  background-color: #118AB2;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
@media (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style form. 
   */
   .container {
    max-width: 1200px;
    margin: 3rem auto;
    
  }

  .form {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .form__left {
    flex-basis: 40%;
  }

  .form__right {
    flex-basis: 60%;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
    margin: 3rem auto;
    
  }

  .form {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .form__left {
    flex-basis: 40%;
  }

  .form__right {
    flex-basis: 60%;
  }
}
`;

export default StyledForm

