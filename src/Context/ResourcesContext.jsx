import { createContext, useContext, useState, useEffect } from "react";
import user from "../data.json";
import { comment } from "postcss";

const ResourcesContext = createContext();
const { comments = [], currentUser = {} } = user;

export const useResources = () => useContext(ResourcesContext);
export const ResourcesProvider = ({ children }) => {
  const [data, setData] = useState(comments);

  

const handleEdit = (id, newContent) => {
  setData((prev) =>
    prev.map((comment) => {
      if (comment.id === id) {
        return { ...comment, content: newContent };
      }
      return {
        ...comment,
        replies: comment.replies?.map((reply) =>
          reply.id === id ? { ...reply, content: newContent } : reply
        ),
      };
    })
  );
};

const handleDelete = (id) => {
  setData((prev) =>
    prev
      .filter((comment) => comment.id !== id)
      .map((comment) => ({
        ...comment,
        replies: comment.replies?.filter((reply) => reply.id !== id),
      }))
  );
};

  const handleAdd = (newComment) => {
    setData((prev) => [
      ...prev,
      { id: Date.now(), content: newComment, user: currentUser },
    ]);
  };
  return (
    <ResourcesContext.Provider
      value={{ data, currentUser, setData, handleDelete, handleAdd, handleEdit }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
export default ResourcesContext;
