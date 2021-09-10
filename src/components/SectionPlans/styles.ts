import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;

  & > span {
    padding: 0 0 4rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1236px;

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
      height: 35em;
      border: 1px solid black;
      box-shadow: none;
      transition: box-shadow 0.25s ease-in-out, transform 0.25s ease-in-out;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      padding: 3rem 1.5rem;

      &:hover {
        box-shadow: 0px 11px 25px -8px rgba(0,0,0,0.32);
        transform: translateY(-0.3rem);
      }
      
      & > p, & > h5 {
        margin-top: 1rem;
        text-align: center;
      }

      & > p { 
        margin-bottom: 1rem;
      }


      & > span {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        & > h6 {
          margin-left: 1rem;
        }

        & > svg {
          fill: #3f51b5;
        }
      }
      
      & > button {
        width: 100%;
        padding: 0.7rem 0;

        a {
          text-decoration: none;
          color: #3f51b5;
        }
      }
      
      @media (max-width: 960px) {
        width: 96%;
        margin-top: 1.5rem;
      }
    }
  }
`