import store from './store'
import handlers from './handlers'
import state from './state'
import effects from './effects'

export default () => {
  const { addItem, items } = store()
  const { onInputChange, handleAddItem } = handlers()
  const { setInputValue, inputValue } = state()
  effects({ items })

  return (
    <>
      This is a example using all u gonna need to create any component, store,
      handlers, state and effects
      <ul>
        {items.map((item, key) => (
          <li key={`example-${key}`}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem({ addItem, inputValue })}>
        <input onChange={onInputChange({ setInputValue })} type="text" />
        <button type="submit">Adicionar item</button>
      </form>
    </>
  )
}
