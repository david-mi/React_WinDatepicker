import Testing from "./Testing/Testing"
import Documentation from "./Documentation/Documentation"

const envComponent = {
  "doc": <Documentation />,
  "lib": <Testing />
}
const envMode = import.meta.env.MODE as keyof typeof envComponent

const App = () => {
  return envComponent[envMode]
}

export default App