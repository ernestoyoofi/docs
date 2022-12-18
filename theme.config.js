export default {
  logo: <strong>Mzea Docs</strong>,
  titleTemplate: " - Mzea Docs",
//  project: {
//    link: "https://github.com/ernestoyoofi/docs"
//  },
  docsRepositoryBase: 'https://github.com/ernestoyoofi/docs/blob/main/',
  useNextSeoProps() {
    return {
    titleTemplate: '%s – Mzea Docs'
    }
  },
  navigation: {
    next: true,
    prev: true
  },
  darkMode: true,
  editLink: {
    text: "🖋️ Sunting halaman ini"
  },
  feedback: {
    content: () => <>💬 Ada pertanyaan ?</>,
    labels: 'feedback'
  },
  footer: {
    text: <div style={{ width: "100%", maxWidth: "750px", margin: "auto" }}>
      <div style={{ display: "flex" }}>
        <ul>
          <li>A</li>
        </ul>
      </div>
      <p style={{ textAlign: "center" }}>© Mzea</p>
    </div>,
  },
}
