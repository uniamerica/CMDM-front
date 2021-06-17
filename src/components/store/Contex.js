import { createContext } from "react";

const Contex = createContext({
    token: null,
    setToken: () => {}
})

export default Contex