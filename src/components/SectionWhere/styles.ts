import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(247, 249, 250);

  & > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
    padding-bottom: 3rem;
  @media (max-width: 640px) {
  padding: 6rem 1rem 3rem 1rem;
  }
  }

  & > div {
    max-width: 1236px;
    width: 100%;

    
  @media (max-width: 960px) {
    div.MuiGrid-container {
      flex-direction: column;
      align-items: center;
    }

    div.MuiGrid-grid-xs-4, div.MuiGrid-grid-xs-8 {
      max-width: 96%;
    }
  }

    & li {
      background-color: #fff;
      display: flex;
      margin-bottom: 2rem;

      & > div.MuiListItemText-root {
        height: 9rem;

        & > span {
          height: 100%;


          & > span {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            & > p {
              color: #2d3748;
            }
          }
        }
      }

    }

    & img {
      height: 100%;
      width: 12.5rem;
      @media (max-width: 640px) {
        width: 6rem;
      }
    }
  }

  & div.container-legislation { 
    background-color: rgb(17, 82, 147);
    border-radius: 4px;
    padding: 3.5rem 1.5rem;

    h6, p {
      padding-bottom: 1rem;
    }

    & button {
      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }

  & div.container-calendars { 
    margin-top: 1.5rem;
    background-color: #fff;
    border-radius: 4px;
    padding: 3.5rem 1.5rem;

    h6, p {
      padding-bottom: 1rem;
    }

    & button {
      a {
        text-decoration: none;
        color: #FFF;
      }
    }
    
    @media (max-width: 960px) {
      margin-bottom: 4rem;
    }
  }

`