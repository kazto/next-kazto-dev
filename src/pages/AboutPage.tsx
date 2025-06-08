import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About">
      <div className="about">
          <p>I'm Kazto.</p>
          <ul>
              <li>ソフトウェア エンジニア</li>
              <ul>
                  <li>サーバサイド・バックエンド</li>
                  <li>フロントエンド</li>
                  <li>Flutter</li>
                  <li>インフラ・CI/CD</li>
              </ul>
          </ul>
          <hr/>
          <h2>副業募集</h2>
          <p>現在、本業多忙につき募集しておりません。またタイミングが合えば、よろしくお願いいたします。</p>
          <p>職務経歴は「<a href={"/cv"}>Curriculum Vitae</a>」をご参照ください。</p>
          <hr/>
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
          <hr/>
          <p>仕事とは、いつも困難が降りかかり、つらく、きびしいものです。</p>
          <p>しかし、仕事が我が事であるかぎり、それは乗り越えるべき壁であると考えています。</p>
          <p>一方で、つらさ、きびしさに打ち負けてしまう方も数多くいらっしゃいます。</p>
          <p>少しでも、仕事が『おもしろい』ものであると感じることができる方を増やしたいという想いで勤めています。</p>
          <p><a href="/">return home</a></p>

          <span>
              Photo by{" "}
              <a href="https://unsplash.com/@ielix?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Elia Clerici
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/@kazto/likes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
              </a>
          </span>
      </div>
  </Layout>
);

export default AboutPage;