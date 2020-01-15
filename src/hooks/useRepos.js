import { useSelector } from 'react-redux'
import { path, pipe, type } from 'ramda'

const useItems = fetcher => {
  const fetchRepos = () => {
    fetcher({
      key: 'repos',
      url: 'https://api.github.com/users/paulpetone/repos',
    })
  }

  const repos = useSelector(state => {
    const storeRepos = path(['requests', 'repos', 'result'], state)
    const parsedStoreRepoToArrayIfItsNot = pipe(
      data => type(data) === 'Array',
      storeReposIsAnArray => (storeReposIsAnArray ? storeRepos : [])
    )(storeRepos)

    return parsedStoreRepoToArrayIfItsNot
  })

  return {
    fetchRepos,
    repos,
  }
}

export default useItems
