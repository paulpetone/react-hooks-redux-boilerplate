import { useSelector } from 'react-redux'
import { pathOr } from 'ramda'

// Hooks
import useItems from 'hooks/useItems'
import useFetcher from 'hooks/useFetcher'

export default () => {
  const { items, addItem } = useItems()
  const fetcher = useFetcher()

  /*
    "fetchRepos" and "repos" variables could be in a separate hook for reusability
    Ex:
      const { repos, fetchRepos } = useRepos()

    ** use the existing hooks at "./src/hooks" as a reference 
  */

  const fetchRepos = () => {
    fetcher({
      key: 'repos',
      url: 'https://api.github.com/users/paulpetone/repos',
    })
  }

  const repos = useSelector(state => pathOr([], ['requests', 'repos'], state))

  return {
    addItem,
    items,
    fetchRepos,
    repos,
  }
}
