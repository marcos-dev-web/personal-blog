import React, { useEffect } from 'react';

import Home from './components/Home';

import { Provider, useDispatch, useSelector } from 'react-redux';
import getPosts from './utils/getPosts';

import store from './store';

function Main({Home}) {
  const hasFetched = useSelector(state => state.dataPosts.fetched);
  const dispatch = useDispatch();


  useEffect(() => {
    async function fetchData() {
      const {posts, topics, trendings} = await getPosts();
      dispatch({
        type: "SET_POSTS",
        data: {
          topics,
          posts,
          trendings,
          fetched: true,
        }
      })
    }
    !hasFetched && fetchData();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <Home />
}

function App() {

  return (
    <Provider store={store}>
      <Main Home={Home}/>
    </Provider>
  );
}

export default App;
