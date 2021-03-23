import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

import AllPosts from "../../pages/AllPosts";
import PostsByTopic from "../../pages/PostsByTopic";
import Trending from "../../pages/Trending";
import NotFound from '../../pages/NotFound';

import { Container, Logo, Dot, A, Links, Menu, Link } from "./styles";

function Home() {
  const MIN_WIDTH = 580;
  const [menuIsHidden, setMenuIsHidden] = useState(false);
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  function handleMenuIsOpen() {
    if (menuIsOpened) {
      return setMenuIsOpened(false);
    } else {
      return setMenuIsOpened(true);
    }
  }

  function handleStateMenu(event) {
    let w = event.target.innerWidth;

    if (w <= MIN_WIDTH && !menuIsHidden) {
      setMenuIsHidden(true);
    } else if (w > MIN_WIDTH && menuIsHidden) {
      setMenuIsHidden(false);
      setMenuIsOpened(false);
    }
  }

  useEffect(() => {
    handleStateMenu({ target: window });
  });

  window.onresize = handleStateMenu;

  return (
    <BrowserRouter>
      <Container show={menuIsOpened}>
        <A href="/">
          <Logo>
            Marcos<Dot>.</Dot>dev<Dot>.</Dot>web
          </Logo>
        </A>
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
          <Link show={menuIsOpened.toString()} to="/all-posts">
            All posts
          </Link>
          <Link show={menuIsOpened.toString()} to="/posts-by-topic">
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
