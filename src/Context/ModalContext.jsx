import React, { createContext, useContext, useState } from "react";
import DeleteModal from "../components/DeleteModal";
import { useResources } from "./ResourcesContext";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);
export const ModalProvider = ({ children }) => {
  const { handleDelete } = useResources();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const showModal = (id) => {
    setDeleteId(id);
    setIsModalVisible(true);
  };

  const hideModal = () => {setIsModalVisible(false);
    setDeleteId(null);
  };

  const onConfirm = () => {
    handleDelete(deleteId);
     hideModal();
  };

  return (
    <ModalContext.Provider value={{  showModal, hideModal, onConfirm }}>
      {children}
      {isModalVisible && (
        <DeleteModal />
      )}
    </ModalContext.Provider>
  );
};
