import { useSelector } from 'react-redux'
import { pathOr } from 'ramda'

const useItems = fetcher => {
  const fetchRepos = () => {
    fetcher({
      key: 'repos',
      url: 'https://api.github.com/users/paulpetone/repos',
    })
  }

  const repos = useSelector(state =>
    pathOr([], ['requests', 'repos', 'result'], state)
  )

  return {
    fetchRepos,
    repos,
  }
}

export default useItems
