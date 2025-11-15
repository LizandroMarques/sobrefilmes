import { useNavigate } from "react-router-dom";

export function BotaoVoltar({ children }) {
  const navigate = useNavigate();

  return (
    <span
      className="cursor-pointer m-2 p-2 bg-white/85 hover:bg-amber-500/45 hover:text-white duration-200 rounded-2xl shadow-2xl"
      onClick={() => navigate(-1)}
    >
      {children}
    </span>
  );
}
