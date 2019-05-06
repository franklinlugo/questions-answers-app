import styled from 'styled-components';

const StyledNav = styled.div`
  padding: 2rem 1rem;
  color: white;
  background-color: ${props => props.theme.red};
  .brand {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;

export default StyledNav;
