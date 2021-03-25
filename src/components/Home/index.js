import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from "@material-ui/icons/Menu";

import { Container, Logo, Dot, Links, Menu, Link } from "./styles";
import Loading from '../../components/Loading';

const AllPosts = lazy(() => import("../../pages/AllPosts"));
const PostsByTopic = lazy(() => import("../../pages/PostsByTopic"));
const Trending = lazy(() => import("../../pages/Trending"));
const NotFound = lazy(() => import("../../pages/NotFound"));

function Home() {
  const MIN_WIDTH = 580;

  const { menuIsHidden, menuIsOpened } = useSelector(state => state);
  const dispatch = useDispatch();

  function resetMenuState() {
    dispatch({type: "RESET_MENU"});
  }

  function toggleMenuOpen(bool) {
    dispatch({
      type: "TOGGLE_MENU",
      menu: {
        type: "TOGGLE_OPEN",
        state: bool
      }
    })
  }
  
  function toggleMenuHidden(bool) {
    dispatch({
      type: "TOGGLE_MENU",
      menu: {
        type: "TOGGLE_HIDDEN",
        state: bool
      }
    })
  }

  function handleMenuIsOpen() {
    if (menuIsOpened) {
      return toggleMenuOpen(false);
    } else {
      return toggleMenuOpen(true);
    }
  }

  function handleStateMenu(event) {
    let w = event.target.innerWidth;

    if (w <= MIN_WIDTH && !menuIsHidden) {
      toggleMenuHidden(true);
    } else if (w > MIN_WIDTH && menuIsHidden) {
      toggleMenuHidden(false);
      toggleMenuOpen(false);
    }
  }

  useEffect(() => {
    handleStateMenu({ target: window });
  });

  window.onresize = handleStateMenu;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Container show={menuIsOpened}>
          <Link to="/">
            <Logo>
              Marcos<Dot>.</Dot>dev<Dot>.</Dot>web
            </Logo>
          </Link>
          <Menu>
            {menuIsHidden && (
              <MenuIcon
                fontSize="large"
                cursor="pointer"
                style={{ fill: "white", transition: "all 100ms linear" }}
                onClick={handleMenuIsOpen}
              />
            )}
          </Menu>
          <Links show={menuIsOpened}>
            <Link onClick={resetMenuState} show={menuIsOpened.toString()} to="/all-posts">
              All posts
            </Link>
            <Link onClick={resetMenuState} show={menuIsOpened.toString()} to="/posts-by-topic">
              Post by Topic
            </Link>
          </Links>
        </Container>
        <Switch>
          <Route exact path="/" component={Trending}/>
          <Route exact path="/all-posts" component={AllPosts} />
          <Route exact path="/posts-by-topic" component={PostsByTopic} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Home;
