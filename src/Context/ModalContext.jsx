import React, { createContext, useContext, useState } from "react";
import DeleteModal from "../components/DeleteModal";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);
export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);
  return (
    <ModalContext.Provider value={{ isModalVisible, showModal, hideModal }}>
      {children}
      {isModalVisible && (
        <DeleteModal onCancel={hideModal} onConfirm={() => hideModal} />
      )}
    </ModalContext.Provider>
  );
};
