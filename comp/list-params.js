import styles from "../styles/list-params.module.css"

export default function ListParameter({ data, title }) {
  console.log(data)
  if(typeof data != "object" || !Array.isArray(data)) {
    return new Error("Type 'data' is not array object !")
  }
  return (
    <div type-content="parameter">
    <p className={styles.title_page}>{title}</p>
    {data.map(z => (
      <div key={`index`} className={styles.list_params}>
        <span className={styles.title_params}>{z.name}</span> <span className={styles.type_params}>{z.typeOf}</span> {z.require? <span className={styles.req_params}>Require</span> : ""}
        <p>{z.desc}</p>
      </div>
    ))}
    </div>
  )
}