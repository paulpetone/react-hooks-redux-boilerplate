// Page hooks
import useItems from '@pageHooks/example/useItems'
import useRepos from '@pageHooks/example/useRepos'

// General hooks
import useFetcher from '@hooks/useFetcher'

export default () => {
  const fetcher = useFetcher()
  const { items, addItem } = useItems()
  const { fetchRepos, repos } = useRepos(fetcher)

  return {
    addItem,
    items,
    fetchRepos,
    repos,
  }
}
