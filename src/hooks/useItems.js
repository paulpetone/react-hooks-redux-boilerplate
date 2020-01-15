import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// Actions
import addItemAction from 'actions/addItem'

const useItems = () => {
	const dispatch = useDispatch()
	
  const addItem = itemText => {
		if (itemText.length)
    	dispatch(addItemAction(itemText))
  }

	const items = useSelector(state => state.items)

  return {
		items,
		addItem
	}
}

export default useItems