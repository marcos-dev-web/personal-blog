import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import MenuIcon from "@material-ui/icons/Menu";

import AllPosts from "../../pages/AllPosts";
import PostsByTopic from "../../pages/PostsByTopic";
import Trending from "../../pages/Trending";
import NotFound from '../../pages/NotFound';

import { Container, Logo, Dot, Links, Menu, Link } from "./styles";

function Home() {
  const MIN_WIDTH = 580;

  const state = useSelector(st => st);
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
    if (state.menuIsOpened) {
      return toggleMenuOpen(false);
    } else {
      return toggleMenuOpen(true);
    }
  }

  function handleStateMenu(event) {
    let w = event.target.innerWidth;

    if (w <= MIN_WIDTH && !state.menuIsHidden) {
      toggleMenuHidden(true);
    } else if (w > MIN_WIDTH && state.menuIsHidden) {
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
      <Container show={state.menuIsOpened}>
        <Link to="/">
          <Logo>
            Marcos<Dot>.</Dot>dev<Dot>.</Dot>web
          </Logo>
        </Link>
        <Menu>
          {state.menuIsHidden && (
            <MenuIcon
              fontSize="large"
              cursor="pointer"
              style={{ fill: "white", transition: "all 100ms linear" }}
              onClick={handleMenuIsOpen}
            />
          )}
        </Menu>
        <Links show={state.menuIsOpened}>
          <Link onClick={resetMenuState} show={state.menuIsOpened.toString()} to="/all-posts">
            All posts
          </Link>
          <Link onClick={resetMenuState} show={state.menuIsOpened.toString()} to="/posts-by-topic">
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
    </BrowserRouter>
  );
}

export default Home;
