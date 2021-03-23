import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;

  width: 100vw;
  height: 100vh;

  background: rgb(40, 44, 52);

  z-index: 10000 !important;
`;

export const Title = styled.h1`
  font-family: Poppins, sans-serif;
  font-size: 3rem;
  text-align: center;

  margin-top: 1rem;

  color: white;

  background: linear-gradient(to bottom right, white, springgreen);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Link = styled.a`
  font-size: 1.5rem;
  cursor: pointer;

  text-decoration: none;

  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  background: #2c62c7;
  color: white;

  &:hover {
    color: white;
    background: #2c32c7;
  }
`;