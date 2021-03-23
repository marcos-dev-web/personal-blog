import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 4rem);
  overflow: auto;
`;

export const Box = styled.article`
  width: 98%;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-bottom: 1px solid gray;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-family: Poppins, Ubuntu, sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  color: rgb(40,44,52);
`;

export const Topic = styled.a`
  color: #2c62c7;
  font-weight: 600;
  text-decoration: none;
  font-family: Lato, Roboto, Oxygen, Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  background: #e4e4e4;
  border-radius: 3px;
  padding: 2px 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: all 100ms linear;

  &:hover {
    color: #2c62c7;
  }

  &:active {
    background: #4c4cc7;
    color: white;
  }
`;

export const BoxText = styled.section`
  width: 100%;
  text-align: left;
  padding: 5px;
`;

export const Text = styled.p`
  text-align: left;
  font-family: Lato, Roboto, Ubuntu, sans-serif;
  color: #06050ad9;
  font-size: 1.3rem;
  line-height: 24px;
  margin-top: 1.5rem;
`;

export const TopicsList = styled.section`
  width: min(500px, 90vw);
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxTopics = styled.article`
  width: 98%;
  margin: 1rem 0 auto;
  padding: 2rem 0;
  border-top: 1px solid gray;
`;

export const TopicTitle = styled.section`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: rgb(40,42,50);

  & > h1 {
    color: white;
  }
`;