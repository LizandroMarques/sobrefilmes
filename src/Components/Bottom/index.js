import { Link } from "react-router-dom";
import { useMenu } from "../../context/MenuContext";

function Bottom() {
  const { setMenuAtivo } = useMenu();
  return (
    <div className="w-full h-14 flex justify-end items-center  bg-amber-900/35 text-amber-50 p-4 gap-4">
      <h2 className="flex w-full h-full m-2.5"></h2>
      <strong className="hover:text-white hover:font-bold text-4xl">
        <a href="https://wa.me/5553999663344">
          <i class="fa fa-whatsapp"></i>
        </a>
      </strong>
      <strong className="text-4xl mr-2">
        <Link to="/sobre" onClick={() => setMenuAtivo("-")}>
          <i class="fa fa-film"></i>
        </Link>
      </strong>
    </div>
  );
}

export default Bottom;
