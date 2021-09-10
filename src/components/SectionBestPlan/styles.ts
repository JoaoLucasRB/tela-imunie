import styled from 'styled-components';

export const Container = styled.section`
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
      justify-content: space-between;
      align-items: center;
    }

    & > div {
      width: 48%;
      height: 18rem;
      border-radius: 12px;
      padding: 2rem;
      background-color: rgb(247, 249, 250);
      display: flex;
      justify-content: space-between;

      & > img {
        height: 100%;
        width: 8.5rem;
      }

      & > div {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > button {
          width: fit-content;

          & a {
            text-decoration: none;
            color: #fff;
          }
        }
      }

      @media (max-width: 960px) {
        margin-top: 1.5rem;
        width: 96%;
      }
    }
  }
`