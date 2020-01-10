import { useSelector, useDispatch } from 'react-redux'

const addItemAction = title => {
  return { type: 'ADD_ITEM', title }
}

export default () => {
  const dispatch = useDispatch()

  const addItem = itemText => {
    dispatch(addItemAction(itemText))
  }

  const items = useSelector(state => state.items)

  return {
    addItem,
    items
  }
}
