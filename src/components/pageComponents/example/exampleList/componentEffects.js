import { useEffect } from 'react'

export default ({ items }) => {
  useEffect(() => {
    console.log('componentDidMount example')
  }, [])

  useEffect(() => {
    document.title = `${items.length} items`
    console.log('componentDidUpdate example', items.length)
  }, [items])
}
