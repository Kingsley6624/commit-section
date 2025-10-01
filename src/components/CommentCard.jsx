import React, { useState } from "react";
import replyIcon from "../assets/images/icon-reply.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import Form from "./Form";

const commentCard = ({ username, createdAt, content, score, user }) => {
  const [isReplying, setIsReplying] = useState(false);
  return (
    <div>
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
          <button
            className="flex gap-2 items-center text-[#5457b6ff] font-semibold md:hidden"
            onClick={() => setIsReplying(!isReplying)}
          >
            <img src={replyIcon} alt="" />
            Reply
          </button>
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
              <span className="text-[#67707dff]">{createdAt}</span>
            </div>
            <button
              className="md:flex gap-2 items-center text-[#5457b6ff] font-semibold hidden"
              onClick={() => setIsReplying(!isReplying)}
            >
              <img src={replyIcon} alt="" />
              Reply
            </button>
          </div>
          <p className="text-[#67707dff]">{content}</p>
        </div>
      </div>
      {isReplying && (
        <Form
          buttonLabel={"REPLY"}
          placeholder={"Add a reply..."}
          onSubmit={(text) => console.log(text)}
          setIsReplying={setIsReplying}
        />
      )}
    </div>
  );
};

export default commentCard;
