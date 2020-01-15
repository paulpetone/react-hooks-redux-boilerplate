import { useSelector, useDispatch } from 'react-redux'
import addItemAction from 'actions/addItem'
import fetchDataAction from 'actions/fetchData'
import R, { pathOr } from 'ramda'


export default () => {
  const dispatch = useDispatch()

  const addItem = itemText => {
    dispatch(addItemAction(itemText))
  }
  const fetchRepos = () => {
    dispatch(fetchDataAction({
      dispatch, // <- I couldn't find any other way :/
      key: 'repos',
      url: 'https://api.github.com/users/paulpetone/repos'
    }))
  }

  const items = useSelector(state => state.items)
  const repos = useSelector(state => R.pathOr([], ['requests', 'repos'], state))

  return {
    addItem,
    items,
    fetchRepos,
    repos
  }
}
