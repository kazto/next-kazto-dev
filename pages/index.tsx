import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="kazto.dev">
    <div className="logobox">
      <img className="logo" src="/kazto_dev_logo.webp" alt="kazto.dev" />
    </div>
    <div style={{ margin: "100px auto", padding: "100" }}>
      <ul className="topul">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cv">Curriculum Vitae</Link>
        </li>
        <li>
          <a href="https://twitter.com/kazto_dev">Twitter</a>
        </li>
        <li>
          <a href="https://lapras.com/public/kazto_dev">Lapras</a>
        </li>
        <li>
          <a href="https://youtrust.jp/users/kazto">YOUTRUST</a>
        </li>
        <li>
          <a href="https://github.com/kazto">GitHub</a>
        </li>
        <li>
          <a href="https://zenn.dev/kazto">Zenn</a>
        </li>
        <li>
          <a href="https://blog.kazto.dev/">Blog</a>
        </li>
        <li>
          <a href="https://www.wantedly.com/users/75211914">Wantedly</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kazto/">LinkedIn</a>
        </li>
        <li>
          <a href="https://note.com/kazto_dev">Note.com</a>
        </li>
        <li>
          <a href="https://teratail.com/users/kazto">Teratail</a>
        </li>
        <li>
          <a href="https://speakerdeck.com/kazto">SpeakerDeck</a>
        </li>
        <li>
          <a href="https://tamamoku.tokyo/">たまもく</a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
