// Hooks
import useItems from 'hooks/useItems'
import useFetcher from 'hooks/useFetcher'
import useRepos from 'hooks/useRepos'

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
