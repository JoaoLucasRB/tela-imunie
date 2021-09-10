import styled from 'styled-components';
import background from '../../assets/patterns-bg.svg';

export const Container = styled.div`
  width: 100%;
  height: 32rem;

  @media (max-width: 960px) {
    width: 100%;
    height: 20rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 20rem;
  }
  @media (max-width: 514px) {
    width: 100%;
    height: 23rem;
  }
  @media (max-width: 465px) {
    width: 100%;
    height: 26rem;
  }
  @media (max-width: 411px) {
    width: 100%;
    height: 31rem;
  }

  background: url(${background}) no-repeat left bottom;
  background-size: contain;
  background-color: rgb(247, 249, 250);
  display: flex;
  justify-content: center;
  font-family: 'Lato';
`

export const Hero = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1236px;
  display: flex;

  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 4rem;
    
    @media (max-width: 960px) {
      width: 100%;
    padding: 1.5rem 4rem;
    }

    h3,h6 {
      padding-bottom: 1rem;
    }
    
    button {
      width: fit-content;
      padding: 0.7rem 1.2rem;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }

  & > div {
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
    height: 100%;

    
    @media (max-width: 960px) {
      display: none;
    }

    & > div {
      width: 50vw;
      height: 100%;
      position: relative;
      & > div {
        width: 100%;
        height: 100%;
        overflow: hidden;
        & > div {
          left: 0%;
          width: 100%;
          height: 100%;
          position: absolute;

          @media (min-width: 960px) {
            clip-path: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
            shape-outside: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
          }

          & > div {
            width: 100%;
            height: 100%;
            z-index: 9;
            position: relative;

            span {
              display: inline-block;
              height: 100%;
              width: 100%;

              img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
  /* background-color: black; */
`