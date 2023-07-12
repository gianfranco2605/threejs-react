import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
  return (
    <main className="app transition-all easi-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
