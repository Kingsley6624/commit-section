import React, { useState } from "react";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import editIcon from "../assets/images/icon-edit.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import { useModal } from "../Context/ModalContext";
import { useResources } from "../Context/ResourcesContext";

const UserReplyCard = ({ id, replyingTo, content, user, createdAt, score }) => {
  const { data, handleEdit } = useResources();
  const target =
    data.find((c) => c.id === id) ||
    data.flatMap((c) => c.replies || []).find((r) => r.id === id);

  const { showModal, hideModal } = useModal();
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedText, setEditedText] = useState(target?.content || "");

  return (
    <div className=" md:pl-8 ">
      <div className="flex flex-col-reverse md:flex-row gap-4 bg-white p-4 rounded-lg w-full mb-4">
        <div className="flex items-center md:items-start justify-between gap-3">
          <div className="flex md:flex-col items-center justify-between bg-[#f5f6faff]  p-2 rounded-lg gap-7 md:gap-2 w-fit h-fit">
            <button>
              <img src={plusIcon} alt="" />
            </button>
            <span className="text-[#5457b6ff]">{score}</span>
            <button>
              <img src={minusIcon} alt="" />{" "}
            </button>
          </div>
          <div className="flex gap-4 md:hidden">
            <button
              className="flex gap-1 items-center text-[#ed6468ff] font-semibold"
              onClick={() => showModal(id)}
            >
              <img src={deleteIcon} alt="" />
              Delete
            </button>
            <button
              className="flex gap-1 items-center text-[#5457b6ff] font-semibold"
              onClick={() => setIsEditing(!isEditing)}
            >
              <img src={editIcon} alt="" />
              Edit
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2 items-center">
              <picture>
                <source srcSet={user.image.webp} type="image/webp" />
                <img
                  className="w-8 h-8"
                  src={user.image.png}
                  alt={user.username}
                />
              </picture>
              <p className="text-[#324152ff]">{user.username}</p>
              <span className="bg-[#5457b6ff] text-white px-2 rounded">
                you
              </span>
              <span className="text-[#67707dff]">{createdAt}</span>
            </div>
            <div className="md:flex gap-4 hidden">
              <button
                className="flex gap-1 items-center text-[#ed6468ff] font-semibold"
                onClick={() => showModal(id)}
              >
                <img src={deleteIcon} alt="" />
                Delete
              </button>
              <button
                className="flex gap-1 items-center text-[#5457b6ff] font-semibold"
                onClick={() => setIsEditing(!isEditing)}
              >
                <img src={editIcon} alt="" />
                Edit
              </button>
            </div>
          </div>

          <div className="text-[#67707dff]">
            {isEditing ? (
              <div className="border border-gray-300 rounded-md p-2 bg-white text-gray-800 font-sans flex flex-col items-start gap-1">
                <span className="text-blue-600 font-medium">@ramsesmiron</span>
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="flex-1 resize-none border-none outline-none bg-transparent text-gray-800 w-full"
                  rows={3}
                />
                <button
                  onClick={() => {
                    handleEdit(id, editedText);
                    setIsEditing(false);
                  }}
                  className="self-end mt-2 px-4 py-1 bg-[#5457b6ff] text-white rounded"
                >
                  Update
                </button>
              </div>
            ) : (
              <p className="">
                <span className="text-[#5457b6ff] font-semibold">
                  @{replyingTo}{" "}
                </span>
                <span className="text-[#67707dff]">{content}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReplyCard;
