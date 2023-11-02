export const cartInitialState = {
  products: [],
  isOpen: false,
  totalPrice: 0,
  transportPrice: 0,
};

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  DISPLAY_CART: "DISPLAY_CART",
};

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.DISPLAY_CART]: (state, action) => {
    const isOpen  = action.payload;
    const newState = {
      ...state,
      isOpen,
    };
    updateLocalStorage(newState);
    return newState;
  },

  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id, combinations } = action.payload;
    const idCart = `${id}-${combinations}`
    const totalPrice = state.totalPrice + action.payload.price;
    const productInCartIndex = state.products.findIndex(item => item.id === idCart && item.combinations === combinations)
    if(productInCartIndex >= 0){
      const newState = {
        ...state,
        products: [
          ...state.products.slice(0,productInCartIndex),
          {
            ...state.products[productInCartIndex],
            quantity: state.products[productInCartIndex].quantity + 1,
            id: idCart,
          },
          ...state.products.slice(productInCartIndex + 1)
        ],
        totalPriceç: Math.round(totalPrice*100)/100,
      }

      return newState
    }

    const newState = {
      ...state,
      products: [
        ...state.products,
        {
          ...action.payload,
          id: idCart,
          quantity: 1
        }
      ],
      totalPrice: Math.round(totalPrice*100)/100,
    }

    return newState
  },

  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state,action) => {
    const { id } = action.payload;
    const totalPrice = state.totalPrice - action.payload.price;
    const newProducts = state.products.filter( product => product.id != id )
    const newState = {
      ...state,
      totalPrice: Math.round(totalPrice*100)/100,
      products: newProducts,
    }
    return newState
  }
};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
