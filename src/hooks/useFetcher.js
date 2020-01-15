import { useDispatch } from 'react-redux'

// Actions
import fetchDataAction from 'actions/fetchData'

const useFetcher = () => {
  const dispatch = useDispatch()

  const fetcher = ({ key, url }) => {
    dispatch(fetchDataAction({ dispatch, key, url }))
  }

  return fetcher
}

export default useFetcher
