import styled from 'styled-components';

const StyledQuestions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;
  .question {
    background-color: ${props => props.theme.gray};
    color: white;
    box-shadow: ${props => props.theme.bs};
    cursor: pointer;
    .header {
      padding: 1rem 1rem 0.5rem 1rem;
      border-bottom: 1px solid #ffffff24;
    }
    .body {
      padding: 0.5rem 1rem 1rem 1rem;
      /* .title { } */
      /* .description { } */
    }
  }
`;

export default StyledQuestions;
