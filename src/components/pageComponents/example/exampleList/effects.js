import { useEffect } from 'react'

export default ({ items, fetchRepos }) => {
  useEffect(() => {
    console.log('componentDidMount example')
    fetchRepos()
  }, [])

  useEffect(() => {
    document.title = `${items.length} items`
    console.log('componentDidUpdate example', items.length)
  }, [items])
}
