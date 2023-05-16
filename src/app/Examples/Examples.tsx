import Basic from "./Basic/Basic"
import CustomColors from "./CustomColors/CustomColors"
import Range from "./Range/Range"
import "./examples.css"

const Examples = () => {
  return (
    <div className="examples">
      <h1 className="examples-title">Examples</h1>
      <Basic />
      <CustomColors />
      <Range />
    </div>
  )
}
export default Examples