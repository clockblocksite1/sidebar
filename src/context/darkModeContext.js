import { useReducer, createContext } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const useDarkModeContext = () => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return { darkMode: state.darkMode, dispatch };
};

export default DarkModeReducer;