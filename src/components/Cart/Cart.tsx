'use client'
import React from 'react'
import { useCart } from '@/context/CartContext'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

export default function Cart() {
  const { state, dispatch } = useCart()

  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <div className="py-6 max-md:px-2">
      <div className="p-4 bg-primaryone  rounded-md drop-shadow-md max-w-4xl mx-auto">
        {
          state.cart.length > 0 && (
            <h2 className="text-xl md:text-2xl font-bold mb-6 mt-4">
          Meu Carrinho
        </h2>
          )
        }

        {state.cart.length === 0 ? (
          <div className='flex flex-col gap-4 items-center justify-center py-4'>
            <span className='text-stone-300 text-5xl'>
              <FaCartShopping className="" />
            </span>
            <p className="text-base md:text-lg font-bold">
              Seu carrinho está vazio
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Adicione produtos para começar a comprar
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {state.cart.map((product) => (
              <div
                key={product.id}
                className="flex max-lg:flex-col max-md:gap-2 justify-between items-center border-b border-gray-300 pb-2"
              >
                <div className="flex gap-4 items-center justify-start w-full">
                  <div className="flex items-center max-sm:w-28 w-56  bg-primary py-2 lg:h-40   md:px-2 rounded">
                    <img
                      src={product.image}
                      alt={product.title}
                      className=" h-20 lg:h-36 w-fit mx-auto  rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-bold text-sm lg:text-lg ">{product.title}</p>
                    <p className="text-sm md:text-base text[#555]">
                      Preço: R$ {product.price.toFixed(2)}x {product.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex lg:flex-col max-lg:w-full  gap-2 justify-between  ">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'DECREMENT_QUANTITY',
                          id: product.id,
                        })
                      }
                      className=" py-1 md:py-2 px-3 border border-gray-300  rounded-l-md bg-icon hover:bg-icon/90 text-white"
                    >
                      {product.quantity === 1 ? (
                        <FaTrash />
                      ) : (
                        <FaMinus className="w-3" />
                      )}
                    </button>

                    <span className="p-1 px-7 border-y max-md:text-xs font-medium border-gray-300">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => dispatch({ type: 'ADD_TO_CART', product })}
                      className="bg-icon hover:bg-icon/90] text-white py-1 md:py-2 px-3  border border-gray-300 rounded-r-md"
                    >
                      <FaPlus className="w-3" />
                    </button>
                  </div>
                  <div className="flex items-center ">
                    <button
                      onClick={() =>
                        dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                      }
                      className="bg-[#ff4d4d] hover:bg-[#ff4d4d]/90 max-md:text-xs text-white py-2 px-3 w-full border border-gray-300 rounded-md flex items-center justify-center gap-x-2"
                    >
                      <FaTrash className="w-2 md:w-3" />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {state.cart.length > 0 && (
          <>
            <div className="mt-4 md:text-lg text-end font-semibold">
              Total: R$ {total.toFixed(2)}
            </div>
            <button
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="mt-4 w-full text-sm md:text-base p-2 bg-red-500 hover:bg-red-600 text-white  font-medium rounded"
            >
              Limpar Carrinho
            </button>
          </>
        )}
      </div>
    </div>
  )
}
