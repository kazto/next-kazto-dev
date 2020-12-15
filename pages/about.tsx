import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About">
    <p>I'm Kazto.</p>
    <ul>
      <li>ソフトウェア/バックエンド エンジニア</li>
      <li>エンジニアリングマネージャ</li>
      <li>エンジニア採用</li>
    </ul>
    <hr />
    <h2>Vision</h2>
    <div className="vmv">Engineering More Interesting.</div>
    <div className="vmv">しごとを、もっと、おもしろく。</div>
    <h2>Mission</h2>
    <ul>
      <li>ともに成長する</li>
      <li>三方良しを実現する</li>
      <li>つらみを排し、仕事に熱中できる環境を提供する</li>
    </ul>
    <h2>Value</h2>
    <ul>
      <li>いいオヤジたる</li>
      <li>調和を提供する</li>
      <li>革新を追求する</li>
    </ul>
    <hr />
    <p>仕事とは、いつも困難が降りかかり、つらく、きびしいものです。</p>
    <p>しかし、仕事が我が事であるかぎり、それは乗り越えるべき壁であると考えています。</p>
    <p>一方で、つらさ、きびしさに打ち負けてしまう方も数多くいらっしゃいます。</p>
    <p>少しでも、仕事が『おもしろい』ものであると感じることができる方を増やしたいという想いで勤めています。</p>
    <p>
      <Link href="/">
        <a>return home</a>
      </Link>
    </p>

    <span>Photo by <a href="https://unsplash.com/@ielix?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Elia Clerici</a> on <a href="https://unsplash.com/@kazto/likes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </Layout>
)

export default AboutPage
