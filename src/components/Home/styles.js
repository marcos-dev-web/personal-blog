import styled from 'styled-components';

import {Link as LinkRouter} from 'react-router-dom';

const black = "rgb(40,44,52)";

export const Link = styled(LinkRouter)`
  color: white;

  font-size: 1rem;
  font-style: Lato;
  text-decoration: none;

  margin-right: 1rem;

  transition: all 200ms linear;
  user-select: none;

  &:hover {
    color: #999;
  }
  &:active {
    color: springgreen;
  }
  ${({show}) => show === "true" ? `
    margin-top: 1rem;
  ` : null}
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  transition: all 200ms linear;

  width: 100%;
  height: 4rem;
  padding: 0 2rem;

  background: ${black};
  color: white;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    overflow: ${({show}) => show ? "initial" : "hidden"};
    justify-content: center;
  }

  @media screen and (max-width: 380px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  color: white;

  user-select: none;

  @media screen and (max-width: 330px) {
    font-size: 1.5rem;
  }
`;

export const Dot = styled.span`
  display: inline-block;
  color: #0d61fd;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: Poppins;

  @media screen and (max-width: 330px) {
    font-size: 1.5rem;
  }
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  transition: all 500ms linear;


  @media screen and (max-width: 580px) {
    position: absolute;
    top: 4rem;
    ${({show}) => show ? `
      border-top: 1px solid #474b51;
      background: ${black};
      left: 0;
      z-index: 1000;
      width: 100%;
      flex-direction: column;
      padding-bottom: 1rem;
    ` : null}; 
  }
`;

export const Menu = styled.span`
  position: absolute;
  right: 10px;
  top: 0.9rem;

  &:hover * {
    fill: #999;
  }
  &:active * {
    fill: springgreen;
  }
`;