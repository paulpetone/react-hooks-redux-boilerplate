import React from 'react'
import store from './componentStore'
import handlers from './componentHandlers'
import state from './componentState'
import effects from './componentEffects'

export default () => {
  const { addItem, items } = store()
  const { onInputChange, handleAddItem } = handlers()
  const { setInputValue, inputValue } = state()
  effects({ items })

  return (
    <>
      <ul>
        { items.map((item, key) => <li key={`example-${key}`}>{item}</li>) }
      </ul>
      <form onSubmit={handleAddItem({ addItem, inputValue })}>
        <input onChange={onInputChange({ setInputValue })} type="text"/>
        <button type="submit">
          Adicionar item
        </button>
      </form>
    </>
  )
}
