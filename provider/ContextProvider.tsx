"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type contextData = {
  SearchModal: boolean;
  handleOpenSearchModal: (SearchModal: boolean) => void;
};
export const Appcontext = createContext({});

const ContextProvider = ({ children }: any) => {
  const [SearchModal, setSearchModal] = useState(false);
  const handleOpenSearchModal = () => {
    setSearchModal(true);
  };
  const handleCloseSearchModal = () => {
    setSearchModal(false);
  };
  useEffect(() => {
    const handleKeyPress = (event:any) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setSearchModal(true)
     
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <Appcontext.Provider
      value={{
        SearchModal,
        handleOpenSearchModal,
        handleCloseSearchModal
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default ContextProvider;
