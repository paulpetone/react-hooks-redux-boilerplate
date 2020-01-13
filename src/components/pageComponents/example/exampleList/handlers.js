export default () => ({
  onInputChange: ({ setInputValue }) => e => {
    setInputValue(e.target.value)
  },
  handleAddItem: ({ inputValue, addItem }) => e => {
    e.preventDefault()
    addItem(inputValue)
  },
})
