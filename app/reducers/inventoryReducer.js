import { INVENTORY as I } from '../actions/constants';

const initialState = {
  items: []
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case I.GET_ITEMS_REQUEST:
      return Object.assign({}, state, {

      });
    case I.GET_ITEMS_FAILURE:
      return Object.assign({}, state, {

      });
    case I.GET_ITEMS_SUCCESS:
      return { ...state, items: action.items };

    case I.UPDATE_ITEM_REQUEST:
      return Object.assign({}, state, {

      });
    case I.UPDATE_ITEM_FAILURE:
      return Object.assign({}, state, {

      });
    case I.UPDATE_ITEM_SUCCESS:
      return { ...state, items: action.items };

    case I.CREATE_ITEM_REQUEST:
      return Object.assign({}, state, {

      });
    case I.CREATE_ITEM_FAILURE:
      return Object.assign({}, state, {

      });
    case I.CREATE_ITEM_SUCCESS:
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default inventoryReducer;
