import RoutesApp from "./routes";
import fundo from "./assets/fundo.png";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div
      className="min-h-screen w-screen bg-no-repeat bg-center bg-cover bg-fixed flex flex-col"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <ToastContainer autoclose={1000} />
      <RoutesApp />
    </div>
  );
}

export default App;
