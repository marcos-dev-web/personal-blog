import { createStore } from 'redux';

const INITIAL_STATE = {
  menuIsHidden: false,
  menuIsOpened: false,
};

function menuState(state=INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      if (action.menu.type === "TOGGLE_HIDDEN") {
        return {
          ...state,
          menuIsHidden: action.menu.state,
        }
      } else if (action.menu.type === "TOGGLE_OPEN") {
        return {
          ...state,
          menuIsOpened: action.menu.state,
        }
      }
      break;
    case "RESET_MENU":
      return {
        ...state,
        menuIsOpened: false,
      }
    default:
      return state;
  }
}

const store = createStore(menuState);

export default store;