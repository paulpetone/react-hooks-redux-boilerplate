import { Link } from 'gatsby'
import Layout from '@components/layout'
import Image from '@components/image'
import SEO from '@components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This boilerplate uses gatsby, react hooks, redux and stylus.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <Link to="/example/">Go to example</Link>
    </div>
    <div>
      <Link to="/about/">Go to about</Link>
    </div>
  </Layout>
)

export default IndexPage
