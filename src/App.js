import RoutesApp from "./routes";
import fundo from "./assets/fundo.png";
import { ToastContainer } from "react-toastify";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <div
      className="min-h-screen w-screen bg-no-repeat bg-center bg-cover bg-fixed flex flex-col"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <MenuProvider>
        <ToastContainer autoClose={1000} />
        <RoutesApp />
      </MenuProvider>
    </div>
  );
}

export default App;
