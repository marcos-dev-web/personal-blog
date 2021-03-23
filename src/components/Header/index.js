import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import { Container, Logo, Dot, Link, Links, Item, Menu } from "./styles";

function Header() {
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
    <Container show={menuIsOpened}>
      <Link href="/">
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
        <Item show={menuIsOpened}>All posts</Item>
        <Item show={menuIsOpened}>Post by Topic</Item>
      </Links>
    </Container>
  );
}

export default Header;
