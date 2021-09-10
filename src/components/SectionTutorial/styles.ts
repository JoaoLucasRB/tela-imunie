import styled from 'styled-components';

export const Container = styled.section`
  background-color: rgb(247, 249, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  @media (max-width: 640px) {
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
    }
    & > h6 {
      text-align: center;
    }
  }

  & > div {
    max-width: 1236px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 960px) {
      flex-direction: column;
    }

    & div {
      width: 30%;
      height: 20rem;
      border: 1px solid black;
      background-color: #fff;
      box-shadow: none;
      transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      padding: 3rem 1.5rem;

      &:hover {
        box-shadow: 0px 11px 25px -8px rgba(0,0,0,0.32);
        transform: translateY(-0.3rem);
      }
      
      & p, & h6 {
        margin-top: 1rem;
      }

      & img {
        height: 4rem;
        width: 40px;
      }
      
      @media (max-width: 960px) {
        width: 96%;
        height: 16rem;
        margin-top: 1.5rem;
      }
    }
  }
`