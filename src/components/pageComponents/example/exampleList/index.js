import store from './store'
import handlers from './handlers'
import state from './state'
import effects from './effects'

export default () => {
  const { addItem, items, fetchRepos, repos } = store()
  const { onInputChange, handleAddItem } = handlers()
  const { setInputValue, inputValue } = state()
  effects({ items, fetchRepos })

  return (
    <>
      This is an example using all u gonna need to create any component (store,
      handlers, state and effects)
      <br />
      <b>Take a look at components/pageComponents/example/exampleList</b>
      <br />
      <br />
      <br />
      <h2>Example 1</h2>
      <i>This first {`<ul>`} uses a simple reducer</i>
      <ul>
        {items.map((item, key) => (
          <li key={`example-${key}`}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem({ addItem, inputValue })}>
        <label htmlFor="example-1">Add Item -></label>
        <input
          id="example-1"
          onChange={onInputChange({ setInputValue })}
          type="text"
        />
        <button type="submit">Add Item</button>
      </form>
      <br />
      <br />
      <br />
      <h2>Example 2</h2>
      <i>This second {`<ul>`} uses an async information from store</i>
      <ul>
        {repos.map((item, key) => (
          <li key={`repos-${key}`}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}
