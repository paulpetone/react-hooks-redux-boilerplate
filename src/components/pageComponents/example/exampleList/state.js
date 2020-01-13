import { useState } from "react"

export default () => {
  const [inputValue, setInputValue] = useState("")
  return {
    inputValue,
    setInputValue,
  }
}
