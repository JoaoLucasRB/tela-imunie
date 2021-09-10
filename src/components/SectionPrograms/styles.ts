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
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h4 {
      padding-bottom: 1rem;
      text-align: center;
    }
    & > h6 {
      text-align: center;
    }

    & > button {
      margin-top: 1.5rem;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  & > div {
    max-width: 800px;
    width: 100%;
    align-items: center;

    & > div {
      margin-bottom: 1rem;
      width: 100%;
      box-shadow: none;
      transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 12px;
      padding: 1.5rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 640px) {
        flex-direction: column;
      }

      & p {
        color: #718096;
      }

      & svg { 
        fill: #718096;
      }

      &:hover {
        & p, & h6, & svg {
          color: #fff;
          fill: #fff;
        }
        background-color: #3f51b5;
        cursor: pointer;
      }
      
      & p {
        margin-right: 4rem;
      }

      & > div {
        display: flex;
        align-items: center;
      }
    }

    @media (max-width: 960px) {
      padding: 0 2rem;
    }
  }
`