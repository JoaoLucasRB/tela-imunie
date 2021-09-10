import styled from 'styled-components';

export const Container = styled.section`
display: flex;
justify-content: center;

/* @media (max-width: 960px) {
  div.MuiGrid-container {
    flex-direction: column-reverse;
    align-items: center;
  }
} */

& > span {
  max-width: 1236px;
  width: 100%;
  padding: 6rem 0;
  @media (max-width: 640px) {
  padding: 6rem 1rem;
  }

  @media (max-width: 960px) {
    div.MuiGrid-container {
      flex-direction: column-reverse;
      align-items: center;
    }

    div.MuiGrid-grid-xs-6 {
      max-width: 96%;
    }
  }

  & div.container-left {
    h4, h6 {
      padding-bottom: 1rem;
      text-align: center;
    }

    & > div {
      display: flex;
      flex-direction: column;
      @media (max-width: 640px) {
      align-items: center;
      }


      & > span {
        display: flex;
        align-items: center;
        padding-bottom: 1rem;

        & > img {
          margin-right: 1rem;
        }
      }
    }
  }

  & div.container-right {
    img {
      margin-left: 10rem;
      height: 100%;
      width: 20rem;

      @media (max-width: 960px) {
        margin-left: 0;
      }
    }
  }
}
`