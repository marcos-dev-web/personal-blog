import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: rgb(40,44,52);
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 2rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Ul = styled.ul`
  list-style: none;
  margin-left: -1rem;
`;

export const Li = styled.li`
  width: 100%;
  color: white;
  margin-bottom: 0.5rem;
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  width: fit-content;
  text-decoration: none;

  &> svg {
    fill: white;
    padding-right: 5px;
  }

  &:hover {
    color: #0d61fd;
  }

  &:hover svg {
    fill: #0d61fd;
  }
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    color: white;
    text-align: center;
  }
  & a {
    display: inline-block;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 2rem;
  }
`;