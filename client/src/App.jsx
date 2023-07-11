import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="app transition-all easi-in">
      <div>hello</div>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
