import { createContext, useContext, useState, useEffect } from "react";
import user from "../data.json";
import { comment } from "postcss";

const ResourcesContext = createContext();
const { comments = [], currentUser = {} } = user;

const NewTime = new Date();
let hour = NewTime.getHours()
const minutes = NewTime.getMinutes()
const amOrPm = hour >= 12 ? "PM" : "AM";
hour = hour % 12 || 12;
const paddedMinutes = minutes.toString().padStart(2, "0");
const currentTime = `${hour}:${paddedMinutes} ${amOrPm}`;


export const useResources = () => useContext(ResourcesContext);
export const ResourcesProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("commentsData");
    return storedData ? JSON.parse(storedData) : comments;
  });

  

  useEffect(() => {
    localStorage.setItem("commentsData", JSON.stringify(data));
  }, [data]);

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
      { id: Date.now(), content: newComment, user: currentUser, score: 0, createdAt: currentTime, },
    ]);
  };
  const handleReply = (parentId, replyContent, replyingTo) => {
    const newReply = {
      id: Date.now(),
      content: replyContent,
      user: currentUser,
      createdAt: currentTime,
      score: 0,
      replyingTo: replyingTo
    };
   setData((prev) =>
  prev.map((comment) => {
    if (comment.id === parentId) {
      return {
        ...comment,
        replies: [...(comment.replies || []), newReply],
      };
    }

    return {
      ...comment,
      replies: comment.replies?.map((reply) =>
        reply.id === parentId
          ? {
              ...reply,
              replies: [...(reply.replies || []), newReply],
            }
          : reply
      ),
    };
  })
);
  };
  return (
    <ResourcesContext.Provider
      value={{ data, currentUser, setData, handleDelete, handleAdd, handleEdit, handleReply }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};
export default ResourcesContext;
