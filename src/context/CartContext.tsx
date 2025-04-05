'use client'
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react'

// Tipo do produto
type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  quantity?: number
}


type CartItem = Product & { quantity: number }


type CartState = {
  cart: CartItem[]
}


type CartAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; id: number }
  | { type: 'DECREMENT_QUANTITY'; id: number }
  | { type: 'CLEAR_CART' }


const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find((p) => p.id === action.product.id)
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p.id === action.product.id ? { ...p, quantity: p.quantity + 1 } : p,
          ),
        }
      }
      return { cart: [...state.cart, { ...action.product, quantity: 1 }] }
    }

    case 'DECREMENT_QUANTITY': {
      return {
        cart: state.cart
          .map((p) =>
            p.id === action.id ? { ...p, quantity: p.quantity - 1 } : p,
          )
          .filter((p) => p.quantity > 0),
      }
    }

    case 'REMOVE_FROM_CART':
      return { cart: state.cart.filter((p) => p.id !== action.id) }

    case 'CLEAR_CART':
      return { cart: [] }

    default:
      return state
  }
}


const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] })

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(storedCart)
        parsedCart.forEach((item) => {
          // Garante que a quantidade esteja válida
          for (let i = 0; i < item.quantity; i++) {
            dispatch({ type: 'ADD_TO_CART', product: item })
          }
        })
      } catch (err) {
        console.error('Erro ao carregar carrinho do localStorage', err)
      }
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider ')
  }
  return context
}
