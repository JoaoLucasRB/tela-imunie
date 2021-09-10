import styled from 'styled-components';

export const Container = styled.section`
  background-color: #3d93d0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  @media (max-width: 640px) {
    flex-direction: column;
  padding: 6rem 1rem;
  }

  & > span {
    padding: 0 0 4rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h4 {
      padding-bottom: 1rem;
      text-align: center;
    }
    & h6 {
      text-align: center;
    }
  }

  & > div {
    max-width: 1236px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
      flex-direction: column;
    }

    & div {
      width: 30%;
    @media (max-width: 640px) {
      width: 90%;
      margin-top: 2rem;
    }
      display: flex;
      flex-direction: column;
      align-items: center;
      
      & p, & h6 {
        margin-top: 2rem;
      }

      & p {
        text-align: center;
      }

      & img {
        height: 4rem;
        width: 9rem;

      }
    }
  }
`