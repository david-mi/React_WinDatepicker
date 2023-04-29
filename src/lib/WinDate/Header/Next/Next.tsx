interface Props {
  handler: () => void
}

const Next = ({ handler }: Props) => {
  return (
    <button onClick={handler}>↓</button>
  )
}
export default Next