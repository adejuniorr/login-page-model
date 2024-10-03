import styled from "styled-components";

export const BegginBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: scroll;
  background-color: #efefef;

  #login-right-svg {
    position: fixed;
    right: 0;
    height: 100vh;
    transition: all 300ms ease;
  }

  #login-mobile-logo,
  #login-bottom-svg {
    display: none;
  }

  @media (max-width: 1150px) {
    #login-right-svg {
      translate: 30px 0;
    }
  }

  @media (max-width: 990px) {
    #login-right-svg {
      translate: 200px 0;
    }
  } 

  @media (max-width: 770px) {
    width: auto;
    flex-direction: column;
    justify-content: space-between;
    background-image: none;
    overflow-y: hidden;

    #login-mobile-logo {
      display: block;
      position: relative;
      right: 0;
      margin-left: auto;
      margin-top: 8px;
      margin-right: 8px;
      width: 80px;
    }

    #login-right-svg {
      display: none;
    }

    #login-bottom-svg {
      display: block;
    }
  }
`;
