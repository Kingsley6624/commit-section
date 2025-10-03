import React from "react";
import Comment from "./components/Comment";
import { ModalProvider } from "./Context/ModalContext";
import { ResourcesProvider } from "./Context/ResourcesContext";

const App = () => {
  return (
    <ResourcesProvider>
      <ModalProvider>
        <div className="font-rubik">
          <Comment />
        </div>
      </ModalProvider>
    </ResourcesProvider>
  );
};

export default App;
