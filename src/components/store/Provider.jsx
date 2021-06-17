import React from "react";
import Contex from "./Contex";
import useStorage from "../../utils/useStorage";

const Provider = ({ children }) => {
  const [token, setToken] = useStorage("token");

  return (
    <Contex.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export default Provider;
