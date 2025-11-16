import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuAtivo, setMenuAtivo] = useState("emExibicao");

  return (
    <MenuContext.Provider value={{ menuAtivo, setMenuAtivo }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
