import styled from 'styled-components';

export const Container = styled.header`
  max-height: 4rem;
  min-height: 4rem;
`

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0rem 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 4rem;
  }

  div.popover-menu {
    @media (max-width: 959px) {
      display: none;
    }

    & > ul {
      display: flex;
      align-items: center;
      justify-content: space-between;


      li {
        width: fit-content;
        
        & > p:hover{
          cursor: pointer;
            transition: 0.2s ease-in-out;
          &:not(.highlight) {
            color: #3f51b5;
          }
        }

        & > p.active {
          color: #3f51b5;
        }
        
        & > svg.active {
          color: #3f51b5;
        }

        & > p.highlight {
          color: rgb(35, 105, 60);
          font-weight: bold;
          font-family: 'Lato';
        }

        button {
          text-transform: none;
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0.3rem 2rem;

          svg {
            height: 1rem;
            width: 1rem;
          }

          a {
            padding-left: 0.5rem;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
  }

  div.drawer-menu {
    @media (min-width: 959px) {
      display: none;
    }
  }
`

export const PopoverServicesContainer = styled.div`
  display: flex;

  p {
    color: #3f51b5;
  }

  a {
    text-decoration: none;
    color: #718096;
    
    &:hover {
      color: #3f51b5;
    }
  }
`

export const DrawerMenuContainer = styled.div`
    & > ul:first-child {
      & > li:first-child {
        display: flex;
        justify-content: flex-end;
        & > button {
          width: fit-content;
        }
      }
    }

    & > ul {

      & > li {
        width: 100%;
        
        p {
          color: #3f51b5;
        }

        a {
          text-decoration: none;
          color: #718096;
          
          &:hover {
              color: #3f51b5;
            }
        }
        

        & > button {
          text-transform: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.5rem 2rem;

          & svg {
            height: 1rem;
            width: 1rem;
          }

          & a {
            padding-left: 0.5rem;
            color: #fff;
            text-decoration: none;
            &:hover {
              color: #fff;
            }
          }

          & img {
            height: 100%;
            width: 11rem;
          }
        }
      }
    }
`;