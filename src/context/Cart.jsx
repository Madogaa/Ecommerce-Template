import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const displayCart = isOpen => dispatch({
        type: 'DISPLAY_CART',
        payload: isOpen,
      })

    const addToCart = product =>  dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })

    const removeFromCart = product => dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    }
    )

  return (
    <CartContext.Provider value={{
        cart: state,
        displayCart,
        addToCart,
        removeFromCart,
    }}
    >
      {children}
      <div
        id="backdrop"
        className={`${state.isOpen ? "block" : "hidden" }`}>
      </div>
    </CartContext.Provider>
  )
}