import React from "react";
import Comment from "./components/Comment";
import DeleteToast from "./components/DeleteModal";
import { ModalProvider } from "./Context/ModalContext";

const App = () => {
  return (
    <ModalProvider>
      <div className="font-rubik">
        <Comment />
      </div>
    </ModalProvider>
  );
};

export default App;
