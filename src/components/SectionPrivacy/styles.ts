import styled from 'styled-components';

export const Container = styled.section`
  background-color: #0c133e;
  width: 100%;

  & > div {
    width: 100%;
    margin: 0 auto;
    padding: 3rem 1rem;
    max-width: 1236px;
    
  @media (max-width: 960px) {
    div.MuiGrid-container {
      flex-direction: column;
      align-items: center;
    }

    div.MuiGrid-grid-xs-6{
      max-width: 96%;
    }
  }

    @media (min-width: 600px) {
      padding: 4rem 4rem;
    }

    @media (min-width: 960px) {
      padding: 6rem 4rem;
    }

    h4, p {
      padding-bottom: 1.2rem;
    }

    button {
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.87);
      }
    }

    img {
      height: 100%;
      width: 18rem;
      border-radius: 2rem;
      margin-left: 8rem;

      @media (max-width: 960px) {
        margin-left: 0;
      }
    }
  }
`