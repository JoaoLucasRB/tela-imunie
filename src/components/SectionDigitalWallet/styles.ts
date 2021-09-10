import styled from 'styled-components';

import heroImg from '../../assets/patterns-bg.svg';

export const Container = styled.section`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 6rem 0 0 0;
  max-width: 100%;
  height: 100%;
  @media (max-width: 640px) {
  padding: 6rem 1rem;
  }

  & > span {
    padding: 2rem 0 4rem 0;
    width: 100%;
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
  }

  & > div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

      & > div.left {
      overflow: hidden;
      height: 100%;
      width: 50%;
      border-bottom: 0;
      
      @media (max-width: 960px) {
        width: 100%;
      }

      & > div {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        position: relative;
        max-width: 1236px;

        & > section {
          display: block;
          max-width: 1236px;
          margin: 0 auto;
          width: 90%;
          padding: 6rem 0 6rem 24rem;

          @media (max-width: 1600px) {
              padding: 0 0 6rem 12rem;
          }
          @media (max-width: 1440px) {
              padding: 0 0 6rem 7rem;
          }
          @media (max-width: 1366px) {
              padding: 0 0 6rem 5rem;
          }
          @media (max-width: 1280px) {
              padding: 0 0 6rem 2rem;
          }
          @media (max-width: 1024px) {
              padding: 0 0 6rem 2rem;
          }
          @media (max-width: 960px) {
              padding: 0 0 6rem 0;
          }

          & > ul {
            & > li {
              width: fit-content;
              padding-bottom: 1.5rem;
              & > div.MuiListItemAvatar-root {
                margin-top: 8px;
                align-self: flex-start;

                @media (min-width: 960px) {
                  margin-right: 32px;
                }

                & > span {
                  width: fit-content;
                  height: auto;
                  display: inline-block;

                  & > img {
                    height: 100%;
                    display: block;
                    width: 3.5rem;
                  }
                }
              }
              
              & > div.MuiListItemText-root {
                display: flex;
                flex-direction: column;

                h6 {
                  width: 100%;
                  max-width: 25rem;
                  @media (max-width: 960px) {
                    max-width: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }

    & > div.right {
  @media (max-width: 960px) {
    display: none;
  }
      /* flex: 0 0 50%; */
      max-width: 50%;
      width: 50%;
      height: 30rem;

      /* background-color: black; */

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

            @media (min-width: 960px){
              clip-path: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
              shape-outside: polygon(10% 0%, 100% 0, 100% 100%, 0% 100%);
            }

            & > div {
              width: 100%;
              height: 100%;
              display: flex;
              z-index: 9;
              position: relative;
              background: url(${heroImg}) no-repeat left bottom;
              background-size: contain;
              justify-content: flex-end;

              & > img {
                height: 100%;
                object-fit: contain;
                max-width: 100%;
                width: auto;
              }
            }
          }
        }
      }
    }
  }

  
`