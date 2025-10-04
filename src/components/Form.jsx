import React, { useState } from "react";
import user from "../data.json";

const Form = ({ buttonLabel, onSubmit, placeholder, setIsReplying }) => {
  const currentUser = user.currentUser;
  const avatar = currentUser.image;
  const [text, setText] = useState("");

  const handleCommentChange = (e) => {
    setText(e.target.value);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!text.trim()) return;

  await onSubmit(text); // if onSubmit returns a promise
  setText("");
  if (setIsReplying) setIsReplying(false);
};
  return (
    <div className="flex gap-2 bg-white p-4 rounded-lg justify-between items-start mb-4 h-fit">
      <picture>
        <source srcSet={avatar.webp} type="image/webp" />
        <img
          className="w-8 h-8 shrink-0 hidden md:block"
          src={avatar.png}
          alt={user.username}
        />
      </picture>

      <form
        className="w-full flex flex-col md:flex-row  gap-4 justify-between"
        action=""
        onSubmit={handleSubmit}
      >
        <textarea
          className="flex-1 resize-none border border-[#eaecf1ff] rounded-lg py-4 px-6 "
          name=""
          id=""
          rows="2"
          value={text}
          placeholder={placeholder}
          onChange={handleCommentChange}
        ></textarea>
        <div className=" flex justify-between items-center">
          <picture>
        <source srcSet={avatar.webp} type="image/webp" />
        <img
          className="w-8 h-8 shrink-0 md:hidden"
          src={avatar.png}
          alt={user.username}
        />
      </picture>
          <button
            className="relative md:self-start bg-[#5457b6] text-sm w-fit h-fit text-white px-4 py-2 rounded border border-[#5457b6ff] active:bg-[#c3c4efff] before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:opacity-0  hover:before:opacity-100 transition-all"
            type="submit"
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
