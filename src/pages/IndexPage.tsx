import Layout from "../components/Layout";

const IndexPage = () => {
  const links = [
    {title: "About", url: "/about", image: "button-about.webp"},
    {title: "Curriculum Vitae", url: "/cv", image: "button-cv.webp"},
    {title: "Twitter", url: "https://twitter.com/kazto_dev", image: "button-xtwitter.webp"},
    {title: "Bluesky", url: "https://bsky.app/profile/kazto.dev", image: "button-bluesky.webp"},
    {title: "Lapras", url: "https://lapras.com/public/kazto_dev", image: "button-lapras.webp"},
    {title: "YOUTRUST", url: "https://youtrust.jp/users/kazto", image: "button-youtrust.webp"},
    {title: "GitHub", url: "https://github.com/kazto", image: "button-github.webp"},
    {title: "Zenn", url: "https://zenn.dev/kazto", image: "button-zenn.webp"},
    {title: "Blog(Under Maintainance)", url: "https://blog.kazto.dev", image: "button-blog.webp"},
    {title: "Wantedly", url: "https://www.wantedly.com/users/75211914", image: "button-wantedly.webp"},
    {title: "LinkedIn", url: "https://www.linkedin.com/in/kazto/", image: "button-linkedin.webp"},
    {title: "Note.com", url: "https://note.com/kazto_dev", image: "button-note.webp"},
    {title: "SpeakerDeck", url: "https://speakerdeck.com/kazto", image: "button-speakerdeck.webp"},
    {title: "たまもく", url: "https://tamamoku.tokyo/", image: "button-tamamoku.webp"},
  ]

  return (
  <Layout title="kazto.dev">
    <div className="logobox">
      <img className="logo" src="/kazto_dev_logo.webp" alt="kazto.dev" />
    </div>
    <div className="linkdiv">
      <ul className="linkul">
        {links.map((link, i) => (
          <li className="linkli" key={i}>
            <a href={link.url}><img className="linkbutton" src={"images/" + link.image} alt={link.title} /></a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)};

export default IndexPage;