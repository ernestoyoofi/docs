import Image from "next/image"
import { useEffect } from "react"
import WAchat from "../styles/wa-overlay.module.css"

export default function WhatsApp({ data }) {
  if(typeof data != "object") {
    return new Error("Type 'data' is not object / array")
  }
  return (
    <div className={WAchat.background_box}>
      <div className={WAchat.box_chat}>
        <div className={WAchat.chat_assign}>
          <div className={WAchat.message}>
            {data?.image?
              <div className={WAchat.image}>
                <img src={data?.image} width="100%" />
              </div>
            : null}
            <span types-comp="texts">
            {data.message}
            </span>
          </div>
          <div className={WAchat.tail}>
            <Image src="/tail-wa.svg" width="8" height="13" />
          </div>
        </div>
      </div>
    </div>
  )
}