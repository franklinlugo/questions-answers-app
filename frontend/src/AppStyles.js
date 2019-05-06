import styled from 'styled-components';

const Page = styled.div``;

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem 4rem;
  max-width: ${props => props.theme.maxWidth};
`;

export { Page, Inner };
