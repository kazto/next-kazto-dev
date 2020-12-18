import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'

const IndexPage = () => (
  <Layout title="kazto.dev">
    <div style={{position: "relative", width: '600px', margin: '100px auto', padding: '100'}}>
      <Image
      src="/kazto_dev_logo.png"
      alt="kazto.dev"
      width={1083}
      height={480}
      />
    </div>
    <div style={{margin: '100px auto', padding: '100'}}>
      <ul className="topul">
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/cv"><a>Cariculum Vitae</a></Link>
        </li>
        <li><a href="https://twitter.com/bainarian">Twitter</a></li>
        <li><a href="https://github.com/kazto">GitHub</a></li>
        <li><a href="https://wp.kazto.dev/">Blog</a></li>
        <li><a href="https://www.wantedly.com/users/75211914">Wantedly</a></li>
        <li><a href="https://www.linkedin.com/in/kazto/">LinkedIn</a></li>
        <li><a href="https://teratail.com/users/kazto">Teratail</a></li>
        <li><a href="https://speakerdeck.com/kazto">SpeakerDeck</a></li>
        <li><a href="https://tamamoku.tokyo/">たまもく</a></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
