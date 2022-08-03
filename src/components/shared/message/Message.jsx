import "./message.css"

function Message({message,messageType}) {
  return (
    <div className={`message ${messageType=="error" && "error"}`}>{message}</div>
  )
}

export default Message