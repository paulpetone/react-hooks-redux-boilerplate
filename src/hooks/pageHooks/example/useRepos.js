import { useSelector } from 'react-redux'
import { path, ifElse, is, always } from 'ramda'

const useItems = fetcher => {
  const fetchRepos = () => {
    fetcher({
      key: 'repos',
      url: process.env.REPOS_ENDPOINT,
    })
  }

  const repos = useSelector(state => {
    const storeRepos = path(['requests', 'repos', 'result'], state)

    const parsedStoreRepoToArrayIfItsNot = ifElse(
      is(Array),
      always(storeRepos),
      always([])
    )(storeRepos)

    return parsedStoreRepoToArrayIfItsNot
  })

  return {
    fetchRepos,
    repos,
  }
}

export default useItems
