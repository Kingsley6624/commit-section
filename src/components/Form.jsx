import React, { useState } from "react";
import user from "../data.json";

const Form = ({ buttonLabel, onSubmit, placeholder, setIsReplying }) => {
  const currentUser = user.currentUser;
  const avatar = currentUser.image;
  const [text, setText] = useState("");

  const handleCommentChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
    if (setIsReplying) setIsReplying(false);
  };

  return (
    <div className="flex gap-2 bg-white p-4 rounded-lg justify-between items-start mb-4">
      <picture>
        <source srcSet={avatar.webp} type="image/webp" />
        <img
          className="w-8 h-8 shrink-0"
          src={avatar.png}
          alt={user.username}
        />
      </picture>
      <form
        className="w-full flex gap-4 justify-between"
        action=""
        onSubmit={handleSubmit}
      >
        <textarea
          className="flex-1 resize-none border border-[#eaecf1ff] rounded-lg py-4 px-6"
          name=""
          id=""
          rows="2"
          value={text}
          placeholder={placeholder}
          onChange={handleCommentChange}
        ></textarea>
        <button
          className="bg-[#5457b6] text-sm h-fit text-white px-4 py-2 rounded border border-[#5457b6ff] active:bg-[#c3c4efff]"
          type="submit"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default Form;
