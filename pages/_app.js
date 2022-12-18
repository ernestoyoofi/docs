import "nextra-theme-docs/style.css"

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const newcss = document.createElement("style")
    newcss.innerText ='* { scroll-behavior: smooth; }'
    document.head.appendChild(newcss)
  })
  return <Component {...pageProps} />
}
